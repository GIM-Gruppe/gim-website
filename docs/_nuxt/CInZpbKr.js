import{_ as g}from"./BrW7J-ik.js";import{_ as h}from"./EMUwvgc5.js";import{u as y,q as b}from"./SxZFeX-e.js";import{e as k,f as C,u as e,o as i,c as o,b as u,w}from"./DnyqqZog.js";import"./BRdu-KXB.js";import"./DXpS5pRD.js";import"./Vpv_oR8T.js";import"./CFaQ9HfC.js";const x={key:0},q={key:1},A={key:2},W=k({__name:"it-infrastructure",async setup(B){let s,n;const{data:t,pending:p,error:d}=([s,n]=C(()=>y("infra",()=>b("/services/content").findOne())),s=await s,n(),s);return console.log(t),(L,P)=>{const f=g,v=h;return e(p)?(i(),o("div",x,"Loading...")):e(d)?(i(),o("div",q,"Failed to load content")):(i(),o("div",A,[u(v,null,{default:w(()=>{var a,r,c,_,m,l;return[u(f,{title:(a=e(t))==null?void 0:a.services[0].title,subtitle:(r=e(t))==null?void 0:r.services[0].subtitle,description:(c=e(t))==null?void 0:c.services[0].description,image:(_=e(t))==null?void 0:_.services[0].image,imagealt:(m=e(t))==null?void 0:m.services[0].imagealt,features:(l=e(t))==null?void 0:l.services[0].subservice},null,8,["title","subtitle","description","image","imagealt","features"])]}),_:1})]))}}});export{W as default};
