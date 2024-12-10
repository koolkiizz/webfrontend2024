import{p as A,k as B,r as P,j as e,B as k}from"./index-DOY103Le.js";import{o as H,s as u,u as O,F as X,a as x,c as j,d as o,e as p,f as v,I as z,t as J}from"./input-B5BsTCIk.js";import{a as F,c as V,C as w,f as M,b as _}from"./fetch-CQKbCpjU.js";import{S as N,a as C,b as I,c as L,d as T}from"./select-D3-GhMTQ.js";import{a as K}from"./useCoin-mT58Jlns.js";import{u as Q,a as W,b as Y,c as Z}from"./usePlayer-hD3oHwjk.js";import"./index-C1AYvJPv.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=A("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),g=600,S=1e8,D=H({serverId:u({required_error:"Vui lòng chọn server"}),playerId:u({required_error:"Vui lòng chọn nhân vật"}),amount:u().refine(c=>{const r=Number(c);return!isNaN(r)&&r>=g&&r<=S},{message:`Số coin phải từ ${g.toLocaleString()} đến ${S.toLocaleString()}`})}),ee=({coinData:c,loadingCoin:r,onRefresh:a})=>e.jsxs(F,{className:"mb-6",children:[e.jsxs(V,{className:"flex flex-row items-center justify-between space-y-0 pb-4",children:[e.jsxs("div",{children:[e.jsx(w,{className:"text-xl font-bold",children:"Số coin hiện tại"}),e.jsx(M,{children:"Số coin bạn có thể chuyển"})]}),e.jsx(k,{variant:"outline",size:"icon",onClick:a,disabled:r,children:e.jsx(R,{className:`h-4 w-4 ${r?"animate-spin":""}`})})]}),e.jsx(_,{children:e.jsx("div",{className:"text-2xl font-bold",children:r?e.jsx("span",{className:"text-muted-foreground",children:"Đang tải..."}):e.jsxs("span",{children:[(c==null?void 0:c.coin.toLocaleString())||0," coin"]})})})]}),ae=()=>{const{toast:c}=B(),[r,a]=P.useState(""),{serverData:d,isLoading:y}=Q(!0),{playerData:h,isLoading:m}=W(r,!1),{transferRateData:t}=Y(r,!1),{coinData:l,isLoading:$,refetch:f}=Z(!0),{transferCoin:q}=K(),i=O({resolver:J(D),defaultValues:{serverId:"",playerId:"",amount:""}}),E=s=>{a(s),i.setValue("serverId",s),i.setValue("playerId","")},G=async s=>{try{const n=Number(s.amount);if(n>((l==null?void 0:l.coin)||0)){c({variant:"destructive",title:"Lỗi",description:"Số coin chuyển không được lớn hơn số coin hiện có"});return}const b=await q({server_id:s.serverId,player_id:s.playerId,coin:n});if(!b)throw new Error("Đã có lỗi xảy ra khi chuyển coin");c({title:"Thành công",description:b||"Chuyển coin thành công"}),U(),f()}catch(n){c({variant:"destructive",title:"Lỗi",description:n instanceof Error?n.message:"Đã có lỗi xảy ra khi chuyển coin"})}},U=()=>{i.reset(),a("")};return e.jsxs("div",{className:"container mx-auto max-w-2xl py-8",children:[e.jsx(ee,{coinData:l,loadingCoin:$,onRefresh:f}),e.jsxs(F,{children:[e.jsxs(V,{children:[e.jsx(w,{children:"Chuyển coin"}),e.jsx(M,{children:"Chọn server và nhân vật để chuyển coin"})]}),e.jsx(_,{children:e.jsx(X,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(G),className:"space-y-6",children:[e.jsx(x,{control:i.control,name:"serverId",render:({field:s})=>e.jsxs(j,{children:[e.jsx(o,{children:"Server"}),e.jsxs(N,{disabled:y,onValueChange:E,value:s.value,children:[e.jsx(p,{children:e.jsx(C,{children:e.jsx(I,{placeholder:y?"Đang tải...":"Chọn server"})})}),e.jsx(L,{children:d==null?void 0:d.map(n=>e.jsx(T,{value:n.ServerID.toString(),children:n.ServerName},n.ServerID))})]}),(t==null?void 0:t.rate)&&e.jsxs(o,{className:"italic text-s text-gray-700 font-medium",children:["Tỉ lệ quy đổi 1.000 = ",Number(t==null?void 0:t.rate)*1e3," xu"]}),e.jsx(v,{})]})}),e.jsx(x,{control:i.control,name:"playerId",render:({field:s})=>e.jsxs(j,{children:[e.jsx(o,{children:"Nhân vật"}),e.jsxs(N,{disabled:!r||m,onValueChange:s.onChange,value:s.value,children:[e.jsx(p,{children:e.jsx(C,{children:e.jsx(I,{placeholder:r?m?"Đang tải...":"Chọn nhân vật":"Vui lòng chọn server trước"})})}),e.jsx(L,{children:h==null?void 0:h.map(n=>e.jsx(T,{value:n.UserID.toString(),children:n.NickName},n.UserID))})]}),e.jsx(v,{})]})}),e.jsx(x,{control:i.control,name:"amount",render:({field:s})=>e.jsxs(j,{children:[e.jsxs(o,{children:["Số coin chuyển"," ",s.value&&Number(t==null?void 0:t.rate)&&`( ${Number(s.value)*Number(t==null?void 0:t.rate)}  xu)`]}),e.jsx(p,{children:e.jsx(z,{type:"number",placeholder:`Nhập số coin (${g.toLocaleString()} - ${S.toLocaleString()})`,...s})}),e.jsx(o,{className:"italic text-s text-gray-700 font-medium",children:"**X2 khi nạp lần đầu (tối đa 1,500,000 VND)**"}),e.jsx(o,{className:"italic text-s text-gray-700 font-medium block",children:"**Tối thiếu 600 coin**"}),e.jsx(v,{})]})}),e.jsx(k,{type:"submit",className:"w-full",disabled:i.formState.isSubmitting||m||!r||!i.formState.isValid,children:i.formState.isSubmitting?"Đang xử lý...":"Chuyển coin"})]})})})]})]})};export{ae as default};
