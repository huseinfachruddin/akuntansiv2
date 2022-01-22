<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Stocktransaction;
use App\Models\Substocktransaction;
use App\Models\Product;
use App\Models\Akun;
use App\Models\Credit;
use App\Models\Contact;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ReturnController extends Controller
{
    public function getReturnIn(Request $request){
        
        $data = Stocktransaction::with('contact','cashout','credit')->where('return','in');
        
        if (!empty($request->start_date) && !empty($request->end_date)) {
            $request->start_date = date('Y-m-d',strtotime($request->start_date));
            $request->end_date = date('Y-m-d',strtotime($request->end_date));
            $data = $data->whereBetween('date',[$request->start_date,$request->end_date]);
        }
        // else{
        //     $data = $data->whereBetween('date',[date('Y-m-01',time()),date('Y-m-d',time())]);
        // }
        $data = $data->get();

        $response = [
            'success'=>true,
            'stocktransaction'=>$data,
        ];

        return response($response,200);
    }

    public function getReturnOut(Request $request){
        $data = Stocktransaction::with('contact','cashin','credit')->where('return','out');
        
        if (!empty($request->start_date) && !empty($request->end_date)) {
            $request->start_date = date('Y-m-d',strtotime($request->start_date));
            $request->end_date = date('Y-m-d',strtotime($request->end_date));
            $data = $data->whereBetween('date',[$request->start_date,$request->end_date]);
        }
        // else{
        //     $data = $data->whereBetween('date',[date('Y-m-01',time()),date('Y-m-d',time())]);
        // }

        $data = $data->get();

        $response = [
            'success'=>true,
            'stocktransaction'=>$data,
        ];

        return response($response,200);
    }

    public function getReturnDetail(Request $request){
        $data = Stocktransaction::where('id',$request->id)->with('contact','substocktransaction','substocktransaction.product')->get();
        $response = [
            'success'=>true,
            'stocktransaction'=>$data,

        ];
        
        return response($response,200);
    }
    
    public function createReturnIn(Request $request){

        $request->validate([
            'staff' =>'required',
            'date' =>'required',
            'cashout_id' =>'required',
            'payment_due' =>'required',
            'contact_id' =>'required',

            'product_id.*' =>'required',
            'qty.*'  =>'required',
            'purchase_price.*'  =>'required',
            'total.*'  =>'required|numeric',
        ]); 

        
        $stock = new Stocktransaction;
        $stock->staff = $request->staff;
        $stock->date = date("Y-m-d", strtotime($request->date));
        $stock->cashout_id = $request->cashout_id;
        $stock->contact_id = $request->contact_id;
        $stock->payment_due = date("Y-m-d", strtotime($request->payment_due));
        $stock->contact_id = $request->contact_id;

        $stock->return = 'in';
        $stock->save();

        $data = $request->product_id;
        $total = 0;
        foreach ( $data as $key => $value) {
            $sub = new Substocktransaction;
            $sub->stocktransaction_id = $stock->id;
            $sub->product_id = $request->product_id[$key];
            $sub->qty = $request->qty[$key];
            $sub->purchase_price = $request->purchase_price[$key];
            $sub->selling_price = $request->selling_price[$key];
            $sub->left = $request->qty[$key];
            $sub->total =  ($request->qty[$key]*$request->purchase_price[$key]);
            $sub->save();

            $substocktransaction[]= $sub;

            $product = Product::find($sub->product_id);
            $product->qty = $product->qty + $sub->qty;
            $product->save();

            $total = $total + $request->total[$key];
        }      

        $stock = Stocktransaction::find($stock->id);
        $stock->total = $total;
        $stock->paid = $request->paid;
        $stock->save();

        $credit = new Credit;
        $credit->stocktransaction_id = $stock->id;
        $credit->cashout_id = $request->cashout_id;
        $credit->total = $request->paid;
        $credit->save();

        $response = [
            'success'=>true,
            'stockktransaction'=>$stock,
            'substocktransaction'=>$substocktransaction,
        ];

        return response($response,200);
    }

    public function createReturnOut(Request $request){

        $request->validate([
            'staff' =>'required',
            'date' =>'required',
            'cashin_id' =>'required',
            'contact_id' =>'required',

            'product_id.*' =>'required',
            'qty.*'  =>'required',
        ]); 

        $contact = Contact::where('id',$request->contact_id)->first();
        $sum = 0;

        $stock = new Stocktransaction;
        $stock->staff = $request->staff;
        $stock->date = date("Y-m-d", strtotime($request->date));
        $stock->cashin_id = $request->cashin_id;
        $stock->return = 'out';
        $stock->payment_due = date("Y-m-d", strtotime($request->payment_due));
        $stock->contact_id = $request->contact_id;

        $stock->save();

        $data = $request->product_id;
        $total = 0;
        $totalhpp=0;
        $lasthb=0;
        foreach ( $data as $key => $value) {
            $sub = new Substocktransaction;
            $sub->stocktransaction_id = $stock->id;
            $sub->product_id = $request->product_id[$key];
            $sub->qty = $request->qty[$key];
            $sub->purchase_price = $request->purchase_price[$key];

            $sub->save();

            $substocktransaction[]= $sub;

            $product = Product::find($sub->product_id);
            $product->qty = $product->qty - $sub->qty;
            $product->save();
            
            $qty = $sub->qty;
            $subin = Substocktransaction::where('left','>',0)
            ->whereHas('stocktransaction',function($query){
                $query->whereNull('pending');
            })->where('product_id','=',$sub->product_id)->orderBy('id','ASC')->get();
            foreach ($subin as $key => $value) {
                if ($qty <= $value->left) {

                    $set = $value->left-$qty;
                    
                    $sibin = Substocktransaction::find($value->id);
                    $sibin->left = $set;
                    $sibin->save();

                    $totalhpp = $totalhpp +($value->purchase_price * $qty);
                    break;
                }else{
                    $set = 0;
                    $qty = $qty - $value->left;
                    $totalhpp = $totalhpp + ($value->purchase_price * $value->left);

                    $sibin = Substocktransaction::find($value->id);
                    $sibin->left = $set;
                    $sibin->save();
                }
            }
            $sibin = Substocktransaction::find($sub->id);
            $sibin->hpp = 0;
            $sibin->total = $sub->qty*$sub->purchase_price;
            $sibin->save();

            $total = $total + $sibin->total;     
        }

        $stock = Stocktransaction::find($stock->id);
        $stock->total = $total;
        $stock->paid = $request->paid;
        $stock->save();

        $credit = new Credit;
        $credit->stocktransaction_id = $stock->id;
        $credit->cashin_id = $request->cashin_id;
        $credit->total = $request->paid;
        $credit->save();

        $response = [
            'success'=>true,
            'stockktransaction'=>$stock,
            'substocktransaction'=>$substocktransaction,
        ];
        return response($response,200);
    }
}
