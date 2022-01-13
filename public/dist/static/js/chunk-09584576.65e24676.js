(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09584576"],{2017:function(e,t,s){"use strict";s("cafe")},"70df":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("Login Form")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),s("el-button",{staticStyle:{width:"100%",margin:"0"},attrs:{type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v(" Daftar ")])],1),s("el-dialog",{attrs:{title:"Daftar",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[s("el-form",{ref:"registerForm",staticClass:"login-form",staticStyle:{background:"rgba(0,0,0,0.8)"},attrs:{model:e.registerForm,rules:e.registerRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("Register Form")])]),s("el-form-item",[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"name",attrs:{placeholder:"name",name:"name",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.registerForm.name,callback:function(t){e.$set(e.registerForm,"name",t)},expression:"registerForm.name"}})],1),s("el-form-item",[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"email"}})],1),s("el-input",{ref:"email",attrs:{placeholder:"email",name:"email",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"repassword",attrs:{type:e.passwordType,placeholder:"confirm password",name:"repassword",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:function(t){return e.checkCapslock(t)}},model:{value:e.registerForm.rePassword,callback:function(t){e.$set(e.registerForm,"rePassword",t)},expression:"registerForm.rePassword"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._v("Register")])],1)],1)],1)},a=[],n=(s("d3b7"),s("b64b"),s("61f7"),s("c24f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(t){return e.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" WeChat ")]),s("div",{staticClass:"sign-btn",on:{click:function(t){return e.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ ")])])}),r=[],i={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},l=i,c=(s("d9fb"),s("2877")),p=Object(c["a"])(l,n,r,!1,null,"7309fbbb",null),u=p.exports,d=s("0d5e"),m=s("5c96"),g={name:"Login",components:{SocialSign:u},data:function(){var e=function(e,t,s){t.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"",password:""},loginRules:{password:[{required:!0,trigger:"blur",validator:e}]},registerForm:{name:"",email:"",password:"",rePassword:""},registerRules:{password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(t){Object(m["Message"])("Login Failed!!"),e.loading=!1}))}))},handleRegister:function(){var e=this;this.$refs.registerForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0;var s=d["a"].post("/register",e.registerForm);s.then((function(t){Object(m["Message"])("Berhasil Silahkan Login!!"),e.$router.push({path:"/login",query:e.otherQuery}),e.showDialog=!1,e.loading=!1})).catch((function(t){Object(m["Message"])("Failed!!"),e.loading=!1,e.showDialog=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,s){return"redirect"!==s&&(t[s]=e[s]),t}),{})}}},f=g,h=(s("2017"),s("ef87"),Object(c["a"])(f,o,a,!1,null,"31303d82",null));t["default"]=h.exports},a9b3:function(e,t,s){},cafe:function(e,t,s){},d9fb:function(e,t,s){"use strict";s("a9b3")},ef87:function(e,t,s){"use strict";s("70df")}}]);