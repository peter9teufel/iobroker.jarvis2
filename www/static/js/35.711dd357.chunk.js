(this.webpackJsonpjarvis=this.webpackJsonpjarvis||[]).push([[35],{1399:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(9),u=r(0),c=r.n(u),a=r(2),o=r(1335),i=r(41),s=Object(i.a)((function(e){return{LinearProgress:{}}}));function f(e){var t=e.className,r=e.onCompleted,i=e.offset,f=void 0===i?0:i,l=e.total,b=s(),j=Object(u.useRef)(null),m=Object(u.useState)(f),v=Object(n.a)(m,2),p=v[0],O=v[1];return Object(u.useEffect)((function(){return function e(){O((function(e){return++e})),j.current=setTimeout((function(){return e()}),l/100)}(),function(){return j.current&&clearTimeout(j.current)}}),[l]),p>100&&(j.current&&clearTimeout(j.current),r&&setTimeout((function(){return r()}),500)),c.a.createElement(o.a,{classes:{root:Object(a.a)(b.LinearProgress,t)},variant:"determinate",value:p>100?100:p})}}}]);
//# sourceMappingURL=35.711dd357.chunk.js.map