import{a as Q,r as a,u as J,b as Y,j as e,P as B,d as T,e as Z,f as ee,h as O,C as te,i as se,k as ne,l as re,m as g,B as y,L as V}from"./index-Dvnajl35.js";import{o as X,s as M,b as oe,t as A,F as D,a as w,c as E,d as N,e as I,f as P,g as ie}from"./form-BOk3jqF5.js";import{u as _,I as R}from"./input-FzAILHxf.js";import{C as ae,a as ce,b as H,c as le,d as de,e as ue}from"./card-CT9DdWnJ.js";import{u as me}from"./index-CKSDTYnq.js";import{u as he,a as fe}from"./useLogin-CV27AVjP.js";import"./fetch-DadqnHmJ.js";var L="Checkbox",[pe,Pe]=Q(L),[xe,be]=pe(L),U=a.forwardRef((n,h)=>{const{__scopeCheckbox:s,name:u,checked:p,defaultChecked:c,required:d,disabled:i,value:f="on",onCheckedChange:j,...S}=n,[o,m]=a.useState(null),F=J(h,r=>m(r)),k=a.useRef(!1),v=o?!!o.closest("form"):!0,[x=!1,t]=Y({prop:p,defaultProp:c,onChange:j}),l=a.useRef(x);return a.useEffect(()=>{const r=o==null?void 0:o.form;if(r){const C=()=>t(l.current);return r.addEventListener("reset",C),()=>r.removeEventListener("reset",C)}},[o,t]),e.jsxs(xe,{scope:s,state:x,disabled:i,children:[e.jsx(B.button,{type:"button",role:"checkbox","aria-checked":b(x)?"mixed":x,"aria-required":d,"data-state":$(x),"data-disabled":i?"":void 0,disabled:i,value:f,...S,ref:F,onKeyDown:T(n.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:T(n.onClick,r=>{t(C=>b(C)?!0:!C),v&&(k.current=r.isPropagationStopped(),k.current||r.stopPropagation())})}),v&&e.jsx(ge,{control:o,bubbles:!k.current,name:u,value:f,checked:x,required:d,disabled:i,style:{transform:"translateX(-100%)"}})]})});U.displayName=L;var q="CheckboxIndicator",K=a.forwardRef((n,h)=>{const{__scopeCheckbox:s,forceMount:u,...p}=n,c=be(q,s);return e.jsx(Z,{present:u||b(c.state)||c.state===!0,children:e.jsx(B.span,{"data-state":$(c.state),"data-disabled":c.disabled?"":void 0,...p,ref:h,style:{pointerEvents:"none",...n.style}})})});K.displayName=q;var ge=n=>{const{control:h,checked:s,bubbles:u=!0,...p}=n,c=a.useRef(null),d=me(s),i=ee(h);return a.useEffect(()=>{const f=c.current,j=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(j,"checked").set;if(d!==s&&o){const m=new Event("click",{bubbles:u});f.indeterminate=b(s),o.call(f,b(s)?!1:s),f.dispatchEvent(m)}},[d,s,u]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:b(s)?!1:s,...p,tabIndex:-1,ref:c,style:{...n.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function b(n){return n==="indeterminate"}function $(n){return b(n)?"indeterminate":n?"checked":"unchecked"}var z=U,je=K;const W=a.forwardRef(({className:n,...h},s)=>e.jsx(z,{ref:s,className:O("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",n),...h,children:e.jsx(je,{className:O("flex items-center justify-center text-current"),children:e.jsx(te,{className:"h-4 w-4"})})}));W.displayName=z.displayName;const ke=X({username:M().min(2,{message:"Username phải có ít nhất 2 ký tự."}),password:M().min(6,{message:"Password phải có ít nhất 6 ký tự."}),rememberMe:oe().default(!1)}),ve=X({verificationCode:M().min(6,{message:"Mã xác thực phải có ít nhất 6 ký tự."})}),G=120,Ce=()=>{const[n,h]=a.useState(!1),[s,u]=a.useState(0),[p,c]=a.useState(!1),d=se(),{toast:i}=ne(),{login:f}=re(),{login:j}=he(),{validLogin:S}=fe(),o=_({resolver:A(ke),defaultValues:{username:"",password:"",rememberMe:!1}}),m=_({resolver:A(ve),defaultValues:{verificationCode:""}});a.useEffect(()=>{let t;return s>0&&(t=setInterval(()=>{u(l=>l-1)},1e3)),()=>clearInterval(t)},[s]),a.useEffect(()=>{localStorage.getItem("token")&&d(g.HOMEPAGE)},[d]);const F=t=>{const l=Math.floor(t/60),r=t%60;return`${l}:${r.toString().padStart(2,"0")}`};async function k(t){var l;try{const r=await j(t.username,t.password);if(!r||!r&&!n){h(!0),u(G),i({title:"Xác thực 2 lớp",description:"Vui lòng kiểm tra email của bạn để lấy mã xác thực"});return}f(r),Number((l=r.userInfo)==null?void 0:l.VerifiedEmail)===0?d(g.VERIFy_EMAIL):d(g.HOMEPAGE)}catch{i({variant:"destructive",title:"Lỗi",description:"Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin."})}}const v=async t=>{try{if(s<=0){i({variant:"destructive",title:"Hết hạn",description:"Mã xác thực đã hết hạn. Vui lòng yêu cầu mã mới."});return}const l=await S({code:t.verificationCode});l?(f(l),d(g.HOMEPAGE)):i({variant:"destructive",title:"Thất bại",description:"Mã xác thực không đúng. Vui lòng thử lại."})}catch{i({variant:"destructive",title:"Lỗi",description:"Xác thực thất bại. Vui lòng thử lại."})}},x=async()=>{if(!(s>0))try{c(!0),u(G),i({title:"Đã gửi lại mã",description:"Vui lòng kiểm tra email của bạn"})}catch{i({variant:"destructive",title:"Lỗi",description:"Không thể gửi lại mã xác thực"})}finally{c(!1)}};return n?e.jsxs(ae,{className:"w-full",children:[e.jsxs(ce,{children:[e.jsx(H,{children:"Xác thực 2 lớp"}),e.jsxs(le,{children:["Vui lòng điền code đã được gửi tới Email của bạn",s>0&&` (đếm ngược: ${F(s)})`]})]}),e.jsx(de,{children:e.jsx(D,{...m,children:e.jsx("form",{onSubmit:m.handleSubmit(v),className:"space-y-4",children:e.jsx(w,{control:m.control,name:"verificationCode",render:({field:t})=>e.jsxs(E,{children:[e.jsx(N,{children:"Mã xác thực"}),e.jsx(I,{children:e.jsx(R,{placeholder:"Nhập mã xác thực",...t})}),e.jsx(P,{})]})})})})}),e.jsxs(ue,{className:"flex justify-between",children:[e.jsx(y,{variant:"outline",onClick:x,disabled:s>0||p,children:p?"Đang gửi...":"Gửi lại mã"}),e.jsx(y,{onClick:m.handleSubmit(v),disabled:m.formState.isSubmitting||s<=0,children:m.formState.isSubmitting?"Đang xác thực...":"Xác thực"})]})]}):e.jsx(D,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(k),className:"space-y-8 w-full rounded-lg border bg-card text-card-foreground shadow-md p-8 bg-[#1b1e2b] border-color-[#495070]",children:[e.jsx(H,{children:"Đăng nhập"}),e.jsx(w,{control:o.control,name:"username",render:({field:t})=>e.jsxs(E,{children:[e.jsx(N,{children:"Username"}),e.jsx(I,{children:e.jsx(R,{placeholder:"easygun",...t})}),e.jsx(P,{})]})}),e.jsx(w,{control:o.control,name:"password",render:({field:t})=>e.jsxs(E,{children:[e.jsx(N,{children:"Mật khẩu"}),e.jsx(I,{children:e.jsx(R,{type:"password",...t})}),e.jsx(P,{})]})}),e.jsx(w,{control:o.control,name:"rememberMe",render:({field:t})=>e.jsxs(E,{className:"flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4",children:[e.jsx(I,{children:e.jsx(W,{checked:t.value,onCheckedChange:t.onChange})}),e.jsxs("div",{className:"space-y-1 leading-none",children:[e.jsx(N,{children:"Nhớ tài khoản"}),e.jsx(ie,{children:"Giữ trạng thái đăng nhập của tài khoản tại thiết bị này."})]})]})}),e.jsx(y,{type:"submit",className:"w-full",disabled:o.formState.isSubmitting,children:o.formState.isSubmitting?"Đang đăng nhập...":"Đăng Nhập"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(y,{variant:"link",type:"button",children:e.jsx(V,{to:g.FORGOT_PASSWORD,children:"Quên mật khẩu?"})}),e.jsx(y,{variant:"link",type:"button",children:e.jsx(V,{to:g.SIGNUP,children:"Đăng ký"})})]})]})})},Re=()=>(console.log("check token"),e.jsx("div",{className:"flex md:min-w-[500px] md:max-w-[600px] px-[12px] mx-auto mt-[10vh]",children:e.jsx(Ce,{})}));export{Re as default};
