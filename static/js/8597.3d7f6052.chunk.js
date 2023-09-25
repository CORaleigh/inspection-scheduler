"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[8597],{98597:(t,e,n)=>{n.r(e),n.d(e,{calcite_icon:()=>h});var r=n(946),i=n(81554),o=function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function c(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){t.done?n(t.value):i(t.value).then(a,c)}s((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},c="flip-rtl",s={},l={},u={s:16,m:24,l:32};function f(t){var e=t.icon,n=t.scale;return o(this,void 0,void 0,(function(){var t,i,o,c,f,h;return a(this,(function(a){switch(a.label){case 0:return t=u[n],i=function(t){var e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(1===n.length)return e?"i"+t:t;return n.map((function(t,n){return 0===n?e?"i"+t.toUpperCase():t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}(e),o="F"===i.charAt(i.length-1),c=o?i.substring(0,i.length-1):i,s[f=""+c+t+(o?"F":"")]?[2,s[f]]:(l[f]||(l[f]=fetch((0,r.e)("./assets/calcite-icon/"+f+".json")).then((function(t){return t.json()})).catch((function(){return console.error('"'+f+'" is not a valid calcite-ui-icon name'),""}))),[4,l[f]]);case 1:return h=a.sent(),s[f]=h,[2,h]}}))}))}var h=function(){function t(t){(0,r.r)(this,t),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}return t.prototype.connectedCallback=function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))},t.prototype.disconnectedCallback=function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)},t.prototype.componentWillLoad=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return this.loadIconPathData(),[2]}))}))},t.prototype.render=function(){var t,e=this,n=e.el,o=e.flipRtl,a=e.pathData,s=e.scale,l=e.textLabel,f=(0,i.g)(n),h=u[s],p=!!l,d=[].concat(a||"");return(0,r.h)(r.H,{"aria-hidden":(!p).toString(),"aria-label":p?l:null,role:p?"img":null},(0,r.h)("svg",{class:(t={},t[c]="rtl"===f&&o,t.svg=!0,t),fill:"currentColor",height:"100%",viewBox:"0 0 "+h+" "+h,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((function(t){return"string"===typeof t?(0,r.h)("path",{d:t}):(0,r.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))},t.prototype.loadIconPathData=function(){return o(this,void 0,void 0,(function(){var t,e,n,r,i;return a(this,(function(o){switch(o.label){case 0:return e=(t=this).icon,n=t.scale,r=t.visible,e&&r?(i=this,[4,f({icon:e,scale:n})]):[2];case 1:return i.pathData=o.sent(),[2]}}))}))},t.prototype.waitUntilVisible=function(t){var e=this;"undefined"!==typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()},Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}},enumerable:!1,configurable:!0}),t}();h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"},81554:(t,e,n)=>{n.d(e,{a:()=>c,b:()=>l,c:()=>f,d:()=>p,e:()=>h,f:()=>u,g:()=>s,h:()=>d,n:()=>a,s:()=>b});var r=function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function c(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){t.done?n(t.value):i(t.value).then(a,c)}s((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},o=function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t};function a(t){return Array.isArray(t)?t:Array.from(t)}function c(t,e){return Array.from(t.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(t,e){var n,r=e.name,i=e.value;return Object.assign(Object.assign({},t),((n={})[r]=i,n))}),{})}function s(t){return l(t,"dir","ltr",!0)}function l(t,e,n,r){void 0===r&&(r=!1);var i="["+e+"]",o=r?function(t,e){void 0===e&&(e=this);function n(e){if(!e||e===document||e===window)return null;var r=e.closest(t);return r||n(e.getRootNode().host)}return n(e)}(i,t):t.closest(i);return o?o.getAttribute(e):n}function u(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){return t?("function"===typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function f(t,e,n){var r='[slot="'+e+'"]';return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var r=Array.from(t.querySelectorAll(e));r=n&&!1===n.direct?r:r.filter((function(e){return e.parentElement===t}));var i=null===n||void 0===n?void 0:n.selector;return i?r.map((function(t){return Array.from(t.querySelectorAll(i))})).reduce((function(t,e){return o(o([],t),e)}),[]).filter((function(t){return!!t})):r}(t,r,n):function(t,e,n){var r=t.querySelector(e);r=n&&!1===n.direct||(null===r||void 0===r?void 0:r.parentElement)===t?r:null;var i=null===n||void 0===n?void 0:n.selector;return i?r.querySelector(i):r}(t,r,n)}function h(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function p(t,e){var n=null===t||void 0===t?void 0:t.getAttribute(e);return n&&document.getElementById(n)||null}function d(t,e){return t.contains(e)}function b(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}}}]);
//# sourceMappingURL=8597.3d7f6052.chunk.js.map