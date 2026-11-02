import{$t as Q,A as Dr,An as US,Bn as Wn,Br as fa,C as Bee,Cn as Te$1,Ct as Le$1,D as Co,Dn as UD,Dr as cf,Dt as Ma,Ei as ne,En as UA,F as F$2,Fi as qi,Fn as W$1,Fr as dte,Gi as sn,Gr as go,Gt as Oa,Hi as sF,Hr as ft$1,Ii as qn,Ir as eJ,It as Nd,J as Gy,Ji as tJ,Jn as Y$2,Jr as hd,K as Gn,Ki as st,Kn as Xe,M as Ei,Mi as pd,Mr as dQ,Mt,N as Eo,Ni as qD,Nn as VS,Nr as dn,O as D,Ot as Me,Pr as dt$1,Pt as NK,Q as HN,Qi as ud,Qr as ig,R as FD,Ri as rJ,Rn as WS,Rr as f,S as Be$1,Sr as cF,T as C$1,Ti as nI,Tn as Tt,Tt as M,Ur as gS,V as Fe$2,Vi as sC,Vr as fe,W as GP,Wn as XP,Wr as gd,Wt as OT,Xr as hn,Yi as tg,Yn as YJ,Yr as he,Zn as ZJ,_ as BA,_a as z$1,_i as lO,_r as bl,a as $S,aa as wi,ai as ja,an as Qt,ar as _S,b as BS,ba as zR,br as bt,ca as x,ci as jn,cn as RK,ct as J$1,di as kK,dn as RT,dt as Je,ea as un,ei as ite,f as Aa,fa as y5,fn as Ra,fr as ae,ft as Jh,g as B,ga as yt$1,gn as Si,gr as be$1,gt as Ke,h as At$1,ha as yn,hn as Sa,i as $N,ia as vr,ii as jS,ir as _5,it as Ie$2,jn as VA,jr as dO,jt as Mr,ki as ot,kn as UN,kt as Mi,li as k$1,lt as JN,mn as SS,mr as at,mt as K,na as v,ni as jD,nn as QP,o as $t,oa as wo,on as R$3,or as _e,ot as Ir,pa as yS,pi as ka,pt as Jm,q as Gt$1,qn as Xh,rn as Qh,s as A,sr as _l,st as It,t as $0,ti as ix,tn as QN,u as AK,ua as xL,un as RS,ur as aC,ut as JP,va as zF,vi as ld,vr as bn,w as Bn,wi as md,wn as Tg,wr as cS,x as Bd,xi as m,xn as TK,y as BN,yi as ln,yn as T$2,zi as rt,zn as Wg,zt as O$1}from"./chunk-BT_UvFLf.js";var ft=(()=>{class a{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}isSignalErrorState(t){if(!t)return!1;let e=t().invalid(),n=t().touched();return e&&n}static ɵfac=function(e){return new(e||a)};static ɵprov=D({token:a,factory:a.ɵfac})}return a})();var dt=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(o,t,e,n,r){this._defaultMatcher=o,this._parentFormGroup=e,this._parentForm=n,this._stateChanges=r,t?vr(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let o=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==o&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(o){if(this.formField&&o?.isSignalErrorState)return o.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,e=this.ngControl?this.ngControl.control:null;return o?.isErrorState(e,t)??!1}};var mt=(()=>{class a{_animationsDisabled=at();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(e){return new(e||a)};static ɵcmp=he({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(e,n){e&2&&_e(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(e,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return a})();var xt=new v(`MAT_OPTION_PARENT_COMPONENT`);var kt=new v(`MatOptgroup`);var P$2=class{source;isUserInput;constructor(o,t=!1){this.source=o,this.isUserInput=t}};var pt=(()=>{class a{_element=f(B);_changeDetectorRef=f(ot);_parent=f(xt,{optional:!0});group=f(kt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=f(At$1).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=Y$2(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new W$1;_text;_stateChanges=new C$1;constructor(){let t=f(Tt);t.load(gS),t.load(Bd),this._signalDisableRipple=!!this._parent&&vr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let n=this._getHostElement();typeof n.focus==`function`&&n.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!hn(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new P$2(this,t))}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`text`],e=[[[`mat-icon`]],`*`],n=[`mat-icon`,`*`];function r(c,d){if(c&1&&Ei(0,`mat-pseudo-checkbox`,1),c&2){let i=hd();UD(`disabled`,i.disabled)(`state`,i.selected?`checked`:`unchecked`)}}function s(c,d){if(c&1&&Ei(0,`mat-pseudo-checkbox`,3),c&2){let i=hd();UD(`disabled`,i.disabled)}}function x(c,d){if(c&1&&(sn(0,`span`,4),wi(1),ln()),c&2){let i=hd();yt$1(),Si(`(`,i.group.label,`)`)}}return he({type:a,selectors:[[`mat-option`]],viewQuery:function(d,i){if(d&1&&Bn(t,7),d&2){let k;dn(k=un())&&(i._text=k.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(d,i){d&1&&Xe(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(ht){return i._handleKeydown(ht)}),d&2&&(fa(`id`,i.id),Te$1(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),_e(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,ae]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:n,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(d,i){d&1&&(Dr(e),Co(0,r,1,2,`mat-pseudo-checkbox`,1),Mt(1),sn(2,`span`,2,0),Mt(4,1),ln(),Co(5,s,1,1,`mat-pseudo-checkbox`,3),Co(6,x,2,1,`span`,4),Ei(7,`div`,5)),d&2&&(Eo(i.multiple?0:-1),yt$1(5),Eo(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),yt$1(),Eo(i.group&&i.group._inert?6:-1),yt$1(),UD(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[mt,dQ],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();function Gt(a,o,t){if(t.length){let e=o.toArray(),n=t.toArray(),r=0;for(let s=0;s<a+1;s++)e[s].group&&e[s].group===n[r]&&r++;return r}return 0}function Ut(a,o,t,e){return a<t?a:a+o>t+e?Math.max(0,a-e+o):t}var F$1=new v(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>f(gd)});var p=`Method not implemented`;var I$1=class{locale;_localeChanges=new C$1;localeChanges=this._localeChanges;setTime(o,t,e,n){throw new Error(p)}getHours(o){throw new Error(p)}getMinutes(o){throw new Error(p)}getSeconds(o){throw new Error(p)}parseTime(o,t){throw new Error(p)}addSeconds(o,t){throw new Error(p)}getValidDateOrNull(o){return this.isDateInstance(o)&&this.isValid(o)?o:null}deserialize(o){return o==null||this.isDateInstance(o)&&this.isValid(o)?o:this.invalid()}setLocale(o){this.locale=o,this._localeChanges.next()}compareDate(o,t){return this.getYear(o)-this.getYear(t)||this.getMonth(o)-this.getMonth(t)||this.getDate(o)-this.getDate(t)}compareTime(o,t){return this.getHours(o)-this.getHours(t)||this.getMinutes(o)-this.getMinutes(t)||this.getSeconds(o)-this.getSeconds(t)}sameDate(o,t){if(o&&t){let e=this.isValid(o),n=this.isValid(t);return e&&n?!this.compareDate(o,t):e==n}return o==t}sameTime(o,t){if(o&&t){let e=this.isValid(o),n=this.isValid(t);return e&&n?!this.compareTime(o,t):e==n}return o==t}clampDate(o,t,e){return t&&this.compareDate(o,t)<0?t:e&&this.compareDate(o,e)>0?e:o}};var vt=new v(`mat-date-formats`);var ut=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=J$1({type:a});static ɵinj=Q({imports:[st]})}return a})();var oe=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=J$1({type:a});static ɵinj=Q({imports:[yS,ut,pt,st]})}return a})();var yt=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var _t=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function V$1(a,o){let t=Array(a);for(let e=0;e<a;e++)t[e]=o(e);return t}var me=(()=>{class a extends I$1{_matDateLocale=f(F$1,{optional:!0});constructor(){super();let t=f(F$1,{optional:!0});t!==void 0&&(this._matDateLocale=t),super.setLocale(this._matDateLocale)}getYear(t){return t.getFullYear()}getMonth(t){return t.getMonth()}getDate(t){return t.getDate()}getDayOfWeek(t){return t.getDay()}getMonthNames(t){let e=new Intl.DateTimeFormat(this.locale,{month:t,timeZone:`utc`});return V$1(12,n=>this._format(e,new Date(2017,n,1)))}getDateNames(){let t=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return V$1(31,e=>this._format(t,new Date(2017,0,e+1)))}getDayOfWeekNames(t){let e=new Intl.DateTimeFormat(this.locale,{weekday:t,timeZone:`utc`});return V$1(7,n=>this._format(e,new Date(2017,0,n+1)))}getYearName(t){let e=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(e,t)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let t=new Intl.Locale(this.locale),e=(t.getWeekInfo?.()||t.weekInfo)?.firstDay??0;return e===7?0:e}return 0}getNumDaysInMonth(t){return this.getDate(this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+1,0))}clone(t){return new Date(t.getTime())}createDate(t,e,n){let r=this._createDateWithOverflow(t,e,n);return r.getMonth(),r}today(){return/* @__PURE__ */ new Date}parse(t,e){return typeof t==`number`?new Date(t):t?new Date(Date.parse(t)):null}format(t,e){if(!this.isValid(t))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let n=new Intl.DateTimeFormat(this.locale,A(m({},e),{timeZone:`utc`}));return this._format(n,t)}addCalendarYears(t,e){return this.addCalendarMonths(t,e*12)}addCalendarMonths(t,e){let n=this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+e,this.getDate(t));return this.getMonth(n)!=((this.getMonth(t)+e)%12+12)%12&&(n=this._createDateWithOverflow(this.getYear(n),this.getMonth(n),0)),n}addCalendarDays(t,e){return this._createDateWithOverflow(this.getYear(t),this.getMonth(t),this.getDate(t)+e)}toIso8601(t){return[t.getUTCFullYear(),this._2digit(t.getUTCMonth()+1),this._2digit(t.getUTCDate())].join(`-`)}deserialize(t){if(typeof t==`string`){if(!t)return null;if(yt.test(t)){let e=new Date(t);if(this.isValid(e))return e}}return super.deserialize(t)}isDateInstance(t){return t instanceof Date}isValid(t){return!isNaN(t.getTime())}invalid(){return/* @__PURE__ */ new Date(NaN)}setTime(t,e,n,r){let s=this.clone(t);return s.setHours(e,n,r,0),s}getHours(t){return t.getHours()}getMinutes(t){return t.getMinutes()}getSeconds(t){return t.getSeconds()}parseTime(t,e){if(typeof t!=`string`)return t instanceof Date?new Date(t.getTime()):null;let n=t.trim();if(n.length===0)return null;let r=this._parseTimeString(n);if(r===null){let s=n.replace(/[^0-9:(AM|PM)]/gi,``).trim();s.length>0&&(r=this._parseTimeString(s))}return r||this.invalid()}addSeconds(t,e){return new Date(t.getTime()+e*1e3)}_createDateWithOverflow(t,e,n){let r=/* @__PURE__ */ new Date;return r.setFullYear(t,e,n),r.setHours(0,0,0,0),r}_2digit(t){return(`00`+t).slice(-2)}_format(t,e){let n=/* @__PURE__ */ new Date;return n.setUTCFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setUTCHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t.format(n)}_parseTimeString(t){let e=t.toUpperCase().match(_t);if(e){let n=parseInt(e[1]),r=parseInt(e[2]),s=e[3]==null?void 0:parseInt(e[3]),x=e[4];if(n===12?n=x===`AM`?0:n:x===`PM`&&(n+=12),L(n,0,23)&&L(r,0,59)&&(s==null||L(s,0,59)))return this.setTime(this.today(),n,r,s||0)}return null}static ɵfac=function(e){return new(e||a)};static ɵprov=D({token:a,factory:a.ɵfac,autoProvided:!1})}return a})();function L(a,o,t){return!isNaN(a)&&a>=o&&a<=t}var C=`clm-shipment-draft`;var Pe$1=[`Date`,`Materials`,`Transport`,`Time slot`,`Other info`,`Overview`];function k(n,t={}){return m({mode:`new`,step:1,maxStep:1,name:``,sender:`Team pRED`,express:!1,date:``,wpId:null,wpLocked:!1,recipient:``,building:``,floor:``,zone:``,materials:[],showAllMaterials:!1,comment:``,vehicle:``,vehicles:1,gate:Wg[0],plate:``,phone:``,up:``,start:``,end:``,equipment:[],createdBy:`p1`,onsite:`p2`,orderResp:``,deliveryResp:``,docs:[],photos:[],origin:``,km:``,multi:!1,modes:[`Truck`],dirty:!1,weekStart:rJ(bn(n,1))},t)}function Oe$1(n,t){return A(m({},n),{wpId:t.id,sender:t.sender,recipient:t.recipient,building:t.building,floor:t.floor,zone:t.zone})}function T$1(n,t){let e=structuredClone(t);return A(m({},n),{name:e.name,sender:e.sender,wpId:e.wpId,recipient:e.recipient,building:e.building,floor:e.floor,zone:e.zone,materials:e.materials,comment:``,vehicle:e.vehicle,vehicles:e.vehicles||1,gate:e.gate,plate:e.plate||``,phone:e.phone||``,up:e.up,equipment:e.equipment,onsite:e.onsite||`p2`,orderResp:e.orderResp||``,deliveryResp:e.deliveryResp||``,origin:e.origin,km:String(e.km||``),modes:e.modes||[`Truck`],multi:(e.modes||[]).length>1})}var Ee$1=n=>n.split(` `).map(t=>t[0]).slice(0,2).join(``).toUpperCase();var I=class n{transform(t){return Ee$1(t??``)}static ɵfac=function(e){return new(e||n)};static ɵpipe=ud({name:`clmInitials`,type:n,pure:!0})};function Ie$1(n,t){if(n&1&&jn(0,`img`,1),n&2){let e=hd();fa(`src`,`fig/`+e.icon()+`.svg`)}}var R$2=class n{label=Mi.required();count=Mi(null);tone=Mi(`olive`);checked=Mi(!1);icon=Mi();pressed=y5();pad(t){return String(t).padStart(2,`0`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=he({type:n,selectors:[[`clm-check-chip`]],inputs:{label:[1,`label`],count:[1,`count`],tone:[1,`tone`],checked:[1,`checked`],icon:[1,`icon`]},outputs:{pressed:`pressed`},decls:4,vars:8,consts:[[`type`,`button`,3,`click`],[`width`,`20`,`height`,`20`,`alt`,``,3,`src`]],template:function(e,i){e&1&&(It(0,`button`,0),pd(`click`,function(){return i.pressed.emit()}),Co(1,Ie$1,1,1,`img`,1),It(2,`span`),wi(3),$t()()),e&2&&(wo(i.tone()),_e(`on`,i.checked()),Te$1(`aria-pressed`,i.checked()),yt$1(),Eo(i.icon()?1:-1),yt$1(2),sC(``,i.count()===null?``:i.pad(i.count())+` `,``,i.label()))},styles:[`button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 16px 0 12px;border-radius:var(--%NS%radius-small);border:1px solid var(--%NS%color-border-default);background:#fff;font:500 14px/18px Roboto,sans-serif;letter-spacing:.1px;white-space:nowrap;cursor:pointer;transition:background .12s,border-color .12s}button[_ngcontent-%COMP%]:hover{background:var(--%NS%color-action-outline-hover)}button[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%color-border-focus);outline-offset:2px}img[_ngcontent-%COMP%]{display:block;flex:none}.grey[_ngcontent-%COMP%]{color:#474752}.grey.on[_ngcontent-%COMP%]{background:#f7f7f7;border-color:#474752;color:#474752}.olive[_ngcontent-%COMP%]{color:var(--%NS%color-action-primary)}.olive.on[_ngcontent-%COMP%]{background:var(--%NS%color-surface-selected);border-color:var(--%NS%color-olive-700);color:var(--%NS%color-olive-700)}.blue[_ngcontent-%COMP%]{color:var(--%NS%color-data-12)}.blue.on[_ngcontent-%COMP%]{background:#2e60aa33;border-color:#1e3f8a;color:#1e3f8a}.red[_ngcontent-%COMP%]{color:var(--%NS%color-status-error-fg)}.red.on[_ngcontent-%COMP%]{background:#fbedeb;border-color:#8a1500;color:#8a1500}.green[_ngcontent-%COMP%]{color:#2f7d52}.green.on[_ngcontent-%COMP%]{background:#e6f4ec;border-color:#1e5a3a;color:#1e5a3a}`]})};var Fe$1=(n,t)=>t.id;function Re(n,t){if(n&1){let e=Xh();sn(0,`div`,4)(1,`mat-icon`),wi(2,`edit_document`),ln(),sn(3,`div`,1)(4,`b`),wi(5,`Continue your draft?`),ln(),sn(6,`p`),wi(7),ln()(),sn(8,`button`,16),Xe(`click`,function(){bl(e);let l=hd();return _l(l.discardDraft())}),wi(9,`Discard`),ln(),sn(10,`button`,17),Xe(`click`,function(){let l=bl(e),d=hd();return _l(d.continueDraft(l))}),wi(11,`Continue draft`),ln()()}if(n&2){let e=t,i=hd();yt$1(7),aC(` `,e.name||`Untitled shipment`,` · step `,e.step,` of 6 · `,i.steps[e.step-1],` `)}}function Ve(n,t){if(n&1){let e=Xh();sn(0,`clm-check-chip`,18),Xe(`pressed`,function(){let l=bl(e).$implicit,d=hd();return _l(d.pick(l))}),ln()}if(n&2){let e=t.$implicit,i=hd();UD(`label`,i.sources()[e].label)(`checked`,i.source()===e)}}function ze$1(n,t){if(n&1){let e=Xh();sn(0,`div`,19)(1,`b`,20),wi(2),ln(),sn(3,`div`,21)(4,`div`)(5,`mat-icon`),wi(6,`location_on`),ln(),sn(7,`span`),wi(8,`Unloading point`),ln(),sn(9,`em`),wi(10),ln()(),sn(11,`div`)(12,`mat-icon`),wi(13,`apartment`),ln(),sn(14,`span`),wi(15,`Building`),ln(),sn(16,`em`),wi(17),ln()(),sn(18,`div`)(19,`mat-icon`),wi(20,`layers`),ln(),sn(21,`span`),wi(22,`Floor`),ln(),sn(23,`em`),wi(24),ln()()(),sn(25,`div`,22)(26,`span`,23),wi(27),VA(28,`clmInitials`),ln(),sn(29,`span`,1)(30,`b`,24),wi(31),ln(),sn(32,`small`),wi(33),VA(34,`clmDate`),ln()()(),sn(35,`button`,25),Xe(`click`,function(){let l=bl(e).$implicit,d=hd(2);return _l(d.copy(l))}),sn(36,`mat-icon`),wi(37,`content_copy`),ln(),wi(38,`Duplicate `),ln()()}if(n&2){let e=t.$implicit,i=hd(2).person(e.createdBy);yt$1(),UD(`matTooltip`,e.name),yt$1(),md(e.name),yt$1(8),md(e.up),yt$1(7),md(e.building),yt$1(7),md(e.floor),yt$1(3),md(BA(28,8,i.name)),yt$1(4),md(i.name),yt$1(2),Si(`Created `,BA(34,10,e.created))}}function Ae(n,t){if(n&1&&(sn(0,`div`,12),HN(1,ze$1,39,12,`div`,19,Fe$1),ln()),n&2){let e=hd();yt$1(),$N(e.cards())}}function Be(n,t){n&1&&(sn(0,`div`,13),wi(1,`No shipments yet`),ln())}function qe(n,t){if(n&1){let e=Xh();sn(0,`button`,26),Xe(`click`,function(){bl(e);let l=hd();return _l(l.all.set(!l.all()))}),wi(1),ln()}if(n&2){let e=hd();yt$1(),Si(` `,e.all()?`Show less`:e.seeAllLabel(),` `)}}var V=class n{ref=f(ja);store=f($S);saved=Y$2(f(lO).saved);steps=Pe$1;source=Y$2(`freq`);all=Y$2(!1);sources=Fe$2(()=>{let t=this.store.shipments(),e=this.store.currentUserId,i=(d,w)=>w.created.localeCompare(d.created),l={};return t.forEach(d=>{l[d.name]=(l[d.name]||0)+1}),{freq:{label:`Frequently used`,list:$$1([...t].sort((d,w)=>l[w.name]-l[d.name]||i(d,w)))},mine:{label:`From your shipments`,list:$$1(t.filter(d=>d.createdBy===e).sort(i))},team:{label:`From your team mates`,list:$$1(t.filter(d=>d.createdBy!==e).sort(i))}}});sourceKeys=[`freq`,`mine`,`team`];current=Fe$2(()=>this.sources()[this.source()]);cards=Fe$2(()=>this.current().list.slice(0,this.all()?12:3));seeAllLabel=Fe$2(()=>`See all `+this.current().label.toLowerCase().replace(/^from /,``));person(t){return this.store.person(t)}pick(t){this.source.set(t),this.all.set(!1)}startNew(){this.ref.close({kind:`new`})}copy(t){this.ref.close({kind:`copy`,shipmentId:t.id})}continueDraft(t){this.ref.close({kind:`draft`,draft:t})}discardDraft(){US(C),this.saved.set(null)}static ɵfac=function(e){return new(e||n)};static ɵcmp=he({type:n,selectors:[[`clm-start-shipment-dialog`]],hostAttrs:[1,`clm-dlg`],decls:33,vars:3,consts:[[1,`clm-dlg-head`],[1,`grow`],[`mat-dialog-title`,``],[`mat-icon-button`,``,`mat-dialog-close`,``,`aria-label`,`Close`],[1,`clm-banner`,`info`,`draft`],[1,`hs-new`],[1,`hs-plus`],[`mat-flat-button`,``,3,`click`],[1,`hs-hist`],[1,`hs-h`],[1,`hs-pills`],[`tone`,`olive`,3,`label`,`checked`],[1,`hcards`],[1,`clm-cap`],[1,`hs-all`],[1,`end`],[`mat-button`,``,1,`clm-btn-sm`,3,`click`],[`mat-flat-button`,``,1,`clm-btn-sm`,3,`click`],[`tone`,`olive`,3,`pressed`,`label`,`checked`],[1,`hcard`],[1,`hc-n`,`clm-ell`,3,`matTooltip`],[1,`hc-b`],[1,`hc-by`],[1,`clm-avatar`,`sm`],[1,`clm-ell`],[1,`hc-dup`,3,`click`],[1,`hs-all`,3,`click`]],template:function(e,i){if(e&1&&(sn(0,`div`,0)(1,`div`,1)(2,`h2`,2),wi(3,`How would you like to start?`),ln()(),sn(4,`button`,3)(5,`mat-icon`),wi(6,`close`),ln()()(),sn(7,`mat-dialog-content`),Co(8,Re,12,3,`div`,4),sn(9,`div`,5)(10,`span`,6)(11,`mat-icon`),wi(12,`add`),ln()(),sn(13,`div`,1)(14,`b`),wi(15,`Start from scratch`),ln(),sn(16,`p`),wi(17,`Create a new shipment step by step. You pick the working package in the first step.`),ln()(),sn(18,`button`,7),Xe(`click`,function(){return i.startNew()}),wi(19,`Create new`),ln()(),sn(20,`div`,8)(21,`div`,9)(22,`b`),wi(23,`Start from a previous shipment`),ln(),sn(24,`p`),wi(25,` Copy the details of a shipment you or your team created. You pick a new date and time slot. `),ln()(),sn(26,`div`,10),HN(27,Ve,1,2,`clm-check-chip`,11,UN),ln(),Co(29,Ae,3,0,`div`,12)(30,Be,2,0,`div`,13),Co(31,qe,2,1,`button`,14),ln()(),Ei(32,`div`,15)),e&2){let l;yt$1(8),Eo((l=i.saved())?8:-1,l),yt$1(19),$N(i.sourceKeys),yt$1(2),Eo(i.cards().length?29:30),yt$1(2),Eo(i.current().list.length>3?31:-1)}},dependencies:[kK,TK,NK,AK,cF,_S,sF,tJ,eJ,Bee,zF,R$2,WS,I],styles:[`@charset "UTF-8";.end[_ngcontent-%COMP%]{height:24px}.draft[_ngcontent-%COMP%]{margin-bottom:12px;align-items:center}.draft[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%]{flex:1}.hs-new[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:16px 20px;border:1px dashed var(--%NS%color-action-primary);border-radius:var(--%NS%radius-large);background:var(--%NS%color-action-outline-hover)}.hs-new[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%]{flex:1}.hs-plus[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background:var(--%NS%color-action-primary);color:#fff;display:grid;place-items:center;flex:none}.hs-new[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .hs-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;font-size:16px;line-height:22px;font-weight:500;letter-spacing:.15px;color:var(--%NS%color-text-primary)}.hs-new[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .hs-h[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;line-height:18px;letter-spacing:.2px;color:var(--%NS%color-text-secondary);margin-top:2px}.hs-hist[_ngcontent-%COMP%]{margin-top:16px;padding:16px 20px 18px;border-radius:var(--%NS%radius-large);background:var(--%NS%color-surface-subtle);display:flex;flex-direction:column;gap:14px}.hs-pills[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.hcards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.hcard[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--%NS%color-border-default);border-radius:var(--%NS%radius-large);display:flex;flex-direction:column;overflow:hidden}.hc-n[_ngcontent-%COMP%]{display:block;font-size:14px;line-height:20px;font-weight:500;letter-spacing:.1px;color:var(--%NS%color-text-primary);padding:12px 14px 10px}.hc-b[_ngcontent-%COMP%]{background:var(--%NS%color-surface-subtle);padding:8px 14px;display:flex;flex-direction:column;gap:6px}.hc-b[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:12px;line-height:16px;min-width:0}.hc-b[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:var(--%NS%color-icon-default)}.hc-b[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--%NS%color-text-secondary)}.hc-b[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:normal;font-weight:500;color:var(--%NS%color-text-primary);margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hc-by[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 14px;min-width:0}.hc-by[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%]{flex:1;min-width:0}.hc-by[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;font-size:12px;line-height:16px;font-weight:500;color:var(--%NS%color-text-primary)}.hc-by[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;font-size:11px;line-height:14px;color:var(--%NS%color-text-secondary)}.hc-dup[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:6px;height:36px;margin-top:auto;border:0;border-top:1px solid var(--%NS%color-border-default);background:none;color:var(--%NS%color-olive-600);font:500 13px/normal Roboto,sans-serif;letter-spacing:.4px;cursor:pointer;transition:background .12s}.hc-dup[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.hc-dup[_ngcontent-%COMP%]:hover{background:var(--%NS%color-action-outline-hover)}.hs-all[_ngcontent-%COMP%]{align-self:flex-start;color:var(--%NS%color-olive-600);font:500 14px/normal Roboto,sans-serif;padding:4px 6px;margin:-4px 0 -4px -6px;border-radius:var(--%NS%radius-small);border:0;background:none;cursor:pointer}.hs-all[_ngcontent-%COMP%]:hover{background:var(--%NS%color-action-outline-hover)}`]})};function $$1(n){let t=/* @__PURE__ */ new Set;return n.filter(e=>!t.has(e.name)&&!!t.add(e.name))}var Ne$1=class n{store=f($S);router=f(qi);dialog=f(ig);toast=f(RS);today=f(VS);draft=Y$2(null);start(t={}){if(t.edit){let e=this.store.shipment(t.edit);if(!e)return;let i=T$1(k(this.today,{mode:`edit`,editId:e.id,maxStep:6,date:e.date,start:e.start,end:e.end,docs:[...e.docs],photos:[...e.photos],weekStart:rJ(e.date)}),e);this.open(i);return}if(t.duplicate){let e=this.store.shipment(t.duplicate);if(!e)return;this.open(A(m({},T$1(k(this.today),e)),{name:e.name+` (copy)`})),this.toast.show(`Copied from ${e.no} \xB7 pick a new date and time slot`);return}if(t.wpId){let e=this.store.wp(t.wpId);e&&this.open(Oe$1(k(this.today,{wpLocked:!0}),e));return}this.dialog.open(V,{width:`760px`,maxWidth:`calc(100vw - 48px)`,autoFocus:!1,data:{saved:this.savedDraft()}}).afterClosed().subscribe(e=>{if(e&&(e.kind===`new`&&this.open(k(this.today)),e.kind===`draft`&&this.open(A(m({},e.draft),{dirty:!0})),e.kind===`copy`)){let i=this.store.shipment(e.shipmentId);i&&this.open(A(m({},T$1(k(this.today),i)),{name:i.name+` (copy)`}))}})}update(t,e=!0){this.draft.update(i=>i&&A(m(m({},i),t),{dirty:e?!0:t.dirty??i.dirty}))}saveDraft(){let t=this.draft();t&&(BS(C,t),this.update({dirty:!1},!1),this.toast.show(`Draft saved · you can continue later from this browser`))}savedDraft(){return jS(C,null)}discardSavedDraft(){US(C)}close(){this.draft.set(null)}open(t){this.draft.set(t),this.router.navigate([`/create`])}static ɵfac=function(e){return new(e||n)};static ɵprov=F$2({token:n,factory:n.ɵfac,providedIn:`root`})};var Et=(()=>{class n{labelPosition=`after`;static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){return he({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(l,d){l&2&&_e(`mdc-form-field--align-end`,d.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(l,d){l&1&&(Dr(),Mt(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return n})();var g$1=(()=>{class t{get vertical(){return this._vertical}set vertical(i){this._vertical=Jm(i)}_vertical=!1;get inset(){return this._inset}set inset(i){this._inset=Jm(i)}_inset=!1;static ɵfac=function(e){return new(e||t)};static ɵcmp=he({type:t,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(e,r){e&2&&(Te$1(`aria-orientation`,r.vertical?`vertical`:`horizontal`),_e(`mat-divider-vertical`,r.vertical)(`mat-divider-horizontal`,!r.vertical)(`mat-divider-inset`,r.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(e,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})();var h=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=J$1({type:t});static ɵinj=Q({imports:[st]})}return t})();var te=new v(`MAT_MENU_PANEL`);var ee=(()=>{class r{_isAnchor;_elementRef=f(B);_document=f(x);_focusMonitor=f(Mr);_parentMenu=f(te,{optional:!0});_changeDetectorRef=f(ot);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new C$1;_focused=new C$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){f(Tt).load(gS),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(a,i){a&1&&(Gy(),sn(0,`svg`,2),Ei(1,`polygon`,3),ln())}return he({type:r,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(i,s){i&1&&Xe(`click`,function(l){return s._checkDisabled(l)})(`mouseenter`,function(){return s._handleMouseEnter()}),i&2&&(Te$1(`role`,s.role)(`tabindex`,s._getTabIndex())(`aria-disabled`,s._getAriaDisabled())(`disabled`,s._getDisabled()),_e(`mat-mdc-menu-item-highlighted`,s._highlighted)(`mat-mdc-menu-item-submenu-trigger`,s._triggersSubmenu)(`mat-mdc-menu-item-disabled`,s.disabled)(`mat-mdc-menu-item-disabled-interactive`,s.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,ae],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ae],disableRipple:[2,`disableRipple`,`disableRipple`,ae]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(i,s){i&1&&(Dr(e),Mt(0),sn(1,`span`,0),Mt(2,1),ln(),Ei(3,`div`,1),Co(4,n,2,0,`svg`,2)),i&2&&(yt$1(3),UD(`matRippleDisabled`,s.disableRipple||s.disabled)(`matRippleTrigger`,s._getHostElement()),yt$1(),Eo(s._triggersSubmenu?4:-1))},dependencies:[dQ],encapsulation:2})})()}return r})();var Ge=new v(`MatMenuContent`);var At=(()=>{class r{_template=f(dt$1);_appRef=f(bt);_injector=f(M);_viewContainerRef=f(rt);_document=f(x);_changeDetectorRef=f(ot);_portal;_outlet;_attached=new C$1;attach(e={}){this._portal||(this._portal=new Gn(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new Nd(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static ɵfac=function(t){return new(t||r)};static ɵdir=T$2({type:r,selectors:[[`ng-template`,`matMenuContent`,``]],features:[ft$1([{provide:Ge,useExisting:r}])]})}return r})();var tt=new v(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var J=`_mat-menu-enter`;var P$1=`_mat-menu-exit`;var R$1=(()=>{class r{_elementRef=f(B);_changeDetectorRef=f(ot);_injector=f(M);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=at();_allItems;_directDescendantItems=new go;_classList={};_panelAnimationState=`void`;_animationDone=new C$1;_isAnimating=Y$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=m({},this._classList);t&&t.length&&t.split(` `).forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new W$1;close=this.closed;panelId=f(At$1).getId(`mat-menu-panel-`);constructor(){let e=f(tt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new tg(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Qt(this._directDescendantItems),Je(e=>cf(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Qt(this._directDescendantItems),Je(t=>cf(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:hn(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Be$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=A(m({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===P$1;(t||e===J)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===J||e===P$1)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(P$1),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?J:P$1)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Qt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[`*`];function t(n,a){if(n&1){let i=Xh();It(0,`div`,0),pd(`click`,function(){bl(i);let m=hd();return _l(m.closed.emit(`click`))})(`animationstart`,function(m){bl(i);let l=hd();return _l(l._onAnimationStart(m.animationName))})(`animationend`,function(m){bl(i);let l=hd();return _l(l._onAnimationDone(m.animationName))})(`animationcancel`,function(m){bl(i);let l=hd();return _l(l._onAnimationDone(m.animationName))}),It(1,`div`,1),Mt(2),$t()()}if(n&2){let i=hd();wo(i._classList),_e(`mat-menu-panel-animations-disabled`,i._animationsDisabled)(`mat-menu-panel-exit-animation`,i._panelAnimationState===`void`)(`mat-menu-panel-animating`,i._isAnimating()),fa(`id`,i.panelId),Te$1(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby||null)(`aria-describedby`,i.ariaDescribedby||null)}}return he({type:r,selectors:[[`mat-menu`]],contentQueries:function(a,i,s){if(a&1&&Qh(s,Ge,5)(s,ee,5)(s,ee,4),a&2){let m;dn(m=un())&&(i.lazyContent=m.first),dn(m=un())&&(i._allItems=m),dn(m=un())&&(i.items=m)}},viewQuery:function(a,i){if(a&1&&Bn(dt$1,5),a&2){let s;dn(s=un())&&(i.templateRef=s.first)}},hostVars:3,hostBindings:function(a,i){a&2&&Te$1(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,ae],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:ae(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[ft$1([{provide:te,useExisting:r}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(a,i){a&1&&(Dr(),jD(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return r})();var nt=new v(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=f(M);return()=>Aa(r)}});var d$1=/* @__PURE__ */ new WeakMap;var it=(()=>{class r{_canHaveBackdrop;_element=f(B);_viewContainerRef=f(rt);_menuItemInstance=f(ee,{optional:!0,self:!0});_dir=f(Gt$1,{optional:!0});_focusMonitor=f(Mr);_ngZone=f(k$1);_injector=f(M);_scrollStrategy=f(nt);_changeDetectorRef=f(ot);_animationsDisabled=at();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=K.EMPTY;_menuCloseSubscription=K.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=f(te,{optional:!0});this._parentMaterialMenu=t instanceof R$1?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&d$1.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=d$1.get(t);d$1.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),i=a.getConfig(),s=i.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?i.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:i.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof R$1&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Ie$2(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof R$1&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Le$1(1)).subscribe(()=>{t.detach(),d$1.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&d$1.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=qn(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof R$1&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Wn({positionStrategy:Ra(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX===`start`?`after`:`before`,i=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,i)})})}_setPosition(e,t){let[n,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[i,s]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[m,l]=[i,s],[A,O]=[n,a],p=0;if(this._triggersSubmenu()){if(O=n=e.xPosition===`before`?`start`:`end`,a=A=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ne=this._parentMaterialMenu.items.first;this._parentInnerPadding=ne?ne._getHostElement().offsetTop:0}p=i===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=i===`top`?`bottom`:`top`,l=s===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:m,overlayX:A,overlayY:i,offsetY:p},{originX:a,originY:m,overlayX:O,overlayY:i,offsetY:p},{originX:n,originY:l,overlayX:A,overlayY:s,offsetY:-p},{originX:a,originY:l,overlayX:O,overlayY:s,offsetY:-p}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:R$3(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(fe(i=>this._menuOpen&&i!==this._menuItemInstance)):R$3();return cf(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Gn(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return d$1.get(e)===this}_triggerIsAriaDisabled(){return ae(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){ld()};static ɵdir=T$2({type:r})}return r})();var Ot=(()=>{class r extends it{_cleanupTouchstart;_hoverSubscription=K.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new W$1;onMenuOpen=this.menuOpened;menuClosed=new W$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=f(be$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Oa(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ka(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||r)};static ɵdir=T$2({type:r,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Xe(`click`,function(i){return n._handleClick(i)})(`mousedown`,function(i){return n._handleMousedown(i)})(`keydown`,function(i){return n._handleKeydown(i)}),t&2&&Te$1(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[ne]})}return r})();var Nt=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=J$1({type:r});static ɵinj=Q({imports:[yS,Ir,st,Ma]})}return r})();function w(t){t||(t=f(Me));let i=new O$1(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Ie$2(i))}function O(t,o){if(t&1&&(sn(0,`p`,3),wi(1),ln()),t&2){let e=hd();yt$1(),md(e.data.sub)}}function N(t,o){if(t&1&&(sn(0,`li`),wi(1),ln()),t&2){let e=o.$implicit;yt$1(),md(e)}}function P(t,o){if(t&1&&(sn(0,`ul`,5),HN(1,N,2,1,`li`,null,BN),ln()),t&2){let e=hd();yt$1(),$N(e.data.items)}}function F(t,o){if(t&1&&(sn(0,`button`,6),wi(1),ln()),t&2){let e=hd();UD(`mat-dialog-close`,!1),yt$1(),md(e.data.cancel??`Cancel`)}}function j$1(t,o){if(t&1&&(sn(0,`mat-icon`),wi(1),ln()),t&2){let e=hd();yt$1(),md(e.data.okIcon)}}var g=class t{data=f(lO);static ɵfac=function(e){return new(e||t)};static ɵcmp=he({type:t,selectors:[[`clm-confirm-dialog`]],hostAttrs:[1,`clm-dlg`],decls:17,vars:11,consts:[[1,`clm-dlg-head`],[1,`grow`],[`mat-dialog-title`,``],[1,`clm-dlg-sub`],[`mat-icon-button`,``,`aria-label`,`Close`,3,`mat-dialog-close`],[1,`items`],[`mat-button`,``,3,`mat-dialog-close`],[`mat-flat-button`,``,3,`mat-dialog-close`]],template:function(e,r){e&1&&(sn(0,`div`,0)(1,`div`,1)(2,`h2`,2),wi(3),ln(),Co(4,O,2,1,`p`,3),ln(),sn(5,`button`,4)(6,`mat-icon`),wi(7,`close`),ln()()(),sn(8,`mat-dialog-content`)(9,`p`),wi(10),ln(),Co(11,P,3,0,`ul`,5),ln(),sn(12,`mat-dialog-actions`),Co(13,F,2,2,`button`,6),sn(14,`button`,7),Co(15,j$1,2,1,`mat-icon`),wi(16),ln()()),e&2&&(yt$1(3),md(r.data.title),yt$1(),Eo(r.data.sub?4:-1),yt$1(),UD(`mat-dialog-close`,!1),yt$1(5),md(r.data.text),yt$1(),Eo(r.data.items?.length?11:-1),yt$1(2),Eo(r.data.cancel!==null?13:-1),yt$1(),_e(`clm-danger-btn`,r.data.danger),UD(`mat-dialog-close`,!0),yt$1(),Eo(r.data.okIcon?15:-1),yt$1(),Si(` `,r.data.ok,` `))},dependencies:[kK,TK,NK,RK,AK,cF,_S,sF,tJ,eJ],styles:[`.items[_ngcontent-%COMP%]{margin:8px 0 0;padding-left:20px;line-height:22px;color:var(--%NS%color-text-primary)}`]})};function Y$1(t,o){return t.open(g,{width:`440px`,maxWidth:`calc(100vw - 48px)`,data:o}).afterClosed().pipe(z$1(e=>e===!0))}var i=`clm-shipments-angular-prefs-v1`;var b=class o{today=f(VS);state=Y$2(this.load());value=this.state.asReadonly();update(t){let r=this.state(),e=m(m({},r),typeof t==`function`?t(r):t);e.groupBy!==`wp`&&e.view!==`list`&&(e.view=`list`),this.state.set(e),BS(i,e)}todayStart(t){return bn(rJ(this.today),-7*(t>=52?13:2))}toggleExpanded(t){this.update(r=>{let e=m({},r.expanded);return e[t]?delete e[t]:e[t]=!0,{expanded:e}})}reset(){US(i),this.state.set(this.defaults())}defaults(){return{view:`timeline`,groupBy:`wp`,wpStatus:[],search:``,period:4,showCompleted:!0,columns:{sender:!0,recipient:!0,building:!0,floor:!0},rangeStart:this.todayStart(4),expanded:{"wp:wp1":!0},panel:!1}}load(){let t=m(m({},this.defaults()),jS(i,{}));return[4,52].includes(t.period)||(t.period=4,t.rangeStart=this.todayStart(4)),(!Array.isArray(t.wpStatus)||t.wpStatus.length===4)&&(t.wpStatus=[]),t}static ɵfac=function(r){return new(r||o)};static ɵprov=F$2({token:o,factory:o.ɵfac,providedIn:`root`})};var Ce=[`content`];var ke=(i,n)=>n.key;var Pe=(i,n)=>n.name;var Se=(i,n)=>n.at;function Oe(i,n){if(i&1&&(sn(0,`a`,50)(1,`span`,51),Ei(2,`img`,52),ln(),sn(3,`span`,53),wi(4),ln()()),i&2){let o=n.$implicit,a=hd();_e(`active`,a.activeNav()===o.key),UD(`routerLink`,o.link)(`matTooltip`,o.label)(`matTooltipDisabled`,!a.collapsed()),yt$1(2),UD(`src`,`fig/`+o.icon+`.svg`),yt$1(2),md(o.label)}}function we(i,n){i&1&&(sn(0,`mat-icon`,56),wi(1,`check`),ln())}function Ee(i,n){if(i&1){let o=Xh();sn(0,`button`,54),Xe(`click`,function(){let c=bl(o).$implicit,p=hd();return _l(p.pickSite(c.name))}),sn(1,`span`,55)(2,`b`),wi(3),ln(),sn(4,`small`),wi(5),ln()(),Co(6,we,2,0,`mat-icon`,56),ln()}if(i&2){let o=n.$implicit,a=hd();_e(`on`,o.name===a.site),yt$1(3),md(o.name),yt$1(2),md(o.project),yt$1(),Eo(o.name===a.site?6:-1)}}function Te(i,n){i&1&&(sn(0,`div`,24),wi(1,`No site found`),ln())}function Ne(i,n){i&1&&(Gy(),sn(0,`svg`,58)(1,`clipPath`,62),Ei(2,`path`,63),ln(),sn(3,`clipPath`,64),Ei(4,`path`,65),ln(),sn(5,`g`,66),Ei(6,`path`,67)(7,`path`,68)(8,`path`,69)(9,`path`,70)(10,`path`,71),ln()())}function ze(i,n){i&1&&(Gy(),sn(0,`svg`,59),Ei(1,`path`,72)(2,`path`,73)(3,`path`,74),ln())}function De(i,n){i&1&&(Gy(),sn(0,`svg`,60),Ei(1,`path`,75)(2,`path`,76)(3,`path`,77),ln())}function Fe(i,n){i&1&&(sn(0,`mat-icon`,61),wi(1,`check`),ln())}function Le(i,n){if(i&1){let o=Xh();sn(0,`button`,45),Xe(`click`,function(){let c=bl(o).$implicit,p=hd();return _l(p.pickLanguage(c))}),sn(1,`span`,57),Co(2,Ne,11,0,`svg`,58)(3,ze,4,0,`svg`,59)(4,De,4,0,`svg`,60),ln(),sn(5,`span`),wi(6),ln(),Co(7,Fe,2,0,`mat-icon`,61),ln()}if(i&2){let o,a=n.$implicit;_e(`clm-on`,a===`EN`),yt$1(2),Eo((o=a)===`EN`?2:o===`DE`?3:o===`FR`?4:-1),yt$1(4),md(a),yt$1(),Eo(a===`EN`?7:-1)}}function je(i,n){i&1&&Ei(0,`i`,36)}function Ie(i,n){if(i&1&&(sn(0,`a`,40)(1,`mat-icon`),wi(2),ln(),sn(3,`span`,78),Ei(4,`span`,79),sn(5,`span`,80),wi(6),VA(7,`clmDate`),ln()()()),i&2){let o=n.$implicit,a=hd();UD(`routerLink`,o.link),yt$1(),Jh(`color`,a.notificationTone(o.tone)),yt$1(),md(o.icon),yt$1(2),UD(`innerHTML`,o.html,ix),yt$1(2),md(UA(7,6,o.at,`time`))}}var ve=[{key:`cockpit`,icon:`nav-layout-b`,label:`Cockpit`,link:`/na/cockpit`},{key:`shipments`,icon:`nav-shipping`,label:`Shipments`,link:`/shipments`},{key:`equipment`,icon:`nav-equipment`,label:`Equipment`,link:`/na/equipment`},{key:`hub`,icon:`nav-account-balance`,label:`Consolidation Hub`,link:`/na/hub`},{key:`projects`,icon:`nav-layout-b`,label:`Projects`,link:`/na/projects`},{key:`zone`,icon:`nav-blur`,label:`Logistics Zone`,link:`/na/zone`},{key:`material`,icon:`nav-layers`,label:`Material Management`,link:`/na/material`},{key:`team`,icon:`nav-group-add`,label:`Team`,link:`/na/team`},{key:`help`,icon:`nav-help`,label:`Help`,link:`/na/help`},{key:`upload`,icon:`nav-upload`,label:`Upload`,link:`/upload`},{key:`admin`,icon:`nav-admin`,label:`Administrator`,link:`/na/admin`}];var gt=Object.fromEntries(ve.map(i=>[i.key,i.label]));var T=`clm-nav-collapsed`;var be=class i{router=f(qi);store=f($S);prefs=f(b);dialog=f(ig);toast=f(RS);content=_5.required(`content`);nav=ve;collapsed=Y$2(jS(T,!1));activeNav=Y$2(`shipments`);notifications=this.store.notifications;unread=Y$2(!0);site=ZJ;siteProject=YJ.find(n=>n.name===ZJ).project;siteQuery=Y$2(``);sites=Fe$2(()=>YJ.filter(n=>(n.name+` `+n.project).toLowerCase().includes(this.siteQuery().toLowerCase())));languages=[`EN`,`DE`,`FR`];constructor(){this.router.events.pipe(fe(n=>n instanceof yn),w()).subscribe(n=>{let o=n.urlAfterRedirects.split(`/`)[1]?.split(`?`)[0];this.activeNav.set(o===`na`?n.urlAfterRedirects.split(`/`)[2]:`shipments`),this.content().nativeElement.scrollTop=0})}toggleNav(){this.collapsed.update(n=>!n),BS(T,this.collapsed())}pickSite(n){n!==this.site&&this.toast.show(`Only ${this.site} has demo data. Other sites are not part of this demo.`)}pickLanguage(n){n!==`EN`&&this.toast.show(`Translations are not part of this demo.`)}notificationTone(n){return{error:`var(--color-status-error-fg)`,success:`var(--color-status-success-fg)`,neutral:`var(--color-icon-default)`}[n]??``}profile(){this.toast.show(`Profile is not part of this demo.`)}resetDemo(){Y$1(this.dialog,{title:`Reset demo data?`,ok:`Reset`,danger:!0,text:`All changes you made in this browser (new shipments, status changes, uploads…) will be removed and the original demo data restored.`}).subscribe(n=>{n&&(this.store.reset(),this.prefs.reset(),this.collapsed.set(!1),BS(T,!1),this.router.navigate([`/shipments`]),this.toast.show(`Demo data restored`))})}static ɵfac=function(o){return new(o||i)};static ɵcmp=he({type:i,selectors:[[`clm-shell`]],viewQuery:function(o,a){o&1&&qD(a.content,Ce,5),o&2&&QN()},decls:79,vars:13,consts:[[`siteMenu`,`matMenu`],[`langMenu`,`matMenu`],[`bellMenu`,`matMenu`],[`userMenu`,`matMenu`],[`content`,``],[1,`app`],[1,`sidenav`],[1,`sn-head`],[1,`sn-logo`],[`src`,`fig/clm-logo.svg`,`alt`,`CLM`],[`matTooltipPosition`,`right`,1,`sn-burger`,3,`click`,`matTooltip`],[`src`,`fig/menu.svg`,`alt`,``],[`aria-label`,`Main`,1,`sn-items`],[`matTooltipPosition`,`right`,1,`sn-item`,3,`routerLink`,`active`,`matTooltip`,`matTooltipDisabled`],[1,`main`],[1,`topbar`],[1,`tb-site`],[`for`,`site-btn`],[`id`,`site-btn`,1,`site-select`,3,`menuOpened`,`matMenuTriggerFor`],[`src`,`fig/arrow-down.svg`,`alt`,``],[1,`clm-site-menu`],[`role`,`presentation`,1,`ss-search`,3,`click`,`keydown`],[`placeholder`,`Search sites`,`autocomplete`,`off`,`aria-label`,`Search sites`,3,`ngModelChange`,`ngModel`],[`mat-menu-item`,``,1,`ss-item`,3,`on`],[1,`clm-cap`,`ss-none`],[1,`tb-right`],[`matTooltip`,`All times are shown in the site time zone`,1,`tb-tz`],[1,`tz-l`],[1,`tz-v`],[`src`,`fig/public.svg`,`alt`,``,`width`,`24`,`height`,`24`],[`aria-label`,`Language`,1,`tb-lang`,3,`matMenuTriggerFor`],[`src`,`fig/arrow-down-olive.svg`,`alt`,``,`width`,`20`,`height`,`20`],[`xPosition`,`before`],[`mat-menu-item`,``,3,`clm-on`],[`matTooltip`,`Notifications`,`aria-label`,`Notifications`,1,`tb-icon`,3,`matMenuTriggerFor`],[`src`,`fig/bell.svg`,`alt`,``,`width`,`24`,`height`,`24`],[1,`dot`],[`xPosition`,`before`,1,`clm-notif-menu`],[`role`,`presentation`,1,`nt-head`,3,`click`,`keydown`],[`mat-button`,``,1,`clm-btn-sm`,3,`click`],[`mat-menu-item`,``,1,`nt-item`,3,`routerLink`],[`matTooltip`,`Max Mustermann`,`aria-label`,`Account`,1,`tb-avatar`,3,`matMenuTriggerFor`],[`src`,`fig/avatar-face.png`,`alt`,``],[`xPosition`,`before`,1,`clm-menu-wide`],[1,`clm-menu-header`],[`mat-menu-item`,``,3,`click`],[1,`tb-client`],[1,`crop`],[`src`,`fig/zurich.png`,`alt`,`Zürich Airport`],[1,`content`],[`matTooltipPosition`,`right`,1,`sn-item`,3,`routerLink`,`matTooltip`,`matTooltipDisabled`],[1,`nav-ic`],[`alt`,``,3,`src`],[1,`lbl`],[`mat-menu-item`,``,1,`ss-item`,3,`click`],[1,`ss-t`],[1,`ss-check`],[1,`flag`],[`viewBox`,`0 0 60 30`,`width`,`24`,`height`,`12`,`aria-hidden`,`true`],[`viewBox`,`0 0 5 3`,`width`,`20`,`height`,`12`,`aria-hidden`,`true`],[`viewBox`,`0 0 3 2`,`width`,`18`,`height`,`12`,`aria-hidden`,`true`],[1,`clm-menu-check`],[`id`,`fgb`],[`d`,`M0 0v30h60V0z`],[`id`,`fgt`],[`d`,`M30 15h30v15zv15H0zH0V0zV0h30z`],[`clip-path`,`url(#fgb)`],[`d`,`M0 0v30h60V0z`,`fill`,`#012169`],[`d`,`M0 0l60 30m0-30L0 30`,`stroke`,`#fff`,`stroke-width`,`6`],[`d`,`M0 0l60 30m0-30L0 30`,`clip-path`,`url(#fgt)`,`stroke`,`#C8102E`,`stroke-width`,`4`],[`d`,`M30 0v30M0 15h60`,`stroke`,`#fff`,`stroke-width`,`10`],[`d`,`M30 0v30M0 15h60`,`stroke`,`#C8102E`,`stroke-width`,`6`],[`fill`,`#000`,`d`,`M0 0h5v1H0z`],[`fill`,`#D00`,`d`,`M0 1h5v1H0z`],[`fill`,`#FFCE00`,`d`,`M0 2h5v1H0z`],[`fill`,`#002395`,`d`,`M0 0h1v2H0z`],[`fill`,`#fff`,`d`,`M1 0h1v2H1z`],[`fill`,`#ED2939`,`d`,`M2 0h1v2H2z`],[1,`nt-t`],[3,`innerHTML`],[1,`clm-cap`]],template:function(o,a){if(o&1&&(sn(0,`div`,5)(1,`aside`,6)(2,`div`,7)(3,`div`,8),Ei(4,`img`,9),ln(),sn(5,`button`,10),Xe(`click`,function(){return a.toggleNav()}),Ei(6,`img`,11),ln()(),sn(7,`nav`,12),HN(8,Oe,5,7,`a`,13,ke),ln()(),sn(10,`div`,14)(11,`header`,15)(12,`div`,16)(13,`label`,17),wi(14,`Site:`),ln(),sn(15,`button`,18),Xe(`menuOpened`,function(){return a.siteQuery.set(``)}),sn(16,`span`)(17,`b`),wi(18),ln(),sn(19,`small`),wi(20),ln()(),Ei(21,`img`,19),ln(),sn(22,`mat-menu`,20,0)(24,`div`,21),Xe(`click`,function(p){return p.stopPropagation()})(`keydown`,function(p){return p.stopPropagation()}),sn(25,`mat-icon`),wi(26,`search`),ln(),sn(27,`input`,22),RT(),Xe(`ngModelChange`,function(p){return a.siteQuery.set(p)}),ln()(),HN(28,Ee,7,5,`button`,23,Pe,!1,Te,2,0,`div`,24),ln()(),sn(31,`div`,25)(32,`div`,26)(33,`span`)(34,`span`,27),wi(35,`Site time zone`),ln(),sn(36,`span`,28),wi(37,`Europe/Zurich`),ln()(),Ei(38,`img`,29),ln(),sn(39,`button`,30),wi(40,` EN`),Ei(41,`img`,31),ln(),sn(42,`mat-menu`,32,1),HN(44,Le,8,5,`button`,33,UN),ln(),sn(46,`button`,34),Ei(47,`img`,35),Co(48,je,1,0,`i`,36),ln(),sn(49,`mat-menu`,37,2)(51,`div`,38),Xe(`click`,function(p){return p.stopPropagation()})(`keydown`,function(p){return p.stopPropagation()}),sn(52,`b`),wi(53,`Notifications`),ln(),sn(54,`button`,39),Xe(`click`,function(){return a.unread.set(!1)}),wi(55,` Mark all as read `),ln()(),HN(56,Ie,8,9,`a`,40,Se),ln(),sn(58,`button`,41),Ei(59,`img`,42),ln(),sn(60,`mat-menu`,43,3)(62,`div`,44),wi(63,`Max Mustermann · Team pRED`),ln(),sn(64,`button`,45),Xe(`click`,function(){return a.profile()}),sn(65,`mat-icon`),wi(66,`person`),ln(),wi(67,`My profile`),ln(),Ei(68,`mat-divider`),sn(69,`button`,45),Xe(`click`,function(){return a.resetDemo()}),sn(70,`mat-icon`),wi(71,`restart_alt`),ln(),wi(72,`Reset demo data `),ln()(),sn(73,`div`,46)(74,`div`,47),Ei(75,`img`,48),ln()()()(),sn(76,`main`,49,4),Ei(78,`router-outlet`),ln()()()),o&2){let c=JN(23),p=JN(43),ye=JN(50),Me=JN(61);_e(`nav-collapsed`,a.collapsed()),yt$1(5),UD(`matTooltip`,a.collapsed()?`Expand menu`:`Collapse menu`),Te$1(`aria-label`,a.collapsed()?`Expand menu`:`Collapse menu`),yt$1(3),$N(a.nav),yt$1(7),UD(`matMenuTriggerFor`,c),yt$1(3),md(a.site),yt$1(2),md(a.siteProject),yt$1(7),UD(`ngModel`,a.siteQuery()),OT(),yt$1(),$N(a.sites()),yt$1(11),UD(`matMenuTriggerFor`,p),yt$1(5),$N(a.languages),yt$1(2),UD(`matMenuTriggerFor`,ye),yt$1(2),Eo(a.unread()?48:-1),yt$1(8),$N(a.notifications()),yt$1(2),UD(`matMenuTriggerFor`,Me)}},dependencies:[Tg,cS,dte,nI,ite,xL,tJ,eJ,cF,_S,Nt,R$1,ee,Ot,h,g$1,Bee,zF,WS],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh}.app[_ngcontent-%COMP%]{display:flex;height:100vh}.sidenav[_ngcontent-%COMP%]{width:256px;flex:none;background:var(--%NS%color-raisin-500);color:#fff;display:flex;flex-direction:column;transition:width .2s;overflow:hidden}.sn-head[_ngcontent-%COMP%]{height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 16px 0 24px;flex:none}.sn-logo[_ngcontent-%COMP%]{width:134.222px;height:28px}.sn-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.sn-burger[_ngcontent-%COMP%]{width:24px;height:24px;display:grid;place-items:center;border:0;background:none;padding:0;cursor:pointer}.sn-burger[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;display:block}.sn-items[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sn-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;height:48px;padding:12px 24px;color:#fff;font-size:14px;line-height:20px;letter-spacing:0;white-space:nowrap}.sn-item[_ngcontent-%COMP%]:hover{background:#31313f}.sn-item.active[_ngcontent-%COMP%]{background:var(--%NS%color-action-primary)}.nav-ic[_ngcontent-%COMP%]{width:24px;height:24px;flex:none;display:grid;place-items:center}.nav-ic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.nav-collapsed[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{width:72px}.nav-collapsed[_ngcontent-%COMP%]   .sn-logo[_ngcontent-%COMP%]{display:none}.nav-collapsed[_ngcontent-%COMP%]   .sn-head[_ngcontent-%COMP%]{justify-content:center;padding:0}.nav-collapsed[_ngcontent-%COMP%]   .sn-item[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}.topbar[_ngcontent-%COMP%]{height:64px;flex:none;background:#fff;box-shadow:var(--%NS%elevation-topbar);display:flex;align-items:center;justify-content:space-between;position:relative;z-index:5}.tb-site[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;height:100%;padding:8px 24px}.tb-site[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:700;line-height:16px;letter-spacing:.4px;color:var(--%NS%color-raisin-500)}.site-select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:280px;height:100%;padding:2px 8px 2px 12px;border:1px solid var(--%NS%color-border-nav);border-radius:var(--%NS%radius-large);text-align:left;background:#fff;cursor:pointer}.site-select[_ngcontent-%COMP%]:hover{border-color:var(--%NS%color-border-strong)}.site-select[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;color:#8e8b00;font-weight:700;font-size:14px;line-height:20px;letter-spacing:.1px}.site-select[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;font-size:10px;line-height:14px;letter-spacing:.2px;color:#474752}.site-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.tb-right[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.tb-tz[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;height:56px;padding:16px;text-align:right}.tz-l[_ngcontent-%COMP%]{display:block;font-size:10px;line-height:14px;letter-spacing:.2px;color:var(--%NS%color-raisin-500);margin-bottom:-2px}.tz-v[_ngcontent-%COMP%]{display:block;font-size:12px;line-height:1.44;letter-spacing:.4px;color:#676770}.tb-lang[_ngcontent-%COMP%], .tb-icon[_ngcontent-%COMP%], .tb-avatar[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center;border:0;border-right:1px solid var(--%NS%color-border-nav);background:none;cursor:pointer;transition:background .12s;position:relative}.tb-lang[_ngcontent-%COMP%]:hover, .tb-icon[_ngcontent-%COMP%]:hover, .tb-avatar[_ngcontent-%COMP%]:hover, .mat-mdc-menu-trigger[aria-expanded=true][_ngcontent-%COMP%]{background:var(--%NS%color-action-outline-hover)}.tb-lang[_ngcontent-%COMP%]{gap:2px;padding:0 16px;font-size:12px;letter-spacing:.4px;color:#676770}.tb-icon[_ngcontent-%COMP%]{padding:0 20px}.tb-icon[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{position:absolute;top:18px;right:18px;width:8px;height:8px;border-radius:50%;background:var(--%NS%color-status-error-fg);border:2px solid #fff}.tb-avatar[_ngcontent-%COMP%]{padding:0 20px}.tb-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;min-width:32px;border-radius:50%;object-fit:cover;display:block}.tb-client[_ngcontent-%COMP%]{height:100%;padding:0 24px;display:flex;align-items:center}.tb-client[_ngcontent-%COMP%]   .crop[_ngcontent-%COMP%]{position:relative;width:184.054px;height:24px;overflow:hidden}.tb-client[_ngcontent-%COMP%]   .crop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;height:691.89%;left:-9.97%;top:-315.77%;width:120.29%;max-width:none}.content[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;scrollbar-gutter:stable;background:var(--%NS%color-surface-page);position:relative}[_nghost-%COMP%]     .clm-site-menu.mat-mdc-menu-panel{width:280px;max-width:none;border-radius:4px;box-shadow:0 8px 12px #0003}[_nghost-%COMP%]     .clm-site-menu .mat-mdc-menu-content{padding:8px 0 16px}[_nghost-%COMP%]     .ss-search{position:relative;padding:4px 16px 8px}[_nghost-%COMP%]     .ss-search .mat-icon{position:absolute;left:26px;top:50%;transform:translateY(-50%);margin-top:-2px;color:var(--%NS%color-icon-default);font-size:20px;width:20px;height:20px}[_nghost-%COMP%]     .ss-search input{width:100%;height:32px;border:1px solid var(--%NS%color-border-default);border-radius:4px;padding:6px 8px 6px 38px;font:12px/16px Roboto,sans-serif;letter-spacing:.2px;outline:none}[_nghost-%COMP%]     .ss-search input:focus{border-color:var(--%NS%color-border-focus);box-shadow:inset 0 0 0 1px var(--%NS%color-border-focus)}[_nghost-%COMP%]     .ss-item.mat-mdc-menu-item{min-height:0;padding:9.5px 24px 9.5px 16px}[_nghost-%COMP%]     .ss-item .ss-t b{display:block;font-size:14px;line-height:24px;font-weight:500;letter-spacing:.1px;color:#000000de;margin-bottom:-4px}[_nghost-%COMP%]     .ss-item .ss-t small{display:block;font-size:12px;line-height:1.44;letter-spacing:.2px;color:#0009}[_nghost-%COMP%]     .ss-item.on .ss-t b{color:var(--%NS%color-action-primary)}[_nghost-%COMP%]     .ss-item .ss-check{margin:0 0 0 auto;color:var(--%NS%color-action-primary)!important;font-size:24px;width:24px;height:24px}[_nghost-%COMP%]     .ss-item .mat-mdc-menu-item-text{display:flex;align-items:center;width:100%}[_nghost-%COMP%]     .ss-none{padding:12px 16px}[_nghost-%COMP%]     .flag{width:24px;display:inline-flex;align-items:center;justify-content:center;flex:none;margin-right:12px}[_nghost-%COMP%]     .flag svg{display:block;border-radius:2px;box-shadow:0 0 0 1px #00000014}[_nghost-%COMP%]     .clm-notif-menu.mat-mdc-menu-panel{width:360px;max-width:none}[_nghost-%COMP%]     .nt-head{display:flex;align-items:center;justify-content:space-between;padding:6px 16px 8px}[_nghost-%COMP%]     .nt-head b{font-weight:500;font-size:16px}[_nghost-%COMP%]     .nt-item.mat-mdc-menu-item{align-items:flex-start;padding:10px 16px;border-top:1px solid #eee;min-height:0}[_nghost-%COMP%]     .nt-item .mat-icon{margin-top:2px}[_nghost-%COMP%]     .nt-t{display:flex;flex-direction:column;gap:2px;font-size:13px;line-height:18px;white-space:normal}@media print{[_nghost-%COMP%], .app[_ngcontent-%COMP%]{height:auto;display:block}.sidenav[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%]{overflow:visible}}`]})};var E=()=>{let e=f(Ne$1),t=e.draft();return!t||!t.dirty?(e.close(),!0):Y$1(f(ig),{title:`Discard changes?`,ok:`Discard`,danger:!0,text:t.mode===`edit`?`Your changes to this shipment will be lost.`:`This shipment hasn’t been created yet. Everything you entered will be lost.`}).pipe(z$1(r=>(r&&e.close(),r)))};var _=[{path:``,pathMatch:`full`,redirectTo:`shipments`},{path:`shipments`,title:`CLM · Shipments`,loadComponent:()=>import(`./chunk-Bd23BjTD.js`).then(e=>e.HubPage)},{path:`group/:by/:key`,title:`CLM · Working package`,loadComponent:()=>import(`./chunk-xfgCwvK-.js`).then(e=>e.GroupPage)},{path:`shipment/:id`,pathMatch:`full`,redirectTo:`shipment/:id/overview`},{path:`shipment/:id/:tab`,title:`CLM · Shipment`,loadComponent:()=>import(`./chunk-g-CMp9Zr.js`).then(e=>e.ShipmentDetailsPage)},{path:`create`,title:`CLM · Create shipment`,canDeactivate:[E],loadComponent:()=>import(`./chunk-TpFc-R_w.js`).then(e=>e.CreateShipmentPage)},{path:`upload`,title:`CLM · Upload`,loadComponent:()=>import(`./chunk-DYvq9AFL.js`).then(e=>e.UploadPage)},{path:`na/:area`,title:`CLM`,loadComponent:()=>import(`./chunk-Cq9-bxat.js`).then(e=>e.NotAvailablePage)},{path:`**`,redirectTo:`shipments`}];var W=/^(\d{1,2})[./-](\d{1,2})[./-](\d{4}|\d{2})$/;var z=/^(\d{4})-(\d{1,2})-(\d{1,2})$/;var d=class e extends me{parse(t,r){if(typeof t!=`string`)return super.parse(t,r);let o=t.trim();if(!o)return null;let s,p,a,i=W.exec(o),m=z.exec(o);if(i)[s,p,a]=[+i[1],+i[2],+i[3]],i[3].length===2&&(a+=2e3);else if(m)[a,p,s]=[+m[1],+m[2],+m[3]];else return this.invalid();let l=new Date(a,p-1,s);return l.getFullYear()===a&&l.getMonth()===p-1&&l.getDate()===s?l:this.invalid()}format(t,r){if(r===j.display.dateInput){if(!this.isValid(t))throw Error(`ChDateAdapter: Cannot format invalid date.`);return`${R(t.getDate())}.${R(t.getMonth()+1)}.${t.getFullYear()}`}return super.format(t,r)}getDayOfWeekNames(t){return t===`narrow`?super.getDayOfWeekNames(`short`).map(r=>r.slice(0,2)):super.getDayOfWeekNames(t)}getFirstDayOfWeek(){return 1}static ɵfac=(()=>{let t;return function(o){return(t||(t=Ke(e)))(o||e)}})();static ɵprov=F$2({token:e,factory:e.ɵfac})};var j={parse:{dateInput:null},display:{dateInput:{year:`numeric`,month:`2-digit`,day:`2-digit`},monthLabel:{month:`short`},monthYearLabel:{year:`numeric`,month:`long`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`}}};function $(e=`en-GB`){return[{provide:I$1,useClass:d},{provide:vt,useValue:j},{provide:F$1,useValue:e}]}function R(e){return String(e).padStart(2,`0`)}var U=[`eq-elevator`,`eq-excavator`,`eq-forklift`,`eq-general`,`eq-hoist`,`eq-loader-crane`,`eq-machine`,`eq-mobile-crane`,`eq-passenger-lift`,`eq-scissor-lift`,`eq-self-unloading`,`eq-telehandler`,`eq-tower-crane`,`eq-unknown`,`eq-warning`,`legend-active`,`legend-approved`,`legend-completed`,`legend-open`,`legend-overdue`,`legend-pending`,`legend-wp-completed`,`logo-clm`,`sm-approved`,`sm-arrived`,`sm-canceled`,`sm-completed`,`sm-intransit`,`sm-rejected`,`sm-waiting`,`ss-approved`,`ss-arrived`,`ss-cancelled`,`ss-completed`,`ss-intransit`,`ss-open`,`ss-rejected`,`ss-waiting`,`st-approved`,`st-cancelled`,`st-completed`,`st-intransit`,`st-parking`,`st-requested`,`st-unloading`,`st-waiting`,`tr-air`,`tr-ship`,`tr-train`,`veh-anhaenger`,`veh-autokran`,`veh-betonpumpe`,`veh-fahrmischer`,`veh-lieferwagen`,`veh-lkw-30`,`veh-lkw-40`,`veh-pkw`,`veh-sattelzug`,`veh-solo-ab-7-5`,`veh-solo-bis-7-5`];function G(e=`icons/clm`){return FD(()=>{let t=f(SS),r=f(Sa);for(let o of U)t.addSvgIconInNamespace(`clm`,o,r.bypassSecurityTrustResourceUrl(`${e}/${o}.svg`))})}var Y={providers:[$0(),GP(_,QP(),JP(),XP({paramsInheritanceStrategy:`always`})),$(),G(),{provide:dO,useValue:{autoFocus:`first-tabbable`,restoreFocus:!0,hasBackdrop:!0}}]};var c=class e{static ɵfac=function(r){return new(r||e)};static ɵcmp=he({type:e,selectors:[[`clm-root`]],decls:1,vars:0,template:function(r,o){r&1&&Ei(0,`clm-shell`)},dependencies:[be],encapsulation:2})};zR(c,Y).catch(e=>console.error(e));export{ft as C,pt as D,oe as E,vt as O,dt as S,mt as T,Pe$1 as _,w as a,I$1 as b,Ot as c,g$1 as d,h as f,Oe$1 as g,Ne$1 as h,g as i,xt as k,R$1 as l,I as m,b as n,At as o,Et as p,Y$1 as r,Nt as s,gt as t,ee as u,R$2 as v,kt as w,Ut as x,Gt as y};