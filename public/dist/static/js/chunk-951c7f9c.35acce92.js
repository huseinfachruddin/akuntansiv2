(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-951c7f9c"],{bf90:function(t,e,n){},e1e7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("h3",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.$company.company)+" ")]),n("p",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.$company.address)+" ")]),t._m(1),n("div",{staticStyle:{display:"inline-block",float:"left"}},[n("h4",{staticStyle:{margin:"0"}},[t._v("SURAT JALAN")]),n("pre",[t._v("NO transaksi  : "+t._s(t.trans)+"\nTGL Transaksi : "+t._s(t.list_pay["date"])+"\nNO Kendaraan  :\n\t")])]),n("div",{staticStyle:{display:"inline",float:"right"}},[n("h4",{staticStyle:{margin:"0"}},[t._v("KEPADA")]),n("pre",[t._v(t._s(t.contact.name)+"\n"+t._s(t.contact.contact)+"\n"+t._s(t.contact.address)+"\n\t")])]),n("table",{staticStyle:{"border-collapse":"collapse"},attrs:{border:"1",width:"100%"}},[t._m(2),n("tbody",[t._l(t.list,(function(e,r){return n("tr",[n("td",{staticStyle:{padding:"10px","text-align":"right"}},[t._v(t._s(r+1))]),n("td",{staticStyle:{"text-align":"left"}},[t._v(t._s(e["product"]["name"]))]),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e["qty"]))]),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e["product"]["unit"]["name"]))])])})),n("tr",[n("td",{staticStyle:{"text-align":"center",padding:"8px","font-weight":"bold"},attrs:{colspan:"2"}},[t._v("TOTAL")]),n("td",{staticStyle:{"text-align":"center",padding:"8px","font-weight":"bold"},attrs:{colspan:"2"}},[t._v(t._s(t.jumlah_barang))])])],2)]),n("div",{staticStyle:{display:"inline-block",border:"0px solid",width:"40%"}},[n("pre",[t._v("\n\t\t\tTTD\n\n\t(\t  \t\t\t  )\n\n\t\t  "+t._s(t.$company.company)+"\n\t")])]),t._m(3)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b",[n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b",[n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticStyle:{background:"rgba(100,100,100, 0.3)",width:"100%"}},[n("tr",[n("th",{staticStyle:{width:"50px","text-align":"center",padding:"10px"}},[t._v("NO")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("NAMA BARANG")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("JUMLAH")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("SATUAN")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block","margin-left":"10px",float:"right",border:"0px solid",width:"40%"}},[n("pre",[t._v("\n\tTTD\n\n\t(\t  \t\t\t  )\n\n\t\t    PENERIMA\n\t")])])}],c=n("1da1"),i=(n("d3b7"),n("96cf"),n("0d5e")),s={data:function(){return{list:[],total:"",list_pay:"",jumlah_barang:"",contact:[],trans:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("user/isLicenceActived"),e.next=3,t.getList();case 3:return e.next=5,t.print();case 5:case"end":return e.stop()}}),e)})))()},methods:{getList:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].get("/stock/transaction/detail/".concat(t.$route.params.id)).then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,n.data.stocktransaction[0].substocktransaction;case 3:return t.list=e.sent,e.next=6,n.data.stocktransaction[0];case 6:return t.list_pay=e.sent,e.next=9,n.data.stocktransaction[0].contact;case 9:t.contact=e.sent;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return e.next=4,t.list.reduce((function(t,e){return t+parseInt(e.qty)}),0);case 4:return n=e.sent,e.next=7,n;case 7:return t.jumlah_barang=e.sent,e.next=10,t.$route.params.id;case 10:t.trans=e.sent,t.total=t.list[0]["total"]*n;case 12:case"end":return e.stop()}}),e)})))()},handleCurrency:function(t){var e=new Intl.NumberFormat("in-IN",{style:"currency",currency:"IDR"}).format(t);return e},print:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.print();case 2:case"end":return t.stop()}}),t)})))()}}},l=s,o=(n("e834"),n("2877")),u=Object(o["a"])(l,r,a,!1,null,null,null);e["default"]=u.exports},e834:function(t,e,n){"use strict";n("bf90")}}]);