import{r as s,j as t,y as E,T as se,O as ne,u as R,W as ie,z as le,d as ce,S as de,A as ue,E as pe,F as T,G as me,H as fe,h,J as P,k as ge,B as b}from"./index-BdpWGmwi.js";import{o as xe,s as he,u as ve,t as Ae,F as De,a as ye,c as Ne,d as je,e as Ce,I as Se,f as be}from"./input-DijU_5fr.js";import{a as we,c as _e,C as Ee,f as Re,b as Te,d as Pe}from"./fetch-D0pFaA7o.js";function Oe(e,a=[]){let o=[];function r(c,l){const i=s.createContext(l),d=o.length;o=[...o,l];const u=v=>{var S;const{scope:p,children:A,...m}=v,D=((S=p==null?void 0:p[e])==null?void 0:S[d])||i,C=s.useMemo(()=>m,Object.values(m));return t.jsx(D.Provider,{value:C,children:A})};u.displayName=c+"Provider";function x(v,p){var D;const A=((D=p==null?void 0:p[e])==null?void 0:D[d])||i,m=s.useContext(A);if(m)return m;if(l!==void 0)return l;throw new Error(`\`${v}\` must be used within \`${c}\``)}return[u,x]}const n=()=>{const c=o.map(l=>s.createContext(l));return function(i){const d=(i==null?void 0:i[e])||c;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:d}}),[i,d])}};return n.scopeName=e,[r,$e(n,...a)]}function $e(...e){const a=e[0];if(e.length===1)return a;const o=()=>{const r=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(c){const l=r.reduce((i,{useScope:d,scopeName:u})=>{const v=d(c)[`__scope${u}`];return{...i,...v}},{});return s.useMemo(()=>({[`__scope${a.scopeName}`]:l}),[l])}};return o.scopeName=a.scopeName,o}var O="AlertDialog",[Fe,Ze]=Oe(O,[E]),g=E(),$=e=>{const{__scopeAlertDialog:a,...o}=e,r=g(a);return t.jsx(fe,{...r,...o,modal:!0})};$.displayName=O;var Me="AlertDialogTrigger",Ie=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,n=g(o);return t.jsx(se,{...n,...r,ref:a})});Ie.displayName=Me;var ke="AlertDialogPortal",F=e=>{const{__scopeAlertDialog:a,...o}=e,r=g(a);return t.jsx(me,{...r,...o})};F.displayName=ke;var Ve="AlertDialogOverlay",M=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,n=g(o);return t.jsx(ne,{...n,...r,ref:a})});M.displayName=Ve;var N="AlertDialogContent",[Le,Ge]=Fe(N),I=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,children:r,...n}=e,c=g(o),l=s.useRef(null),i=R(a,l),d=s.useRef(null);return t.jsx(ie,{contentName:N,titleName:k,docsSlug:"alert-dialog",children:t.jsx(Le,{scope:o,cancelRef:d,children:t.jsxs(le,{role:"alertdialog",...c,...n,ref:i,onOpenAutoFocus:ce(n.onOpenAutoFocus,u=>{var x;u.preventDefault(),(x=d.current)==null||x.focus({preventScroll:!0})}),onPointerDownOutside:u=>u.preventDefault(),onInteractOutside:u=>u.preventDefault(),children:[t.jsx(de,{children:r}),t.jsx(ze,{contentRef:l})]})})})});I.displayName=N;var k="AlertDialogTitle",V=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,n=g(o);return t.jsx(ue,{...n,...r,ref:a})});V.displayName=k;var L="AlertDialogDescription",G=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,n=g(o);return t.jsx(pe,{...n,...r,ref:a})});G.displayName=L;var He="AlertDialogAction",H=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,n=g(o);return t.jsx(T,{...n,...r,ref:a})});H.displayName=He;var z="AlertDialogCancel",W=s.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,{cancelRef:n}=Ge(z,o),c=g(o),l=R(a,n);return t.jsx(T,{...c,...r,ref:l})});W.displayName=z;var ze=({contentRef:e})=>{const a=`\`${N}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${N}\` by passing a \`${L}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${N}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return s.useEffect(()=>{var r;document.getElementById((r=e.current)==null?void 0:r.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},We=$,Be=F,B=M,X=I,q=H,Y=W,U=V,J=G;const Xe=We,qe=Be,K=s.forwardRef(({className:e,...a},o)=>t.jsx(B,{className:h("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:o}));K.displayName=B.displayName;const Q=s.forwardRef(({className:e,...a},o)=>t.jsxs(qe,{children:[t.jsx(K,{}),t.jsx(X,{ref:o,className:h("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));Q.displayName=X.displayName;const Z=({className:e,...a})=>t.jsx("div",{className:h("flex flex-col space-y-2 text-center sm:text-left",e),...a});Z.displayName="AlertDialogHeader";const ee=({className:e,...a})=>t.jsx("div",{className:h("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});ee.displayName="AlertDialogFooter";const te=s.forwardRef(({className:e,...a},o)=>t.jsx(U,{ref:o,className:h("text-lg font-semibold",e),...a}));te.displayName=U.displayName;const ae=s.forwardRef(({className:e,...a},o)=>t.jsx(J,{ref:o,className:h("text-sm text-muted-foreground",e),...a}));ae.displayName=J.displayName;const oe=s.forwardRef(({className:e,...a},o)=>t.jsx(q,{ref:o,className:h(P(),e),...a}));oe.displayName=q.displayName;const Ye=s.forwardRef(({className:e,...a},o)=>t.jsx(Y,{ref:o,className:h(P({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));Ye.displayName=Y.displayName;const w=60,_=120,Ue=xe({verificationCode:he().min(6,{message:"Mã xác thực phải có ít nhất 6 ký tự."})}),et=({title:e="Xác thực",description:a="Vui lòng điền code đã được gửi tới Email của bạn",onSubmit:o,onResend:r,onExpired:n})=>{const[c,l]=s.useState(w),[i,d]=s.useState(_),[u,x]=s.useState(!1),[v,p]=s.useState(!1),{toast:A}=ge(),m=ve({resolver:Ae(Ue),defaultValues:{verificationCode:""}});s.useEffect(()=>{let f,j;return c>0&&(f=setInterval(()=>{l(y=>y-1)},1e3)),i>0&&(j=setInterval(()=>{d(y=>(y<=1&&p(!0),y-1))},1e3)),()=>{clearInterval(f),clearInterval(j)}},[c,i]);const D=f=>{const j=Math.floor(f/60),y=f%60;return`${j}:${y.toString().padStart(2,"0")}`},C=async f=>{try{if(i<=0){p(!0);return}await o(f.verificationCode)}catch{A({variant:"destructive",title:"Lỗi",description:"Xác thực thất bại. Vui lòng thử lại."})}},S=async()=>{if(!(c>0||!r))try{x(!0),await r(),l(w),d(_),p(!1),A({title:"Đã gửi lại mã",description:"Vui lòng kiểm tra email của bạn"})}catch{A({variant:"destructive",title:"Lỗi",description:"Không thể gửi lại mã xác thực"})}finally{x(!1)}},re=()=>{n&&n(),p(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(we,{className:"w-full",children:[t.jsxs(_e,{children:[t.jsx(Ee,{children:e}),t.jsxs(Re,{children:[a,i>0&&` (mã hết hạn sau: ${D(i)})`]})]}),t.jsx(Te,{children:t.jsx(De,{...m,children:t.jsx("form",{onSubmit:m.handleSubmit(C),className:"space-y-4",children:t.jsx(ye,{control:m.control,name:"verificationCode",render:({field:f})=>t.jsxs(Ne,{children:[t.jsx(je,{children:"Mã xác thực"}),t.jsx(Ce,{children:t.jsx(Se,{placeholder:"Nhập mã xác thực",...f})}),t.jsx(be,{})]})})})})}),t.jsxs(Pe,{className:"flex justify-between",children:[r&&t.jsx(b,{variant:"outline",onClick:S,disabled:c>0||u,children:u?"Đang gửi...":c>0?`Gửi lại mã (${D(c)})`:"Gửi lại mã"}),t.jsx(b,{onClick:m.handleSubmit(C),disabled:m.formState.isSubmitting||i<=0,children:m.formState.isSubmitting?"Đang xác thực...":"Xác thực"})]})]}),t.jsx(Xe,{open:v,children:t.jsxs(Q,{children:[t.jsxs(Z,{children:[t.jsx(te,{children:"Mã xác thực đã hết hạn"}),t.jsx(ae,{children:"Mã xác thực của bạn đã hết hạn. Vui lòng thực hiện lại xác thực."})]}),t.jsx(ee,{children:t.jsx(oe,{onClick:re,children:"Đồng ý"})})]})})]})};export{et as V};