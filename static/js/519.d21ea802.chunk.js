"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[519,3139],{20519:(e,a,r)=>{r.r(a),r.d(a,{populateOperationalLayers:()=>d});r(93169);var t=r(66978),n=r(40110),i=r(98995),y=r(21371),l=r(19610),c=r(73117);function s(e,a){return u(e,a,"notes","Map Notes")}function o(e,a){return u(e,a,"route","Route Layer")}async function u(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new i.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&(0,c._$)(r,t)}return!1}var L=r(43139);async function d(e,a,r){if(!a)return;const n=[];for(const t of a){const e=g(t,r);"GroupLayer"===t.layerType?n.push(b(e,t,r)):n.push(e)}const i=await(0,t.as)(n);for(const t of i)!t.value||r.filter&&!r.filter(t.value)||e.add(t.value)}const p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},f={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},I={ArcGISFeatureLayer:"FeatureLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function g(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&w(a)&&await async function(e,a,r){const t=l.T.FeatureLayer,n=await t(),i=a.featureCollection,y=i.showLegend,c=i.layers.map((e=>{const a=new n;return a.read(e,r),null!=y&&a.read({showLegend:y},r),a}));e.layers.addMany(c)}(t,a,r.context),await(0,y.y)(t,r.context),t}(await async function(e,a){const r=a.context,t=M(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const y=t[n];let c=y?l.T[y]:l.T.UnknownLayer;const u=r&&r.portal;if(h(e)){if(e.itemId){const a=new i.default({id:e.itemId,portal:u});await a.load();const r=(await(0,L.selectLayerClassPath)(a)).className||"UnknownLayer";c=l.T[r]}}else"ArcGISFeatureLayer"===n&&(await s(e,u)?c=l.T.MapNotesLayer:await o(e,u)?c=l.T.RouteLayer:w(e)&&(c=l.T.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(c=l.T.WMTSLayer),c()}(e,a),e,a)}function w(e){if("ArcGISFeatureLayer"!==e.layerType||h(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function h(e){return"Feature Collection"===e.type}function M(e){let a;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":a=S;break;case"ground":a=f;break;default:a=p}else switch(e.layerContainerType){case"basemap":a=T;break;case"tables":a=I;break;default:a=m}return a}async function b(e,a,r){const t=new n.Z,i=d(t,Array.isArray(a.layers)?a.layers:[],r),y=await e;if(await i,"group"===y.type)return y.layers.addMany(t),y}},19610:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(165).then(r.bind(r,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(9010),r.e(6505)]).then(r.bind(r,66505))).default,CSVLayer:async()=>(await r.e(8435).then(r.bind(r,98435))).default,ElevationLayer:async()=>(await r.e(9512).then(r.bind(r,59512))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,3014))).default,GroupLayer:async()=>(await r.e(5069).then(r.bind(r,65069))).default,GeoRSSLayer:async()=>(await r.e(54).then(r.bind(r,70054))).default,ImageryLayer:async()=>(await Promise.all([r.e(7314),r.e(7038),r.e(1464),r.e(3145)]).then(r.bind(r,73145))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(7314),r.e(7038),r.e(1464),r.e(3416)]).then(r.bind(r,23416))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(9010),r.e(432)]).then(r.bind(r,70432))).default,KMLLayer:async()=>(await r.e(3838).then(r.bind(r,13838))).default,MapImageLayer:async()=>(await Promise.all([r.e(9668),r.e(9583)]).then(r.bind(r,19583))).default,MapNotesLayer:async()=>(await r.e(9622).then(r.bind(r,69622))).default,OpenStreetMapLayer:async()=>(await r.e(1656).then(r.bind(r,31656))).default,PointCloudLayer:async()=>(await Promise.all([r.e(9010),r.e(9532)]).then(r.bind(r,9532))).default,RouteLayer:async()=>(await r.e(5697).then(r.bind(r,35697))).default,SceneLayer:async()=>(await Promise.all([r.e(9010),r.e(2964)]).then(r.bind(r,2964))).default,StreamLayer:async()=>(await r.e(2668).then(r.bind(r,2668))).default,TileLayer:async()=>(await Promise.all([r.e(9668),r.e(2977)]).then(r.bind(r,42977))).default,UnknownLayer:async()=>(await r.e(4917).then(r.bind(r,74917))).default,UnsupportedLayer:async()=>(await r.e(8101).then(r.bind(r,88101))).default,VectorTileLayer:async()=>(await Promise.resolve().then(r.bind(r,32900))).default,WebTileLayer:async()=>(await r.e(9200).then(r.bind(r,89200))).default,WMSLayer:async()=>(await r.e(4227).then(r.bind(r,84227))).default,WMTSLayer:async()=>(await r.e(3154).then(r.bind(r,3154))).default}},73117:(e,a,r)=>{function t(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}r.d(a,{_$:()=>t})},43139:(e,a,r)=>{r.r(a),r.d(a,{fromItem:()=>s,selectLayerClassPath:()=>o});var t=r(92026),n=r(10064),i=r(41499),y=r(98995),l=r(73117),c=r(19610);function s(e){return!e.portalItem||e.portalItem instanceof y.default||(e={...e,portalItem:new y.default(e.portalItem)}),function(e){return e.load().then(o).then(u)}(e.portalItem).then((a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Promise.resolve(new t(r))}))}function o(e){switch(e.type){case"Map Service":return function(e){return function(e){return S(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return L(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),(0,l._$)(e,"Map Notes")?{className:"MapNotesLayer"}:(0,l._$)(e,"Route Layer")?{className:"RouteLayer"}:1===f(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return L(e).then((a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return S(t).then((e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const i=await e.fetchData(),y=null==i?void 0:i.layerType;return"ArcGISTiledImageServiceLayer"===y?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===y?{className:"ImageryLayer"}:"map"===(null==(t=(await S(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new n.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function u(e){return(0,c.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function L(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((a=>f(a)>0?d(a):S(e.url).then(d)))}function d(e){return 1===f(e)&&{id:(0,t.Wg)(p(e))}}function p(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function f(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function S(e){return(0,i.default)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}}}]);
//# sourceMappingURL=519.d21ea802.chunk.js.map