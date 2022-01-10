<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Akun;
use App\Models\User;
use App\Models\Cashtransaction;
use App\Models\Credit;
use Illuminate\Support\Facades\DB;

class SetingcashController extends Controller
{
    private $total;

    public function getCashData(Request $request){
        $cash = Akun::withCount(['creditin as sum_stockin' =>function($credit) use($request){
            $credit->whereHas('stocktransaction',function($stock) use($request){
                $stock = $stock->whereNotNull('cashin_id')->whereNull('pending');

            })->select(DB::raw("SUM(total)"));
        },
        // CREDIT STOCK KELUAR = menghitung uang keluar dari stock
        'creditout as sum_stockout' =>function($credit) use($request){
            $credit->whereHas('stocktransaction',function($stock) use($request){
                $stock = $stock->whereNotNull('cashout_id')->whereNull('pending');
            })->select(DB::raw("SUM(total)"));    
        },
        // CASH FROM = menghitung cash sebagai akun
        'cashtransactionfrom as sum_cashfrom' =>function($cash) use($request){
            $cash->select(DB::raw("SUM(cashout+transfer)"));
        },
        // CASH TO = menghitung cash sebagai akun
        'cashtransactionto as sum_cashto' =>function($cash) use($request){
            $cash->select(DB::raw("SUM(cashin+transfer)"));
        }])->where('iscash',true)->get();
    
        foreach ($cash as $key => $value) {
            $value->total = ($value->sum_stockin - $value->sum_stockout)+($value->sum_cashto - $value->sum_cashfrom );
        }
      return $cash;
    }
    public function getCash(Request $request){
        $cash = Akun::where('name','Kas dan Bank')->first();
        $data = Akun::where('perent_id',$cash->id)->with('role');
        if ($request->in==true) {
            $data = $data->where('iscashin',true);
        }
        if ($request->out==true) {
            $data = $data->where('iscashout',true);
        }
        
        if ($request->user()->hasRole('admin')) {
            $data = $data->get();
        }else {
            $data = $data->whereHas('role',function($role) use($request){
                $role->where('roles.name',$request->user()->roles[0]->name);
            })->get();
        }

        $response = [
            'success'=>true,
            'cashuser'  =>$data,
        ];

        return response($response,200);
    }

    public function createCash(Request $request){
        
        $request->validate([
            'name' =>'required|unique:akuns,name',
            'iscashout'  =>'required|boolean',
            'iscashin'  =>'required|boolean',
            'role'  =>'nullable',
        ]);
        $cash = Akun::where('name','Kas dan Bank')->first();

        $data = new Akun;
        $data->name = $request->name;
        $data->perent_id = $cash->id;
        $data->iscash = true;
        $data->isheader = false;
        $data->iscashout = $request->iscashout;
        $data->iscashin = $request->iscashin;
        $data->save();

        if (!empty($request->role)) {
            foreach ($request->role as $key => $value) {
                $data->role()->attach($value);
            }
        }

        $response = [
            'success'=>true,
            'cashuser'  =>$data,
        ];

        return response($response,200);
    }

    public function editCash(Request $request){
        $data = Akun::find($request->id);
        $request->validate([
            'name' =>'required|unique:akuns,name,'.$data->id,
            'iscashout'  =>'required|boolean',
            'iscashin'  =>'required|boolean',
            'role'  =>'nullable',
        ]);

        $data->name = $request->name;
        $data->iscashout = $request->iscashout;
        $data->iscashin = $request->iscashin;
        $data->save();

        if (!empty($request->role)) {
            $data->role()->detach();
            foreach ($request->role as $key => $value) {
                $data->role()->attach($value);
            }
        }
        $response = [
            'success'=>true,
            'cashuser'  =>$data,
        ];

        return response($response,200);
    } 

    public function deleteCash(Request $request){
        $data = Akun::find($request->id);
        $credit=Credit::where('cashin_id',$request->id)->orWhere('cashout_id',$request->id)->first();
        $cashtransaction=Cashtransaction::where('to',$request->id)->orWhere('from',$request->id)->first();
            if ($credit || $cashtransaction) {
                $response = [
                    'success'=>false,
                    'errors'  =>['msg'=>['Kas Tidak bisa dihapus karena telah digunakan sebagai transaksi']],
                ];
        
                return response($response,401);
            }
        $data->delete(); 
        $response = [
            'success'=>true,
            'cashuser'  =>$data,
        ];

        return response($response,200);
    }
}
