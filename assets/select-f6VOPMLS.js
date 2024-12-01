import{o as Ke,r,j as f,u as k,G as Vt,P as L,d as M,H as Le,J as Wt,s as z,K as Ft,M as Ut,_ as Kt,N as $t,Q as oe,S as zt,U as Yt,V as Xt,W as Gt,Y as Zt,Z as qt,$ as Qt,a0 as $e,a1 as Jt,a2 as ze,a3 as en,a4 as tn,a5 as nn,a6 as rn,w as Oe,a7 as on,a8 as an,v as sn,b as je,a9 as ln,h as G,C as cn}from"./index-DunV6tBQ.js";import{u as dn}from"./index-B1INIkwa.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=Ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=Ke("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function ke(e,[n,t]){return Math.min(t,Math.max(n,e))}function fn(e,n=[]){let t=[];function o(d,l){const a=r.createContext(l),i=t.length;t=[...t,l];const u=x=>{var S;const{scope:g,children:b,...C}=x,c=((S=g==null?void 0:g[e])==null?void 0:S[i])||a,p=r.useMemo(()=>C,Object.values(C));return f.jsx(c.Provider,{value:p,children:b})};u.displayName=d+"Provider";function m(x,g){var c;const b=((c=g==null?void 0:g[e])==null?void 0:c[i])||a,C=r.useContext(b);if(C)return C;if(l!==void 0)return l;throw new Error(`\`${x}\` must be used within \`${d}\``)}return[u,m]}const s=()=>{const d=t.map(l=>r.createContext(l));return function(a){const i=(a==null?void 0:a[e])||d;return r.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return s.scopeName=e,[o,pn(s,...n)]}function pn(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(d){const l=o.reduce((a,{useScope:i,scopeName:u})=>{const x=i(d)[`__scope${u}`];return{...a,...x}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:l}),[l])}};return t.scopeName=n.scopeName,t}var hn="DismissableLayer",Re="dismissableLayer.update",mn="dismissableLayer.pointerDownOutside",vn="dismissableLayer.focusOutside",Be,Xe=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ge=r.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:l,onDismiss:a,...i}=e,u=r.useContext(Xe),[m,x]=r.useState(null),g=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=r.useState({}),C=k(n,y=>x(y)),c=Array.from(u.layers),[p]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),S=c.indexOf(p),h=m?c.indexOf(m):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,T=h>=S,E=wn(y=>{const _=y.target,O=[...u.branches].some(B=>B.contains(_));!T||O||(s==null||s(y),l==null||l(y),y.defaultPrevented||a==null||a())},g),D=xn(y=>{const _=y.target;[...u.branches].some(B=>B.contains(_))||(d==null||d(y),l==null||l(y),y.defaultPrevented||a==null||a())},g);return Vt(y=>{h===u.layers.size-1&&(o==null||o(y),!y.defaultPrevented&&a&&(y.preventDefault(),a()))},g),r.useEffect(()=>{if(m)return t&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Be=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(m)),u.layers.add(m),He(),()=>{t&&u.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Be)}},[m,g,t,u]),r.useEffect(()=>()=>{m&&(u.layers.delete(m),u.layersWithOutsidePointerEventsDisabled.delete(m),He())},[m,u]),r.useEffect(()=>{const y=()=>b({});return document.addEventListener(Re,y),()=>document.removeEventListener(Re,y)},[]),f.jsx(L.div,{...i,ref:C,style:{pointerEvents:v?T?"auto":"none":void 0,...e.style},onFocusCapture:M(e.onFocusCapture,D.onFocusCapture),onBlurCapture:M(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:M(e.onPointerDownCapture,E.onPointerDownCapture)})});Ge.displayName=hn;var gn="DismissableLayerBranch",Sn=r.forwardRef((e,n)=>{const t=r.useContext(Xe),o=r.useRef(null),s=k(n,o);return r.useEffect(()=>{const d=o.current;if(d)return t.branches.add(d),()=>{t.branches.delete(d)}},[t.branches]),f.jsx(L.div,{...e,ref:s})});Sn.displayName=gn;function wn(e,n=globalThis==null?void 0:globalThis.document){const t=Le(e),o=r.useRef(!1),s=r.useRef(()=>{});return r.useEffect(()=>{const d=a=>{if(a.target&&!o.current){let i=function(){Ze(mn,t,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(n.removeEventListener("click",s.current),s.current=i,n.addEventListener("click",s.current,{once:!0})):i()}else n.removeEventListener("click",s.current);o.current=!1},l=window.setTimeout(()=>{n.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(l),n.removeEventListener("pointerdown",d),n.removeEventListener("click",s.current)}},[n,t]),{onPointerDownCapture:()=>o.current=!0}}function xn(e,n=globalThis==null?void 0:globalThis.document){const t=Le(e),o=r.useRef(!1);return r.useEffect(()=>{const s=d=>{d.target&&!o.current&&Ze(vn,t,{originalEvent:d},{discrete:!1})};return n.addEventListener("focusin",s),()=>n.removeEventListener("focusin",s)},[n,t]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function He(){const e=new CustomEvent(Re);document.dispatchEvent(e)}function Ze(e,n,t,{discrete:o}){const s=t.originalEvent.target,d=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&s.addEventListener(e,n,{once:!0}),o?Wt(s,d):s.dispatchEvent(d)}var Ee=0;function yn(){r.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ve()),document.body.insertAdjacentElement("beforeend",e[1]??Ve()),Ee++,()=>{Ee===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),Ee--}},[])}function Ve(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Cn="Portal",qe=r.forwardRef((e,n)=>{var a;const{container:t,...o}=e,[s,d]=r.useState(!1);z(()=>d(!0),[]);const l=t||s&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return l?Ft.createPortal(f.jsx(L.div,{...o,ref:n}),l):null});qe.displayName=Cn;var Qe=Ut(),Pe=function(){},he=r.forwardRef(function(e,n){var t=r.useRef(null),o=r.useState({onScrollCapture:Pe,onWheelCapture:Pe,onTouchMoveCapture:Pe}),s=o[0],d=o[1],l=e.forwardProps,a=e.children,i=e.className,u=e.removeScrollBar,m=e.enabled,x=e.shards,g=e.sideCar,b=e.noIsolation,C=e.inert,c=e.allowPinchZoom,p=e.as,S=p===void 0?"div":p,h=e.gapMode,v=Kt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=g,E=$t([t,n]),D=oe(oe({},v),s);return r.createElement(r.Fragment,null,m&&r.createElement(T,{sideCar:Qe,removeScrollBar:u,shards:x,noIsolation:b,inert:C,setCallbacks:d,allowPinchZoom:!!c,lockRef:t,gapMode:h}),l?r.cloneElement(r.Children.only(a),oe(oe({},D),{ref:E})):r.createElement(S,oe({},D,{className:i,ref:E}),a))});he.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};he.classNames={fullWidth:zt,zeroRight:Yt};var Te=!1;if(typeof window<"u")try{var ue=Object.defineProperty({},"passive",{get:function(){return Te=!0,!0}});window.addEventListener("test",ue,ue),window.removeEventListener("test",ue,ue)}catch{Te=!1}var ne=Te?{passive:!1}:!1,bn=function(e){return e.tagName==="TEXTAREA"},Je=function(e,n){if(!(e instanceof Element))return!1;var t=window.getComputedStyle(e);return t[n]!=="hidden"&&!(t.overflowY===t.overflowX&&!bn(e)&&t[n]==="visible")},En=function(e){return Je(e,"overflowY")},Pn=function(e){return Je(e,"overflowX")},We=function(e,n){var t=n.ownerDocument,o=n;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=et(e,o);if(s){var d=tt(e,o),l=d[1],a=d[2];if(l>a)return!0}o=o.parentNode}while(o&&o!==t.body);return!1},Rn=function(e){var n=e.scrollTop,t=e.scrollHeight,o=e.clientHeight;return[n,t,o]},Tn=function(e){var n=e.scrollLeft,t=e.scrollWidth,o=e.clientWidth;return[n,t,o]},et=function(e,n){return e==="v"?En(n):Pn(n)},tt=function(e,n){return e==="v"?Rn(n):Tn(n)},Nn=function(e,n){return e==="h"&&n==="rtl"?-1:1},In=function(e,n,t,o,s){var d=Nn(e,window.getComputedStyle(n).direction),l=d*o,a=t.target,i=n.contains(a),u=!1,m=l>0,x=0,g=0;do{var b=tt(e,a),C=b[0],c=b[1],p=b[2],S=c-p-d*C;(C||S)&&et(e,a)&&(x+=S,g+=C),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!i&&a!==document.body||i&&(n.contains(a)||n===a));return(m&&(Math.abs(x)<1||!s)||!m&&(Math.abs(g)<1||!s))&&(u=!0),u},fe=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Fe=function(e){return[e.deltaX,e.deltaY]},Ue=function(e){return e&&"current"in e?e.current:e},_n=function(e,n){return e[0]===n[0]&&e[1]===n[1]},Mn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Dn=0,re=[];function Ln(e){var n=r.useRef([]),t=r.useRef([0,0]),o=r.useRef(),s=r.useState(Dn++)[0],d=r.useState(Xt)[0],l=r.useRef(e);r.useEffect(function(){l.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var c=Gt([e.lockRef.current],(e.shards||[]).map(Ue),!0).filter(Boolean);return c.forEach(function(p){return p.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),c.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var a=r.useCallback(function(c,p){if("touches"in c&&c.touches.length===2||c.type==="wheel"&&c.ctrlKey)return!l.current.allowPinchZoom;var S=fe(c),h=t.current,v="deltaX"in c?c.deltaX:h[0]-S[0],T="deltaY"in c?c.deltaY:h[1]-S[1],E,D=c.target,y=Math.abs(v)>Math.abs(T)?"h":"v";if("touches"in c&&y==="h"&&D.type==="range")return!1;var _=We(y,D);if(!_)return!0;if(_?E=y:(E=y==="v"?"h":"v",_=We(y,D)),!_)return!1;if(!o.current&&"changedTouches"in c&&(v||T)&&(o.current=E),!E)return!0;var O=o.current||E;return In(O,p,c,O==="h"?v:T,!0)},[]),i=r.useCallback(function(c){var p=c;if(!(!re.length||re[re.length-1]!==d)){var S="deltaY"in p?Fe(p):fe(p),h=n.current.filter(function(E){return E.name===p.type&&(E.target===p.target||p.target===E.shadowParent)&&_n(E.delta,S)})[0];if(h&&h.should){p.cancelable&&p.preventDefault();return}if(!h){var v=(l.current.shards||[]).map(Ue).filter(Boolean).filter(function(E){return E.contains(p.target)}),T=v.length>0?a(p,v[0]):!l.current.noIsolation;T&&p.cancelable&&p.preventDefault()}}},[]),u=r.useCallback(function(c,p,S,h){var v={name:c,delta:p,target:S,should:h,shadowParent:On(S)};n.current.push(v),setTimeout(function(){n.current=n.current.filter(function(T){return T!==v})},1)},[]),m=r.useCallback(function(c){t.current=fe(c),o.current=void 0},[]),x=r.useCallback(function(c){u(c.type,Fe(c),c.target,a(c,e.lockRef.current))},[]),g=r.useCallback(function(c){u(c.type,fe(c),c.target,a(c,e.lockRef.current))},[]);r.useEffect(function(){return re.push(d),e.setCallbacks({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:g}),document.addEventListener("wheel",i,ne),document.addEventListener("touchmove",i,ne),document.addEventListener("touchstart",m,ne),function(){re=re.filter(function(c){return c!==d}),document.removeEventListener("wheel",i,ne),document.removeEventListener("touchmove",i,ne),document.removeEventListener("touchstart",m,ne)}},[]);var b=e.removeScrollBar,C=e.inert;return r.createElement(r.Fragment,null,C?r.createElement(d,{styles:Mn(s)}):null,b?r.createElement(Zt,{gapMode:e.gapMode}):null)}function On(e){for(var n=null;e!==null;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}const An=qt(Qe,Ln);var nt=r.forwardRef(function(e,n){return r.createElement(he,oe({},e,{ref:n,sideCar:An}))});nt.classNames=he.classNames;var jn=[" ","Enter","ArrowUp","ArrowDown"],kn=[" ","Enter"],ce="Select",[me,ve,Bn]=Qt(ce),[ae,mr]=fn(ce,[Bn,$e]),ge=$e(),[Hn,Z]=ae(ce),[Vn,Wn]=ae(ce),rt=e=>{const{__scopeSelect:n,children:t,open:o,defaultOpen:s,onOpenChange:d,value:l,defaultValue:a,onValueChange:i,dir:u,name:m,autoComplete:x,disabled:g,required:b,form:C}=e,c=ge(n),[p,S]=r.useState(null),[h,v]=r.useState(null),[T,E]=r.useState(!1),D=sn(u),[y=!1,_]=je({prop:o,defaultProp:s,onChange:d}),[O,B]=je({prop:l,defaultProp:a,onChange:i}),W=r.useRef(null),F=p?C||!!p.closest("form"):!0,[Y,U]=r.useState(new Set),K=Array.from(Y).map(A=>A.props.value).join(";");return f.jsx(ln,{...c,children:f.jsxs(Hn,{required:b,scope:n,trigger:p,onTriggerChange:S,valueNode:h,onValueNodeChange:v,valueNodeHasChildren:T,onValueNodeHasChildrenChange:E,contentId:Oe(),value:O,onValueChange:B,open:y,onOpenChange:_,dir:D,triggerPointerDownPosRef:W,disabled:g,children:[f.jsx(me.Provider,{scope:n,children:f.jsx(Vn,{scope:e.__scopeSelect,onNativeOptionAdd:r.useCallback(A=>{U(V=>new Set(V).add(A))},[]),onNativeOptionRemove:r.useCallback(A=>{U(V=>{const $=new Set(V);return $.delete(A),$})},[]),children:t})}),F?f.jsxs(Nt,{"aria-hidden":!0,required:b,tabIndex:-1,name:m,autoComplete:x,value:O,onChange:A=>B(A.target.value),disabled:g,form:C,children:[O===void 0?f.jsx("option",{value:""}):null,Array.from(Y)]},K):null]})})};rt.displayName=ce;var ot="SelectTrigger",at=r.forwardRef((e,n)=>{const{__scopeSelect:t,disabled:o=!1,...s}=e,d=ge(t),l=Z(ot,t),a=l.disabled||o,i=k(n,l.onTriggerChange),u=ve(t),m=r.useRef("touch"),[x,g,b]=It(c=>{const p=u().filter(v=>!v.disabled),S=p.find(v=>v.value===l.value),h=_t(p,c,S);h!==void 0&&l.onValueChange(h.value)}),C=c=>{a||(l.onOpenChange(!0),b()),c&&(l.triggerPointerDownPosRef.current={x:Math.round(c.pageX),y:Math.round(c.pageY)})};return f.jsx(Jt,{asChild:!0,...d,children:f.jsx(L.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":Tt(l.value)?"":void 0,...s,ref:i,onClick:M(s.onClick,c=>{c.currentTarget.focus(),m.current!=="mouse"&&C(c)}),onPointerDown:M(s.onPointerDown,c=>{m.current=c.pointerType;const p=c.target;p.hasPointerCapture(c.pointerId)&&p.releasePointerCapture(c.pointerId),c.button===0&&c.ctrlKey===!1&&c.pointerType==="mouse"&&(C(c),c.preventDefault())}),onKeyDown:M(s.onKeyDown,c=>{const p=x.current!=="";!(c.ctrlKey||c.altKey||c.metaKey)&&c.key.length===1&&g(c.key),!(p&&c.key===" ")&&jn.includes(c.key)&&(C(),c.preventDefault())})})})});at.displayName=ot;var st="SelectValue",lt=r.forwardRef((e,n)=>{const{__scopeSelect:t,className:o,style:s,children:d,placeholder:l="",...a}=e,i=Z(st,t),{onValueNodeHasChildrenChange:u}=i,m=d!==void 0,x=k(n,i.onValueNodeChange);return z(()=>{u(m)},[u,m]),f.jsx(L.span,{...a,ref:x,style:{pointerEvents:"none"},children:Tt(i.value)?f.jsx(f.Fragment,{children:l}):d})});lt.displayName=st;var Fn="SelectIcon",ct=r.forwardRef((e,n)=>{const{__scopeSelect:t,children:o,...s}=e;return f.jsx(L.span,{"aria-hidden":!0,...s,ref:n,children:o||"▼"})});ct.displayName=Fn;var Un="SelectPortal",it=e=>f.jsx(qe,{asChild:!0,...e});it.displayName=Un;var ee="SelectContent",dt=r.forwardRef((e,n)=>{const t=Z(ee,e.__scopeSelect),[o,s]=r.useState();if(z(()=>{s(new DocumentFragment)},[]),!t.open){const d=o;return d?ze.createPortal(f.jsx(ut,{scope:e.__scopeSelect,children:f.jsx(me.Slot,{scope:e.__scopeSelect,children:f.jsx("div",{children:e.children})})}),d):null}return f.jsx(ft,{...e,ref:n})});dt.displayName=ee;var H=10,[ut,q]=ae(ee),Kn="SelectContentImpl",ft=r.forwardRef((e,n)=>{const{__scopeSelect:t,position:o="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:d,onPointerDownOutside:l,side:a,sideOffset:i,align:u,alignOffset:m,arrowPadding:x,collisionBoundary:g,collisionPadding:b,sticky:C,hideWhenDetached:c,avoidCollisions:p,...S}=e,h=Z(ee,t),[v,T]=r.useState(null),[E,D]=r.useState(null),y=k(n,w=>T(w)),[_,O]=r.useState(null),[B,W]=r.useState(null),F=ve(t),[Y,U]=r.useState(!1),K=r.useRef(!1);r.useEffect(()=>{if(v)return en(v)},[v]),yn();const A=r.useCallback(w=>{const[I,...j]=F().map(R=>R.ref.current),[N]=j.slice(-1),P=document.activeElement;for(const R of w)if(R===P||(R==null||R.scrollIntoView({block:"nearest"}),R===I&&E&&(E.scrollTop=0),R===N&&E&&(E.scrollTop=E.scrollHeight),R==null||R.focus(),document.activeElement!==P))return},[F,E]),V=r.useCallback(()=>A([_,v]),[A,_,v]);r.useEffect(()=>{Y&&V()},[Y,V]);const{onOpenChange:$,triggerPointerDownPosRef:X}=h;r.useEffect(()=>{if(v){let w={x:0,y:0};const I=N=>{var P,R;w={x:Math.abs(Math.round(N.pageX)-(((P=X.current)==null?void 0:P.x)??0)),y:Math.abs(Math.round(N.pageY)-(((R=X.current)==null?void 0:R.y)??0))}},j=N=>{w.x<=10&&w.y<=10?N.preventDefault():v.contains(N.target)||$(!1),document.removeEventListener("pointermove",I),X.current=null};return X.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",j,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",j,{capture:!0})}}},[v,$,X]),r.useEffect(()=>{const w=()=>$(!1);return window.addEventListener("blur",w),window.addEventListener("resize",w),()=>{window.removeEventListener("blur",w),window.removeEventListener("resize",w)}},[$]);const[Se,ie]=It(w=>{const I=F().filter(P=>!P.disabled),j=I.find(P=>P.ref.current===document.activeElement),N=_t(I,w,j);N&&setTimeout(()=>N.ref.current.focus())}),we=r.useCallback((w,I,j)=>{const N=!K.current&&!j;(h.value!==void 0&&h.value===I||N)&&(O(w),N&&(K.current=!0))},[h.value]),xe=r.useCallback(()=>v==null?void 0:v.focus(),[v]),te=r.useCallback((w,I,j)=>{const N=!K.current&&!j;(h.value!==void 0&&h.value===I||N)&&W(w)},[h.value]),de=o==="popper"?Ne:pt,se=de===Ne?{side:a,sideOffset:i,align:u,alignOffset:m,arrowPadding:x,collisionBoundary:g,collisionPadding:b,sticky:C,hideWhenDetached:c,avoidCollisions:p}:{};return f.jsx(ut,{scope:t,content:v,viewport:E,onViewportChange:D,itemRefCallback:we,selectedItem:_,onItemLeave:xe,itemTextRefCallback:te,focusSelectedItem:V,selectedItemText:B,position:o,isPositioned:Y,searchRef:Se,children:f.jsx(nt,{as:tn,allowPinchZoom:!0,children:f.jsx(nn,{asChild:!0,trapped:h.open,onMountAutoFocus:w=>{w.preventDefault()},onUnmountAutoFocus:M(s,w=>{var I;(I=h.trigger)==null||I.focus({preventScroll:!0}),w.preventDefault()}),children:f.jsx(Ge,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:l,onFocusOutside:w=>w.preventDefault(),onDismiss:()=>h.onOpenChange(!1),children:f.jsx(de,{role:"listbox",id:h.contentId,"data-state":h.open?"open":"closed",dir:h.dir,onContextMenu:w=>w.preventDefault(),...S,...se,onPlaced:()=>U(!0),ref:y,style:{display:"flex",flexDirection:"column",outline:"none",...S.style},onKeyDown:M(S.onKeyDown,w=>{const I=w.ctrlKey||w.altKey||w.metaKey;if(w.key==="Tab"&&w.preventDefault(),!I&&w.key.length===1&&ie(w.key),["ArrowUp","ArrowDown","Home","End"].includes(w.key)){let N=F().filter(P=>!P.disabled).map(P=>P.ref.current);if(["ArrowUp","End"].includes(w.key)&&(N=N.slice().reverse()),["ArrowUp","ArrowDown"].includes(w.key)){const P=w.target,R=N.indexOf(P);N=N.slice(R+1)}setTimeout(()=>A(N)),w.preventDefault()}})})})})})})});ft.displayName=Kn;var $n="SelectItemAlignedPosition",pt=r.forwardRef((e,n)=>{const{__scopeSelect:t,onPlaced:o,...s}=e,d=Z(ee,t),l=q(ee,t),[a,i]=r.useState(null),[u,m]=r.useState(null),x=k(n,y=>m(y)),g=ve(t),b=r.useRef(!1),C=r.useRef(!0),{viewport:c,selectedItem:p,selectedItemText:S,focusSelectedItem:h}=l,v=r.useCallback(()=>{if(d.trigger&&d.valueNode&&a&&u&&c&&p&&S){const y=d.trigger.getBoundingClientRect(),_=u.getBoundingClientRect(),O=d.valueNode.getBoundingClientRect(),B=S.getBoundingClientRect();if(d.dir!=="rtl"){const P=B.left-_.left,R=O.left-P,Q=y.left-R,J=y.width+Q,ye=Math.max(J,_.width),Ce=window.innerWidth-H,be=ke(R,[H,Math.max(H,Ce-ye)]);a.style.minWidth=J+"px",a.style.left=be+"px"}else{const P=_.right-B.right,R=window.innerWidth-O.right-P,Q=window.innerWidth-y.right-R,J=y.width+Q,ye=Math.max(J,_.width),Ce=window.innerWidth-H,be=ke(R,[H,Math.max(H,Ce-ye)]);a.style.minWidth=J+"px",a.style.right=be+"px"}const W=g(),F=window.innerHeight-H*2,Y=c.scrollHeight,U=window.getComputedStyle(u),K=parseInt(U.borderTopWidth,10),A=parseInt(U.paddingTop,10),V=parseInt(U.borderBottomWidth,10),$=parseInt(U.paddingBottom,10),X=K+A+Y+$+V,Se=Math.min(p.offsetHeight*5,X),ie=window.getComputedStyle(c),we=parseInt(ie.paddingTop,10),xe=parseInt(ie.paddingBottom,10),te=y.top+y.height/2-H,de=F-te,se=p.offsetHeight/2,w=p.offsetTop+se,I=K+A+w,j=X-I;if(I<=te){const P=W.length>0&&p===W[W.length-1].ref.current;a.style.bottom="0px";const R=u.clientHeight-c.offsetTop-c.offsetHeight,Q=Math.max(de,se+(P?xe:0)+R+V),J=I+Q;a.style.height=J+"px"}else{const P=W.length>0&&p===W[0].ref.current;a.style.top="0px";const Q=Math.max(te,K+c.offsetTop+(P?we:0)+se)+j;a.style.height=Q+"px",c.scrollTop=I-te+c.offsetTop}a.style.margin=`${H}px 0`,a.style.minHeight=Se+"px",a.style.maxHeight=F+"px",o==null||o(),requestAnimationFrame(()=>b.current=!0)}},[g,d.trigger,d.valueNode,a,u,c,p,S,d.dir,o]);z(()=>v(),[v]);const[T,E]=r.useState();z(()=>{u&&E(window.getComputedStyle(u).zIndex)},[u]);const D=r.useCallback(y=>{y&&C.current===!0&&(v(),h==null||h(),C.current=!1)},[v,h]);return f.jsx(Yn,{scope:t,contentWrapper:a,shouldExpandOnScrollRef:b,onScrollButtonChange:D,children:f.jsx("div",{ref:i,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:T},children:f.jsx(L.div,{...s,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});pt.displayName=$n;var zn="SelectPopperPosition",Ne=r.forwardRef((e,n)=>{const{__scopeSelect:t,align:o="start",collisionPadding:s=H,...d}=e,l=ge(t);return f.jsx(rn,{...l,...d,ref:n,align:o,collisionPadding:s,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ne.displayName=zn;var[Yn,Ae]=ae(ee,{}),Ie="SelectViewport",ht=r.forwardRef((e,n)=>{const{__scopeSelect:t,nonce:o,...s}=e,d=q(Ie,t),l=Ae(Ie,t),a=k(n,d.onViewportChange),i=r.useRef(0);return f.jsxs(f.Fragment,{children:[f.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),f.jsx(me.Slot,{scope:t,children:f.jsx(L.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:M(s.onScroll,u=>{const m=u.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:g}=l;if(g!=null&&g.current&&x){const b=Math.abs(i.current-m.scrollTop);if(b>0){const C=window.innerHeight-H*2,c=parseFloat(x.style.minHeight),p=parseFloat(x.style.height),S=Math.max(c,p);if(S<C){const h=S+b,v=Math.min(C,h),T=h-v;x.style.height=v+"px",x.style.bottom==="0px"&&(m.scrollTop=T>0?T:0,x.style.justifyContent="flex-end")}}}i.current=m.scrollTop})})})]})});ht.displayName=Ie;var mt="SelectGroup",[Xn,Gn]=ae(mt),Zn=r.forwardRef((e,n)=>{const{__scopeSelect:t,...o}=e,s=Oe();return f.jsx(Xn,{scope:t,id:s,children:f.jsx(L.div,{role:"group","aria-labelledby":s,...o,ref:n})})});Zn.displayName=mt;var vt="SelectLabel",gt=r.forwardRef((e,n)=>{const{__scopeSelect:t,...o}=e,s=Gn(vt,t);return f.jsx(L.div,{id:s.id,...o,ref:n})});gt.displayName=vt;var pe="SelectItem",[qn,St]=ae(pe),wt=r.forwardRef((e,n)=>{const{__scopeSelect:t,value:o,disabled:s=!1,textValue:d,...l}=e,a=Z(pe,t),i=q(pe,t),u=a.value===o,[m,x]=r.useState(d??""),[g,b]=r.useState(!1),C=k(n,h=>{var v;return(v=i.itemRefCallback)==null?void 0:v.call(i,h,o,s)}),c=Oe(),p=r.useRef("touch"),S=()=>{s||(a.onValueChange(o),a.onOpenChange(!1))};if(o==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return f.jsx(qn,{scope:t,value:o,disabled:s,textId:c,isSelected:u,onItemTextChange:r.useCallback(h=>{x(v=>v||((h==null?void 0:h.textContent)??"").trim())},[]),children:f.jsx(me.ItemSlot,{scope:t,value:o,disabled:s,textValue:m,children:f.jsx(L.div,{role:"option","aria-labelledby":c,"data-highlighted":g?"":void 0,"aria-selected":u&&g,"data-state":u?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...l,ref:C,onFocus:M(l.onFocus,()=>b(!0)),onBlur:M(l.onBlur,()=>b(!1)),onClick:M(l.onClick,()=>{p.current!=="mouse"&&S()}),onPointerUp:M(l.onPointerUp,()=>{p.current==="mouse"&&S()}),onPointerDown:M(l.onPointerDown,h=>{p.current=h.pointerType}),onPointerMove:M(l.onPointerMove,h=>{var v;p.current=h.pointerType,s?(v=i.onItemLeave)==null||v.call(i):p.current==="mouse"&&h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:M(l.onPointerLeave,h=>{var v;h.currentTarget===document.activeElement&&((v=i.onItemLeave)==null||v.call(i))}),onKeyDown:M(l.onKeyDown,h=>{var T;((T=i.searchRef)==null?void 0:T.current)!==""&&h.key===" "||(kn.includes(h.key)&&S(),h.key===" "&&h.preventDefault())})})})})});wt.displayName=pe;var le="SelectItemText",xt=r.forwardRef((e,n)=>{const{__scopeSelect:t,className:o,style:s,...d}=e,l=Z(le,t),a=q(le,t),i=St(le,t),u=Wn(le,t),[m,x]=r.useState(null),g=k(n,S=>x(S),i.onItemTextChange,S=>{var h;return(h=a.itemTextRefCallback)==null?void 0:h.call(a,S,i.value,i.disabled)}),b=m==null?void 0:m.textContent,C=r.useMemo(()=>f.jsx("option",{value:i.value,disabled:i.disabled,children:b},i.value),[i.disabled,i.value,b]),{onNativeOptionAdd:c,onNativeOptionRemove:p}=u;return z(()=>(c(C),()=>p(C)),[c,p,C]),f.jsxs(f.Fragment,{children:[f.jsx(L.span,{id:i.textId,...d,ref:g}),i.isSelected&&l.valueNode&&!l.valueNodeHasChildren?ze.createPortal(d.children,l.valueNode):null]})});xt.displayName=le;var yt="SelectItemIndicator",Ct=r.forwardRef((e,n)=>{const{__scopeSelect:t,...o}=e;return St(yt,t).isSelected?f.jsx(L.span,{"aria-hidden":!0,...o,ref:n}):null});Ct.displayName=yt;var _e="SelectScrollUpButton",bt=r.forwardRef((e,n)=>{const t=q(_e,e.__scopeSelect),o=Ae(_e,e.__scopeSelect),[s,d]=r.useState(!1),l=k(n,o.onScrollButtonChange);return z(()=>{if(t.viewport&&t.isPositioned){let a=function(){const u=i.scrollTop>0;d(u)};const i=t.viewport;return a(),i.addEventListener("scroll",a),()=>i.removeEventListener("scroll",a)}},[t.viewport,t.isPositioned]),s?f.jsx(Pt,{...e,ref:l,onAutoScroll:()=>{const{viewport:a,selectedItem:i}=t;a&&i&&(a.scrollTop=a.scrollTop-i.offsetHeight)}}):null});bt.displayName=_e;var Me="SelectScrollDownButton",Et=r.forwardRef((e,n)=>{const t=q(Me,e.__scopeSelect),o=Ae(Me,e.__scopeSelect),[s,d]=r.useState(!1),l=k(n,o.onScrollButtonChange);return z(()=>{if(t.viewport&&t.isPositioned){let a=function(){const u=i.scrollHeight-i.clientHeight,m=Math.ceil(i.scrollTop)<u;d(m)};const i=t.viewport;return a(),i.addEventListener("scroll",a),()=>i.removeEventListener("scroll",a)}},[t.viewport,t.isPositioned]),s?f.jsx(Pt,{...e,ref:l,onAutoScroll:()=>{const{viewport:a,selectedItem:i}=t;a&&i&&(a.scrollTop=a.scrollTop+i.offsetHeight)}}):null});Et.displayName=Me;var Pt=r.forwardRef((e,n)=>{const{__scopeSelect:t,onAutoScroll:o,...s}=e,d=q("SelectScrollButton",t),l=r.useRef(null),a=ve(t),i=r.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return r.useEffect(()=>()=>i(),[i]),z(()=>{var m;const u=a().find(x=>x.ref.current===document.activeElement);(m=u==null?void 0:u.ref.current)==null||m.scrollIntoView({block:"nearest"})},[a]),f.jsx(L.div,{"aria-hidden":!0,...s,ref:n,style:{flexShrink:0,...s.style},onPointerDown:M(s.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(o,50))}),onPointerMove:M(s.onPointerMove,()=>{var u;(u=d.onItemLeave)==null||u.call(d),l.current===null&&(l.current=window.setInterval(o,50))}),onPointerLeave:M(s.onPointerLeave,()=>{i()})})}),Qn="SelectSeparator",Rt=r.forwardRef((e,n)=>{const{__scopeSelect:t,...o}=e;return f.jsx(L.div,{"aria-hidden":!0,...o,ref:n})});Rt.displayName=Qn;var De="SelectArrow",Jn=r.forwardRef((e,n)=>{const{__scopeSelect:t,...o}=e,s=ge(t),d=Z(De,t),l=q(De,t);return d.open&&l.position==="popper"?f.jsx(on,{...s,...o,ref:n}):null});Jn.displayName=De;function Tt(e){return e===""||e===void 0}var Nt=r.forwardRef((e,n)=>{const{value:t,...o}=e,s=r.useRef(null),d=k(n,s),l=dn(t);return r.useEffect(()=>{const a=s.current,i=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(i,"value").set;if(l!==t&&m){const x=new Event("change",{bubbles:!0});m.call(a,t),a.dispatchEvent(x)}},[l,t]),f.jsx(an,{asChild:!0,children:f.jsx("select",{...o,ref:d,defaultValue:t})})});Nt.displayName="BubbleSelect";function It(e){const n=Le(e),t=r.useRef(""),o=r.useRef(0),s=r.useCallback(l=>{const a=t.current+l;n(a),function i(u){t.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}(a)},[n]),d=r.useCallback(()=>{t.current="",window.clearTimeout(o.current)},[]);return r.useEffect(()=>()=>window.clearTimeout(o.current),[]),[t,s,d]}function _t(e,n,t){const s=n.length>1&&Array.from(n).every(u=>u===n[0])?n[0]:n,d=t?e.indexOf(t):-1;let l=er(e,Math.max(d,0));s.length===1&&(l=l.filter(u=>u!==t));const i=l.find(u=>u.textValue.toLowerCase().startsWith(s.toLowerCase()));return i!==t?i:void 0}function er(e,n){return e.map((t,o)=>e[(n+o)%e.length])}var tr=rt,Mt=at,nr=lt,rr=ct,or=it,Dt=dt,ar=ht,Lt=gt,Ot=wt,sr=xt,lr=Ct,At=bt,jt=Et,kt=Rt;const vr=tr,gr=nr,cr=r.forwardRef(({className:e,children:n,...t},o)=>f.jsxs(Mt,{ref:o,className:G("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...t,children:[n,f.jsx(rr,{asChild:!0,children:f.jsx(Ye,{className:"h-4 w-4 opacity-50"})})]}));cr.displayName=Mt.displayName;const Bt=r.forwardRef(({className:e,...n},t)=>f.jsx(At,{ref:t,className:G("flex cursor-default items-center justify-center py-1",e),...n,children:f.jsx(un,{className:"h-4 w-4"})}));Bt.displayName=At.displayName;const Ht=r.forwardRef(({className:e,...n},t)=>f.jsx(jt,{ref:t,className:G("flex cursor-default items-center justify-center py-1",e),...n,children:f.jsx(Ye,{className:"h-4 w-4"})}));Ht.displayName=jt.displayName;const ir=r.forwardRef(({className:e,children:n,position:t="popper",...o},s)=>f.jsx(or,{children:f.jsxs(Dt,{ref:s,className:G("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...o,children:[f.jsx(Bt,{}),f.jsx(ar,{className:G("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),f.jsx(Ht,{})]})}));ir.displayName=Dt.displayName;const dr=r.forwardRef(({className:e,...n},t)=>f.jsx(Lt,{ref:t,className:G("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...n}));dr.displayName=Lt.displayName;const ur=r.forwardRef(({className:e,children:n,...t},o)=>f.jsxs(Ot,{ref:o,className:G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[f.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:f.jsx(lr,{children:f.jsx(cn,{className:"h-4 w-4"})})}),f.jsx(sr,{children:n})]}));ur.displayName=Ot.displayName;const fr=r.forwardRef(({className:e,...n},t)=>f.jsx(kt,{ref:t,className:G("-mx-1 my-1 h-px bg-muted",e),...n}));fr.displayName=kt.displayName;export{vr as S,cr as a,gr as b,ir as c,ur as d};
