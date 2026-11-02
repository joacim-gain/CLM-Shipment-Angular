import{$ as Hm,$t as Q,A as Dr,Ai as pC,Br as fa,C as Bee,Ci as mc,Cn as Te,D as Co,Dn as UD,En as UA,Et as MS,Fi as qi,Fn as W,Gi as sn,Hi as sF,Hr as ft,Ir as eJ,J as Gy,Ji as tJ,Jn as Y,Jr as hd,Ki as st,Kn as Xe$1,L as FC,M as Ei$1,Mr as dQ,Mt,N as Eo,Ni as qD,Nn as VS,Nr as dn,Nt as NA,Oi as oJ,Q as HN,Qt as Pr,Ri as rJ,Rn as WS,Rr as f,Sn as TS,Sr as cF,Tn as Tt,Tt as M,Ur as gS,Ut as OS,V as Fe$1,Vi as sC,Vt as OJ,Wi as sc,Xn as Ye,Xt as PJ,Y as HA,Yr as he,Zr as iJ,_r as bl,a as $S,aa as wi$1,ar as _S,at as Ii,bn as TA,ct as J,da as xe,ea as un$1,fa as y5,fi as kS,fr as ae$1,ft as Jh,g as B,ga as yt,gn as Si$1,h as At,hi as kk,i as $N,ir as _5,j as E5,jn as VA,jt as Mr,ki as ot,kn as UN,kt as Mi$1,lr as _r,lt as JN,mr as at,n as $D,na as v,nt as IR,oa as wo,or as _e,qn as Xh,qt as Ot,ri as jJ,s as A,sr as _l,ti as ix,tn as QN,tr as Zi,ui as kJ,un as RS,ur as aC,va as zF,vr as bn$1,vt as Ki,w as Bn$1,wi as md,xi as m,y as BN,yi as ln,zr as fA}from"./chunk-BT_UvFLf.js";import{D as pt,c as Ot$1,h as Ne,l as R,n as b,p as Et,s as Nt,u as ee,v as R$1}from"./main-ENUXKIWX.js";import{t as oe}from"./chunk-Bo3qDDzO.js";import{n as ge,t as ae$2}from"./chunk-C-qgpcH8.js";import{t as y}from"./chunk-BwNpGA85.js";import{c as Un$1,d as be,m as hi$1,n as Ia,o as Qn$1,p as gi$1,r as Kt,s as Ra}from"./chunk-CxKoVWF7.js";import{a as fn$1,l as vn$1,n as Dn$1,o as hn$1,r as Ge,t as Ae,u as yn$1}from"./chunk-Bw4SMD5j.js";import{t as W$1}from"./chunk-XaiYiPhP.js";import{a as wt,i as ve,n as _e$1,o as ye,r as fe,t as Tt$1}from"./chunk-BluhPbnL.js";var ae=class i{prefs=f(b).value;clearFilters=y5();static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-empty`]],outputs:{clearFilters:`clearFilters`},decls:11,vars:1,consts:[[1,`clm-empty`],[`mat-stroked-button`,``,3,`click`]],template:function(e,n){e&1&&(sn(0,`div`,0)(1,`mat-icon`),wi$1(2,`search_off`),ln(),sn(3,`b`),wi$1(4,`No results`),ln(),sn(5,`span`),wi$1(6),ln(),sn(7,`button`,1),Xe$1(`click`,function(){return n.clearFilters.emit()}),sn(8,`mat-icon`),wi$1(9,`filter_alt_off`),ln(),wi$1(10,`Clear filters `),ln()()),e&2&&(yt(6),md(n.prefs().search?`Nothing matches “`+n.prefs().search+`”.`:`No working packages match the selected status.`))},dependencies:[cF,_S,tJ,eJ],encapsulation:2})};var hn=(i,t)=>t.g.key;function bn(i,t){if(i&1){let e=Xh();sn(0,`clm-wp-card`,2),Xe$1(`activate`,function(){let a=bl(e).$implicit,l=hd(2);return _l(l.openGroup.emit(a.g.key))}),ln()}if(i&2){let e=t.$implicit,n=hd(2);UD(`title`,e.g.title)(`trade`,e.g.trade??``)(`tabLabel`,e.tab)(`tabColor`,e.tabColor)(`building`,e.building)(`floor`,e.floor)(`dates`,e.dates)(`sender`,e.sender)(`counts`,e.counts)(`status`,e.g.status)(`highlight`,n.prefs().search)}}function fn(i,t){if(i&1&&(sn(0,`div`,0),HN(1,bn,1,11,`clm-wp-card`,1,hn),ln()),i&2){let e=hd();yt(),$N(e.cards())}}function yn(i,t){if(i&1){let e=Xh();sn(0,`clm-hub-empty`,3),Xe$1(`clearFilters`,function(){bl(e);let a=hd();return _l(a.resetFilters.emit())}),ln()}}var Ie=class i{groups=Mi$1.required();openGroup=y5();resetFilters=y5();prefs=f(b).value;cards=Fe$1(()=>this.groups().map(t=>{let e=t.shipments;return{g:t,tab:t.wp?t.trade:ve[this.prefs().groupBy],tabColor:t.wp?void 0:`var(--color-action-primary)`,building:t.wp?t.wp.building:_e$1(e,`building`),floor:t.wp?t.wp.floor:_e$1(e,`floor`),dates:t.from?`${Ki(t.from)} - ${Ki(t.to)}`:`—`,sender:t.wp?t.wp.sender:t.sub,counts:{open:e.filter(n=>n.status===`Open`).length,approved:e.filter(n=>OS(n.status)).length,completed:e.filter(n=>n.status===`Completed`).length,draft:e.filter(n=>n.status===`Canceled`||n.status===`Rejected`).length}}}));static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-cards`]],inputs:{groups:[1,`groups`]},outputs:{openGroup:`openGroup`,resetFilters:`resetFilters`},decls:2,vars:1,consts:[[1,`cards`],[3,`title`,`trade`,`tabLabel`,`tabColor`,`building`,`floor`,`dates`,`sender`,`counts`,`status`,`highlight`],[3,`activate`,`title`,`trade`,`tabLabel`,`tabColor`,`building`,`floor`,`dates`,`sender`,`counts`,`status`,`highlight`],[3,`clearFilters`]],template:function(e,n){e&1&&Co(0,fn,3,0,`div`,0)(1,yn,1,0,`clm-hub-empty`),e&2&&Eo(n.cards().length?0:1)},dependencies:[W$1,ae],styles:[`.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;align-content:start}`]})};var re=5;function mn(i,t){let e=bn$1(t,-3),n=i.filter(l=>Ot(l.date,e)>=0),a=i.filter(l=>Ot(l.date,e)<0).reverse();return[...n,...a].slice(0,re).sort((l,g)=>l.date.localeCompare(g.date))}var vn=(i,t)=>t.key;var wn=(i,t)=>t.id;function xn(i,t){i&1&&(sn(0,`span`),wi$1(1,`Location`),ln())}function Cn(i,t){if(i&1&&(sn(0,`span`),wi$1(1),ln()),i&2){let e=hd();yt(),md(e.partiesLabel())}}function kn(i,t){if(i&1&&Ei$1(0,`i`,16),i&2){let e=hd().$implicit,n=hd();Jh(`background`,n.tradeColor(e.g.trade))}}function Sn(i,t){if(i&1&&(sn(0,`div`,5)(1,`div`),wi$1(2),ln(),sn(3,`div`,9),wi$1(4),ln()()),i&2){let e=hd().$implicit,n=hd();yt(2),md(n.location(e)),yt(2),md(e.g.wp?.zone)}}function Mn(i,t){if(i&1&&(sn(0,`div`,18),wi$1(1,` → `),Ei$1(2,`span`,19),VA(3,`clmHighlight`),ln()),i&2){let e=hd(2).$implicit;hd();let n=NA(0);yt(2),UD(`innerHTML`,UA(3,1,e.recipient,n.search),ix)}}function Tn(i,t){if(i&1&&(sn(0,`div`,5),Ei$1(1,`div`,17),VA(2,`clmHighlight`),Co(3,Mn,4,4,`div`,18),ln()),i&2){let e=hd().$implicit;hd();let n=NA(0);yt(),UD(`innerHTML`,UA(2,2,n.columns.sender?e.sender:e.recipient,n.search),ix),yt(2),Eo(n.columns.sender&&n.columns.recipient?3:-1)}}function Pn(i,t){if(i&1&&(sn(0,`span`,13),Ei$1(1,`clm-wp-icon`,20)(2,`clm-wp-pill`,20),ln()),i&2){let e=t;yt(),UD(`status`,e),yt(),UD(`status`,e)}}function Nn(i,t){if(i&1&&(sn(0,`span`,14),wi$1(1),ln()),i&2){let e=hd().$implicit;yt(),Si$1(``,e.wpCount,` WP`)}}function On(i,t){if(i&1){let e=Xh();sn(0,`div`,21),wi$1(1,` No shipments yet · `),sn(2,`button`,22),Xe$1(`click`,function(){bl(e);let a=hd(2).$implicit,l=hd();return _l(l.addShipment.emit(a.g.wp?.id))}),sn(3,`mat-icon`),wi$1(4,`add`),ln(),wi$1(5,`Add shipment `),ln()()}}function Hn(i,t){if(i&1&&(sn(0,`div`,5)(1,`div`,29),wi$1(2),ln(),sn(3,`div`,18),wi$1(4),ln()()),i&2){let e=hd().$implicit;yt(2),md(e.up),yt(2),sC(``,e.building,` · `,e.floor)}}function En(i,t){if(i&1&&(sn(0,`div`,5)(1,`div`,29),wi$1(2),ln(),sn(3,`div`,18),wi$1(4),ln()()),i&2){let e=hd().$implicit,n=hd(4);yt(2),md(n.vehicleName(e.vehicle)),yt(2),sC(` `,e.vehicles||1,` vehicle`,(e.vehicles||1)>1?`s`:``,` `)}}function In(i,t){if(i&1){let e=Xh();sn(0,`div`,25),Xe$1(`click`,function(){let a=bl(e).$implicit,l=hd(4);return _l(l.openShipment.emit(a.id))})(`keydown.enter`,function(){let a=bl(e).$implicit,l=hd(4);return _l(l.openShipment.emit(a.id))}),Ei$1(1,`span`),sn(2,`div`,26),Ei$1(3,`clm-ship-icon`,20),sn(4,`div`,5),Ei$1(5,`div`,27),VA(6,`clmHighlight`),Ei$1(7,`div`,28),VA(8,`clmHighlight`),ln()(),Co(9,Hn,5,3,`div`,5),sn(10,`div`)(11,`div`,10),wi$1(12),VA(13,`clmDate`),ln(),sn(14,`div`,9),wi$1(15),ln()(),Co(16,En,5,3,`div`,5),sn(17,`div`,5)(18,`div`,29),wi$1(19),ln(),sn(20,`div`,9),wi$1(21,`Equipment`),ln()(),sn(22,`div`),Ei$1(23,`clm-status-pill`,20),ln()()}if(i&2){let e=t.$implicit,n=hd(4),a=NA(0);Jh(`grid-template-columns`,n.cols()),yt(3),UD(`status`,e.status),yt(2),UD(`innerHTML`,UA(6,12,e.name,a.search),ix),yt(2),UD(`innerHTML`,UA(8,15,e.no,a.search),ix),yt(2),Eo(n.showLocation()?9:-1),yt(3),md(UA(13,18,e.date,`day`)),yt(3),sC(``,e.start,` – `,e.end),yt(),Eo(n.showParties()?16:-1),yt(3),md(n.equipmentNames(e.equipment)),yt(4),UD(`status`,e.status)}}function Ln(i,t){if(i&1){let e=Xh();sn(0,`button`,22),Xe$1(`click`,function(){bl(e);let a=hd(3).$implicit,l=hd();return _l(l.toggleShowAll.emit(a.key))}),sn(1,`mat-icon`),wi$1(2),ln(),wi$1(3),ln(),sn(4,`span`,30),wi$1(5,`·`),ln()}if(i&2){let e=hd(3).$implicit;yt(2),md(e.all?`expand_less`:`expand_more`),yt(),Si$1(``,e.all?`Show less`:`Show all `+e.total+` shipments`,` `)}}function Fn(i,t){if(i&1){let e=Xh();sn(0,`span`,30),wi$1(1,`·`),ln(),sn(2,`button`,22),Xe$1(`click`,function(){bl(e);let a=hd(3).$implicit,l=hd();return _l(l.addShipment.emit(a.g.wp?.id))}),sn(3,`mat-icon`),wi$1(4,`add`),ln(),wi$1(5,`Add shipment `),ln()}}function Vn(i,t){if(i&1){let e=Xh();HN(0,In,24,21,`div`,23,wn),sn(2,`div`,24),Co(3,Ln,6,2),sn(4,`button`,22),Xe$1(`click`,function(){bl(e);let a=hd(2).$implicit,l=hd();return _l(l.openGroup.emit(a.g.key))}),sn(5,`mat-icon`),wi$1(6,`open_in_new`),ln(),wi$1(7),ln(),Co(8,Fn,6,0),ln()}if(i&2){let e=hd(2).$implicit,n=hd(),a=NA(0);$N(e.shown),yt(3),Eo(e.total>n.max?3:-1),yt(4),Si$1(`Open `,a.groupBy===`wp`?`working package`:`group`,` `),yt(),Eo(e.canAdd?8:-1)}}function zn(i,t){if(i&1&&(sn(0,`div`,15),Co(1,On,6,0,`div`,21)(2,Vn,9,3),ln()),i&2){let e=hd().$implicit;yt(),Eo(e.total?2:1)}}function $n(i,t){if(i&1){let e=Xh();sn(0,`div`,2),Xe$1(`click`,function(){let a=bl(e).$implicit,l=hd();return _l(l.openGroup.emit(a.g.key))})(`keydown.enter`,function(){let a=bl(e).$implicit,l=hd();return _l(l.openGroup.emit(a.g.key))}),Co(1,kn,1,2,`i`,3),sn(2,`button`,4),Xe$1(`click`,function(a){let l=bl(e).$implicit,g=hd();return _l(g.toggle(a,l.key))})(`keydown.enter`,function(a){return a.stopPropagation()}),sn(3,`mat-icon`),wi$1(4,`chevron_right`),ln()(),sn(5,`div`,5)(6,`div`,6),Ei$1(7,`span`,7),VA(8,`clmHighlight`),sn(9,`mat-icon`,8),wi$1(10,`arrow_forward`),ln()(),sn(11,`div`,9),wi$1(12),ln()(),Co(13,Sn,5,2,`div`,5),sn(14,`div`)(15,`div`,10),wi$1(16),VA(17,`clmDate`),VA(18,`clmDate`),ln(),sn(19,`div`,9),wi$1(20),ln()(),Co(21,Tn,4,5,`div`,5),sn(22,`div`)(23,`div`,11),Ei$1(24,`i`)(25,`i`,12),ln(),sn(26,`div`,9),wi$1(27),ln()(),sn(28,`div`),Co(29,Pn,3,2,`span`,13)(30,Nn,2,1,`span`,14),ln()(),Co(31,zn,3,1,`div`,15)}if(i&2){let e,n=t.$implicit,a=hd(),l=NA(0);Jh(`grid-template-columns`,a.cols()),_e(`open`,n.expanded),yt(),Eo(n.g.wp?1:-1),yt(),_e(`open`,n.expanded),UD(`matTooltip`,(n.expanded?`Hide`:`Show`)+` shipments`),Te(`aria-expanded`,n.expanded)(`aria-label`,(n.expanded?`Hide`:`Show`)+` shipments of `+n.g.title),yt(5),UD(`innerHTML`,UA(8,28,n.g.title,l.search),ix),yt(5),md(n.g.sub),yt(),Eo(a.showLocation()?13:-1),yt(3),Si$1(` `,n.g.from?UA(17,31,n.g.from,`short`)+` – `+UA(18,34,n.g.to,`short`):`—`,` `),yt(3),_e(`clm-err-t`,n.note.error),yt(),md(n.note.text),yt(),Eo(a.showParties()?21:-1),yt(2),UD(`matTooltip`,n.done+` completed · `+(n.total-n.done-n.open)+` approved / in progress · `+n.open+` open`),yt(),Jh(`width`,n.pct,`%`),yt(),Jh(`width`,n.appr,`%`),yt(2),aC(` `,n.done,` of `,n.total,` done`,n.open?` · `+n.open+` open`:n.total&&n.done===n.total?` · all done`:``,` `),yt(2),Eo((e=n.g.status)?29:30,e),yt(2),Eo(n.expanded?31:-1)}}function Dn(i,t){if(i&1){let e=Xh();sn(0,`clm-hub-empty`,31),Xe$1(`clearFilters`,function(){bl(e);let a=hd();return _l(a.resetFilters.emit())}),ln()}}var Le=class i{groups=Mi$1.required();showAll=Mi$1.required();toggleShowAll=y5();openGroup=y5();openShipment=y5();addShipment=y5();resetFilters=y5();store=f($S);hubPrefs=f(b);today=f(VS);prefs=this.hubPrefs.value;max=re;showLocation=Fe$1(()=>{let t=this.prefs();return(t.columns.building||t.columns.floor)&&t.groupBy!==`destination`});showParties=Fe$1(()=>{let t=this.prefs().columns;return t.sender||t.recipient});partiesLabel=Fe$1(()=>{let t=this.prefs().columns;return[t.sender&&`Sender`,t.recipient&&`Recipient`].filter(Boolean).join(` → `)});groupLabel=Fe$1(()=>ve[this.prefs().groupBy]);cols=Fe$1(()=>{let t=[`44px`,`minmax(200px, 1fr)`];return this.showLocation()&&t.push(`150px`),t.push(`170px`),this.showParties()&&t.push(`210px`),t.push(`170px`,`132px`),t.join(` `)});rows=Fe$1(()=>{let t=this.prefs(),e=t.search;return this.groups().map(n=>{let a=t.groupBy+`:`+n.key,l=n.shipments,g=l.filter(Y=>Y.status===`Completed`).length,m=l.filter(Y=>Y.status===`Open`).length,C=l.length,G=!!t.expanded[a]||!!(e&&n.matched?.length),ge=!!this.showAll()[a];return{g:n,key:a,expanded:G,all:ge,total:C,done:g,open:m,pct:C?g/C*100:0,appr:C?l.filter(Y=>OS(Y.status)).length/C*100:0,note:n.wp?this.store.wpWindowNote(n.wp):{text:`${C} shipment${C!==1?`s`:``}`,error:!1},sender:n.wp?n.wp.sender:_e$1(l,`sender`),recipient:n.wp?n.wp.recipient:_e$1(l,`recipient`),building:n.wp?n.wp.building:_e$1(l,`building`),floor:n.wp?n.wp.floor:_e$1(l,`floor`),wpCount:new Set(l.map(Y=>Y.wpId)).size,canAdd:!!n.wp&&this.store.wpStatus(n.wp)!==`completed`,shown:G?ge?l:mn(l,this.today):[]}})});tradeColor=kJ;location(t){let e=this.prefs().columns;return[e.building&&t.building,e.floor&&t.floor].filter(Boolean).join(` · `)}equipmentNames(t){return t.length?t.map(e=>this.store.equipment(e.id).name).join(`, `):`—`}vehicleName(t){return this.store.vehicle(t).name}toggle(t,e){t.stopPropagation(),this.hubPrefs.toggleExpanded(e)}static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-list`]],inputs:{groups:[1,`groups`],showAll:[1,`showAll`]},outputs:{toggleShowAll:`toggleShowAll`,openGroup:`openGroup`,openShipment:`openShipment`,addShipment:`addShipment`,resetFilters:`resetFilters`},decls:17,vars:8,consts:[[1,`glist`],[1,`glist-head`],[`role`,`button`,`tabindex`,`0`,1,`grow-row`,3,`click`,`keydown.enter`],[1,`trade-bar`,3,`background`],[1,`caret`,3,`click`,`keydown.enter`,`matTooltip`],[1,`min0`],[1,`g-title`],[1,`t`,3,`innerHTML`],[1,`go`],[1,`g-sub`],[1,`clm-nowrap`],[1,`clm-progress`,3,`matTooltip`],[1,`b`],[1,`clm-row`,`wp-st`],[1,`clm-cap`],[1,`ships`],[1,`trade-bar`],[1,`clm-ell`,3,`innerHTML`],[1,`g-sub`,`clm-ell`],[3,`innerHTML`],[3,`status`],[1,`show-all`,`clm-cap`],[1,`clm-link`,3,`click`],[`role`,`button`,`tabindex`,`0`,1,`srow`,3,`grid-template-columns`],[1,`show-all`],[`role`,`button`,`tabindex`,`0`,1,`srow`,3,`click`,`keydown.enter`],[1,`s-name`],[1,`clm-ell`,`strong`,3,`innerHTML`],[1,`g-sub`,3,`innerHTML`],[1,`clm-ell`],[1,`clm-faint`],[3,`clearFilters`]],template:function(e,n){if(e&1&&(pC(0),sn(1,`div`,0)(2,`div`,1),Ei$1(3,`span`),sn(4,`span`),wi$1(5),ln(),Co(6,xn,2,0,`span`),sn(7,`span`),wi$1(8),ln(),Co(9,Cn,2,1,`span`),sn(10,`span`),wi$1(11,`Shipments`),ln(),sn(12,`span`),wi$1(13,`Status`),ln()(),HN(14,$n,32,37,null,null,vn,!1,Dn,1,0,`clm-hub-empty`),ln()),e&2){let a=TA(n.prefs());yt(2),Jh(`grid-template-columns`,n.cols()),yt(3),md(n.groupLabel()),yt(),Eo(n.showLocation()?6:-1),yt(2),md(a.groupBy===`wp`?`Booking window`:`Shipment dates`),yt(),Eo(n.showParties()?9:-1),yt(5),$N(n.rows())}},dependencies:[tJ,eJ,Bee,zF,Tt$1,y,Dn$1,vn$1,ae,WS,yn$1],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 0 auto}.glist[_ngcontent-%COMP%]{background:#fff;border-radius:var(--%NS%radius-large);box-shadow:var(--%NS%elevation-card);overflow:hidden;flex:1 0 auto;display:flex;flex-direction:column}.glist-head[_ngcontent-%COMP%], .grow-row[_ngcontent-%COMP%], .srow[_ngcontent-%COMP%]{display:grid;align-items:center}.glist-head[_ngcontent-%COMP%]{background:var(--%NS%color-surface-subtle);font-size:12px;line-height:16px;font-weight:500;letter-spacing:.5px;color:var(--%NS%color-text-secondary);border-bottom:1px solid var(--%NS%color-border-default)}.glist-head[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:10px 8px 10px 16px}.grow-row[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%color-border-default);position:relative;cursor:pointer;background:#fff}.grow-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:9px 8px 9px 16px;min-width:0}.grow-row[_ngcontent-%COMP%] > .caret[_ngcontent-%COMP%]{padding:0}.grow-row[_ngcontent-%COMP%]:hover{background:var(--%NS%color-action-outline-hover)}.trade-bar[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;width:4px;padding:0!important}.caret[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;color:var(--%NS%color-icon-default);margin-left:8px;transition:transform .15s,background .12s;border:0;background:none;cursor:pointer}.caret[_ngcontent-%COMP%]:hover{background:var(--%NS%color-surface-selected);color:var(--%NS%color-olive-600)}.caret.open[_ngcontent-%COMP%]{transform:rotate(90deg)}.min0[_ngcontent-%COMP%]{min-width:0}.g-title[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.1px;display:flex;align-items:center;gap:8px;min-width:0}.g-title[_ngcontent-%COMP%]   .t[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.g-title[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:var(--%NS%color-olive-600);opacity:0;transition:opacity .12s}.grow-row[_ngcontent-%COMP%]:hover   .g-title[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%]{opacity:1}.g-sub[_ngcontent-%COMP%]{font-size:12px;line-height:16px;letter-spacing:.2px;color:var(--%NS%color-text-secondary);margin-top:2px;font-weight:400}.wp-st[_ngcontent-%COMP%]{gap:6px}.ships[_ngcontent-%COMP%]{background:var(--%NS%color-surface-page);border-bottom:1px solid var(--%NS%color-border-default)}.srow[_ngcontent-%COMP%]{border-top:1px solid var(--%NS%color-border-default);cursor:pointer;font-size:14px}.srow[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:8px 8px 8px 16px;min-width:0}.srow[_ngcontent-%COMP%]:first-child{border-top:0}.srow[_ngcontent-%COMP%]:hover{background:var(--%NS%color-action-outline-hover)}.grow-row[_ngcontent-%COMP%]:focus-visible, .srow[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%color-border-focus);outline-offset:-2px}.s-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;min-width:0}.strong[_ngcontent-%COMP%]{font-weight:500}.show-all[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 0 12px 60px;font-size:14px}`]})};var Bn=[`grid`];function An(i,t){if(i&1){let e=Xh();sn(0,`div`,14)(1,`mat-calendar`,15),Xe$1(`selectedChange`,function(a){bl(e);let l=hd();return _l(l.pickDate(a))}),ln(),sn(2,`div`,16)(3,`button`,17),Xe$1(`click`,function(){bl(e);let a=hd();return _l(a.pickDate(a.todayDate()))}),wi$1(4,`Today`),ln()()()}if(i&2){let e=hd();yt(),UD(`startAt`,e.startDate())(`headerComponent`,e.calendarHeader)}}function Rn(i,t){if(i&1&&(sn(0,`span`),wi$1(1),ln()),i&2){let e=hd(2);yt(),md(e.infoLabel())}}function Gn(i,t){if(i&1&&(sn(0,`div`),wi$1(1),ln()),i&2){let e=t.$implicit;Jh(`grid-column`,e.span?`span `+e.span:null),yt(),md(e.label)}}function jn(i,t){if(i&1&&(sn(0,`div`,30),wi$1(1),ln()),i&2){let e=t.$implicit;wo(e.cls),UD(`matTooltip`,e.tip??``),yt(),md(e.label)}}function Wn(i,t){if(i&1&&Ei$1(0,`div`),i&2){let e=t.$implicit;wo(e.cls)}}function qn(i,t){if(i&1&&(sn(0,`div`,31),HN(1,Wn,1,2,`div`,32,BN),ln()),i&2){let e=hd(2);Jh(`grid-template-columns`,e.bg().template),yt(),$N(e.bg().cols)}}function Xn(i,t){if(i&1&&Ei$1(0,`i`,43),i&2){let e=hd(2).$implicit,n=hd(2);Jh(`background`,n.tradeColor(e.g.trade))}}function Yn(i,t){if(i&1&&(Ei$1(0,`div`,38),VA(1,`clmHighlight`)),i&2){let e=hd(2).$implicit;hd(2);let n=NA(0);UD(`innerHTML`,UA(1,1,e.info,n.search),ix)}}function Un(i,t){if(i&1){let e=Xh();sn(0,`div`,44),Xe$1(`click`,function(a){let l=bl(e),g=hd(2).$implicit,m=hd(2);return _l(l.jump?m.jump(a,l.jump):m.openGroup.emit(g.g.key))})(`keydown.enter`,function(a){let l=bl(e),g=hd(2).$implicit,m=hd(2);return _l(l.jump?m.jump(a,l.jump):m.openGroup.emit(g.g.key))}),wi$1(1),ln()}if(i&2){let e=t;fA(e.style),wo(e.cls),UD(`matTooltip`,e.tip),yt(),Si$1(` `,e.label,` `)}}function Qn(i,t){if(i&1&&Ei$1(0,`i`,45),i&2){let e=t.$implicit;Jh(`left`,e.left,`%`)(`background`,e.color)}}function Zn(i,t){if(i&1){let e=Xh();sn(0,`div`,26)(1,`div`,33),Xe$1(`click`,function(){bl(e);let a=hd().$implicit,l=hd(2);return _l(l.openGroup.emit(a.g.key))})(`keydown.enter`,function(){bl(e);let a=hd().$implicit,l=hd(2);return _l(l.openGroup.emit(a.g.key))}),Co(2,Xn,1,2,`i`,34),sn(3,`button`,35),Xe$1(`click`,function(a){bl(e);let l=hd().$implicit,g=hd(2);return _l(g.toggle(a,l.key))})(`keydown.enter`,function(a){return a.stopPropagation()}),sn(4,`mat-icon`),wi$1(5,`chevron_right`),ln()(),sn(6,`div`,36),Ei$1(7,`div`,37),VA(8,`clmHighlight`),Co(9,Yn,2,4,`div`,38),ln(),sn(10,`span`,39),wi$1(11),ln()(),sn(12,`div`,40),$D(13,29),Co(14,Un,2,6,`div`,41),HN(15,Qn,1,4,`i`,42,BN),ln()()}if(i&2){let e,n=hd().$implicit;hd();let a=JN(15);hd();let l=NA(0);yt(2),Eo(n.g.wp?2:-1),yt(),_e(`open`,n.open),UD(`matTooltip`,(n.open?`Hide`:`Show`)+` shipments`),Te(`aria-expanded`,n.open)(`aria-label`,(n.open?`Hide`:`Show`)+` shipments of `+n.g.title),yt(4),UD(`matTooltip`,n.g.title)(`innerHTML`,UA(8,12,n.g.title,l.search),ix),yt(2),Eo(n.info?9:-1),yt(2),md(n.count),yt(2),UD(`ngTemplateOutlet`,a),yt(),Eo((e=n.span)?14:-1,e),yt(),$N(n.ticks)}}function Jn(i,t){if(i&1){let e=Xh();sn(0,`div`,51),Xe$1(`click`,function(a){bl(e);let l=hd(2).$implicit,g=hd(2);return _l(g.jump(a,l.bar.jump))})(`keydown.enter`,function(a){bl(e);let l=hd(2).$implicit,g=hd(2);return _l(g.jump(a,l.bar.jump))}),wi$1(1),ln()}if(i&2){let e=hd(2).$implicit;fA(e.bar.style),UD(`matTooltip`,e.bar.tip),yt(),Si$1(` `,e.bar.label,` `)}}function Kn(i,t){if(i&1&&Ei$1(0,`mat-icon`,53),i&2){let e=hd(3).$implicit;UD(`svgIcon`,`clm:`+e.bar.icon)}}function ei(i,t){if(i&1){let e=Xh();sn(0,`div`,52),Xe$1(`click`,function(){bl(e);let a=hd(2).$implicit,l=hd(2);return _l(l.openShipment.emit(a.s.id))})(`keydown.enter`,function(){bl(e);let a=hd(2).$implicit,l=hd(2);return _l(l.openShipment.emit(a.s.id))}),Co(1,Kn,1,1,`mat-icon`,53),ln()}if(i&2){let e=hd(2).$implicit;fA(e.bar.style),UD(`matTooltip`,e.bar.tip),yt(),Eo(e.bar.icon?1:-1)}}function ti(i,t){if(i&1){let e=Xh();sn(0,`div`,26)(1,`div`,46),Xe$1(`click`,function(){bl(e);let a=hd().$implicit,l=hd(2);return _l(l.openShipment.emit(a.s.id))})(`keydown.enter`,function(){bl(e);let a=hd().$implicit,l=hd(2);return _l(l.openShipment.emit(a.s.id))}),Ei$1(2,`clm-ship-icon`,47),sn(3,`div`,36),Ei$1(4,`div`,37),VA(5,`clmHighlight`),Ei$1(6,`div`,38),VA(7,`clmHighlight`),ln()(),sn(8,`div`,48),$D(9,29),Co(10,Jn,2,4,`div`,49)(11,ei,2,4,`div`,50),ln()()}if(i&2){let e=hd().$implicit;hd();let n=JN(15);hd();let a=NA(0);yt(2),UD(`status`,e.s.status),yt(2),UD(`matTooltip`,e.s.name)(`innerHTML`,UA(5,6,e.s.name,a.search),ix),yt(2),UD(`innerHTML`,UA(7,9,e.line,a.search),ix),yt(3),UD(`ngTemplateOutlet`,n),yt(),Eo(e.bar.jump?10:11)}}function ni(i,t){if(i&1&&(sn(0,`div`,26)(1,`div`,54)(2,`div`,55),wi$1(3,`No shipments yet`),ln()(),sn(4,`div`,48),$D(5,29),ln()()),i&2){hd(2);let e=JN(15);yt(5),UD(`ngTemplateOutlet`,e)}}function ii(i,t){if(i&1){let e=Xh();sn(0,`button`,59),Xe$1(`click`,function(){bl(e);let a=hd(2).$implicit,l=hd(2);return _l(l.toggleShowAll.emit(a.key))}),sn(1,`mat-icon`),wi$1(2),ln(),wi$1(3),ln()}if(i&2){let e=hd(2).$implicit;yt(2),md(e.all?`expand_less`:`expand_more`),yt(),Si$1(``,e.all?`Show less`:`Show all `+e.total,` `)}}function ai(i,t){i&1&&(sn(0,`span`,60),wi$1(1,`·`),ln())}function oi(i,t){if(i&1){let e=Xh();Co(0,ai,2,0,`span`,60),sn(1,`button`,59),Xe$1(`click`,function(){bl(e);let a=hd(2).$implicit,l=hd(2);return _l(l.addShipment.emit(a.addWp))}),sn(2,`mat-icon`),wi$1(3,`add`),ln(),wi$1(4,`Add shipment `),ln()}if(i&2){let e=hd(2).$implicit;Eo(e.more?0:-1)}}function ri(i,t){if(i&1&&(sn(0,`div`,26)(1,`div`,56),Co(2,ii,4,2,`button`,57),Co(3,oi,5,1),ln(),sn(4,`div`,58),$D(5,29),ln()()),i&2){let e=hd().$implicit;hd();let n=JN(15);yt(2),Eo(e.more?2:-1),yt(),Eo(e.addWp?3:-1),yt(2),UD(`ngTemplateOutlet`,n)}}function li(i,t){if(i&1&&Co(0,Zn,17,15,`div`,26)(1,ti,12,12,`div`,26)(2,ni,6,1,`div`,26)(3,ri,6,3,`div`,26),i&2){let e,n=t.$implicit;Eo((e=n.kind)===`group`?0:e===`ship`?1:e===`none`?2:e===`more`?3:-1)}}function ci(i,t){if(i&1&&(sn(0,`div`,18,1)(2,`div`,19)(3,`div`,20)(4,`b`),wi$1(5),ln(),Co(6,Rn,2,1,`span`),ln()(),sn(7,`div`,21)(8,`div`,22),HN(9,Gn,2,3,`div`,23,BN),ln(),sn(11,`div`,24),HN(12,jn,2,4,`div`,25,BN),ln()(),_r(14,qn,3,2,`ng-template`,null,2,HA),HN(16,li,4,1,null,null,BN),sn(18,`div`,26),Ei$1(19,`div`,27),sn(20,`div`,28),$D(21,29),ln()()()),i&2){let e=JN(15),n=hd();fA(n.gridStyle()),yt(5),md(n.groupLabel()),yt(),Eo(n.infoLabel()?6:-1),yt(2),Jh(`grid-template-columns`,n.header().template),yt(),$N(n.header().top),yt(2),Jh(`grid-template-columns`,n.bg().template),yt(),$N(n.header().bottom),yt(4),$N(n.rows()),yt(5),UD(`ngTemplateOutlet`,e)}}function si(i,t){if(i&1){let e=Xh();sn(0,`clm-hub-empty`,61),Xe$1(`clearFilters`,function(){bl(e);let a=hd();return _l(a.resetFilters.emit())}),ln()}}var di=372;var Fe=class i{groups=Mi$1.required();showAll=Mi$1.required();toggleShowAll=y5();openGroup=y5();openShipment=y5();addShipment=y5();resetFilters=y5();store=f($S);hubPrefs=f(b);today=f(VS);grid=_5(`grid`);prefs=this.hubPrefs.value;calendarOpen=Y(!1);calendarHeader=Ge;calendarPositions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`,offsetY:4}];flash=Y(!1);tradeColor=kJ;range=Fe$1(()=>{let t=this.prefs(),e=t.period*7,n=t.rangeStart;return{days:e,start:n,end:bn$1(n,e-1),year:t.period>=52,weeks:e/7}});todayDate=Fe$1(()=>Zi(this.today));startDate=Fe$1(()=>Zi(this.range().start));gridStyle=Fe$1(()=>{let t=this.range();return{"grid-template-columns":`${di}px minmax(${t.year?t.weeks*20:t.days*16}px, 1fr)`,"grid-template-rows":`repeat(${this.rows().length+1}, max-content) minmax(0, 1fr)`}});bg=Fe$1(()=>{let t=this.range();if(t.year){let n=Array.from({length:t.weeks},(a,l)=>({cls:this.isTodayWeek(bn$1(t.start,l*7))?`td`:``}));return{template:`repeat(${t.weeks},1fr)`,cols:n}}let e=Array.from({length:t.days},(n,a)=>{let l=bn$1(t.start,a);return{cls:l===this.today?`td`:sc(l)>4?`we`:``}});return{template:`repeat(${t.days},1fr)`,cols:e}});header=Fe$1(()=>{let t=this.range(),e=Array.from({length:t.weeks},(l,g)=>bn$1(t.start,g*7));if(t.year){let l=[];e.forEach(m=>{let C=oJ(m,!0)+` `+m.slice(0,4),G=l[l.length-1];G&&G.tip===C?G.span++:l.push({label:C,span:1,tip:C})}),l.forEach(m=>{m.span<2&&(m.label=``)});return{top:l,bottom:e.map(m=>({label:iJ(m)%2?``:String(iJ(m)),cls:this.isTodayWeek(m)?`td`:``,tip:`Week ${iJ(m)} \xB7 ${Ki(m)} \u2013 ${Ki(bn$1(m,6))}`})),template:`repeat(${t.weeks},1fr)`}}return{top:e.map(l=>{let g=bn$1(l,6),m=oJ(l,!0),C=oJ(g,!0);return{label:`W${iJ(l)}, ${m}${C!==m?`–`+C:``} ${l.slice(0,4)}`}}),bottom:Array.from({length:t.days},(l,g)=>{let m=bn$1(t.start,g);return{label:String(+m.slice(8)),cls:m===this.today?`td`:sc(m)>4?`we`:``,tip:m===this.today?`Today`:`${TS(m,!0)}, ${Ki(m)}`}}),template:`repeat(${t.weeks},1fr)`}});infoLabel=Fe$1(()=>{let t=this.prefs().columns;return[(t.sender||t.recipient)&&[t.sender&&`Sender`,t.recipient&&`Recipient`].filter(Boolean).join(` → `),(t.building||t.floor)&&[t.building&&`Building`,t.floor&&`Floor`].filter(Boolean).join(` · `)].filter(Boolean).join(`  ·  `)});groupLabel=Fe$1(()=>ve[this.prefs().groupBy]);rows=Fe$1(()=>{let t=this.prefs(),e=this.range(),n=[];for(let a of this.groups()){let l=t.groupBy+`:`+a.key,g=!!t.expanded[l]||!!(t.search&&a.matched?.length),m=a.shipments;if(n.push({kind:`group`,g:a,key:l,open:g,count:m.length,info:this.infoLine({sender:a.wp?a.wp.sender:_e$1(m,`sender`),recipient:a.wp?a.wp.recipient:_e$1(m,`recipient`),building:a.wp?a.wp.building:_e$1(m,`building`),floor:a.wp?a.wp.floor:_e$1(m,`floor`)}),span:this.groupSpan(a),ticks:m.filter(k=>this.inRange(k.date)).map(k=>({left:this.pct(k.date)+(e.year?0:50/e.days),color:kS[k.status].color}))}),!g)continue;m.length||n.push({kind:`none`});let C=!!this.showAll()[l],G=k=>Math.abs(Ot(k.date,this.today))-(Ot(k.date,this.today)>=0?.5:0),ge=m.filter(k=>this.inRange(k.date)),Y=[...ge.sort((k,De)=>G(k)-G(De)),...m.filter(k=>!ge.includes(k))];(C?m:Y.slice(0,re).sort((k,De)=>k.date.localeCompare(De.date))).forEach(k=>n.push({kind:`ship`,s:k,bar:this.shipBar(k),line:`${k.no} \xB7 ${TS(k.date)} ${MS(k.date)} \xB7 ${k.start}\u2013${k.end} \xB7 ${k.up}`}));let Ye=!!a.wp&&this.store.wpStatus(a.wp)!==`completed`;(m.length>re||Ye)&&n.push({kind:`more`,key:l,total:m.length,all:C,more:m.length>re,addWp:Ye?a.wp.id:void 0})}return n});anyOpen=Fe$1(()=>this.groups().some(t=>this.prefs().expanded[this.prefs().groupBy+`:`+t.key]));constructor(){E5(()=>{this.range();let t=this.grid()?.nativeElement,e=t?.querySelector(`.tl-days .td`);t&&e&&t.scrollWidth>t.clientWidth&&(t.scrollLeft=e.offsetLeft-t.clientWidth/2)})}toggle(t,e){t.stopPropagation(),this.hubPrefs.toggleExpanded(e)}shift(t){let e=this.range().year?13:4;this.setStart(bn$1(this.prefs().rangeStart,t*e*7))}goToday(){this.setStart(this.hubPrefs.todayStart(this.prefs().period))}jump(t,e){t.stopPropagation(),this.setStart(bn$1(rJ(e),-7*(this.range().year?13:1)))}pickDate(t){if(this.calendarOpen.set(!1),!t)return;let e=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;this.setStart(bn$1(rJ(e),-7*(this.range().year?13:1)))}toggleAll(){let t=this.anyOpen();this.hubPrefs.update(e=>{let n=m({},e.expanded);return this.groups().forEach(a=>{let l=e.groupBy+`:`+a.key;t?delete n[l]:n[l]=!0}),{expanded:n}})}rangeLabel(){let t=this.range();return`${Ki(t.start)} \u2013 ${Ki(t.end)} (${t.year?`1Y`:`4W`})`}setStart(t){this.hubPrefs.update({rangeStart:t}),this.flash.set(!0),setTimeout(()=>this.flash.set(!1),900)}pct(t){return Ot(t,this.range().start)/this.range().days*100}inRange(t){return Ot(t,this.range().start)>=0&&Ot(t,this.range().end)<=0}isTodayWeek(t){let e=Ot(this.today,t);return e>=0&&e<7}infoLine(t){let e=this.prefs().columns,n=[];return(e.sender||e.recipient)&&n.push([e.sender&&t.sender,e.recipient&&t.recipient].filter(Boolean).join(` → `)),(e.building||e.floor)&&n.push([e.building&&t.building,e.floor&&t.floor].filter(Boolean).join(` · `)),n.filter(Boolean).join(`  ·  `)}groupSpan(t){if(!t.from||!t.to)return;let{start:e,end:n}=this.range();if(!(Ot(t.to,e)<0||Ot(t.from,n)>0)){let l=Math.max(0,this.pct(t.from)),g=Math.min(100,this.pct(bn$1(t.to,1)));return{style:{left:l+`%`,width:g-l+`%`,background:t.wp?kJ(t.trade):`#969300`},cls:[t.wp&&OJ(t.trade)?`dark-t`:``,this.pct(t.from)<0?`clip-l`:``,this.pct(bn$1(t.to,1))>100?`clip-r`:``].join(` `),label:t.title,tip:`${t.title}
${Ki(t.from)} \u2013 ${Ki(t.to)} \xB7 ${t.shipments.length} shipments`}}let a=Ot(t.to,e)<0;return{style:a?{left:`4px`}:{right:`4px`},cls:`out`,label:a?`‹ ended `+MS(t.to):`starts `+MS(t.from)+` ›`,tip:`Jump to ${a?`end`:`start`}`,jump:a?t.to:t.from}}shipBar(t){let e=kS[t.status],{year:n,days:a,start:l}=this.range();if(!this.inRange(t.date)){let m=Ot(t.date,l)<0;return{style:m?{left:`4px`,top:`12px`}:{right:`4px`,top:`12px`},cls:`out`,label:`${m?`‹ `:``}${MS(t.date)}${m?``:` ›`}`,tip:`Show ${Ki(t.date)} in timeline`,jump:t.date}}let g={left:`calc(${this.pct(t.date)}% + ${n?0:2}px)`,width:n?`max(8px, ${100/a}%)`:`calc(${100/a}% - 4px)`,padding:n?`0`:`0 6px`};return e.outline?Object.assign(g,{background:`#fff`,"box-shadow":`inset 0 0 0 2px ${e.color}`,color:e.fg}):Object.assign(g,{background:e.color,color:PJ(e.color)?`rgba(0,0,0,.78)`:`#fff`}),{style:g,cls:``,label:``,icon:n?void 0:e.icon,tip:`${t.name}
${t.no} \xB7 ${e.label}
${TS(t.date)}, ${Ki(t.date)} \xB7 ${t.start}\u2013${t.end}
${this.store.vehicle(t.vehicle).name} \xB7 ${t.up}`}}static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-timeline`]],viewQuery:function(e,n){e&1&&qD(n.grid,Bn,5),e&2&&QN()},inputs:{groups:[1,`groups`],showAll:[1,`showAll`]},outputs:{toggleShowAll:`toggleShowAll`,openGroup:`openGroup`,openShipment:`openShipment`,addShipment:`addShipment`,resetFilters:`resetFilters`},decls:25,vars:12,consts:[[`calOrigin`,`cdkOverlayOrigin`],[`grid`,``],[`bgCols`,``],[1,`tl`],[1,`tl-bar`],[`mat-button`,``,1,`today`,3,`click`],[`mat-icon-button`,``,`cdkOverlayOrigin`,``,`matTooltip`,`Pick a date`,`aria-label`,`Pick a date`,3,`click`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`detach`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`],[`mat-icon-button`,``,`aria-label`,`Previous period`,1,`nav`,3,`click`,`matTooltip`],[1,`tl-range`],[`mat-icon-button`,``,`aria-label`,`Next period`,1,`nav`,3,`click`,`matTooltip`],[1,`clm-sp`],[`mat-button`,``,1,`clm-neutral-btn`,3,`click`],[1,`tl-grid`,3,`style`],[1,`cal-pop`],[3,`selectedChange`,`startAt`,`headerComponent`],[1,`cal-foot`],[`mat-button`,``,1,`clm-btn-sm`,3,`click`],[1,`tl-grid`],[1,`tl-corner`],[1,`tl-colhead`],[1,`tl-hd`],[1,`tl-weeks`],[3,`grid-column`],[1,`tl-days`],[3,`class`,`matTooltip`],[1,`tl-row`],[1,`tl-left`,`tl-fill`],[1,`tl-rcell`,`tl-fill`],[3,`ngTemplateOutlet`],[3,`matTooltip`],[1,`tl-bgcols`],[3,`class`],[`role`,`button`,`tabindex`,`0`,1,`tl-lcell`,`g`,`tl-left`,3,`click`,`keydown.enter`],[1,`trade-bar`,3,`background`],[1,`caret`,3,`click`,`keydown.enter`,`matTooltip`],[1,`tt`],[1,`t1`,3,`matTooltip`,`innerHTML`],[1,`t2`,3,`innerHTML`],[1,`clm-count`],[1,`tl-rcell`],[`matTooltipClass`,`clm-tip-multiline`,`role`,`button`,`tabindex`,`-1`,1,`tl-span`,3,`class`,`style`,`matTooltip`],[1,`tl-tick`,3,`left`,`background`],[1,`trade-bar`],[`matTooltipClass`,`clm-tip-multiline`,`role`,`button`,`tabindex`,`-1`,1,`tl-span`,3,`click`,`keydown.enter`,`matTooltip`],[1,`tl-tick`],[`role`,`button`,`tabindex`,`0`,1,`tl-lcell`,`s`,`tl-left`,3,`click`,`keydown.enter`],[3,`status`],[1,`tl-rcell`,`s`],[`role`,`button`,`tabindex`,`-1`,1,`tl-span`,`out`,3,`style`,`matTooltip`],[`matTooltipClass`,`clm-tip-multiline`,`role`,`button`,`tabindex`,`-1`,1,`tl-ship`,3,`style`,`matTooltip`],[`role`,`button`,`tabindex`,`-1`,1,`tl-span`,`out`,3,`click`,`keydown.enter`,`matTooltip`],[`matTooltipClass`,`clm-tip-multiline`,`role`,`button`,`tabindex`,`-1`,1,`tl-ship`,3,`click`,`keydown.enter`,`matTooltip`],[3,`svgIcon`],[1,`tl-lcell`,`s`,`tl-left`],[1,`tt`,`clm-cap`],[1,`tl-showall`,`tl-left`],[1,`clm-link`],[1,`tl-rcell`,`s`,`showall`],[1,`clm-link`,3,`click`],[1,`clm-faint`],[3,`clearFilters`]],template:function(e,n){if(e&1&&(pC(0),sn(1,`div`,3)(2,`div`,4)(3,`button`,5),Xe$1(`click`,function(){return n.goToday()}),wi$1(4,`TODAY`),ln(),sn(5,`button`,6,0),Xe$1(`click`,function(){return n.calendarOpen.set(!n.calendarOpen())}),sn(7,`mat-icon`),wi$1(8,`calendar_today`),ln()(),_r(9,An,5,2,`ng-template`,7),Xe$1(`overlayOutsideClick`,function(){return n.calendarOpen.set(!1)})(`detach`,function(){return n.calendarOpen.set(!1)}),sn(10,`button`,8),Xe$1(`click`,function(){return n.shift(-1)}),sn(11,`mat-icon`),wi$1(12,`chevron_left`),ln()(),sn(13,`span`,9),wi$1(14),ln(),sn(15,`button`,10),Xe$1(`click`,function(){return n.shift(1)}),sn(16,`mat-icon`),wi$1(17,`chevron_right`),ln()(),Ei$1(18,`span`,11),sn(19,`button`,12),Xe$1(`click`,function(){return n.toggleAll()}),sn(20,`mat-icon`),wi$1(21),ln(),wi$1(22),ln()(),Co(23,ci,22,9,`div`,13)(24,si,1,0,`clm-hub-empty`),ln()),e&2){let a=JN(6),l=n.range();TA(n.prefs()),yt(9),UD(`cdkConnectedOverlayOrigin`,a)(`cdkConnectedOverlayOpen`,n.calendarOpen())(`cdkConnectedOverlayPositions`,n.calendarPositions),yt(),UD(`matTooltip`,`Previous `+(l.year?`3 months`:`4 weeks`)),yt(3),_e(`flash`,n.flash()),yt(),md(n.rangeLabel()),yt(),UD(`matTooltip`,`Next `+(l.year?`3 months`:`4 weeks`)),yt(6),md(n.anyOpen()?`unfold_less`:`unfold_more`),yt(),Si$1(``,n.anyOpen()?`Collapse all`:`Expand all`,` `),yt(),Eo(n.groups().length?23:24)}},dependencies:[kk,Hm,IR,cF,_S,sF,tJ,eJ,Bee,zF,hn$1,Ae,Tt$1,ae,yn$1],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0}.tl[_ngcontent-%COMP%]{background:#fff;border-radius:var(--%NS%radius-large);box-shadow:var(--%NS%elevation-card);display:flex;flex-direction:column;overflow:hidden;flex:1;min-height:0}.tl-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 12px 8px 16px;border-bottom:1px solid var(--%NS%color-border-default);min-height:56px}.today[_ngcontent-%COMP%]{font-weight:700;letter-spacing:1.25px}.nav[_ngcontent-%COMP%]{--%NS%mat-icon-button-icon-color: var(--%NS%color-action-primary)}.tl-range[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.1px;min-width:220px;text-align:center;border-radius:var(--%NS%radius-small);padding:4px 0;transition:background .8s}.tl-range.flash[_ngcontent-%COMP%]{background:var(--%NS%color-surface-selected);transition:none}.tl-grid[_ngcontent-%COMP%]{display:grid;overflow:auto;position:relative;flex:1;min-height:0;align-content:stretch}.tl-left[_ngcontent-%COMP%]{position:sticky;left:0;z-index:2;background:#fff;border-right:1px solid var(--%NS%color-border-default)}.tl-hd[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;background:#fff}.tl-corner[_ngcontent-%COMP%]{position:sticky;left:0;top:0;z-index:4;background:var(--%NS%color-surface-subtle);border-right:1px solid var(--%NS%color-border-default);border-bottom:1px solid var(--%NS%color-border-default);display:grid;align-items:end;height:61px}.tl-weeks[_ngcontent-%COMP%], .tl-days[_ngcontent-%COMP%]{display:grid;height:30px;border-bottom:1px solid var(--%NS%color-border-default);background:var(--%NS%color-surface-subtle)}.tl-weeks[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-right:1px solid var(--%NS%color-border-default);font-size:12px;font-weight:500;letter-spacing:.5px;color:var(--%NS%color-text-primary);display:grid;place-items:center;white-space:nowrap;overflow:hidden;min-width:0}.tl-days[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-right:1px solid #e6e6e8;font-size:12px;font-weight:500;display:grid;place-items:center;color:var(--%NS%color-text-primary);min-width:0;letter-spacing:0}.tl-days[_ngcontent-%COMP%] > div.we[_ngcontent-%COMP%]{color:var(--%NS%color-text-tertiary)}.tl-days[_ngcontent-%COMP%] > div.td[_ngcontent-%COMP%]{background:var(--%NS%color-olive-200);color:#fff}.tl-row[_ngcontent-%COMP%]{display:contents}.tl-colhead[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:100%;padding:0 16px;gap:2px}.tl-colhead[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:12px;font-weight:500;letter-spacing:.5px;color:var(--%NS%color-text-secondary)}.tl-colhead[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;letter-spacing:.4px;color:var(--%NS%color-text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tl-lcell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:8px;height:56px;padding:0 12px 0 8px;border-bottom:1px solid var(--%NS%color-border-default);cursor:pointer;background:#fff;min-width:0}.tl-lcell[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%color-border-focus);outline-offset:-2px}.tl-lcell[_ngcontent-%COMP%]   .trade-bar[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;width:4px}.caret[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;color:var(--%NS%color-icon-default);transition:transform .15s,background .12s;border:0;background:none;cursor:pointer;flex:none;padding:0}.caret[_ngcontent-%COMP%]:hover{background:var(--%NS%color-surface-selected);color:var(--%NS%color-olive-600)}.caret.open[_ngcontent-%COMP%]{transform:rotate(90deg)}.tt[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.t1[_ngcontent-%COMP%]{font-size:14px;line-height:18px;letter-spacing:.1px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--%NS%color-text-primary)}.t2[_ngcontent-%COMP%]{font-size:12px;line-height:16px;letter-spacing:.2px;color:var(--%NS%color-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tl-lcell[_ngcontent-%COMP%]   .clm-count[_ngcontent-%COMP%]{flex:none}.tl-lcell.s[_ngcontent-%COMP%]{background:var(--%NS%color-surface-page);height:48px;padding-left:44px}.tl-lcell.s[_ngcontent-%COMP%]   .t1[_ngcontent-%COMP%]{font-weight:400;letter-spacing:.5px}.tl-fill[_ngcontent-%COMP%]{min-height:0;border-bottom:0!important;height:auto!important}.tl-rcell[_ngcontent-%COMP%]{position:relative;height:56px;border-bottom:1px solid var(--%NS%color-border-default)}.tl-rcell.s[_ngcontent-%COMP%]{background:var(--%NS%color-surface-page);height:48px}.tl-rcell.showall[_ngcontent-%COMP%]{height:40px}.tl-row[_ngcontent-%COMP%]:hover   .tl-lcell[_ngcontent-%COMP%], .tl-row[_ngcontent-%COMP%]:hover   .tl-rcell[_ngcontent-%COMP%]:not(.tl-fill){background:var(--%NS%color-action-outline-hover)}.tl-bgcols[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;pointer-events:none}.tl-bgcols[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-right:1px solid #f0f0f1}.tl-bgcols[_ngcontent-%COMP%] > div.we[_ngcontent-%COMP%]{background:#00000005}.tl-bgcols[_ngcontent-%COMP%] > div.td[_ngcontent-%COMP%]{background:#9693001a}.tl-span[_ngcontent-%COMP%]{position:absolute;top:17px;height:22px;border-radius:var(--%NS%radius-small);display:flex;align-items:center;padding:0 8px;font-size:12px;font-weight:500;letter-spacing:.2px;color:#fff;white-space:nowrap;overflow:hidden;cursor:pointer}.tl-span.dark-t[_ngcontent-%COMP%]{color:#000c}.tl-span.clip-l[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.tl-span.clip-r[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.tl-span.out[_ngcontent-%COMP%]{background:var(--%NS%color-surface-subtle);color:var(--%NS%color-text-secondary)}.tl-span[_ngcontent-%COMP%]:hover{box-shadow:var(--%NS%elevation-card)}.tl-tick[_ngcontent-%COMP%]{position:absolute;top:44px;width:6px;height:6px;border-radius:50%;transform:translate(-3px);pointer-events:none}.tl-ship[_ngcontent-%COMP%]{position:absolute;top:10px;height:28px;border-radius:var(--%NS%radius-small);display:flex;align-items:center;gap:4px;padding:0 6px;color:#fff;font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;cursor:pointer;min-width:24px;box-shadow:var(--%NS%elevation-card);transition:transform .1s}.tl-ship[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:var(--%NS%elevation-dropdown);z-index:1}.tl-ship[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:14px;height:14px;flex:none}.tl-showall[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding-left:44px;height:40px;border-bottom:1px solid var(--%NS%color-border-default);background:var(--%NS%color-surface-page);font-size:14px}.cal-pop[_ngcontent-%COMP%]{background:#fff;border-radius:var(--%NS%radius-large);box-shadow:var(--%NS%elevation-dropdown);padding:4px 4px 8px;width:284px}.cal-foot[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 8px}`]})};var pn=(i,t)=>t[0];function mi(i,t){if(i&1&&(sn(0,`span`,9),Ei$1(1,`img`,10),wi$1(2),ln()),i&2){let e=t.$implicit;yt(),UD(`src`,`fig/`+e[0]+`.svg`),yt(),md(e[1])}}function pi(i,t){if(i&1&&(sn(0,`span`,9),Ei$1(1,`img`,10),wi$1(2),ln()),i&2){let e=t.$implicit;yt(),UD(`src`,`fig/`+e[0]+`.svg`),yt(),md(e[1])}}function ui(i,t){if(i&1){let e=Xh();sn(0,`div`,3),Xe$1(`mouseenter`,function(){bl(e);let a=hd();return _l(a.hover(!0))})(`mouseleave`,function(){bl(e);let a=hd();return _l(a.hover(!1))}),sn(1,`button`,4),Xe$1(`click`,function(){bl(e);let a=hd();return _l(a.open.set(!1))}),Ei$1(2,`img`,5),ln(),sn(3,`div`,6)(4,`div`,7)(5,`b`),wi$1(6,`Working package status`),ln(),sn(7,`span`),wi$1(8,`Shows the current stage of your active work package`),ln()(),sn(9,`div`,8),HN(10,mi,3,2,`span`,9,pn),ln()(),sn(12,`div`,6)(13,`div`,7)(14,`b`),wi$1(15,`Shipment Status`),ln(),sn(16,`span`),wi$1(17,`Shows the current stage of your shipments`),ln()(),sn(18,`div`,8),HN(19,pi,3,2,`span`,9,pn),ln()()()}if(i&2){let e=hd();yt(10),$N(e.wp),yt(9),$N(e.ship)}}var gi=[[`lg-overdue`,`Overdue`],[`lg-active`,`Active`],[`lg-pending`,`Pending`],[`lg-wpdone`,`Completed`]];var _i=[[`lg-open`,`Open`],[`lg-approved`,`Approved`],[`lg-completed`,`Completed`]];var Ve=class i{open=Y(!1);wp=gi;ship=_i;positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`,offsetY:4},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,offsetY:-4}];hoverTimer;hover(t){clearTimeout(this.hoverTimer),this.hoverTimer=setTimeout(()=>this.open.set(t),t?120:200)}static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-legend`]],decls:5,vars:5,consts:[[`origin`,`cdkOverlayOrigin`],[`cdkOverlayOrigin`,``,`aria-label`,`Status legend`,1,`info-btn`,3,`mouseenter`,`mouseleave`,`click`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`detach`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`],[`role`,`dialog`,`aria-label`,`Status legend`,1,`legend`,3,`mouseenter`,`mouseleave`],[`aria-label`,`Close`,1,`lg-x`,3,`click`],[`src`,`fig/lg-close.svg`,`width`,`24`,`height`,`24`,`alt`,``],[1,`lg-sec`],[1,`lg-h`],[1,`lg-row`],[1,`lg-item`],[`width`,`20`,`height`,`20`,`alt`,``,3,`src`]],template:function(e,n){if(e&1&&(sn(0,`button`,1,0),Xe$1(`mouseenter`,function(){return n.hover(!0)})(`mouseleave`,function(){return n.hover(!1)})(`click`,function(){return n.open.set(!n.open())}),sn(2,`mat-icon`),wi$1(3,`info`),ln()(),_r(4,ui,21,0,`ng-template`,2),Xe$1(`overlayOutsideClick`,function(){return n.open.set(!1)})(`detach`,function(){return n.open.set(!1)})),e&2){let a=JN(1);_e(`on`,n.open()),yt(4),UD(`cdkConnectedOverlayOrigin`,a)(`cdkConnectedOverlayOpen`,n.open())(`cdkConnectedOverlayPositions`,n.positions)}},dependencies:[kk,Hm,tJ,eJ],styles:[`.info-btn[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;color:var(--%NS%color-icon-default);border:0;background:none;cursor:pointer;padding:0}.info-btn[_ngcontent-%COMP%]:hover, .info-btn.on[_ngcontent-%COMP%]{background:var(--%NS%color-surface-selected);color:var(--%NS%color-olive-600)}.legend[_ngcontent-%COMP%]{position:relative;background:#fff;border-radius:var(--%NS%radius-large);box-shadow:var(--%NS%elevation-topbar);padding:24px 24px 32px 32px;display:flex;flex-direction:column;gap:24px}.lg-x[_ngcontent-%COMP%]{position:absolute;top:24px;right:24px;width:24px;height:24px;border-radius:50%;border:0;background:none;padding:0;cursor:pointer}.lg-x[_ngcontent-%COMP%]:hover{background:var(--%NS%color-surface-subtle)}.lg-sec[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding-right:40px}.lg-h[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;color:var(--%NS%color-raisin-500)}.lg-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:14px;line-height:24px;font-weight:500;letter-spacing:.1px}.lg-h[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;line-height:1.44;letter-spacing:.4px}.lg-row[_ngcontent-%COMP%]{display:flex;gap:32px;padding:0 8px}.lg-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:14px;line-height:20px;letter-spacing:0;color:#474752;white-space:nowrap}.lg-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}`]})};var hi=new v(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var ze=class{source;checked;constructor(t,e){this.source=t,this.checked=e}};var Xe=(()=>{class i{_elementRef=f(B);_focusMonitor=f(Mr);_changeDetectorRef=f(ot);defaults=f(hi);_injector=f(M);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ze(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=at();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new W;toggleChange=new W;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){f(Tt).load(gS);let e=f(new Ii(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||`accent`,this.id=this._uniqueId=f(At).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(oe,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ze(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`switch`],n=[`*`];function a(l,g){l&1&&(sn(0,`span`,11),Gy(),sn(1,`svg`,13),Ei$1(2,`path`,14),ln(),sn(3,`svg`,15),Ei$1(4,`path`,16),ln()())}return he({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(g,m){if(g&1&&Bn$1(e,5),g&2){let C;dn(C=un$1())&&(m._switchElement=C.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(g,m){g&2&&(fa(`id`,m.id),Te(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),wo(m.color?`mat-`+m.color:``),_e(`mat-mdc-slide-toggle-focused`,m._focused)(`mat-mdc-slide-toggle-checked`,m.checked)(`mat-slide-toggle-full-width`,m.fullWidth)(`_mat-animation-noopable`,m._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,ae$1],color:`color`,disabled:[2,`disabled`,`disabled`,ae$1],fullWidth:[2,`fullWidth`,`fullWidth`,ae$1],disableRipple:[2,`disableRipple`,`disableRipple`,ae$1],tabIndex:[2,`tabIndex`,`tabIndex`,l=>l==null?0:FC(l)],checked:[2,`checked`,`checked`,ae$1],hideIcon:[2,`hideIcon`,`hideIcon`,ae$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ae$1]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[ft([{provide:mc,useExisting:Ye(()=>i),multi:!0},{provide:Pr,useExisting:i,multi:!0}]),xe],ngContentSelectors:n,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(g,m){if(g&1&&(Dr(),sn(0,`div`,1)(1,`button`,2,0),Xe$1(`click`,function(){return m._handleClick()}),Ei$1(3,`div`,3)(4,`span`,4),sn(5,`span`,5)(6,`span`,6)(7,`span`,7),Ei$1(8,`span`,8),ln(),sn(9,`span`,9),Ei$1(10,`span`,10),ln(),Co(11,a,5,0,`span`,11),ln()()(),sn(12,`label`,12),Xe$1(`click`,function(G){return G.stopPropagation()}),Mt(13),ln()()),g&2){let C=JN(2);UD(`labelPosition`,m.labelPosition),yt(),_e(`mdc-switch--selected`,m.checked)(`mdc-switch--unselected`,!m.checked)(`mdc-switch--checked`,m.checked)(`mdc-switch--disabled`,m.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,m.disabledInteractive),UD(`tabIndex`,m.disabled&&!m.disabledInteractive?-1:m.tabIndex)(`disabled`,m.disabled&&!m.disabledInteractive),Te(`id`,m.buttonId)(`name`,m.name)(`aria-label`,m.ariaLabel)(`aria-labelledby`,m._getAriaLabelledBy())(`aria-describedby`,m.ariaDescribedby)(`aria-required`,m.required||null)(`aria-checked`,m.checked)(`aria-disabled`,m.disabled&&m.disabledInteractive?`true`:null),yt(9),UD(`matRippleTrigger`,C)(`matRippleDisabled`,m.disableRipple||m.disabled)(`matRippleCentered`,!0),yt(),Eo(m.hideIcon?-1:11),yt(),UD(`for`,m.buttonId),Te(`id`,m._labelId)}},dependencies:[dQ,Et],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return i})();var un=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=J({type:i});static ɵinj=Q({imports:[Xe,st]})}return i})();var yi=(i,t)=>t.key;function vi(i,t){i&1&&(sn(0,`span`,8),wi$1(1,`Applies to the timeline view`),ln())}function wi(i,t){if(i&1){let e=Xh();sn(0,`mat-checkbox`,19),Xe$1(`change`,function(a){let l=bl(e).$implicit,g=hd(2);return _l(g.setColumn(l.key,a.checked))}),wi$1(1),ln()}if(i&2){let e=t.$implicit;hd(2);let n=NA(0);UD(`checked`,n.columns[e.key]),yt(),md(e.label)}}function xi(i,t){if(i&1&&(sn(0,`div`,15)(1,`mat-checkbox`,17),wi$1(2),ln(),HN(3,wi,2,2,`mat-checkbox`,18,yi),ln()),i&2){let e=hd(),n=NA(0);yt(),UD(`checked`,!0)(`disabled`,!0),yt(),md(e.groupLabel[n.groupBy]),yt(),$N(e.columns)}}var $e=class i{hubPrefs=f(b);toast=f(RS);prefs=this.hubPrefs.value;groupLabel=ve;columnsOpen=Y(!0);columns=[{key:`sender`,label:`Sender`},{key:`recipient`,label:`Recipient`},{key:`building`,label:`Building`},{key:`floor`,label:`Floor`}];close(){this.hubPrefs.update({panel:!1})}setPeriod(t){this.hubPrefs.update({period:t,rangeStart:this.hubPrefs.todayStart(t)})}setCompleted(t){this.hubPrefs.update({showCompleted:t}),this.toast.show(t?`Completed items are visible`:`Completed items are hidden`)}setColumn(t,e){this.hubPrefs.update(n=>({columns:A(m({},n.columns),{[t]:e})}))}resetDefaults(){this.hubPrefs.update({period:4,rangeStart:this.hubPrefs.todayStart(4),showCompleted:!0,columns:{sender:!0,recipient:!0,building:!0,floor:!0}})}static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-properties`]],decls:36,vars:11,consts:[[1,`sp-h`],[`mat-icon-button`,``,`matTooltip`,`Close`,`aria-label`,`Close`,3,`click`],[1,`sp-b`],[1,`clm-field`],[`id`,`pp-period`,1,`clm-label`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`],[`aria-labelledby`,`pp-period`,3,`selectionChange`,`value`,`disabled`],[3,`value`],[1,`clm-hint`],[1,`box`],[3,`change`,`checked`,`hideIcon`],[1,`clm-cap`],[1,`clm-label`],[1,`acc`],[1,`acc-h`,3,`click`],[1,`acc-b`],[`mat-button`,``,1,`reset`,3,`click`],[`matTooltip`,`Always visible`,3,`checked`,`disabled`],[3,`checked`],[3,`change`,`checked`]],template:function(e,n){if(e&1&&(pC(0),sn(1,`div`,0)(2,`h3`),wi$1(3,`Properties`),ln(),sn(4,`button`,1),Xe$1(`click`,function(){return n.close()}),sn(5,`mat-icon`),wi$1(6,`close`),ln()()(),sn(7,`div`,2)(8,`div`,3)(9,`span`,4),wi$1(10,`Time period`),ln(),sn(11,`mat-form-field`,5)(12,`mat-select`,6),Xe$1(`selectionChange`,function(l){return n.setPeriod(l.value)}),sn(13,`mat-option`,7),wi$1(14,`4 Weeks`),ln(),sn(15,`mat-option`,7),wi$1(16,`1 Year`),ln()()(),Co(17,vi,2,0,`span`,8),ln(),sn(18,`div`,9)(19,`mat-slide-toggle`,10),Xe$1(`change`,function(l){return n.setCompleted(l.checked)}),wi$1(20,`Completed`),ln(),sn(21,`div`,11),wi$1(22,`Show completed working packages and shipments`),ln()(),sn(23,`div`,3)(24,`span`,12),wi$1(25,`Visible columns`),ln(),sn(26,`div`,13)(27,`button`,14),Xe$1(`click`,function(){return n.columnsOpen.set(!n.columnsOpen())}),wi$1(28,` Columns`),sn(29,`mat-icon`),wi$1(30),ln()(),Co(31,xi,5,3,`div`,15),ln()(),sn(32,`button`,16),Xe$1(`click`,function(){return n.resetDefaults()}),sn(33,`mat-icon`),wi$1(34,`restart_alt`),ln(),wi$1(35,`Reset to default `),ln()()),e&2){let a=TA(n.prefs());yt(12),UD(`value`,a.period)(`disabled`,a.view!==`timeline`),yt(),UD(`value`,4),yt(2),UD(`value`,52),yt(2),Eo(a.view!==`timeline`?17:-1),yt(2),UD(`checked`,a.showCompleted)(`hideIcon`,!0),yt(8),Te(`aria-expanded`,n.columnsOpen()),yt(3),md(n.columnsOpen()?`expand_less`:`expand_more`),yt(),Eo(n.columnsOpen()?31:-1)}},dependencies:[cF,_S,sF,tJ,eJ,be,Kt,Ra,Ia,pt,un,Xe,ge,ae$2,Bee,zF],styles:[`[_nghost-%COMP%]{width:320px;flex:none;background:#fff;display:flex;flex-direction:column;align-self:stretch;border-radius:var(--%NS%radius-large);box-shadow:var(--%NS%elevation-card);animation:_ngcontent-%COMP%_slidein .18s ease-out;overflow:hidden}@keyframes _ngcontent-%COMP%_slidein{0%{opacity:0;transform:translate(16px)}to{opacity:1;transform:none}}.sp-h[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 12px 12px 16px;border-bottom:1px solid var(--%NS%color-border-default)}h3[_ngcontent-%COMP%]{font-size:20px;font-weight:500;letter-spacing:.15px}.sp-b[_ngcontent-%COMP%]{padding:12px 16px;display:flex;flex-direction:column;gap:12px;overflow:auto}.box[_ngcontent-%COMP%]{border:1px solid var(--%NS%color-border-default);border-radius:var(--%NS%radius-medium);padding:10px 14px;display:flex;flex-direction:column;gap:4px}mat-slide-toggle[_ngcontent-%COMP%]{--%NS%mat-slide-toggle-label-text-size: 14px;--%NS%mat-slide-toggle-label-text-weight: 700;--%NS%mat-slide-toggle-label-text-tracking: 1.25px;--%NS%mat-slide-toggle-label-text-color: rgba(0, 0, 0, .6);text-transform:uppercase}.acc[_ngcontent-%COMP%]{border:1px solid var(--%NS%color-border-default);border-radius:var(--%NS%radius-medium)}.acc-h[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:10px 14px;font:500 14px/18px Roboto,sans-serif;letter-spacing:.1px;border:0;background:none;cursor:pointer;color:var(--%NS%color-text-primary)}.acc-b[_ngcontent-%COMP%]{padding:0 6px 6px;display:flex;flex-direction:column}.reset[_ngcontent-%COMP%]{align-self:flex-start}`]})};var Ci=(i,t)=>t.key;function ki(i,t){if(i&1){let e=Xh();sn(0,`button`,28),Xe$1(`click`,function(){bl(e);let a=hd(),l=JN(11);return _l(a.clearSearch(l))}),sn(1,`mat-icon`),wi$1(2,`close`),ln()()}}function Si(i,t){if(i&1){let e=Xh();sn(0,`clm-check-chip`,29),Xe$1(`pressed`,function(){let a=bl(e).$implicit,l=hd();return _l(l.toggleChip(a.key))}),ln()}if(i&2){let e=t.$implicit,n=hd(),a=NA(0);UD(`label`,n.wpStatus[e.key].label)(`count`,n.counts()[e.key])(`tone`,e.tone)(`icon`,e.icon)(`checked`,a.wpStatus.includes(e.key))}}function Mi(i,t){i&1&&(sn(0,`mat-icon`,31),wi$1(1,`check`),ln())}function Ti(i,t){if(i&1){let e=Xh();sn(0,`button`,30),Xe$1(`click`,function(){let a=bl(e).$implicit,l=hd();return _l(l.setGroupBy(a))}),sn(1,`mat-icon`),wi$1(2),ln(),sn(3,`span`),wi$1(4),ln(),Co(5,Mi,2,0,`mat-icon`,31),ln()}if(i&2){let e=t.$implicit,n=hd(),a=NA(0);_e(`clm-on`,a.groupBy===e),yt(2),md(n.groupIcon[e]),yt(2),md(n.groupLabel[e]),yt(),Eo(a.groupBy===e?5:-1)}}function Pi(i,t){if(i&1){let e=Xh();sn(0,`clm-hub-timeline`,32),Xe$1(`toggleShowAll`,function(a){bl(e);let l=hd();return _l(l.toggleShowAll(a))})(`openGroup`,function(a){bl(e);let l=hd();return _l(l.openGroup(a))})(`openShipment`,function(a){bl(e);let l=hd();return _l(l.openShipment(a))})(`addShipment`,function(a){bl(e);let l=hd();return _l(l.createShipment(a))})(`resetFilters`,function(){bl(e);let a=hd();return _l(a.resetFilters())}),ln()}if(i&2){let e=hd();UD(`groups`,e.groups())(`showAll`,e.showAll())}}function Ni(i,t){if(i&1){let e=Xh();sn(0,`clm-hub-cards`,33),Xe$1(`openGroup`,function(a){bl(e);let l=hd();return _l(l.openGroup(a))})(`resetFilters`,function(){bl(e);let a=hd();return _l(a.resetFilters())}),ln()}if(i&2){let e=hd();UD(`groups`,e.groups())}}function Oi(i,t){if(i&1){let e=Xh();sn(0,`clm-hub-list`,32),Xe$1(`toggleShowAll`,function(a){bl(e);let l=hd();return _l(l.toggleShowAll(a))})(`openGroup`,function(a){bl(e);let l=hd();return _l(l.openGroup(a))})(`openShipment`,function(a){bl(e);let l=hd();return _l(l.openShipment(a))})(`addShipment`,function(a){bl(e);let l=hd();return _l(l.createShipment(a))})(`resetFilters`,function(){bl(e);let a=hd();return _l(a.resetFilters())}),ln()}if(i&2){let e=hd();UD(`groups`,e.groups())(`showAll`,e.showAll())}}function Hi(i,t){if(i&1){let e=Xh();sn(0,`button`,34),Xe$1(`click`,function(){bl(e);let a=hd();return _l(a.addWorkingPackage())}),sn(1,`mat-icon`),wi$1(2,`add_circle`),ln(),wi$1(3,`Working package `),ln()}}function Ei(i,t){i&1&&Ei$1(0,`clm-hub-properties`)}var gn=[{key:`overdue`,tone:`red`,icon:`lg-overdue`},{key:`active`,tone:`green`,icon:`lg-active`},{key:`pending`,tone:`grey`,icon:`lg-pending`},{key:`completed`,tone:`blue`,icon:`lg-wpdone`}];var _n=class i{store=f($S);hubPrefs=f(b);router=f(qi);createFlow=f(Ne);wpDialogs=f(fn$1);prefs=this.hubPrefs.value;groups=Fe$1(()=>ye(this.store,this.prefs()));counts=this.store.countsByStatus;chips=gn;wpStatus=jJ;groupLabel=ve;groupIcon=fe;groupOptions=[`wp`,`destination`,`sender`,`recipient`];showAll=Y({});views=Fe$1(()=>{let t=this.prefs().groupBy!==`wp`;return[{value:`timeline`,icon:`segment`,label:`Timeline`,disabled:t,disabledHint:`Working packages only`},{value:`list`,icon:`format_list_bulleted`,label:`List`},{value:`cards`,icon:`grid_on`,label:`Cards`,disabled:t,disabledHint:`Working packages only`}]});searchTimer;onSearch(t){clearTimeout(this.searchTimer),this.searchTimer=setTimeout(()=>this.hubPrefs.update({search:t}),120)}clearSearch(t){t.value=``,this.hubPrefs.update({search:``}),t.focus()}toggleChip(t){this.hubPrefs.update(e=>{if(!t)return{wpStatus:[]};let n=e.wpStatus.includes(t)?e.wpStatus.filter(a=>a!==t):[...e.wpStatus,t];return{wpStatus:n.length===gn.length?[]:n}})}setView(t){this.hubPrefs.update({view:t})}setGroupBy(t){this.hubPrefs.update({groupBy:t})}togglePanel(){this.hubPrefs.update(t=>({panel:!t.panel}))}toggleShowAll(t){this.showAll.update(e=>A(m({},e),{[t]:!e[t]}))}resetFilters(){this.hubPrefs.update({search:``,wpStatus:[]})}createShipment(t){this.createFlow.start(t?{wpId:t}:{})}addWorkingPackage(){this.wpDialogs.open()}openGroup(t){this.router.navigate([`/group`,this.prefs().groupBy,t])}openShipment(t){this.router.navigate([`/shipment`,t])}static ɵfac=function(e){return new(e||i)};static ɵcmp=he({type:i,selectors:[[`clm-hub-page`]],decls:47,vars:14,consts:[[`search`,``],[`groupMenu`,`matMenu`],[1,`clm-page`,`hub`],[1,`clm-sticky-head`],[1,`clm-page-head`],[1,`clm-sp`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`search`,`clm-search`,`clm-search-lg`],[`matPrefix`,``],[`matInput`,``,`placeholder`,`Search packages and shipments`,`autocomplete`,`off`,`aria-label`,`Search packages and shipments`,3,`input`,`value`],[`matSuffix`,``,`mat-icon-button`,``,`matTooltip`,`Clear search`,`aria-label`,`Clear search`,1,`clm-icon-btn-sm`],[`mat-flat-button`,``,3,`click`],[1,`toolbar`],[1,`clm-chips`],[`label`,`All`,`tone`,`olive`,3,`pressed`,`count`,`checked`],[3,`label`,`count`,`tone`,`icon`,`checked`],[1,`right`],[1,`lbl-inline`],[1,`dd-btn`,3,`matMenuTriggerFor`],[1,`clm-menu-wide`],[`mat-menu-item`,``,3,`clm-on`],[3,`valueChange`,`options`,`value`],[`mat-icon-button`,``,`matTooltip`,`Properties`,`aria-label`,`Properties`,1,`props`,3,`click`],[1,`hub-body`],[1,`hub-col`],[1,`hub-main`],[3,`groups`,`showAll`],[3,`groups`],[1,`add-wp-bar`],[`matSuffix`,``,`mat-icon-button`,``,`matTooltip`,`Clear search`,`aria-label`,`Clear search`,1,`clm-icon-btn-sm`,3,`click`],[3,`pressed`,`label`,`count`,`tone`,`icon`,`checked`],[`mat-menu-item`,``,3,`click`],[1,`clm-menu-check`],[3,`toggleShowAll`,`openGroup`,`openShipment`,`addShipment`,`resetFilters`,`groups`,`showAll`],[3,`openGroup`,`resetFilters`,`groups`],[1,`add-wp-bar`,3,`click`]],template:function(e,n){if(e&1){let a=Xh();pC(0),sn(1,`div`,2)(2,`div`,3)(3,`div`,4)(4,`h1`),wi$1(5,`Shipments`),ln(),Ei$1(6,`span`,5),sn(7,`mat-form-field`,6)(8,`mat-icon`,7),wi$1(9,`search`),ln(),sn(10,`input`,8,0),Xe$1(`input`,function(){bl(a);let g=JN(11);return _l(n.onSearch(g.value))}),ln(),Co(12,ki,3,0,`button`,9),ln(),sn(13,`button`,10),Xe$1(`click`,function(){return n.createShipment()}),sn(14,`mat-icon`),wi$1(15,`add`),ln(),wi$1(16,`Shipment`),ln()()(),sn(17,`div`,11)(18,`div`,12)(19,`clm-check-chip`,13),Xe$1(`pressed`,function(){return n.toggleChip(null)}),ln(),HN(20,Si,1,5,`clm-check-chip`,14,Ci),ln(),Ei$1(22,`clm-hub-legend`),sn(23,`div`,15)(24,`span`,16),wi$1(25,`Group by`),ln(),sn(26,`button`,17)(27,`span`),wi$1(28),ln(),sn(29,`mat-icon`),wi$1(30,`expand_more`),ln()(),sn(31,`mat-menu`,18,1),HN(33,Ti,6,5,`button`,19,UN),ln(),sn(35,`clm-view-switch`,20),Xe$1(`valueChange`,function(g){return n.setView(g)}),ln(),sn(36,`button`,21),Xe$1(`click`,function(){return n.togglePanel()}),sn(37,`mat-icon`),wi$1(38,`settings`),ln()()()(),sn(39,`div`,22)(40,`div`,23)(41,`div`,24),Co(42,Pi,1,2,`clm-hub-timeline`,25)(43,Ni,1,1,`clm-hub-cards`,26)(44,Oi,1,2,`clm-hub-list`,25),ln(),Co(45,Hi,4,0,`button`,27),ln(),Co(46,Ei,1,0,`clm-hub-properties`),ln()()}if(e&2){let a,l=JN(32),g=TA(n.prefs());yt(10),UD(`value`,g.search),yt(2),Eo(g.search?12:-1),yt(7),UD(`count`,n.counts().all)(`checked`,!g.wpStatus.length),yt(),$N(n.chips),yt(6),UD(`matMenuTriggerFor`,l),yt(2),md(n.groupLabel[g.groupBy]),yt(5),$N(n.groupOptions),yt(2),UD(`options`,n.views())(`value`,g.view),yt(),_e(`active`,g.panel),yt(6),Eo((a=g.view)===`timeline`?42:a===`cards`?43:44),yt(3),Eo(g.groupBy===`wp`?45:-1),yt(),Eo(g.panel?46:-1)}},dependencies:[cF,_S,sF,tJ,eJ,be,Kt,hi$1,gi$1,Un$1,Qn$1,Nt,R,ee,Ot$1,Bee,zF,R$1,wt,Le,Ie,Fe,Ve,$e],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100%}.hub[_ngcontent-%COMP%]{height:100%;min-height:0;padding-bottom:16px}.search[_ngcontent-%COMP%]{width:300px}@media(max-width:1280px){.search[_ngcontent-%COMP%]{width:240px}}.toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:16px 0;flex-wrap:wrap}.toolbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{margin-left:auto;display:flex;align-items:center;gap:8px}.lbl-inline[_ngcontent-%COMP%]{font-size:14px;line-height:18px;letter-spacing:.5px;color:var(--%NS%color-text-secondary)}.dd-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:7px 8px 7px 12px;border:1px solid var(--%NS%color-border-default);border-radius:var(--%NS%radius-medium);background:#fff;font:500 14px/normal Roboto,sans-serif;letter-spacing:.5px;white-space:nowrap;cursor:pointer;color:var(--%NS%color-text-primary)}.dd-btn[_ngcontent-%COMP%]:hover, .dd-btn[aria-expanded=true][_ngcontent-%COMP%]{background:var(--%NS%color-action-outline-hover)}.dd-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%color-icon-default);font-size:18px;width:18px;height:18px}.props[_ngcontent-%COMP%]{--%NS%mat-icon-button-icon-color: var(--%NS%color-icon-default)}.props.active[_ngcontent-%COMP%]{--%NS%mat-icon-button-icon-color: var(--%NS%color-olive-600);background:var(--%NS%color-surface-selected)}.hub-body[_ngcontent-%COMP%]{display:flex;gap:16px;flex:1;min-height:0}.hub-col[_ngcontent-%COMP%]{flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;gap:12px}.hub-main[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:0;overflow:auto}.add-wp-bar[_ngcontent-%COMP%]{flex:none;display:flex;align-items:center;justify-content:center;gap:12px;height:56px;width:100%;border:1.5px dashed var(--%NS%color-raisin-100);border-radius:var(--%NS%radius-large);background:var(--%NS%color-surface-subtle);color:var(--%NS%color-olive-600);font:700 14px/normal Roboto,sans-serif;letter-spacing:1.25px;text-transform:uppercase;cursor:pointer;transition:background .12s,border-color .12s}.add-wp-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px;color:var(--%NS%color-action-primary)}.add-wp-bar[_ngcontent-%COMP%]:hover{background:var(--%NS%color-action-outline-hover);border-color:var(--%NS%color-olive-200)}`]})};export{_n as HubPage};