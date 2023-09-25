"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[2977],{42977:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});var s=t(27366),i=(t(93169),t(92026)),a=(t(32718),t(49861)),l=t(89125),o=t(38511),n=t(64307),p=t(31201),c=t(10064),u=t(35995),h=(t(71907),t(22892),t(78952)),d=(t(59486),t(41499)),y=t(74184),_=t(97642),v=t(25899),f=t(70361),g=t(6061),m=t(11936),b=t(6693),S=t(46671),C=t(29598),T=t(25874),w=t(56811),O=t(41691),R=t(17775),W=t(6741),U=t(77990),L=t(18870);const N=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let j=class extends((0,b.h)((0,L.x)((0,w.M)((0,T.Q)((0,g.q)((0,C.I)((0,R.Z)((0,W.O)((0,m.Y)((0,_.R)((0,O.p)((0,S.N)(y.Z))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,i.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(r)),(()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&h.Z.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),a=[],l={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},l);a.push(r)})),a.some((e=>Object.keys(e).length>1))&&(r.layers=a)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,u.mN)(e).path)):null}fetchTile(e,r,t,s={}){const{signal:i,timestamp:a}=s,l=this.getTileUrl(e,r,t),o={responseType:"image",signal:i};return null!=a&&(o.query={_ts:s.timestamp}),(0,d.default)(l,o).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=(0,u.B7)({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters}),a=this.tileServers;return`${a&&a.length?a[r%a.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((r,t)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new c.Z("tile-layer:undefined-url","layer's url is not defined");const s=(0,v.Qc)(this.parsedUrl.path);if((0,i.pC)(s)&&"ImageServer"===s.serverType)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(r,t)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,v.M8)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!(0,v.B5)(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,d.default)(t,{query:{f:"json",...this.customParameters},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new c.Z("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=N.length;t<s;t++)if(r=N[t],r.toLowerCase().indexOf(e)>-1)return(0,u.hF)("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}};(0,s._)([(0,a.Cb)({readOnly:!0})],j.prototype,"attributionDataUrl",null),(0,s._)([(0,a.Cb)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],j.prototype,"isReference",void 0),(0,s._)([(0,a.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],j.prototype,"operationalLayerType",void 0),(0,s._)([(0,a.Cb)({type:Boolean})],j.prototype,"resampling",void 0),(0,s._)([(0,a.Cb)()],j.prototype,"sourceJSON",void 0),(0,s._)([(0,a.Cb)({type:h.Z})],j.prototype,"spatialReference",void 0),(0,s._)([(0,o.r)("spatialReference",["spatialReference","tileInfo"])],j.prototype,"readSpatialReference",null),(0,s._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],j.prototype,"path",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],j.prototype,"sublayers",void 0),(0,s._)([(0,p.c)("sublayers",{layers:{type:[U.Z]}})],j.prototype,"writeSublayers",null),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],j.prototype,"popupEnabled",void 0),(0,s._)([(0,a.Cb)()],j.prototype,"tileServers",null),(0,s._)([(0,l.p)("tileServers")],j.prototype,"castTileServers",null),(0,s._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0),(0,s._)([(0,a.Cb)(f.HQ)],j.prototype,"url",void 0),j=(0,s._)([(0,n.j)("esri.layers.TileLayer")],j);const B=j}}]);
//# sourceMappingURL=2977.1562d654.chunk.js.map