import{_ as p}from"./Vpv_oR8T.js";import{u as g,q as h}from"./SxZFeX-e.js";import{e as y,f as v,u as s,o,c as a,a as t,t as i,F as w,g as b,b as k,w as C}from"./DnyqqZog.js";import"./CFaQ9HfC.js";const j={key:0},B={key:1},F={key:2},L={class:"bg-white py-14 sm:py-16"},N={class:"mx-auto max-w-7xl px-6 lg:px-8"},q={class:"mx-auto max-w-2xl lg:mx-0"},A={class:"text-base font-semibold leading-7 text-primary"},D={class:"mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},V={class:"flex flex-wrap justify-center gap-20"},z={class:"relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-80"},E=["src","alt"],O={class:"z-10 mt-3 text-2xl font-bold text-white"},K=y({__name:"index",async setup(S){let n,r;const{data:l,pending:x,error:u}=([n,r]=v(()=>g("services",()=>h("/services/content").findOne())),n=await n,r(),n);return console.log(l),($,c)=>{var d,_,m;const f=p;return s(x)?(o(),a("div",j,"Loading...")):s(u)?(o(),a("div",B,"Failed to load content")):(o(),a("div",F,[t("div",L,[t("div",N,[t("div",q,[t("p",A,i((d=s(l))==null?void 0:d.subtitle),1),t("h2",D,i((_=s(l))==null?void 0:_.title),1)])])]),t("div",V,[(o(!0),a(w,null,b((m=s(l))==null?void 0:m.services,e=>(o(),a("div",{key:e.name,class:"flex-none"},[k(f,{to:`/services/${e.name}`,class:"flex transition transform hover:scale-110 sm:w-auto"},{default:C(()=>[t("article",z,[t("img",{src:e.image,alt:e.imagealt,class:"absolute inset-0 h-full w-full object-cover"},null,8,E),c[0]||(c[0]=t("div",{class:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"},null,-1)),t("h3",O,i(e.title),1)])]),_:2},1032,["to"])]))),128))])]))}}});export{K as default};
