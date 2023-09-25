"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[3388],{19610:(e,t,a)=>{a.d(t,{T:()=>n});const n={BingMapsLayer:async()=>(await a.e(165).then(a.bind(a,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(9010),a.e(6505)]).then(a.bind(a,66505))).default,CSVLayer:async()=>(await a.e(8435).then(a.bind(a,98435))).default,ElevationLayer:async()=>(await a.e(9512).then(a.bind(a,59512))).default,FeatureLayer:async()=>(await Promise.resolve().then(a.bind(a,3014))).default,GroupLayer:async()=>(await a.e(5069).then(a.bind(a,65069))).default,GeoRSSLayer:async()=>(await a.e(54).then(a.bind(a,70054))).default,ImageryLayer:async()=>(await Promise.all([a.e(7314),a.e(7038),a.e(1464),a.e(3145)]).then(a.bind(a,73145))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(7314),a.e(7038),a.e(1464),a.e(3416)]).then(a.bind(a,23416))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(9010),a.e(432)]).then(a.bind(a,70432))).default,KMLLayer:async()=>(await a.e(3838).then(a.bind(a,13838))).default,MapImageLayer:async()=>(await Promise.all([a.e(9668),a.e(9583)]).then(a.bind(a,19583))).default,MapNotesLayer:async()=>(await a.e(9622).then(a.bind(a,69622))).default,OpenStreetMapLayer:async()=>(await a.e(1656).then(a.bind(a,31656))).default,PointCloudLayer:async()=>(await Promise.all([a.e(9010),a.e(9532)]).then(a.bind(a,9532))).default,RouteLayer:async()=>(await a.e(5697).then(a.bind(a,35697))).default,SceneLayer:async()=>(await Promise.all([a.e(9010),a.e(2964)]).then(a.bind(a,2964))).default,StreamLayer:async()=>(await a.e(2668).then(a.bind(a,2668))).default,TileLayer:async()=>(await Promise.all([a.e(9668),a.e(2977)]).then(a.bind(a,42977))).default,UnknownLayer:async()=>(await a.e(4917).then(a.bind(a,74917))).default,UnsupportedLayer:async()=>(await a.e(8101).then(a.bind(a,88101))).default,VectorTileLayer:async()=>(await Promise.resolve().then(a.bind(a,32900))).default,WebTileLayer:async()=>(await a.e(9200).then(a.bind(a,89200))).default,WMSLayer:async()=>(await a.e(4227).then(a.bind(a,84227))).default,WMTSLayer:async()=>(await a.e(3154).then(a.bind(a,3154))).default}},33388:(e,t,a)=>{a.r(t),a.d(t,{load:()=>u});var n=a(10064),r=a(41499),l=a(70032),i=a(21371),s=a(32698),o=a(19610);async function u(e,t){const a=e.instance.portalItem;return a&&a.id?(await a.load(t),function(e){const t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new n.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const a=e.instance,n=a.portalItem,{url:r,title:l}=n,o=(0,s.m)(n);if("group"===a.type)return a.read({title:l},o),d(a,e);r&&a.read({url:r},o);const u=await p(e,t);return u&&a.read(u,o),a.resourceReferences={portalItem:n,paths:o.readResourcePaths},a.read({title:l},o),(0,i.y)(a,o)}(e,t)):Promise.resolve()}function d(e,t){let a;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":a=o.T.FeatureLayer;break;case"Stream Service":a=o.T.StreamLayer;break;case"Scene Service":a=o.T.SceneLayer;break;default:throw new n.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'GroupLayer'`)}let i;return a().then((e=>(i=e,p(t)))).then((t=>f(t)>0?c(e,i,t):function(e,t){if(!e.portalItem.url)return Promise.resolve();const a={responseType:"json",query:{f:"json"}};return(0,r.default)(e.portalItem.url,a).then((a=>{var n,r;const l=a.data;function i(e){return{id:e.id,name:e.name}}l&&c(e,t,{layers:null==(n=l.layers)?void 0:n.map(i),tables:null==(r=l.tables)?void 0:r.map(i)})}))}(e,i)))}function c(e,t,a){let n=a.layers||[];const r=a.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&r.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const r=y(e,t,a,n);e.add(r)})),r.reverse().forEach((n=>{const r=y(e,t,a,n);e.tables.add(r)}))}function y(e,t,a,n){const r=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};r.read(n,t);const i=a.showLegend;null!=i&&r.read({showLegend:i},t)}return r}function p(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const a=e.instance;return a.portalItem.fetchData("json",t).catch((()=>null)).then((e=>{const t=e;let n;if(function(e){return"stream"!==e.type&&"layerId"in e}(a)){let r=!0;return e&&f(t)>0&&(null==a.layerId&&(a.layerId=function(e){const t=e.layers;if(t&&t.length)return t[0].id;const a=e.tables;return a&&a.length?a[0].id:null}(t)),n=function(e,t){const a=e.layers;if(a)for(let r=0;r<a.length;r++)if(a[r].id===t)return a[r];const n=e.tables;if(n)for(let r=0;r<n.length;r++)if(n[r].id===t)return n[r];return null}(t,a.layerId),n&&(1===f(t)&&(r=!1),null!=e.showLegend&&(n.showLegend=e.showLegend))),r&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),n}return e}))}function f(e){var t,a,n,r;return(null!=(t=null==e||null==(a=e.layers)?void 0:a.length)?t:0)+(null!=(n=null==e||null==(r=e.tables)?void 0:r.length)?n:0)}}}]);
//# sourceMappingURL=3388.226dd634.chunk.js.map