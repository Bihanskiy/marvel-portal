(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{216:function(t,r,e){"use strict";e.r(r);var n=e(4),a=e(2),o=e(1),c=e(29),i=e(10),u=e(23),s=e(60),l=e(0);r.default=function(t){var r=t.Component,e=t.dataType,f=Object(a.g)().id,h=Object(o.useState)(""),p=Object(n.a)(h,2),v=p[0],d=p[1],g=Object(c.a)(),m=g.loading,y=g.error,b=g.getComic,w=g.getCharacter,x=g.clearError;Object(o.useEffect)((function(){j()}),[f]);var j=function(){switch(x(),e){case"comic":b(f).then(O);break;case"character":w(f).then(O)}},O=function(t){d(t)},E=y?Object(l.jsx)(u.a,{}):null,L=m?Object(l.jsx)(i.a,{}):null,k=m||y||!v?null:Object(l.jsx)(r,{data:v});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{}),E,L,k]})}},23:function(t,r,e){"use strict";var n=e.p+"static/media/error.42292aa1.gif",a=e(0);r.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},29:function(t,r,e){"use strict";var n=e(30),a=e.n(n),o=e(31),c=e(4),i=e(1);r.a=function(){var t=function(){var t=Object(i.useState)(!1),r=Object(c.a)(t,2),e=r[0],n=r[1],u=Object(i.useState)(null),s=Object(c.a)(u,2),l=s[0],f=s[1];return{loading:e,request:Object(i.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(r){var e,o,c,i,u,s=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},n(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:o,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return u=t.sent,n(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),n(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return f(null)}),[])}}(),r=t.loading,e=t.request,n=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=d16d66c8f4ff301e7dc83bfb3155d0d7",f=function(){var t=Object(o.a)(a.a.mark((function t(){var r,n,o=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:210,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?name=").concat(r,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(g));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",g(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(){var r,n,o=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:0,t.next=3,e("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",m(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),g=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,70),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},m=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:r,error:n,clearError:u,getAllCharacters:f,getCharacter:p,getAllComics:v,getComic:d,getCharacterByName:h}}},30:function(t,r,e){t.exports=e(45)},31:function(t,r,e){"use strict";function n(t,r,e,n,a,o,c){try{var i=t[o](c),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(a,o){var c=t.apply(r,e);function i(t){n(c,a,o,i,u,"next",t)}function u(t){n(c,a,o,i,u,"throw",t)}i(void 0)}))}}e.d(r,"a",(function(){return a}))},45:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(S){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,o=Object.create(a.prototype),c=new C(n||[]);return o._invoke=function(t,r,e){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return T()}for(e.method=a,e.arg=o;;){var c=e.delegate;if(c){var i=L(c,e);if(i){if(i===d)continue;return i}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?v:h,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,c),o}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function g(){}function m(){}function y(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==e&&n.call(x,o)&&(b=x);var j=y.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(a,o,c,i){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,i)}),(function(t){e("throw",t,c,i)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,i)}))}i(u.arg)}var a;this._invoke=function(t,n){function o(){return new r((function(r,a){e(t,n,r,a)}))}return a=a?a.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return c.next=c}}return{next:T}}function T(){return{value:r,done:!0}}return m.prototype=y,u(j,"constructor",y),u(y,"constructor",m),m.displayName=u(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,i,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,a,o){void 0===o&&(o=Promise);var c=new E(s(r,e,n,a),o);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(j),u(j,i,"Generator"),u(j,o,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=r,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;_(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},59:function(t,r,e){},60:function(t,r,e){"use strict";e(59);var n=e.p+"static/media/Avengers.4065c8f9.png",a=e.p+"static/media/Avengers_logo.9eaf2193.png",o=e(0);r.a=function(){return Object(o.jsxs)("div",{className:"app__banner",children:[Object(o.jsx)("img",{src:n,alt:"Avengers"}),Object(o.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(o.jsx)("br",{}),"Stay tuned!"]}),Object(o.jsx)("img",{src:a,alt:"Avengers logo",className:"app__banner-img-avangers"})]})}}}]);
//# sourceMappingURL=6.5e6f74b4.chunk.js.map