(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{text:"text",value:i,onChange:function(e){o(e.target.value)}}))},m=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null," ",t," "))},s=a(4),d=a.n(s),f=a(7),p=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"WicPdNasmrk8dnx8CRSEH9jsKAevtlAL",10,a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(10,"&api_key=").concat("WicPdNasmrk8dnx8CRSEH9jsKAevtlAL"),e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),i&&r.a.createElement("p",null,"Cargando..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["One Punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7def48d7.chunk.js.map