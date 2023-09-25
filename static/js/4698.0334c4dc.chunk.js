"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[4698],{24698:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>le,extend:()=>ie,extractFieldLiterals:()=>se,findFunctionCalls:()=>de,functionHelper:()=>ce,referencesFunction:()=>fe,referencesMember:()=>he,validateScript:()=>ue});var r=n(66978),o=n(78952),a=n(32238),c=n(7882),i=n(53866),l=n(77577),s=n(80885),u=n(29909),h=n(790),f=n(40778),d=n(47488),p=n(44715),g=n(49018),v=n(72741),E=n(19191),y=n(29876),m=n(5431),w=n(28183),N=n(50386),I=n(97512),b=n(12271),U=n(85265),T=n(82197),R=n(63425),S=n(83806);const O=100;function D(e){return e instanceof Error?(0,r.d1)(e):(0,r.d1)(new Error(e))}function C(e){return(0,r.DB)(e)}function A(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(x(e,t.arguments[r]));return(0,r.$6)(n)}function F(e,t,n){return(0,r.Ue)(((r,o)=>{A(e,t).then((a=>{try{r(n(e,t,a))}catch(c){o(c)}}),o)}))}function M(e,t,n){try{return A(e,t).then((o=>{try{const a=n(e,t,o);return function(e){return e&&"function"==typeof e.then}(a)?a:(0,r.DB)(a)}catch(a){return D(a)}}))}catch(o){return D(o)}}function x(e,t,n){try{if(t.breakpoint&&!0!==n)return t.breakpoint().then((()=>x(e,t,!0)));switch(t.type){case"VariableDeclarator":return function(e,t){try{let n=null;return n=null===t.init?(0,r.DB)(null):x(e,t.init),null!==e.localScope?n.then((n=>(0,r.Ue)((r=>{if(n===p.v&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();e.localScope[o]={value:n,valueset:!0,node:t.init},r(p.v)})))):n.then((n=>(0,r.Ue)((r=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();n===p.v&&(n=null),e.globalScope[o]={value:n,valueset:!0,node:t.init},r(p.v)}))))}catch(n){return D(n)}}(e,t);case"VariableDeclaration":return j(e,t,0);case"BlockStatement":return function(e,t){try{return V(e,t,0)}catch(n){return D(n)}}(e,t);case"FunctionDeclaration":return function(e,t){try{const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new h.Z(t,e)},(0,r.DB)(p.v)}catch(n){return D(n)}}(e,t);case"ReturnStatement":return function(e,t){return(0,r.Ue)(((n,r)=>{null===t.argument?n(new p.R(p.v)):x(e,t.argument).then((e=>{try{n(new p.R(e))}catch(t){r(t)}}),r)}))}(e,t);case"IfStatement":return function(e,t){return(0,r.Ue)(((n,r)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?x(e,t.test).then((o=>{try{!0===o?x(e,t.consequent).then(n,r):!1===o?null!==t.alternate?x(e,t.alternate).then(n,r):n(p.v):r(new Error((0,w.H5)(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(a){r(a)}}),r):r(new Error((0,w.H5)(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?x(e,t.expression):(t.expression.type,x(e,t.expression).then((e=>(0,r.Ue)((t=>{t(e===p.v?p.v:new p.I(e))})))))}catch(n){return(0,r.d1)(n)}}(e,t);case"UpdateExpression":return function(e,t){try{const n=t.argument;if("MemberExpression"===n.type){const o={t:null};return x(e,n.object).then((t=>{let a=null;return o.t=t,!0===n.computed?a=x(e,n.property):"Identifier"===n.property.type&&(a=(0,r.DB)(n.property.name)),a})).then((e=>(0,r.Ue)((n=>{const r=o.t;let a;if((0,p.a)(r)){if(!(0,p.k)(e))throw new Error("Invalid Parameter");if(e<0&&(e=r.length+e),e<0||e>=r.length)throw new Error("Assignment outside of array bounds");a=(0,p.t)(r[e]),r[e]="++"===t.operator?a+1:a-1}else if(r instanceof g.Z){if(!1===(0,p.g)(e))throw new Error("Dictionary accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");a=(0,p.t)(r.field(e)),r.setField(e,"++"===t.operator?a+1:a-1)}else{if(!(r instanceof m.Z))throw(0,p.b)(r)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===(0,p.g)(e))throw new Error("Feature accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");a=(0,p.t)(r.field(e)),r.setField(e,"++"===t.operator?a+1:a-1)}!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1)}))))}return(0,r.Ue)(((n,r)=>{const o="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!o)throw new Error("Invalid identifier");let a;return null!==e.localScope&&void 0!==e.localScope[o]?(a=(0,p.t)(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void 0!==e.globalScope[o]?(a=(0,p.t)(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void r(new Error("Variable not recognised"))}))}catch(n){return(0,r.d1)(n)}}(e,t);case"AssignmentExpression":return function(e,t){return(0,r.Ue)(((n,o)=>{const a=t.left;if("MemberExpression"===a.type)x(e,t.right).then((c=>{try{x(e,a.object).then((i=>{try{let l=null;if(!0===a.computed)l=x(e,a.property);else{if("Identifier"!==a.property.type)throw new Error("Expected computed or identifier for assignemnt target");l=(0,r.DB)(a.property.name)}l.then((e=>{try{if((0,p.a)(i)){if(!(0,p.k)(e))throw new Error("Invalid Parameter");if(e<0&&(e=i.length+e),e<0||e>i.length)throw new Error("Assignment outside of array bounds");if(e===i.length){if("="!==t.operator)throw new Error("Invalid Parameter");i[e]=_(c,t.operator,i[e],t)}else i[e]=_(c,t.operator,i[e],t)}else if(i instanceof g.Z){if(!1===(0,p.g)(e))throw new Error("Dictionary accessor must be a string");if(!0===i.hasField(e))i.setField(e,_(c,t.operator,i.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");i.setField(e,_(c,t.operator,null,t))}}else{if(!(i instanceof m.Z))throw(0,p.b)(i)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===(0,p.g)(e))throw new Error("Feature accessor must be a string");if(!0===i.hasField(e))i.setField(e,_(c,t.operator,i.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");i.setField(e,_(c,t.operator,null,t))}}n(p.v)}catch(r){o(r)}}),o)}catch(l){o(l)}}),o)}catch(i){o(i)}}),o);else{const r=a.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[r])return void x(e,t.right).then((a=>{try{e.localScope[r]={value:_(a,t.operator,e.localScope[r].value,t),valueset:!0,node:t.right},n(p.v)}catch(c){o(c)}}),o);void 0!==e.globalScope[r]?x(e,t.right).then((a=>{try{e.globalScope[r]={value:_(a,t.operator,e.globalScope[r].value,t),valueset:!0,node:t.right},n(p.v)}catch(c){o(c)}}),o):o(new Error("Cannot assign undeclared variable"))}}))}(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?x(e,t.init).then((()=>(0,r.Ue)(((n,r)=>{P(e,t,{testResult:!0,lastAction:p.v},(e=>{n(e)}),(e=>{r(e)}),0)})))):(0,r.Ue)(((n,r)=>{P(e,t,{testResult:!0,lastAction:p.v},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){return(0,r.d1)(n)}}(e,t);case"ForInStatement":return function(e,t){return(0,r.Ue)(((n,o)=>{x(e,t.right).then((a=>{try{let c=null;c="VariableDeclaration"===t.left.type?x(e,t.left):(0,r.DB)(),c.then((()=>{try{let r="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(r=e.name)}else"Identifier"===t.left.type&&(r=t.left.name);if(!r)throw new Error((0,w.H5)(t,"RUNTIME","INVALIDVARIABLE"));r=r.toLowerCase();let c=null;if(null!==e.localScope&&void 0!==e.localScope[r]&&(c=e.localScope[r]),null===c&&void 0!==e.globalScope[r]&&(c=e.globalScope[r]),null===c)return void o(new Error((0,w.H5)(t,"RUNTIME","VARIABLENOTDECLARED")));(0,p.a)(a)||(0,p.g)(a)?B(e,t,a,{reject:o,resolve:n},c):(0,p.b)(a)?function(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(p.v);H(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(c){r.reject(c)}}(e,t,a,{reject:o,resolve:n},c):a instanceof g.Z||a instanceof m.Z?function(e,t,n,r,o){try{B(e,t,n.keys(),r,o,"k")}catch(a){r.reject(a)}}(e,t,a,{reject:o,resolve:n},c):(0,p.q)(a)?Z(a.iterator(e.abortSignal),e,t,a,c,(e=>{n(e)}),(e=>{o(e)}),0):B(e,t,[],{reject:o,resolve:n},c)}catch(r){o(r)}}),o)}catch(c){o(c)}}),o)}))}(e,t);case"BreakStatement":return(0,r.DB)(p.m);case"EmptyStatement":return(0,r.DB)(p.v);case"ContinueStatement":return(0,r.DB)(p.n);case"TemplateElement":return function(e,t){return(0,r.DB)(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return(0,r.Ue)((n=>{const r=[];(0,y.Dt)(t.expressions,((t,n,o,a)=>x(e,n).then((e=>{r[o]=(0,p.d)(e)})))).then((()=>{let e="",o=0;for(const n of t.quasis)e+=n.value?n.value.cooked:"",!1===n.tail&&(e+=r[o]?r[o]:"",o++);n(e)}))}))}(e,t);case"Identifier":return q(e,t);case"MemberExpression":return function(e,t){try{return x(e,t.object).then((n=>{try{return null===n?(0,r.d1)(new Error((0,w.H5)(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof g.Z||n instanceof m.Z?(0,r.DB)(n.field(t.property.name)):n instanceof a.Z?(0,r.DB)(G(n,t.property.name,e,t)):(0,r.d1)(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE"))):(0,r.d1)(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE"))):x(e,t.property).then((o=>(0,r.Ue)(((r,c)=>{if(n instanceof g.Z||n instanceof m.Z)(0,p.g)(o)?r(n.field(o)):c(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof a.Z)(0,p.g)(o)?r(G(n,o,e,t)):c(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE")));else if((0,p.a)(n))if((0,p.k)(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=n.length+o),o>=n.length||o<0)throw new Error((0,w.H5)(t,"RUNTIME","OUTOFBOUNDS"));r(n[o])}else c(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE")));else if((0,p.b)(n))if((0,p.k)(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=n.length()+o),o>=n.length()||o<0)throw new Error((0,w.H5)(t,"RUNTIME","OUTOFBOUNDS"));r(n.get(o))}else c(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE")));else if((0,p.g)(n))if((0,p.k)(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=n.length+o),o>=n.length||o<0)throw new Error((0,w.H5)(t,"RUNTIME","OUTOFBOUNDS"));r(n[o])}else c(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE")));else c(new Error((0,w.H5)(t,"RUNTIME","INVALIDTYPE")))}))))}catch(o){return D(o)}}))}catch(n){return D(n)}}(e,t);case"Literal":return C(t.value);case"CallExpression":return function(e,t){try{if("Identifier"!==t.callee.type)return D((0,w.H5)(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof p.N?n.value.fn(e,t):n.value instanceof h.Z?te(e,t,n.value.definition):D((0,w.H5)(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];return n.value instanceof p.N?n.value.fn(e,t):n.value instanceof h.Z?te(e,t,n.value.definition):D((0,w.H5)(t,"RUNTIME","NOTAFUNCTION"))}return D((0,w.H5)(t,"RUNTIME","NOTFOUND"))}catch(n){return D(n)}}(e,t);case"UnaryExpression":return function(e,t){try{return x(e,t.argument).then((e=>(0,r.Ue)(((n,r)=>{(0,p.i)(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*(0,p.t)(e)):"+"===t.operator?n(1*(0,p.t)(e)):"~"===t.operator?n(~(0,p.t)(e)):r(new Error((0,w.H5)(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))))}catch(n){return D(n)}}(e,t);case"BinaryExpression":return function(e,t){try{return(0,r.$6)([x(e,t.left),x(e,t.right)]).then((e=>(0,r.Ue)(((n,r)=>{const o=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n((0,p.j)((0,p.t)(o),(0,p.t)(a),t.operator));case"==":n((0,p.e)(o,a));break;case"!=":n(!(0,p.e)(o,a));break;case"<":case">":case"<=":case">=":n((0,p.h)(o,a,t.operator));break;case"+":(0,p.g)(o)||(0,p.g)(a)?n((0,p.d)(o)+(0,p.d)(a)):n((0,p.t)(o)+(0,p.t)(a));break;case"-":n((0,p.t)(o)-(0,p.t)(a));break;case"*":n((0,p.t)(o)*(0,p.t)(a));break;case"/":n((0,p.t)(o)/(0,p.t)(a));break;case"%":n((0,p.t)(o)%(0,p.t)(a));break;default:r(new Error((0,w.H5)(t,"RUNTIME","OPERATORNOTRECOGNISED")))}}))))}catch(n){return D(n)}}(e,t);case"LogicalExpression":return function(e,t){return(0,r.Ue)(((n,r)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?x(e,t.left).then((o=>{try{if(!(0,p.i)(o))throw new Error((0,w.H5)(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===o?n(o):x(e,t.right).then((e=>{try{if(!(0,p.i)(e))throw new Error((0,w.H5)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(o){r(o)}}),r);break;case"&&":!1===o?n(o):x(e,t.right).then((e=>{try{if(!(0,p.i)(e))throw new Error((0,w.H5)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(o){r(o)}}),r);break;default:throw new Error((0,w.H5)(t,"RUNTIME","ONLYORORAND"))}}catch(a){r(a)}}),r):r(new Error((0,w.H5)(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error((0,w.H5)(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ConditionalExpression":return D((0,w.H5)(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)n.push(x(e,t.elements[r]));return(0,r.$6)(n).then((e=>(0,r.Ue)(((n,r)=>{for(let o=0;o<e.length;o++){if((0,p.c)(e[o]))return void r(new Error((0,w.H5)(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===p.v&&(e[o]=null)}n(e)}))))}catch(n){return D(n)}}(e,t);case"ObjectExpression":return function(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(x(e,t.properties[r]));return(0,r.$6)(n).then((e=>(0,r.Ue)((t=>{const n={};for(let o=0;o<e.length;o++){const t=e[o];if((0,p.c)(t.value))throw new Error("Illegal Argument");if(!1===(0,p.g)(t.key))throw new Error("Illegal Argument");t.value===p.v?n[t.key.toString()]=null:n[t.key.toString()]=t.value}const r=new g.Z(n);r.immutable=!1,t(r)}))))}catch(n){return D(n)}}(e,t);case"Property":return function(e,t){try{return x(e,t.value).then((n=>(0,r.Ue)((r=>{"Identifier"===t.key.type?r({key:t.key.name,value:n}):x(e,t.key).then((e=>{r({key:e,value:n})}))}))))}catch(n){return(0,r.d1)(n)}}(e,t);default:return D((0,w.H5)(t,"RUNTIME","UNREOGNISED"))}}catch(o){return D(o)}}function k(e,t,n){try{return x(e,t.body).then((o=>{try{return n.lastAction=o,n.lastAction===p.m||n.lastAction instanceof p.R?(n.testResult=!1,(0,r.DB)(n)):null!==t.update?x(e,t.update).then((()=>(0,r.DB)(n))):(0,r.DB)(n)}catch(a){return(0,r.d1)(a)}}))}catch(o){return(0,r.d1)(o)}}function P(e,t,n,o,a,c){try{(function(e,t,n){try{return null!==t.test?x(e,t.test).then((o=>{try{return!0===e.abortSignal.aborted?(0,r.d1)(new Error("Cancelled")):(n.testResult=o,!1===n.testResult?(0,r.DB)(n):!0!==n.testResult?(0,r.d1)(new Error((0,w.H5)(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):k(e,t,n))}catch(a){return(0,r.d1)(a)}})):k(e,t,n)}catch(c){return(0,r.d1)(c)}})(e,t,n).then((()=>{try{!0===n.testResult?++c>O?(c=0,setTimeout((()=>{P(e,t,n,o,a,c)}),0)):P(e,t,n,o,a,c):n.lastAction instanceof p.R?o(n.lastAction):o(p.v)}catch(r){a(r)}}),(e=>{a(e)}))}catch(i){a(i)}}function L(e,t,n,r,o,a,c,i,l,s){try{if(r<=a)return void i(p.v);o.value="k"===c?n[a]:a,x(e,t.body).then((u=>{try{u instanceof p.R?i(u):u===p.m?i(p.v):++s>O?(s=0,setTimeout((()=>{L(e,t,n,r,o,a+1,c,i,l,s)}),0)):L(e,t,n,r,o,a+1,c,i,l,s)}catch(h){l(h)}}),(e=>{l(e)}))}catch(u){l(u)}}function H(e,t,n,r,o,a,c,i,l){try{if(n.length()<=o)return void c(p.v);r.value="k"===a?n.get(o):o,x(e,t.body).then((s=>{s instanceof p.R?c(s):s===p.m?c(p.v):++l>O?(l=0,setTimeout((()=>{H(e,t,n,r,o+1,a,c,i,l)}),0)):H(e,t,n,r,o+1,a,c,i,l)}),(e=>{i(e)}))}catch(s){i(s)}}function B(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(p.v);L(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(c){r.reject(c)}}function Z(e,t,n,r,o,a,c,i){try{e.next().then((l=>{try{if(null===l)a(p.v);else{const s=m.Z.createFromGraphicLikeObject(l.geometry,l.attributes,r);s._underlyingGraphic=l,o.value=s,x(t,n.body).then((l=>{try{l===p.m?a(p.v):l instanceof p.R?a(l):++i>O?(i=0,setTimeout((()=>{Z(e,t,n,r,o,a,c,i)}),0)):Z(e,t,n,r,o,a,c,i)}catch(s){c(s)}}),(e=>{c(e)}))}}catch(s){c(s)}}),(e=>{c(e)}))}catch(l){c(l)}}function _(e,t,n,r){switch(t){case"=":return e===p.v?null:e;case"/=":return(0,p.t)(n)/(0,p.t)(e);case"*=":return(0,p.t)(n)*(0,p.t)(e);case"-=":return(0,p.t)(n)-(0,p.t)(e);case"+=":return(0,p.g)(n)||(0,p.g)(e)?(0,p.d)(n)+(0,p.d)(e):(0,p.t)(n)+(0,p.t)(e);case"%=":return(0,p.t)(n)%(0,p.t)(e);default:throw new Error((0,w.H5)(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function V(e,t,n){try{return n>=t.body.length?(0,r.DB)(p.v):(0,r.Ue)(((r,o)=>{x(e,t.body[n]).then((a=>{try{a instanceof p.R||a===p.m||a===p.n||n===t.body.length-1?r(a):V(e,t,n+1).then(r,o)}catch(c){o(c)}}),o)}))}catch(o){return D(o)}}function j(e,t,n){return(0,r.Ue)(((r,o)=>{n>=t.declarations.length?r(p.v):x(e,t.declarations[n]).then((()=>{n===t.declarations.length-1?r(p.v):j(e,t,n+1).then((()=>{r(p.v)}),o)}),o)}))}let Y=0;function G(e,t,n,r){let o;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(Y++,e.spatialReference._arcadeCacheId=Y,t=Y)}const n=new g.Z({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return o=e.cache._arcadeCacheId,void 0===o&&(Y++,o=Y,e.cache._arcadeCacheId=o),new d.Z(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return o=e.cache._arcadeCacheId,void 0===o&&(Y++,o=Y,e.cache._arcadeCacheId=o),new d.Z(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return o=e.cache._arcadeCacheId,void 0===o&&(Y++,o=Y,e.cache._arcadeCacheId=o),new f.Z(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,o,1);case"type":return"Multipoint"}}throw new Error((0,w.H5)(r,"RUNTIME","PROPERTYNOTFOUND"))}function q(e,t){return(0,r.Ue)(((n,r)=>{const o=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])r(new Error((0,w.H5)(t,"RUNTIME","VARIABLENOTFOUND")));else{const t=e.globalScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=x(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(o){r(o)}}),r))}else{const t=e.localScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=x(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(o){r(o)}}),r))}}))}const z={};function $(e){return null===e?"":(0,p.a)(e)||(0,p.b)(e)?"Array":(0,p.o)(e)?"Date":(0,p.g)(e)?"String":(0,p.i)(e)?"Boolean":(0,p.k)(e)?"Number":e instanceof E.Z?"Attachment":e instanceof v.Z?"Portal":e instanceof g.Z?"Dictionary":e instanceof m.Z?"Feature":e instanceof c.Z?"Point":e instanceof s.Z?"Polygon":e instanceof u.Z?"Polyline":e instanceof l.Z?"Multipoint":e instanceof i.Z?"Extent":(0,p.c)(e)?"Function":(0,p.q)(e)?"FeatureSet":(0,p.r)(e)?"FeatureSetCollection":e===p.v?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function W(e,t,n,o){return(0,r.Ue)(((r,a)=>{x(e,t.arguments[n]).then((c=>{try{if((0,p.e)(c,o))return void x(e,t.arguments[n+1]).then(r,a);{const c=t.arguments.length-n;return 1===c?void x(e,t.arguments[n]).then(r,a):(2===c&&r(null),3===c?void x(e,t.arguments[n+2]).then(r,a):void W(e,t,n+2,o).then(r,a))}}catch(i){a(i)}}),a)}))}function K(e,t,n,o){return(0,r.Ue)(((r,a)=>{!0===o?x(e,t.arguments[n+1]).then(r,a):3===t.arguments.length-n?x(e,t.arguments[n+2]).then(r,a):x(e,t.arguments[n+2]).then((o=>{try{if(!1===(0,p.i)(o))return void a(new Error("WHEN needs boolean test conditions"));K(e,t,n+2,o).then(r,a)}catch(c){a(c)}}))}))}function X(e,t){try{const n=e.length,o=Math.floor(n/2);return 0===n?(0,r.DB)([]):1===n?(0,r.DB)([e[0]]):(0,r.Ue)(((a,c)=>{const i=[X(e.slice(0,o),t),X(e.slice(o,n),t)];(0,r.$6)(i).then((n=>{try{J(n[0],n[1],t,[]).then(a,c)}catch(e){c(e)}}),c)}))}catch(n){return D(n)}}function J(e,t,n,o){return(0,r.Ue)(((r,a)=>{const c=o;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then((i=>{try{isNaN(i)&&(i=1),i<=0?(c.push(e[0]),e=e.slice(1)):(c.push(t[0]),t=t.slice(1)),J(e,t,n,o).then(r,a)}catch(l){a(l)}}),a):e.length>0?(c.push(e[0]),J(e=e.slice(1),t,n,o).then(r,a)):t.length>0&&(c.push(t[0]),t=t.slice(1),J(e,t,n,o).then(r,a)):r(o)}))}function Q(e,t){const n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=n(e[0],t[0]);isNaN(o)&&(o=1),o<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}(Q(e.slice(0,r),t),Q(e.slice(r,n),t),t)}function ee(e,t,n){try{const o=e.body;if(n.length!==e.params.length)return D(new Error("Invalid Parameter calls to function."));for(let r=0;r<n.length;r++){const o=e.params[r];"Identifier"===o.type&&(t.localScope[o.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}return x(t,o).then((e=>(0,r.Ue)(((t,n)=>{e instanceof p.R?t(e.value):e!==p.m?e!==p.n?t(e instanceof p.I?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))}))))}catch(o){return(0,r.d1)(o)}}function te(e,t,n){return M(e,t,(function(t,r,o){const a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return ee(n,a,o)}))}function ne(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return ee(e.definition,t,arguments)}}(0,N.r)(z,F),(0,I.r)(z,F),(0,R.r)(z,F),(0,U.r)(z,F),(0,b.r)(z,F),(0,T.r)(z,F),(0,S.registerFunctions)({functions:z,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:F,standardFunctionAsync:M}),z.typeof=function(e,t){return F(e,t,(function(e,t,n){(0,p.p)(n,1,1);const r=$(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r}))},z.iif=function(e,t){return(0,r.Ue)(((n,o)=>{(0,p.p)(null===t.arguments?[]:t.arguments,3,3),x(e,t.arguments[0]).then((a=>{try{if(!1===(0,p.i)(a))return void o(new Error("IF Function must have a boolean test condition"));(0,r.$6)([x(e,t.arguments[1]),x(e,t.arguments[2])]).then((e=>{n(a?e[0]:e[1])}),o)}catch(c){o(c)}}),o)}))},z.decode=function(e,t){return(0,r.Ue)(((n,r)=>{t.arguments.length<2?r(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?x(e,t.arguments[0]).then((o=>{try{W(e,t,1,o).then(n,r)}catch(a){r(a)}}),r):r(new Error("Must have a default value result.")):x(e,t.arguments[1]).then(n,r)}))},z.when=function(e,t){try{return t.arguments.length<3?D("Missing Parameters"):t.arguments.length%2==0?D("Must have a default value result."):x(e,t.arguments[0]).then((n=>(0,r.Ue)(((r,o)=>{!1!==(0,p.i)(n)?K(e,t,0,n).then(r,o):o(new Error("WHEN needs boolean test conditions"))}))))}catch(n){return D(n)}},z.sort=function(e,t){return M(e,t,(function(e,t,n){(0,p.p)(n,1,2);let o=n[0];if((0,p.b)(o)&&(o=o.toArray()),!1===(0,p.a)(o))return D(Error("Illegal Argument"));if(n.length>1)return!1===(0,p.c)(n[1])?D(Error("Illegal Argument")):X(o,ne(n[1]));{let e=o;if(0===e.length)return(0,r.DB)([]);const t={};for(let r=0;r<e.length;r++){const n=$(e[r]);""!==n&&(t[n]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return(0,r.DB)(e.slice(0));let n=0,a="";for(const r in t)n++,a=r;return n>1||"String"===a?e=Q(e,(function(e,t){if(null==e||e===p.v)return null==t||t===p.v?0:1;if(null==t||t===p.v)return-1;const n=(0,p.d)(e),r=(0,p.d)(t);return n<r?-1:n===r?0:1})):"Number"===a?e=Q(e,(function(e,t){return e-t})):"Boolean"===a?e=Q(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===a&&(e=Q(e,(function(e,t){return t-e}))),(0,r.DB)(e)}}))};const re={failDefferred:D,resolveDeffered:C,fixSpatialReference:p.f,parseArguments:A,standardFunction:F,standardFunctionAsync:M,evaluateIdentifier:q,arcadeCustomFunction:ne};for(const pe in z)z[pe]={value:new p.N(z[pe]),valueset:!0,node:null};const oe=function(){};function ae(e){console.log(e)}oe.prototype=z,oe.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},oe.prototype.pi={value:Math.PI,valueset:!0,node:null};const ce=re;function ie(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:F,standardFunctionAsync:M,failDefferred:D,evaluateIdentifier:q,arcadeCustomFunctionHandler:ne};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)z[n]={value:new p.N(t.functions[n]),valueset:!0,node:null},oe.prototype[n]=z[n];for(let n=0;n<t.signatures.length;n++)(0,w.gW)(t.signatures[n],"async")}function le(e,t){let n=t.spatialReference;null==n&&(n=new o.Z({wkid:102100}));const a=function(e,t){const n=new oe;null==e&&(e={}),null==t&&(t={});const r=new g.Z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null};for(const o in t)n[o]={value:new p.N(t[o]),native:!0,valueset:!0,node:null};for(const o in e)e[o]&&"esri.Graphic"===e[o].declaredClass?n[o]={value:m.Z.createFromGraphic(e[o]),valueset:!0,node:null}:n[o]={value:e[o],valueset:!0,node:null};return n}(t.vars,t.customfunctions);return x({spatialReference:n,services:t.services,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:a,console:t.console?t.console:ae,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:1},e.body[0].body).then((e=>(0,r.Ue)(((t,n)=>{e instanceof p.R&&(e=e.value),e instanceof p.I&&(e=e.value),e===p.v&&(e=null),e!==p.m?e!==p.n?e instanceof p.N||e instanceof h.Z?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))}))))}function se(e,t){return(0,w.mb)(e)}function ue(e,t){return(0,w.FS)(e,t,"full")}function he(e,t){return(0,w.bV)(e,t)}function fe(e,t){return(0,w.w8)(e,t)}function de(e){return(0,w.Vf)(e)}}}]);
//# sourceMappingURL=4698.0334c4dc.chunk.js.map