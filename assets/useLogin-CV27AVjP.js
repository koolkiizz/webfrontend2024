import{n as e}from"./index-Dvnajl35.js";import{u as d,e as g}from"./fetch-DadqnHmJ.js";function f(){const{executePost:n,isLoading:i,isError:o}=d(g.login());return{login:async(c,a)=>{const s=await n({username:c,password:a});if(s!=null&&s.success)return s==null?void 0:s.data;throw new Error(s==null?void 0:s.message)},isLoading:i,isError:o}}function h(){const{executePost:n,isLoading:i,isError:o}=d(g.changePassword()),r=a=>{const{current_password:s,new_password:t,re_new_password:u}=a,w=[{condition:!s||!t||!u,message:e.ERRORS.REQUIRED},{condition:t!==u,message:e.ERRORS.MISMATCH},{condition:t===s,message:e.ERRORS.SAME_AS_CURRENT},{condition:t.length<e.MIN_LENGTH,message:e.ERRORS.MIN_LENGTH}].find(({condition:l})=>l);if(w)throw new Error(w.message)};return{changePassword:async a=>{const s={...a};r(s);const t=await n(s);return t!=null&&t.success?"success":(t==null?void 0:t.message)||"Password change failed"},isLoading:i,isError:o}}function m(){const{executePost:n,isLoading:i,isError:o}=d(g.validateLogin());return{validLogin:async c=>{const a=await n(c);if(a!=null&&a.success)return a==null?void 0:a.data;throw new Error(a==null?void 0:a.message)},isLoading:i,isError:o}}function L(){const{executePost:n,isLoading:i,isError:o}=d(g.validChangePassword());return{validChangePassword:async c=>{const a=await n(c);if(a!=null&&a.success)return a==null?void 0:a.message;throw new Error(a==null?void 0:a.message)},isLoading:i,isError:o}}export{m as a,h as b,L as c,f as u};
