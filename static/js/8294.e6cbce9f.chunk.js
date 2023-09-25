"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[8294],{48294:(e,r,t)=>{t.r(r),t.d(r,{default:()=>N});var i=t(27366),s=(t(93169),t(32718),t(25243),t(49861)),a=t(64307),o=(t(35995),t(71907),t(22892),t(4338)),n=t(41499),l=t(64455),p=t(23084),u=t(43813),c=t(99303),y=t(92026),f=t(38511),d=t(67123),B=t(78952),g=t(7882),h=t(80885),v=t(29909),m=t(77981),P=(t(59486),t(52639)),b=t(35091);function _(e){return e.features.map((r=>{const t=B.Z.fromJSON(e.spatialReference),i=P.Z.fromJSON(r);return(0,y.Wg)(i.geometry).spatialReference=t,i}))}function A(e){return e.features.map((r=>(r.geometry.spatialReference=e.spatialReference,(0,m.im)(r.geometry))))}let C=class extends d.wq{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return A(e)}readPointBarriers(e,r){return A(r.barriers)}readPolylineBarriers(e){return A(e)}readPolygonBarriers(e){return A(e)}readIncidents(e,r){return _(r.saPolylines)}readServiceAreaPolygons(e,r){return _(r.saPolygons)}};(0,i._)([(0,s.Cb)({type:[g.Z]})],C.prototype,"facilities",void 0),(0,i._)([(0,f.r)("facilities")],C.prototype,"readFacilities",null),(0,i._)([(0,s.Cb)({type:[b.Z]})],C.prototype,"messages",void 0),(0,i._)([(0,s.Cb)({type:[g.Z]})],C.prototype,"pointBarriers",void 0),(0,i._)([(0,f.r)("pointBarriers",["barriers"])],C.prototype,"readPointBarriers",null),(0,i._)([(0,s.Cb)({type:[v.Z]})],C.prototype,"polylineBarriers",void 0),(0,i._)([(0,f.r)("polylineBarriers")],C.prototype,"readPolylineBarriers",null),(0,i._)([(0,s.Cb)({type:[h.Z]})],C.prototype,"polygonBarriers",void 0),(0,i._)([(0,f.r)("polygonBarriers")],C.prototype,"readPolygonBarriers",null),(0,i._)([(0,s.Cb)({type:[P.Z]})],C.prototype,"serviceAreaPolylines",void 0),(0,i._)([(0,f.r)("serviceAreaPolylines",["saPolylines"])],C.prototype,"readIncidents",null),(0,i._)([(0,s.Cb)({type:[P.Z]})],C.prototype,"serviceAreaPolygons",void 0),(0,i._)([(0,f.r)("serviceAreaPolygons",["saPolygons"])],C.prototype,"readServiceAreaPolygons",null),C=(0,i._)([(0,a.j)("esri.tasks.support.ServiceAreaSolveResult")],C);const k=C,S=(0,u.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});var Z=t(4253);let R=class extends((0,Z.Y)(o.Z)){constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const i=[],s=[],a={},o={},u=(0,p.en)(e);return r.facilities&&r.facilities.features&&(0,c.et)(r.facilities.features,s,"facilities.features",a),r.pointBarriers&&r.pointBarriers.features&&(0,c.et)(r.pointBarriers.features,s,"pointBarriers.features",a),r.polylineBarriers&&r.polylineBarriers.features&&(0,c.et)(r.polylineBarriers.features,s,"polylineBarriers.features",a),r.polygonBarriers&&r.polygonBarriers.features&&(0,c.et)(r.polygonBarriers.features,s,"polygonBarriers.features",a),(0,l.aX)(s).then((e=>{for(const r in a){const t=a[r];i.push(r),o[r]=e.slice(t[0],t[1])}return(0,c.Wf)(o,i)?(0,c.bI)(u.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||(0,c.ef)(o,i);for(const t in o)o[t].forEach(((e,i)=>{r.get(t)[i].geometry=e}));let s={query:{...u.query,f:"json",...S.toQueryParams(r)}};return t&&(s={...t,...s}),(0,n.default)(`${u.path}/solveServiceArea`,s)})).then((e=>k.fromJSON(e.data)))}(this.url,e,r)}};(0,i._)([(0,s.Cb)()],R.prototype,"url",void 0),R=(0,i._)([(0,a.j)("esri.tasks.ServiceAreaTask")],R);const N=R}}]);
//# sourceMappingURL=8294.e6cbce9f.chunk.js.map