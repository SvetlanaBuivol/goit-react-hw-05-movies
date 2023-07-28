"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[886],{32:function(t,e,r){r.d(e,{Z:function(){return u}});r(791);var n=r(87),a=r(184);function u(t){var e=t.movies,r=t.state;return(0,a.jsx)("ul",{children:e&&e.map((function(t){var e=t.id,u=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(e),state:r,children:u})},e)}))})}},886:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(861),a=r(439),u=r(757),c=r.n(u),o=r(791),i=r(689),s=r(686),p=r(323),f=r(87),h=r(184);function l(t){var e=t.onSubmit,r=(0,f.lr)(),n=(0,a.Z)(r,2),u=n[0],c=n[1],i=(0,o.useState)((function(){var t;return null!==(t=u.get("query"))&&void 0!==t?t:""})),p=(0,a.Z)(i,2),l=p[0],v=p[1];return(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==l.trim()?(c({query:l}),e(l),v("")):s.Notify.warning("Please enter a value",{position:"center-center"})},children:[(0,h.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(t){v(t.target.value)},value:l}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)("span",{children:"Search"})})]})}var v=r(32),m=r(818),d=r(734);var w=function(){var t=(0,o.useState)(""),e=(0,a.Z)(t,2),r=e[0],u=e[1],f=(0,o.useContext)(d.m),w=f.movies,y=f.setMovies,x=(0,o.useState)(!1),Z=(0,a.Z)(x,2),g=Z[0],j=Z[1],b=(0,i.TH)();return(0,o.useEffect)((function(){if(r){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,(0,m.Ph)({query:r});case 4:if(e=t.sent,(n=e.results).length){t.next=9;break}return s.Notify.failure("Sorry, there are no movies matching your search query. Please try again.",{position:"center-center"}),t.abrupt("return");case 9:a=n.map((function(t){return{title:t.title,id:t.id}})),y(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:return t.prev=16,j(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})));return function(){return t.apply(this,arguments)}}();t()}}),[r,y]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{onSubmit:function(t){u(t),j(!0),y(null)}}),g&&(0,h.jsx)(p.Z,{}),w&&(0,h.jsx)(v.Z,{state:{from:b},movies:w})]})}},818:function(t,e,r){r.d(e,{Df:function(){return s},Ph:function(){return f},TP:function(){return l},tx:function(){return w},zv:function(){return m}});var n=r(861),a=r(757),u=r.n(a),c=r(243),o="https://api.themoviedb.org/3/",i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhiYWRjMjMwODgzZjkwODc3ZjA0YjkzMzg4YzE2MiIsInN1YiI6IjY0YzEzZDIyMmYxYmUwMDEyZDkxM2M2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87kGy0m8LKwU7rLB9Fu-QG9F6jP_TM1w6fEawWTAL5U"}};function s(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(o,"trending/movie/day"),i);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,t.prev=1,t.next=4,c.Z.get("".concat(o,"search/movie?query=").concat(r),i);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(o,"movie/").concat(e),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(o,"movie/").concat(e,"/credits"),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(o,"movie/").concat(e,"/reviews"),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=886.1b17a4d9.chunk.js.map