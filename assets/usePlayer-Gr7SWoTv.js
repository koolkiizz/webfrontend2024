import{r as n}from"./index-Dvnajl35.js";import{u as d,e as i}from"./fetch-DadqnHmJ.js";const h=(t,o=!0)=>{const[e,a]=n.useState(void 0),[s,f]=n.useState(void 0),c=n.useRef(!1),{executePost:E,isLoading:R}=d(t||""),l=n.useCallback(async D=>{if(t)try{const r=await E(D);if(r!=null&&r.success)return a(r.data),f(void 0),r.data;{const u=new Error((r==null?void 0:r.message)||"Failed to fetch data");throw f(u),a(void 0),u}}catch(r){const u=r instanceof Error?r:new Error("Failed to fetch data");throw f(u),a(void 0),u}},[t,E]);return n.useEffect(()=>{o&&t&&!c.current&&(c.current=!0,l().catch(D=>{console.error("Error fetching data:",D)}))},[o,t,l]),{data:e,isLoading:R,error:s,fetchData:l}};function L(t=!0){const{data:o,isLoading:e,error:a,fetchData:s}=h(i.servers(),t);return{serverData:o,isLoading:e,error:a,refetch:s}}function P(t,o=!1){const e=n.useRef(t),{data:a,isLoading:s,error:f,fetchData:c}=h(t?i.transferRate():void 0,o);return n.useEffect(()=>{t&&t!==e.current&&(e.current=t,c({server_id:t}))},[t,c]),{transferRateData:a,isLoading:s,error:f,refetch:()=>t?c({server_id:t}):Promise.resolve()}}function w(t,o=!1){const e=n.useRef(t),{data:a,isLoading:s,error:f,fetchData:c}=h(t?i.players():void 0,o);return n.useEffect(()=>{t&&t!==e.current&&(e.current=t,c({server_id:t}))},[t,c]),{playerData:a,isLoading:s,error:f,refetch:()=>t?c({server_id:t}):Promise.resolve()}}function y(t=!0){const{data:o,isLoading:e,error:a,fetchData:s}=h(i.coinInfo(),t);return{coinData:o,isLoading:e,error:a,refetch:s}}export{w as a,P as b,y as c,L as u};
