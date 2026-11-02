import{$i as um,$n as Zg,$t as Q,A as Dr,Ai as pC,Br as fa$1,C as Bee,Ci as mc,Cn as Te,D as Co$1,Dn as UD,Dr as cf,Ei as ne,En as UA,Er as ce,Fn as W,Gi as sn$1,Gn as Xc,Gr as go$1,H as Fv,Hi as sF,Hr as ft,Ht as OL,I as FA,Ir as eJ,J as Gy,Ji as tJ,Jn as Y,Jr as hd,Jt as Ov,Ki as st,Kn as Xe$1,Kr as gr,L as FC,Lt as Ne,M as Ei,Mn as VJ,Mr as dQ,Mt,N as Eo,Ni as qD,Nr as dn,Nt as NA,Or as cte,Pr as dt,Pt as NK,Q as HN,Qr as ig,Rn as WS,Rr as f,S as Be,Si as mS,Sr as cF,T as C,Ti as nI,Tn as Tt,Tt as M,Ur as gS,V as Fe,Vi as sC,Vn as Wr,Vr as fe,Wt as OT,Xn as Ye$1,Xr as hn$1,Xt as PJ,Yi as tg,Yr as he,Yt as PA,Zi as uL,_r as bl,_t as Kh,a as $S,aa as wi,ai as ja$1,an as Qt,ar as _S,at as Ii,bi as lte,bn as TA,bt as LA,c as A9,ca as x,cn as RK,ct as J,d as AS,da as xe,di as kK,dn as RT,dt as Je,ea as un$1,ei as ite,en as Q9,er as Zh,fi as kS,fr as ae,ft as Jh,g as B,ga as yt,gn as Si,gr as be,gt as Ke$1,h as At$1,i as $N,in as Qo,ir as _5,it as Ie,ji as pE,jn as VA,jt as Mr,ki as ot,kn as UN,kt as Mi,li as k,ln as RL,lr as _r,lt as JN,m as Ai$1,mr as at,n as $D,na as v,o as $t,oa as wo$1,on as R,or as _e,p as Ae,pa as yS,pr as af,q as Gt,qi as ste,qn as Xh,qr as gs,ra as v5,rn as Qh,rt as Ia$1,s as A,si as jg,sr as _l,st as It,ta as ute,tn as QN,tt as IL,u as AK,ur as aC,va as zF,vt as Ki$1,w as Bn,wi as md,wr as cS,wt as Lm,x as Bd,xi as m,xn as TK,xr as cC,xt as LJ,y as BN,yi as ln$1,yn as T,yr as bs,yt as L7,zi as rt,zt as O}from"./chunk-BT_UvFLf.js";import{C as ft$1,c as Ot,d as g,f as h,i as g$1,l as R$1,s as Nt,u as ee}from"./main-ENUXKIWX.js";import"./chunk-Bo3qDDzO.js";import{t as c}from"./chunk-C3AZoj1J.js";import{t as y}from"./chunk-BwNpGA85.js";import{c as Un,d as be$1,g as ui,h as ni,i as Lt,o as Qn,r as Kt,t as $t$1}from"./chunk-CxKoVWF7.js";import{t as ut}from"./chunk-D4NjbAH6.js";import{a as tt,i as nt,n as at$1,r as et,t as H}from"./chunk-Dztqcmtq.js";var cn=`mdc-tab-indicator--active`;var Ai=`mdc-tab-indicator--no-transition`;var ln=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let t=this._items.find(i=>i.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t}}};var ba=(()=>{class n{_elementRef=f(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(cn);return}let i=e.getBoundingClientRect(),l=t.width/i.width,s=t.left-i.left;e.classList.add(Ai),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${s}px) scaleX(${l})`),e.getBoundingClientRect(),e.classList.remove(Ai),e.classList.add(cn),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(cn)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),i=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,i.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,ae]}})}return n})();var Fi={passive:!0};var ga=650;var fa=100;function va(n){let a=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:``}var _a=(()=>{class n{_elementRef=f(B);_changeDetectorRef=f(ot);_viewportRuler=f(Ai$1);_dir=f(Gt,{optional:!0});_ngZone=f(k);_platform=f(ce);_sharedResizeObserver=f(Lt);_injector=f(M);_renderer=f(be);_animationsDisabled=at();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new C;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new C;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new W;indexFocused=new W;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Fi),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Fi))}ngAfterContentInit(){let t=this._dir?this._dir.change:R(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wr(32),Ie(this._destroyed)),i=this._viewportRuler.change(150).pipe(Ie(this._destroyed)),l=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new tg(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Be(l,{injector:this._injector}),cf(t,i,e,this._items.changes,this._itemsResized()).pipe(Ie(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),l()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!=`function`?Ae:this._items.changes.pipe(Qt(this._items),Je(t=>new O(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(l=>e.next(l));return t.forEach(l=>i.observe(l.elementRef.nativeElement)),()=>{i.disconnect()}}))),bs(1),fe(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!hn$1(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:l,offsetWidth:s}=e.elementRef.nativeElement,m,p;this._getLayoutDirection()==`ltr`?(m=l,p=m+s):(p=this._tabListInner.nativeElement.offsetWidth-l,m=p-s);let b=this.scrollDistance,u=this.scrollDistance+i;m<b?this.scrollDistance-=b-m:p>u&&(this.scrollDistance+=Math.min(p-u,m-b))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let i=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),af(ga,fa).pipe(Ie(cf(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:l}=this._scrollHeader(t);(l===0||l>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,ae],selectedIndex:[2,`selectedIndex`,`selectedIndex`,FC]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var ya=new v(`MAT_TABS_CONFIG`);var sn=(()=>{class n extends _a{_focusedItem=Y(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Ne(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Y(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=f(ya,{optional:!0});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new ln(this._items),this._items.changes.pipe(Qt(null),Ie(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Qt(null),Ie(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(t){return this._keyManager?.activeItem===t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],i=[`tabListInner`],l=[`nextPaginator`],s=[`previousPaginator`];return he({type:n,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(b,u,v){if(b&1&&Qh(v,mn,5),b&2){let I;dn(I=un$1())&&(u._items=I)}},viewQuery:function(b,u){if(b&1&&Bn(t,7)(e,7)(i,7)(l,5)(s,5),b&2){let v;dn(v=un$1())&&(u._tabListContainer=v.first),dn(v=un$1())&&(u._tabList=v.first),dn(v=un$1())&&(u._tabListInner=v.first),dn(v=un$1())&&(u._nextPaginator=v.first),dn(v=un$1())&&(u._previousPaginator=v.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(b,u){b&2&&(Te(`role`,u._getRole()),Jh(`--%NS%mat-tab-header-animation-duration`,u.animationDuration),_e(`mat-mdc-tab-header-pagination-controls-enabled`,u._showPaginationControls)(`mat-mdc-tab-header-rtl`,u._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,u.stretchTabs)(`mat-primary`,u.color!==`warn`&&u.color!==`accent`)(`mat-accent`,u.color===`accent`)(`mat-warn`,u.color===`warn`)(`_mat-animation-noopable`,u._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,ae],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,ae],animationDuration:[2,`animationDuration`,`animationDuration`,va],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,ae],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[ne],ngContentSelectors:[`*`],decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(b,u){b&1&&(Dr(),sn$1(0,`div`,5,0),Xe$1(`click`,function(){return u._handlePaginatorClick(`before`)})(`mousedown`,function(I){return u._handlePaginatorPress(`before`,I)})(`touchend`,function(){return u._stopInterval()}),Ei(2,`div`,6),ln$1(),sn$1(3,`div`,7,1),Xe$1(`keydown`,function(I){return u._handleKeydown(I)}),sn$1(5,`div`,8,2),Xe$1(`cdkObserveContent`,function(){return u._onContentChanges()}),sn$1(7,`div`,9,3),Mt(9),ln$1()()(),sn$1(10,`div`,10,4),Xe$1(`mousedown`,function(I){return u._handlePaginatorPress(`after`,I)})(`click`,function(){return u._handlePaginatorClick(`after`)})(`touchend`,function(){return u._stopInterval()}),Ei(12,`div`,6),ln$1()),b&2&&(_e(`mat-mdc-tab-header-pagination-disabled`,u._disableScrollBefore),UD(`matRippleDisabled`,u._disableScrollBefore||u.disableRipple),yt(10),_e(`mat-mdc-tab-header-pagination-disabled`,u._disableScrollAfter),UD(`matRippleDisabled`,u._disableScrollAfter||u.disableRipple))},dependencies:[dQ,L7],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})})()}return n})();var mn=(()=>{class n extends ba{_tabNavBar=f(sn);elementRef=f(B);_focusMonitor=f(Mr);_destroyed=new C;_isActive=!1;_tabIndex=Fe(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Y(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=f(At$1).getId(`mat-tab-link-`);constructor(){super(),f(Tt).load(gS);let t=f(jg,{optional:!0}),e=f(new Ii(`tabindex`),{optional:!0});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,at()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(Ie(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return he({type:n,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(i,l){i&1&&Xe$1(`focus`,function(){return l._handleFocus()})(`keydown`,function(m){return l._handleKeydown(m)}),i&2&&(Te(`aria-controls`,l._getAriaControls())(`aria-current`,l._getAriaCurrent())(`aria-disabled`,l.disabled)(`aria-selected`,l._getAriaSelected())(`id`,l.id)(`tabIndex`,l._tabIndex())(`role`,l._getRole()),_e(`mat-mdc-tab-disabled`,l.disabled)(`mdc-tab--active`,l.active))},inputs:{active:[2,`active`,`active`,ae],disabled:[2,`disabled`,`disabled`,ae],disableRipple:[2,`disableRipple`,`disableRipple`,ae],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:FC(e)],id:`id`},exportAs:[`matTabLink`],features:[ne],ngContentSelectors:[`*`],decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(i,l){i&1&&(Dr(),Ei(0,`span`,0)(1,`div`,1),sn$1(2,`span`,2)(3,`span`,3),Mt(4),ln$1()()),i&2&&(yt(),UD(`matRippleTrigger`,l.elementRef.nativeElement)(`matRippleDisabled`,l.rippleDisabled))},dependencies:[dQ],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})})()}return n})();var Bi=(()=>{class n{id=f(At$1).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return he({type:n,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(i,l){i&2&&Te(`aria-labelledby`,l._activeTabId)(`id`,l.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,l){i&1&&(Dr(),Mt(0))},encapsulation:2})})()}return n})();var Li=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=J({type:n});static ɵinj=Q({imports:[st]})}return n})();var xa=n=>[`/group`,`wp`,n];var zi=(n,a)=>a.id;var Ca=(n,a)=>a.role;function ka(n,a){if(n&1){let t=Xh();sn$1(0,`button`,21),Xe$1(`click`,function(){let i=bl(t).$implicit,l=hd(),s=NA(0);return _l(l.actions.changeStatus(s,i))}),Ei(1,`mat-icon`,7),wi(2),ln$1()}if(n&2){let t=a.$implicit,e=hd();_e(`neg`,e.isNegative(t)),yt(),UD(`svgIcon`,`clm:`+e.statusMenu[t].icon),yt(),Si(``,e.statusMenu[t].label,` `)}}function Sa(n,a){if(n&1&&(sn$1(0,`a`,14),wi(1),ln$1()),n&2){let t=a;UD(`routerLink`,FA(3,xa,t.id)),yt(),sC(``,t.trade,` · `,t.title)}}function Da(n,a){n&1&&wi(0,` — `)}function Ma(n,a){if(n&1&&(sn$1(0,`dt`),wi(1,`Name`),ln$1(),sn$1(2,`dd`),wi(3),ln$1(),sn$1(4,`dt`),wi(5,`Usage`),ln$1(),sn$1(6,`dd`),wi(7),ln$1(),sn$1(8,`dt`),wi(9,`Duration`),ln$1(),sn$1(10,`dd`),wi(11),ln$1()),n&2){let t=a.$implicit;yt(3),md(t.name),yt(4),sC(``,t.pulls,` pull`,t.pulls>1?`s`:``),yt(4),sC(``,t.start,` – `,t.end)}}function Ta(n,a){n&1&&(sn$1(0,`dt`),wi(1,`Name`),ln$1(),sn$1(2,`dd`,23),wi(3,`Not added`),ln$1())}function Ia(n,a){if(n&1&&(sn$1(0,`dt`),wi(1,`Name`),ln$1(),sn$1(2,`dd`),wi(3),ln$1(),sn$1(4,`dt`),wi(5,`Duration`),ln$1(),sn$1(6,`dd`),wi(7),ln$1(),sn$1(8,`dt`),wi(9,`Planned Usage`),ln$1(),sn$1(10,`dd`),wi(11),ln$1(),sn$1(12,`dt`),wi(13,`Estimated Cost`),ln$1(),sn$1(14,`dd`),wi(15,`Free of charge`),ln$1()),n&2){let t=a.$implicit;yt(3),md(t.name),yt(4),sC(``,t.start,` – `,t.end),yt(4),Si(``,t.slot,` minutes`)}}function Ra(n,a){n&1&&(sn$1(0,`dt`),wi(1,`Name`),ln$1(),sn$1(2,`dd`,23),wi(3,`Not added`),ln$1())}function Na(n,a){if(n&1&&(sn$1(0,`div`,24),wi(1),ln$1(),sn$1(2,`dl`,13)(3,`dt`),wi(4,`Quantity`),ln$1(),sn$1(5,`dd`),wi(6),ln$1()()),n&2){let t=a.$implicit;yt(),md(t.name),yt(5),md(t.qty)}}function Ea(n,a){if(n&1&&(sn$1(0,`div`,16)(1,`div`,24),wi(2),ln$1(),sn$1(3,`div`,25)(4,`span`,26)(5,`mat-icon`),wi(6,`person`),ln$1()(),sn$1(7,`div`)(8,`b`),wi(9),ln$1(),sn$1(10,`div`,27),wi(11),ln$1(),sn$1(12,`div`,27),wi(13),ln$1()()()()),n&2){let t=a.$implicit;yt(2),md(t.role),yt(7),md(t.person.name),yt(2),md(t.person.phone),yt(2),md(t.person.email)}}var Ve=class n{shipment=Mi.required();data=f($S);actions=f(ut);status=Fe(()=>kS[this.shipment().status]);darkText=Fe(()=>PJ(this.status().color));statusMenu=LJ;next=Fe(()=>this.actions.nextStatuses(this.shipment()));locked=Fe(()=>VJ(this.shipment().status));wp=Fe(()=>this.data.wp(this.shipment().wpId));info=Fe(()=>{let a=this.shipment(),t=this.data.vehicle(a.vehicle),e=a.vehicles||1;return{date:Ki$1(a.date),vehicle:`${t.name} \xB7 ${e} vehicle${e>1?`s`:``}`,unloading:`${a.up} \xB7 ${a.start} \u2013 ${a.end}`}});onsite=Fe(()=>this.shipment().equipment.filter(a=>a.kind===`onsite`).map(a=>A(m({},a),{name:this.data.equipment(a.id).name,pulls:a.pulls||1})));booked=Fe(()=>this.shipment().equipment.filter(a=>a.kind===`booked`).map(a=>{let t=this.data.equipment(a.id);return A(m({},a),{name:t.name,slot:t.slot||20})}));materials=Fe(()=>this.shipment().materials.map(a=>{let t=this.data.material(a.id);return{name:t.name,qty:`${a.qty} ${a.unit||t.unit}`}}));contacts=Fe(()=>{let a=this.shipment();return[[`Creator`,a.createdBy],[`Onsite`,a.onsite],[`Order responsible`,a.orderResp],[`Delivery responsible`,a.deliveryResp]].filter(([,t])=>!!t).map(([t,e])=>({role:t,person:this.data.person(e)}))});isNegative(a){return a===`Canceled`||a===`Rejected`}static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-details-panel`]],inputs:{shipment:[1,`shipment`]},decls:131,vars:45,consts:[[`menuTrigger`,`matMenuTrigger`],[`statusMenuRef`,`matMenu`],[`manageMenu`,`matMenu`],[1,`rp-head`],[1,`rp-name`],[1,`status-btn`],[1,`sb-main`],[3,`svgIcon`],[`aria-label`,`Change status`,1,`sb-dd`,3,`click`,`disabled`,`matTooltip`],[1,`sb-anchor`,3,`matMenuTriggerFor`],[1,`clm-status-menu`,3,`overlapTrigger`],[`mat-menu-item`,``,3,`neg`],[1,`rp-body`],[1,`clm-kv`],[3,`routerLink`],[1,`sub`],[1,`contact`],[1,`rp-foot`],[`mat-flat-button`,``,1,`manage`,3,`matMenuTriggerFor`],[`xPosition`,`before`,1,`clm-manage-menu`],[`mat-menu-item`,``,3,`click`,`disabled`],[`mat-menu-item`,``,3,`click`],[`mat-menu-item`,``,1,`clm-danger`,3,`click`,`disabled`],[1,`na`],[1,`clm-overline`],[1,`person`],[1,`av`],[1,`clm-cap`]],template:function(t,e){if(t&1){let i=Xh();pC(0),sn$1(1,`div`,3)(2,`h3`),wi(3,`Details`),ln$1(),sn$1(4,`div`,4),wi(5),ln$1(),sn$1(6,`div`,5)(7,`div`,6),Ei(8,`mat-icon`,7),wi(9),ln$1(),sn$1(10,`button`,8),Xe$1(`click`,function(){bl(i);let s=JN(14);return _l(s.openMenu())}),sn$1(11,`mat-icon`),wi(12,`expand_more`),ln$1()(),Ei(13,`span`,9,0),ln$1(),sn$1(15,`mat-menu`,10,1),HN(17,ka,3,4,`button`,11,UN),ln$1()(),sn$1(19,`div`,12)(20,`section`)(21,`h4`),wi(22,`Shipment Information`),ln$1(),sn$1(23,`dl`,13)(24,`dt`),wi(25,`Shipment No`),ln$1(),sn$1(26,`dd`),wi(27),ln$1(),sn$1(28,`dt`),wi(29,`Shipment Date`),ln$1(),sn$1(30,`dd`),wi(31),ln$1(),sn$1(32,`dt`),wi(33,`Working Package`),ln$1(),sn$1(34,`dd`),Co$1(35,Sa,2,5,`a`,14)(36,Da,1,0),ln$1(),sn$1(37,`dt`),wi(38,`Vehicle`),ln$1(),sn$1(39,`dd`),wi(40),ln$1(),sn$1(41,`dt`),wi(42,`Unloading Point`),ln$1(),sn$1(43,`dd`),wi(44),ln$1()()(),sn$1(45,`section`)(46,`h4`),wi(47,`Equipment and Usage`),ln$1(),sn$1(48,`dl`,13)(49,`div`,15),wi(50,`Logistic equipment`),ln$1(),HN(51,Ma,12,5,null,null,zi,!1,Ta,4,0),sn$1(54,`div`,15),wi(55,`Special equipment`),ln$1(),HN(56,Ia,16,4,null,null,zi,!1,Ra,4,0),ln$1()(),sn$1(59,`section`)(60,`h4`),wi(61,`Destination`),ln$1(),sn$1(62,`dl`,13)(63,`dt`),wi(64,`Team`),ln$1(),sn$1(65,`dd`),wi(66),ln$1(),sn$1(67,`dt`),wi(68,`Building`),ln$1(),sn$1(69,`dd`),wi(70),ln$1(),sn$1(71,`dt`),wi(72,`Floor`),ln$1(),sn$1(73,`dd`),wi(74),ln$1(),sn$1(75,`dt`),wi(76,`Zone`),ln$1(),sn$1(77,`dd`),wi(78),ln$1()()(),sn$1(79,`section`)(80,`h4`),wi(81,`Sender`),ln$1(),sn$1(82,`dl`,13)(83,`dt`),wi(84,`Team`),ln$1(),sn$1(85,`dd`),wi(86),ln$1()()(),sn$1(87,`section`)(88,`h4`),wi(89,`Materials`),ln$1(),HN(90,Na,7,2,null,null,BN),ln$1(),sn$1(92,`section`)(93,`h4`),wi(94,`Sustainability`),ln$1(),sn$1(95,`dl`,13)(96,`dt`),wi(97,`Address`),ln$1(),sn$1(98,`dd`),wi(99),ln$1(),sn$1(100,`dt`),wi(101,`Distance`),ln$1(),sn$1(102,`dd`),wi(103),ln$1()()(),sn$1(104,`section`)(105,`h4`),wi(106,`Responsible Person`),ln$1(),HN(107,Ea,14,4,`div`,16,Ca),ln$1()(),sn$1(109,`div`,17)(110,`button`,18),wi(111,`Manage`),ln$1(),sn$1(112,`mat-menu`,19,2)(114,`button`,20),Xe$1(`click`,function(){bl(i);let s=NA(0);return _l(e.actions.edit(s))}),sn$1(115,`mat-icon`),wi(116,`edit`),ln$1(),wi(117,`Edit shipment `),ln$1(),sn$1(118,`button`,21),Xe$1(`click`,function(){bl(i);let s=NA(0);return _l(e.actions.duplicate(s))}),sn$1(119,`mat-icon`),wi(120,`content_copy`),ln$1(),wi(121,`Duplicate shipment `),ln$1(),sn$1(122,`button`,21),Xe$1(`click`,function(){return e.actions.print()}),sn$1(123,`mat-icon`),wi(124,`print`),ln$1(),wi(125,`Print`),ln$1(),Ei(126,`mat-divider`),sn$1(127,`button`,22),Xe$1(`click`,function(){bl(i);let s=NA(0);return _l(e.actions.cancel(s))}),sn$1(128,`mat-icon`),wi(129,`block`),ln$1(),wi(130,`Cancel shipment `),ln$1()()()}if(t&2){let i,l=JN(16),s=JN(113),m=TA(e.shipment());yt(5),md(m.name),yt(),_e(`dark-text`,e.darkText()),yt(),Jh(`background`,e.status().color),yt(),UD(`svgIcon`,`clm:`+e.status().icon),yt(),Si(``,e.status().label,` `),yt(),Jh(`background`,e.status().color),UD(`disabled`,!e.next().length)(`matTooltip`,e.next().length?`Change status`:``),yt(3),UD(`matMenuTriggerFor`,l),yt(2),UD(`overlapTrigger`,!1),yt(2),$N(e.next()),yt(10),md(m.no),yt(4),md(e.info().date),yt(4),Eo((i=e.wp())?35:36,i),yt(5),md(e.info().vehicle),yt(4),md(e.info().unloading),yt(7),$N(e.onsite()),yt(5),$N(e.booked()),yt(9),_e(`na`,!m.recipient),yt(),md(m.recipient||`Not added`),yt(3),_e(`na`,!m.building),yt(),md(m.building||`Not added`),yt(3),_e(`na`,!m.floor),yt(),md(m.floor||`Not added`),yt(3),_e(`na`,!m.zone),yt(),md(m.zone||`Not added`),yt(7),_e(`na`,!m.sender),yt(),md(m.sender||`Not added`),yt(4),$N(e.materials()),yt(8),_e(`na`,!m.origin),yt(),md(m.origin||`Not added`),yt(3),_e(`na`,!m.km),yt(),md(m.km?m.km+` km`:`Not added`),yt(4),$N(e.contacts()),yt(3),UD(`matMenuTriggerFor`,s),yt(4),UD(`disabled`,e.locked()),yt(13),UD(`disabled`,e.locked())}},dependencies:[cS,cF,_S,tJ,eJ,Nt,R$1,ee,Ot,h,g,Bee,zF],styles:[`@charset "UTF-8";[_nghost-%COMP%]{position:sticky;top:var(--%NS%clm-panel-top, 24px);height:calc(100vh - var(--%NS%clm-shell-top, 64px) - var(--%NS%clm-panel-top, 24px) - 24px);min-height:360px;background:#fff;border-radius:8px;box-shadow:0 2px 4px #00000024;display:flex;flex-direction:column;overflow:hidden}.rp-head[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column;gap:8px;border-bottom:1px solid #dcdcdd;flex:none}h3[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:500;letter-spacing:.15px;line-height:normal}.rp-name[_ngcontent-%COMP%]{font-size:16px;font-weight:500;letter-spacing:.15px;line-height:normal}.rp-body[_ngcontent-%COMP%]{padding:16px 16px 24px;overflow:auto;flex:1;display:flex;flex-direction:column;gap:16px}section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}section[_ngcontent-%COMP%] + section[_ngcontent-%COMP%]{border-top:1px solid #dcdcdd;padding-top:16px}h4[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:500;letter-spacing:.15px;line-height:normal}dd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#7c7900;text-decoration:none}.contact[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.contact[_ngcontent-%COMP%] + .contact[_ngcontent-%COMP%]{margin-top:4px}.person[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center}.av[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:18px;background:#efefd8;display:grid;place-items:center;color:#7c7900;flex:none}.person[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.1px;display:block}.rp-foot[_ngcontent-%COMP%]{padding:12px 16px 16px;border-top:1px solid #dcdcdd;flex:none}.manage[_ngcontent-%COMP%]{width:100%}.status-btn[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;height:40px;border-radius:6px;overflow:hidden;gap:1px}.sb-main[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:8px;padding:0 12px;color:#fff;font-weight:500;letter-spacing:.5px}.sb-main[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:20px;height:20px}.sb-dd[_ngcontent-%COMP%]{width:40px;display:grid;place-items:center;color:#fff;border:0;padding:0;cursor:pointer;filter:brightness(.82)}.sb-dd[_ngcontent-%COMP%]:hover:not(:disabled){filter:brightness(.72)}.sb-dd[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.dark-text[_ngcontent-%COMP%]   .sb-main[_ngcontent-%COMP%], .dark-text[_ngcontent-%COMP%]   .sb-dd[_ngcontent-%COMP%]{color:#000c}.sb-anchor[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;height:0;pointer-events:none}`]})};function Pa(n,a){if(n&1&&(sn$1(0,`li`)(1,`span`,4)(2,`mat-icon`),wi(3),ln$1()(),sn$1(4,`div`)(5,`b`),wi(6),ln$1(),wi(7),ln$1(),sn$1(8,`div`,5),wi(9),VA(10,`clmDate`),ln$1()()),n&2){let t=a.$implicit,e=hd();yt(3),md(t.icon||`edit`),yt(3),md(e.data.person(t.by).name),yt(),Si(` `,t.text,` `),yt(2),md(UA(10,4,t.at,`time`))}}var $e=class n{shipment=Mi.required();data=f($S);entries=Fe(()=>[...this.shipment().activity].sort((a,t)=>t.at.localeCompare(a.at)));static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-activity-tab`]],inputs:{shipment:[1,`shipment`]},decls:10,vars:0,consts:[[`appearance`,`raised`,1,`clm-card`],[1,`clm-card-head`],[1,`grow`],[1,`timeline`],[1,`ai`],[1,`clm-cap`]],template:function(t,e){t&1&&(sn$1(0,`mat-card`,0)(1,`div`,1)(2,`div`,2)(3,`mat-card-title`),wi(4,`Activity`),ln$1(),sn$1(5,`mat-card-subtitle`),wi(6,`Everything that happened to this shipment, newest first`),ln$1()()(),sn$1(7,`ol`,3),HN(8,Pa,11,7,`li`,null,BN),ln$1()()),t&2&&(yt(8),$N(e.entries()))},dependencies:[nt,tt,et,at$1,tJ,eJ,WS],styles:[`[_nghost-%COMP%]{display:block}.timeline[_ngcontent-%COMP%]{position:relative;list-style:none;margin:0;padding:0 0 0 28px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:13px;top:6px;bottom:6px;width:2px;background:#dcdcdd}li[_ngcontent-%COMP%]{position:relative;padding:8px 0 12px}b[_ngcontent-%COMP%]{font-weight:500}.ai[_ngcontent-%COMP%]{position:absolute;left:-28px;top:6px;width:28px;height:28px;border-radius:50%;background:#fff;border:1px solid #dcdcdd;display:grid;place-items:center;color:#7c7900;box-sizing:border-box}.ai[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}`]})};var bn=new v(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Hi=new v(`MatChipAvatar`);var Vi=new v(`MatChipTrailingIcon`);var ji=new v(`MatChipEdit`);var $i=new v(`MatChipRemove`);var gn=new v(`MatChip`);var qi=(()=>{class n{_elementRef=f(B);_parentChip=f(gn);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){f(Tt).load(gS),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(e,i){e&2&&(Te(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i.disabled),_e(`mdc-evolution-chip__action--primary`,i._isPrimary)(`mdc-evolution-chip__action--secondary`,!i._isPrimary)(`mdc-evolution-chip__action--trailing`,!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,ae],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:FC(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var Qi=(()=>{class n extends qi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(e,i){e&1&&Xe$1(`click`,function(s){return i._handleClick(s)})(`keydown`,function(s){return i._handleKeydown(s)}),e&2&&(Te(`tabindex`,i._getTabindex()),_e(`mdc-evolution-chip__action--presentational`,!1))},features:[ne]})}return n})();var hn=(()=>{class n{_changeDetectorRef=f(ot);_elementRef=f(B);_tagName=f(v5);_ngZone=f(k);_focusMonitor=f(Mr);_globalRippleOptions=f(jg,{optional:!0});_document=f(x);_onFocus=new C;_onBlur=new C;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=at();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=f(At$1).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new W;destroyed=new W;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=f(mS);_injector=f(M);constructor(){let t=f(Tt);t.load(gS),t.load(Bd),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=cf(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let i=e._elementRef.nativeElement;return i===t||i.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],e=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function i(s,m){s&1&&(sn$1(0,`span`,3),Mt(1,1),ln$1())}function l(s,m){s&1&&(sn$1(0,`span`,7),Mt(1,2),ln$1())}return he({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(m,p,b){if(m&1&&Qh(b,Hi,5)(b,ji,5)(b,Vi,5)(b,$i,5)(b,Hi,5)(b,Vi,5)(b,ji,5)(b,$i,5),m&2){let u;dn(u=un$1())&&(p.leadingIcon=u.first),dn(u=un$1())&&(p.editIcon=u.first),dn(u=un$1())&&(p.trailingIcon=u.first),dn(u=un$1())&&(p.removeIcon=u.first),dn(u=un$1())&&(p._allLeadingIcons=u),dn(u=un$1())&&(p._allTrailingIcons=u),dn(u=un$1())&&(p._allEditIcons=u),dn(u=un$1())&&(p._allRemoveIcons=u)}},viewQuery:function(m,p){if(m&1&&Bn(Qi,5),m&2){let b;dn(b=un$1())&&(p.primaryAction=b.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(m,p){m&1&&Xe$1(`keydown`,function(u){return p._handleKeydown(u)}),m&2&&(fa$1(`id`,p.id),Te(`role`,p.role)(`aria-label`,p.ariaLabel),wo$1(`mat-`+(p.color||`primary`)),_e(`mdc-evolution-chip`,!p._isBasicChip)(`mdc-evolution-chip--disabled`,p.disabled)(`mdc-evolution-chip--with-trailing-action`,p._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,p.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,p.leadingIcon)(`mdc-evolution-chip--with-avatar`,p.leadingIcon)(`mat-mdc-chip-with-avatar`,p.leadingIcon)(`mat-mdc-chip-highlighted`,p.highlighted)(`mat-mdc-chip-disabled`,p.disabled)(`mat-mdc-basic-chip`,p._isBasicChip)(`mat-mdc-standard-chip`,!p._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,p._hasTrailingIcon())(`_mat-animation-noopable`,p._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,ae],highlighted:[2,`highlighted`,`highlighted`,ae],disableRipple:[2,`disableRipple`,`disableRipple`,ae],disabled:[2,`disabled`,`disabled`,ae]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[ft([{provide:gn,useExisting:n}])],ngContentSelectors:e,decls:9,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(m,p){m&1&&(Dr(t),Ei(0,`span`,0),sn$1(1,`span`,1)(2,`span`,2),Co$1(3,i,2,0,`span`,3),sn$1(4,`span`,4),Mt(5),Ei(6,`span`,5),ln$1(),Ei(7,`span`,6),ln$1()(),Co$1(8,l,2,0,`span`,7)),m&2&&(yt(3),Eo(p.leadingIcon?3:-1),yt(5),Eo(p._hasTrailingIcon()?8:-1))},dependencies:[qi],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var fn=(()=>{class n extends hn{_defaultOptions=f(bn,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(t){this._selectable=t,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(t){this._setSelectedState(t,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName=`mat-basic-chip-option`;selectionChange=new W;ngOnInit(){super.ngOnInit(),this.role=`presentation`}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(t=!1){return this._setSelectedState(!this.selected,t,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(t,e,i){t!==this.selected&&(this._selected=t,i&&this.selectionChange.emit({source:this,isUserInput:e,selected:this.selected}),this._changeDetectorRef.markForCheck())}static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵcmp=(function(){let t=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],e=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function i(s,m){s&1&&(sn$1(0,`span`,3),Mt(1,1),sn$1(2,`span`,8),Gy(),sn$1(3,`svg`,9),Ei(4,`path`,10),ln$1()()())}function l(s,m){s&1&&(sn$1(0,`span`,7),Mt(1,2),ln$1())}return he({type:n,selectors:[[`mat-basic-chip-option`],[``,`mat-basic-chip-option`,``],[`mat-chip-option`],[``,`mat-chip-option`,``]],hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-option`],hostVars:37,hostBindings:function(m,p){m&2&&(fa$1(`id`,p.id),Te(`tabindex`,null)(`aria-label`,null)(`aria-description`,null)(`role`,p.role),_e(`mdc-evolution-chip`,!p._isBasicChip)(`mdc-evolution-chip--filter`,!p._isBasicChip)(`mdc-evolution-chip--selectable`,!p._isBasicChip)(`mat-mdc-chip-selected`,p.selected)(`mat-mdc-chip-multiple`,p._chipListMultiple)(`mat-mdc-chip-disabled`,p.disabled)(`mat-mdc-chip-with-avatar`,p.leadingIcon)(`mdc-evolution-chip--disabled`,p.disabled)(`mdc-evolution-chip--selected`,p.selected)(`mdc-evolution-chip--selecting`,!p._animationsDisabled)(`mdc-evolution-chip--with-trailing-action`,p._hasTrailingIcon())(`mdc-evolution-chip--with-primary-icon`,p.leadingIcon)(`mdc-evolution-chip--with-primary-graphic`,p._hasLeadingGraphic())(`mdc-evolution-chip--with-avatar`,p.leadingIcon)(`mat-mdc-chip-highlighted`,p.highlighted)(`mat-mdc-chip-with-trailing-icon`,p._hasTrailingIcon()))},inputs:{selectable:[2,`selectable`,`selectable`,ae],selected:[2,`selected`,`selected`,ae]},outputs:{selectionChange:`selectionChange`},features:[ft([{provide:hn,useExisting:n},{provide:gn,useExisting:n}]),ne],ngContentSelectors:e,decls:9,vars:6,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipAction`,``,`role`,`option`,3,`_allowFocusWhenDisabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[1,`mdc-evolution-chip__checkmark`],[`viewBox`,`-2 -3 30 30`,`focusable`,`false`,`aria-hidden`,`true`,1,`mdc-evolution-chip__checkmark-svg`],[`fill`,`none`,`stroke`,`currentColor`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-evolution-chip__checkmark-path`]],template:function(m,p){m&1&&(Dr(t),Ei(0,`span`,0),sn$1(1,`span`,1)(2,`button`,2),Co$1(3,i,5,0,`span`,3),sn$1(4,`span`,4),Mt(5),Ei(6,`span`,5)(7,`span`,6),ln$1()()(),Co$1(8,l,2,0,`span`,7)),m&2&&(yt(2),UD(`_allowFocusWhenDisabled`,!0),Te(`aria-description`,p.ariaDescription)(`aria-label`,p.ariaLabel)(`aria-selected`,p.ariaSelected),yt(),Eo(p._hasLeadingGraphic()?3:-1),yt(5),Eo(p._hasTrailingIcon()?8:-1))},dependencies:[Qi],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var Oa=(()=>{class n{_elementRef=f(B);_changeDetectorRef=f(ot);_dir=f(Gt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new C;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new go$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(Qt(null),Je(()=>cf(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains(`mat-mdc-chip`))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Qt(this._chips)).subscribe(t=>{let e=[];t.forEach(i=>i._getActions().forEach(l=>e.push(l))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new tg(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(Ie(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(Ie(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Qt(null),Ie(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Ie(this._destroyed)).subscribe(t=>{let i=this._chips.toArray().indexOf(t.chip),l=t.chip._hasFocus(),s=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),m=l||s;this._isValidIndex(i)&&m&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return he({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(i,l,s){if(i&1&&Qh(s,hn,5),i&2){let m;dn(m=un$1())&&(l._chips=m)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,l){i&1&&Xe$1(`keydown`,function(m){return l._handleKeydown(m)}),i&2&&Te(`role`,l.role)},inputs:{disabled:[2,`disabled`,`disabled`,ae],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:FC(e)]},ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,l){i&1&&(Dr(),It(0,`div`,0),Mt(1),$t())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var un=class{source;value;constructor(a,t){this.source=a,this.value=t}};var Aa={provide:mc,useExisting:Ye$1(()=>vn),multi:!0};var vn=(()=>{class n extends Oa{_onTouched=()=>{};_onChange=()=>{};_defaultRole=`listbox`;_defaultOptions=f(bn,{optional:!0});get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._syncListboxProperties()}_multiple=!1;get selected(){let t=this._chips.toArray().filter(e=>e.selected);return this.multiple?t:t[0]}ariaOrientation=`horizontal`;get selectable(){return this._selectable}set selectable(t){this._selectable=t,this._syncListboxProperties()}_selectable=!0;compareWith=(t,e)=>t===e;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(t=>t.selectionChange)}get chipBlurChanges(){return this._getChipStream(t=>t._onBlur)}get value(){return this._value}set value(t){this._chips&&this._chips.length&&this._setSelectionByValue(t,!1),this._value=t}_value;change=new W;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Qt(null),Ie(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Ie(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Ie(this._destroyed)).subscribe(t=>{this.multiple||this._chips.forEach(e=>{e!==t.source&&e._setSelectedState(!1,!1,!1)}),t.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let t=this._getFirstSelectedChip();t&&!t.disabled?t.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(t){t!=null?this.value=t:this.value=void 0}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_setSelectionByValue(t,e=!0){this._clearSelection(),Array.isArray(t)?t.forEach(i=>this._selectValue(i,e)):this._selectValue(t,e)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(t){t.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let t=null;Array.isArray(this.selected)?t=this.selected.map(e=>e.value):t=this.selected?this.selected.value:void 0,this._value=t,this.change.emit(new un(this,t)),this._onChange(t),this._changeDetectorRef.markForCheck()}_clearSelection(t){this._chips.forEach(e=>{e!==t&&e.deselect()})}_selectValue(t,e){let i=this._chips.find(l=>l.value!=null&&this.compareWith(l.value,t));return i&&(e?i.selectViaInteraction():i.select()),i}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(t=>{t._chipListMultiple=this.multiple,t.chipListSelectable=this._selectable,t._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,t._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(t){return!1}static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵcmp=(function(){return he({type:n,selectors:[[`mat-chip-listbox`]],contentQueries:function(i,l,s){if(i&1&&Qh(s,fn,5),i&2){let m;dn(m=un$1())&&(l._chips=m)}},hostAttrs:[1,`mdc-evolution-chip-set`,`mat-mdc-chip-listbox`],hostVars:10,hostBindings:function(i,l){i&1&&Xe$1(`focus`,function(){return l.focus()})(`blur`,function(){return l._blur()})(`keydown`,function(m){return l._keydown(m)}),i&2&&(fa$1(`tabIndex`,l.disabled||l.empty?-1:l.tabIndex),Te(`role`,l.role)(`aria-required`,l.role?l.required:null)(`aria-disabled`,l.disabled.toString())(`aria-multiselectable`,l.multiple)(`aria-orientation`,l.ariaOrientation),_e(`mat-mdc-chip-list-disabled`,l.disabled)(`mat-mdc-chip-list-required`,l.required))},inputs:{multiple:[2,`multiple`,`multiple`,ae],ariaOrientation:[0,`aria-orientation`,`ariaOrientation`],selectable:[2,`selectable`,`selectable`,ae],compareWith:`compareWith`,required:[2,`required`,`required`,ae],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ae],value:`value`},outputs:{change:`change`},features:[ft([Aa]),ne],ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,l){i&1&&(Dr(),It(0,`div`,0),Mt(1),$t())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var Wi=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=J({type:n});static ɵinj=Q({providers:[ft$1,{provide:bn,useValue:{separatorKeyCodes:[13]}}],imports:[yS,st]})}return n})();function Ha(n,a){if(n&1&&(sn$1(0,`mat-chip-option`,8),wi(1),ln$1()),n&2){let t=a.$implicit,e=hd();UD(`value`,t)(`selectable`,e.form.controls.type.value!==t),yt(),md(t)}}var qe=class n{ref=f(ja$1);types=[`Note`,`Damage`,`Delay`];form=f(lte).group({type:[`Note`],title:[``,[Zg.required,Zg.pattern(/\S/)]],text:[``]});submit(){if(this.form.invalid)return;let a=this.form.getRawValue();this.ref.close({type:a.type,title:a.title.trim(),text:a.text.trim()})}static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-annotation-dialog`]],hostAttrs:[1,`clm-dlg`],features:[ft([{provide:ft$1,useClass:ni}])],decls:32,vars:2,consts:[[1,`clm-dlg-head`],[1,`grow`],[`mat-dialog-title`,``],[`mat-icon-button`,``,`mat-dialog-close`,``,`aria-label`,`Close`],[`id`,`annForm`,1,`clm-dlg-fields`,3,`ngSubmit`,`formGroup`],[1,`clm-field`],[`id`,`ann-type-l`,1,`clm-label`],[`formControlName`,`type`,`aria-labelledby`,`ann-type-l`,3,`hideSingleSelectionIndicator`],[3,`value`,`selectable`],[`for`,`ann-title`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`],[`matInput`,``,`id`,`ann-title`,`formControlName`,`title`,`placeholder`,`e.g. Pallet 3 damaged on arrival`,`cdkFocusInitial`,``],[`for`,`ann-text`],[`matInput`,``,`id`,`ann-text`,`formControlName`,`text`,`maxlength`,`500`,`placeholder`,`What happened?`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``],[`mat-flat-button`,``,`type`,`submit`,`form`,`annForm`]],template:function(t,e){t&1&&(sn$1(0,`div`,0)(1,`div`,1)(2,`h2`,2),wi(3,`Add annotation`),ln$1()(),sn$1(4,`button`,3)(5,`mat-icon`),wi(6,`close`),ln$1()()(),sn$1(7,`mat-dialog-content`)(8,`form`,4),Xe$1(`ngSubmit`,function(){return e.submit()}),sn$1(9,`div`,5)(10,`span`,6),wi(11,`Type`),ln$1(),sn$1(12,`mat-chip-listbox`,7),RT(),HN(13,Ha,2,3,`mat-chip-option`,8,UN),ln$1()(),sn$1(15,`div`,5)(16,`label`,9),wi(17,`Title *`),ln$1(),sn$1(18,`mat-form-field`,10)(19,`input`,11),RT(),ln$1(),sn$1(20,`mat-error`),wi(21,`Please add a title`),ln$1()()(),sn$1(22,`div`,5)(23,`label`,12),wi(24,`Description`),ln$1(),sn$1(25,`mat-form-field`,10)(26,`textarea`,13),RT(),ln$1()()()()(),sn$1(27,`mat-dialog-actions`)(28,`button`,14),wi(29,`Cancel`),ln$1(),sn$1(30,`button`,15),wi(31,`Add annotation`),ln$1()()),t&2&&(yt(8),UD(`formGroup`,e.form),yt(4),UD(`hideSingleSelectionIndicator`,!0),OT(),yt(),$N(e.types),yt(6),OT(),yt(7),OT())},dependencies:[ute,cte,nI,ite,ste,uL,IL,OL,kK,TK,NK,RK,AK,cF,_S,sF,tJ,eJ,Wi,vn,fn,be$1,Kt,ui,Un,Qn],encapsulation:2})};function Va(n,a){if(n&1&&(sn$1(0,`div`,9),wi(1),ln$1()),n&2){let t=hd().$implicit;yt(),md(t.text)}}function ja(n,a){if(n&1){let t=Xh();sn$1(0,`div`,4)(1,`span`,6)(2,`mat-icon`),wi(3),ln$1()(),sn$1(4,`div`,2)(5,`div`,7)(6,`b`),wi(7),ln$1(),sn$1(8,`span`,8),wi(9),ln$1()(),Co$1(10,Va,2,1,`div`,9),sn$1(11,`div`,10),wi(12),VA(13,`clmDate`),ln$1()(),sn$1(14,`button`,11),Xe$1(`click`,function(){let i=bl(t).$index,l=hd();return _l(l.remove(i))}),sn$1(15,`mat-icon`),wi(16,`delete`),ln$1()()()}if(n&2){let t=a.$implicit,e=hd();yt(),wo$1(e.tones[t.type].tone),yt(2),md(e.tones[t.type].icon),yt(4),md(t.title),yt(),wo$1(e.tones[t.type].tone),yt(),md(t.type),yt(),Eo(t.text?10:-1),yt(2),sC(` `,e.data.person(t.by).name,` · `,UA(13,10,t.at,`time`),` `)}}function $a(n,a){n&1&&(sn$1(0,`div`,5)(1,`mat-icon`),wi(2,`edit_note`),ln$1(),sn$1(3,`b`,12),wi(4,`No annotations yet`),ln$1(),sn$1(5,`span`),wi(6,`Add the first one, e.g. “Pallet 3 damaged on arrival”.`),ln$1()())}var qa={Note:{icon:`sticky_note_2`,tone:`neutral`},Damage:{icon:`report`,tone:`error`},Delay:{icon:`schedule`,tone:`warning`}};var Qe=class n{shipment=Mi.required();data=f($S);dialog=f(ig);snackBar=f(AS);tones=qa;add(){this.dialog.open(qe,{width:`440px`,maxWidth:`calc(100vw - 48px)`}).afterClosed().subscribe(a=>{a&&(this.data.addAnnotation(this.shipment().id,a),this.snackBar.open(`Annotation added`,void 0,{duration:3e3}))})}remove(a){this.dialog.open(g$1,{width:`440px`,data:{title:`Delete annotation?`,text:`This annotation will be removed.`,ok:`Delete`,danger:!0}}).afterClosed().subscribe(e=>{e&&this.data.removeAnnotation(this.shipment().id,a)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-annotations-tab`]],inputs:{shipment:[1,`shipment`]},decls:14,vars:2,consts:[[`appearance`,`raised`,1,`clm-card`],[1,`clm-card-head`],[1,`grow`],[`mat-flat-button`,``,3,`click`],[1,`clm-row-box`,`ann`],[1,`clm-empty`],[1,`dic`],[1,`head`],[1,`clm-pill`],[1,`text`],[1,`clm-cap`,`text`],[`mat-icon-button`,``,`matTooltip`,`Delete`,`aria-label`,`Delete annotation`,1,`clm-icon-btn-sm`,3,`click`],[1,`title`]],template:function(t,e){if(t&1&&(sn$1(0,`mat-card`,0)(1,`div`,1)(2,`div`,2)(3,`mat-card-title`),wi(4),ln$1(),sn$1(5,`mat-card-subtitle`),wi(6,`Notes from the site team about this delivery — damage, delays or anything worth remembering.`),ln$1()(),sn$1(7,`button`,3),Xe$1(`click`,function(){return e.add()}),sn$1(8,`mat-icon`),wi(9,`add`),ln$1(),wi(10,`Add annotation`),ln$1()(),HN(11,ja,17,13,`div`,4,BN,!1,$a,7,0,`div`,5),ln$1()),t&2){let i=e.shipment();yt(4),Si(`Annotations (`,i.annotations.length,`)`),yt(7),$N(i.annotations)}},dependencies:[nt,tt,et,at$1,tJ,eJ,cF,_S,sF,Bee,zF,WS],styles:[`[_nghost-%COMP%]{display:block}.ann[_ngcontent-%COMP%]{align-items:flex-start}.ann[_ngcontent-%COMP%] > .grow[_ngcontent-%COMP%]{flex:1;min-width:0}.head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.text[_ngcontent-%COMP%]{margin-top:4px}.dic[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:4px;background:#f2f2f2;color:#54545d;display:grid;place-items:center;flex:none}.dic.error[_ngcontent-%COMP%]{background:#ffdbd5;color:#b51c00}.dic.warning[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e}.dic[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.title[_ngcontent-%COMP%]{color:#000000de;font-weight:500}`]})};function Qa(n,a){if(n&1){let t=Xh();sn$1(0,`div`,9)(1,`span`,15)(2,`mat-icon`),wi(3,`description`),ln$1()(),sn$1(4,`div`,4)(5,`b`),wi(6),ln$1(),sn$1(7,`div`,10),wi(8),VA(9,`clmDate`),ln$1()(),sn$1(10,`button`,16),Xe$1(`click`,function(){let i=bl(t).$implicit,l=hd();return _l(l.download(i.name))}),sn$1(11,`mat-icon`),wi(12,`download`),ln$1()(),sn$1(13,`button`,17),Xe$1(`click`,function(){let i=bl(t).$index,l=hd();return _l(l.deleteDoc(i))}),sn$1(14,`mat-icon`),wi(15,`delete`),ln$1()()()}if(n&2){let t=a.$implicit,e=hd();yt(6),md(t.name),yt(2),cC(` `,t.type,` · `,t.size,` · `,e.data.person(t.by).name,`, `,UA(9,7,t.at,`time`),` `),yt(2),Te(`aria-label`,`Download `+t.name),yt(3),Te(`aria-label`,`Delete `+t.name)}}function Wa(n,a){n&1&&(sn$1(0,`div`,10),wi(1,`No documents uploaded yet.`),ln$1())}function Ga(n,a){if(n&1){let t=Xh();sn$1(0,`div`,12)(1,`button`,18),Xe$1(`click`,function(){let i=bl(t).$index,l=hd();return _l(l.openPhoto(i))}),Ei(2,`img`,19),ln$1(),sn$1(3,`button`,20),Xe$1(`click`,function(){let i=bl(t).$index,l=hd();return _l(l.removePhoto(i))}),sn$1(4,`mat-icon`),wi(5,`close`),ln$1()()()}if(n&2){let t=a.$implicit,e=a.$index;yt(),Te(`aria-label`,`Open photo `+(e+1)),yt(),UD(`src`,t)}}var We=class n{shipment=Mi.required();data=f($S);actions=f(ut);dialog=f(ig);snackBar=f(AS);dragOver=Y(!1);docTypes=`.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx`;onDrop(a){a.preventDefault(),this.dragOver.set(!1),this.addDocs([...a.dataTransfer?.files??[]])}onPick(a,t){let e=[...a.files??[]];a.value=``,t===`docs`?this.addDocs(e):e.length&&(this.data.addPhotos(this.shipment().id,e.map(i=>URL.createObjectURL(i))),this.snackBar.open(`Photo added`,void 0,{duration:3e3}))}download(a){this.snackBar.open(`Downloading \u201C${a}\u201D is simulated in this draft.`,void 0,{duration:3e3})}deleteDoc(a){let t=this.shipment(),e={title:`Delete document?`,text:`\u201C${t.docs[a].name}\u201D will be removed from this shipment.`,ok:`Delete`,danger:!0};this.dialog.open(g$1,{width:`440px`,data:e}).afterClosed().subscribe(i=>{if(!i)return;let l=this.data.removeDoc(t.id,a);this.actions.undoable(`Document deleted`,()=>this.data.restoreDoc(t.id,l))})}removePhoto(a){let t=this.shipment().id,e=this.data.removePhoto(t,a);this.actions.undoable(`Photo removed`,()=>this.data.restorePhoto(t,a,e))}openPhoto(a){this.dialog.open(H,{data:{photos:this.shipment().photos,index:a},panelClass:`clm-photo-viewer`,backdropClass:`clm-photo-backdrop`,maxWidth:`100vw`,width:`100vw`,height:`100vh`})}addDocs(a){a.length&&(this.data.addDocs(this.shipment().id,a),this.snackBar.open(`${a.length} document${a.length>1?`s`:``} added`,void 0,{duration:3e3}))}static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-documents-tab`]],inputs:{shipment:[1,`shipment`]},decls:36,vars:6,consts:[[`docInput`,``],[`photoInput`,``],[`appearance`,`raised`,1,`clm-card`],[1,`clm-card-head`],[1,`grow`],[`type`,`button`,1,`drop`,3,`click`,`dragover`,`dragleave`,`drop`],[1,`link`],[`type`,`file`,`multiple`,``,`hidden`,``,3,`change`,`accept`],[1,`doc-list`],[1,`clm-row-box`],[1,`clm-cap`],[1,`photos`],[1,`photo`],[`type`,`button`,1,`add-tile`,3,`click`],[`type`,`file`,`multiple`,``,`accept`,`image/*`,`hidden`,``,3,`change`],[1,`dic`],[`mat-icon-button`,``,`matTooltip`,`Download`,1,`clm-icon-btn-sm`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Delete`,1,`clm-icon-btn-sm`,3,`click`],[`type`,`button`,1,`open`,3,`click`],[`alt`,``,3,`src`],[`type`,`button`,`matTooltip`,`Remove`,`aria-label`,`Remove photo`,1,`rm`,3,`click`]],template:function(t,e){if(t&1){let i=Xh();sn$1(0,`mat-card`,2)(1,`div`,3)(2,`div`,4)(3,`mat-card-title`),wi(4),ln$1(),sn$1(5,`mat-card-subtitle`),wi(6,`Delivery notes, permits or plans · PDF, DOCX, PPTX, XLSX up to 20 MB`),ln$1()()(),sn$1(7,`button`,5),Xe$1(`click`,function(){bl(i);let s=JN(15);return _l(s.click())})(`dragover`,function(s){return bl(i),s.preventDefault(),_l(e.dragOver.set(!0))})(`dragleave`,function(){return e.dragOver.set(!1)})(`drop`,function(s){return e.onDrop(s)}),sn$1(8,`mat-icon`),wi(9,`upload`),ln$1(),sn$1(10,`span`),wi(11,`Drag files here or `),sn$1(12,`span`,6),wi(13,`browse`),ln$1()()(),sn$1(14,`input`,7,0),Xe$1(`change`,function(){bl(i);let s=JN(15);return _l(e.onPick(s,`docs`))}),ln$1(),sn$1(16,`div`,8),HN(17,Qa,16,10,`div`,9,BN,!1,Wa,2,0,`div`,10),ln$1()(),sn$1(20,`mat-card`,2)(21,`div`,3)(22,`div`,4)(23,`mat-card-title`),wi(24),ln$1(),sn$1(25,`mat-card-subtitle`),wi(26,`Helps the site team identify the load`),ln$1()()(),sn$1(27,`div`,11),HN(28,Ga,6,2,`div`,12,BN),sn$1(30,`button`,13),Xe$1(`click`,function(){bl(i);let s=JN(35);return _l(s.click())}),sn$1(31,`mat-icon`),wi(32,`add_a_photo`),ln$1(),wi(33,`Add photo `),ln$1(),sn$1(34,`input`,14,1),Xe$1(`change`,function(){bl(i);let s=JN(35);return _l(e.onPick(s,`photos`))}),ln$1()()()}if(t&2){let i=e.shipment();yt(4),Si(`Documents (`,i.docs.length,`)`),yt(3),_e(`over`,e.dragOver()),yt(7),UD(`accept`,e.docTypes),yt(3),$N(i.docs),yt(7),Si(`Photos (`,i.photos.length,`)`),yt(4),$N(i.photos)}},dependencies:[nt,tt,et,at$1,tJ,eJ,cF,sF,Bee,zF,WS],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:block}.drop[_ngcontent-%COMP%]{width:100%;border:1.5px dashed #c0be69;background:#f5f5e6;border-radius:8px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:6px;color:#000000de;font:inherit;letter-spacing:.5px;text-align:center;cursor:pointer;transition:background .12s,border-color .12s}.drop[_ngcontent-%COMP%]:hover, .drop.over[_ngcontent-%COMP%]{background:#efefd8;border-color:#969300}.drop[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#7c7900}.drop[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#7c7900;font-weight:500}.doc-list[_ngcontent-%COMP%]{margin-top:12px}.clm-row-box[_ngcontent-%COMP%] > .grow[_ngcontent-%COMP%]{flex:1;min-width:0}.clm-row-box[_ngcontent-%COMP%]:hover{border-color:#c0be69}.dic[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:4px;background:#efefd8;color:#7c7900;display:grid;place-items:center;flex:none}.dic[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.photos[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px}.photo[_ngcontent-%COMP%]{width:96px;height:96px;border-radius:8px;overflow:hidden;position:relative;background:#f2f2f2}.photo[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]{all:unset;display:block;width:100%;height:100%;cursor:zoom-in}.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .2s}.photo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.photo[_ngcontent-%COMP%]   .rm[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;background:#0000008c;color:#fff;width:24px;height:24px;border:0;border-radius:50%;display:none;place-items:center;cursor:pointer;padding:0}.photo[_ngcontent-%COMP%]   .rm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.photo[_ngcontent-%COMP%]:hover   .rm[_ngcontent-%COMP%], .photo[_ngcontent-%COMP%]   .rm[_ngcontent-%COMP%]:focus-visible{display:grid}.add-tile[_ngcontent-%COMP%]{width:96px;height:96px;border:1.5px dashed #c0be69;background:#f5f5e6;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#7c7900;font:500 12px/16px Roboto,sans-serif;cursor:pointer}.add-tile[_ngcontent-%COMP%]:hover{background:#efefd8}`]})};var lt=new v(`CDK_TABLE`);var Ue=(()=>{class n{template=f(dt);static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var Ze=(()=>{class n{template=f(dt);static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var Zi=(()=>{class n{template=f(dt);static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var Yt=(()=>{class n{_table=f(lt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(t){this._setNameInput(t)}_name;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(t){t!==this._stickyEnd&&(this._stickyEnd=t,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(e,i,l){if(e&1&&Qh(l,Ue,5)(l,Ze,5)(l,Zi,5),e&2){let s;dn(s=un$1())&&(i.cell=s.first),dn(s=un$1())&&(i.headerCell=s.first),dn(s=un$1())&&(i.footerCell=s.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,ae],stickyEnd:[2,`stickyEnd`,`stickyEnd`,ae]}})}return n})();var Ke=class{constructor(a,t){t.nativeElement.classList.add(...a._columnCssClassName)}};var Yi=(()=>{class n extends Ke{constructor(){super(f(Yt),f(B))}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[ne]})}return n})();var Xi=(()=>{class n extends Ke{constructor(){let t=f(Yt),e=f(B);super(t,e);let i=t._table?._getCellRole();i&&e.nativeElement.setAttribute(`role`,i)}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[ne]})}return n})();var yn=(()=>{class n{template=f(dt);_differs=f(um);columns;_columnsDiffer;ngOnChanges(t){if(!this._columnsDiffer){let e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof me?t.headerCell.template:this instanceof wn?t.footerCell.template:t.cell.template}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,features:[xe]})}return n})();var me=(()=>{class n extends yn{_table=f(lt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(t){super.ngOnChanges(t)}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,ae]},features:[ne,xe]})}return n})();var wn=(()=>{class n extends yn{_table=f(lt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(t){super.ngOnChanges(t)}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,ae]},features:[ne,xe]})}return n})();var Ye=(()=>{class n extends yn{_table=f(lt,{optional:!0});when;static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[ne]})}return n})();var At=(()=>{class n{_viewContainer=f(rt);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var xn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=he({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(e,i){e&1&&$D(0,0)},dependencies:[At],encapsulation:2,changeDetection:1})}return n})();var Cn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=he({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(e,i){e&1&&$D(0,0)},dependencies:[At],encapsulation:2,changeDetection:1})}return n})();var Ji=(()=>{class n{templateRef=f(dt);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var Gi=[`top`,`bottom`,`left`,`right`];var _n=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=/* @__PURE__ */ new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,t,e=!0,i=!0,l,s,m){this._isNativeHtmlTable=a,this._stickCellCss=t,this._isBrowser=e,this._needsPositionStickyOnElement=i,this.direction=l,this._positionListener=s,this._tableInjector=m,this._borderCellCss={top:`${t}-border-elem-top`,bottom:`${t}-border-elem-bottom`,left:`${t}-border-elem-left`,right:`${t}-border-elem-right`}}clearStickyPositioning(a,t){(t.includes(`left`)||t.includes(`right`))&&this._removeFromStickyColumnReplayQueue(a);let e=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&e.push(i,...Array.from(i.children));Be({write:()=>{for(let i of e)this._removeStickyStyle(i,t)}},{injector:this._tableInjector})}updateStickyColumns(a,t,e,i=!0,l=!0){if(!a.length||!this._isBrowser||!(t.some(rt=>rt)||e.some(rt=>rt))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=a[0],m=s.children.length,p=this.direction===`rtl`,b=p?`right`:`left`,u=p?`left`:`right`,v=t.lastIndexOf(!0),I=e.indexOf(!0),j,In,Rn;l&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...t],stickyEndStates:[...e]}),Be({earlyRead:()=>{j=this._getCellWidths(s,i),In=this._getStickyStartColumnPositions(j,t),Rn=this._getStickyEndColumnPositions(j,e)},write:()=>{for(let rt of a)for(let Y=0;Y<m;Y++){let Nn=rt.children[Y];t[Y]&&this._addStickyStyle(Nn,b,In[Y],Y===v),e[Y]&&this._addStickyStyle(Nn,u,Rn[Y],Y===I)}this._positionListener&&j.some(rt=>!!rt)&&(this._positionListener.stickyColumnsUpdated({sizes:v===-1?[]:j.slice(0,v+1).map((rt,Y)=>t[Y]?rt:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:I===-1?[]:j.slice(I).map((rt,Y)=>e[Y+I]?rt:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,t,e){if(!this._isBrowser)return;let i=e===`bottom`?a.slice().reverse():a,l=e===`bottom`?t.slice().reverse():t,s=[],m=[],p=[];Be({earlyRead:()=>{for(let b=0,u=0;b<i.length;b++){if(!l[b])continue;s[b]=u;let v=i[b];p[b]=this._isNativeHtmlTable?Array.from(v.children):[v];let I=this._retrieveElementSize(v).height;u+=I,m[b]=I}},write:()=>{let b=l.lastIndexOf(!0);for(let u=0;u<i.length;u++){if(!l[u])continue;let v=s[u],I=u===b;for(let j of p[u])this._addStickyStyle(j,e,v,I)}e===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:m,offsets:s,elements:p}):this._positionListener?.stickyFooterRowsUpdated({sizes:m,offsets:s,elements:p})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,t){this._isNativeHtmlTable&&Be({write:()=>{let e=a.querySelector(`tfoot`);e&&(t.some(i=>!i)?this._removeStickyStyle(e,[`bottom`]):this._addStickyStyle(e,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,t){if(!a.classList.contains(this._stickCellCss))return;for(let i of t)a.style[i]=``,a.classList.remove(this._borderCellCss[i]);Gi.some(i=>t.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex=``,this._needsPositionStickyOnElement&&(a.style.position=``),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,t,e,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[t]),a.style[t]=`${e}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(a){let t={top:100,bottom:10,left:1,right:1},e=0;for(let i of Gi)a.style[i]&&(e+=t[i]);return e?`${e}`:``}_getCellWidths(a,t=!0){if(!t&&this._cachedCellWidths.length)return this._cachedCellWidths;let e=[],i=a.children;for(let l=0;l<i.length;l++){let s=i[l];e.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=e,e}_getStickyStartColumnPositions(a,t){let e=[],i=0;for(let l=0;l<a.length;l++)t[l]&&(e[l]=i,i+=a[l]);return e}_getStickyEndColumnPositions(a,t){let e=[],i=0;for(let l=a.length;l>0;l--)t[l]&&(e[l]=i,i+=a[l]);return e}_retrieveElementSize(a){let t=this._elemSizeCache.get(a);if(t)return t;let e=a.getBoundingClientRect(),i={width:e.width,height:e.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:`border-box`})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let t=new Set(a);for(let e of this._updatedStickyColumnsParamsToReplay)e.rows=e.rows.filter(i=>!t.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(e=>!!e.rows.length)}_updateCachedSizes(a){let t=!1;for(let e of a){let i=e.borderBoxSize?.length?{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize}:{width:e.contentRect.width,height:e.contentRect.height};i.width!==this._elemSizeCache.get(e.target)?.width&&Ka(e.target)&&(t=!0),this._elemSizeCache.set(e.target,i)}t&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let e of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(e.rows,e.stickyStartStates,e.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ka(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(a=>n.classList.contains(a))}function Ki(n){return Error(`Could not find column with id "${n}".`)}var se=new v(`STICKY_POSITIONING_LISTENER`);var kn=(()=>{class n{viewContainer=f(rt);elementRef=f(B);constructor(){let t=f(lt);t._rowOutlet=this,t._outletAssigned()}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var Sn=(()=>{class n{viewContainer=f(rt);elementRef=f(B);constructor(){let t=f(lt);t._headerRowOutlet=this,t._outletAssigned()}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Dn=(()=>{class n{viewContainer=f(rt);elementRef=f(B);constructor(){let t=f(lt);t._footerRowOutlet=this,t._outletAssigned()}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var Mn=(()=>{class n{viewContainer=f(rt);elementRef=f(B);constructor(){let t=f(lt);t._noDataRowOutlet=this,t._outletAssigned()}static ɵfac=function(e){return new(e||n)};static ɵdir=T({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var Tn=(()=>{class n{_differs=f(um);_changeDetectorRef=f(ot);_elementRef=f(B);_dir=f(Gt,{optional:!0});_platform=f(ce);_viewRepeater;_viewportRuler=f(Ai$1);_injector=f(M);_virtualScrollViewport=f(Q9,{optional:!0,host:!0});_positionListener=f(se,{optional:!0})||f(se,{optional:!0,skipSelf:!0});_document=f(x);_data;_renderedRange;_onDestroy=new C;_renderRows;_renderChangeSubscription=null;_columnDefsByName=/* @__PURE__ */ new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=/* @__PURE__ */ new Set;_customRowDefs=/* @__PURE__ */ new Set;_customHeaderRowDefs=/* @__PURE__ */ new Set;_customFooterRowDefs=/* @__PURE__ */ new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=/* @__PURE__ */ new Map;_rowDefsByView=/* @__PURE__ */ new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new C;_footerRowStickyUpdates=new C;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let t=this._elementRef.nativeElement.getAttribute(`role`);return t===`grid`||t===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}_trackByFn;get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&(this._switchDataSource(t),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new C;_dataStream=new C;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=t,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(t){this._fixedLayout=t,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new W;viewChange=new Ne({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){f(new Ii(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((e,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ie(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new pE:new $t$1,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(t=>{t?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),A9(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let t=this._dataDiffer.diff(this._renderRows);if(!t){this._updateNoDataRow(),this.contentChanged.next();return}let e=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,e,(i,l,s)=>this._getEmbeddedViewArgs(i.item,s),i=>i.item.data,i=>{if(i.operation===Ia$1.INSERTED&&i.context){this._renderCellTemplateForItem(i.record.item.rowDef,i.context);let l=e.get(i.record.currentIndex);this._rowDefsByView.set(l,i.record.item.rowDef)}}),t.forEachIdentityChange(i=>{let l=i.currentIndex,s=e.get(l);if(this._rowDefsByView.get(s)!==i.item.rowDef){e.remove(l);let m=this._renderRow(this._rowOutlet,i.item.rowDef,l,{$implicit:i.item.data});this._rowDefsByView.set(m,i.item.rowDef)}else s.context.$implicit=i.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}setNoDataRow(t){this._customNoDataRow=t}updateStickyHeaderRowStyles(){let t=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Ui(this._headerRowOutlet,`thead`);i&&(i.style.display=t.length?``:`none`)}let e=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(t,[`top`]),this._stickyStyler.stickRows(t,e,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let t=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Ui(this._footerRowOutlet,`tfoot`);i&&(i.style.display=t.length?``:`none`)}let e=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(t,[`bottom`]),this._stickyStyler.stickRows(t,e,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,e),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...t,...e,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),t.forEach((l,s)=>{this._addStickyColumnStyles([l],this._headerRowDefs[s])}),this._rowDefs.forEach(l=>{let s=[];for(let m=0;m<e.length;m++)this._renderRows[m].rowDef===l&&s.push(e[m]);this._addStickyColumnStyles(s,l)}),i.forEach((l,s)=>{this._addStickyColumnStyles([l],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(l=>l.resetStickyChanged())}stickyColumnsUpdated(t){this._positionListener?.stickyColumnsUpdated(t)}stickyEndColumnsUpdated(t){this._positionListener?.stickyEndColumnsUpdated(t)}stickyHeaderRowsUpdated(t){this._headerRowStickyUpdates.next(t),this._positionListener?.stickyHeaderRowsUpdated(t)}stickyFooterRowsUpdated(t){this._footerRowStickyUpdates.next(t),this._positionListener?.stickyFooterRowsUpdated(t)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let e=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||e,this._forceRecalculateCellWidths=e,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let t=[],e=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=/* @__PURE__ */ new Map;for(let l=this._renderedRange.start;l<e;l++){let s=this._data[l],m=this._getRenderRowsForData(s,l,i.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,/* @__PURE__ */ new WeakMap);for(let p=0;p<m.length;p++){let b=m[p],u=this._cachedRenderRowsMap.get(b.data);u.has(b.rowDef)?u.get(b.rowDef).push(b):u.set(b.rowDef,[b]),t.push(b)}}return t}_getRenderRowsForData(t,e,i){return this._getRowDefs(t,e).map(s=>{let m=i&&i.has(s)?i.get(s):[];if(m.length){let p=m.shift();return p.dataIndex=e,p}else return{data:t,rowDef:s,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ge(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(e=>{this._columnDefsByName.has(e.name),this._columnDefsByName.set(e.name,e)})}_cacheRowDefs(){this._headerRowDefs=Ge(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ge(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ge(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let t=this._rowDefs.filter(e=>!e.when);this._defaultRowDef=t[0]}_renderUpdatedColumns(){let t=(s,m)=>{let p=!!m.getColumnsDiff();return s||p},e=this._rowDefs.reduce(t,!1);e&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(t,!1);i&&this._forceRenderHeaderRows();let l=this._footerRowDefs.reduce(t,!1);return l&&this._forceRenderFooterRows(),e||i||l}_switchDataSource(t){this._data=[],A9(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;A9(this.dataSource)?t=this.dataSource.connect(this):gs(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=R(this.dataSource)),this._renderChangeSubscription=Qo([t,this.viewChange]).pipe(Ie(this._onDestroy)).subscribe(([e,i])=>{this._data=e||[],this._renderedRange=i,this._dataStream.next(e),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,e){let i=Array.from(e?.columns||[]).map(m=>{let p=this._columnDefsByName.get(m);if(!p)throw Ki(m);return p}),l=i.map(m=>m.sticky),s=i.map(m=>m.stickyEnd);this._stickyStyler.updateStickyColumns(t,l,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(t){let e=[];for(let i=0;i<t.viewContainer.length;i++){let l=t.viewContainer.get(i);e.push(l.rootNodes[0])}return e}_getRowDefs(t,e){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(l=>!l.when||l.when(e,t));else{let l=this._rowDefs.find(s=>s.when&&s.when(e,t))||this._defaultRowDef;l&&i.push(l)}return i.length,i}_getEmbeddedViewArgs(t,e){let i=t.rowDef,l={$implicit:t.data};return{templateRef:i.template,context:l,index:e}}_renderRow(t,e,i,l={}){let s=t.viewContainer.createEmbeddedView(e.template,l,i);return this._renderCellTemplateForItem(e,l),s}_renderCellTemplateForItem(t,e){for(let i of this._getCellTemplates(t))At.mostRecentCellOutlet&&At.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,e);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let t=this._rowOutlet.viewContainer;for(let e=0,i=t.length;e<i;e++){let s=t.get(e).context;s.count=i,s.first=e===0,s.last=e===i-1,s.even=e%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[e].dataIndex,s.renderIndex=e):s.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return!t||!t.columns?[]:Array.from(t.columns,e=>{let i=this._columnDefsByName.get(e);if(!i)throw Ki(e);return t.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let t=(e,i)=>e||i.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let t=this._dir?this._dir.value:`ltr`,e=this._injector;this._stickyStyler=new _n(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,t,this,e),(this._dir?this._dir.change:R()).pipe(Ie(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(t){let e=typeof requestAnimationFrame<`u`?Fv:Ov;this.viewChange.next({start:0,end:0}),t.renderedRangeStream.pipe(Xc(0,e),Ie(this._onDestroy)).subscribe(this.viewChange),t.attach({dataStream:this._dataStream,measureRangeSize:(i,l)=>this._measureRangeSize(i,l)}),Qo([t.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ie(this._onDestroy)).subscribe(([i,l])=>{if(!(!l.sizes||!l.offsets||!l.elements))for(let s=0;s<l.elements.length;s++){let m=l.elements[s];if(m){let p=l.offsets[s],b=i!==0?Math.max(i-p,p):-p;for(let u of m)u.style.top=`${-b}px`}}}),Qo([t.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ie(this._onDestroy)).subscribe(([i,l])=>{if(!(!l.sizes||!l.offsets||!l.elements))for(let s=0;s<l.elements.length;s++){let m=l.elements[s];if(m)for(let p of m)p.style.bottom=`${i+l.offsets[s]}px`}})}_getOwnDefs(t){return t.filter(e=>!e._table||e._table===this)}_updateNoDataRow(){let t=this._customNoDataRow||this._noDataRow;if(!t)return;let e=this._rowOutlet.viewContainer.length===0;if(e===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(e){let l=i.createEmbeddedView(t.templateRef),s=l.rootNodes[0];if(l.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute(`role`,`row`),s.classList.add(...t._contentClassNames);let m=s.querySelectorAll(t._cellSelector);for(let p=0;p<m.length;p++)m[p].classList.add(...t._cellClassNames)}}else i.clear();this._isShowingNoDataRow=e,this._changeDetectorRef.markForCheck()}_measureRangeSize(t,e){if(t.start>=t.end||e!==`vertical`)return 0;let i=this.viewChange.value,l=this._rowOutlet.viewContainer;t.start<i.start||(t.end,i.end);let s=t.start-i.start,m=t.end-t.start,p,b;for(let I=0;I<m;I++){let j=l.get(I+s);if(j&&j.rootNodes.length){p=b=j.rootNodes[0];break}}for(let I=m-1;I>-1;I--){let j=l.get(I+s);if(j&&j.rootNodes.length){b=j.rootNodes[j.rootNodes.length-1];break}}let u=p?.getBoundingClientRect?.(),v=b?.getBoundingClientRect?.();return u&&v?v.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[`caption`]],[[`colgroup`],[`col`]],`*`],e=[`caption`,`colgroup, col`,`*`];function i(m,p){m&1&&Mt(0,2)}function l(m,p){m&1&&(sn$1(0,`thead`,0),$D(1,1),ln$1(),sn$1(2,`tbody`,0),$D(3,2)(4,3),ln$1(),sn$1(5,`tfoot`,0),$D(6,4),ln$1())}function s(m,p){m&1&&$D(0,1)(1,2)(2,3)(3,4)}return he({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(p,b,u){if(p&1&&Qh(u,Ji,5)(u,Yt,5)(u,Ye,5)(u,me,5)(u,wn,5),p&2){let v;dn(v=un$1())&&(b._noDataRow=v.first),dn(v=un$1())&&(b._contentColumnDefs=v),dn(v=un$1())&&(b._contentRowDefs=v),dn(v=un$1())&&(b._contentHeaderRowDefs=v),dn(v=un$1())&&(b._contentFooterRowDefs=v)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(p,b){p&2&&_e(`cdk-table-fixed-layout`,b.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,ae],fixedLayout:[2,`fixedLayout`,`fixedLayout`,ae],recycleRows:[2,`recycleRows`,`recycleRows`,ae]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[ft([{provide:lt,useExisting:n},{provide:se,useValue:null}])],ngContentSelectors:e,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(p,b){p&1&&(Dr(t),Mt(0),Mt(1,1),Co$1(2,i,1,0),Co$1(3,l,7,0)(4,s,4,0)),p&2&&(yt(2),Eo(b._isServer?2:-1),yt(),Eo(b._isNativeHtmlTable?3:4))},dependencies:[Sn,kn,Mn,Dn],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return n})();function Ge(n,a){return n.concat(Array.from(a))}function Ui(n,a){let t=a.toUpperCase(),e=n.viewContainer.element.nativeElement;for(;e;){let i=e.nodeType===1?e.nodeName:null;if(i===t)return e;if(i===`TABLE`)break;e=e.parentNode}return null}var ta=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=J({type:n});static ɵinj=Q({imports:[Lm]})}return n})();var ea=(()=>{class n extends Tn{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵcmp=(function(){let t=[[[`caption`]],[[`colgroup`],[`col`]],`*`],e=[`caption`,`colgroup, col`,`*`];function i(m,p){m&1&&Mt(0,2)}function l(m,p){m&1&&(sn$1(0,`thead`,0),$D(1,1),ln$1(),sn$1(2,`tbody`,2),$D(3,3)(4,4),ln$1(),sn$1(5,`tfoot`,0),$D(6,5),ln$1())}function s(m,p){m&1&&$D(0,1)(1,3)(2,4)(3,5)}return he({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(p,b){p&2&&_e(`mat-table-fixed-layout`,b.fixedLayout)},exportAs:[`matTable`],features:[ft([{provide:Tn,useExisting:n},{provide:lt,useExisting:n},{provide:se,useValue:null}]),ne],ngContentSelectors:e,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(p,b){p&1&&(Dr(t),Mt(0),Mt(1,1),Co$1(2,i,1,0),Co$1(3,l,7,0)(4,s,4,0)),p&2&&(yt(2),Eo(b._isServer?2:-1),yt(),Eo(b._isNativeHtmlTable?3:4))},dependencies:[Sn,kn,Mn,Dn],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var na=(()=>{class n extends Ue{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`matCellDef`,``]],features:[ft([{provide:Ue,useExisting:n}]),ne]})}return n})();var ia=(()=>{class n extends Ze{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[ft([{provide:Ze,useExisting:n}]),ne]})}return n})();var aa=(()=>{class n extends Yt{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[ft([{provide:Yt,useExisting:n}]),ne]})}return n})();var oa=(()=>{class n extends Yi{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[ne]})}return n})();var ra=(()=>{class n extends Xi{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[ne]})}return n})();var ca=(()=>{class n extends me{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,ae]},features:[ft([{provide:me,useExisting:n}]),ne]})}return n})();var la=(()=>{class n extends Ye{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵdir=T({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[ft([{provide:Ye,useExisting:n}]),ne]})}return n})();var da=(()=>{class n extends xn{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵcmp=he({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[ft([{provide:xn,useExisting:n}]),ne],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(e,i){e&1&&$D(0,0)},dependencies:[At],encapsulation:2,changeDetection:1})}return n})();var sa=(()=>{class n extends Cn{static ɵfac=(()=>{let t;return function(i){return(t||(t=Ke$1(n)))(i||n)}})();static ɵcmp=he({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[ft([{provide:Cn,useExisting:n}]),ne],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(e,i){e&1&&$D(0,0)},dependencies:[At],encapsulation:2,changeDetection:1})}return n})();var ma=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=J({type:n});static ɵinj=Q({imports:[ta,st]})}return n})();function pa(n){let a=+n.slice(8,10)+ +n.slice(5,7);return Array.from({length:12},(t,e)=>{let i=(a+e*3)%10,l=i<4?`sun`:i<7?`partly`:i<9?`cloud`:`rain`;return{hour:7+e,icon:l,temp:12+Math.round(4*Math.sin(e/11*Math.PI))+a%3}})}var Za=()=>[`Truck`];var Ya=(n,a)=>a.hour;var Xa=(n,a)=>a.id;function Ja(n,a){if(n&1){let t=Xh();sn$1(0,`div`,0)(1,`mat-icon`),wi(2,`check_circle`),ln$1(),sn$1(3,`div`)(4,`b`),wi(5,`Shipment created`),ln$1(),sn$1(6,`p`),wi(7),ln$1()(),sn$1(8,`button`,35),Xe$1(`click`,function(){bl(t);let i=hd(),l=NA(0);return _l(i.data.dismissCreatedBanner(l.id))}),sn$1(9,`mat-icon`),wi(10,`close`),ln$1()()()}if(n&2){hd();let t=NA(0);yt(7),Si(` `,t.status===`Open`?`It is waiting for approval by the site logistics team. You’ll be notified when it’s approved.`:`It is approved and visible to the site team.`,` `)}}function to(n,a){if(n&1&&(sn$1(0,`div`,1)(1,`mat-icon`),wi(2,`block`),ln$1(),sn$1(3,`div`)(4,`b`),wi(5),ln$1(),sn$1(6,`p`),wi(7),ln$1()()()),n&2){hd();let t=NA(0);yt(5),md(t.status===`Canceled`?`Shipment canceled`:`Shipment rejected`),yt(2),md(t.reason||`No reason given.`)}}function eo(n,a){if(n&1&&(sn$1(0,`div`,36)(1,`span`,9),wi(2),ln$1(),Ei(3,`img`,37),sn$1(4,`span`),wi(5),ln$1()()),n&2){let t=a.$implicit;_e(`in`,t.inSlot),UD(`matTooltip`,t.label+` · `+t.temp+`°`),yt(2),md(t.label),yt(),UD(`src`,`fig/w-`+t.icon+`.svg`),yt(2),Si(``,t.temp,`°`)}}function no(n,a){n&1&&(sn$1(0,`th`,38),wi(1,`Material`),ln$1())}function io(n,a){if(n&1&&(sn$1(0,`td`,39),wi(1),ln$1()),n&2){let t=a.$implicit;yt(),md(t.name)}}function ao(n,a){n&1&&(sn$1(0,`th`,38),wi(1,`Quantity`),ln$1())}function oo(n,a){if(n&1&&(sn$1(0,`td`,40),wi(1),ln$1()),n&2){let t=a.$implicit;yt(),md(t.qty)}}function ro(n,a){n&1&&(sn$1(0,`th`,38),wi(1,`Packaging`),ln$1())}function co(n,a){if(n&1&&(sn$1(0,`td`,40),wi(1),ln$1()),n&2){let t=a.$implicit;yt(),md(t.pack)}}function lo(n,a){n&1&&(sn$1(0,`th`,38),wi(1,`Note`),ln$1())}function so(n,a){if(n&1&&(sn$1(0,`td`,41),wi(1),ln$1()),n&2){let t=a.$implicit;yt(),md(t.note)}}function mo(n,a){n&1&&Ei(0,`tr`,42)}function po(n,a){n&1&&Ei(0,`tr`,43)}function ho(n,a){if(n&1&&wi(0),n&2){let t=hd().$implicit;aC(` `,t.pulls||1,` pulls · `,t.start,` – `,t.end,` `)}}function uo(n,a){if(n&1&&wi(0),n&2){let t=hd().$implicit,e=NA(0);aC(` `,t.start,` – `,t.end,` · `,e.slot||20,` minutes · free of charge `)}}function bo(n,a){if(n&1&&(pC(0),sn$1(1,`div`,25),Ei(2,`mat-icon`,44),sn$1(3,`div`,4)(4,`div`,7),wi(5),ln$1(),sn$1(6,`b`),wi(7),ln$1(),sn$1(8,`div`,9),Co$1(9,ho,1,3)(10,uo,1,3),ln$1()(),sn$1(11,`span`,45),wi(12),ln$1()()),n&2){let t=a.$implicit,e=hd(),i=TA(e.data.equipment(t.id)),l=e.equipmentPill(t);yt(2),UD(`svgIcon`,`clm:`+i.icon),yt(3),Si(` `,t.kind===`onsite`?`On site (non-bookable)`:`Booked`,` `),yt(2),md(i.name),yt(2),Eo(t.kind===`onsite`?9:10),yt(2),wo$1(l.tone),yt(),md(l.label)}}function go(n,a){n&1&&(sn$1(0,`div`,9),wi(1,`No equipment booked for this shipment.`),ln$1())}function fo(n,a){if(n&1&&(sn$1(0,`div`,27)(1,`span`,46),wi(2),ln$1(),sn$1(3,`div`,4)(4,`div`,9),wi(5),VA(6,`clmDate`),ln$1(),sn$1(7,`div`),wi(8),ln$1()()()),n&2){let t=a.$implicit,e=hd();yt(2),md(e.initials(t.person.name)),yt(3),sC(``,t.person.name,` · `,UA(6,4,t.at,`time`)),yt(3),md(t.text)}}function vo(n,a){n&1&&(sn$1(0,`div`,9),wi(1,`No comments yet.`),ln$1())}var Xe=class n{shipment=Mi.required();data=f($S);snackBar=f(AS);vehicle=Fe(()=>this.data.vehicle(this.shipment().vehicle));weather=Fe(()=>{let a=this.shipment(),t=+a.start.slice(0,2),e=+a.end.slice(0,2)+(+a.end.slice(3)?1:0);return pa(a.date).map(i=>A(m({},i),{label:String(i.hour).padStart(2,`0`)+`:00`,inSlot:i.hour>=t&&i.hour<e}))});rainAt=Fe(()=>this.weather().find(a=>a.icon===`rain`)?.label);materials=Fe(()=>this.shipment().materials.map(a=>{let t=this.data.material(a.id);return{name:t.name,qty:`${a.qty} ${a.unit||t.unit}`,pack:t.pack||`—`,note:a.note||`—`}}));materialColumns=[`name`,`qty`,`pack`,`note`];comments=Fe(()=>this.shipment().comments.map(a=>A(m({},a),{person:this.data.person(a.by)})));comment=f(lte).control(``,[Zg.maxLength(250),Zg.pattern(/\S/)]);equipmentPill(a){return a.kind===`onsite`?{label:`Available`,tone:`success`}:a.state===`approved`?{label:`Approved`,tone:`success`}:a.state===`rejected`?{label:`Rejected`,tone:`error`}:{label:`Pending approval`,tone:`warning`}}initials(a){return a.split(` `).map(t=>t[0]).slice(0,2).join(``).toUpperCase()}postComment(){let a=this.comment.value.trim();a&&(this.data.addComment(this.shipment().id,a),this.comment.reset(),this.snackBar.open(`Comment posted`,void 0,{duration:3e3}))}onCommentKey(a){a.key===`Enter`&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),this.postComment())}static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-overview-tab`]],inputs:{shipment:[1,`shipment`]},decls:136,vars:40,consts:[[`role`,`status`,1,`clm-banner`,`ok`],[`role`,`status`,1,`clm-banner`,`err`],[`appearance`,`raised`,1,`clm-card`],[1,`clm-card-head`],[1,`grow`],[1,`tiles`],[1,`tile`],[1,`clm-overline`],[3,`matTooltip`],[1,`clm-cap`],[1,`weather-row`],[1,`wh`,3,`in`,`matTooltip`],[1,`clm-cap`,`info`],[1,`tbl-wrap`],[`mat-table`,``,3,`dataSource`],[`matColumnDef`,`name`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`strong`,4,`matCellDef`],[`matColumnDef`,`qty`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`pack`],[`matColumnDef`,`note`],[`mat-cell`,``,`class`,`clm-muted`,4,`matCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`eq-row`],[1,`clm-kv`,`kv4`],[1,`cmt`],[1,`clm-field`,`add-comment`],[`for`,`c-text`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`],[`matInput`,``,`id`,`c-text`,`maxlength`,`250`,`placeholder`,`Write here`,3,`keydown`,`formControl`],[1,`post-row`],[1,`counter`],[`mat-flat-button`,``,3,`click`,`disabled`],[`mat-icon-button`,``,`aria-label`,`Dismiss`,1,`x`,`clm-icon-btn-sm`,3,`click`],[1,`wh`,3,`matTooltip`],[`width`,`24`,`height`,`24`,`alt`,``,3,`src`],[`mat-header-cell`,``],[`mat-cell`,``,1,`strong`],[`mat-cell`,``],[`mat-cell`,``,1,`clm-muted`],[`mat-header-row`,``],[`mat-row`,``],[1,`eq-icon`,3,`svgIcon`],[1,`clm-pill`],[1,`clm-avatar`]],template:function(t,e){if(t&1&&(pC(0),Co$1(1,Ja,11,1,`div`,0),Co$1(2,to,8,2,`div`,1),sn$1(3,`mat-card`,2)(4,`div`,3)(5,`div`,4)(6,`mat-card-title`),wi(7,`Booking`),ln$1()()(),sn$1(8,`div`,5)(9,`div`,6)(10,`mat-icon`),wi(11,`event`),ln$1(),sn$1(12,`div`)(13,`div`,7),wi(14,`Date`),ln$1(),sn$1(15,`b`),wi(16),VA(17,`clmDate`),ln$1()()(),sn$1(18,`div`,6)(19,`mat-icon`),wi(20,`schedule`),ln$1(),sn$1(21,`div`)(22,`div`,7),wi(23,`Time slot`),ln$1(),sn$1(24,`b`),wi(25),ln$1()()(),sn$1(26,`div`,6)(27,`mat-icon`),wi(28,`location_on`),ln$1(),sn$1(29,`div`)(30,`div`,7),wi(31,`Unloading point`),ln$1(),sn$1(32,`b`,8),wi(33),ln$1()()(),sn$1(34,`div`,6)(35,`mat-icon`),wi(36,`local_shipping`),ln$1(),sn$1(37,`div`)(38,`div`,7),wi(39,`Vehicle`),ln$1(),sn$1(40,`b`,8),wi(41),ln$1()()()()(),sn$1(42,`mat-card`,2)(43,`div`,3)(44,`div`,4)(45,`mat-card-title`),wi(46,`Weather`),ln$1()(),sn$1(47,`span`,9),wi(48),VA(49,`clmDate`),ln$1()(),sn$1(50,`div`,10),HN(51,eo,6,6,`div`,11,Ya),ln$1(),sn$1(53,`div`,12)(54,`mat-icon`),wi(55,`info`),ln$1(),wi(56),ln$1()(),sn$1(57,`mat-card`,2)(58,`div`,3)(59,`div`,4)(60,`mat-card-title`),wi(61),ln$1()()(),sn$1(62,`div`,13)(63,`table`,14),Zh(64,15),_r(65,no,2,0,`th`,16)(66,io,2,1,`td`,17),Kh(),Zh(67,18),_r(68,ao,2,0,`th`,16)(69,oo,2,1,`td`,19),Kh(),Zh(70,20),_r(71,ro,2,0,`th`,16)(72,co,2,1,`td`,19),Kh(),Zh(73,21),_r(74,lo,2,0,`th`,16)(75,so,2,1,`td`,22),Kh(),_r(76,mo,1,0,`tr`,23)(77,po,1,0,`tr`,24),ln$1()()(),sn$1(78,`mat-card`,2)(79,`div`,3)(80,`div`,4)(81,`mat-card-title`),wi(82),ln$1()()(),HN(83,bo,13,8,`div`,25,Xa,!1,go,2,0,`div`,9),ln$1(),sn$1(86,`mat-card`,2)(87,`div`,3)(88,`div`,4)(89,`mat-card-title`),wi(90,`Transport & sustainability`),ln$1()()(),sn$1(91,`dl`,26)(92,`dt`),wi(93,`Arrival gate`),ln$1(),sn$1(94,`dd`),wi(95),ln$1(),sn$1(96,`dt`),wi(97,`License plate`),ln$1(),sn$1(98,`dd`),wi(99),ln$1(),sn$1(100,`dt`),wi(101,`Driver phone`),ln$1(),sn$1(102,`dd`),wi(103),ln$1(),sn$1(104,`dt`),wi(105,`Transport modes`),ln$1(),sn$1(106,`dd`),wi(107),ln$1(),sn$1(108,`dt`),wi(109,`Origin`),ln$1(),sn$1(110,`dd`),wi(111),ln$1(),sn$1(112,`dt`),wi(113,`Distance`),ln$1(),sn$1(114,`dd`),wi(115),ln$1()()(),sn$1(116,`mat-card`,2)(117,`div`,3)(118,`div`,4)(119,`mat-card-title`),wi(120),ln$1()()(),HN(121,fo,9,7,`div`,27,BN,!1,vo,2,0,`div`,9),sn$1(124,`div`,28)(125,`label`,29),wi(126,`Add a comment`),ln$1(),sn$1(127,`mat-form-field`,30)(128,`textarea`,31),RT(),Xe$1(`keydown`,function(l){return e.onCommentKey(l)}),ln$1()(),sn$1(129,`div`,32)(130,`span`,33),wi(131),ln$1(),sn$1(132,`button`,34),Xe$1(`click`,function(){return e.postComment()}),sn$1(133,`mat-icon`),wi(134,`send`),ln$1(),wi(135,`Post `),ln$1()()()()),t&2){let i=TA(e.shipment());yt(),Eo(i.justCreated?1:-1),yt(),Eo(i.status===`Canceled`||i.status===`Rejected`?2:-1),yt(14),md(UA(17,33,i.date,`day`)),yt(9),sC(``,i.start,` – `,i.end),yt(7),UD(`matTooltip`,i.up+` · `+i.zone),yt(),sC(``,i.up,` · `,i.zone),yt(7),UD(`matTooltip`,e.vehicle().name),yt(),sC(``,e.vehicle().name,` · `,i.vehicles||1),yt(7),sC(``,UA(49,36,i.date,`day`),` · `,i.building),yt(3),$N(e.weather()),yt(5),Si(` Highlighted hours are your time slot · `,e.rainAt()?`rain expected from `+e.rainAt():`no rain expected`,`. `),yt(5),Si(`Materials (`,i.materials.length,`)`),yt(2),UD(`dataSource`,e.materials()),yt(13),UD(`matHeaderRowDef`,e.materialColumns),yt(),UD(`matRowDefColumns`,e.materialColumns),yt(5),Si(`Equipment (`,i.equipment.length,`)`),yt(),$N(i.equipment),yt(12),md(i.gate),yt(4),md(i.plate||`—`),yt(4),md(i.phone||`—`),yt(4),md((i.modes||PA(39,Za)).join(`, `)),yt(4),md(i.origin),yt(4),sC(``,i.km,` km · ≈ `,(i.km*.9).toFixed(1),` kg CO₂`),yt(5),Si(`Comments (`,i.comments.length,`)`),yt(),$N(e.comments()),yt(7),UD(`formControl`,e.comment),OT(),yt(3),Si(``,e.comment.value.length,`/250`),yt(),UD(`disabled`,!e.comment.value.trim())}},dependencies:[ute,nI,ite,uL,RL,nt,tt,at$1,ma,ea,ia,ca,aa,na,la,oa,ra,da,sa,tJ,eJ,cF,_S,sF,be$1,Kt,Un,Qn,Bee,zF,WS],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:block}.tiles[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.tile[_ngcontent-%COMP%]{background:#f2f2f2;border-radius:8px;padding:12px;display:flex;gap:10px;align-items:center;min-width:0}.tile[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0}.tile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#7c7900;flex:none}.tile[_ngcontent-%COMP%]   .clm-overline[_ngcontent-%COMP%]{margin-bottom:2px}.tile[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;font-weight:500;font-size:14px;letter-spacing:.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.weather-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(12,1fr)}.wh[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 0;border-radius:6px;font-size:12px;letter-spacing:.2px}.wh[_ngcontent-%COMP%]   .clm-cap[_ngcontent-%COMP%]{font-size:10px;letter-spacing:.4px}.wh.in[_ngcontent-%COMP%]{background:#efefd8}.info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.tbl-wrap[_ngcontent-%COMP%]{border:1px solid #dcdcdd;border-radius:6px;overflow:hidden}.tbl-wrap[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{background:#f2f2f2}.tbl-wrap[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .tbl-wrap[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:9px 8px 9px 16px}.tbl-wrap[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:last-child   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:0}.strong[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.1px}.eq-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;border:1px solid #dcdcdd;border-radius:6px;padding:10px 12px}.eq-row[_ngcontent-%COMP%] > .grow[_ngcontent-%COMP%]{flex:1;min-width:0}.eq-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.1px;display:block}.eq-icon[_ngcontent-%COMP%]{width:32px;height:32px;color:#54545d;flex:none}.kv4[_ngcontent-%COMP%]{grid-template-columns:150px 1fr 150px 1fr}.cmt[_ngcontent-%COMP%]{display:flex;gap:12px}.cmt[_ngcontent-%COMP%] > .grow[_ngcontent-%COMP%]{flex:1;min-width:0}.cmt[_ngcontent-%COMP%] + .cmt[_ngcontent-%COMP%]{border-top:1px solid #dcdcdd;padding-top:12px}.add-comment[_ngcontent-%COMP%]{margin-top:12px}.add-comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:72px;resize:vertical}.post-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.counter[_ngcontent-%COMP%]{flex:1;font-size:10px;letter-spacing:.4px;color:#0009;text-align:right}@media(max-width:900px){.tiles[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.weather-row[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}.kv4[_ngcontent-%COMP%]{grid-template-columns:120px 1fr}}`]})};var _o=[`head`];var yo=n=>[`/group`,`wp`,n];var wo=(n,a)=>[`/shipment`,n,a];var xo=(n,a)=>a.key;function Co(n,a){if(n&1&&(sn$1(0,`span`)(1,`mat-icon`),wi(2,`folder`),ln$1(),sn$1(3,`a`,17),wi(4),ln$1()()),n&2){let t=a;yt(3),UD(`routerLink`,FA(2,yo,t.id)),yt(),md(t.title)}}function ko(n,a){if(n&1&&(sn$1(0,`span`,18),wi(1),ln$1()),n&2){let t=hd().$implicit,e=hd(2);yt(),md(e.counts()[t.key])}}function So(n,a){if(n&1&&(sn$1(0,`a`,14),wi(1),Co$1(2,ko,2,1,`span`,18),ln$1()),n&2){let t=a.$implicit,e=hd(),i=hd();UD(`routerLink`,LA(4,wo,e.id,t.key))(`active`,i.activeTab()===t.key),yt(),Si(` `,t.label,` `),yt(),Eo(t.key!==`overview`?2:-1)}}function Do(n,a){if(n&1&&Ei(0,`clm-documents-tab`,16),n&2){let t=hd();UD(`shipment`,t)}}function Mo(n,a){if(n&1&&Ei(0,`clm-annotations-tab`,16),n&2){let t=hd();UD(`shipment`,t)}}function To(n,a){if(n&1&&Ei(0,`clm-activity-tab`,16),n&2){let t=hd();UD(`shipment`,t)}}function Io(n,a){if(n&1&&Ei(0,`clm-overview-tab`,16),n&2){let t=hd();UD(`shipment`,t)}}function Ro(n,a){if(n&1){let t=Xh();sn$1(0,`div`,3,0)(2,`div`,4)(3,`button`,5),Xe$1(`click`,function(){bl(t);let i=hd();return _l(i.back())}),sn$1(4,`mat-icon`),wi(5,`arrow_back`),ln$1()(),sn$1(6,`div`,6)(7,`div`,7)(8,`h1`),wi(9),ln$1(),Ei(10,`clm-status-pill`,8),ln$1(),sn$1(11,`div`,9)(12,`span`)(13,`mat-icon`),wi(14,`tag`),ln$1(),wi(15),ln$1(),sn$1(16,`span`)(17,`mat-icon`),wi(18,`person`),ln$1(),wi(19),VA(20,`clmDate`),ln$1(),sn$1(21,`span`)(22,`mat-icon`),wi(23,`location_on`),ln$1(),wi(24),ln$1(),Co$1(25,Co,5,4,`span`),ln$1()(),sn$1(26,`button`,10),Xe$1(`click`,function(){bl(t);let i=hd();return _l(i.actions.print())}),sn$1(27,`mat-icon`),wi(28,`print`),ln$1(),wi(29,`Print`),ln$1(),sn$1(30,`span`,11)(31,`button`,12),Xe$1(`click`,function(){let i=bl(t),l=hd();return _l(l.actions.edit(i))}),sn$1(32,`mat-icon`),wi(33,`edit`),ln$1(),wi(34,`Edit shipment `),ln$1()()(),sn$1(35,`nav`,13),HN(36,So,3,7,`a`,14,xo),ln$1()(),sn$1(38,`div`,15)(39,`mat-tab-nav-panel`,null,1),Co$1(41,Do,1,1,`clm-documents-tab`,16)(42,Mo,1,1,`clm-annotations-tab`,16)(43,To,1,1,`clm-activity-tab`,16)(44,Io,1,1,`clm-overview-tab`,16),ln$1(),Ei(45,`clm-details-panel`,16),ln$1()}if(n&2){let t,e,i=a,l=JN(40),s=hd();yt(9),md(i.name),yt(),UD(`status`,i.status),yt(5),md(i.no),yt(4),sC(`Created `,UA(20,17,i.created,`time`),` by `,s.creator().name),yt(5),aC(``,i.building,` · `,i.floor,` · `,i.zone),yt(),Eo((t=s.workingPackage())?25:-1,t),yt(5),UD(`matTooltip`,s.locked()?`Completed or canceled shipments can’t be edited`:``),yt(),UD(`disabled`,s.locked()),yt(4),UD(`tabPanel`,l)(`disableRipple`,!0),yt(),$N(s.tabs),yt(2),Jh(`--%NS%clm-panel-top`,s.panelTop(),`px`),yt(3),Eo((e=s.activeTab())===`documents`?41:e===`annotations`?42:e===`activity`?43:44),yt(4),UD(`shipment`,i)}}function No(n,a){n&1&&(sn$1(0,`div`,2)(1,`mat-icon`),wi(2,`search_off`),ln$1(),sn$1(3,`h2`),wi(4,`Shipment not found`),ln$1(),sn$1(5,`a`,19),wi(6,`Back to Shipments`),ln$1()())}var ha=[{key:`overview`,label:`Overview`},{key:`documents`,label:`Documents & photos`},{key:`annotations`,label:`Annotations`},{key:`activity`,label:`Activity`}];var ua=class n{id=Mi.required();tab=Mi(`overview`);data=f($S);backNav=f(c);actions=f(ut);tabs=ha;shipment=Fe(()=>this.data.shipment(this.id()));activeTab=Fe(()=>ha.find(a=>a.key===this.tab())?.key??`overview`);workingPackage=Fe(()=>{let a=this.shipment();return a&&this.data.wp(a.wpId)});creator=Fe(()=>this.data.person(this.shipment()?.createdBy));locked=Fe(()=>{let a=this.shipment();return!!a&&VJ(a.status)});counts=Fe(()=>{let a=this.shipment();return{overview:0,documents:a?a.docs.length+a.photos.length:0,annotations:a?.annotations.length??0,activity:a?.activity.length??0}});head=_5(`head`);panelTop=Y(24);constructor(){gr(a=>{let t=this.head()?.nativeElement;if(!t)return;let e=new ResizeObserver(()=>this.panelTop.set(t.offsetHeight+24));e.observe(t),a(()=>e.disconnect())})}back(){this.backNav.back()}static ɵfac=function(t){return new(t||n)};static ɵcmp=he({type:n,selectors:[[`clm-shipment-details-page`]],viewQuery:function(t,e){t&1&&qD(e.head,_o,5),t&2&&QN()},inputs:{id:[1,`id`],tab:[1,`tab`]},decls:2,vars:1,consts:[[`head`,``],[`tabPanel`,``],[1,`not-found`],[1,`sticky-head`],[1,`page-head`],[`mat-icon-button`,``,`matTooltip`,`Back`,`aria-label`,`Back`,1,`back`,3,`click`],[1,`grow`],[1,`title-row`],[3,`status`],[1,`meta`],[`mat-button`,``,3,`click`],[3,`matTooltip`],[`mat-stroked-button`,``,3,`click`,`disabled`],[`mat-tab-nav-bar`,``,`mat-stretch-tabs`,`false`,`aria-label`,`Shipment sections`,3,`tabPanel`,`disableRipple`],[`mat-tab-link`,``,3,`routerLink`,`active`],[1,`split`],[3,`shipment`],[3,`routerLink`],[1,`clm-count`],[`mat-stroked-button`,``,`routerLink`,`/shipments`]],template:function(t,e){if(t&1&&Co$1(0,Ro,46,20)(1,No,7,0,`div`,2),t&2){let i;Eo((i=e.shipment())?0:1,i)}},dependencies:[cS,cF,_S,sF,tJ,eJ,Li,sn,Bi,mn,Bee,zF,y,Ve,Xe,We,Qe,$e,WS],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100%;padding:0 24px 20px}.sticky-head[_ngcontent-%COMP%]{position:sticky;top:0;z-index:4;background:#fff;margin:0 -24px;padding:0 24px;border-bottom:2px solid #dcdcdd}.page-head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:14px 0 6px}.page-head[_ngcontent-%COMP%] > .grow[_ngcontent-%COMP%]{flex:1;min-width:0}.title-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}h1[_ngcontent-%COMP%]{margin:0;font-size:24px;line-height:normal;font-weight:400;letter-spacing:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.meta[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;margin-top:4px;color:#0009;font-size:12px;line-height:16px;letter-spacing:.2px}.meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px}.meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:#54545d}.meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#7c7900;text-decoration:none}.back[_ngcontent-%COMP%]{--%NS%mat-icon-button-icon-color: rgba(0, 0, 0, .87);flex:none;margin-left:-6px}nav[_ngcontent-%COMP%]{--%NS%mat-tab-divider-height: 0;margin-bottom:-2px;padding-top:4px}.mat-mdc-tab-link[_ngcontent-%COMP%]{flex-grow:0;min-width:0;padding:0 16px;text-transform:uppercase;opacity:1}.mat-mdc-tab-link[_ngcontent-%COMP%]:hover{background:#f5f5e6}.mat-mdc-tab-link.mdc-tab--active[_ngcontent-%COMP%]{background:#efefd8}.mat-mdc-tab-link[_ngcontent-%COMP%]   .clm-count[_ngcontent-%COMP%]{margin-left:8px;letter-spacing:.2px;text-transform:none}.mat-mdc-tab-link.mdc-tab--active[_ngcontent-%COMP%]   .clm-count[_ngcontent-%COMP%]{background:#969300;color:#fff}.split[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 336px;gap:16px;align-items:start;flex:1;margin-top:24px}.not-found[_ngcontent-%COMP%]{flex:1;display:grid;place-items:center;align-content:center;gap:6px;text-align:center;color:#0009}.not-found[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:#c0be69}.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000000de;font-size:20px;font-weight:500;margin:6px 0}@media(max-width:1024px){.split[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr)}}`]})};export{ua as ShipmentDetailsPage};