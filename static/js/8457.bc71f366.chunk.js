"use strict";(globalThis.webpackChunkinspections_app=globalThis.webpackChunkinspections_app||[]).push([[8457],{68457:(t,e,i)=>{i.r(e),i.d(e,{calcite_tab:()=>u,calcite_tab_nav:()=>f,calcite_tab_title:()=>p,calcite_tabs:()=>d});var n=i(946),a=i(42971),r=i(81554),o=i(58074),s=function(t,e,i,n){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{l(n.next(t))}catch(e){r(e)}}function s(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){t.done?i(t.value):a(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))},l=function(t,e){var i,n,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(a=2&r[0]?n.return:r[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,n=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(s){r=[6,s],n=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},c=function(t,e){for(var i=0,n=e.length,a=t.length;i<n;i++,a++)t[a]=e[i];return t},u=function(){function t(t){(0,n.r)(this,t),this.calciteTabRegister=(0,n.c)(this,"calciteTabRegister",7),this.active=!1,this.guid="calcite-tab-title-"+(0,a.g)()}return t.prototype.render=function(){var t=this.el.id||this.guid;return(0,n.h)(n.H,{"aria-expanded":this.active.toString(),"aria-labelledby":this.labeledBy,id:t,role:"tabpanel"},(0,n.h)("section",null,(0,n.h)("slot",null)))},t.prototype.componentDidLoad=function(){this.calciteTabRegister.emit()},t.prototype.disconnectedCallback=function(){var t;null===(t=document.body)||void 0===t||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))},t.prototype.tabChangeHandler=function(t){var e=this;t.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((function(i){e.active=i===t.detail.tab})))},t.prototype.getTabIndex=function(){return s(this,void 0,void 0,(function(){return l(this,(function(t){return[2,Array.prototype.indexOf.call((0,r.n)(this.el.parentElement.children).filter((function(t){return t.matches("calcite-tab")})),this.el)]}))}))},t.prototype.updateAriaInfo=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),s(this,void 0,void 0,(function(){return l(this,(function(i){return this.labeledBy=e[t.indexOf(this.el.id)]||null,[2]}))}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),t}();u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;z-index:10}:host([active]){display:block}section{height:100%;width:100%;display:none}";var f=function(){function t(t){var e=this;(0,n.r)(this,t),this.calciteTabChange=(0,n.c)(this,"calciteTabChange",7),this.layout="inline",this.position="below",this.animationActiveDuration=.3,this.handleContainerScroll=function(){e.activeIndicatorEl.style.transitionDuration="0s",e.updateOffsetPosition()}}return t.prototype.selectedTabChanged=function(){return s(this,void 0,void 0,(function(){var t;return l(this,(function(e){switch(e.label){case 0:return localStorage&&this.storageId&&void 0!==this.selectedTab&&null!==this.selectedTab&&localStorage.setItem("calcite-tab-nav-"+this.storageId,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab}),t=this,[4,this.getTabTitleById(this.selectedTab)];case 1:return t.selectedTabEl=e.sent(),[2]}}))}))},t.prototype.selectedTabElChanged=function(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration=this.animationActiveDuration+"s"},t.prototype.componentWillLoad=function(){var t="calcite-tab-nav-"+this.storageId;if(localStorage&&this.storageId&&localStorage.getItem(t)){var e=JSON.parse(localStorage.getItem(t));this.selectedTab=e,this.calciteTabChange.emit({tab:this.selectedTab})}},t.prototype.componentWillRender=function(){var t,e;this.layout=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.layout,this.position=null===(e=this.el.closest("calcite-tabs"))||void 0===e?void 0:e.position},t.prototype.componentDidRender=function(){var t=this;this.tabTitles.length&&this.tabTitles.every((function(t){return!t.active}))&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then((function(e){t.calciteTabChange.emit({tab:e})}))},t.prototype.render=function(){var t=this,e=(0,r.g)(this.el),i=this.indicatorWidth+"px",a=this.indicatorOffset+"px",o="rtl"!==e?{width:i,left:a}:{width:i,right:a};return(0,n.h)(n.H,{role:"tablist"},(0,n.h)("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:function(e){return t.tabNavEl=e}},(0,n.h)("div",{class:"tab-nav-active-indicator-container",ref:function(e){return t.activeIndicatorContainerEl=e}},(0,n.h)("div",{class:"tab-nav-active-indicator",ref:function(e){return t.activeIndicatorEl=e},style:o})),(0,n.h)("slot",null)))},t.prototype.resizeHandler=function(){this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition()},t.prototype.focusPreviousTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[e-1]||this.enabledTabTitles[this.enabledTabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()},t.prototype.focusNextTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[e+1]||this.enabledTabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()},t.prototype.activateTabHandler=function(t){t.detail.tab?this.selectedTab=t.detail.tab:this.selectedTab=this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()},t.prototype.updateTabTitles=function(t){t.target.active&&(this.selectedTab=t.detail)},t.prototype.globalTabChangeHandler=function(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)},t.prototype.updateOffsetPosition=function(){var t,e,i,n,a,o=(0,r.g)(this.el),s=null===(t=this.activeIndicatorContainerEl)||void 0===t?void 0:t.offsetWidth,l=null===(e=this.selectedTabEl)||void 0===e?void 0:e.offsetLeft,c=s-(l+(null===(i=this.selectedTabEl)||void 0===i?void 0:i.offsetWidth));this.indicatorOffset="rtl"!==o?l-(null===(n=this.tabNavEl)||void 0===n?void 0:n.scrollLeft):c+(null===(a=this.tabNavEl)||void 0===a?void 0:a.scrollLeft)},t.prototype.updateActiveWidth=function(){var t;this.indicatorWidth=null===(t=this.selectedTabEl)||void 0===t?void 0:t.offsetWidth},t.prototype.getIndexOfTabTitle=function(t,e){return void 0===e&&(e=this.tabTitles),e.indexOf(t)},t.prototype.getTabTitleById=function(t){return s(this,void 0,void 0,(function(){var e=this;return l(this,(function(i){return[2,Promise.all(this.tabTitles.map((function(t){return t.getTabIdentifier()}))).then((function(i){return e.tabTitles[i.indexOf(t)]}))]}))}))},Object.defineProperty(t.prototype,"tabTitles",{get:function(){return(0,r.e)(this.el,"calcite-tab-title")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"enabledTabTitles",{get:function(){return(0,r.e)(this.el,"calcite-tab-title:not([disabled])")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"],selectedTabEl:["selectedTabElChanged"]}},enumerable:!1,configurable:!0}),t}();f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{z-index:20;position:relative;display:-ms-flexbox;display:flex}.tab-nav{display:-ms-flexbox;display:flex;width:100%;overflow:auto;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;padding:0.25rem;margin:-0.25rem}:host([layout=center]) .tab-nav{-ms-flex-pack:center;justify-content:center}.tab-nav-active-indicator-container{width:100%;right:0;left:0;bottom:0;position:absolute;overflow:hidden;height:0.125rem}.tab-nav-active-indicator{position:absolute;bottom:0;display:block;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);background-color:var(--calcite-ui-brand);height:0.125rem}:host([position=below]) .tab-nav-active-indicator{bottom:unset;top:0}:host([position=below]) .tab-nav-active-indicator-container{bottom:unset;top:0}";var p=function(){function t(t){(0,n.r)(this,t),this.calciteTabsActivate=(0,n.c)(this,"calciteTabsActivate",7),this.calciteTabsFocusNext=(0,n.c)(this,"calciteTabsFocusNext",7),this.calciteTabsFocusPrevious=(0,n.c)(this,"calciteTabsFocusPrevious",7),this.calciteTabTitleRegister=(0,n.c)(this,"calciteTabTitleRegister",7),this.active=!1,this.disabled=!1,this.hasText=!1,this.guid="calcite-tab-title-"+(0,a.g)()}return t.prototype.connectedCallback=function(){this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav")},t.prototype.disconnectedCallback=function(){var t;this.observer.disconnect(),null===(t=document.body)||void 0===t||t.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}))},t.prototype.componentWillLoad=function(){this.updateHasText(),this.tab&&this.active&&this.emitActiveTab()},t.prototype.componentWillRender=function(){var t,e;this.layout=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.layout,this.position=null===(e=this.el.closest("calcite-tabs"))||void 0===e?void 0:e.position},t.prototype.render=function(){var t=(0,r.g)(this.el),e=this.el.id||this.guid,i=this.disabled?"span":"a",a=(0,n.h)("calcite-icon",{class:"calcite-tab-title--icon icon-start",dir:t,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),o=(0,n.h)("calcite-icon",{class:"calcite-tab-title--icon icon-end",dir:t,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return(0,n.h)(n.H,{"aria-controls":this.controls,"aria-expanded":this.active.toString(),dir:t,hasText:this.hasText,id:e,role:"tab",tabindex:this.disabled?"-1":"0"},(0,n.h)(i,{class:{rtl:"rtl"===t}},this.iconStart?a:null,(0,n.h)("slot",null),this.iconEnd?o:null))},t.prototype.componentDidLoad=function(){return s(this,void 0,void 0,(function(){var t,e;return l(this,(function(i){switch(i.label){case 0:return e=(t=this.calciteTabTitleRegister).emit,[4,this.getTabIdentifier()];case 1:return e.apply(t,[i.sent()]),[2]}}))}))},t.prototype.tabChangeHandler=function(t){var e=this;this.parentTabNavEl===t.target&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((function(i){e.active=i===t.detail.tab})))},t.prototype.onClick=function(){this.emitActiveTab()},t.prototype.keyDownHandler=function(t){switch((0,o.g)(t.key)){case" ":case"Enter":this.emitActiveTab(),t.preventDefault();break;case"ArrowRight":"ltr"===(0,r.g)(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case"ArrowLeft":"ltr"===(0,r.g)(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}},t.prototype.getTabIndex=function(){return s(this,void 0,void 0,(function(){return l(this,(function(t){return[2,Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)]}))}))},t.prototype.getTabIdentifier=function(){return s(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this.tab?this.tab:this.getTabIndex()]}))}))},t.prototype.updateAriaInfo=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),s(this,void 0,void 0,(function(){return l(this,(function(i){return this.controls=t[e.indexOf(this.el.id)]||null,[2]}))}))},t.prototype.updateHasText=function(){this.hasText=this.el.textContent.trim().length>0},t.prototype.setupTextContentObserver=function(){var t=this;this.observer=new MutationObserver((function(){t.updateHasText()})),this.observer.observe(this.el,{childList:!0,subtree:!0})},t.prototype.emitActiveTab=function(){this.disabled||this.calciteTabsActivate.emit({tab:this.tab})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),t}();p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex:0 1 auto;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-right:1.25rem;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout=center]){text-align:center;margin-top:0;margin-bottom:0;margin-left:1.25rem;margin-right:1.25rem;-ms-flex-preferred-size:12rem;flex-basis:12rem}:host([position=below]) a{border-bottom-width:0;border-top-width:2px;border-top-color:transparent;border-top-style:solid}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host(:active) a,:host(:focus) a,:host(:hover) a{text-decoration:none;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2)}:host([active]) a{color:var(--calcite-ui-text-1);border-color:transparent}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.5}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom-width:2px;border-bottom-color:transparent;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding-left:0;padding-right:0;padding-top:0.5rem;padding-bottom:0.5rem;border-bottom-style:solid}span{cursor:default}.calcite-tab-title--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([hastext]) .calcite-tab-title--icon.icon-start{margin-right:0.5rem}:host([hastext]) .calcite-tab-title--icon.icon-end{margin-left:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-right:0.5rem}:host .rtl{margin-right:0;margin-left:1.25rem}:host([hastext]) .rtl .calcite-tab-title--icon.icon-end{margin-left:0;margin-right:0.5rem}:host([hastext]) .rtl .calcite-tab-title--icon.icon-start{margin-left:0.5rem;margin-right:0}:host([icon-start][icon-end]) .rtl .calcite-tab-title--icon:first-child{margin-left:0.5rem;margin-right:0}";var d=function(){function t(t){(0,n.r)(this,t),this.layout="inline",this.position="above",this.titles=[],this.tabs=[]}return t.prototype.render=function(){return(0,n.h)(n.H,null,(0,n.h)("slot",{name:"tab-nav"}),(0,n.h)("section",null,(0,n.h)("slot",null)))},t.prototype.calciteTabTitleRegister=function(t){this.titles=c(c([],this.titles),[t.target]),this.registryHandler(),t.stopPropagation()},t.prototype.calciteTabTitleUnregister=function(t){this.titles=this.titles.filter((function(e){return e!==t.detail})),this.registryHandler(),t.stopPropagation()},t.prototype.calciteTabRegister=function(t){this.tabs=c(c([],this.tabs),[t.target]),this.registryHandler(),t.stopPropagation()},t.prototype.calciteTabUnregister=function(t){this.tabs=this.tabs.filter((function(e){return e!==t.detail})),this.registryHandler(),t.stopPropagation()},t.prototype.registryHandler=function(){return s(this,void 0,void 0,(function(){var t,e,i,n,a=this;return l(this,(function(r){switch(r.label){case 0:return this.tabs.some((function(t){return t.tab}))||this.titles.some((function(t){return t.tab}))?(t=this.tabs.sort((function(t,e){return t.tab.localeCompare(e.tab)})).map((function(t){return t.id})),e=this.titles.sort((function(t,e){return t.tab.localeCompare(e.tab)})).map((function(t){return t.id})),[3,4]):[3,1];case 1:return[4,Promise.all(this.tabs.map((function(t){return t.getTabIndex()})))];case 2:return i=r.sent(),[4,Promise.all(this.titles.map((function(t){return t.getTabIndex()})))];case 3:n=r.sent(),t=i.reduce((function(t,e,i){return t[e]=a.tabs[i].id,t}),[]),e=n.reduce((function(t,e,i){return t[e]=a.titles[i].id,t}),[]),r.label=4;case 4:return this.tabs.forEach((function(i){return i.updateAriaInfo(t,e)})),this.titles.forEach((function(i){return i.updateAriaInfo(t,e)})),[2]}}))}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),t}();d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([position=below]){-ms-flex-direction:column-reverse;flex-direction:column-reverse}section{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;border-top-width:1px;border-top-color:var(--calcite-ui-border-1);border-top-style:solid}:host([position=below]) section{-ms-flex-direction:column-reverse;flex-direction:column-reverse;border-top-width:0;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-1);border-bottom-style:solid}"},81554:(t,e,i)=>{i.d(e,{a:()=>s,b:()=>c,c:()=>f,d:()=>d,e:()=>p,f:()=>u,g:()=>l,h:()=>b,n:()=>o,s:()=>h});var n=function(t,e,i,n){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{l(n.next(t))}catch(e){r(e)}}function s(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){t.done?i(t.value):a(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))},a=function(t,e){var i,n,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(a=2&r[0]?n.return:r[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,n=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(s){r=[6,s],n=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},r=function(t,e){for(var i=0,n=e.length,a=t.length;i<n;i++,a++)t[a]=e[i];return t};function o(t){return Array.isArray(t)?t:Array.from(t)}function s(t,e){return Array.from(t.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(t,e){var i,n=e.name,a=e.value;return Object.assign(Object.assign({},t),((i={})[n]=a,i))}),{})}function l(t){return c(t,"dir","ltr",!0)}function c(t,e,i,n){void 0===n&&(n=!1);var a="["+e+"]",r=n?function(t,e){void 0===e&&(e=this);function i(e){if(!e||e===document||e===window)return null;var n=e.closest(t);return n||i(e.getRootNode().host)}return i(e)}(a,t):t.closest(a);return r?r.getAttribute(e):i}function u(t){return n(this,void 0,void 0,(function(){return a(this,(function(e){return t?("function"===typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function f(t,e,i){var n='[slot="'+e+'"]';return(null===i||void 0===i?void 0:i.all)?function(t,e,i){var n=Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((function(e){return e.parentElement===t}));var a=null===i||void 0===i?void 0:i.selector;return a?n.map((function(t){return Array.from(t.querySelectorAll(a))})).reduce((function(t,e){return r(r([],t),e)}),[]).filter((function(t){return!!t})):n}(t,n,i):function(t,e,i){var n=t.querySelector(e);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null;var a=null===i||void 0===i?void 0:i.selector;return a?n.querySelector(a):n}(t,n,i)}function p(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function d(t,e){var i=null===t||void 0===t?void 0:t.getAttribute(e);return i&&document.getElementById(i)||null}function b(t,e){return t.contains(e)}function h(t,e,i){return"string"===typeof e&&""!==e?e:""===e?t[i]:void 0}},42971:(t,e,i)=>{i.d(e,{g:()=>n});var n=function(){return[2,1,1,1,3].map((function(t){for(var e="",i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},58074:(t,e,i)=>{function n(t,e){var i={Up:"ArrowUp",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Spacebar:" ",Esc:"Escape"}[t]||t,n="rtl"===e;return n&&"ArrowLeft"===i?"ArrowRight":n&&"ArrowRight"===i?"ArrowLeft":i}i.d(e,{g:()=>n})}}]);
//# sourceMappingURL=8457.bc71f366.chunk.js.map