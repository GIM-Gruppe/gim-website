import{_ as g}from"./BrW7J-ik.js";import{_ as h}from"./EMUwvgc5.js";import{u as y,q as b}from"./SxZFeX-e.js";import{e as k,f as C,u as e,o as i,c as o,b as l,w}from"./DnyqqZog.js";import"./BRdu-KXB.js";import"./DXpS5pRD.js";import"./Vpv_oR8T.js";import"./CFaQ9HfC.js";const x={key:0},q={key:1},A={key:2},W=k({__name:"managed-services",async setup(B){let s,a;const{data:t,pending:p,error:u}=([s,a]=C(()=>y("managedservices",()=>b("/services/content").findOne())),s=await s,a(),s);return(L,P)=>{const f=g,v=h;return e(p)?(i(),o("div",x,"Loading...")):e(u)?(i(),o("div",q,"Failed to load content")):(i(),o("div",A,[l(v,null,{default:w(()=>{var n,r,c,m,_,d;return[l(f,{title:(n=e(t))==null?void 0:n.services[1].title,subtitle:(r=e(t))==null?void 0:r.services[1].subtitle,description:(c=e(t))==null?void 0:c.services[1].description,image:(m=e(t))==null?void 0:m.services[1].image,imagealt:(_=e(t))==null?void 0:_.services[1].imagealt,features:(d=e(t))==null?void 0:d.services[1].subservice},null,8,["title","subtitle","description","image","imagealt","features"])]}),_:1})]))}}});export{W as default};
