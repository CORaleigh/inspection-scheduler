"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[8023],{28023:(e,s,t)=>{t.r(s),t.d(s,{execute:()=>o});var r=t(93923),n=t(10064);let a;function o(e,s={}){let t=s.responseType;t?"json"!==t&&"text"!==t&&"blob"!==t&&"array-buffer"!==t&&(t="text"):t="json";const o=s&&s.signal;return delete s.signal,r.Z.invokeStaticMessage("request",{url:e,options:s},{signal:o}).then((r=>{const o=r.data;let l,i,u,c;if(o&&!("json"!==t&&"text"!==t&&"blob"!==t||(l=new Blob([o]),"json"!==t&&"text"!==t||(a||(a=new FileReaderSync),i=a.readAsText(l),"json"!==t)))){try{u=JSON.parse(i||null)}catch(p){const t={...p,url:e,requestOptions:s};throw new n.Z("request:server",p.message,t)}if(u.error){const t={...u.error,url:e,requestOptions:s};throw new n.Z("request:server",u.error.message,t)}}switch(t){case"json":c=u;break;case"text":c=i;break;case"blob":c=l;break;default:c=o}return{data:c,requestOptions:s,ssl:r.ssl,url:e}}))}}}]);
//# sourceMappingURL=8023.c3ee2b51.chunk.js.map