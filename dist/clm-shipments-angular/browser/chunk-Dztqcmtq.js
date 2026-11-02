import{$t as Q,A as Dr,D as Co,Dn as UD,Gi as sn,Hi as sF,Ir as eJ,Ji as tJ,Jn as Y,Jr as hd,Ki as st,Kn as Xe,M as Ei,Mt,N as Eo,Rr as f,Sr as cF,Vi as sC,Yr as he,_i as lO,_r as bl,aa as wi,ct as J,di as kK,ga as yt,kr as cx,l as AA,na as v,or as _e,qn as Xh,sr as _l,xn as TK,yi as ln,yn as T}from"./chunk-BT_UvFLf.js";var R=new v(`MAT_CARD_CONFIG`);var tt=(()=>{class t{appearance;constructor(){let a=f(R,{optional:!0});this.appearance=a?.appearance||`raised`}static ɵfac=function(e){return new(e||t)};static ɵcmp=(function(){return he({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(n,d){n&2&&_e(`mat-mdc-card-outlined`,d.appearance===`outlined`)(`mdc-card--outlined`,d.appearance===`outlined`)(`mat-mdc-card-filled`,d.appearance===`filled`)(`mdc-card--filled`,d.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,d){n&1&&(Dr(),Mt(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return t})();var at=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=T({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var et=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=T({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var nt=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=J({type:t});static ɵinj=Q({imports:[st]})}return t})();function X(t,i){if(t&1){let a=Xh();sn(0,`button`,2),Xe(`click`,function(){bl(a);let n=hd();return _l(n.step(-1))}),sn(1,`mat-icon`),wi(2,`chevron_left`),ln()(),sn(3,`button`,3),Xe(`click`,function(){bl(a);let n=hd();return _l(n.step(1))}),sn(4,`mat-icon`),wi(5,`chevron_right`),ln()(),sn(6,`div`,4),wi(7),ln()}if(t&2){let a=hd();yt(7),sC(``,a.index()+1,` / `,a.data.photos.length)}}var H=class t{data=f(lO);index=Y(this.data.index);step(i){let a=this.data.photos.length;this.index.update(e=>(e+i+a)%a)}static ɵfac=function(a){return new(a||t)};static ɵcmp=he({type:t,selectors:[[`clm-photo-viewer`]],hostBindings:function(a,e){a&1&&Xe(`keydown.arrowleft`,function(){return e.step(-1)},cx)(`keydown.arrowright`,function(){return e.step(1)},cx)},decls:5,vars:4,consts:[[3,`src`,`alt`],[`mat-icon-button`,``,`mat-dialog-close`,``,`aria-label`,`Close`,1,`close`],[`mat-icon-button`,``,`aria-label`,`Previous photo`,1,`prev`,3,`click`],[`mat-icon-button`,``,`aria-label`,`Next photo`,1,`next`,3,`click`],[1,`pos`]],template:function(a,e){a&1&&(Ei(0,`img`,0),sn(1,`button`,1)(2,`mat-icon`),wi(3,`close`),ln()(),Co(4,X,8,2)),a&2&&(UD(`alt`,AA(`Shipment photo `,e.index()+1))(`src`,e.data.photos[e.index()]),yt(4),Eo(e.data.photos.length>1?4:-1))},dependencies:[kK,TK,cF,sF,tJ,eJ],styles:[`[_nghost-%COMP%]{position:fixed;inset:0;display:grid;place-items:center}img[_ngcontent-%COMP%]{max-width:86vw;max-height:82vh;border-radius:6px}button[_ngcontent-%COMP%]{position:absolute;--%NS%mat-icon-button-icon-color: #fff}.close[_ngcontent-%COMP%]{top:16px;right:16px}.prev[_ngcontent-%COMP%]{left:16px;top:50%}.next[_ngcontent-%COMP%]{right:16px;top:50%}.pos[_ngcontent-%COMP%]{position:absolute;bottom:20px;color:#fff;font-size:13px}`]})};export{tt as a,nt as i,at as n,et as r,H as t};