"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[886],{32:function(t,e,r){r.d(e,{Z:function(){return u}});r(791);var n=r(87),a=r(184);function u(t){var e=t.movies,r=t.state;return(0,a.jsx)("ul",{children:e&&e.map((function(t){var e=t.id,u=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(e),state:r,children:u})},e)}))})}},886:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),o=r(686),s=r(323),p=r(87),f=r(184);function l(t){var e,r=t.onSubmit,n=(0,p.lr)(),u=(0,a.Z)(n,2),c=u[0],i=u[1],s=null!==(e=c.get("query"))&&void 0!==e?e:"";return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==s.trim()?r(s):o.Notify.warning("Please enter a value",{position:"center-center"})},children:[(0,f.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(t){if(""===t.target.value)return i({});i({query:t.target.value})},value:s}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)("span",{children:"Search"})})]})}var h=r(32),v=r(818),m=r(734);var d=function(){var t=(0,i.useState)(""),e=(0,a.Z)(t,2),r=e[0],u=e[1],p=(0,i.useContext)(m.m),d=p.movies,w=p.setMovies,y=(0,i.useState)(!1),x=(0,a.Z)(y,2),g=x[0],Z=x[1];return(0,i.useEffect)((function(){if(r){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!0),t.prev=1,t.next=4,(0,v.Ph)({query:r});case 4:if(e=t.sent,(n=e.results).length){t.next=9;break}return o.Notify.failure("Sorry, there are no movies matching your search query. Please try again.",{position:"center-center"}),t.abrupt("return");case 9:a=n.map((function(t){return{title:t.title,id:t.id}})),w(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:return t.prev=16,Z(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})));return function(){return t.apply(this,arguments)}}();t()}}),[r,w]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onSubmit:function(t){u(t),Z(!0),w(null)}}),g&&(0,f.jsx)(s.Z,{}),d&&(0,f.jsx)(h.Z,{movies:d})]})}},818:function(t,e,r){r.d(e,{Df:function(){return s},Ph:function(){return f},TP:function(){return h},tx:function(){return w},zv:function(){return m}});var n=r(861),a=r(757),u=r.n(a),c=r(243),i="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhiYWRjMjMwODgzZjkwODc3ZjA0YjkzMzg4YzE2MiIsInN1YiI6IjY0YzEzZDIyMmYxYmUwMDEyZDkxM2M2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87kGy0m8LKwU7rLB9Fu-QG9F6jP_TM1w6fEawWTAL5U"}};function s(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(i,"trending/movie/day"),o);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,t.prev=1,t.next=4,c.Z.get("".concat(i,"search/movie?query=").concat(r),o);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(i,"movie/").concat(e),o);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(i,"movie/").concat(e,"/credits"),o);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(i,"movie/").concat(e,"/reviews"),o);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.massage);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=886.71a00fda.chunk.js.map