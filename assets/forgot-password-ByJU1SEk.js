import{r as n,k as x,i as f,j as t,B as m,m as p}from"./index-DUiZQG6g.js";import{o as b,s as j,u as F,t as w,F as k,a as S,c as y,d as v,e as C,I as P,g as V,f as E}from"./input-CAS36Rw2.js";import{A as L,a as N}from"./alert-DapaZWOf.js";import{C as T}from"./fetch-D-GyEK-U.js";import{b as I,c as M}from"./useLogin-BrGn4Yv4.js";import{V as A}from"./verify-form-CC2gme-z.js";const R=b({email:j().email({message:"Please enter a valid email address."})}),B=()=>{const[c,l]=n.useState(!1),[d,a]=n.useState(!1),{toast:o}=x(),u=f(),{forgotPassword:h}=I(),{validForgotPassword:g}=M(),e=F({resolver:w(R),defaultValues:{email:""}});async function i(s){try{const r=await h({account:s.email});if(r!==!0){o({title:"Lỗi",description:r||"Vui lòng kiểm tra email của bạn."});return}o({title:"Nhập mã xác thực để đổi mật khẩu thành công!"}),a(!0)}catch{o({variant:"destructive",title:"Lỗi",description:"Lấy lại mật khẩu thất bại. Vui lòng kiểm tra lại thông tin."})}}return d?t.jsx(A,{title:"Mã xác thực đổi mật khẩu",onSubmit:async s=>{if(await g({code:s}))a(!1),l(!0);else throw new Error("Mã xác thực không đúng")},onResend:async()=>{await i(e.getValues())},onExpired:()=>{a(!1)}}):c?t.jsxs(L,{children:[t.jsxs(N,{children:["Nếu tài khoản của bạn đăng ký địa chỉ email: ",e.getValues().email,", bạn sẽ nhận được mật khẩu tại địa chỉ này."]}),t.jsx(m,{onClick:()=>{u(p.LOGIN)},children:"Tới trang đăng nhập"})]}):t.jsx(k,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(i),className:"space-y-8 w-full rounded-lg border bg-card text-card-foreground shadow-md p-8 bg-[#1b1e2b] border-color-[#495070]",children:[t.jsx(T,{children:"Quên mật khẩu"}),t.jsx(S,{control:e.control,name:"email",render:({field:s})=>t.jsxs(y,{children:[t.jsx(v,{children:"Email"}),t.jsx(C,{children:t.jsx(P,{type:"email",placeholder:"easygun@gmail.com",...s})}),t.jsx(V,{children:"Nhập Email đã được đăng ký tài khoản"}),t.jsx(E,{})]})}),t.jsx(m,{type:"submit",disabled:e.formState.isSubmitting,children:e.formState.isSubmitting?"Đang Đặt Lại Mật Khẩu...":"Đặt Lại Mật Khẩu"})]})})},q=()=>t.jsx("div",{className:"flex md:min-w-[500px] md:max-w-[600px] px-[12px] mx-auto mt-[10vh]",children:t.jsx(B,{})});export{q as default};
