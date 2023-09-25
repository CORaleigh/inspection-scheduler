"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[1285],{45956:(t,e,i)=>{i.d(e,{e:()=>d});i(93169);var s=i(22753),r=i(23588),n=i(15245),o=(i(3667),i(37825),i(51378)),a=(i(53634),i(87422)),h=i(10978);function l(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new o.Z(t,s)}class d extends a.s{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:(0,r.c)()},this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(t){const e=(0,s.i)(this.transforms.dvs),[i,r]=t.toScreenNoRotation([0,0],this.x,this.y),o=this.resolution/this.pixelRatio/t.resolution,a=o*this.width,h=o*this.height,l=Math.PI*this.rotation/180;(0,s.a)(e,e,(0,n.f)(i,r)),(0,s.a)(e,e,(0,n.f)(a/2,h/2)),(0,s.r)(e,e,-l),(0,s.a)(e,e,(0,n.f)(-a/2,-h/2)),(0,s.j)(e,e,(0,n.f)(a,h)),(0,s.m)(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind({context:t},e){this._texture&&t.bindTexture(this._texture,e)}updateTexture({context:t}){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=l(t,this.sourceWidth,this.sourceHeight):this._texture=l(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(t){return t&&"render"in t}(i))if(i instanceof h.Z){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}(i));else(function(t){return t&&!("render"in t)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},90110:(t,e,i)=>{i.d(e,{c:()=>o});var s=i(15717),r=i(37826),n=i(64510);class o extends n.Z{get requiresDedicatedFBO(){return this.children.some((t=>"additive"===t.blendFunction))}prepareRenderPasses(t){const e=t.registerRenderPass({name:"bitmap",brushes:[r.U.bitmap],target:()=>this.children,drawPhase:s.jx.MAP});return[...super.prepareRenderPasses(t),e]}}},10978:(t,e,i)=>{i.d(e,{Z:()=>s});const s=class{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(!e)return;const i=this.filter({pixelBlock:e}),s=i.pixelBlock.getAsRGBA(),r=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),t.putImageData(r,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}},95986:(t,e,i)=>{i.d(e,{y:()=>P});var s=i(27366),r=(i(93169),i(32718),i(25243),i(49861)),n=i(64307),o=(i(35995),i(71907),i(22892),i(40110)),a=i(60354),h=i(8537),l=i(67123);let d=class extends l.wq{};d=(0,s._)([(0,n.j)("esri.views.layers.support.ClipArea")],d);const p=d;var u;let c=u=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],c.prototype,"version",null),c=u=(0,s._)([(0,n.j)("esri.views.layers.support.ClipRect")],c);const g=c;var y,v=i(33624),_=i(32238),x=i(53866),m=i(80885),b=i(77981);i(59486);const f={base:_.Z,key:"type",typeMap:{extent:x.Z,polygon:m.Z}};let w=y=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};(0,s._)([(0,r.Cb)({types:f,json:{read:b.im,write:!0}})],w.prototype,"geometry",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],w.prototype,"version",null),w=y=(0,s._)([(0,n.j)("esri.views.layers.support.Geometry")],w);const R=w;let C=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],C.prototype,"version",null),C=(0,s._)([(0,n.j)("esri.views.layers.support.Path")],C);const M=C,S=o.Z.ofType({key:"type",base:p,typeMap:{rect:g,path:M,geometry:R}}),P=t=>{let e=class extends t{constructor(){super(...arguments),this.clips=new S,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var t;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.S1)(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,h.S1)(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1)}),!0),(0,h.S1)(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t)}),!0),(0,h.S1)(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,n=!r;!i&&t<=s&&(i=!0),!n&&t>=r&&(n=!0),e=i&&n}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,r.Cb)({type:S,set(t){const e=(0,a.Z)(t,this._get("clips"),S);this._set("clips",e)}})],e.prototype,"clips",void 0),(0,s._)([(0,r.Cb)()],e.prototype,"moving",void 0),(0,s._)([(0,r.Cb)()],e.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],e.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],e.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],e.prototype,"updateParameters",void 0),(0,s._)([(0,r.Cb)()],e.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)()],e.prototype,"updating",null),(0,s._)([(0,r.Cb)()],e.prototype,"view",void 0),e=(0,s._)([(0,n.j)("esri.views.2d.layers.LayerView2D")],e),e}},9229:(t,e,i)=>{i.d(e,{Z:()=>P});var s=i(27366),r=(i(93169),i(32718),i(25243),i(49861)),n=i(64307),o=(i(35995),i(71907),i(22892),i(66978)),a=i(40666),h=i(92975),l=i(53866),d=i(65156),p=i(22824),u=i(73828),c=i(37995);const g=Math.PI/180;function y(t){return t*g}function v(t,e){const i=y(e.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[n,o]=e.size;return t[0]=Math.round(o*r+n*s),t[1]=Math.round(o*s+n*r),t}var _=i(45956);const x=(0,d.Ue)(),m=[0,0],b=new u.Z(0,0,0,0),f=2048,w=2048,R=!1,C=!1,M=!1;let S=class extends a.Z{constructor(t){super(t),this._imagePromise=null,this.hidpi=M,this.imageMaxWidth=f,this.imageMaxHeight=w,this.imageRotationSupported=R,this.imageNormalizationSupported=C,this.update=(0,o.Ds)((async(t,e)=>{const i=t.state,s=(0,h.C5)(i.spatialReference),r=this.hidpi?t.pixelRatio:1;if(!t.stationary||this.destroyed)return null;this.imageRotationSupported?(m[0]=i.size[0],m[1]=i.size[1]):v(m,i);const n=Math.floor(m[0]*r)>this.imageMaxWidth||Math.floor(m[1]*r)>this.imageMaxHeight,o=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),a=!this.imageNormalizationSupported&&o,l=!n&&!a,d=this.imageRotationSupported?i.rotation:0;if(l)this._imagePromise=this._singleExport(i,m,d,r,e);else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);a&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,d,r,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(e.invalidateTexture(),e.requestRender())}}_export(t,e,i,s,r,n){return Promise.resolve().then((()=>this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n}))).then((i=>{const n=new _.e(i,"additive");return n.x=t.xmin,n.y=t.ymax,n.resolution=t.width/e,n.rotation=s,n.pixelRatio=r,n}))}_singleExport(t,e,i,s,r){!function(t,e,i,s){const[r,n]=e,[o,a]=s,h=.5*i;t[0]=r-h*o,t[1]=n-h*a,t[2]=r+h*o,t[3]=n+h*a}(x,t.center,t.resolution,e);const n=new l.Z(x[0],x[1],x[2],x[3],t.spatialReference);return this._export(n,e[0],e[1],i,s,r).then((t=>[t]))}_tiledExport(t,e,i,s,r){const n=p.Z.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),o=new c.Z(n),a=o.getTileCoverage(t);if(!a)return null;const h=[];return a.forEach(((n,a,d,p)=>{b.set(n,a,d,p),o.getTileBounds(x,b);const u=new l.Z(x[0],x[1],x[2],x[3],t.spatialReference);h.push(this._export(u,e,e,i,s,r))})),Promise.all(h)}};(0,s._)([(0,r.Cb)()],S.prototype,"_imagePromise",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"fetchSource",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"hidpi",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"imageMaxWidth",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"imageMaxHeight",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"imageRotationSupported",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"requestUpdate",void 0),(0,s._)([(0,r.Cb)()],S.prototype,"updating",null),S=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],S);const P=S},67581:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(27366),r=(i(93169),i(32718)),n=(i(25243),i(49861)),o=i(64307),a=(i(35995),i(71907),i(22892),i(40666)),h=i(91505),l=i(79056),d=i(67426),p=i(41691);let u=class extends((0,p.p)((0,l.I)((0,d.v)(h.Z.EventedMixin(a.Z))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const e=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${e}')`,t),t}}))}get fullOpacity(){const t=t=>null==t?1:t;return t(this.get("layer.opacity"))*t(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,s._)([(0,n.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,n.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,n.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,n.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,n.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,n.Cb)()],u.prototype,"visible",null),u=(0,s._)([(0,o.j)("esri.views.layers.LayerView")],u);const c=u}}]);
//# sourceMappingURL=1285.15d8aaa9.chunk.js.map