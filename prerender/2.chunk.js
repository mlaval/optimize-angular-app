webpackJsonp([2],{566:function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(98),s=n(612),_=n(156),o=n(159),h=n(342),c=n(50),a=n(65),p=n(51),l=n(104),u=n(66),d=n(102),g=n(103),f=n(613),y=n(100),R=n(594),w=n(41),S=n(101),x=n(49),O=function(e){function t(t){e.call(this,t,[f.SearchNgFactory],[])}return r(t,e),Object.defineProperty(t.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new c.NgLocaleLocalization(this.parent.get(y.LOCALE_ID))),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_6",{get:function(){return null==this.__BrowserXhr_6&&(this.__BrowserXhr_6=new a.BrowserXhr),this.__BrowserXhr_6},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_7",{get:function(){return null==this.__ResponseOptions_7&&(this.__ResponseOptions_7=new p.BaseResponseOptions),this.__ResponseOptions_7},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_8",{get:function(){return null==this.__XSRFStrategy_8&&(this.__XSRFStrategy_8=o._createDefaultCookieXSRFStrategy()),this.__XSRFStrategy_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_9",{get:function(){return null==this.__XHRBackend_9&&(this.__XHRBackend_9=new l.XHRBackend(this._BrowserXhr_6,this._ResponseOptions_7,this._XSRFStrategy_8)),this.__XHRBackend_9},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_10",{get:function(){return null==this.__RequestOptions_10&&(this.__RequestOptions_10=new u.BaseRequestOptions),this.__RequestOptions_10},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_11",{get:function(){return null==this.__Http_11&&(this.__Http_11=o.httpFactory(this._XHRBackend_9,this._RequestOptions_10)),this.__Http_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserJsonp_12",{get:function(){return null==this.__BrowserJsonp_12&&(this.__BrowserJsonp_12=new d.BrowserJsonp),this.__BrowserJsonp_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_JSONPBackend_13",{get:function(){return null==this.__JSONPBackend_13&&(this.__JSONPBackend_13=new g.JSONPBackend_(this._BrowserJsonp_12,this._ResponseOptions_7)),this.__JSONPBackend_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Jsonp_14",{get:function(){return null==this.__Jsonp_14&&(this.__Jsonp_14=o.jsonpFactory(this._JSONPBackend_13,this._RequestOptions_10)),this.__Jsonp_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_15",{get:function(){return null==this.__ROUTES_15&&(this.__ROUTES_15=[[{path:"",component:R.Search}]]),this.__ROUTES_15},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new _.CommonModule,this._HttpModule_1=new o.HttpModule,this._JsonpModule_2=new o.JsonpModule,this._RouterModule_3=new h.RouterModule(this.parent.get(h.ROUTER_FORROOT_GUARD,null)),this._SearchModule_4=new s.SearchModule,this._SearchModule_4},t.prototype.getInternal=function(e,t){return e===_.CommonModule?this._CommonModule_0:e===o.HttpModule?this._HttpModule_1:e===o.JsonpModule?this._JsonpModule_2:e===h.RouterModule?this._RouterModule_3:e===s.SearchModule?this._SearchModule_4:e===c.NgLocalization?this._NgLocalization_5:e===a.BrowserXhr?this._BrowserXhr_6:e===p.ResponseOptions?this._ResponseOptions_7:e===w.XSRFStrategy?this._XSRFStrategy_8:e===l.XHRBackend?this._XHRBackend_9:e===u.RequestOptions?this._RequestOptions_10:e===S.Http?this._Http_11:e===d.BrowserJsonp?this._BrowserJsonp_12:e===g.JSONPBackend?this._JSONPBackend_13:e===S.Jsonp?this._Jsonp_14:e===x.ROUTES?this._ROUTES_15:t},t.prototype.destroyInternal=function(){},t}(i.NgModuleInjector);t.SearchModuleNgFactory=new i.NgModuleFactory(O,s.SearchModule)},594:function(e,t,n){"use strict";var r=n(344);n(621);var i=function(){function e(e){this.jsonp=e,this.pages=[]}return e.prototype.search=function(e){var t=this;if(e&&e.length>0){var n="https://en.wikipedia.org/w/api.php",i=new r.URLSearchParams;i.set("gapfrom",e),i.set("gaplimit","10"),i.set("generator","allpages"),i.set("action","query"),i.set("format","json"),i.set("callback","JSONP_CALLBACK"),this.jsonp.get(n,{search:i}).map(function(e){return e.json()}).subscribe(function(e){t.pages=[];var n=e.query.pages;for(var r in n)t.pages.push(n[r].title)})}},e}();t.Search=i},596:function(e,t,n){"use strict";var r=n(341),i=n(1),s=n(0),_=function(){function e(e,t,n,s){this.changed=!1,this.changes={},this.context=new r.NgFor(e,t,n,s),this._expr_0=i.UNINITIALIZED,this._expr_1=i.UNINITIALIZED,this._expr_2=i.UNINITIALIZED}return e.prototype.check_ngForOf=function(e,t,n){(n||s.checkBinding(t,this._expr_0,e))&&(this.changed=!0,this.context.ngForOf=e,this.changes.ngForOf=new i.SimpleChange(this._expr_0,e),this._expr_0=e)},e.prototype.check_ngForTrackBy=function(e,t,n){(n||s.checkBinding(t,this._expr_1,e))&&(this.changed=!0,this.context.ngForTrackBy=e,this.changes.ngForTrackBy=new i.SimpleChange(this._expr_1,e),this._expr_1=e)},e.prototype.check_ngForTemplate=function(e,t,n){(n||s.checkBinding(t,this._expr_2,e))&&(this.changed=!0,this.context.ngForTemplate=e,this.changes.ngForTemplate=new i.SimpleChange(this._expr_2,e),this._expr_2=e)},e.prototype.detectChangesInInputProps=function(e,t,n){var r=this.changed;return this.changed=!1,n||(r&&(this.context.ngOnChanges(this.changes),this.changes={}),this.context.ngDoCheck()),r},e.prototype.detectChangesInHostProps=function(e,t,n){},e}();t.Wrapper_NgFor=_},612:function(e,t,n){"use strict";var r=n(594),i=([{path:"",component:r.Search}],function(){function e(){}return e}());t.SearchModule=i},613:function(e,t,n){"use strict";function r(e,t,n){return null===x&&(x=e.createRenderComponentType("",0,d.ViewEncapsulation.None,[],{})),new O(e,t,n)}function i(e,t,n){return null===I&&(I=e.createRenderComponentType("",0,d.ViewEncapsulation.None,m,{})),new N(e,t,n)}function s(e,t,n){return new C(e,t,n)}var _=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=n(594),h=n(6),c=n(3),a=n(0),p=n(2),l=n(1),u=n(101),d=n(5),g=n(4),f=n(596),y=n(157),R=n(99),w=n(341),S=function(){function e(e){this.changed=!1,this.context=new o.Search(e)}return e.prototype.detectChangesInInputProps=function(e,t,n){var r=this.changed;return this.changed=!1,r},e.prototype.detectChangesInHostProps=function(e,t,n){},e}();t.Wrapper_Search=S;var x=null,O=function(e){function t(n,r,i){e.call(this,t,x,p.ViewType.HOST,n,r,i,l.ChangeDetectorStatus.CheckAlways)}return _(t,e),t.prototype.createInternal=function(e){this._el_0=a.selectOrCreateRenderHostElement(this.renderer,"search",a.EMPTY_INLINE_ARRAY,e,null),this._appEl_0=new c.AppElement(0,null,this,this._el_0);var t=i(this.viewUtils,this.injector(0),this._appEl_0);return this._Search_0_4=new S(this.parentInjector.get(u.Jsonp)),this._appEl_0.initComponent(this._Search_0_4.context,[],t),t.create(this._Search_0_4.context,this.projectableNodes,null),this.init([].concat([this._el_0]),[this._el_0],[],[]),this._appEl_0},t.prototype.injectorGetInternal=function(e,t,n){return e===o.Search&&0===t?this._Search_0_4.context:n},t.prototype.detectChangesInternal=function(e){this._Search_0_4.detectChangesInInputProps(this,this._el_0,e),this.detectContentChildrenChanges(e),this._Search_0_4.detectChangesInHostProps(this,this._el_0,e),this.detectViewChildrenChanges(e)},t}(h.AppView);t.SearchNgFactory=new g.ComponentFactory("search",r,o.Search);var m=[],I=null,N=function(e){function t(n,r,i){e.call(this,t,I,p.ViewType.COMPONENT,n,r,i,l.ChangeDetectorStatus.CheckAlways)}return _(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.declarationAppElement.nativeElement);this._text_0=this.renderer.createText(t,"\n    ",null),this._el_1=a.createRenderElement(this.renderer,t,"div",a.EMPTY_INLINE_ARRAY,null),this._text_2=this.renderer.createText(this._el_1,"\n      ",null),this._el_3=a.createRenderElement(this.renderer,this._el_1,"h2",a.EMPTY_INLINE_ARRAY,null),this._text_4=this.renderer.createText(this._el_3,"Search",null),this._text_5=this.renderer.createText(this._el_1,"\n      ",null),this._el_6=a.createRenderElement(this.renderer,this._el_1,"input",new a.InlineArray4(4,"placeholder","Search on Wikipedia","type","text"),null),this._text_7=this.renderer.createText(this._el_1,"\n      ",null),this._el_8=a.createRenderElement(this.renderer,this._el_1,"button",a.EMPTY_INLINE_ARRAY,null),this._text_9=this.renderer.createText(this._el_8,"Search",null),this._text_10=this.renderer.createText(this._el_1,"\n      ",null),this._anchor_11=this.renderer.createTemplateAnchor(this._el_1,null),this._appEl_11=new c.AppElement(11,1,this,this._anchor_11),this._TemplateRef_11_5=new y.TemplateRef_(this._appEl_11,s),this._NgFor_11_6=new f.Wrapper_NgFor(this._appEl_11.vcRef,this._TemplateRef_11_5,this.parentInjector.get(R.IterableDiffers),this.ref),this._text_12=this.renderer.createText(this._el_1,"\n    ",null),this._text_13=this.renderer.createText(t,"\n  ",null);var n=this.renderer.listen(this._el_8,"click",this.eventHandler(this._handle_click_8_0.bind(this)));return this.init([],[this._text_0,this._el_1,this._text_2,this._el_3,this._text_4,this._text_5,this._el_6,this._text_7,this._el_8,this._text_9,this._text_10,this._anchor_11,this._text_12,this._text_13],[n],[]),null},t.prototype.injectorGetInternal=function(e,t,n){return e===y.TemplateRef&&11===t?this._TemplateRef_11_5:e===w.NgFor&&11===t?this._NgFor_11_6.context:n},t.prototype.detectChangesInternal=function(e){var t=this.context.pages;this._NgFor_11_6.check_ngForOf(t,e,!1),this._NgFor_11_6.detectChangesInInputProps(this,this._anchor_11,e),this.detectContentChildrenChanges(e),this.detectViewChildrenChanges(e)},t.prototype._handle_click_8_0=function(e){this.markPathToRootAsCheckOnce();var t=this.context.search(this._el_6.value)!==!1;return t},t}(h.AppView);t.viewFactory_Search0=i;var C=function(e){function t(n,r,i){e.call(this,t,I,p.ViewType.EMBEDDED,n,r,i,l.ChangeDetectorStatus.CheckAlways),this._expr_2=l.UNINITIALIZED}return _(t,e),t.prototype.createInternal=function(e){return this._el_0=a.createRenderElement(this.renderer,null,"div",a.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"",null),this.init([].concat([this._el_0]),[this._el_0,this._text_1],[],[]),null},t.prototype.detectChangesInternal=function(e){this.detectContentChildrenChanges(e);var t=a.interpolate(1,"",this.context.$implicit,"");a.checkBinding(e,this._expr_2,t)&&(this.renderer.setText(this._text_1,t),this._expr_2=t),this.detectViewChildrenChanges(e)},t}(h.AppView)},621:function(e,t,n){"use strict";var r=n(14),i=n(67);r.Observable.prototype.map=i.map}});
//# sourceMappingURL=2.chunk.js.map