(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{271:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(77),n(59),{name:"LoginPage",layout:"no-nav",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://localhost:5000/users").then((function(e){t.$store.dispatch("setUser",e.data[0])}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Login page",meta:[{name:"robots",content:"noindex"},{name:"googlebot",content:"noindex"},{hid:"description",name:"description",content:"Esta página foi exibida no dia ".concat(this.dia," as ").concat(this.hora)}]}},computed:{hora:function(){var t=new Date,e=t.getHours(),n=t.getMinutes();return(e<9?"0"+e:e)+":"+(n<9?"0"+n:n)},dia:function(){var t=new Date,e=t.getDate(),n=t.getMonth()+1;return(e<9?"0"+e:e)+"/"+(n<9?"0"+n:n)+"/"+t.getFullYear()},user:function(){return this.$store.state.user}},methods:{cancelar:function(){this.$store.dispatch("setUser",{}),this.$router.push("/")}}}),c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col  items-center my-4 mx-auto w-4/5 border rounded-md"},[n("label",{staticClass:"font-bold"},[t._v("e-mail\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"border mt-4 p-1",attrs:{id:"email",type:"text",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex justify-center w-4/5 m-2 "},[n("nuxt-link",{staticClass:"w-32 m-2 p-2 rounded-lg bg-blue-400 text-center text-white",attrs:{to:"/"}},[t._v("Login")]),t._v(" "),n("button",{staticClass:"w-32 m-2 p-2 rounded-lg border",on:{click:t.cancelar}},[t._v("Cancelar")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"font-bold"},[t._v("senha\n    "),n("input",{staticClass:"border mt-4 p-1",attrs:{id:"senha",type:"password",name:"senha"}})])}],!1,null,null,null);e.default=component.exports}}]);