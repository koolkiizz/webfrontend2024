import{o as J,r as o,j as e,u as X,s as R,t as E,v as Y,b as Z,w as ee,P as w,x as ne,I as te,d as C,h as M,k as se,B as b}from"./index-DunV6tBQ.js";import{C as ae,a as ie,b as re,c as S,d as oe}from"./card-j9N-UeV_.js";import{u as ce}from"./useCoin-CxieSlkV.js";import"./fetch-CV5YqZMl.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);function le(n,t=[]){let s=[];function a(c,r){const u=o.createContext(r),m=s.length;s=[...s,r];const l=d=>{var N;const{scope:g,children:x,...v}=d,p=((N=g==null?void 0:g[n])==null?void 0:N[m])||u,f=o.useMemo(()=>v,Object.values(v));return e.jsx(p.Provider,{value:f,children:x})};l.displayName=c+"Provider";function h(d,g){var p;const x=((p=g==null?void 0:g[n])==null?void 0:p[m])||u,v=o.useContext(x);if(v)return v;if(r!==void 0)return r;throw new Error(`\`${d}\` must be used within \`${c}\``)}return[l,h]}const i=()=>{const c=s.map(r=>o.createContext(r));return function(u){const m=(u==null?void 0:u[n])||c;return o.useMemo(()=>({[`__scope${n}`]:{...u,[n]:m}}),[u,m])}};return i.scopeName=n,[a,de(i,...t)]}function de(...n){const t=n[0];if(n.length===1)return t;const s=()=>{const a=n.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(c){const r=a.reduce((u,{useScope:m,scopeName:l})=>{const d=m(c)[`__scope${l}`];return{...u,...d}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return s.scopeName=t.scopeName,s}function ue(n,t){return o.useReducer((s,a)=>t[s][a]??s,n)}var _=n=>{const{present:t,children:s}=n,a=me(t),i=typeof s=="function"?s({present:a.isPresent}):o.Children.only(s),c=X(a.ref,fe(i));return typeof s=="function"||a.isPresent?o.cloneElement(i,{ref:c}):null};_.displayName="Presence";function me(n){const[t,s]=o.useState(),a=o.useRef({}),i=o.useRef(n),c=o.useRef("none"),r=n?"mounted":"unmounted",[u,m]=ue(r,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const l=y(a.current);c.current=u==="mounted"?l:"none"},[u]),R(()=>{const l=a.current,h=i.current;if(h!==n){const g=c.current,x=y(l);n?m("MOUNT"):x==="none"||(l==null?void 0:l.display)==="none"?m("UNMOUNT"):m(h&&g!==x?"ANIMATION_OUT":"UNMOUNT"),i.current=n}},[n,m]),R(()=>{if(t){let l;const h=t.ownerDocument.defaultView??window,d=x=>{const p=y(a.current).includes(x.animationName);if(x.target===t&&p&&(m("ANIMATION_END"),!i.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",l=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},g=x=>{x.target===t&&(c.current=y(a.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{h.clearTimeout(l),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else m("ANIMATION_END")},[t,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(l=>{l&&(a.current=getComputedStyle(l)),s(l)},[])}}function y(n){return(n==null?void 0:n.animationName)||"none"}function fe(n){var a,i;let t=(a=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:a.get,s=t&&"isReactWarning"in t&&t.isReactWarning;return s?n.ref:(t=(i=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:i.get,s=t&&"isReactWarning"in t&&t.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var k="Tabs",[he,ye]=le(k,[E]),P=E(),[ge,I]=he(k),B=o.forwardRef((n,t)=>{const{__scopeTabs:s,value:a,onValueChange:i,defaultValue:c,orientation:r="horizontal",dir:u,activationMode:m="automatic",...l}=n,h=Y(u),[d,g]=Z({prop:a,onChange:i,defaultProp:c});return e.jsx(ge,{scope:s,baseId:ee(),value:d,onValueChange:g,orientation:r,dir:h,activationMode:m,children:e.jsx(w.div,{dir:h,"data-orientation":r,...l,ref:t})})});B.displayName=k;var L="TabsList",O=o.forwardRef((n,t)=>{const{__scopeTabs:s,loop:a=!0,...i}=n,c=I(L,s),r=P(s);return e.jsx(ne,{asChild:!0,...r,orientation:c.orientation,dir:c.dir,loop:a,children:e.jsx(w.div,{role:"tablist","aria-orientation":c.orientation,...i,ref:t})})});O.displayName=L;var $="TabsTrigger",F=o.forwardRef((n,t)=>{const{__scopeTabs:s,value:a,disabled:i=!1,...c}=n,r=I($,s),u=P(s),m=U(r.baseId,a),l=G(r.baseId,a),h=a===r.value;return e.jsx(te,{asChild:!0,...u,focusable:!i,active:h,children:e.jsx(w.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":l,"data-state":h?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:m,...c,ref:t,onMouseDown:C(n.onMouseDown,d=>{!i&&d.button===0&&d.ctrlKey===!1?r.onValueChange(a):d.preventDefault()}),onKeyDown:C(n.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&r.onValueChange(a)}),onFocus:C(n.onFocus,()=>{const d=r.activationMode!=="manual";!h&&!i&&d&&r.onValueChange(a)})})})});F.displayName=$;var V="TabsContent",D=o.forwardRef((n,t)=>{const{__scopeTabs:s,value:a,forceMount:i,children:c,...r}=n,u=I(V,s),m=U(u.baseId,a),l=G(u.baseId,a),h=a===u.value,d=o.useRef(h);return o.useEffect(()=>{const g=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(_,{present:i||h,children:({present:g})=>e.jsx(w.div,{"data-state":h?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":m,hidden:!g,id:l,tabIndex:0,...r,ref:t,style:{...n.style,animationDuration:d.current?"0s":void 0},children:g&&c})})});D.displayName=V;function U(n,t){return`${n}-trigger-${t}`}function G(n,t){return`${n}-content-${t}`}var xe=B,z=O,K=F,W=D;const pe=xe,q=o.forwardRef(({className:n,...t},s)=>e.jsx(z,{ref:s,className:M("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...t}));q.displayName=z.displayName;const T=o.forwardRef(({className:n,...t},s)=>e.jsx(K,{ref:s,className:M("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...t}));T.displayName=K.displayName;const A=o.forwardRef(({className:n,...t},s)=>e.jsx(W,{ref:s,className:M("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...t}));A.displayName=W.displayName;const we=()=>{const{toast:n}=se(),[t,s]=o.useState("acb"),a=o.useRef(!1),{acbData:i,mbData:c,getACBBank:r,getMBBank:u,isLoadingACB:m,isLoadingMB:l,isErrorACB:h,isErrorMB:d}=ce();o.useEffect(()=>{(async()=>{if(!a.current){a.current=!0;try{await r()}catch{n({variant:"destructive",title:"Lỗi",description:"Không thể tải thông tin ngân hàng"})}}})()},[]);const g=async f=>{s(f);try{f==="acb"&&!i?await r():f==="mb"&&!c&&await u()}catch{n({variant:"destructive",title:"Lỗi",description:"Không thể tải thông tin ngân hàng"})}},x=(f,N)=>{navigator.clipboard.writeText(f),n({title:"Đã sao chép",description:`Đã sao chép ${N} vào clipboard`})},v=(f,N,Q)=>N||!f?e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"})}):Q?e.jsx("div",{className:"flex items-center justify-center py-12 text-red-500",children:"Đã có lỗi xảy ra khi tải thông tin ngân hàng"}):e.jsxs("div",{className:"flex justify-between gap-4 flex-col md:flex-row",children:[e.jsx("div",{className:"flex justify-center w-full ",children:e.jsx("div",{className:"relative bg-white p-4 rounded-lg shadow-sm",children:e.jsx("img",{src:f.src,alt:"QR Code",className:"w-64 h-64 object-contain",onError:H=>{H.currentTarget.src="/fallback-qr.png"}})})}),e.jsx("div",{className:"space-y-4 bg-muted/50 p-6 rounded-lg w-full",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-muted-foreground",children:"Tên tài khoản"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold",children:f.accinfo.name}),e.jsx(b,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 hover:bg-muted",onClick:()=>x(f.accinfo.name,"tên tài khoản"),children:e.jsx(j,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-muted-foreground",children:"Số tài khoản"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold",children:f.accinfo.acc_num}),e.jsx(b,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 hover:bg-muted",onClick:()=>x(f.accinfo.acc_num,"số tài khoản"),children:e.jsx(j,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-muted-foreground",children:"Ngân hàng"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold",children:f.accinfo.bank_name}),e.jsx(b,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 hover:bg-muted",onClick:()=>x(f.accinfo.bank_name,"tên ngân hàng"),children:e.jsx(j,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"pt-3 mt-3 border-t",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-muted-foreground",children:"Nội dung chuyển khoản"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-primary",children:f.comment}),e.jsx(b,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 hover:bg-muted",onClick:()=>x(f.comment,"nội dung chuyển khoản"),children:e.jsx(j,{className:"h-4 w-4"})})]})]})})]})})]}),p=t==="acb"?i:c;return e.jsx("div",{className:"container mx-auto max-w-4xl py-8",children:e.jsxs(ae,{className:"shadow-md",children:[e.jsxs(ie,{className:"space-y-1",children:[e.jsx(re,{className:"text-2xl font-bold",children:"Nạp tiền vào tài khoản"}),e.jsx(S,{children:"Quét mã QR hoặc chuyển khoản theo thông tin bên dưới để nạp tiền"}),e.jsx(S,{className:"text-red-600",children:"Tỉ lệ chuyển đổi 10,000 VND = 1,000 coin"})]}),e.jsxs(oe,{className:"space-y-6",children:[e.jsxs(pe,{defaultValue:"acb",className:"w-full",onValueChange:g,children:[e.jsxs(q,{className:"grid w-full grid-cols-2",children:[e.jsx(T,{value:"acb",children:"ACB Bank"}),e.jsx(T,{value:"mb",children:"MB Bank"})]}),e.jsx(A,{value:"acb",className:"mt-6",children:v(i,m,h)}),e.jsx(A,{value:"mb",className:"mt-6",children:v(c,l,d)})]}),e.jsxs("div",{className:"space-y-3 bg-orange-50 p-4 rounded-lg",children:[e.jsx("p",{className:"font-semibold text-orange-800",children:"Lưu ý quan trọng:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-orange-700",children:[e.jsx("li",{children:"Vui lòng chuyển khoản đúng nội dung để được cộng tiền tự động"}),e.jsx("li",{children:"Thời gian xử lý từ 1-5 phút sau khi chuyển khoản thành công"}),e.jsx("li",{children:"Nếu quá 5 phút chưa nhận được tiền, vui lòng liên hệ với chúng tôi qua chat"}),e.jsx("li",{children:"Không sử dụng tiếng Việt có dấu trong nội dung chuyển khoản"})]})]}),p&&e.jsx("div",{className:"pt-4 border-t",children:e.jsx(b,{className:"w-full",variant:"outline",onClick:()=>{const f=`Ngân hàng: ${p.accinfo.bank_name}
Số tài khoản: ${p.accinfo.acc_num}
Tên: ${p.accinfo.name}
Nội dung: ${p.comment}`;x(f,"toàn bộ thông tin")},children:"Sao chép toàn bộ thông tin"})})]})]})})};export{we as default};
