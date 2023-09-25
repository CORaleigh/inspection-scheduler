"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[3706],{41414:(e,t,i)=>{i.d(t,{Gv:()=>x,JR:()=>y,TC:()=>a,Tn:()=>d,Ue:()=>r,al:()=>n,cS:()=>m,dp:()=>h,fS:()=>_,op:()=>f,pp:()=>o,t8:()=>p});var s=i(92026);i(53866),i(65156);function r(e=S){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function n(e,t,i,s,n,a,o=r()){return o[0]=e,o[1]=t,o[2]=i,o[3]=s,o[4]=n,o[5]=a,o}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function o(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e){return e[0]>=e[3]?0:e[3]-e[0]}function l(e){return e[1]>=e[4]?0:e[4]-e[1]}function c(e){return e[2]>=e[5]?0:e[5]-e[2]}function h(e,t=[0,0,0]){return t[0]=u(e),t[1]=l(e),t[2]=c(e),t}function f(e,t,i=e){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==e&&(i[3]=e[3],i[4]=e[4],i[5]=e[5]),i}function d(e,t,i=e){return i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==e&&(i[0]=e[0],i[1]=e[1],i[2]=e[2]),e}function p(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function m(e){return e?p(e,x):r(x)}function y(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function g(e){return 6===e.length}function _(e,t,i){if((0,s.Wi)(e)||(0,s.Wi)(t))return e===t;if(!g(e)||!g(t))return!1;if(i){for(let s=0;s<e.length;s++)if(!i(e[s],t[s]))return!1}else for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}const x=[1/0,1/0,1/0,-1/0,-1/0,-1/0],S=[0,0,0,0,0,0];r()},83706:(e,t,i)=>{i.d(t,{Z:()=>X});var s=i(84652),r=i(92026),n=i(10064),a=i(92975),o=i(376),u=i(77981),l=i(68860),c=i(64455),h=i(18759),f=i(65156),d=i(41388),p=i(52410),m=i(60480),y=i(41414),g=i(19995),_=i(59026),x=i(48562);const S=new class{constructor(e,t){this._cache=new _.Z(e),this._invalidCache=new _.Z(t)}get(e,t){const i=`${t.uid}:${e}`,s=this._cache.get(i);if(s)return s;if(void 0!==this._invalidCache.get(i))return null;try{const s=x.WhereClause.create(e,t);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}}(50,500),I="feature-store:unsupported-query",w=" as ",R=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function F(e,t){if(!t)return!0;const i=S.get(t,e);if(!i)throw new n.Z(I,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new n.Z(I,"where clause is not standard",{where:t});return A(e,i.fieldNames,"where clause contains missing fields"),!0}function b(e,t,i){if(!t)return!0;const s=S.get(t,e);if(!s)throw new n.Z(I,"invalid SQL expression",{having:t});if(!s.isAggregate)throw new n.Z(I,"having does not contain a valid aggregate function",{having:t});const r=s.fieldNames;if(A(e,r,"having contains missing fields"),!s.getExpressions().every((t=>{const{aggregateType:s,field:r}=t,n=e.has(r)&&e.get(r).name;return i.some((t=>{const{onStatisticField:i,statisticType:r}=t;return(e.has(i)&&e.get(i).name)===n&&r.toLowerCase().trim()===s}))})))throw new n.Z(I,"expressions in having should also exist in outStatistics",{having:t});return!0}function Q(e,t){return e?S.get(e,t):null}function A(e,t,i,s=!0){const r=[];for(const o of t)if("*"!==o&&!e.has(o))if(s){const t=T(o);try{const i=Q(t,e);if(!i)throw new n.Z(I,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new n.Z(I,"expression is not standard",{clause:i});A(e,i.fieldNames,"expression contains missing fields")}catch(a){const e=a&&a.details;if(e&&(e.clause||e.where))throw a;e&&e.missingFields?r.push(...e.missingFields):r.push(o)}}else r.push(o);if(r.length)throw new n.Z(I,i,{missingFields:r})}function T(e){return e.split(w)[0]}function v(e){return e.split(w)[1]}function M(e,t){const i=t.get(e);return!!i&&!R.has(i.type)}var C=i(31904),P=i(86743),N=i(20311),G=i(83406),E=i(58971);const O=class{constructor(e,t,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=i,this.featureAdapter=t;const s=e.outFields;if(s&&-1===s.indexOf("*")){this.outFields=s;let e=0;for(const t of s){const s=T(t),r=this.fieldsIndex.get(s),n=r?null:Q(s,i),a=r?r.name:v(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:a,clause:n})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,i){const s=i?i.name:t;let r=null;return this._fieldDataCache.has(s)?r=this._fieldDataCache.get(s).clause:i||(r=Q(t,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:r})),i?this.featureAdapter.getAttribute(e,s):r.calculateValue(e,this.featureAdapter)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:Q(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:Q(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const i={};for(const s of t){const{alias:t,clause:r}=this._fieldDataCache.get(s);i[t]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return i}_processAttributesForDistinctValues(e){if((0,r.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,i=[];if(t)for(const r of t){const{alias:t}=this._fieldDataCache.get(r);i.push(e[t])}else for(const r in e)i.push(e[r]);const s=`${(t||["*"]).join(",")}=${i.join(",")}`;let n=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++n),n>1?null:e}};function V(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function Z(e,t,i){return(i?e>t:e<t)?-1:(i?e<t:e>t)?1:0}function j(e,t,i){return i?t-e:e-t}function q(e,t,i,s){if(i&&"esriFieldTypeDate"===i.type){const i=new Date(e).getTime(),r=new Date(t).getTime();if(!isNaN(i)&&!isNaN(r))return j(i,r,s)}if("number"==typeof e&&"number"==typeof t)return j(e,t,s);if("string"==typeof e&&"string"==typeof t){const r=e.toUpperCase(),n=t.toUpperCase();return!i||"esriFieldTypeGUID"!==i.type&&"esriFieldTypeGlobalID"!==i.type?Z(r,n,s):Z(V(r),V(n),s)}return s?1:-1}class D{constructor(e,t,i){this.items=e,this.queryGeometry=t,this.definitionExpression=i.definitionExpression,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.fieldsIndex=i.fieldsIndex,this.timeInfo=i.timeInfo,this.featureAdapter=i.featureAdapter,this.aggregateAdapter=i.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new O(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:i,having:s}=e;if(!(null==i?void 0:i.length))return 1;const r=new Map,n=new Map,a=new Set,o=e.outStatistics;for(const u of o){const{statisticType:e}=u,o="exceedslimit"!==e?u.onStatisticField:void 0;if(!n.has(o)){const e=[];for(const s of i){const i=this._getAttributeValues(t,s,r);e.push(i)}n.set(o,this._calculateUniqueValues(e))}const l=n.get(o);for(const i in l){const{data:e,items:r}=l[i],n=e.join(",");s&&!t.validateItems(r,s)||a.add(n)}}return a.size}createQueryResponse(e){let t;return t=e.outStatistics?e.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(e):this._createStatisticsQueryResponse(e):this._createFeatureQueryResponse(e),e.returnQueryGeometry&&((0,a.JY)(e.outSR)&&!(0,a.fS)(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=(0,C.S2)({spatialReference:e.outSR,...(0,g.iV)(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR)}):t.queryGeometry=(0,C.S2)({spatialReference:e.outSR,...this.queryGeometry})),t}createSnappingResponse(e,t){const i=this.featureAdapter,s=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:r,y:n}=e.point,a="number"==typeof e.distance?e.distance:e.distance.x,o="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},l="esriGeometryPolygon"===this.geometryType,c=this.getPointCreator(e.point,this.spatialReference,t);for(const h of this.items){const t=i.getGeometry(h);if(!t)continue;const{coords:f,lengths:d}=t;if(1&e.types){let e=0;for(let t=0;t<d.length;t++){const l=d[t];for(let t=0;t<l;t++,e+=s){const d=f[e],p=f[e+1];if(t!==l-1){const t=f[e+s],l=f[e+s+1],{x:m,y:y}=z(r,n,d,p,t,l),g=(r-m)/a,_=(n-y)/o,x=g*g+_*_;x<=1&&u.candidates.push({type:"edge",objectId:i.getObjectId(h),distance:Math.sqrt(x),target:c(m,y),start:c(d,p),end:c(t,l)})}}}}if(2&e.types){const e=l?f.length-s:f.length;for(let t=0;t<e;t+=s){const e=f[t],s=f[t+1],l=(r-e)/a,d=(n-s)/o,p=l*l+d*d;p<=1&&u.candidates.push({type:"vertex",objectId:i.getObjectId(h),distance:Math.sqrt(p),target:c(e,s)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}getPointCreator(e,t,i){const s=(0,r.pC)(i)&&!(0,a.fS)(t,i)?e=>(0,g.iV)(e,t,i):e=>e;return null!=e.z&&null!=e.m?(t,i)=>s({x:t,y:i,z:e.z,m:e.m}):null!=e.z?(t,i)=>s({x:t,y:i,z:e.z}):null!=e.m?(t,i)=>s({x:t,y:i,m:e.m}):(e,t)=>s({x:e,y:t})}executeAttributesQuery(e){const t=Q(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let i=0;const s=[];for(const e of this.items)t.testFeature(e,this.featureAdapter)&&(s[i++]=e);const r=new D(s,this.queryGeometry,this);return r.definitionExpression=e.where,Promise.resolve(r)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||(0,r.Wi)(this.aggregateAdapter))return Promise.resolve(this);const t=new Set;for(const s of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));const i=this.featureAdapter.getObjectId;return Promise.resolve(new D(this.items.filter((e=>t.has(i(e)))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),i=this.featureAdapter.getObjectId;return Promise.resolve(new D(this.items.filter((e=>t.has(i(e)))),this.queryGeometry,this))}executeTimeQuery(e){const t=(0,N.y)(this.timeInfo,e.timeExtent,this.featureAdapter);if(!(0,r.pC)(t))return Promise.resolve(this);const i=this.items.filter(t);return Promise.resolve(new D(i,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:i}=this.timeInfo,s=i||t,r=new Map,n=this.featureAdapter.getAttribute;for(const o of this.items){const t=n(o,e),i=n(o,s),a=r.get(t);(!a||i>n(a,s))&&r.set(t,o)}const a=Array.from(r.values());return Promise.resolve(new D(a,this.queryGeometry,this))}async project(e){if(!e||(0,a.fS)(this.spatialReference,e))return this;const t=this.featureAdapter,i=(await(0,g.oj)(this.items.map((e=>(0,C.Op)(this.geometryType,this.hasZ,this.hasM,t.getGeometry(e)))),this.spatialReference,e)).map(((e,i)=>t.cloneWithGeometry(this.items[i],(0,G.GH)(e,this.hasZ,this.hasM))));return new D(i,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}_sortFeatures(e,t,i){if(e.length>1&&t&&t.length)for(const s of t.reverse()){const t=s.split(" "),r=t[0],n=this.fieldsIndex.get(r),a=t[1]&&"desc"===t[1].toLowerCase();e.sort(((e,t)=>q(i(e,r,n),i(t,r,n),n,a)))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:s,hasZ:r,objectIdField:n,spatialReference:a}=this,{outFields:o,outSR:u,quantizationParameters:l,resultRecordCount:c,resultOffset:h,returnZ:f,returnM:d}=e,p=null!=c&&t.length>(h||0)+c,m=o&&(o.indexOf("*")>-1?[...this.fieldsIndex.fields]:o.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:p,features:this._createFeatures(e,t),fields:m,geometryType:i,hasM:s&&d,hasZ:r&&f,objectIdFieldName:n,spatialReference:(0,C.S2)(u||a),transform:l&&(0,E.vY)(l)||null}}_createFeatures(e,t){const i=new O(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:r}=this,{orderByFields:n,quantizationParameters:a,returnGeometry:o,returnCentroid:u,maxAllowableOffset:l,resultOffset:c,resultRecordCount:h,returnZ:f=!1,returnM:d=!1}=e,p=r&&f,m=s&&d;let y=[],g=0;const _=[...t];if(this._sortFeatures(_,n,((e,t,s)=>i.getFieldValue(e,t,s))),o||u){const e=(0,E.vY)(a);if(o&&!u)for(const t of _)y[g++]={attributes:i.getAttributes(t),geometry:(0,C.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,p,m)};else if(!o&&u)for(const t of _)y[g++]={attributes:i.getAttributes(t),centroid:(0,C.EG)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of _)y[g++]={attributes:i.getAttributes(t),centroid:(0,C.EG)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,C.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,p,m)}}else for(const S of _){const e=i.getAttributes(S);e&&(y[g++]={attributes:e})}const x=c||0;if(null!=h){const e=x+h;y=y.slice(x,Math.min(y.length,e))}return y}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY;for(const n of e.outStatistics)if("exceedslimit"===n.statisticType){i=null!=n.maxPointCount?n.maxPointCount:Number.POSITIVE_INFINITY,s=null!=n.maxRecordCount?n.maxRecordCount:Number.POSITIVE_INFINITY,r=null!=n.maxVertexCount?n.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>i;else if(this.items.length>s)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,i=this.featureAdapter;t=this.items.reduce(((e,t)=>{const s=i.getGeometry(t);return e+(s&&s.coords.length||0)}),0)/e>r}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}_createStatisticsQueryResponse(e){const t={attributes:{}},i=[],s=new Map,r=new Map,n=new Map,a=new Map,o=new O(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:l,having:c,orderByFields:h}=e,f=l&&l.length,d=!!f,p=d&&l[0],m=d&&!this.fieldsIndex.get(p);for(const g of u){const{outStatisticFieldName:e,statisticType:u}=g,h=g,y="exceedslimit"!==u?g.onStatisticField:void 0,_="percentile_disc"===u||"percentile_cont"===u,x=d&&1===f&&(y===p||m)&&"count"===u;if(d){if(!n.has(y)){const e=[];for(const t of l){const i=this._getAttributeValues(o,t,s);e.push(i)}n.set(y,this._calculateUniqueValues(e,o.returnDistinctValues))}const t=n.get(y);for(const i in t){const{count:r,data:n,items:u,itemPositions:f}=t[i],d=n.join(",");if(!c||o.validateItems(u,c)){const t=a.get(d)||{attributes:{}};let i=null;if(x)i=r;else{const e=this._getAttributeValues(o,y,s),t=f.map((t=>e[t]));i=_&&"statisticParameters"in h?this._getPercentileValue(h,t):this._getStatisticValue(h,t)}t.attributes[e]=i,l.forEach(((e,i)=>t.attributes[this.fieldsIndex.get(e)?e:`EXPR_${i+1}`]=n[i])),a.set(d,t)}}}else{const i=this._getAttributeValues(o,y,s);t.attributes[e]=_&&"statisticParameters"in h?this._getPercentileValue(h,i):this._getStatisticValue(h,i,r)}i.push({name:e,alias:e,type:"esriFieldTypeDouble"})}const y=d?Array.from(a.values()):[t];return this._sortFeatures(y,h,((e,t)=>e.attributes[t])),{fields:i,features:y}}_getStatisticValue(e,t,i){const{onStatisticField:s,statisticType:r}=e,n=i&&i.has(s)?i.get(s):this._calculateStatistics(t);return i&&i.set(s,n),n["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:r}=e,{value:n,orderBy:a}=s,o="desc"===a,u=this.fieldsIndex.get(i),l=[...t].filter((e=>null!=e)).sort(((e,t)=>q(e,t,u,o)));return this._calculatePercentile(l,n,"percentile_disc"===r)}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const s=this.fieldsIndex.get(t),r=this.items.map((i=>e.getFieldValue(i,t,s)));return i.set(t,r),r}_calculateStatistics(e){let t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=null,r=null,n=null,a=null;const o=[];let u=0;for(const l of e)"string"==typeof l?u++:null==l||isNaN(l)||(s+=l,t=Math.min(t,l),i=Math.max(i,l),o.push(l),u++);if(u){r=s/u;let e=0;for(const t of o)e+=(t-r)**2;a=u>1?e/(u-1):0,n=Math.sqrt(a)}else t=null,i=null;return{avg:r,count:u,max:i,min:t,stddev:n,sum:s,variance:a}}_calculateUniqueValues(e,t){const i={},s=this.items,r=s.length;for(let n=0;n<r;n++){const r=s[n],a=[];for(const t of e)a.push(t[n]);const o=a.join(",");t?null==i[o]&&(i[o]={count:1,data:a,items:[r],itemPositions:[n]}):null==i[o]?i[o]={count:1,data:a,items:[r],itemPositions:[n]}:(i[o].count++,i[o].items.push(r),i[o].itemPositions.push(n))}return i}_calculatePercentile(e,t,i){if(0===e.length)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];const s=(e.length-1)*t,r=Math.floor(s),n=r+1,a=s%1,o=e[r],u=e[n];return n>=e.length||i||"string"==typeof o||"string"==typeof u?o:o*(1-a)+u*a}}function z(e,t,i,s,r,n){const a=r-i,o=n-s,u=a*a+o*o,l=(e-i)*a+(t-s)*o,c=Math.min(1,Math.max(0,l/u));return{x:i+a*c,y:s+o*c}}const U=D;const k="feature-store:unsupported-query";const B=new Set,Y=new h.WJ(2e6);let W=0;const J=(0,y.Ue)(),L=(0,y.Ue)(),X=class{constructor(e){this.capabilities={query:m.g},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new h.Xq(W+++"$$",Y)),this.fieldsIndex=new p.Z(e.fields),e.scheduler&&e.task&&(this._frameQueue=new d.Z,this._frameTask=e.scheduler.registerTask(e.task,(e=>this._update(e)),(()=>this._frameQueue.length>0)))}destroy(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null),this.clearCache(),this._geometryQueryCache&&this._geometryQueryCache.destroy(),this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=null),this.fieldsIndex.destroy()}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:(0,C.S2)(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=(0,N.R)(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let i,r=(0,s.d9)(e);try{r=await this._schedule((()=>(0,C.Up)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),i=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(r)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(r)),t),i=await this._reschedule((()=>i.executeTimeQuery(r)),t),i=await this._reschedule((()=>i.executeAttributesQuery(r)),t)}catch(n){if(n!==C.vF)throw n;i=new U([],null,this)}return i.createQueryResponse(r)}async executeQueryForCount(e={},t){let i,r=(0,s.d9)(e);r.returnGeometry=!1,r.returnCentroid=!1,r.outSR=null;try{r=await this._schedule((()=>(0,C.Up)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),i=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(r)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(r)),t),i=await this._reschedule((()=>i.executeTimeQuery(r)),t),i=await this._reschedule((()=>i.executeAttributesQuery(r)),t)}catch(n){if(n!==C.vF)throw n;return 0}return i.createQueryResponseForCount(r)}async executeQueryForExtent(e={},t){let i,r=(0,s.d9)(e);const n=r.outSR;try{r=await this._schedule((()=>(0,C.Up)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),r.returnGeometry=!0,r.returnCentroid=!1,r.outSR=null,i=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(r)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(r)),t),i=await this._reschedule((()=>i.executeTimeQuery(r)),t),i=await this._reschedule((()=>i.executeAttributesQuery(r)),t);const e=i.size;if(!e)return{count:e,extent:null};(0,y.t8)(L,y.Gv),this.featureStore.forEachBounds(i.items,(e=>(0,y.TC)(L,e)),J);const s={xmin:L[0],ymin:L[1],xmax:L[3],ymax:L[4],spatialReference:(0,C.S2)(this.spatialReference)};this.hasZ&&isFinite(L[2])&&isFinite(L[5])&&(s.zmin=L[2],s.zmax=L[5]);const a=(0,g.iV)(s,i.spatialReference,n);if(a.spatialReference=(0,C.S2)(n||this.spatialReference),a.xmax-a.xmin==0){const e=(0,l.c9)(a.spatialReference);a.xmin-=e,a.xmax+=e}if(a.ymax-a.ymin==0){const e=(0,l.c9)(a.spatialReference);a.ymin-=e,a.ymax+=e}if(this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0){const e=(0,l.c9)(a.spatialReference);a.zmin-=e,a.zmax+=e}return{count:e,extent:a}}catch(I){if(I===C.vF)return{count:0,extent:null};throw I}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e={},t){let i,r=(0,s.d9)(e);r.returnGeometry=!1,r.returnCentroid=!1,r.outSR=null;try{r=await this._schedule((()=>(0,C.Up)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),i=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(r)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(r)),t),i=await this._reschedule((()=>i.executeTimeQuery(r)),t),i=await this._reschedule((()=>i.executeAttributesQuery(r)),t);const e=i.items,s=new Set;return await this._reschedule((()=>{for(const t of e)s.add(i.featureAdapter.getObjectId(t))}),t),s}catch(n){if(n===C.vF)return new Set;throw n}}async executeQueryForSnapping(e,t){const{point:i,distance:s,types:n}=e;if(0===n)return{candidates:[]};const o=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),l=!(0,a.fS)(i.spatialReference,this.spatialReference);l&&await(0,g._W)(i.spatialReference,this.spatialReference);const h="number"==typeof s?s:s.x,f="number"==typeof s?s:s.y,d={xmin:i.x-h,xmax:i.x+h,ymin:i.y-f,ymax:i.y+f,spatialReference:i.spatialReference},p=l?(0,g.iV)(d,this.spatialReference):d;if(!p)return{candidates:[]};const m=(await(0,c.aX)((0,u.im)(i),null,{signal:t}))[0],y=(await(0,c.aX)((0,u.im)(p),null,{signal:t}))[0];if((0,r.Wi)(m)||(0,r.Wi)(y))return{candidates:[]};let _=new U(this._searchFeatures(this._getQueryBBoxes(y.toJSON())),null,this);_=await this._reschedule((()=>_.executeObjectIdsQuery(o)),t),_=await this._reschedule((()=>_.executeTimeQuery(o)),t),_=await this._reschedule((()=>_.executeAttributesQuery(o)),t);const x=m.toJSON(),S=l?(0,g.iV)(x,this.spatialReference):x,I=l?Math.max(p.xmax-p.xmin,p.ymax-p.ymin)/2:s;return _.createSnappingResponse({...e,point:S,distance:I},i.spatialReference)}async executeQueryForLatestObservations(e={},t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new n.Z(k,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let i,r=(0,s.d9)(e);try{r=await this._schedule((()=>(0,C.Up)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),i=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(r)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(r)),t),i=await this._reschedule((()=>i.executeTimeQuery(r)),t),i=await this._reschedule((()=>i.executeAttributesQuery(r)),t),i=await this._reschedule((()=>i.filterLatest()),t)}catch(I){if(I!==C.vF)throw I;i=new U([],null,this)}return i.createQueryResponse(r)}async _schedule(e,t){return this._frameQueue?this._frameQueue.push(e,t):e()}async _reschedule(e,t){return this._frameQueue?this._frameQueue.unshift(e,t):e()}_update(e){for(this._budget=e;!e.done&&this._frameQueue&&this._frameQueue.process();)e.madeProgress();this._budget=null}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach((t=>e.push(t))),this._allItems=new U(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:i,outSR:s,spatialRel:n,returnGeometry:o,returnCentroid:u}=e,l=o||u,c=(0,a.JY)(s)&&!(0,a.fS)(this.spatialReference,s),h=this._geometryQueryCache?c&&l?JSON.stringify({geometry:i,spatialRelationship:n,outSpatialReference:s}):JSON.stringify({geometry:i,spatialRelationship:n}):null;if(h){const e=this._geometryQueryCache.get(h);if(!(0,r.o8)(e))return e}const f=async e=>{if(c&&l){const t=await e.project(s);return h&&this._geometryQueryCache.put(h,t,t.size||1),t}return h&&this._geometryQueryCache.put(h,e,e.size||1),e};if(!i)return f(this._getAll());const d=this.featureAdapter;if("esriSpatialRelDisjoint"===n){const e=this._searchFeatures(this._getQueryBBoxes(i));if(!e.length)return f(this._getAll());let s,r;const a=new Set;for(const t of e)a.add(d.getObjectId(t));return await this._reschedule((()=>{let e=0;s=new Array(a.size),this.featureStore.forEach((t=>s[e++]=t)),r=a}),t),f(await this._reschedule((async()=>{const e=await(0,P.cW)(n,i,this.geometryType,this.hasZ,this.hasM);return new U(await this._runSpatialFilter(s,(t=>!r.has(d.getObjectId(t))||e(d.getGeometry(t))),t),i,this)}),t))}const p=this._searchFeatures(this._getQueryBBoxes(i));if(!p.length){const e=new U([],i,this);return h&&this._geometryQueryCache.put(h,e,e.size||1),e}if(this._canExecuteSoloPass(i,e))return f(new U(p,i,this));const m=await(0,P.cW)(n,i,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(p,(e=>m(d.getGeometry(e))),t);return f(new U(y,i,this))}async _runSpatialFilter(e,t,i){if(!t)return e;if(!this._budget)return e.filter((e=>t(e)));let s=0;const r=new Array,n=async()=>{for(;s<e.length;){const a=e[s];t(a)&&r.push(a),this._budget.done&&await this._reschedule((()=>n()),i),++s}};return this._reschedule((()=>n()),i).then((()=>r))}_canExecuteSoloPass(e,t){const{geometryType:i}=this,{spatialRel:s}=t;return(0,P.hN)(e)&&("esriSpatialRelEnvelopeIntersects"===s||"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s||"esriSpatialRelWithin"===s))}_getQueryBBoxes(e){if((0,P.hN)(e)){if((0,u.YX)(e))return[(0,f.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,u.oU)(e))return e.rings.map((e=>(0,f.al)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,o.$P)((0,f.Ue)(),e)]}_searchFeatures(e){for(const s of e)this.featureStore.forEachInBounds(s,(e=>{B.add(e)}));const t=new Array(B.size);let i=0;return B.forEach((e=>t[i++]=e)),B.clear(),t}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new n.Z(k,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),(0,P.P0)(e,this.geometryType,this.spatialReference),(0,g._W)(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:s,outStatistics:r}=e,a=r?r.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())):[];if(i&&i.length>0){const e=" asc",t=" desc",s=i.map((i=>{const s=i.toLowerCase();return s.indexOf(e)>-1?s.split(e)[0]:s.indexOf(t)>-1?s.split(t)[0]:i})).filter((e=>-1===a.indexOf(e)));A(this.fieldsIndex,s,"orderByFields contains missing fields")}if(t&&t.length>0)A(this.fieldsIndex,t,"outFields contains missing fields");else if(s)throw new n.Z(k,"outFields should be specified for returnDistinctValues",{query:e});F(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:s}=e,r=i&&i.length,a=t&&t.length;if(s){if(!r||!a)throw new n.Z(k,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});b(this.fieldsIndex,s,t)}if(a){if(!function(e){return e.every((e=>"exceedslimit"!==e.statisticType))}(t))return;const s=t.map((e=>e.onStatisticField));A(this.fieldsIndex,s,"onStatisticFields contains missing fields"),r&&A(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const i of t){const{onStatisticField:t,statisticType:s}=i;if("percentile_disc"!==s&&"percentile_cont"!==s||!("statisticParameters"in i)){if("count"!==s&&t&&M(t,this.fieldsIndex))throw new n.Z(k,"outStatistics contains non-numeric fields",{definition:i,query:e})}else{const{statisticParameters:t}=i;if(!t)throw new n.Z(k,"statisticParamters should be set for percentile type",{definition:i,query:e})}}}}}},60480:(e,t,i)=>{i.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},86743:(e,t,i)=>{i.d(t,{hN:()=>S,P0:()=>x,cW:()=>_});var s=i(10064),r=i(92975),n=i(34066),a=i(96150),o=i(77981),u=i(80457),l=i(83406);function c(e,t){return e?t?4:3:t?3:2}function h(e,t,i,s,r){if(!e)return!1;const n=c(t,i),{coords:a,lengths:o}=e;let u=!1,l=0;for(const c of o)u=f(u,a,n,l,c,s,r),l+=c*n;return u}function f(e,t,i,s,r,n,a){let o=e,u=s;for(let l=s,c=s+r*i;l<c;l+=i){u=l+i,u===c&&(u=s);const e=t[l],r=t[l+1],h=t[u],f=t[u+1];(r<a&&f>=a||f<a&&r>=a)&&e+(a-r)/(f-r)*(h-e)<n&&(o=!o)}return o}var d=i(19995),p=i(31904);const m="feature-store:unsupported-query",y={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function _(e,t,s,r,f){if((0,o.oU)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,l.Uy)(new u.Z,t,!1,!1);return Promise.resolve((t=>function(e,t,i,s){return h(e,t,i,s.coords[0],s.coords[1])}(e,!1,!1,t)))}if((0,o.oU)(t)&&"esriGeometryMultipoint"===s){const i=(0,l.Uy)(new u.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>function(e,t,i,s,r,n){const a=c(r,n),{coords:o,lengths:u}=s;if(!u)return!1;for(let l=0,c=0;l<u.length;l++,c+=a)if(!h(e,t,i,o[c],o[c+1]))return!1;return!0}(i,!1,!1,e,r,f)))}if((0,o.YX)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,n.aV)(t,(0,p.Op)(s,r,f,e))));if((0,o.YX)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,n.lQ)(t,(0,p.Op)(s,r,f,e))));if((0,o.YX)(t)&&"esriSpatialRelIntersects"===e){const e=(0,a.v$)(s);return Promise.resolve((i=>e(t,(0,p.Op)(s,r,f,i))))}return Promise.all([i.e(9058),i.e(309)]).then(i.bind(i,50309)).then((i=>{const n=i[y[e]].bind(null,t.spatialReference,t);return e=>n((0,p.Op)(s,r,f,e))}))}async function x(e,t,i){const{spatialRel:n,geometry:a}=e;if(a){if(!function(e){return!0===g.spatialRelationship[e]}(n))throw new s.Z(m,"Unsupported query spatial relationship",{query:e});if((0,r.JY)(a.spatialReference)&&(0,r.JY)(i)){if(!function(e){return!0===g.queryGeometry[(0,o.Ji)(e)]}(a))throw new s.Z(m,"Unsupported query geometry type",{query:e});if(!function(e){return!0===g.layerGeometry[e]}(t))throw new s.Z(m,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,d._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function S(e){if((0,o.YX)(e))return!0;if((0,o.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},20311:(e,t,i)=>{function s(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:s,endTimeField:r}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(s&&r)t.forEach((e=>{const t=i.getAttribute(e,s),o=i.getAttribute(e,r);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=s||r;t.forEach((t=>{const s=i.getAttribute(t,e);null==s||isNaN(s)||(n=Math.min(n,s),a=Math.max(a,s))}))}return{start:n,end:a}}function r(e,t,i){if(!t||!e)return null;const{startTimeField:s,endTimeField:r}=e;if(!s&&!r)return null;const{start:n,end:a}=t;return null===n&&null===a?null:void 0===n&&void 0===a?()=>!1:s&&r?function(e,t,i,s,r){return null!=s&&null!=r?n=>{const a=e.getAttribute(n,t),o=e.getAttribute(n,i);return(null==a||a<=r)&&(null==o||o>=s)}:null!=s?t=>{const r=e.getAttribute(t,i);return null==r||r>=s}:null!=r?i=>{const s=e.getAttribute(i,t);return null==s||s<=r}:void 0}(i,s,r,n,a):function(e,t,i,s){return null!=i&&null!=s&&i===s?s=>e.getAttribute(s,t)===i:null!=i&&null!=s?r=>{const n=e.getAttribute(r,t);return n>=i&&n<=s}:null!=i?s=>e.getAttribute(s,t)>=i:null!=s?i=>e.getAttribute(i,t)<=s:void 0}(i,s||r,n,a)}i.d(t,{R:()=>s,y:()=>r})},31904:(e,t,i)=>{i.d(t,{EG:()=>x,Op:()=>S,S2:()=>R,Up:()=>I,j6:()=>w,vF:()=>p});var s=i(92026),r=i(43404),n=i(92975),a=i(94446),o=i(77981),u=i(68860),l=i(64455),c=i(80457),h=i(83406),f=i(19995);const d=new r.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),p=Object.freeze({}),m=new c.Z,y=new c.Z,g=new c.Z,_={esriGeometryPoint:h.fQ,esriGeometryPolyline:h.J6,esriGeometryPolygon:h.eG,esriGeometryMultipoint:h.Iv};function x(e,t,i,s=e.hasZ,r=e.hasM){const n=e.hasZ&&s,a=e.hasM&&r;if(i){const o=(0,h.Nh)(g,t,e.hasZ,e.hasM,"esriGeometryPoint",i,s,r);return(0,h.fQ)(o,n,a)}return(0,h.fQ)(t,n,a)}function S(e,t,i,s,r,n,a=t,o=i){const u=t&&a,l=i&&o,c=s?"coords"in s?s:s.geometry:null;if(!c)return null;if(r){let s=(0,h.zj)(y,c,t,i,e,r,a,o);return n&&(s=(0,h.Nh)(g,s,u,l,e,n)),_[e](s,u,l)}if(n){const s=(0,h.Nh)(g,c,t,i,e,n,a,o);return _[e](s,u,l)}return(0,h.hY)(m,c,t,i,a,o),_[e](m,u,l)}async function I(e,t,i){const{outFields:s,orderByFields:r,groupByFieldsForStatistics:n,outStatistics:a}=e;if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),w(e,t,i)}async function w(e,t,r){if(!e)return null;let{where:c}=e;if(e.where=c=c&&c.trim(),(!c||/^1 *= *1$/.test(c)||t&&t===c)&&(e.where=null),!e.geometry)return e;let h=await async function(e){const{geometry:t,distance:s,units:r}=e;if(null==s||"vertexAttributes"in t)return t;const a=t.spatialReference,o=r?d.fromJSON(r):(0,u.qE)(a),l=a&&((0,n.sT)(a)||(0,n.sS)(a))?t:await(0,f._W)(a,n.Zn).then((()=>(0,f.iV)(t,n.Zn)));return(await async function(){return(await Promise.all([i.e(9058),i.e(309)]).then(i.bind(i,50309))).geodesicBuffer}())(l.spatialReference,l,s,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;h=(0,a.aO)(h),h.spatialReference=t}e.geometry=h,await(0,f._W)(h.spatialReference,r);const m=(await(0,l.aX)((0,o.im)(h)))[0];if((0,s.Wi)(m))throw p;const y=m.toJSON(),g=await(0,f.iV)(y,y.spatialReference,r);if(!g)throw p;return g.spatialReference=r,e.geometry=g,e}function R(e){return e&&F in e?JSON.parse(JSON.stringify(e,b)):e}const F="_geVersion",b=(e,t)=>e!==F?t:void 0}}]);
//# sourceMappingURL=3706.f4b5b298.chunk.js.map