"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[425],{30425:(e,a,r)=>{r.r(a),r.d(a,{calcite_loader:()=>s});var t=r(946),i=r(42971),s=function(){function e(e){(0,t.r)(this,e),this.active=!1,this.inline=!1,this.scale="m",this.value=0,this.text=""}return e.prototype.render=function(){var e=this,a=e.el,r=e.inline,s=e.label,o=e.scale,n=e.text,l=e.type,m=e.value,d=a.id||(0,i.g)(),f=r?this.getInlineSize(o):this.getSize(o),c=.45*f,k="0 0 "+f+" "+f,h="determinate"===l,p=2*c*Math.PI,b=m/100*p,g=p-b,y=Math.floor(m),v={"aria-valuenow":y,"aria-valuemin":0,"aria-valuemax":100,complete:100===y},w={r:c,cx:f/2,cy:f/2},u={"stroke-dasharray":b+" "+g};return(0,t.h)(t.H,Object.assign({"aria-label":s,id:d,role:"progressbar"},h?v:{}),(0,t.h)("div",{class:"loader__svgs"},(0,t.h)("svg",{class:"loader__svg loader__svg--1",viewBox:k},(0,t.h)("circle",Object.assign({},w))),(0,t.h)("svg",{class:"loader__svg loader__svg--2",viewBox:k},(0,t.h)("circle",Object.assign({},w))),(0,t.h)("svg",Object.assign({class:"loader__svg loader__svg--3",viewBox:k},h?{style:u}:{}),(0,t.h)("circle",Object.assign({},w)))),n&&(0,t.h)("div",{class:"loader__text"},n),h&&(0,t.h)("div",{class:"loader__percentage"},m))},e.prototype.getSize=function(e){return{s:32,m:56,l:80}[e]},e.prototype.getInlineSize=function(e){return{s:12,m:16,l:20}[e]},Object.defineProperty(e.prototype,"el",{get:function(){return(0,t.g)(this)},enumerable:!1,configurable:!0}),e}();s.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:center;align-items:center;position:relative;-ms-flex-pack:center;justify-content:center;display:none;margin-left:auto;margin-right:auto;opacity:1;padding-top:4rem;padding-bottom:4rem;min-height:var(--loader-size);font-size:var(--loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;-webkit-transform:scale(1, 1);transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--loader-font-size:var(--calcite-font-size--2);--loader-size:2rem;--loader-size-inline:0.75rem}:host([scale=m]){--loader-font-size:var(--calcite-font-size-0);--loader-size:4rem;--loader-size-inline:1rem}:host([scale=l]){--loader-font-size:var(--calcite-font-size-2);--loader-size:6rem;--loader-size-inline:1.25rem}:host([no-padding]){padding-top:0;padding-bottom:0}:host([active]){display:-ms-flexbox;display:flex}.loader__text{display:block;text-align:center;margin-top:calc(var(--loader-size) + 1.5rem)}.loader__percentage{display:block;position:absolute;color:var(--calcite-ui-text-1);text-align:center;font-size:var(--loader-font-size);width:var(--loader-size);top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);margin-top:calc(var(--loader-size) / 2);line-height:0.25;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;width:var(--loader-size);height:var(--loader-size);top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svg{position:absolute;overflow:visible;top:0;left:0;-webkit-transform-origin:center;transform-origin:center;width:var(--loader-size);height:var(--loader-size);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){-webkit-animation:none;animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{-webkit-animation:none;animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:all 100ms linear;transition:all 100ms linear}:host([inline]){position:relative;margin:0;padding-top:0;padding-bottom:0;-webkit-animation:none;animation:none;stroke:currentColor;stroke-width:2;height:var(--loader-size-inline);min-height:var(--loader-size-inline);width:var(--loader-size-inline);margin-right:var(--loader-size-inline)/2;vertical-align:-var(--loader-size-inline)/5}:host([inline][dir=rtl]){margin-right:0;margin-left:var(--loader-size-inline)/2}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([inline]) .loader__svg{width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([complete]){opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms}:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms, -webkit-transform 180ms linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, transform 200ms linear;transition:color 200ms linear, transform 200ms linear, -webkit-transform 200ms linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;-webkit-animation-duration:0.72s;animation-duration:0.72s}@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;-webkit-animation-duration:0.96s;animation-duration:0.96s}@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;-webkit-animation-duration:1.16s;animation-duration:1.16s}@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'},42971:(e,a,r)=>{r.d(a,{g:()=>t});var t=function(){return[2,1,1,1,3].map((function(e){for(var a="",r=0;r<e;r++)a+=(65536*(1+Math.random())|0).toString(16).substring(1);return a})).join("-")}}}]);
//# sourceMappingURL=425.75c2fdd8.chunk.js.map