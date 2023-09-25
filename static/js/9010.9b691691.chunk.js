"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[9010,2078],{80292:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},49010:(e,t,r)=>{r.d(t,{V:()=>U});var o=r(27366),a=(r(93169),r(92026)),s=r(32718),n=(r(25243),r(49861)),i=r(38511),l=r(64307),p=r(31201),u=r(10064),c=r(35995),d=r(71907),h=(r(22892),r(66978)),m=r(78952),y=r(53866),f=r(41499),v=r(70032),g=r(98995),w=r(80292);function S(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&(0,w.l)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var I=r(25899),b=r(90724),_=r(14921),x=r(62078);async function R(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map((e=>e.resource.path))),s=new Set,n=[];a.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const p of t.resources.toUpdate)if(o.delete(p.resource.path),a.has(p.resource.path)||s.has(p.resource.path)){const{resource:t,content:o,finish:a,error:s}=p,i=(0,x.getSiblingOfSameTypeI)(t,(0,d.D)());e.paths.push(i.path),n.push(O({resource:i,content:o,finish:a,error:s},r))}else e.paths.push(p.resource.path),n.push(P(p,r)),s.add(p.resource.path);for(const p of t.resources.toAdd)n.push(O(p,r)),e.paths.push(p.resource.path);if(o.forEach((e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===n.length)return;const i=await(0,h.as)(n);(0,h.k_)(r);const l=i.filter((e=>"error"in e)).map((e=>e.error));if(l.length>0)throw new u.Z("save:resources","Failed to save one or more resources",{errors:l})}async function O(e,t){const r=await(0,_.q6)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function P(e,t){const r=await(0,_.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var N=r(70361),T=r(30494);const C=s.Z.getLogger("esri.layers.mixins.SceneService"),U=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,h.Ds)((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new m.Z(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return y.Z.fromJSON(e,r);const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<Z))?null:new y.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:o},s=o.split(".");return s.length>=2&&(a.major=parseInt(s[0],10),a.minor=parseInt(s[1],10)),a}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,I.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,I.Qc)(this.url);(0,a.pC)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,I.ld)(o)}set url(e){const t=(0,I.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:C});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,I.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,c.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,T.T)(this.parsedUrl.path,this.rootNode,e,C,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new u.Z("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<Z||null==this.fullExtent||this.fullExtent.hasZ)return;const s=a.obb.halfSize,n=a.obb.center[2],i=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-i,this.fullExtent.zmax=n+i}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<Z)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new u.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,f.default)(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,f.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...E,...t};let o=g.default.from(e);o||(C.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new u.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||v.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=A,o.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(n,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:n}),await R(this.resourceReferences,s,null),this.portalItem=o,S(s),s.portalItem=o,o}async _save(e){const t={...E,...e};this.portalItem||(C.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new u.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==A&&(C.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+A),await Promise.reject(new u.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${A}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,c.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||v.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await R(this.resourceReferences,r,null),S(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter((e=>"error"===e.type)).map((e=>new u.Z(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||j){const t=(await r.e(6168).then(r.bind(r,36168))).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(C.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===o.validationOptions.failPolicy){const e=t.map((e=>new u.Z("sceneservice:schema-validation",e))).concat(a);throw new u.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new u.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return(0,o._)([(0,n.Cb)(N.id)],t.prototype,"id",void 0),(0,o._)([(0,n.Cb)({type:m.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,i.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,n.Cb)({type:y.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,i.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,n.Cb)({readOnly:!0,type:b.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,i.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,n.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,n.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,n.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,i.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,i.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,n.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,n.Cb)(N.HQ)],t.prototype,"url",null),(0,o._)([(0,p.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,n.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,n.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,l.j)("esri.layers.mixins.SceneService")],t),t},Z=-1e38,j=!1,A="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},30494:(e,t,r)=>{r.d(t,{T:()=>n});var o=r(92026),a=r(10064),s=r(41499);async function n(e,t,r,n,i){let l=null;if((0,o.pC)(r)){const t=`${e}/nodepages/`,a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,s.default)(a,{query:{f:"json"},responseType:"json",signal:i})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(c){(0,o.pC)(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,c),l=c}}if(!t)return null;const p=`${e}/nodes/`,u=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await(0,s.default)(u,{query:{f:"json"},responseType:"json",signal:i})).data,urlPrefix:p}}catch(c){throw new a.Z("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:c,url:u})}}},62078:(e,t,r)=>{r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>h,fetchResources:()=>i,getSiblingOfSameType:()=>m,getSiblingOfSameTypeI:()=>y,removeAllResources:()=>u,removeResource:()=>p,splitPrefixFileNameAndExtension:()=>d});var o=r(92026),a=r(10064),s=r(35995),n=r(41499);async function i(e,t={},r){await e.load(r);const a=(0,s.v_)(e.itemUrl,"resources"),{start:n=1,num:i=10,sortOrder:l="asc",sortField:p="created"}=t,u={query:{start:n,num:i,sortOrder:l,sortField:p},signal:(0,o.U2)(r,"signal")},c=await e.portal._request(a,u);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function l(e,t,r,n){if(!e.hasPath())throw new a.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(n);const i=(0,s.v_)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=c(e.path),u=await h(r),d=new FormData;return l&&"."!==l&&d.append("resourcesPrefix",l),d.append("fileName",p),d.append("file",u,p),d.append("f","json"),(0,o.pC)(n)&&n.access&&d.append("access",n.access),await e.portalItem.portal._request(i,{method:"post",body:d,signal:(0,o.U2)(n,"signal")}),e}async function p(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=(0,s.v_)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:(0,o.U2)(r,"signal")}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,s.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,o.U2)(t,"signal")})}function c(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,s.Ml)(e);return(0,o.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,n]=c(t);return[a,n,r]}async function h(e){return e instanceof Blob?e:(await(0,n.default)(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+o))}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+o))}}}]);
//# sourceMappingURL=9010.9b691691.chunk.js.map