"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[9561],{99561:(t,e,n)=>{n.r(e),n.d(e,{work:()=>Y,wrappedWork:()=>X});var o=n(16889);function r(t,e,n){var r;const l=t.byteLength/(4*e),f=new Uint32Array(t,0,l*e);let u=new Uint32Array(l);const g=null!=(r=null==n?void 0:n.minReduction)?r:0,d=(null==n?void 0:n.originalIndices)||null,p=d?d.length:0,h=(null==n?void 0:n.componentOffsets)||null;let m=0;if(h)for(let o=0;o<h.length-1;o++){const t=h[o+1]-h[o];t>m&&(m=t)}else m=l;const w=Math.floor(1.1*m)+1;(null==a||a.length<2*w)&&(a=new Uint32Array((0,o.Sf)(2*w)));for(let o=0;o<2*w;o++)a[o]=0;let v=0;const y=!!h&&!!d,A=y?p:l,b=y?new Uint32Array(p):null,I=1.96;let N=0!==g?Math.ceil(4*I*I/(g*g)*g*(1-g)):A,S=1,U=h?h[1]:A;for(let o=0;o<A;o++){if(o===N){const t=1-v/o;if(t+I*Math.sqrt(t*(1-t)/o)<g)return null;N*=2}if(o===U){for(let t=0;t<2*w;t++)a[t]=0;if(d)for(let t=h[S-1];t<h[S];t++)b[t]=u[d[t]];U=h[++S]}const t=y?d[o]:o,n=t*e,r=c(f,n,e);let s=r%w,l=v;for(;0!==a[2*s+1];){if(a[2*s]===r){const t=a[2*s+1]-1;if(i(f,n,t*e,e)){l=u[t];break}}s++,s>=w&&(s-=w)}l===v&&(a[2*s]=r,a[2*s+1]=t+1,v++),u[t]=l}if(0!==g&&1-v/l<g)return null;if(y){for(let t=h[S-1];t<b.length;t++)b[t]=u[d[t]];u=b}const V=new Uint32Array(e*v);v=0;for(let o=0;o<A;o++)u[o]===v&&(s(f,(y?d[o]:o)*e,V,v*e,e),v++);if(d&&!y){const t=new Uint32Array(p);for(let e=0;e<t.length;e++)t[e]=u[d[e]];u=t}return{buffer:V.buffer,indices:u,uniqueCount:v}}function i(t,e,n,o){for(let r=0;r<o;r++)if(t[e+r]!==t[n+r])return!1;return!0}function s(t,e,n,o,r){for(let i=0;i<r;i++)n[o+i]=t[e+i]}function c(t,e,n){let o=0;for(let r=0;r<n;r++)o=t[e+r]+o|0,o=o+(o<<11)+(o>>>2)|0;return o>>>0}let a=null;const l={divisor:0};function f(t,e={}){e={...l,...e};const n=t.stride;return t.fieldNames.filter((e=>{const n=t.fields.get(e).optional;return!(n&&n.glPadding)})).map((o=>{const r=t.fields.get(o),i=r.constructor.ElementCount,s=u(r.constructor.ElementType),c=r.offset,a=!(!r.optional||!r.optional.glNormalized);return{name:o,stride:n,count:i,type:s,offset:c,normalized:a,divisor:e.divisor}}))}function u(t){const e=g[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const g={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};var d=n(55158);const p=(0,d.U$)().vec3f("position").u16("componentIndex").u16("u16padding"),h=(f((0,d.U$)().vec2u8("sideness")),(0,d.U$)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0})),m=h.clone().vec3f("normal"),w=h.clone().vec3f("normalA").vec3f("normalB");var v=n(84936),y=n(71353),A=n(11186);class b{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?V:U}write(t,e,n){const o=this.edgeHashFunction(n);M.seed=o;const r=M.getIntRange(0,255),i=M.getIntRange(0,this.settings.variants-1),s=M.getFloat(),c=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}(-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,i),t.variantExtension.set(e,c)}trim(t,e){return t.slice(0,e)}}const I=new Float32Array(6),N=new Uint32Array(I.buffer),S=new Uint32Array(1);function U(t){const e=I;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],S[0]=5381;for(let n=0;n<N.length;n++)S[0]=31*S[0]+N[n];return S[0]}function V(t){const e=I;e[0]=L(t.position0[0]),e[1]=L(t.position0[1]),e[2]=L(t.position0[2]),e[3]=L(t.position1[0]),e[4]=L(t.position1[1]),e[5]=L(t.position1[2]),S[0]=5381;for(let n=0;n<N.length;n++)S[0]=31*S[0]+N[n];return S[0]}const E=1e4;function L(t){return Math.round(t*E)/E}class k{constructor(){this.commonWriter=new b}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return m.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),(0,A.b)(D,n.faceNormal0,n.faceNormal1),(0,A.n)(D,D),t.normal.setVec(e,D)}trim(t,e){return this.commonWriter.trim(t,e)}}k.Layout=m,k.glLayout=f(m,{divisor:1});class x{constructor(){this.commonWriter=new b}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return w.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this.commonWriter.trim(t,e)}}x.Layout=w,x.glLayout=f(w,{divisor:1});const D=(0,y.c)(),M=new v.Z;var P=n(33084);function W(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:B(t.layout)}}function B(t){const e=new Array;return t.fields.forEach(((t,n)=>{const o={...t,constructor:T(t.constructor)};e.push([n,o])})),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const F=[P.ly,P.Eu,P.ct,P.ek,P.gK,P.bj,P.oS,P.q6,P.fP,P.Cd,P.ey,P.O1,P.D_,P.xA,P.ne,P.mc,P.av,P.TS,P.mw,P.v6,P.Nu,P.qt,P.G5,P.hu,P.Hz,P.Vs,P.P_,P.ir,P.o7,P.or,P.n1,P.zO,P.Jj,P.wA,P.PP,P.TN];function T(t){return`${t.ElementType}_${t.ElementCount}`}const C=new Map;function z(t,e,n){const o=e/3,r=new Uint32Array(n+1),i=new Uint32Array(n+1),s=(t,e)=>{t<e?r[t+1]++:i[e+1]++};for(let w=0;w<o;w++){const e=t[3*w],n=t[3*w+1],o=t[3*w+2];s(e,n),s(n,o),s(o,e)}let c=0,a=0;for(let w=0;w<n;w++){const t=r[w+1],e=i[w+1];r[w+1]=c,i[w+1]=a,c+=t,a+=e}const l=new Uint32Array(6*o),f=r[n],u=(t,e,n)=>{if(t<e){const o=r[t+1]++;l[2*o]=e,l[2*o+1]=n}else{const o=i[e+1]++;l[2*f+2*o]=t,l[2*f+2*o+1]=n}};for(let w=0;w<o;w++){const e=t[3*w],n=t[3*w+1],o=t[3*w+2];u(e,n,w),u(n,o,w),u(o,e,w)}const g=(t,e)=>{const n=2*t,o=e-t;for(let r=1;r<o;r++){const t=l[n+2*r],e=l[n+2*r+1];let o=r-1;for(;o>=0&&l[n+2*o]>t;o--)l[n+2*o+2]=l[n+2*o],l[n+2*o+3]=l[n+2*o+1];l[n+2*o+2]=t,l[n+2*o+3]=e}};for(let w=0;w<n;w++)g(r[w],r[w+1]),g(f+i[w],f+i[w+1]);const d=new Int32Array(3*o),p=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,h=(t,e)=>{const n=p(t,e);d[3*e+n]=-1},m=(t,e,n,o)=>{const r=p(t,e);d[3*e+r]=o;const i=p(n,o);d[3*o+i]=e};for(let w=0;w<n;w++){let t=r[w];const e=r[w+1];let n=i[w];const o=i[w+1];for(;t<e&&n<o;){const e=l[2*t],o=l[2*f+2*n];e===o?(m(w,l[2*t+1],o,l[2*f+2*n+1]),t++,n++):e<o?(h(w,l[2*t+1]),t++):(h(o,l[2*f+2*n+1]),n++)}for(;t<e;)h(w,l[2*t+1]),t++;for(;n<o;)h(l[2*f+2*n],l[2*f+2*n+1]),n++}return d}F.forEach((t=>C.set(T(t),t)));var q=n(18722),O=n(63780),$=n(80064);const _=-1;function H(t,e,n,r=Q){const i=t.vertices.position,s=t.vertices.componentIndex,c=(0,o.Vl)(r.anglePlanar),a=(0,o.Vl)(r.angleSignificantEdge),l=Math.cos(a),f=Math.cos(c),u=J.edge,g=u.position0,d=u.position1,p=u.faceNormal0,h=u.faceNormal1,m=Z(t),w=function(t){const e=t.faces.length/3,n=t.faces,o=t.neighbors;let r=0;for(let c=0;c<e;c++){const t=o[3*c+0],e=o[3*c+1],i=o[3*c+2],s=n[3*c+0],a=n[3*c+1],l=n[3*c+2];r+=t===_||s<a?1:0,r+=e===_||a<l?1:0,r+=i===_||l<s?1:0}const i=new Int32Array(4*r);let s=0;for(let c=0;c<e;c++){const t=o[3*c+0],e=o[3*c+1],r=o[3*c+2],a=n[3*c+0],l=n[3*c+1],f=n[3*c+2];(t===_||a<l)&&(i[s++]=a,i[s++]=l,i[s++]=c,i[s++]=t),(e===_||l<f)&&(i[s++]=l,i[s++]=f,i[s++]=c,i[s++]=e),(r===_||f<a)&&(i[s++]=f,i[s++]=a,i[s++]=c,i[s++]=r)}return i}(t),v=w.length/4,y=e.allocate(v);let b=0;const I=v,N=n.allocate(I);let S=0,U=0,V=0;const E=(0,O.w6)(0,v),L=new Float32Array(v);(0,q.Ed)(L,((t,e,n)=>{i.getVec(w[4*e+0],g),i.getVec(w[4*e+1],d),n[e]=(0,A.k)(g,d)})),E.sort(((t,e)=>L[e]-L[t]));const k=new Array,x=new Array;for(let o=0;o<v;o++){const t=E[o],r=L[t],a=w[4*t+0],v=w[4*t+1],I=w[4*t+2],D=w[4*t+3],M=D===_;if(i.getVec(a,g),i.getVec(v,d),M)(0,A.s)(p,m[3*I+0],m[3*I+1],m[3*I+2]),(0,A.g)(h,p),u.componentIndex=s.get(a),u.cosAngle=(0,A.d)(p,h);else{if((0,A.s)(p,m[3*I+0],m[3*I+1],m[3*I+2]),(0,A.s)(h,m[3*D+0],m[3*D+1],m[3*D+2]),u.componentIndex=s.get(a),u.cosAngle=(0,A.d)(p,h),j(u,f))continue;u.cosAngle<-.9999&&(0,A.g)(h,p)}U+=r,V++,M||R(u,l)?(e.write(y,b++,u),k.push(r)):G(u,c)&&(n.write(N,S++,u),x.push(r))}const D=new Float32Array(k.reverse()),M=new Float32Array(x.reverse());return{regular:{instancesData:e.trim(y,b),lodInfo:{lengths:D}},silhouette:{instancesData:n.trim(N,S),lodInfo:{lengths:M}},averageEdgeLength:U/V}}function R(t,e){return t.cosAngle<e}function j(t,e){return t.cosAngle>e}function G(t,e){const n=(0,o.ZF)(t.cosAngle),r=J.fwd,i=J.ortho;return(0,$.tB)(r,t.position1,t.position0),n*((0,A.d)((0,A.c)(i,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>e}function Z(t){const e=t.faces.length/3,n=t.vertices.position,o=t.faces,r=K.v0,i=K.v1,s=K.v2,c=new Float32Array(3*e);for(let a=0;a<e;a++){const t=o[3*a+0],e=o[3*a+1],l=o[3*a+2];n.getVec(t,r),n.getVec(e,i),n.getVec(l,s),(0,A.f)(i,i,r),(0,A.f)(s,s,r),(0,A.c)(r,i,s),(0,A.n)(r,r),c[3*a+0]=r[0],c[3*a+1]=r[1],c[3*a+2]=r[2]}return c}const J={edge:{position0:(0,y.c)(),position1:(0,y.c)(),faceNormal0:(0,y.c)(),faceNormal1:(0,y.c)(),componentIndex:0,cosAngle:0},ortho:(0,y.c)(),fwd:(0,y.c)()},K={v0:(0,y.c)(),v1:(0,y.c)(),v2:(0,y.c)()},Q={anglePlanar:4,angleSignificantEdge:35};async function X(t){const e=function(t){return{data:p.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indicesBuffer):"Uint16Array"===t.indicesType?new Uint16Array(t.indicesBuffer):void 0,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}(t),n=Y(e),o=[e.data.buffer];return{result:tt(n,o),transferList:o}}function Y(t){const e=function(t,e,n,o){if(e)return{faces:n,facesLength:o,neighbors:z(n,o,t.count),vertices:t};const i=r(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:o}),s=z(i.indices,o,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:s,vertices:p.createView(i.buffer)}}(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return et.updateSettings(t.writerSettings),nt.updateSettings(t.writerSettings),H(e,et,nt)}function tt(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:W(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:W(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}const et=new k,nt=new x}}]);
//# sourceMappingURL=9561.f98b0e83.chunk.js.map