(function(e){function t(t){for(var a,n,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},o={app:0},s=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Nav"),r("div",{staticClass:"auth-wrapper"},[r("div",{staticClass:"auth-inner"},[r("router-view")],1)])],1)},s=[],n=r("1da1"),i=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand navbar-light fixed-top"},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Home")]),r("div",{staticClass:"collapse navbar-collapse"},[e.user?e._e():r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1)]),e.user?r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0)"},on:{click:e.handleClick}},[e._v("Logout")])])]):e._e()])],1)])}),l=[],c=r("5530"),u=r("2f62"),m={name:"Nav",methods:{handleClick:function(){localStorage.removeItem("token"),this.$store.dispatch("user",null),this.$router.push("/")}},computed:Object(c["a"])({},Object(u["b"])(["user"]))},p=m,d=r("2877"),v=Object(d["a"])(p,i,l,!1,null,null,null),f=v.exports,h=r("bc3a"),g=r.n(h),b={name:"App",components:{Nav:f},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("user");case 2:r=t.sent,e.$store.dispatch("user",r.data);case 4:case"end":return t.stop()}}),t)})))()}},_=b,w=(r("034f"),Object(d["a"])(_,o,s,!1,null,null,null)),x=w.exports,C=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex align-items-center justify-content-around"},[r("b-navbar",{attrs:{type:"dark",variant:"white"}},[r("b-nav-item-dropdown",{attrs:{text:"訂單管理"}},[r("b-dropdown-item",{attrs:{href:"#"},on:{click:e.showOrHidesearch}},[e._v("訂單查詢")]),r("b-dropdown-item",{attrs:{href:"#"},on:{click:e.showOrHidecreate}},[e._v("新增訂單")])],1)],1),r("div",{staticClass:"d-flex w-50 h-100"},[e.isShowSearch?r("div",{staticClass:"container d-flex align-items-center"},[r("div",[r("label",{attrs:{for:""}},[e._v("訂單狀態")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Select")]),r("option",[e._v("進行中")]),r("option",[e._v("已完成")])])]),"進行中"==e.selected?r("b-row",{staticClass:"d-flex flex-column mt-5 m-3"},[r("h4",[e._v("進行中")]),e._l(e.orders,(function(t,a){return r("b-col",{key:a,staticClass:"ml-5 w-25 d-flex flex-column"},[1===t.status.code||2===t.status.code?r("b-card",{staticClass:"mb-3 cardimg",attrs:{"img-src":t.logo,"img-alt":"Card image","img-left":""}},[r("b-card-text",[e._v(" "+e._s(t.status.type+"預計出貨日期:"+t.date)+" "),r("br"),e._v(" "+e._s(t.name)+" ")])],1):e._e()],1)}))],2):e._e(),"已完成"==e.selected?r("b-row",{staticClass:"d-flex flex-column mt-5 m-3"},[r("h4",[e._v("已完成")]),e._l(e.orders,(function(t,a){return r("b-col",{key:a,staticClass:"ml-5 w-50 d-flex flex-column donebox"},[3===t.status.code||4===t.status.code?r("b-card",{staticClass:"mb-3 cardimg",attrs:{"img-src":t.logo,"img-alt":"Card image","img-left":""}},[r("b-card-text",[e._v(" "+e._s(t.status.type+"預計出貨日期:"+t.date)+" "+e._s(t.name)+" ")])],1):e._e()],1)}))],2):e._e()],1):e._e(),e.isShowCreate?r("div",{staticClass:"d-flex mt-5 flex-column"},[r("input",{staticClass:"adddivbox",attrs:{type:"button",value:"+"},on:{click:e.addinputbox}}),e._l(e.itemArr,(function(t,a){return r("div",{key:a},[r("label",{attrs:{for:""}},[e._v("商品名稱 : "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("br"),r("label",{attrs:{for:""}},[e._v("圖示連結 : "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.logo,expression:"logo"}],attrs:{type:"text"},domProps:{value:e.logo},on:{input:function(t){t.target.composing||(e.logo=t.target.value)}}})]),r("br"),r("label",{attrs:{for:""}},[e._v("訂單狀態 : "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.orderstatus,expression:"orderstatus"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.orderstatus=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("Select")]),r("option",[e._v("進行中")]),r("option",[e._v("已完成")])])]),r("br"),r("input",{attrs:{type:"button",value:"新增"},on:{click:e.add}})])})),e._m(0)],2):e._e()])],1)])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"insert"}})])}],k=(r("b0c0"),{name:"Home",computed:Object(c["a"])({},Object(u["b"])(["user"])),data:function(){return{itemArr:[{content:"good"}],name:"",logo:"",isShowSearch:!0,isShowCreate:!1,selected:"",orders:[{name:"Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",logo:"https://static.oopocket.com/store/iconTreemall@3x.png",status:{code:3,type:"已取消"},date:"107/6/12"},{name:"BALMUDA The Toaster 百慕達烤麵包機-黑色",logo:"https://static.oopocket.com/store/iconTreemall@3x.png",status:{code:2,type:"已成立"},date:"108/7/21"},{name:"贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",logo:"https://static.oopocket.com/store/iconTreemall@3x.png",status:{code:1,type:"處理中"},date:"108/6/2"},{name:"Apple AirPds 2",logo:"https://static.oopocket.com/store/iconTreemall@3x.png",status:{code:4,type:"已送達"},date:"108/3/02"}]}},methods:{addinputbox:function(){this.itemArr.push({})},add:function(){var e=new Date((new Date).getTime()+864e5),t=e.getFullYear(),r=e.getMonth()+1>=10?e.getMonth()+1:"0"+(e.getMonth()+1),a=e.getDate()<10?"0"+e.getDate():e.getDate(),o=t+"/"+r+"/"+a;this.orders.push({name:this.name,logo:this.logo,status:{code:3,type:this.orderstatus},date:o})},showOrHidesearch:function(){this.isShowSearch=!this.isShowSearch,this.isShowSearch,this.isShowCreate},showOrHidecreate:function(){this.isShowCreate=!this.isShowCreate,this.isShowCreate,this.isShowSearch}}}),O=k,P=(r("8b71"),Object(d["a"])(O,y,S,!1,null,null,null)),j=P.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e.error?r("error",{attrs:{error:"error"}}):e._e(),r("h3",[e._v("登入")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"請輸入帳號"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"form-control",attrs:{type:"password",placeholder:"請輸入密碼"},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Login")])],1)},E=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")])},R=[],A={name:"Error",props:["error"]},D=A,T=Object(d["a"])(D,$,R,!1,null,null,null),L=T.exports,M={name:"Login",components:{Error:L},data:function(){return{email:"",password:"",error:""}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"abc83327@gmail.com"==e.email&&"12345"==e.login?e.$router.push("/"):alert("帳號或密碼錯誤");case 1:case"end":return t.stop()}}),t)})))()}}},H=M,F=Object(d["a"])(H,N,E,!1,null,null,null),B=F.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e.error?r("error",{attrs:{error:"error"}}):e._e(),r("h3",[e._v("Sign up")]),r("div",{staticClass:"form-group"},[r("label",[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Confirm Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirm,expression:"password_confirm"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.password_confirm},on:{input:function(t){t.target.composing||(e.password_confirm=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign up")])],1)},J=[],U={name:"Register",components:{Error:L},data:function(){return{first_name:"",last_name:"",email:"",password:"",password_confirm:"",error:""}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.post("register",{first_name:e.first_name,last_name:e.last_name,email:e.email,password:e.password,password_confirm:e.password_confirm});case 3:e.$router.push("/login"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error="Error occurred";case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},z=U,G=Object(d["a"])(z,I,J,!1,null,null,null),Y=G.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" "+e._s(e.message)+" ")]):e._e(),e.error?r("error",{attrs:{error:"error"}}):e._e(),r("h3",[e._v("Forgot Password")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Submit")])],1)},K=[],Q={name:"Forgot",components:{Error:L},data:function(){return{email:"",message:"",error:""}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.post("forgot",{email:e.email});case 3:e.message="The email was sent",e.error="",t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error="Error occurred",e.error="";case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},V=Q,W=Object(d["a"])(V,q,K,!1,null,null,null),X=W.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("h3",[e._v("Reset Password")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password Confirm")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password_comfirm,expression:"password_comfirm"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password Confirm"},domProps:{value:e.password_comfirm},on:{input:function(t){t.target.composing||(e.password_comfirm=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Submit")])])},ee=[],te={name:"Reset",data:function(){return{password:"",password_confirm:""}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.post("reset",{password:e.password,password_confirm:e.password_confirm,token:e.$route.params.token});case 2:r=t.sent,console.log(r),e.$router.push("/login");case 5:case"end":return t.stop()}}),t)})))()}}},re=te,ae=Object(d["a"])(re,Z,ee,!1,null,null,null),oe=ae.exports;a["default"].use(C["a"]);var se=new C["a"]({mode:"history",routes:[{path:"/",component:j},{path:"/login",component:B},{path:"/register",component:Y},{path:"/forgot",component:X},{path:"/reset/:token",component:oe}]});g.a.defaults.baseURL="http://localhost:8000/",g.a.defaults.headers.common["Authorization"]="Bearer"+localStorage.getItem("token"),a["default"].use(u["a"]);var ne={user:null},ie=new u["a"].Store({state:ne,getters:{user:function(e){return e.user}},actions:{user:function(e,t){e.commit("user",t)}},mutations:{user:function(e,t){e.user=t}}}),le=ie,ce=r("5f5b");a["default"].use(ce["a"]),a["default"].config.productionTip=!1,new a["default"]({router:se,store:le,render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,r){},"88d7":function(e,t,r){},"8b71":function(e,t,r){"use strict";r("88d7")}});
//# sourceMappingURL=app.a1a75f7c.js.map