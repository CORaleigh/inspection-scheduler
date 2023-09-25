"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[8573],{43514:(t,e,n)=>{function o(t,e){return(t+e)%e}n.d(e,{g:()=>o})},91961:(t,e,n)=>{n.r(e),n.d(e,{calcite_action:()=>y,calcite_action_bar:()=>I,calcite_action_group:()=>q,calcite_action_menu:()=>_,calcite_action_pad:()=>W});var o=n(946),i=n(67108),r=n(81554),a=n(43514),s=n(42971),l=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(e){r(e)}}function s(t){try{l(o.throw(t))}catch(e){r(e)}}function l(t){t.done?n(t.value):i(t.value).then(a,s)}l((o=o.apply(t,e||[])).next())}))},c=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},u="button",d="button--text-visible",p="button--compact",f="icon-container",b="slot-container",h="slot-container--hidden",m="text-container",x="text-container--visible",g="Loading",y=function(){function t(t){var e=this;(0,o.r)(this,t),this.calciteActionClick=(0,o.c)(this,"calciteActionClick",7),this.appearance="solid",this.active=!1,this.compact=!1,this.disabled=!1,this.indicator=!1,this.intlLoading=g,this.loading=!1,this.scale="m",this.textEnabled=!1,this.observer=new MutationObserver((function(){return(0,o.f)(e)})),this.buttonClick=function(){e.disabled||e.calciteActionClick.emit()}}return t.prototype.connectedCallback=function(){this.observer.observe(this.el,{childList:!0,subtree:!0})},t.prototype.disconnectedCallback=function(){this.observer.disconnect()},t.prototype.setFocus=function(){return l(this,void 0,void 0,(function(){return c(this,(function(t){return this.buttonEl.focus(),[2]}))}))},t.prototype.renderTextContainer=function(){var t,e=this.text,n=this.textEnabled,i=((t={})[m]=!0,t[x]=n,t);return e?(0,o.h)("div",{class:i,key:"text-container"},e):null},t.prototype.renderIconContainer=function(){var t,e,n=this,i=n.loading,r=n.icon,a=n.scale,s=n.el,l=n.intlLoading,c="l"===a?"m":"s",u=i?(0,o.h)("calcite-loader",{active:!0,inline:!0,label:l,scale:c}):null,d=r?(0,o.h)("calcite-icon",{icon:r,scale:c}):null,p=u||d,m=p||(null===(e=s.children)||void 0===e?void 0:e.length),x=(0,o.h)("div",{class:(t={},t[b]=!0,t[h]=i,t)},(0,o.h)("slot",null));return m?(0,o.h)("div",{"aria-hidden":"true",class:f,key:"icon-container"},p,x):null},t.prototype.render=function(){var t,e=this,n=this,a=n.compact,s=n.disabled,l=n.loading,c=n.el,f=n.textEnabled,b=n.label,h=n.text,m=b||h,x="rtl"===(0,r.g)(c),g=((t={})[u]=!0,t[d]=f,t[p]=a,t[i.C.rtl]=x,t);return(0,o.h)(o.H,null,(0,o.h)("button",{"aria-busy":l.toString(),"aria-disabled":s.toString(),"aria-label":m,class:g,disabled:s,onClick:this.buttonClick,ref:function(t){return e.buttonEl=t}},this.renderIconContainer(),this.renderTextContainer()))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),t}();y.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:transparent}:host([disabled]){pointer-events:none}.button{background-color:var(--calcite-ui-foreground-1);border-style:none;cursor:pointer;fill:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin:0;position:relative;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-3);font-family:inherit;width:auto;text-align:unset}.button:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none;min-width:1rem;min-height:1rem}.button .text-container{line-height:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;width:0;opacity:0;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-property:width;transition-property:width}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:0.5rem}:host([scale=m]) .button{padding:1rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([alignment=center]) .button{-ms-flex-pack:center;justify-content:center;width:100%}:host([alignment=end]) .button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment=end]) .button .text-container--visible{-ms-flex:0 1 auto;flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:0;padding-right:0}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0;margin-right:0.5rem}.button--text-visible .text-container--visible{margin:0;margin-right:0.5rem}.button--text-visible.calcite--rtl .icon-container{margin:0;margin-left:0.5rem}.button--text-visible.calcite--rtl .text-container--visible{margin:0;margin-left:0.5rem}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear]) .button{background-color:transparent;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:transparent;-webkit-box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:0.5}:host([loading]) calcite-loader[inline]{margin-right:0;color:var(--calcite-ui-text-3)}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:0.5;background-color:var(--calcite-ui-foreground-1)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:0.5;background-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:1rem}:host([indicator]) .button::after{content:"";position:absolute;border-width:2px;background-color:var(--calcite-ui-brand);border-radius:9999px;height:0.5rem;width:0.5rem;z-index:10;border-color:var(--calcite-ui-foreground-1);bottom:0.5rem;right:0.5rem}:host([indicator][scale=s]) .button::after{bottom:0.25rem;right:0.25rem}:host([indicator][scale=l]) .button::after{bottom:0.5rem;right:0.5rem}:host([indicator]) .calcite--rtl::after{right:auto;left:0.25rem}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:0.75rem;padding-left:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:auto;right:0.5rem}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:auto;left:0.5rem}';var v="chevrons-left",w="chevrons-right";function k(t){var e=t.parent,n=t.expanded;Array.from(e.querySelectorAll("calcite-action")).filter((function(t){return"menu-actions"!==t.slot})).forEach((function(t){return t.textEnabled=n})),e.querySelectorAll("calcite-action-group").forEach((function(t){return t.expanded=n}))}var D=function(t){var e=t.expanded,n=t.intlExpand,i=t.intlCollapse,a=t.toggle,s=t.el,l=t.position,c=t.tooltip,u=t.ref,d="rtl"===(0,r.g)(s),p=e?i:n,f=[v,w];d&&f.reverse();var b="end"===function(t,e){var n;return t||(null===(n=e.closest("calcite-shell-panel"))||void 0===n?void 0:n.position)||"start"}(l,s),h=b?f[1]:f[0],m=b?f[0]:f[1],x=(0,o.h)("calcite-action",{dir:d?"rtl":"ltr",icon:e?h:m,onClick:a,ref:function(t){return function(t){var e=t.tooltip,n=t.referenceElement,o=t.expanded,i=t.ref;return e&&(e.referenceElement=!o&&n),i&&i(n),n}({tooltip:c,referenceElement:t,expanded:e,ref:u})},text:p,textEnabled:e});return c?(0,o.h)("calcite-tooltip-manager",null,x):x},A="action-group--bottom",E="bottom-actions",C="expand-tooltip",z="Expand",O="Collapse",M=function(t){var e=t.actionCount,n=t.height,o=t.groupCount,i=function(t){var e=t.height,n=t.groupCount;return Math.floor((e-16*n)/48)}({height:n,groupCount:o}),r=Math.max(Math.ceil(o/2),1);return e>=i?e-i+r:0},I=function(){function t(t){var e=this;(0,o.r)(this,t),this.calciteActionBarToggle=(0,o.c)(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.mutationObserver=new MutationObserver((function(){var t=e,n=t.el;k({parent:n,expanded:t.expanded}),e.resize(n.clientHeight)})),this.resizeObserver=new ResizeObserver((function(t){return e.resizeHandlerEntries(t)})),this.actionMenuOpenChangeHandler=function(t){if(t.detail){var n=t.composedPath();Array.from(e.el.querySelectorAll("calcite-action-group")).forEach((function(t){n.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=function(t){t.forEach(e.resizeHandler)},this.resizeHandler=function(t){var n=t.contentRect.height;e.resize(n)},this.resize=function(t){var n=e,i=n.el,a=n.expanded,s=n.expandDisabled,l=n.lastActionCount,c=n.lastGroupCount,u=n.lastResizeHeight;if("number"===typeof t){var d=i.querySelectorAll("calcite-action"),p=s?d.length:d.length+1,f=Array.from(i.querySelectorAll("calcite-action-group")),b=(0,r.c)(i,E)||!s?f.length+1:f.length;if(u!==t||l!==p||c!==b)e.lastActionCount=p,e.lastGroupCount=b,e.lastResizeHeight=t,function(t){var e=t.actionGroups,n=t.expanded,i=t.overflowCount;e.reverse().forEach((function(t){var e=Array.from(t.querySelectorAll("calcite-action")).reverse();e.forEach((function(t){t.removeAttribute("slot"),t.textEnabled=n})),i>1&&e.some((function(t){var n=e.filter((function(t){return!t.slot}));return n.length>1&&e.length>2&&(t.textEnabled=!0,t.setAttribute("slot","menu-actions"),i--),i<1})),(0,o.f)(t)}))}({actionGroups:f,expanded:a,overflowCount:M({actionCount:p,height:t,groupCount:b})})}},this.toggleExpand=function(){e.expanded=!e.expanded},this.setExpandToggleRef=function(t){e.expandToggleEl=t}}return t.prototype.expandHandler=function(t){t||k({parent:this.el,expanded:this.expanded}),this.resize(this.el.clientHeight)},t.prototype.expandedHandler=function(t){this.expandDisabled||k({parent:this.el,expanded:t}),this.calciteActionBarToggle.emit()},t.prototype.overflowDisabledHandler=function(t){t?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)},t.prototype.componentWillLoad=function(){var t=this,e=t.el,n=t.expandDisabled,o=t.expanded;n||k({parent:e,expanded:o}),this.mutationObserver.observe(e,{childList:!0}),this.overflowActionsDisabled||this.resizeObserver.observe(e)},t.prototype.componentDidLoad=function(){this.resize(this.el.clientHeight)},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect(),this.resizeObserver.disconnect()},t.prototype.setFocus=function(t){return l(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return"expand-toggle"!==t?[3,2]:[4,(0,r.f)(this.expandToggleEl)];case 1:return e.sent(),[2];case 2:return this.el.focus(),[2]}}))}))},t.prototype.renderBottomActionGroup=function(){var t=this,e=t.expanded,n=t.expandDisabled,i=t.intlExpand,a=t.intlCollapse,s=t.el,l=t.position,c=t.toggleExpand,u=(0,r.c)(s,C),d=i||z,p=a||O,f=n?null:(0,o.h)(D,{el:s,expanded:e,intlCollapse:p,intlExpand:d,position:l,ref:this.setExpandToggleRef,toggle:c,tooltip:u});return(0,r.c)(s,E)||f?(0,o.h)("calcite-action-group",{class:A},(0,o.h)("slot",{name:E}),(0,o.h)("slot",{name:C}),f):null},t.prototype.render=function(){return(0,o.h)(o.H,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},(0,o.h)("slot",null),this.renderBottomActionGroup())},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"]}},enumerable:!1,configurable:!0}),t}();I.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;pointer-events:auto;max-width:15vw}:host([overflow-actions-disabled]){overflow-y:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom-width:0}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";var H="menu-actions",T="menu-tooltip",B="More",S="menu-button",P="menu",j="ellipsis",K="tooltip",q=function(){function t(t){var e=this;(0,o.r)(this,t),this.expanded=!1,this.layout="vertical",this.menuOpen=!1,this.setMenuOpen=function(t){e.menuOpen=!!t.detail}}return t.prototype.expandedHandler=function(){this.menuOpen=!1},t.prototype.renderTooltip=function(){var t=this.el;return(0,r.c)(t,T)?(0,o.h)("slot",{name:T,slot:K}):null},t.prototype.renderMenu=function(){var t=this,e=t.el,n=t.expanded,i=t.intlMore,a=t.menuOpen;return(0,r.c)(e,H)?(0,o.h)("calcite-action-menu",{expanded:n,flipPlacements:["left","right"],label:i||B,onCalciteActionMenuOpenChange:this.setMenuOpen,open:a,placement:"leading-start"},this.renderTooltip(),(0,o.h)("slot",{name:H})):null},t.prototype.render=function(){return(0,o.h)(o.H,null,(0,o.h)("slot",null),this.renderMenu())},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:!1,configurable:!0}),t}();q.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0;padding-right:0;--columns:3}:host([columns="1"]){--columns:1}:host([columns="2"]){--columns:2}:host([columns="3"]){--columns:3}:host([columns="4"]){--columns:4}:host([columns="5"]){--columns:5}:host([columns="6"]){--columns:6}:host(:first-child){padding-top:0}:host([layout=horizontal]){-ms-flex-direction:row;flex-direction:row}:host([layout=grid]){background-color:var(--calcite-ui-background);display:grid;grid-gap:1px;gap:1px;place-content:stretch;padding:1px;grid-template-columns:repeat(var(--columns), auto)}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}';var R=["ArrowUp","ArrowDown"],L=["ArrowUp","ArrowDown","End","Home"],_=function(){function t(t){var e=this;(0,o.r)(this,t),this.calciteActionMenuOpenChange=(0,o.c)(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.placement="auto",this.actionElements=[],this.mutationObserver=new MutationObserver((function(){return e.getActions()})),this.guid="calcite-action-menu-"+(0,s.g)(),this.menuId=this.guid+"-menu",this.menuButtonId=this.guid+"-menu-button",this.activeMenuItemIndex=-1,this.menuButtonClick=function(){e.toggleOpen()},this.setTooltipReferenceElement=function(){var t=e,n=t.el,o=t.expanded,i=t.menuButtonEl,a=(0,r.c)(n,K),s="SLOT"===(null===a||void 0===a?void 0:a.tagName)?a.assignedElements()[0]:a;"CALCITE-TOOLTIP"===(null===s||void 0===s?void 0:s.tagName)&&(s.referenceElement=!o&&i)},this.setMenuButtonRef=function(t){e.menuButtonEl=t,e.setTooltipReferenceElement(),(0,o.f)(e)},this.updateAction=function(t,n){var o=e,i=o.guid,r=o.activeMenuItemIndex,a=i+"-action-"+n;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=a),t.active=n===r},this.updateActions=function(t){null===t||void 0===t||t.forEach(e.updateAction)},this.getActions=function(){var t,n=e.el,o=(null===(t=n.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0}).filter((function(t){return"CALCITE-ACTION"===t.tagName})))||Array.from(n.querySelectorAll("calcite-action"));e.updateActions(o),e.actionElements=o},this.menuButtonKeyUp=function(t){var n=t.key,o=e.actionElements;e.isValidKey(n,R)&&(t.preventDefault(),o.length&&(e.toggleOpen(!0),e.handleActionNavigation(n,o)))},this.menuButtonKeyDown=function(t){var n=t.key;e.isValidKey(n,R)&&t.preventDefault()},this.menuActionsContainerKeyDown=function(t){var n=t.key,o=e,i=o.actionElements,r=o.activeMenuItemIndex;if("Tab"!==n)if(" "!==n&&"Enter"!==n)e.isValidKey(n,L)&&t.preventDefault();else{t.preventDefault();var a=i[r];a?a.click():e.toggleOpen(!1)}else e.open=!1},this.menuActionsContainerKeyUp=function(t){var n=t.key,o=e.actionElements;"Escape"!==n?e.isValidKey(n,L)&&(t.preventDefault(),o.length&&e.handleActionNavigation(n,o)):e.toggleOpen(!1)},this.handleActionNavigation=function(t,n){var o=e.activeMenuItemIndex;"Home"===t&&(e.activeMenuItemIndex=0),"End"===t&&(e.activeMenuItemIndex=n.length-1),"ArrowUp"===t&&(e.activeMenuItemIndex=(0,a.g)(Math.max(o-1,-1),n.length)),"ArrowDown"===t&&(e.activeMenuItemIndex=(0,a.g)(o+1,n.length))},this.toggleOpen=function(t){void 0===t&&(t=!e.open),e.open=t,e.activeMenuItemIndex=-1,clearTimeout(e.menuFocusTimeout),t?e.menuFocusTimeout=window.setTimeout((function(){return e.setFocus()}),50):e.setFocus()}}return t.prototype.connectedCallback=function(){this.mutationObserver.observe(this.el,{childList:!0,subtree:!0}),this.getActions()},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()},t.prototype.expandedHandler=function(){this.open=!1,this.setTooltipReferenceElement()},t.prototype.openHandler=function(t){this.calciteActionMenuOpenChange.emit(t)},t.prototype.closeCalciteActionMenuOnClick=function(t){t.composedPath().includes(this.el)||(this.open=!1)},t.prototype.activeMenuItemIndexHandler=function(){this.updateActions(this.actionElements)},t.prototype.setFocus=function(){return l(this,void 0,void 0,(function(){return c(this,(function(t){return(0,r.f)(this.open?this.actionElements[0]||this.menuEl:this.menuButtonEl),[2]}))}))},t.prototype.renderMenuButton=function(){var t=this,e=t.el,n=t.menuButtonId,i=t.menuId,a=t.open,s=t.label,l=t.expanded,c=(0,o.h)("calcite-action",{active:a,"aria-controls":i,"aria-expanded":a.toString(),"aria-haspopup":"true",class:S,icon:j,id:n,label:s,onClick:this.menuButtonClick,onKeyDown:this.menuButtonKeyDown,onKeyUp:this.menuButtonKeyUp,ref:this.setMenuButtonRef,text:s,textEnabled:l});return(0,r.c)(e,K)?(0,o.h)("calcite-tooltip-manager",null,c):c},t.prototype.renderMenuItems=function(){var t=this,e=this,n=e.actionElements,i=e.activeMenuItemIndex,r=e.open,a=e.menuButtonId,s=e.menuId,l=e.menuButtonEl,c=e.label,u=e.placement,d=n[i],p=(null===d||void 0===d?void 0:d.id)||null;return(0,o.h)("calcite-popover",{label:c,open:r,placement:u,referenceElement:l},(0,o.h)("div",{"aria-activedescendant":p,"aria-labelledby":a,class:P,id:s,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:function(e){return t.menuEl=e},role:"menu",tabIndex:-1},(0,o.h)("slot",null)))},t.prototype.render=function(){return(0,o.h)(o.H,null,this.renderMenuButton(),this.renderMenuItems(),(0,o.h)("slot",{name:K}))},t.prototype.isValidKey=function(t,e){return!!e.find((function(e){return e===t}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}},enumerable:!1,configurable:!0}),t}();_.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}";var F="action-group--bottom",G="container",U="Expand",N="Collapse",V="expand-tooltip",W=function(){function t(t){var e=this;(0,o.r)(this,t),this.calciteActionPadToggle=(0,o.c)(this,"calciteActionPadToggle",7),this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.actionMenuOpenChangeHandler=function(t){if(t.detail){var n=t.composedPath();Array.from(e.el.querySelectorAll("calcite-action-group")).forEach((function(t){n.includes(t)||(t.menuOpen=!1)}))}},this.toggleExpand=function(){e.expanded=!e.expanded},this.setExpandToggleRef=function(t){e.expandToggleEl=t}}return t.prototype.expandHandler=function(t){t||k({parent:this.el,expanded:this.expanded})},t.prototype.expandedHandler=function(t){this.expandDisabled||k({parent:this.el,expanded:t}),this.calciteActionPadToggle.emit()},t.prototype.componentWillLoad=function(){var t=this,e=t.el,n=t.expandDisabled,o=t.expanded;n||k({parent:e,expanded:o})},t.prototype.setFocus=function(t){return l(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return"expand-toggle"!==t?[3,2]:[4,(0,r.f)(this.expandToggleEl)];case 1:return e.sent(),[2];case 2:return this.el.focus(),[2]}}))}))},t.prototype.renderBottomActionGroup=function(){var t=this,e=t.expanded,n=t.expandDisabled,i=t.intlExpand,a=t.intlCollapse,s=t.el,l=t.position,c=t.toggleExpand,u=(0,r.c)(s,V),d=i||U,p=a||N,f=n?null:(0,o.h)(D,{el:s,expanded:e,intlCollapse:p,intlExpand:d,position:l,ref:this.setExpandToggleRef,toggle:c,tooltip:u});return f?(0,o.h)("calcite-action-group",{class:F},(0,o.h)("slot",{name:V}),f):null},t.prototype.render=function(){var t,e="rtl"===(0,r.g)(this.el),n=((t={})[G]=!0,t[i.C.rtl]=e,t);return(0,o.h)(o.H,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},(0,o.h)("div",{class:n},(0,o.h)("slot",null),this.renderBottomActionGroup()))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}},enumerable:!1,configurable:!0}),t}();W.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;padding-bottom:0;padding-top:0}.container{-ms-flex-direction:column;flex-direction:column;display:-ms-inline-flexbox;display:inline-flex;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0;border-right-width:1px;padding:0}:host([layout=horizontal]) .container.calcite--rtl ::slotted(calcite-action-group){border-width:0;border-left-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0}"},81554:(t,e,n)=>{n.d(e,{a:()=>s,b:()=>c,c:()=>d,d:()=>f,e:()=>p,f:()=>u,g:()=>l,h:()=>b,n:()=>a,s:()=>h});var o=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(e){r(e)}}function s(t){try{l(o.throw(t))}catch(e){r(e)}}function l(t){t.done?n(t.value):i(t.value).then(a,s)}l((o=o.apply(t,e||[])).next())}))},i=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},r=function(t,e){for(var n=0,o=e.length,i=t.length;n<o;n++,i++)t[i]=e[n];return t};function a(t){return Array.isArray(t)?t:Array.from(t)}function s(t,e){return Array.from(t.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(t,e){var n,o=e.name,i=e.value;return Object.assign(Object.assign({},t),((n={})[o]=i,n))}),{})}function l(t){return c(t,"dir","ltr",!0)}function c(t,e,n,o){void 0===o&&(o=!1);var i="["+e+"]",r=o?function(t,e){void 0===e&&(e=this);function n(e){if(!e||e===document||e===window)return null;var o=e.closest(t);return o||n(e.getRootNode().host)}return n(e)}(i,t):t.closest(i);return r?r.getAttribute(e):n}function u(t){return o(this,void 0,void 0,(function(){return i(this,(function(e){return t?("function"===typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function d(t,e,n){var o='[slot="'+e+'"]';return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var o=Array.from(t.querySelectorAll(e));o=n&&!1===n.direct?o:o.filter((function(e){return e.parentElement===t}));var i=null===n||void 0===n?void 0:n.selector;return i?o.map((function(t){return Array.from(t.querySelectorAll(i))})).reduce((function(t,e){return r(r([],t),e)}),[]).filter((function(t){return!!t})):o}(t,o,n):function(t,e,n){var o=t.querySelector(e);o=n&&!1===n.direct||(null===o||void 0===o?void 0:o.parentElement)===t?o:null;var i=null===n||void 0===n?void 0:n.selector;return i?o.querySelector(i):o}(t,o,n)}function p(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function f(t,e){var n=null===t||void 0===t?void 0:t.getAttribute(e);return n&&document.getElementById(n)||null}function b(t,e){return t.contains(e)}function h(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}},42971:(t,e,n)=>{n.d(e,{g:()=>o});var o=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},67108:(t,e,n)=>{n.d(e,{C:()=>o});var o={rtl:"calcite--rtl"}}}]);
//# sourceMappingURL=8573.04ab5590.chunk.js.map