(function(t){function e(e){for(var r,o,i=e[0],s=e[1],c=e[2],l=0,m=[];l<i.length;l++)o=i[l],a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(m.length)m.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function i(t){return s.p+"js/"+({game:"game",newGame:"newGame",rooms:"rooms"}[t]||t)+"."+{game:"dfb686fd",newGame:"37f96408",rooms:"9ddf5fec"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={game:1,newGame:1,rooms:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({game:"game",newGame:"newGame",rooms:"rooms"}[t]||t)+"."+{game:"13b20c51",newGame:"24b2eaf9",rooms:"7ad6b8b6"}[t]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.request=r,delete o[t],f.parentNode.removeChild(f),n(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t),c=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("7c55"),n("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[n("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[n("mu-icon",{attrs:{value:"games"}})],1),t._v("\n\t\t"+t._s(t.$route.name)+"\n\t\t"),n("mu-menu",{attrs:{slot:"right"},on:{open:t.handleOpen},slot:"right"},[n("mu-button",{attrs:{flat:""}},[t._v(t._s(t.userName))]),n("mu-list",{attrs:{slot:"content"},slot:"content"},[n("mu-list-item",{attrs:{button:""}},[n("mu-list-item-content",[n("mu-list-item-title",[t._v("Score: "+t._s(t.score))])],1)],1),n("mu-list-item",{attrs:{button:""},on:{click:function(e){t.open=!0}}},[n("mu-list-item-content",[n("mu-list-item-title",[t._v("History")])],1)],1),n("mu-list-item",{attrs:{button:""},on:{click:t.logout}},[n("mu-list-item-content",[n("span",[t._v("Log out")])])],1)],1)],1)],1),n("mu-drawer",{attrs:{open:t.open,docked:!1,right:!1},on:{"update:open":function(e){t.open=e}}},[n("mu-list",t._l(t.history,function(e,r){return n("mu-list-item",{key:r,attrs:{button:""}},[e.win?n("mu-icon",{attrs:{value:"check_circle",color:"green"}}):n("mu-icon",{attrs:{value:"close",color:"red"}}),n("mu-list-item-title",[t._v(t._s(t._f("getTime")(e.time)))])],1)}),1)],1),n("router-view")],1)},f=[],d={name:"home",data:function(){return{open:!1,userName:sessionStorage.getItem("user")||"player",history:[],score:0}},mounted:function(){this.getHistory()},filters:{getTime:function(t){return new Date(t).toLocaleString()}},methods:{logout:function(){sessionStorage.clear(),this.$router.push("/")},handleOpen:function(){this.getHistory()},getHistory:function(){var t=this;this.$http({url:"/users",method:"get",data:{user:sessionStorage.getItem("user")}}).then(function(e){t.history=e||[],t.score=t.history.filter(function(t){return t.win}).length})}}},p=d,h=Object(u["a"])(p,m,f,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-form",{staticClass:"mu-demo-form",attrs:{model:t.form,"label-width":"100"}},[n("mu-form-item",{attrs:{prop:"input",label:"Your Name"}},[n("mu-text-field",{model:{value:t.form.player,callback:function(e){t.$set(t.form,"player",e)},expression:"form.player"}})],1),n("mu-form-item",[n("mu-button",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1)},b=[],y={data:function(){return{form:{}}},methods:{submit:function(){sessionStorage.setItem("user",this.form.player),this.$router.push("/rooms")}}},w=y,_=(n("f674"),Object(u["a"])(w,v,b,!1,null,"31e78b31",null)),k=_.exports;r["a"].use(l["a"]);var S=new l["a"]({routes:[{path:"/",name:"home",component:g,redirect:"/login",children:[{path:"/rooms",name:"Rooms",component:function(){return n.e("rooms").then(n.bind(null,"b924"))}},{path:"/newGame",name:"New Game",component:function(){return n.e("newGame").then(n.bind(null,"2871"))}},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}}]},{path:"/login",name:"WELCOME",component:k}]}),O=n("c0d6"),j=n("30f4"),E=n("4d7d"),x=n("d4ea"),G=n("dd88"),T=(n("aa12"),n("d6f6"),n("2095"),n("795b")),$=n.n(T),C=n("bc3a"),P=n.n(C);P.a.defaults.timeout=5e3,P.a.defaults.baseURL="http://localhost:3000";var N=function(t){var e=t.url,n=t.data,r=void 0===n?{}:n,o=t.method,a=void 0===o?"get":o,u=a.toLowerCase(),i={method:u,url:e};return"get"===u||"delete"===u?i.params=r:i.data=r,new $.a(function(t,e){P()(i).then(function(n){200===n.status?t(n.data):e()}).catch(function(t){alert("网络错误")})})},L=N;r["a"].use(E["a"]),r["a"].use(x["a"]),r["a"].use(j["a"]),r["a"].use(G["a"],{position:"top",time:2e3}),r["a"].config.productionTip=!1,r["a"].prototype.$http=L,new r["a"]({router:S,store:O["a"],render:function(t){return t(c)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},c0d6:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62");r["a"].use(o["a"]),e["a"]=new o["a"].Store({state:{},mutations:{SOCKET_message:function(t,e){var n=e.action,r=e.data;switch(n){case"socketId":sessionStorage.setItem("socketId",r);break;default:break}}},actions:{}})},ec14:function(t,e,n){},f674:function(t,e,n){"use strict";var r=n("ec14"),o=n.n(r);o.a}});
//# sourceMappingURL=app.73ab4c16.js.map