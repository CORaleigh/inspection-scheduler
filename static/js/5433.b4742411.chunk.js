"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[5433],{15433:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S});var i=t(27366),s=(t(93169),t(32718),t(25243),t(49861)),o=t(64307),a=(t(35995),t(71907),t(22892),t(4338)),n=t(41499),l=t(64455),u=t(23084),p=t(43813),c=t(99303),y=t(92026),d=t(38511),f=t(67123),m=t(78952),B=t(7882),b=t(80885),h=t(29909),g=(t(59486),t(52639)),C=t(81099),_=t(35091),v=t(5817);function Z(e){return C.default.fromJSON(e).features.map((e=>e.geometry))}let k=class extends f.wq{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return Z(e)}readIncidents(e){return Z(e)}readPointBarriers(e,r){return Z(r.barriers)}readPolylineBarriers(e){return Z(e)}readPolygonBarriers(e){return Z(e)}readRoutes(e){return function(e){return e.features.map((r=>{const t=m.Z.fromJSON(e.spatialReference),i=g.Z.fromJSON(r);return(0,y.pC)(i.geometry)&&(i.geometry.spatialReference=t),i}))}(e)}};(0,i._)([(0,s.Cb)({type:[v.Z]})],k.prototype,"directions",void 0),(0,i._)([(0,s.Cb)({type:[B.Z]})],k.prototype,"facilities",void 0),(0,i._)([(0,d.r)("facilities")],k.prototype,"readFacilities",null),(0,i._)([(0,s.Cb)({type:[B.Z]})],k.prototype,"incidents",void 0),(0,i._)([(0,d.r)("incidents")],k.prototype,"readIncidents",null),(0,i._)([(0,s.Cb)({type:[_.Z]})],k.prototype,"messages",void 0),(0,i._)([(0,s.Cb)({type:[B.Z]})],k.prototype,"pointBarriers",void 0),(0,i._)([(0,d.r)("pointBarriers",["barriers"])],k.prototype,"readPointBarriers",null),(0,i._)([(0,s.Cb)({type:[h.Z]})],k.prototype,"polylineBarriers",void 0),(0,i._)([(0,d.r)("polylineBarriers")],k.prototype,"readPolylineBarriers",null),(0,i._)([(0,s.Cb)({type:[b.Z]})],k.prototype,"polygonBarriers",void 0),(0,i._)([(0,d.r)("polygonBarriers")],k.prototype,"readPolygonBarriers",null),(0,i._)([(0,s.Cb)({type:[g.Z]})],k.prototype,"routes",void 0),(0,i._)([(0,d.r)("routes")],k.prototype,"readRoutes",null),k=(0,i._)([(0,o.j)("esri.tasks.support.ClosestFacilitySolveResult")],k);const P=k,R=(0,p.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var A=t(4253);let N=class extends((0,A.Y)(a.Z)){constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const i=[],s=[],o={},a={},p=(0,u.en)(e);return r.incidents&&r.incidents.features&&(0,c.et)(r.incidents.features,s,"incidents.features",o),r.facilities&&r.facilities.features&&(0,c.et)(r.facilities.features,s,"facilities.features",o),r.pointBarriers&&r.pointBarriers.features&&(0,c.et)(r.pointBarriers.features,s,"pointBarriers.features",o),r.polylineBarriers&&r.polylineBarriers.features&&(0,c.et)(r.polylineBarriers.features,s,"polylineBarriers.features",o),r.polygonBarriers&&r.polygonBarriers.features&&(0,c.et)(r.polygonBarriers.features,s,"polygonBarriers.features",o),(0,l.aX)(s).then((e=>{for(const r in o){const t=o[r];i.push(r),a[r]=e.slice(t[0],t[1])}return(0,c.Wf)(a,i)?(0,c.bI)(p.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||(0,c.ef)(a,i);for(const t in a)a[t].forEach(((e,i)=>{r.get(t)[i].geometry=e}));let s={query:{...p.query,f:"json",...R.toQueryParams(r)}};return t&&(s={...t,...s}),(0,n.default)(`${p.path}/solveClosestFacility`,s)})).then((e=>P.fromJSON(e.data)))}(this.url,e,r)}};(0,i._)([(0,s.Cb)()],N.prototype,"url",void 0),N=(0,i._)([(0,o.j)("esri.tasks.ClosestFacilityTask")],N);const S=N}}]);
//# sourceMappingURL=5433.b4742411.chunk.js.map