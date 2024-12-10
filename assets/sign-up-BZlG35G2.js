import{k as u,i as p,j as s,B as j,m as w}from"./index-DOY103Le.js";import{o as f,s as t,u as k,t as b,F as y,a as o,c as a,d as i,e as c,I as m,g as F,f as l}from"./input-B5BsTCIk.js";import{u as P,e as S,C as E}from"./fetch-CQKbCpjU.js";function T(){const{executePost:r,isLoading:n,isError:d}=P(S.register());return{register:async h=>{const e=await r(h);if(e!=null&&e.success)return e==null?void 0:e.success;throw new Error(e==null?void 0:e.message)},isLoading:n,isError:d}}const N=f({username:t().min(2,{message:"Username phải có ít nhất 2 ký tự"}),email:t().email({message:"Vui lòng nhập địa chỉ Email."}),password:t().min(6,{message:"Password phải có ít nhất 6 ký tự."}),confirmPassword:t()}).refine(r=>r.password===r.confirmPassword,{message:"Mật khẩu không chính xác",path:["confirmPassword"]}),U=()=>{const r=k({resolver:b(N),defaultValues:{username:"",email:"",password:"",confirmPassword:""}}),{toast:n}=u(),d=p(),{register:x}=T(),h=async e=>{try{if(!await x({username:e.username,password:e.password,repassword:e.confirmPassword,email:e.email})){n({title:"Đăng ký không thành công. Vui lòng thử lại!"});return}n({title:"Đăng ký thành công. Vui lòng đăng nhập vào hệ thống."}),d(w.LOGIN)}catch{n({title:"Đăng ký không thành công. Vui lòng thử lại!"})}};return s.jsx(y,{...r,children:s.jsxs("form",{onSubmit:r.handleSubmit(h),className:"space-y-8 w-full rounded-lg border bg-card text-card-foreground shadow-md p-8 bg-[#1b1e2b] border-color-[#495070]",children:[s.jsx(E,{children:"Đăng ký"}),s.jsx(o,{control:r.control,name:"username",render:({field:e})=>s.jsxs(a,{children:[s.jsx(i,{children:"Username"}),s.jsx(c,{children:s.jsx(m,{placeholder:"easygun",...e})}),s.jsx(F,{children:"Tên hiển thị trên hệ thống."}),s.jsx(l,{})]})}),s.jsx(o,{control:r.control,name:"email",render:({field:e})=>s.jsxs(a,{children:[s.jsx(i,{children:"Email"}),s.jsx(c,{children:s.jsx(m,{type:"email",placeholder:"easygun@example.com",...e})}),s.jsx(l,{})]})}),s.jsx(o,{control:r.control,name:"password",render:({field:e})=>s.jsxs(a,{children:[s.jsx(i,{children:"Mật khẩu"}),s.jsx(c,{children:s.jsx(m,{type:"password",...e})}),s.jsx(l,{})]})}),s.jsx(o,{control:r.control,name:"confirmPassword",render:({field:e})=>s.jsxs(a,{children:[s.jsx(i,{children:"Nhập lại mật khẩu"}),s.jsx(c,{children:s.jsx(m,{type:"password",...e})}),s.jsx(l,{})]})}),s.jsx(j,{type:"submit",children:"Đăng Ký"})]})})},C=()=>s.jsx("div",{className:"flex md:min-w-[500px] md:max-w-[600px] px-[12px] mx-auto mt-[10vh]",children:s.jsx(U,{})});export{C as default};