import{r as w,k as y,i as F,l as N,j as s,B as x,m as M}from"./index-DOY103Le.js";import{o as V,s as a,u as T,t as v,F as E,a as c,c as d,d as h,e as m,I as l,f as u,g as I}from"./input-B5BsTCIk.js";import{A,a as R}from"./alert-DnUGBTVG.js";import{C as _}from"./fetch-CQKbCpjU.js";import{d as L,e as B}from"./useLogin-mIrc9PU5.js";import{V as D}from"./verify-form-BCNO5Zzl.js";const K=V({currentPassword:a().min(1,"Yêu cầu nhập mật khẩu hiện tại."),newPassword:a().min(6,"Mật khẩu mới phải có ít nhất 6 ký tự."),confirmNewPassword:a().min(1,"Vui lòng nhập mật khẩu mới.")}).refine(o=>o.newPassword===o.confirmNewPassword,{message:"Mật khẩu không trùng khớp.",path:["confirmNewPassword"]}),O=()=>{const[o,p]=w.useState(!1),[g,i]=w.useState(!1),{toast:t}=y(),f=F(),{changePassword:j}=L(),{validChangePassword:k}=B(),{logout:P}=N(),e=T({resolver:v(K),defaultValues:{currentPassword:"",newPassword:"",confirmNewPassword:""}});async function b(r){try{const n=await j({current_password:r.currentPassword,new_password:r.newPassword,re_new_password:r.confirmNewPassword});if(n===2){t({title:"Nhập mã xác thực để đổi mật khẩu thành công!"}),i(!0);return}t({title:n.toString()||"Đổi mật khẩu thành công!"})}catch(n){console.error("Change password error:",n),t({title:"Đổi mật khẩu không thành công! Vui lòng thử lại."})}}const C=async()=>{try{t({title:"Đã gửi lại mã",description:"Vui lòng kiểm tra email của bạn"})}catch{t({variant:"destructive",title:"Lỗi",description:"Không thể gửi lại mã xác thực"})}},S=()=>{i(!1)};return g?s.jsx(D,{title:"Mã xác thực đổi mật khẩu",onSubmit:async r=>{if(await k({code:r}))i(!1),P(),p(!0);else throw new Error("Mã xác thực không đúng")},onResend:C,onExpired:S}):o?s.jsxs(A,{children:[s.jsx(R,{children:"Mật khẩu đã được cập nhập. Vui lòng đăng nhập lại."}),s.jsx(x,{onClick:()=>{f(M.LOGIN)},children:"Tới trang đăng nhập"})]}):s.jsx(E,{...e,children:s.jsxs("form",{onSubmit:e.handleSubmit(b),className:"space-y-8 w-full rounded-lg border bg-card text-card-foreground shadow-md p-8 bg-[#1b1e2b] border-color-[#495070]",children:[s.jsx(_,{children:"Đổi mật khẩu"}),s.jsx(c,{control:e.control,name:"currentPassword",render:({field:r})=>s.jsxs(d,{children:[s.jsx(h,{children:"Mật khẩu hiện tại"}),s.jsx(m,{children:s.jsx(l,{type:"password",...r})}),s.jsx(u,{})]})}),s.jsx(c,{control:e.control,name:"newPassword",render:({field:r})=>s.jsxs(d,{children:[s.jsx(h,{children:"Mật khẩu mới"}),s.jsx(m,{children:s.jsx(l,{type:"password",...r})}),s.jsx(I,{children:"Mật khẩu của bạn phải dài hơn 6 ký tự."}),s.jsx(u,{})]})}),s.jsx(c,{control:e.control,name:"confirmNewPassword",render:({field:r})=>s.jsxs(d,{children:[s.jsx(h,{children:"Xác nhận mật khẩu mới"}),s.jsx(m,{children:s.jsx(l,{type:"password",...r})}),s.jsx(u,{})]})}),s.jsx(x,{type:"submit",disabled:e.formState.isSubmitting,children:e.formState.isSubmitting?"Đang xác thực...":"Xác Thực Mật Khẩu"})]})})},H=()=>s.jsx("div",{className:"flex md:min-w-[500px] md:max-w-[600px] mx-auto mt-[10vh] rounded-lg p-6",children:s.jsx(O,{})});export{H as default};