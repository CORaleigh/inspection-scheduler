"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[1048],{44070:(t,e,i)=>{i.d(e,{Z:()=>s});var r=i(18722),n=i(37825);class o{constructor(t,e,i,r,o){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(1,this),this._glName=this._context.gl.createBuffer(),(0,n.z)(this._context.gl),r&&this.setData(r,o)}static createIndex(t,e,i,r){return new o(t,34963,e,i,r)}static createVertex(t,e,i){return new o(t,34962,e,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(t,e){if(!t)return;if("number"==typeof t){if(t<0&&console.error("Buffer size cannot be negative!"),34963===this.bufferType&&e)switch(this._indexType=e,this._size=t,e){case 5123:t*=2;break;case 5125:t*=4}}else{let e=t.byteLength;(0,r.Uc)(t)&&(e/=2,this._indexType=5123),(0,r.ZY)(t)&&(e/=4,this._indexType=5125),this._size=e}const i=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this.bufferType,t,this.usage),this._context.bindVAO(i)}setSubData(t,e=0,i=0,n=t.byteLength){if(!t)return;(e<0||e>=this._size)&&console.error("offset is out of range!");let o=e,s=i,a=n,c=t.byteLength;(0,r.Uc)(t)&&(c/=2,o*=2,s*=2,a*=2),(0,r.ZY)(t)&&(c/=4,o*=4,s*=4,a*=4),void 0===n&&(n=c-1),i>=n&&console.error("end must be bigger than start!"),e+i-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");const f=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const h=this._context.gl,u=ArrayBuffer.isView(t)?t.buffer:t,l=0===s&&a===t.byteLength?u:u.slice(s,a);h.bufferSubData(this.bufferType,o,l),this._context.bindVAO(f)}}const s=o},9256:(t,e,i)=>{i.d(e,{Z:()=>V});i(93169);var r=i(92026);const n=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var o=i(3667),s=999,a=9999,c=0,f=1,h=2,u=3,l=4,d=5,m=6,_=7,g=8,p=9,x=10,y=11,b=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function v(){var t,e,i,r=0,n=0,v=s,U=[],A=[],T=1,w=0,D=0,S=!1,L=!1,k="";return function(t){return A=[],null!==t?z(t.replace?t.replace(/\r\n/g,"\n"):t):(U.length&&B(U.join("")),v=x,B("(eof)"),A)};function B(t){t.length&&A.push({type:b[v],data:t,position:D,line:T,column:w})}function z(o){var m;for(r=0,i=(k+=o).length;t=k[r],r<i;){switch(m=r,v){case c:r="/"===t&&"*"===e?(U.push(t),B(U.join("")),v=s,r+1):(U.push(t),e=t,r+1);break;case f:case h:r=P();break;case u:r=V();break;case l:r="."===t||/[eE]/.test(t)?(U.push(t),v=d,e=t,r+1):"x"===t&&1===U.length&&"0"===U[0]?(v=y,U.push(t),e=t,r+1):/[^\d]/.test(t)?(B(U.join("")),v=s,r):(U.push(t),e=t,r+1);break;case y:r=/[^a-fA-F0-9]/.test(t)?(B(U.join("")),v=s,r):(U.push(t),e=t,r+1);break;case d:"f"===t&&(U.push(t),e=t,r+=1),r=/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(U.push(t),e=t,r+1):/[^\d]/.test(t)?(B(U.join("")),v=s,r):(U.push(t),e=t,r+1);break;case a:r=N();break;case p:r=/[^\s]/g.test(t)?(B(U.join("")),v=s,r):(U.push(t),e=t,r+1);break;case s:U=U.length?[]:U,r="/"===e&&"*"===t?(D=n+r-1,v=c,e=t,r+1):"/"===e&&"/"===t?(D=n+r-1,v=f,e=t,r+1):"#"===t?(v=h,D=n+r,r):/\s/.test(t)?(v=p,D=n+r,r):(S=/\d/.test(t),L=/[^\w_]/.test(t),D=n+r,v=S?l:L?u:a,r)}if(m!==r)if("\n"===k[m])w=0,++T;else++w}return n+=r,k=k.slice(r),A}function P(){return"\r"!==t&&"\n"!==t||"\\"===e?(U.push(t),e=t,r+1):(B(U.join("")),v=s,r)}function V(){if("."===e&&/\d/.test(t))return v=d,r;if("/"===e&&"*"===t)return v=c,r;if("/"===e&&"/"===t)return v=f,r;if("."===t&&U.length){for(;C(U););return v=d,r}if(";"===t||")"===t||"("===t){if(U.length)for(;C(U););return B(t),v=s,r+1}var i=2===U.length&&"="!==t;if(/[\w_\d\s]/.test(t)||i){for(;C(U););return v=s,r}return U.push(t),e=t,r+1}function C(t){for(var e,i,r=0;;){if(e=o.o.indexOf(t.slice(0,t.length+r).join("")),i=o.o[e],-1===e){if(r--+t.length>0)continue;i=t.slice(0,1).join("")}return B(i),D+=i.length,(U=U.slice(i.length)).length}}function N(){if(/[^\d\w_]/.test(t)){var i=U.join("");return v=o.l.indexOf(i)>-1?g:o.b.indexOf(i)>-1?_:m,B(U.join("")),v=s,r}return U.push(t),e=t,r+1}}function U(t){return function(t){var e=v(),i=[];return(i=i.concat(e(t))).concat(e(null))}(t)}const A=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function T(t,e){for(let i=e-1;i>=0;i--){const e=t[i];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function w(t,e,i,r){r=r||i;for(const n of t)if("ident"===n.type&&n.data===i)return r in e?e[r]++:e[r]=0,w(t,e,r+"_"+e[r],r);return i}function D(t,e,i="afterVersion"){function r(t,e){for(let i=e;i<t.length;i++){const e=t[i];if("operator"===e.type&&";"===e.data)return i}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=function(t){let e=-1,n=0,o=-1;for(let s=0;s<t.length;s++){const a=t[s];if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:a.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===a.type&&/^#version/.test(a.data)&&(o=Math.max(o,s)),"afterPrecision"===i&&"keyword"===a.type&&"precision"===a.data){const e=r(t,s);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=s)}return e+1}(t);o(s-1)&&t.splice(s++,0,n);for(const a of e)t.splice(s++,0,a);o(s-1)&&o(s)&&t.splice(s,0,n)}function S(t,e,i,r="lowp"){D(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function L(t,e,i,r,n="lowp"){D(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function k(t,e){let i,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(i=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return i&&r&&t.splice(i,r-i+1),n}function B(t,e){const i=U(t);if("300 es"===function(t,e="100",i="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replace(/\s\s+/g," ");if(r===i)return r;if(r===e)return n.data="#version "+i,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))throw new Error("shader is already glsl 300 es");let r=null,o=null;const s={},a={};for(let c=0;c<i.length;++c){const t=i[c];switch(t.type){case"keyword":"vertex"===e&&"attribute"===t.data?t.data="in":"varying"===t.data&&(t.data="vertex"===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(t.data.trim())&&(t.data=t.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===e&&"gl_FragColor"===t.data&&(r||(r=w(i,s,"fragColor"),S(i,r,"vec4")),t.data=r),"fragment"===e&&"gl_FragData"===t.data){const e=k(i,c+1),r=w(i,s,"fragData");L(i,r,"vec4",e,"mediump"),t.data=r}else"fragment"===e&&"gl_FragDepthEXT"===t.data&&(o||(o=w(i,s,"gl_FragDepth")),t.data=o);break;case"ident":if(n.indexOf(t.data)>=0){if("vertex"===e&&T(i,c))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");t.data in a||(a[t.data]=w(i,s,t.data)),t.data=a[t.data]}}}for(let n=i.length-1;n>=0;--n){const t=i[n];if("preprocessor"===t.type){const e=t.data.match(/\#extension\s+(.*)\:/);if(e&&e[1]&&A.indexOf(e[1].trim())>=0){const t=i[n+1];i.splice(n,t&&"whitespace"===t.type?2:1)}const r=t.data.match(/\#ifdef\s+(.*)/);r&&r[1]&&A.indexOf(r[1].trim())>=0&&(t.data="#if 1");const o=t.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&A.indexOf(o[1].trim())>=0&&(t.data="#if 0")}}return i.map((t=>"eof"!==t.type?t.data:"")).join("")}class z{constructor(t,e,i,r,n={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(3,this),this._context=t,this._vertexShaderSource=e,this._fragmentShaderSource=i,Array.isArray(n))for(const o of n)this._defines[o]="1";else this._defines=n;this._locations=r}get glName(){return this._glName}get locations(){return this._locations}getDefine(t){return this._defines[t]}dispose(){if(!this._context)return;const t=this._context.gl;if(this._vShader){const e=this._vShader;t.deleteShader(e),this._vShader=null}if(this._fShader){const e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,e=t.createProgram();t.attachShader(e,this._vShader),t.attachShader(e,this._fShader);for(const i in this._locations){const r=this._locations[i];t.bindAttribLocation(e,r,i)}t.linkProgram(e),this._glName=e,this._initialized=!0}getUniformLocation(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this.getUniformLocation(t)}getAttribLocation(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]}setUniform1i(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1iv(t,e){const i=this._nameToUniform1v[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform2iv(t,e){const i=this._nameToUniform2[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform3iv(t,e){const i=this._nameToUniform3[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform4iv(t,e){const i=this._nameToUniform4[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform1f(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1fv(t,e){const i=this._nameToUniform1v[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform2f(t,e,i){const r=this._nameToUniform2[t];void 0!==r&&e===r[0]&&i===r[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(t),e,i),void 0===r?this._nameToUniform2[t]=[e,i]:(r[0]=e,r[1]=i))}setUniform2fv(t,e){const i=this._nameToUniform2[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform3f(t,e,i,r){const n=this._nameToUniform3[t];void 0!==n&&e===n[0]&&i===n[1]&&r===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(t),e,i,r),void 0===n?this._nameToUniform3[t]=[e,i,r]:(n[0]=e,n[1]=i,n[2]=r))}setUniform3fv(t,e){const i=this._nameToUniform3[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniform4f(t,e,i,r,n){const o=this._nameToUniform4[t];void 0!==o&&e===o[0]&&i===o[1]&&r===o[2]&&n===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(t),e,i,r,n),void 0===o?this._nameToUniform4[t]=[e,i,r,n]:(o[0]=e,o[1]=i,o[2]=r,o[3]=n))}setUniform4fv(t,e){const i=this._nameToUniform4[t];P(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=z._arrayCopy(e):z._arrayAssign(e,i))}setUniformMatrix3fv(t,e,i=!1){const n=this._nameToUniformMatrix3[t];(function(t,e){return!!(0,r.Wi)(t)||(9!==t.length?P(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),i,e),void 0===n?this._nameToUniformMatrix3[t]=z._arrayCopy(e):z._arrayAssign(e,n))}setUniformMatrix4fv(t,e,i=!1){const n=this._nameToUniformMatrix4[t];(function(t,e){return!!(0,r.Wi)(t)||(16!==t.length?P(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),i,e),void 0===n?this._nameToUniformMatrix4[t]=z._arrayCopy(e):z._arrayAssign(e,n))}assertCompatibleVertexAttributeLocations(t){const e=t.locations===this.locations;return e||console.error("VertexAttributeLocations are incompatible"),e}static _padToThree(t){let e=t.toString();return t<1e3&&(e=("  "+t).slice(-3)),e}_addLineNumbers(t){let e=2;return t.replace(/\n/g,(()=>"\n"+z._padToThree(e++)+":"))}_loadShader(t){const e=35633===t;let i=e?this._vertexShaderSource:this._fragmentShaderSource,r="";for(const s in this._defines)r+=`#define ${s} ${this._defines[s]}\n`;i=r+i,"webgl2"===this._context.contextVersion&&(i=B(i,e?"vertex":"fragment"));const n=this._context.gl,o=n.createShader(t);return n.shaderSource(o,i),n.compileShader(o),o}static _arrayCopy(t){const e=[];for(let i=0;i<t.length;++i)e.push(t[i]);return e}static _arrayAssign(t,e){for(let i=0;i<t.length;++i)e[i]=t[i]}}function P(t,e){if((0,r.Wi)(t)||t.length!==e.length)return!0;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!0;return!1}const V=z},3384:(t,e,i)=>{i.d(e,{RG:()=>s,UF:()=>o,XP:()=>n,_V:()=>r});i(93169);function r(t,e){return t.vertexBuffers[e].size/function(t){return t[0].stride}(t.layout[e])}function n(t,e,i,r,n){const o=t.gl,s=t.capabilities.instancing;t.bindBuffer(i);for(const a of r){const t=e[a.name],i=(n||(0+a.baseInstance?a.baseInstance:0))*a.stride;if(void 0===t&&console.error(`There is no location for vertex attribute '${a.name}' defined.`),a.baseInstance&&!a.divisor&&console.error(`Vertex attribute '${a.name}' uses baseInstanceOffset without divisor.`),a.count<=4)o.vertexAttribPointer(t,a.count,a.type,a.normalized,a.stride,a.offset+i),o.enableVertexAttribArray(t),a.divisor&&a.divisor>0&&s&&s.vertexAttribDivisor(t,a.divisor);else if(9===a.count)for(let e=0;e<3;e++)o.vertexAttribPointer(t+e,3,a.type,a.normalized,a.stride,a.offset+12*e+i),o.enableVertexAttribArray(t+e),a.divisor&&a.divisor>0&&s&&s.vertexAttribDivisor(t+e,a.divisor);else if(16===a.count)for(let e=0;e<4;e++)o.vertexAttribPointer(t+e,4,a.type,a.normalized,a.stride,a.offset+16*e+i),o.enableVertexAttribArray(t+e),a.divisor&&a.divisor>0&&s&&s.vertexAttribDivisor(t+e,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)}}function o(t,e,i,r){const n=t.gl,o=t.capabilities.instancing;t.bindBuffer(i);for(const s of r){const t=e[s.name];if(s.count<=4)n.disableVertexAttribArray(t),s.divisor&&s.divisor>0&&o&&o.vertexAttribDivisor(t,0);else if(9===s.count)for(let e=0;e<3;e++)n.disableVertexAttribArray(t+e),s.divisor&&s.divisor>0&&o&&o.vertexAttribDivisor(t+e,0);else if(16===s.count)for(let e=0;e<4;e++)n.disableVertexAttribArray(t+e),s.divisor&&s.divisor>0&&o&&o.vertexAttribDivisor(t+e,0);else console.error("Unsupported vertex attribute element count: "+s.count)}t.unbindBuffer(34962)}function s(t){switch(t){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5}return 0}},45412:(t,e,i)=>{i.d(e,{Z:()=>o});var r=i(92026),n=i(3384);const o=class{constructor(t,e,i,r,n){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=n,this._glName=null,this._initialized=!1,t.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].size),this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(!this._context)return;const e=this._context.capabilities.vao;if(e&&this._glName&&(e.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer=(0,r.O3)(this._indexBuffer)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const t=this._buffers,e=!!this._context.capabilities.vao,i=this._layout,r=this._indexBuffer;t||console.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const s in t){const e=t[s];e||console.error("Vertex buffer is uninitialized!");const r=i[s];r||console.error("Vertex element descriptor is empty!"),(0,n.XP)(this._context,this._locations,e,r)}r&&(e?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const t=this._buffers,e=this._layout;t||console.error("Vertex buffer dictionary is empty!");for(const i in t){const r=t[i];r||console.error("Vertex buffer is uninitialized!");const o=e[i];(0,n.UF)(this._context,this._locations,r,o)}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}}}]);
//# sourceMappingURL=1048.b534de8e.chunk.js.map