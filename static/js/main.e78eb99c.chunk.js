(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c,i,a,o,r,s,d,j,u,b,l,h,O,f,p=n(0),m=n(9),g=n.n(m),x=(n(17),n(4)),v=n(2),y=n(3),S=n(1),w=y.a.div(c||(c=Object(v.a)(["\n  width: 300px;\n  margin: 10px auto;\n"]))),k=y.a.h1(i||(i=Object(v.a)(["\n  color: #333;\n"]))),C=y.a.form(a||(a=Object(v.a)([""]))),D=y.a.textarea(o||(o=Object(v.a)(["\n  display: block;\n  width: 100%;\n"]))),_=y.a.button(r||(r=Object(v.a)(["\n  margin-top: 20px;\n"]))),E=y.a.div(s||(s=Object(v.a)([""]))),F=y.a.div(d||(d=Object(v.a)(["\n  border: solid 1px;\n  border-radius: 8px;\n  margin: 10px auto;\n  padding: 8px 16px;\n"]))),L=y.a.div(j||(j=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),T=y.a.div(u||(u=Object(v.a)(["\n  font-size: 14px;\n  color: #666;\n"]))),z=y.a.div(b||(b=Object(v.a)(["\n  color: #999;\n"]))),A=y.a.div(l||(l=Object(v.a)(["\n  margin-top: 10px;\n  font-size: 16px;\n"]))),J=y.a.button(h||(h=Object(v.a)([""]))),P=function(t){var e=t.author,n=t.time,c=t.children,i=t.handleDelete,a=t.id;return Object(S.jsxs)(F,{children:[Object(S.jsxs)(L,{children:[Object(S.jsx)(T,{children:e}),Object(S.jsx)(z,{children:n}),Object(S.jsx)(J,{onClick:function(){i(a)},children:"\u522a\u9664"})]}),Object(S.jsx)(A,{children:c})]})},B=y.a.div(O||(O=Object(v.a)(["\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n"]))),I=y.a.div(f||(f=Object(v.a)(["\n  color: red;\n"])));var N=function(){var t=Object(p.useState)(null),e=Object(x.a)(t,2),n=e[0],c=e[1],i=Object(p.useState)(null),a=Object(x.a)(i,2),o=a[0],r=a[1],s=Object(p.useState)(),d=Object(x.a)(s,2),j=d[0],u=d[1],b=Object(p.useState)(),l=Object(x.a)(b,2),h=l[0],O=l[1],f=Object(p.useState)(!1),m=Object(x.a)(f,2),g=m[0],v=m[1],y=Object(p.useState)(),F=Object(x.a)(y,2),L=F[0],T=F[1],z=function(){return fetch("https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc&_page=1&_limit=5").then((function(t){return T(t.headers.get("X-Total-Count")),t.json()})).then((function(t){c(t)})).catch((function(t){r(t.message)}))};console.log(Array.from({length:L},(function(t,e){return e}))),Object(p.useEffect)((function(){z()}),[]);var A=function(t){g||(v(!0),fetch("https://student-json-api.lidemy.me/comments/".concat(t),{method:"DELETE"}).then((function(){v(!1),z()})).catch((function(t){O(t.message)})))};return Object(S.jsxs)(w,{children:[g&&Object(S.jsx)(B,{children:"Loding..."}),Object(S.jsx)(k,{children:"\u7559\u8a00\u677f"}),Object(S.jsxs)(C,{onSubmit:function(t){t.preventDefault(),g||(v(!0),fetch("https://student-json-api.lidemy.me/comments?_page=1&_limit=5",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"hello",body:j})}).then((function(t){return t.json()})).then((function(t){v(!1),0!==t.ok?(u(""),z()):O(t.message)})).catch((function(t){v(!1),O(t.message)})))},children:[Object(S.jsx)(D,{value:j,onChange:function(t){u(t.target.value)},onFocus:function(){O(null)},rows:10}),Object(S.jsx)(_,{children:"\u9001\u51fa"})]}),h&&Object(S.jsx)(I,{children:h}),o&&Object(S.jsxs)(I,{children:["Something went wrong! ",o.toString()]}),n&&0===n.length&&Object(S.jsx)("div",{children:"No data"}),Object(S.jsx)(E,{children:n&&n.map((function(t){return Object(S.jsx)(P,{id:t.id,author:t.nickname,time:new Date(t.createdAt).toLocaleString(),handleDelete:A,children:t.body},t.id)}))})]})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};g.a.render(Object(S.jsx)(N,{}),document.getElementById("root")),X()}},[[21,1,2]]]);
//# sourceMappingURL=main.e78eb99c.chunk.js.map