(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9386e73a"],{1:function(t,a){},"1c18":function(t,a,e){},2423:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return o})),e.d(a,"d",(function(){return r}));var n=e("b775");function i(t){return Object(n["a"])({url:"/vue-element-admin/article/list",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function o(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"333d":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[e("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"update:pageSize":function(a){t.pageSize=a},"update:page-size":function(a){t.pageSize=a},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];e("a9e3");Math.easeInOutQuad=function(t,a,e,n){return t/=n/2,t<1?e/2*t*t+a:(t--,-e/2*(t*(t-2)-1)+a)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,a,e){var n=r(),i=t-n,l=20,c=0;a="undefined"===typeof a?500:a;var u=function t(){c+=l;var r=Math.easeInOutQuad(c,n,i,a);o(r),c<a?s(t):e&&"function"===typeof e&&e()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(e("e498"),e("2877")),p=Object(d["a"])(u,n,i,!1,null,"6af373ef",null);a["a"]=p.exports},6724:function(t,a,e){"use strict";e("8d41");var n="@@wavesContext";function i(t,a){function e(e){var n=Object.assign({},a.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",s.appendChild(r)),i.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(e.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(e.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=e:t[n]={removeHandle:e},e}var s={bind:function(t,a){t.addEventListener("click",i(t,a),!1)},update:function(t,a){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",i(t,a),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},o=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(o)),s.install=o;a["a"]=s},"8d41":function(t,a,e){},c94b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"filter-container"},[e("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(" "+t._s("in"==t.uri?"Proses Pembelian":"Proses Penjualan")+" ")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[e("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":t.getSortClass("id")},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",[t._v(t._s(n.id))])]}}])}),e("el-table-column",{attrs:{label:"Nama","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",[e("span",[t._v(t._s(n.product.name))])])]}}])}),e("el-table-column",{attrs:{label:"Jumlah barang",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",[t._v(t._s(n.qty))])]}}])}),e("el-table-column",{attrs:{label:"Satuan",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",[t._v(t._s(n.product.unit.name))])]}}])}),e("el-table-column",{attrs:{label:"Harga Satuan",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",[t._v(t._s(t.handleCurrency("in"==t.uri?n.purchase_price:n.selling_price)))])]}}])})],1),e("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(a){return t.$set(t.listQuery,"page",a)},"update:limit":function(a){return t.$set(t.listQuery,"limit",a)},pagination:t.getList}}),e("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(a){t.dialogFormVisible=a}}},[e("el-form",{ref:"dataForm",staticStyle:{width:"100% !important","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"top","label-width":"180px",inline:!0}},["create"==t.dialogStatus?e("el-form-item",{staticClass:"k",attrs:{label:"Customer"}},[e("el-input",{attrs:{readonly:"",value:t.kontak[0]["name"],required:"",type:"text"}})],1):t._e(),e("el-form-item",{staticClass:"k",attrs:{label:"Jatuh Tempo"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"Jatuh Tempo"},model:{value:t.jatuh_tempo,callback:function(a){t.jatuh_tempo=a},expression:"jatuh_tempo"}})],1),"create"==t.dialogStatus?e("el-form-item",{staticClass:"k",attrs:{label:"Tgl Transaksi"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"Tanggal Transaksi"},model:{value:t.dates,callback:function(a){t.dates=a},expression:"dates"}})],1):t._e(),t._l(t.product,(function(a,n){return"create"==t.dialogStatus?e("div",{staticStyle:{display:"flex","flex-wrap":"wrap",width:"100% !important"}},[e("el-form-item",{staticClass:"k",attrs:{label:0==n?" Produk":""}},[e("el-input",{staticStyle:{display:"none"},attrs:{value:a.id,required:""},model:{value:a.product_id,callback:function(e){t.$set(a,"product_id",e)},expression:"all.product_id"}}),e("el-input",{attrs:{readonly:"",value:a.product.name,required:"",type:"text"}}),e("p",{staticStyle:{color:"red",margin:"0"}},[t._v(t._s(a.product.qty<1&&"out"==t.uri?"Produk Ini Belum Tersedia":""))])],1),e("el-form-item",{staticClass:"k",attrs:{label:0==n?"Jumlah Barang":""}},[e("el-input",{attrs:{value:a.qty,required:"",type:"text",placeholder:"Jumlah Barang"},on:{change:function(a){return t.onChangeQty(n)}},model:{value:a.qty,callback:function(e){t.$set(a,"qty",e)},expression:"all.qty"}})],1),e("el-form-item",{staticClass:"k",attrs:{label:0==n?"Harga Satuan":""}},["in"==t.uri?e("v-money-spinner",t._b({attrs:{required:"",type:"text",placeholder:"Rp 0"},on:{change:function(a){return t.onChangeQty(n)}},model:{value:a.harga=a.purchase_price,callback:function(e){t.$set(a.harga=a,"purchase_price",e)},expression:"all.harga = all.purchase_price"}},"v-money-spinner",t.config,!1)):e("v-money-spinner",t._b({attrs:{readonly:"",required:"",type:"text",placeholder:"Rp 0"},on:{change:function(a){return t.onChangeQty(n)}},model:{value:a.harga=a.selling_price,callback:function(e){t.$set(a.harga=a,"selling_price",e)},expression:"all.harga = all.selling_price"}},"v-money-spinner",t.config,!1))],1),e("el-form-item",{staticClass:"k",attrs:{label:0==n?"Sub Total":""}},[e("v-money-spinner",t._b({attrs:{disabled:"",placeholder:"Please input"},on:{change:function(a){return t.onChangeTotal()}},model:{value:a.total,callback:function(e){t.$set(a,"total",e)},expression:"all.total"}},"v-money-spinner",t.config,!1))],1),e("el-form-item",{staticClass:"k",style:0==n?"margin-top:50px":""},[0!=n?e("el-button",{staticStyle:{height:"30px"},attrs:{type:"primary"},on:{click:function(a){return t.deleteFormProdukByIndex(n)}}},[t._v(" Hapus ")]):t._e()],1)],1):t._e()})),e("el-form-item",{staticClass:"k",attrs:{label:null==t.trans.cashin?"Keluar Dari Kas":"Masuk Ke Kas"}},[e("el-select",{staticClass:"filter-item",attrs:{required:"",placeholder:"Please select"},on:{change:function(a){return t.onChangeModal(a)}},model:{value:t.cashout_id,callback:function(a){t.cashout_id=a},expression:"cashout_id"}},t._l(t.kas,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),e("el-form-item",{staticClass:"k",attrs:{label:"Jumlah Pembayaran"}},[e("v-money-spinner",t._b({attrs:{type:"text",placeholder:"Rp 0"},on:{change:function(a){return t.handleChangeText()}},model:{value:t.jumlah_bayar,callback:function(a){t.jumlah_bayar=a},expression:"jumlah_bayar"}},"v-money-spinner",t.config,!1))],1),"create"==t.dialogStatus?e("el-form-item",{staticClass:"k",attrs:{label:"Potongan"}},[e("v-money-spinner",t._b({attrs:{placeholder:"Rp 0"},on:{change:function(a){return t.handleChangeText()}},model:{value:t.discount,callback:function(a){t.discount=a},expression:"discount"}},"v-money-spinner",t.config,!1))],1):t._e(),""!=t.total_kasIn?e("h3",[t._v(" Total Tagihan : "+t._s(t.handleCurrency(t.total_kasIn)))]):t._e(),""!=t.paid?e("h3",[t._v(" Sudah Dibayar : "+t._s(t.handleCurrency(t.paid)))]):t._e(),""!=t.discount?e("h3",[t._v(" Potongan : "+t._s(t.handleCurrency(t.discount)))]):t._e(),""!=t.jumlah_bayar?e("h3",[t._v(" Jumlah Pembayaran : "+t._s(t.handleCurrency(t.jumlah_bayar)))]):t._e(),""!=t.kurang_bayar?e("h3",[t._v(" Kekurangan : "+t._s(t.handleCurrency(t.kurang_bayar)))]):t._e(),""!=t.sisa_bayar?e("h3",[t._v(" Kembalian : "+t._s(t.handleCurrency(t.sisa_bayar)))]):t._e()],2),e("div",{staticClass:"dialog-footer",staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},[e("el-button",{staticStyle:{margin:"20px 10px"},on:{click:function(a){t.dialogFormVisible=!1}}},[t._v(" Cancel ")]),(t.jumlah_bayar,e("el-button",{staticStyle:{margin:"20px 10px"},attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},on:{click:function(a){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" Simpan ")]))],1)],1),e("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(a){t.dialogPvVisible=a}}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1),e("h1")],1)},i=[],s=e("5530"),o=e("ade3"),r=(e("d3b7"),e("d81d"),e("b0c0"),e("4e82"),e("a434"),e("3ca3"),e("ddb0"),e("4de4"),e("ac1f"),e("5319"),e("2423")),l=e("6724"),c=(e("ed08"),e("333d")),u=e("0d5e"),d=e("4328"),p=e.n(d),h=e("2f62"),m=(e("e350"),[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}]),g=m.reduce((function(t,a){return t[a.key]=a.display_name,t}),{}),f={name:"ComplexTable",components:{Pagination:c["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(t){var a={published:"success",draft:"info",deleted:"danger"};return a[t]},typeFilter:function(t){return g[t]}},data:function(){var t;return t={disabled:!1,trans:"",start:"",paid:[],payment_due:"",end:"",uri:"",dates:"",discount:[],staff:"",jatuh_tempo:"",qty_before:"",index_before:"",Pembayaran_sebelum:"",jumlah_bayar:[],kurang_bayar:"",sisa_bayar:[],kembalian:"",list:"",config:{spinner:!1,step:10,prefix:"Rp ",precision:0,decimal:",",thousands:".",bootstrap:!0,amend:!1,masked:!1,allowBlank:!0},category:"",kontak:[],kas:[],search:"",product:[],contact_id:"",cashout_id:"",satuan:"",cashin:"",producttype:"",hutang:"",jenis_barang:"",keterangan:"",selling_price:"",purchase_price:"",qty:"",unit:"",from:"",to_item:"",total_kasIn:"",pemasukan:"",kasIn:{all:[{product_id:"",total:"",qty:"",harga:0}]},tableKey:0},Object(o["a"])(t,"list",null),Object(o["a"])(t,"total",0),Object(o["a"])(t,"listLoading",!0),Object(o["a"])(t,"loading",!1),Object(o["a"])(t,"listQuery",{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}),Object(o["a"])(t,"importanceOptions",[1,2,3]),Object(o["a"])(t,"calendarTypeOptions",m),Object(o["a"])(t,"cash",[]),Object(o["a"])(t,"modal",[]),Object(o["a"])(t,"sortOptions",[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}]),Object(o["a"])(t,"statusOptions",["published","draft","deleted"]),Object(o["a"])(t,"showReviewer",!1),Object(o["a"])(t,"temp",{id:void 0,code:"",date:"",timestamp:new Date,title:"",to:"",chasin:"",total:""}),Object(o["a"])(t,"dialogFormVisible",!1),Object(o["a"])(t,"dialogStatus",""),Object(o["a"])(t,"textMap",{update:"Edit",create:"Detail Pesanan"}),Object(o["a"])(t,"dialogPvVisible",!1),Object(o["a"])(t,"pvData",[]),Object(o["a"])(t,"rules",{type:[{required:!0,message:"type is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]}),Object(o["a"])(t,"downloadLoading",!1),t},created:function(){this.$store.dispatch("user/isLicenceActived"),this.getList()},computed:Object(s["a"])({},Object(h["b"])(["name","avatar","roles"])),methods:{handleChangeText:function(t){"create"==this.dialogStatus?this.jumlah_bayar+this.discount+this.paid>this.total_kasIn||this.jumlah_bayar+this.discount+this.paid==this.total_kasIn?(this.sisa_bayar=this.jumlah_bayar+this.discount+this.paid-this.total_kasIn,this.kurang_bayar=""):(this.kurang_bayar=this.total_kasIn-(this.jumlah_bayar+this.discount+this.paid),this.sisa_bayar=""):this.kurang_bayar=this.total_kasIn-(this.jumlah_bayar+this.Pembayaran_sebelum)},getList:function(){var t=this;this.listLoading=!0,u["a"].get("/stock/transaction/detail/".concat(this.$route.params.id)).then((function(a){console.log(a);t.product=a.data.stocktransaction[0].substocktransaction.map((function(a){return a.product.qty<1&&"out"==t.uri&&(!0,t.disabled=!0),a})),t.paid=a.data.stocktransaction[0].paid,t.discount=null!=a.data.stocktransaction[0].discount?a.data.stocktransaction[0].discount:[],t.trans=a.data.stocktransaction[0],console.log(t.product),t.cashin=null!=a.data.stocktransaction[0].cashin?a.data.stocktransaction[0].cashin.name:a.data.stocktransaction[0].cashout.name,t.cashout_id=null!=a.data.stocktransaction[0].cashin?a.data.stocktransaction[0].cashin.id:a.data.stocktransaction[0].cashout.id,t.uri=null!=a.data.stocktransaction[0].cashin?"out":"in",t.list=a.data.stocktransaction[0].substocktransaction,t.staff=a.data.stocktransaction[0].staff,t.total=a.data.stocktransaction[0].substocktransaction.length,t.kontak=[a.data.stocktransaction[0].contact],t.jatuh_tempo=a.data.stocktransaction[0].payment_due,t.dates=a.data.stocktransaction[0].date,t.contact_id=a.data.stocktransaction[0].contact_id,t.total_kasIn=a.data.stocktransaction[0].total,t.kurang_bayar=a.data.stocktransaction[0].total-(a.data.stocktransaction[0].paid+a.data.stocktransaction[0].discount),t.listLoading=!1,setTimeout((function(){}),1500)})),u["a"].get("/akun/iscash").then((function(a){t.uri,t.kas=a.data.akun}))},handleCurrency:function(t){var a=new Intl.NumberFormat("in-IN",{style:"currency",currency:"IDR"}).format(t);return a},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,a){this.$message({message:"操作Success",type:"success"}),t.status=a},sortChange:function(t){var a=t.prop,e=t.order;"id"===a&&this.sortByID(e)},confirm:function(){alert("kkj")},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()})),this.kasIn.all=[{product_id:"",total:"",qty:"",harga:[]}],this.sisa_bayar="",this.index_before="",this.discount=this.discount>0?this.discount:[]},createData:function(){var t=this;this.loading=!0;var a=[],e=[],n=[],i=[],s=[];this.product.map((function(t,o){e.push(t.qty),a.push(parseInt(t.total)),n.push(t.product_id),i.push(t.harga),s.push(t.harga)}));var o="";o="in"==this.uri?{contact_id:this.contact_id,cashout_id:this.cashout_id,product_id:n,qty:e,date:this.dates,total:a,id:this.$route.params.id,purchase_price:i,discount:this.discount,payment_due:this.jatuh_tempo,paid:this.jumlah_bayar>this.total_kasIn?this.total_kasIn:this.jumlah_bayar-this.sisa_bayar,staff:this.name}:{contact_id:this.contact_id,cashin_id:this.cashout_id,product_id:n,qty:e,date:this.dates,total:a,selling_price:s,id:this.$route.params.id,discount:this.discount,payment_due:this.jatuh_tempo,paid:this.jumlah_bayar>this.total_kasIn?this.total_kasIn:this.jumlah_bayar-this.sisa_bayar,staff:this.name};var r=p.a.stringify(o,{allowDots:!0});console.log(o),u["a"].post("/stock/".concat(this.uri,"/create"),r).then((function(a){t.getList(),t.dialogFormVisible=!1,t.loading=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),"in"==t.uri?t.$router.push("/pesanan/pembelian"):t.$router.push("/pesanan/penjualan")})).catch((function(a){t.listLoading=!1,t.loading=!1,400==a.response.status?t.$notify({title:"Gagal",message:a.response.data.error,type:"warning",duration:2e3}):t.$notify({title:"Gagal",message:"Anda Belum Melengkapi Data",type:"warning",duration:2e3})}))},handleUpdate:function(t){var a=this;this.id=t.id,this.total_kasIn=t.total,this.cashout_id=t.cashin_id,this.jatuh_tempo=t.payment_due,this.total_kasIn=t.total,this.kurang_bayar=t.total-t.paid,this.dialogStatus="update",this.Pembayaran_sebelum=t.paid,this.dialogFormVisible=!0,this.$nextTick((function(){a.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;if(this.kurang_bayar<this.jumlah_bayar)return this.$notify({title:"Gagal",message:"Jumlah Pembayaran Melebihi Jumlah Hutang",type:"warning",duration:2e3}),!1;this.listLoading=!0,this.loading=!0;var a={payment_due:this.jatuh_tempo,cashin_id:this.cashout_id,total:this.jumlah_bayar};console.log(a),u["a"].put("/stock/out/paid/".concat(this.id),a).then((function(a){throw t.getList(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),new Error("Something went badly wrong!")})).catch((function(t){return t}))},handleDelete:function(t,a){var e=this;this.listLoading=!0,this.$confirm("Apakah anda serius mau menghapus ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){u["a"].delete("/stock/transaction/delete/".concat(t.id)).then((function(t){e.listLoading=!1,e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),e.list.splice(a,1)})).catch((function(t){e.listLoading=!1,e.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))})).catch((function(){e.listLoading=!1,e.$message({type:"info",message:"Delete canceled"})}))},handleFetchPv:function(t){var a=this;Object(r["c"])(t).then((function(t){a.pvData=t.data.pvData,a.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([e.e("chunk-519483dc"),e.e("chunk-181fab9f"),e.e("chunk-2141e892")]).then(e.bind(null,"4bf8")).then((function(a){var e=["id","Customer","Total Tagihan","Jumlah Bayar","Hutang","Jatuh Tempo","staff","tanggal"],n=["id","name","total","paid","hutang","payment_due","staff","created_at"],i=t.formatJson(n);a.export_json_to_excel({header:e,data:i,filename:"penjualan"}),t.downloadLoading=!1}))},formatJson:function(t){return this.list.map((function(a){return t.map((function(t){return a["name"]=a.contact.name,a["hutang"]=a.total-a.paid,a[t]}))}))},getSortClass:function(t){var a=this.listQuery.sort;return a==="+".concat(t)?"ascending":"descending"},onChangeCash:function(t){},onChangeModal:function(t){},addFind:function(){this.kasIn.all.push({product_id:"",total:"",qty:"",harga:0})},deleteFind:function(){this.kasIn.all.pop()},onChangeTotal:function(){var t=this.product.reduce((function(t,a){return t+parseInt(a.total)}),0);this.total_kasIn=t},onChangeProduct:function(t){var a=this,e=this.product.filter((function(e){if(e.id==a.kasIn.all[t]["product_id"])return a.qty_before=e.qty,a.index_before=t,e}));this.kasIn.all[t]["qty"]=0,this.kasIn.all[t]["harga"]=parseInt(e[0]["selling_price"]),this.kasIn.all[t]["total"]=0},handleFilterByDate:function(){var t=this;this.listLoading=!0;var a={start_date:this.start,end_date:this.end};console.log(a),u["a"].post("/stock/out",a).then((function(a){console.log(a),t.list=a.data.stocktransaction.map((function(t){return t["debt"]=t.total-t.paid-t.discount<0?0:t.total-t.paid-t.discount,t})),t.total=a.data.stocktransaction.length,setTimeout((function(){t.listLoading=!1}),1500)}))},filterProductPrice:function(){var t=this;u["a"].get("/product?contact_id=".concat(this.contact_id)).then((function(a){console.log(a.data),t.kasIn.all={},t.kasIn.all=[{product_id:"",total:0,qty:0,harga:0}],t.product=a.data.product}))},onChangeQty:function(t){if(this.product[t]["product"]["qty"]<this.product[t]["qty"]&&"out"==this.uri)return this.product[t]["qty"]=this.product[t]["product"]["qty"],!1;var a=0;this.product[t]["qty"].length>3?a=this.product[t]["qty"].replace(".",""):(a=this.product[t]["qty"].replace(/,/g,"."),this.product[t]["qty"]=a),this.product[t]["qty"]=a,console.log(this.product);var e=a*parseInt(this.product[t]["harga"]);console.log(e),this.product[t]["total"]=e,this.total_kasIn=this.product.reduce((function(t,a){return t+parseInt(a.total)}),0),console.log(this.total_kasIn)}}},y=f,b=e("2877"),_=Object(b["a"])(y,n,i,!1,null,null,null);a["default"]=_.exports},e350:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("d3b7"),e("caad"),e("2532");var n=e("4360");function i(t){if(t&&t instanceof Array&&t.length>0){var a=n["a"].getters&&n["a"].getters.roles,e=t,i=a.some((function(t){return e.includes(t)}));return i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},e498:function(t,a,e){"use strict";e("1c18")}}]);