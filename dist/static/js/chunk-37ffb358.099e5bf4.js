(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37ffb358"],{1:function(t,e){},"1c18":function(t,e,a){},2423:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return l}));var n=a("b775");function i(t){return Object(n["a"])({url:"/vue-element-admin/article/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var n=l(),i=t-n,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var l=Math.easeInOutQuad(c,n,i,e);r(l),c<e?o(t):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(a("e498"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"6af373ef",null);e["a"]=p.exports},6724:function(t,e,a){"use strict";a("8d41");var n="@@wavesContext";function i(t,e){function a(a){var n=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-r.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-r.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=a:t[n]={removeHandle:a},a}var o={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},r=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;e["a"]=o},"8d41":function(t,e,a){},d948:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container",staticStyle:{background:"yellow",display:"flex","align-items":"center","justify-content":"center"}},[a("h4",[t._v("TOTAL HUTANG BEREDAR : "+t._s(t.handleCurrency(t.total_hutang)))])]),a("br"),a("div",{staticClass:"block"}),a("el-date-picker",{staticClass:"filter-item",staticStyle:{"margin-right":"10px","margin-bottom":"10px"},attrs:{type:"date",placeholder:"Dari"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),a("el-date-picker",{staticClass:"filter-item",staticStyle:{"margin-bottom":"10px"},attrs:{type:"date",placeholder:"Sampai"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleFilterByDate}},[t._v(" Filter ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v(" Export ")]),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"}},[a("router-link",{attrs:{to:"/cetak/piutang/beredar/pdf",target:"_blank"}},[t._v("Cetak")])],1),a("br"),a("br"),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list.filter((function(e){var a=e.contact;return!t.search||a.name.toLowerCase().includes(t.search.toLowerCase())})),"default-sort":{prop:"id"},border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{sortable:"",label:"ID",prop:"cashin",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.id))])]}}])}),a("el-table-column",{attrs:{label:"Supplier","min-width":"150px",sortable:"",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(null!=n.contact?n.contact.name:""))])]}}])}),a("el-table-column",{attrs:{label:"Tagihan",width:"150px",align:"center",sortable:"",prop:"total"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.total)))])]}}])}),a("el-table-column",{attrs:{label:"Jumlah dibayar",width:"150px",align:"center",sortable:"",prop:"paid"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.paid)))])]}}])}),a("el-table-column",{attrs:{label:"Potongan",width:"150px",align:"center",sortable:"",prop:"discount"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.discount)))])]}}])}),a("el-table-column",{attrs:{label:"Hutang",width:"150px",align:"center",sortable:"",prop:"debt"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleCurrency(n.debt)))])]}}])}),a("el-table-column",{attrs:{label:"Actions",align:"left",width:"80","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n.debt>0?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v(" Bayar ")]):t._e(),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v("Aksi")])],1),t.checkPermission(["admin"])?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDelete(n)}}},[t._v(" Delete ")]):t._e(),a("br"),a("br"),a("el-button",{attrs:{size:"mini",type:"warning"}},[a("router-link",{attrs:{to:"/pembelian/detail/"+n.id}},[t._v("Detail")])],1),a("el-button",{attrs:{size:"mini",type:"warning"}},[a("router-link",{attrs:{to:"/kredit/detail/"+n.id}},[t._v("Detail Kredit")])],1)],1)]}}])}),a("el-table-column",{attrs:{label:"Staff",width:"150px",align:"center",sortable:"",prop:"staff"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.staff))])]}}])}),a("el-table-column",{attrs:{label:"Jatuh Tempo",width:"150px",align:"center",sortable:"",prop:"payment_due"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.payment_due))])]}}])}),a("el-table-column",{attrs:{label:"Date",width:"150px",align:"center",sortable:"",prop:"date"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.date))])]}}])}),a("el-table-column",{attrs:{label:"Kas",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.cashout.name))])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"100% !important","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"top","label-width":"180px",inline:!0}},["create"==t.dialogStatus?a("el-form-item",{staticClass:"k",attrs:{label:"Customer"}},[a("el-select",{staticClass:"filter-item",attrs:{filterable:"",required:"",placeholder:"Please select"},on:{change:function(e){return t.filterProductPrice()}},model:{value:t.contact_id,callback:function(e){t.contact_id=e},expression:"contact_id"}},t._l(t.kontak,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),a("el-form-item",{staticClass:"k",attrs:{label:"Jatuh Tempo"}},[a("el-date-picker",{attrs:{type:"date",format:"dd-MM-yyyy",placeholder:"Jatuh Tempo"},model:{value:t.jatuh_tempo,callback:function(e){t.jatuh_tempo=e},expression:"jatuh_tempo"}})],1),"create"==t.dialogStatus?a("el-form-item",{staticClass:"k",attrs:{label:"Tgl Transaksi"}},[a("el-date-picker",{attrs:{type:"date",format:"dd-MM-yyyy",placeholder:"Tanggal Transaksi"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1):t._e(),t._l(t.kasIn.all,(function(e,n){return"create"==t.dialogStatus?a("div",{staticStyle:{display:"flex","flex-wrap":"wrap",width:"100% !important"}},[a("el-form-item",{staticClass:"k",attrs:{label:0==n?"Harga Barang":""}},[a("el-select",{attrs:{filterable:"",placeholder:"Select"},on:{change:function(e){return t.onChangeProduct(n)}},model:{value:e.product_id,callback:function(a){t.$set(e,"product_id",a)},expression:"all.product_id"}},t._l(t.product,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{staticClass:"k",attrs:{label:0==n?"Jumlah Barang":""}},[a("el-input",{attrs:{value:e.qty,required:"",type:"text",placeholder:"Jumlah Barang"},on:{change:function(e){return t.onChangeQty(n)}},model:{value:e.qty,callback:function(a){t.$set(e,"qty",a)},expression:"all.qty"}})],1),a("el-form-item",{staticClass:"k",attrs:{label:0==n?"Harga Satuan":""}},["admin"==t.roles?a("v-money-spinner",t._b({attrs:{required:"",type:"text",placeholder:"Harga Satuan"},on:{change:function(e){return t.onChangeQty(n)}},model:{value:e.harga,callback:function(a){t.$set(e,"harga",a)},expression:"all.harga"}},"v-money-spinner",t.config,!1)):a("v-money-spinner",t._b({attrs:{readonly:"",required:"",type:"text",placeholder:"Harga Satuan"},on:{change:function(e){return t.onChangeQty(n)}},model:{value:e.harga,callback:function(a){t.$set(e,"harga",a)},expression:"all.harga"}},"v-money-spinner",t.config,!1))],1),a("el-form-item",{staticClass:"k",attrs:{label:0==n?"Sub Total":""}},[a("v-money-spinner",t._b({attrs:{disabled:"",type:"numeric",min:"0.01",step:"0.01",max:"2500",placeholder:"Please input"},on:{change:function(e){return t.onChangeTotal()}},model:{value:e.total,callback:function(a){t.$set(e,"total",a)},expression:"all.total"}},"v-money-spinner",t.config,!1))],1),a("el-form-item",{staticClass:"k",style:0==n?"margin-top:50px":""},[0!=n?a("el-button",{staticStyle:{height:"30px"},attrs:{type:"primary"},on:{click:function(e){return t.deleteFormProdukByIndex(n)}}},[t._v(" Hapus ")]):t._e()],1)],1):t._e()})),a("el-form-item",{staticClass:"k",attrs:{label:"Masuk Ke Kas"}},[a("el-select",{staticClass:"filter-item",attrs:{required:"",placeholder:"Please select"},on:{change:function(e){return t.onChangeModal(e)}},model:{value:t.cashout_id,callback:function(e){t.cashout_id=e},expression:"cashout_id"}},t._l(t.kas,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{staticClass:"k",attrs:{label:"Jumlah Pembayaran"}},[a("v-money-spinner",t._b({attrs:{placeholder:"Jumlah Pembayaran"},on:{change:function(e){return t.handleChangeText()}},model:{value:t.jumlah_bayar,callback:function(e){t.jumlah_bayar=e},expression:"jumlah_bayar"}},"v-money-spinner",t.config,!1))],1),"create"==t.dialogStatus?a("el-form-item",{staticClass:"k",attrs:{label:"Potongan"},on:{change:function(e){return t.handleChangeText()}}},[a("v-money-spinner",t._b({model:{value:t.discount,callback:function(e){t.discount=e},expression:"discount"}},"v-money-spinner",t.config,!1))],1):t._e(),""!=t.total_kasIn?a("h3",[t._v(" Total Tagihan : "+t._s(t.handleCurrency(t.total_kasIn)))]):t._e(),""!=t.kurang_bayar?a("h3",[t._v(" Kekurangan : "+t._s(t.handleCurrency(t.kurang_bayar)))]):t._e(),""!=t.sisa_bayar?a("h3",[t._v(" Kembalian : "+t._s(t.handleCurrency(t.sisa_bayar)))]):t._e()],2),a("div",{staticClass:"dialog-footer",staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},["create"==t.dialogStatus?a("el-button",{staticStyle:{margin:"20px 10px"},attrs:{type:"primary"},on:{click:t.addFind}},[t._v(" Tambah Produk ")]):t._e(),a("el-button",{staticStyle:{margin:"20px 10px"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" Cancel ")]),a("el-button",{staticStyle:{margin:"20px 10px"},attrs:{loading:t.loading,type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" Simpan ")])],1)],1),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},i=[],o=a("5530"),r=(a("d3b7"),a("99af"),a("4de4"),a("4e82"),a("d81d"),a("b0c0"),a("a434"),a("3ca3"),a("ddb0"),a("b680"),a("ac1f"),a("5319"),a("2423")),l=a("6724"),s=(a("ed08"),a("333d")),c=a("0d5e"),u=a("4328"),d=a.n(u),p=a("e350"),h=a("2f62"),m=[{key:"cash",display_name:"cash"},{key:"modal",display_name:"modal"}],f=m.reduce((function(t,e){return t[e.key]=e.display_name,t}),{}),g={name:"ComplexTable",components:{Pagination:s["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return f[t]}},computed:Object(o["a"])({},Object(h["b"])(["name","avatar","roles"])),data:function(){return{total_hutang:0,start:"",end:"",dates:"",discount:0,jatuh_tempo:"",qty_before:"",index_before:"",Pembayaran_sebelum:"",jumlah_bayar:[],kurang_bayar:"",sisa_bayar:"",kembalian:"",config:{spinner:!1,step:10,prefix:"Rp ",precision:0,decimal:",",thousands:".",bootstrap:!0,amend:!1,masked:!1,allowBlank:!0},category:"",kontak:[],kas:[],search:"",product:[],contact_id:"",cashout_id:"",satuan:"",producttype:"",hutang:"",jenis_barang:"",keterangan:"",selling_price:"",purchase_price:"",qty:"",unit:"",from:"",to_item:"",total_kasIn:"",pemasukan:"",kasIn:{all:[{product_id:"",total:"",qty:[],harga:0}]},tableKey:0,list:null,total:0,listLoading:!0,loading:!1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:m,cash:[],modal:[],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,code:"",date:"",timestamp:new Date,title:"",to:"",chasin:"",total:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Hutang Penjualan"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.$store.dispatch("user/isLicenceActived"),this.getList();var t=(new Date).getDate(),e=(new Date).getMonth()+1,a=(new Date).getFullYear();this.jatuh_tempo="".concat(a,"-").concat(e,"-").concat(t),this.dates="".concat(a,"-").concat(e,"-").concat(t)},methods:{checkPermission:p["a"],handleChangeText:function(t){"create"==this.dialogStatus?this.jumlah_bayar>this.total_kasIn?(this.sisa_bayar=this.jumlah_bayar+this.discount-this.total_kasIn,this.kurang_bayar=""):(this.kurang_bayar=this.total_kasIn-(this.jumlah_bayar+this.discount),this.sisa_bayar=""):this.kurang_bayar=this.total_kasIn-(this.jumlah_bayar+this.Pembayaran_sebelum+this.discount)},filterHandler:function(t,e,a){var n=a["property"];return e[n]===t},deleteFormProdukByIndex:function(t){this.kasIn.all=this.kasIn.all.filter((function(e,a){if(t!=a)return e}))},getList:function(){var t=this;this.listLoading=!0,c["a"].get("/stock/in").then((function(e){console.log(e);var a=0;t.list=e.data.stocktransaction.filter((function(e,n){if(e.total>e.paid+e.discount)return a+=e.total-(e.paid+e.discount),t.total_hutang=a,e["debt"]=e.total-(e.paid+e.discount),e})).sort((function(t,e){return t.payment_due>e.payment_due?1:e.payment_due>t.payment_due?-1:0})),t.total=e.data.stocktransaction.length,setTimeout((function(){t.listLoading=!1}),1500)})),c["a"].get("/akun/iscash").then((function(e){t.kas=e.data.akun})),c["a"].get("/contact/supplier").then((function(e){console.log(e.data),t.kontak=e.data.contact})),c["a"].get("/product/goods").then((function(e){t.product=e.data.product.filter((function(t){if("service"!=t.category)return t}))}))},handleCurrency:function(t){var e=new Intl.NumberFormat("in-IN",{style:"currency",currency:"IDR"}).format(t);return e},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},confirm:function(){alert("kkj")},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()})),this.kasIn.all=[{product_id:"",total:"",qty:"",harga:0}],this.kurang_bayar="",this.sisa_bayar="",this.jumlah_bayar=0,this.index_before="",this.total_kasIn=""},createData:function(){var t=this;this.loading=!0;var e=[],a=[],n=[];this.kasIn.all.map((function(t,i){a.push(t.qty),e.push(parseInt(t.total)),n.push(t.product_id)}));var i={contact_id:this.contact_id,cashin_id:this.cashout_id,product_id:n,qty:a,date:this.dates,total:e,payment_due:this.jatuh_tempo,paid:this.jumlah_bayar>this.total_kasIn?this.total_kasIn:this.jumlah_bayar,staff:this.name},o=d.a.stringify(i,{allowDots:!0});c["a"].post("/stock/out/create",o).then((function(e){t.getList(),t.dialogFormVisible=!1,t.loading=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})).catch((function(e){t.listLoading=!1,t.loading=!1,400==e.response.status?t.$notify({title:"Gagal",message:e.response.data.error,type:"warning",duration:2e3}):t.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))},handleUpdate:function(t){console.log(t.id),this.id=t.id,this.total_kasIn=t.total,this.cashin_id=t.cashin_id,this.jatuh_tempo=t.payment_due,this.total_kasIn=t.total,this.kurang_bayar=t.debt,this.discount=t.discount,this.dialogStatus="update",this.Pembayaran_sebelum=t.paid,this.dialogFormVisible=!0,this.ids=t.id,this.names=t.cashout.name,this.selling_price=t.selling_price,this.purchase_price=t.purchase_price,this.unit=t.unit,this.qty=[],this.dialogStatus="update",this.dialogFormVisible=!0},updateData:function(){var t=this;this.listLoading=!0,this.loading=!0;var e={cashout_id:this.cashout_id,total:this.jumlah_bayar,payment_due:this.jatuh_tempo};c["a"].put("/stock/in/paid/".concat(this.ids),e).then((function(e){throw t.loading=!1,t.getList(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),new Error("Something went badly wrong!")})).catch((function(e){t.loading=!1,400==e.response.status?t.$notify({title:"Gagal",message:e.response.data.error,type:"warning",duration:2e3}):t.$notify({title:"Gagal",message:"Server Error",type:"warning",duration:2e3})}))},handleDelete:function(t,e){var a=this;this.listLoading=!0,this.$confirm("Apakah anda serius mau menghapus ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){c["a"].delete("/stock/transaction/delete/".concat(t.id)).then((function(t){a.listLoading=!1,a.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),a.list.splice(e,1)})).catch((function(t){a.listLoading=!1,a.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))})).catch((function(){a.listLoading=!1,a.$message({type:"info",message:"Delete canceled"})}))},handleFetchPv:function(t){var e=this;Object(r["c"])(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-519483dc"),a.e("chunk-181fab9f"),a.e("chunk-2141e892")]).then(a.bind(null,"4bf8")).then((function(e){var a=["id","Customer","Total Tagihan","Jumlah Bayar","Hutang","Jatuh Tempo","staff","tanggal"],n=["id","name","total","paid","hutang","payment_due","staff","created_at"],i=t.formatJson(n);e.export_json_to_excel({header:a,data:i,filename:"Laporan Piutang Beredar"}),t.downloadLoading=!1}))},formatJson:function(t){var e=0;return window.print(),this.list.map((function(a){return t.map((function(t){return e+=a.total-a.paid,a["average"]=e,a["name"]=a.contact.name,a["hutang"]=a.total-a.paid,a[t]}))}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"},onChangeCash:function(t){},onChangeModal:function(t){},addFind:function(){this.kasIn.all.push({product_id:"",total:"",qty:"",harga:0})},deleteFind:function(){this.kasIn.all.pop()},onChangeTotal:function(){var t=this.kasIn.all.reduce((function(t,e){return t+parseInt(e.total)}),0);this.total_kasIn=t},onChangeProduct:function(t){var e=this,a=this.product.filter((function(a){if(a.id==e.kasIn.all[t]["product_id"])return e.qty_before=a.qty,e.index_before=t,a}));this.kasIn.all[t]["qty"]=[],this.kasIn.all[t]["harga"]=a[0]["selling_price"],this.kasIn.all[t]["total"]=0},handleFilterByDate:function(){var t=this;this.listLoading=!0;var e={start_date:this.start,end_date:this.end};c["a"].post("/stock/out",e).then((function(e){console.log(e);var a=0;t.list=e.data.stocktransaction.filter((function(e,n){if(e.total>e.paid)return a+=e.total-e.paid,t.total_hutang=a,e})),t.total=e.data.stocktransaction.length,t.listLoading=!1}))},filterProductPrice:function(){var t=this;c["a"].get("/product?contact_id=".concat(this.contact_id)).then((function(e){console.log(e.data),t.kasIn.all={},t.kasIn.all=[{product_id:"",total:0,qty:0,harga:0}],t.product=e.data.product}))},onChangeQty:function(t){if(this.kasIn.all[t]["qty"]>this.qty_before)this.kasIn.all[t]["qty"]=0;else{var e=parseFloat(this.kasIn.all[t]["qty"].replace(/,/g,".")).toFixed(2);this.kasIn.all[t]["qty"]=parseFloat(this.kasIn.all[t]["qty"].replace(/,/g,".")).toFixed(2);var a=e*parseInt(this.kasIn.all[t]["harga"]);this.kasIn.all[t]["total"]=a;var n=this.kasIn.all.reduce((function(t,e){return console.log(e.total),t+parseInt(e.total)}),0);this.total_kasIn=n}}}},y=g,b=a("2877"),_=Object(b["a"])(y,n,i,!1,null,null,null);e["default"]=_.exports},e350:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7"),a("caad"),a("2532");var n=a("4360");function i(t){if(t&&t instanceof Array&&t.length>0){var e=n["a"].getters&&n["a"].getters.roles,a=t,i=e.some((function(t){return a.includes(t)}));return i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},e498:function(t,e,a){"use strict";a("1c18")}}]);