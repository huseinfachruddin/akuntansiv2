(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12c854b5"],{"0559":function(t,e,n){},"63d5":function(t,e,n){"use strict";n("0559")},f6ba:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("h3",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.$company.company)+" ")]),n("p",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.$company.address)+" ")]),t._m(1),n("div",{staticStyle:{display:"inline-block",float:"left"}},[null==t.list_pay["pending"]?n("h4",{staticStyle:{margin:"0"}},[t._v("NOTA PENJUALAN")]):t._e(),1==t.list_pay["pending"]?n("h4",{staticStyle:{margin:"0"}},[t._v("PESANAN PENJUALAN")]):t._e(),null==t.list_pay["pending"]?n("pre",[t._v("NO transaksi  : "+t._s(t.trans)+"\nTGL Transaksi : "+t._s(t.list_pay["date"])+"\nJATUH TEMPO   : "+t._s(t.list_pay["payment_due"])+"\n\t")]):t._e(),1==t.list_pay["pending"]?n("pre",[t._v("NO transaksi  : "+t._s(t.trans)+"\nTGL Transaksi : "+t._s(t.list_pay["date"])+"\n  ")]):t._e()]),n("div",{staticStyle:{display:"inline",float:"right"}},[n("h4",{staticStyle:{margin:"0"}},[t._v("KEPADA :")]),n("pre",[t._v(t._s(t.contact.name)+"\n"+t._s(t.contact.contact)+"\n"+t._s(t.contact.address)+"\n\t")])]),n("table",{staticStyle:{"border-collapse":"collapse"},attrs:{border:"1",width:"100%"}},[t._m(2),n("tbody",[t._l(t.list,(function(e,a){return n("tr",[n("td",{staticStyle:{padding:"10px","text-align":"right"}},[t._v(t._s(a+1))]),n("td",{staticStyle:{padding:"8px","text-align":"left"}},[t._v(t._s(e["product"]["name"]))]),n("td",{staticStyle:{padding:"8px","text-align":"right"}},[t._v(t._s(e["qty"]))]),n("td",{staticStyle:{padding:"8px","text-align":"center"}},[t._v(t._s(e["product"]["unit"]["name"]))]),n("td",{staticStyle:{padding:"8px","text-align":"right"}},[t._v(t._s(t.handleCurrency(e["total"]/e["qty"])))]),n("td",{staticStyle:{padding:"8px","text-align":"right"}},[t._v(t._s(t.handleCurrency(e["total"])))])])})),n("tr",[n("td",{staticStyle:{"text-align":"right",padding:"8px"},attrs:{colspan:"5"}},[t._v("Total")]),n("td",{staticStyle:{"text-align":"right",padding:"8px"},attrs:{colspan:"1"}},[t._v(t._s(t.handleCurrency(t.total)))])]),n("tr",[n("th",{staticStyle:{"text-align":"right",padding:"8px"},attrs:{colspan:"5"}},[t._v("Potongan")]),n("td",{staticStyle:{"text-align":"right",padding:"8px"},attrs:{colspan:"1"}},[t._v(t._s(t.handleCurrency(t.listCredit["discount"])))])]),n("tr",[n("th",{staticStyle:{"text-align":"right",padding:"8px","font-weight":"bold"},attrs:{colspan:"5"}},[t._v("Total Akhir")]),n("td",{staticStyle:{"text-align":"right",padding:"8px","font-weight":"bold"},attrs:{colspan:"1"}},[t._v(t._s(t.handleCurrency(t.total-t.listCredit["discount"])))])]),n("tr",[n("th",{staticStyle:{"text-align":"right",padding:"8px","font-weight":"bold"},attrs:{colspan:"5"}},[t._v("Pembayaran")]),n("td",{staticStyle:{"text-align":"right",padding:"8px","font-weight":"bold"},attrs:{colspan:"1"}},[t._v(t._s(t.handleCurrency(t.listCredit["paid"])))])]),n("tr",[n("th",{staticStyle:{"text-align":"right",padding:"8px"},attrs:{colspan:"5"}},[t._v("Kekurangan")]),n("td",{staticStyle:{"text-align":"right",padding:"8px"},attrs:{colspan:"1"}},[t._v(t._s(t.handleCurrency(t.listCredit["total"]-t.listCredit["paid"]-t.listCredit["discount"])))])])],2)]),n("div",{staticStyle:{display:"inline-block",border:"0px solid",width:"40%"}},[n("pre",[t._v("\n\t(\t  \t\t\t  )\n\n\t       "+t._s(t.$company.company)+"\n\t")])]),t._m(3)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b",[n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b",[n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticStyle:{background:"rgba(100,100,100, 0.3)",width:"100%"}},[n("tr",[n("th",{staticStyle:{width:"50px","text-align":"left",padding:"10px"}},[t._v("NO")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("NAMA BARANG")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("JUMLAH")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("SATUAN")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("HARGA SATUAN")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("SUB TOTAL")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block","margin-left":"10px",float:"right",border:"0px solid",width:"40%"}},[n("pre",[t._v("\n\t(\t  \t\t\t  )\n\n\t              PEMBELI\n\t")])])}],i=n("1da1"),s=(n("d3b7"),n("96cf"),n("0d5e")),c={data:function(){return{list:[],total:"",contact:[],trans:"",list_pay:"",listCredit:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("user/isLicenceActived"),e.next=3,t.getList();case 3:return e.next=5,t.print();case 5:case"end":return e.stop()}}),e)})))()},methods:{getList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].get("/stock/transaction/detail/".concat(t.$route.params.id)).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,n.data.stocktransaction[0].substocktransaction;case 3:return t.list=e.sent,e.next=6,n.data.stocktransaction[0];case 6:return t.list_pay=e.sent,e.next=9,n.data.stocktransaction[0];case 9:return t.listCredit=e.sent,e.next=12,n.data.stocktransaction[0].contact;case 12:t.contact=e.sent;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return e.next=4,t.list.reduce((function(t,e){return t+parseInt(e.total)}),0);case 4:return n=e.sent,e.next=7,t.$route.params.id;case 7:t.trans=e.sent,t.total=n;case 9:case"end":return e.stop()}}),e)})))()},handleCurrency:function(t){var e=new Intl.NumberFormat("in-IN",{style:"currency",currency:"IDR"}).format(t);return e},print:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.print();case 2:case"end":return t.stop()}}),t)})))()}}},l=c,d=(n("63d5"),n("2877")),o=Object(d["a"])(l,a,r,!1,null,null,null);e["default"]=o.exports}}]);