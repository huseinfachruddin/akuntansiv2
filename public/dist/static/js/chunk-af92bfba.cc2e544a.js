(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af92bfba"],{1:function(t,e){},"1c18":function(t,e,a){},2423:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return s}));var n=a("b775");function i(t){return Object(n["a"])({url:"/vue-element-admin/article/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function o(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=s(),i=t-n,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var s=Math.easeInOutQuad(u,n,i,e);o(s),u<e?r(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("e498"),a("2877")),h=Object(d["a"])(c,n,i,!1,null,"6af373ef",null);e["a"]=h.exports},5427:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container",staticStyle:{background:"yellow",display:"flex","align-items":"center","justify-content":"center"}},[a("h4",[t._v("TOTAL HUTANG BEREDAR : "+t._s(t.handleCurrency(t.total_hutang)))])]),a("br"),a("br"),a("br"),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list.filter((function(e){var a=e.contact;return!t.search||a.name.toLowerCase().includes(t.search.toLowerCase())})),border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{prop:"cashin",label:"ID",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.id))])]}}])}),a("el-table-column",{attrs:{label:"Customer","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[null!=n.contact?a("span",{staticClass:"link-type",on:{click:function(e){return t.handleUpdate(n)}}},[t._v(t._s(n.contact.name))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"Total Tagihan",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.total)))])]}}])}),a("el-table-column",{attrs:{label:"Piutang",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.total-n.paid)))])]}}])}),a("el-table-column",{attrs:{label:"Jatuh Tempo",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.payment_due))])]}}])}),a("el-table-column",{attrs:{label:"Jumlah Bayar",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.paid)))])]}}])}),a("el-table-column",{attrs:{label:"Potongan",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.discount)))])]}}])}),a("el-table-column",{attrs:{width:"150px",align:"center",prop:"date",label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.date))])]}}])}),a("el-table-column",{attrs:{label:"Staff",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.staff))])]}}])})],1)],1)},i=[],r=a("1da1"),o=a("5530"),s=(a("96cf"),a("d3b7"),a("99af"),a("4de4"),a("b0c0"),a("4e82"),a("d81d"),a("a434"),a("3ca3"),a("ddb0"),a("b680"),a("ac1f"),a("5319"),a("2423")),l=a("6724"),u=(a("ed08"),a("333d")),c=a("0d5e"),d=a("4328"),h=a.n(d),p=a("e350"),f=a("2f62"),g=[{key:"cash",display_name:"cash"},{key:"modal",display_name:"modal"}],m=g.reduce((function(t,e){return t[e.key]=e.display_name,t}),{}),y={name:"ComplexTable",components:{Pagination:u["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return m[t]}},computed:Object(o["a"])({},Object(f["b"])(["name","avatar","roles"])),data:function(){return{total_hutang:0,start:"",end:"",dates:"",discount:0,jatuh_tempo:"",qty_before:"",index_before:"",Pembayaran_sebelum:"",jumlah_bayar:0,kurang_bayar:"",sisa_bayar:"",kembalian:"",config:{spinner:!1,step:10,prefix:"Rp ",precision:0,decimal:",",thousands:".",bootstrap:!0,amend:!1,masked:!1},category:"",kontak:[],kas:[],search:"",product:[],contact_id:"",cashout_id:"",satuan:"",producttype:"",hutang:"",jenis_barang:"",keterangan:"",selling_price:"",purchase_price:"",qty:"",unit:"",from:"",to_item:"",total_kasIn:"",pemasukan:"",kasIn:{all:[{product_id:"",total:"",qty:"",harga:0}]},tableKey:0,list:null,total:0,listLoading:!0,loading:!1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:g,cash:[],modal:[],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,code:"",date:"",timestamp:new Date,title:"",to:"",chasin:"",total:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("user/isLicenceActived"),e.next=3,t.getList();case 3:return e.next=5,print();case 5:a=(new Date).getDate(),n=(new Date).getMonth()+1,i=(new Date).getFullYear(),t.jatuh_tempo="".concat(i,"-").concat(n,"-").concat(a),t.dates="".concat(i,"-").concat(n,"-").concat(a);case 10:case"end":return e.stop()}}),e)})))()},methods:{checkPermission:p["a"],handleChangeText:function(t){this.onChangeQty(this.index_before),this.onChangeQty,"create"==this.dialogStatus?this.jumlah_bayar>this.total_kasIn?(this.sisa_bayar=this.jumlah_bayar+this.discount-this.total_kasIn,this.kurang_bayar=""):(this.kurang_bayar=this.total_kasIn-(this.jumlah_bayar+this.discount),this.sisa_bayar=""):this.kurang_bayar=this.total_kasIn-(this.jumlah_bayar+this.Pembayaran_sebelum)},filterHandler:function(t,e,a){var n=a["property"];return e[n]===t},deleteFormProdukByIndex:function(t){this.kasIn.all=this.kasIn.all.filter((function(e,a){if(t!=a)return e}))},getList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,c["a"].get("/stock/out").then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(a),n=0,e.next=4,a.data.stocktransaction.filter((function(e,a){if(e.total>e.paid)return n+=e.total-e.paid,t.total_hutang=n,e}));case 4:t.list=e.sent,t.total=a.data.stocktransaction.length,setTimeout((function(){t.listLoading=!1}),1500);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:c["a"].get("/akun/iscash").then((function(e){"kasir"==t.roles?t.kas=e.data.akun.filter((function(t){return"Kas Besar"==t.name})):t.kas=e.data.akun})),c["a"].get("/contact/customer").then((function(e){console.log(e.data),t.kontak=e.data.contact})),c["a"].get("/product").then((function(e){t.product=e.data.product.filter((function(t){if(t.qty>0)return t}))}));case 6:case"end":return e.stop()}}),e)})))()},print:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.print();case 2:return e.next=4,t.$router.push("/laporan/piutang/beredar");case 4:case"end":return e.stop()}}),e)})))()},handleCurrency:function(t){var e=new Intl.NumberFormat("in-IN",{style:"currency",currency:"IDR"}).format(t);return e},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},confirm:function(){alert("kkj")},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()})),this.kasIn.all=[{product_id:"",total:"",qty:"",harga:0}],this.kurang_bayar="",this.sisa_bayar="",this.jumlah_bayar=0,this.index_before="",this.total_kasIn=""},createData:function(){var t=this;this.loading=!0;var e=[],a=[],n=[];this.kasIn.all.map((function(t,i){a.push(t.qty),e.push(parseInt(t.total)),n.push(t.product_id)}));var i={contact_id:this.contact_id,cashin_id:this.cashout_id,product_id:n,qty:a,date:this.dates,total:e,payment_due:this.jatuh_tempo,paid:this.jumlah_bayar>this.total_kasIn?this.total_kasIn:this.jumlah_bayar,staff:this.name},r=h.a.stringify(i,{allowDots:!0});c["a"].post("/stock/out/create",r).then((function(e){t.getList(),t.dialogFormVisible=!1,t.loading=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})).catch((function(e){t.listLoading=!1,t.loading=!1,400==e.response.status?t.$notify({title:"Gagal",message:e.response.data.error,type:"warning",duration:2e3}):t.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))},handleUpdate:function(t){var e=this;this.id=t.id,this.total_kasIn=t.total,this.cashin_id=t.cashin_id,this.jatuh_tempo=t.payment_due,this.total_kasIn=t.total,this.kurang_bayar=t.total-t.paid,this.dialogStatus="update",this.Pembayaran_sebelum=t.paid,this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;if(this.kurang_bayar<this.jumlah_bayar)return this.$notify({title:"Gagal",message:"Jumlah Pembayaran Melebihi Jumlah Hutang",type:"warning",duration:2e3}),!1;this.listLoading=!0,this.loading=!0;var e={payment_due:this.jatuh_tempo,cashin_id:this.cashin_id,total:this.jumlah_bayar};console.log(e),c["a"].put("/stock/out/paid/".concat(this.id),e).then((function(e){throw t.getList(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),new Error("Something went badly wrong!")})).catch((function(t){return t}))},handleDelete:function(t,e){var a=this;this.listLoading=!0,this.$confirm("Apakah anda serius mau menghapus ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){c["a"].delete("/stock/transaction/delete/".concat(t.id)).then((function(t){a.listLoading=!1,a.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),a.list.splice(e,1)})).catch((function(t){a.listLoading=!1,a.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))})).catch((function(){a.listLoading=!1,a.$message({type:"info",message:"Delete canceled"})}))},handleFetchPv:function(t){var e=this;Object(s["c"])(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-519483dc"),a.e("chunk-181fab9f"),a.e("chunk-2141e892")]).then(a.bind(null,"4bf8")).then((function(e){var a=["id","Customer","Total Tagihan","Jumlah Bayar","Hutang","Jatuh Tempo","staff","tanggal"],n=["id","name","total","paid","hutang","payment_due","staff","created_at"],i=t.formatJson(n);e.export_json_to_excel({header:a,data:i,filename:"Laporan Piutang Beredar"}),t.downloadLoading=!1}))},formatJson:function(t){var e=0;return window.print(),this.list.map((function(a){return t.map((function(t){return e+=a.total-a.paid,a["average"]=e,a["name"]=a.contact.name,a["hutang"]=a.total-a.paid,a[t]}))}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"},onChangeCash:function(t){},onChangeModal:function(t){},addFind:function(){this.kasIn.all.push({product_id:"",total:"",qty:"",harga:0})},deleteFind:function(){this.kasIn.all.pop()},onChangeTotal:function(){var t=this.kasIn.all.reduce((function(t,e){return t+parseInt(e.total)}),0);this.total_kasIn=t},onChangeProduct:function(t){var e=this,a=this.product.filter((function(a){if(a.id==e.kasIn.all[t]["product_id"])return e.qty_before=a.qty,e.index_before=t,a}));this.kasIn.all[t]["qty"]=0,this.kasIn.all[t]["harga"]=a[0]["selling_price"],this.kasIn.all[t]["total"]=0},handleFilterByDate:function(){var t=this;this.listLoading=!0;var e={start_date:this.start,end_date:this.end};c["a"].post("/stock/out",e).then((function(e){console.log(e);var a=0;t.list=e.data.stocktransaction.filter((function(e,n){if(e.total>e.paid)return a+=e.total-e.paid,t.total_hutang=a,e})),t.total=e.data.stocktransaction.length,t.listLoading=!1}))},filterProductPrice:function(){var t=this;c["a"].get("/product?contact_id=".concat(this.contact_id)).then((function(e){console.log(e.data),t.kasIn.all={},t.kasIn.all=[{product_id:"",total:0,qty:0,harga:0}],t.product=e.data.product}))},onChangeQty:function(t){if(this.kasIn.all[t]["qty"]>this.qty_before)this.kasIn.all[t]["qty"]=0;else{var e=parseFloat(this.kasIn.all[t]["qty"].replace(/,/g,".")).toFixed(2);this.kasIn.all[t]["qty"]=parseFloat(this.kasIn.all[t]["qty"].replace(/,/g,".")).toFixed(2);var a=e*parseInt(this.kasIn.all[t]["harga"]);this.kasIn.all[t]["total"]=a;var n=this.kasIn.all.reduce((function(t,e){return console.log(e.total),t+parseInt(e.total)}),0);this.total_kasIn=n}}}},b=y,v=a("2877"),_=Object(v["a"])(b,n,i,!1,null,null,null);e["default"]=_.exports},6724:function(t,e,a){"use strict";a("8d41");var n="@@wavesContext";function i(t,e){function a(a){var n=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",r.appendChild(s)),i.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=a:t[n]={removeHandle:a},a}var r={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},o=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;e["a"]=r},"8d41":function(t,e,a){},e350:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7"),a("caad"),a("2532");var n=a("4360");function i(t){if(t&&t instanceof Array&&t.length>0){var e=n["a"].getters&&n["a"].getters.roles,a=t,i=e.some((function(t){return a.includes(t)}));return i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},e498:function(t,e,a){"use strict";a("1c18")}}]);