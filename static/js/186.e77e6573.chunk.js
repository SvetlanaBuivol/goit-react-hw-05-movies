"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(323),o=e(791),i=e(689),p=e(818),h=e(184);function f(){var t=(0,i.UO)().movieId,r=(0,o.useState)([]),e=(0,a.Z)(r,2),c=e[0],f=e[1],l=(0,o.useState)(!1),v=(0,a.Z)(l,2),w=v[0],d=v[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.prev=1,r.next=4,(0,p.tx)(t);case 4:if(e=r.sent,(n=e.results).length){r.next=8;break}return r.abrupt("return");case 8:a=n.map((function(t){return{author:t.author,content:t.content,id:t.id}})),f(a),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),console.log(r.t0);case 15:return r.prev=15,d(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[1,12,15,18]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,h.jsxs)(h.Fragment,{children:[w&&(0,h.jsx)(s.Z,{}),(0,h.jsx)("ul",{children:c.length?c.map((function(t){var r=t.id,e=t.author,n=t.content;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",e]}),(0,h.jsx)("p",{children:n})]},r)})):(0,h.jsx)("h3",{children:"We don't have any reviews for this movie"})})]})}},818:function(t,r,e){e.d(r,{Df:function(){return i},Ph:function(){return h},TP:function(){return l},tx:function(){return m},zv:function(){return w}});var n=e(861),a=e(757),c=e.n(a),u=e(243),s="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhiYWRjMjMwODgzZjkwODc3ZjA0YjkzMzg4YzE2MiIsInN1YiI6IjY0YzEzZDIyMmYxYmUwMDEyZDkxM2M2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87kGy0m8LKwU7rLB9Fu-QG9F6jP_TM1w6fEawWTAL5U"}};function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"trending/movie/day"),o);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.query,t.prev=1,t.next=4,u.Z.get("".concat(s,"search/movie?query=").concat(e),o);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(r),o);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function w(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(r,"/credits"),o);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(r,"/reviews"),o);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.e77e6573.chunk.js.map