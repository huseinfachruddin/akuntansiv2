(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c92f"],{f48c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.dialogFormVisible=!0,t.dialogStatus="create",t.name="",t.iscashout=!1,t.iscashin=!1,t.roles=[]}}},[t._v(" Tambah ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"ID",prop:"id",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(s.id))])]}}])}),a("el-table-column",{attrs:{label:"Nama Kas"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(s.name)+" ")])]}}])}),a("el-table-column",{attrs:{label:"Sebagai Kas Masuk"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(1==s.iscashin?"iya":"tidak"))])]}}])}),a("el-table-column",{attrs:{label:"Sebagai Kas Keluar"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(1==s.iscashout?"iya":"tidak"))])]}}])}),a("el-table-column",{attrs:{label:"Role"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return t._l(s.role,(function(e){return a("span",{key:e},[t._v(t._s([e.name]))])}))}}])}),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.dialogFormVisible=!0,t.dialogStatus="update",t.name=s.name,t.id=s.id,t.iscashout=1==s.iscashout,t.iscashin=1==s.iscashin,t.roles=s.roles}}},[t._v(" Edit ")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.deleteList(s)}}},[t._v(" Delete ")])]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"520px","margin-left":"50px"},attrs:{"label-position":"left","label-width":"150px"}},[a("el-form-item",{attrs:{label:"Nama Kas/Bank"}},[a("el-input",{attrs:{placeholder:"Nama Kas/Bank..."},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("el-form-item",{attrs:{label:"Kas keluar"}},[a("el-checkbox",{model:{value:t.iscashout,callback:function(e){t.iscashout=e},expression:"iscashout"}},[t._v("Kas Keluar")])],1),a("el-form-item",{attrs:{label:"Kas masuk"}},[a("el-checkbox",{model:{value:t.iscashin,callback:function(e){t.iscashin=e},expression:"iscashin"}},[t._v("Kas Masuk")])],1),a("el-form-item",{attrs:{label:"Role akses"}},[a("el-select",{attrs:{multiple:"",placeholder:"Pilih Role"},model:{value:t.roles,callback:function(e){t.roles=e},expression:"roles"}},t._l(t.role,(function(t){return a("el-option",{key:t,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" Cancel ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createList():t.editList()}}},[t._v(" Confirm ")])],1)],1)],1)},i=[],o=(a("b0c0"),a("a78e")),l=a.n(o),n=a("0d5e"),r={name:"ComplexTable",data:function(){return{id:"",name:"",iscashout:!1,iscashin:!1,roles:[],dialogStatus:{},dialogFormVisible:!1,list:"",role:"",listLoading:"",total:"",textMap:{update:"Edit",create:"Buat "}}},created:function(){this.getList(),this.getRole()},methods:{getList:function(){var t=this;n["a"].get("/cashuser",{headers:{Authorization:"Bearer "+l.a.get("Admin-Token")}}).then((function(e){null!=e.data.cashuser?(console.log(e.data.cashuser),t.list=e.data.cashuser):t.list=[],t.dialogFormVisible=!1})).catch((function(e){e.response.data.success||t.$notify({title:"Error",message:"Data Belum Lengkap",type:"danger",duration:2e3})})),this.total=[],this.listLoading=!1},getRole:function(){var t=this;n["a"].get("/role",{headers:{Authorization:"Bearer "+l.a.get("Admin-Token")}}).then((function(e){null!=e.data.role?t.role=e.data.role:t.role=[]})).catch((function(e){e.response.data.success||t.$notify({title:"Error",message:"Data Belum Lengkap",type:"danger",duration:2e3})})),this.total=[],this.listLoading=!1},deleteList:function(t){var e=this;n["a"].delete("/cashuser/"+t.id,{headers:{Authorization:"Bearer "+l.a.get("Admin-Token")}}).then((function(t){t.data.success&&e.$notify({title:"Success",message:"Data berhasil dihapus",type:"success",duration:2e3}),e.dialogFormVisible=!1})).catch((function(t){t.response.data.success||e.$notify({title:"Error",message:"Data gagal di hapus",type:"danger",duration:2e3})})),this.getList(),this.total=[],this.listLoading=!1},createList:function(){var t=this,e={name:this.name,iscashin:this.iscashin,iscashout:this.iscashout,role:this.roles};n["a"].post("/cashuser",e,{headers:{Authorization:"Bearer "+l.a.get("Admin-Token")}}).then((function(e){e.data.success&&t.$notify({title:"Success",message:"Data berhasil ditambah",type:"success",duration:2e3}),t.dialogFormVisible=!1,t.form={}})).catch((function(e){e.response.data.success||t.$notify({title:"Error",message:"Data gagal di ditambah",type:"danger",duration:2e3})})),this.getList(),this.total=[],this.listLoading=!1},editList:function(){var t=this,e={id:this.id,name:this.name,iscashin:this.iscashin,iscashout:this.iscashout,role:this.roles};console.log(e),n["a"].put("/cashuser/"+e.id,e,{headers:{Authorization:"Bearer "+l.a.get("Admin-Token")}}).then((function(e){e.data.success&&t.$notify({title:"Success",message:"Data berhasil diubah",type:"success",duration:2e3}),t.dialogFormVisible=!1,t.form={}})).catch((function(e){e.response.data.success||t.$notify({title:"Error",message:"Data gagal di diubah",type:"danger",duration:2e3})})),this.getList(),this.total=[],this.listLoading=!1}}},c=r,u=a("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports}}]);