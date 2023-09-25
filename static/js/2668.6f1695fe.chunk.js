"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[2668],{2668:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var i,o=r(27366),n=r(93923),s=(r(93169),r(92026)),l=r(32718),a=r(25243),p=r(49861),d=r(43404),y=r(38511),u=r(47492),c=r(64307),h=r(31201),f=r(10064),b=(r(35995),r(71907),r(22892),r(78952)),m=r(53866),g=(r(59486),r(37270)),v=r(44055),w=r(41499),_=r(76626),S=r(74184),C=(r(44095),r(94931),r(79850)),I=(r(78451),r(34213),r(45130),r(34999)),R=r(40464),j=r(9014),x=r(97642),T=r(75447),F=r(70361),Z=r(6061),D=r(83040),O=r(52410),P=r(11936),k=r(6693),N=r(29598),E=r(25874),G=r(56811),L=r(99063),W=r(77748),U=r(98552),A=r(85116),J=r(21371),q=r(81085),z=r(61669),Q=r(67123);let Y=i=class extends Q.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],Y.prototype,"age",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],Y.prototype,"ageReceived",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],Y.prototype,"displayCount",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],Y.prototype,"maxObservations",void 0),Y=i=(0,o._)([(0,c.j)("esri.layers.support.PurgeOptions")],Y);const M=Y,V=l.Z.getLogger("esri.layers.StreamLayer"),H=new d.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let X=class extends((0,k.h)((0,L.n)((0,G.M)((0,E.Q)((0,P.Y)((0,Z.q)((0,N.I)((0,x.R)(S.Z))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new M,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=b.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in n.Z))return this.addResolvingPromise(Promise.reject(new f.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,s.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((e=>e)).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return(0,U.ij)(e,t)}writeWebSceneFeatureReduction(e,t,r,i){(0,U.Q6)(e,t,"layerDefinition.featureReduction",i)}get fieldsIndex(){return new O.Z(this.fields)}set renderer(e){(0,g.YN)(e,this.fields),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,j.ij)(i,t,r)||void 0;return e||V.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new C.Z({defaultSymbol:B(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:B(e.symbol,e,r)})))}):new I.Z({symbol:B(t.defaultSymbol,t,r)})}writeRenderer(e,t,r,i){(0,j.cW)(e,t,r,i)}writeWebSceneRenderer(e,t,r,i){(0,j.cW)(e,t,"layerDefinition.drawingInfo.renderer",i)}createPopupTemplate(e){return(0,q.eZ)(this,e)}createQuery(){const e=new z.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new f.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new f.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new f.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new f.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,w.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,g.YN)(this.renderer,this.fields),(0,g.UF)(this.timeInfo,this.fields),(0,J.y)(this,{origin:"service"})}};(0,o._)([(0,p.Cb)({type:String})],X.prototype,"copyright",void 0),(0,o._)([(0,p.Cb)({readOnly:!0})],X.prototype,"defaultPopupTemplate",null),(0,o._)([(0,p.Cb)({type:String,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],X.prototype,"definitionExpression",void 0),(0,o._)([(0,p.Cb)({type:String})],X.prototype,"displayField",void 0),(0,o._)([(0,p.Cb)({type:T.Z})],X.prototype,"elevationInfo",void 0),(0,o._)([(0,y.r)("featureReduction",["layerDefinition.featureReduction"])],X.prototype,"readFeatureReduction",null),(0,o._)([(0,h.c)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:U.Gx}})],X.prototype,"writeWebSceneFeatureReduction",null),(0,o._)([(0,p.Cb)({type:[D.Z]})],X.prototype,"fields",void 0),(0,o._)([(0,p.Cb)({readOnly:!0})],X.prototype,"fieldsIndex",null),(0,o._)([(0,p.Cb)({type:m.Z})],X.prototype,"geometryDefinition",void 0),(0,o._)([(0,p.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:H.read}}})],X.prototype,"geometryType",void 0),(0,o._)([(0,p.Cb)(F.iR)],X.prototype,"labelsVisible",void 0),(0,o._)([(0,p.Cb)({type:[W.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:A.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],X.prototype,"labelingInfo",void 0),(0,o._)([(0,p.Cb)(F.rn)],X.prototype,"legendEnabled",void 0),(0,o._)([(0,p.Cb)({type:["show","hide"]})],X.prototype,"listMode",void 0),(0,o._)([(0,p.Cb)({type:a.z8})],X.prototype,"maxReconnectionAttempts",void 0),(0,o._)([(0,p.Cb)({type:a.z8})],X.prototype,"maxReconnectionInterval",void 0),(0,o._)([(0,p.Cb)(F.u1)],X.prototype,"maxScale",void 0),(0,o._)([(0,p.Cb)(F.rO)],X.prototype,"minScale",void 0),(0,o._)([(0,p.Cb)({type:String})],X.prototype,"objectIdField",void 0),(0,o._)([(0,p.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],X.prototype,"operationalLayerType",void 0),(0,o._)([(0,p.Cb)(F.C_)],X.prototype,"popupEnabled",void 0),(0,o._)([(0,p.Cb)({type:v.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],X.prototype,"popupTemplate",void 0),(0,o._)([(0,p.Cb)({type:M})],X.prototype,"purgeOptions",void 0),(0,o._)([(0,p.Cb)({types:R.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],X.prototype,"renderer",null),(0,o._)([(0,y.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,y.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],X.prototype,"readRenderer",null),(0,o._)([(0,h.c)("renderer")],X.prototype,"writeRenderer",null),(0,o._)([(0,h.c)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:R.o}})],X.prototype,"writeWebSceneRenderer",null),(0,o._)([(0,p.Cb)(F.YI)],X.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,p.Cb)({type:b.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],X.prototype,"spatialReference",void 0),(0,o._)([(0,p.Cb)({json:{read:!1}})],X.prototype,"type",void 0),(0,o._)([(0,p.Cb)(F.HQ)],X.prototype,"url",void 0),(0,o._)([(0,p.Cb)({type:Number})],X.prototype,"updateInterval",void 0),(0,o._)([(0,p.Cb)({type:String})],X.prototype,"webSocketUrl",void 0),X=(0,o._)([(0,c.j)("esri.layers.StreamLayer")],X);const B=(0,u.d)({types:_.QT});const K=X}}]);
//# sourceMappingURL=2668.6f1695fe.chunk.js.map