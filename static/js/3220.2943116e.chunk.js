"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[3220],{27811:(e,t,r)=>{r.d(t,{QM:()=>a,hy:()=>i,uI:()=>s});var n=r(93923),o=r(16889);const s=(()=>{if(!("document"in n.Z))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,r=>{t.clearRect(0,0,1,e.height);const n=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of r.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function a(e,t,r,n){const{blurRadius:o,fieldOffset:s,field:a}=t,i=new Float64Array(r*n),c=l(o),d=Math.round(3*o);let h,u=Number.NEGATIVE_INFINITY;const f=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(a,s),p=new Set;for(const l of e){const e=l.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const o=e.readLegacyPointGeometry(),s=128;if(o.x<-s||o.x>=r+s||o.y<-s||o.y>n+s)continue;const a=+f(e),l=Math.round(o.x)-d,y=Math.round(o.y)-d,m=Math.max(0,l),w=Math.max(0,y),g=Math.min(n,Math.round(o.y)+d),M=Math.min(r,Math.round(o.x)+d);for(let e=w;e<g;e++){const t=c[e-y];for(let n=m;n<M;n++){const o=c[n-l];h=i[e*r+n]+=t*o*a,h>u&&(u=h)}}}}return{matrix:i.buffer,max:u}}function i(e,t,r,n,s,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const i=e.getImageData(0,0,t,t);r&&n&&i.data.set(new Uint8ClampedArray(function(e,t,r,n,s){const a=new Uint32Array(e*e),i="buffer"in t?t:new Float64Array(t),l="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),c=l.length/(s-n);for(let d=0;d<i.length;d++){const e=i[d],t=Math.floor((e-n)*c);a[d]=l[(0,o.uZ)(t,0,l.length-1)]}return a.buffer}(t,r,n,s,a))),e.putImageData(i,0,0)}function l(e){const t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1);for(let o=0;o<=n.length;o++)n[o]=Math.exp(-((o-t)**2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}},81735:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27366),o=(r(93169),r(32718),r(25243),r(49861)),s=r(64307),a=(r(35995),r(71907),r(22892),r(41691));let i=class extends a.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,o.Cb)({readOnly:!0})],i.prototype,"supportsTileUpdates",null),(0,n._)([(0,o.Cb)({constructOnly:!0})],i.prototype,"remoteClient",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],i.prototype,"service",void 0),(0,n._)([(0,o.Cb)()],i.prototype,"spatialReference",null),(0,n._)([(0,o.Cb)({constructOnly:!0})],i.prototype,"tileInfo",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],i.prototype,"tileStore",void 0),i=(0,n._)([(0,s.j)("esri.views.2d.layers.features.processors.BaseProcessor")],i);const l=i},63220:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(27366),o=(r(93169),r(92026)),s=(r(32718),r(25243),r(49861),r(64307)),a=(r(35995),r(71907),r(22892),r(48732)),i=r(94109),l=r(27811),c=r(35092),d=r(81735);class h{constructor(e,t){this.offset=e,this.extent=t}}let u=class extends d.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&(0,a.Hg)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);if((0,o.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&n.set(t.addOrUpdate.instance,t),t.end){const t=[],n=function(e){const t=e.key,r=new Map,n=256,o=i.I_,s=e.tileInfoView.tileInfo.isWrappable;return r.set((0,c.M)(t,-1,-1,s).id,new h([-o,-o],[o-n,o-n,o,o])),r.set((0,c.M)(t,0,-1,s).id,new h([0,-o],[0,o-n,o,o])),r.set((0,c.M)(t,1,-1,s).id,new h([o,-o],[0,o-n,n,o])),r.set((0,c.M)(t,-1,0,s).id,new h([-o,0],[o-n,0,o,o])),r.set((0,c.M)(t,1,0,s).id,new h([o,0],[0,0,n,o])),r.set((0,c.M)(t,-1,1,s).id,new h([-o,o],[o-n,0,o,n])),r.set((0,c.M)(t,0,1,s).id,new h([0,o],[0,0,o,n])),r.set((0,c.M)(t,1,1,s).id,new h([o,o],[0,0,n,n])),r}(e);this._tileKeyToFeatureSets.forEach(((r,s)=>{if(s===e.key.id)r.forEach((e=>(0,o.Po)(e.addOrUpdate,(e=>t.push(e)))));else if(n.has(s)){const e=n.get(s),[a,i]=e.offset;r.forEach((e=>(0,o.Po)(e.addOrUpdate,(e=>{const r=e.transform(a,i,1,1);t.push(r)}))))}}));const s=(0,l.QM)(t,this._schema.mesh,512,512),a={tileKey:e.key.id,intensityInfo:s},d=[s.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",a,{...r,transferList:d})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};u=(0,n._)([(0,s.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],u);const f=u},35092:(e,t,r)=>{r.d(t,{M:()=>n});r(67906);function n(e,t,r,n){const o=e.clone(),s=1<<o.level,a=o.col+t,i=o.row+r;return n&&a<0?(o.col=a+s,o.world-=1):a>=s?(o.col=a-s,o.world+=1):o.col=a,o.row=i,o}}}]);
//# sourceMappingURL=3220.2943116e.chunk.js.map