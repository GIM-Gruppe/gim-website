import{_ as h}from"./DCNpltGT.js";import{_ as g}from"./CUTiCpjM.js";import{u as b,q as k}from"./CgqPkJJW.js";import{e as w,f as C,u as e,o as n,c as r,b as u,w as x}from"./Gi_omnao.js";import"./DqGb6fyb.js";import"./BhT8wN3q.js";import"./B_Ar_RkD.js";import"./Dpzw-eop.js";const q={key:0},A={key:1},B={key:2},W=w({__name:"sap",async setup(L){let s,i;const{data:t,pending:d,error:f}=([s,i]=C(async()=>b("sap",async()=>{try{return await k("/services/content").findOne()}catch(o){return console.error(o),null}})),s=await s,i(),s);return(o,P)=>{const v=h,y=g;return e(d)?(n(),r("div",q,"Loading...")):e(f)?(n(),r("div",A,"Failed to load content")):(n(),r("div",B,[u(y,null,{default:x(()=>{var a,c,_,m,l,p;return[u(v,{title:(a=e(t))==null?void 0:a.services[2].title,subtitle:(c=e(t))==null?void 0:c.services[2].subtitle,description:(_=e(t))==null?void 0:_.services[2].description,image:(m=e(t))==null?void 0:m.services[2].image,imagealt:(l=e(t))==null?void 0:l.services[2].imagealt,features:(p=e(t))==null?void 0:p.services[2].subservice},null,8,["title","subtitle","description","image","imagealt","features"])]}),_:1})]))}}});export{W as default};