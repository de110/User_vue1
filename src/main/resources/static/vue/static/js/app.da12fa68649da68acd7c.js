webpackJsonp([1],{"4qvw":function(e,t){},IcnI:function(e,t){},MitW:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App",data:function(){return{isLogin:!1}},methods:{},created:function(){}},s,!1,function(e){n("jYEZ")},null,null).exports,o=n("/ocq"),i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("Home")])},staticRenderFns:[]};var l=n("VU/8")({},i,!1,function(e){n("4qvw")},null,null).exports,u=n("mtWM"),c=n.n(u),d={name:"Login",data:function(){return{credentials:{username:null,password:null}}},methods:{login:function(){var e=this;c()({method:"post",url:"http://localhost:8080/authenticate",data:this.credentials}).then(function(t){localStorage.setItem("jwt",t.data.token),e.$router.push({name:"Home"})}).catch(function(e){console.log(e)})},signup:function(){var e=this;c()({method:"post",url:"http://localhost:8080/signup",data:this.credentials}).then(function(t){localStorage.setItem("jwt",t.data.token),e.$router.push({name:"SignUp"})}).catch(function(e){console.log(e)})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("offco")]),e._v(" "),e._m(0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"form",attrs:{type:"text",id:"username",placeholder:"아이디"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form",attrs:{type:"password",id:"password",placeholder:"비밀번호"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}),n("br"),e._v(" "),n("button",{staticClass:"bt_login_form",on:{click:e.login}},[e._v("로그인")]),n("br"),e._v(" "),n("button",{staticClass:"bt_signup_form",on:{click:e.signup}},[e._v("회원가입")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",[this._v("로그인 유지"),t("input",{attrs:{type:"checkbox"}})])}]};var m=n("VU/8")(d,p,!1,function(e){n("MitW")},null,null).exports,v={name:"Login",data:function(){return{credentials:{username:null,password:null}}},methods:{signup:function(){var e=this;c()({method:"post",url:"http://localhost:8080/signup",data:this.credentials}).then(function(t){localStorage.setItem("jwt",t.data.token),e.$router.push({name:"Login"})}).catch(function(e){console.log(e)})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Login")]),e._v(" "),n("div",[n("label",{attrs:{for:"username"}},[e._v("사용자 이름: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}})]),e._v(" "),n("div",[n("label",{attrs:{for:"password"}},[e._v("비밀번호: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"password",id:"password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),e._v(" "),n("div",[n("label",{attrs:{for:"auth"}},[e._v("관리자 설정: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.auth,expression:"credentials.auth"}],attrs:{type:"auth",id:"auth"},domProps:{value:e.credentials.auth},on:{input:function(t){t.target.composing||e.$set(e.credentials,"auth",t.target.value)}}})]),e._v(" "),n("button",{on:{click:e.signup}},[e._v("회원가입")])])},staticRenderFns:[]},f=n("VU/8")(v,h,!1,null,null,null).exports;a.a.use(o.a);var g=new o.a({mode:"history",routes:[{path:"/home",name:"Home",component:l},{path:"/",name:"Login",component:m},{path:"/signup",name:"SignUp",component:f}]}),_=n("IcnI"),w=n.n(_);a.a.config.productionTip=!1,new a.a({el:"#app",router:g,store:w.a,components:{App:r},template:"<App/>"})},jYEZ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.da12fa68649da68acd7c.js.map