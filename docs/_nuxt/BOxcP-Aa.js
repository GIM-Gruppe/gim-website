import{_ as g}from"./CEI_kG0D.js";import{e as h,r as S,m as N,n as P,o as l,k as v,w as x,a as t,c as u,j as M,s as D,v as B,d as V,t as a,F as W,b as m,f as q,g as A,i as n,q as G}from"./DHS9BTLE.js";import{_ as U}from"./DUvG0rqF.js";import E from"./0zuG5b9h.js";import{u as H}from"./CT0T9O1k.js";import"./aDHj2Aep.js";import"./DfYVjJVF.js";const O=window.setInterval,Y={class:"relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8"},Z={class:"max-w-xl text-left text-shadow"},J={class:"font-extrabold"},K={class:"block font-extrabold text-primary"},Q={class:"mt-4 max-w-lg text-white"},R=6e3,X=h({__name:"Carousel",props:{slides:{}},setup(c){const e=c,o=S(0),s=()=>{o.value=(o.value+1)%e.slides.length},i=()=>{o.value=(o.value-1+e.slides.length)%e.slides.length};let r=null;return N(()=>{r=O(s,R)}),P(()=>{r&&clearInterval(r)}),(d,_)=>{const w=g;return l(),v(w,{class:"relative h-[500px] flex items-center !max-w-full"},{default:x(()=>[t("button",{onClick:i,class:"absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2"},_[0]||(_[0]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)])),(l(!0),u(W,null,M(e.slides,(p,f)=>(l(),u("div",{key:f,style:D({backgroundImage:`url(${p.background_image})`}),class:B(["absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center transition-opacity duration-1000 ease-in-out",f===o.value?"opacity-100 z-10":"opacity-0 z-0"])},[_[1]||(_[1]=t("div",{class:"absolute inset-0 bg-black/50"},null,-1)),t("div",Y,[t("div",Z,[t("h1",J,[V(a(p.title1)+" ",1),t("strong",K,a(p.title2),1)]),t("p",Q,a(p.text),1)])])],6))),128)),t("button",{onClick:s,class:"absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2"},_[2]||(_[2]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]))]),_:1})}}}),tt={class:"flex items-center flex-wrap"},et={class:"grow-0"},st={class:"font-semibold"},ot={class:"mt-4"},nt={class:"mt-6 flex flex-col items-center sm:flex-row sm:justify-between gap-3 w-full max-w-3xl mx-auto"},lt=h({__name:"TextWithCta",props:{title:{},description:{}},setup(c){const e=c;return(o,s)=>{const i=U,r=g;return l(),v(r,null,{default:x(()=>[t("div",tt,[t("div",et,[t("h1",st,a(e.title),1),t("p",ot,a(e.description),1)])]),t("div",nt,[m(i,{size:"xl",href:"/contact",label:"Termin vereinbaren",class:"w-3/4 sm:w-1/3"}),m(i,{size:"xl",style:"outline",href:"/services",label:"Zu den Leistungen",class:"w-3/4 sm:w-1/3"})])]),_:1})}}}),it={class:"mt-16 md:mt-0"},at={class:"lg:tracking-tight font-semibold"},rt={class:"grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"},ct={class:"flex gap-4 items-start"},dt={class:"flex justify-center items-center mt-1 bg-black rounded-full w-8 h-8 shrink-0"},mt={class:"font-semibold"},_t={class:"text-secondary mt-2 leading-relaxed"},ut=h({__name:"Features",props:{title:{},services:{}},setup(c){const e=c;return(o,s)=>{const i=E,r=g;return l(),v(r,{topMargin:"",bottomMargin:""},{default:x(()=>[t("div",it,[t("h1",at,a(e.title),1),s[0]||(s[0]=t("p",{class:"mt-4 text-slate-600"},null,-1))]),t("div",rt,[(l(!0),u(W,null,M(e.services,d=>(l(),u("div",ct,[t("div",dt,[m(i,{class:"text-white w-4 h-4",name:d.icon},null,8,["name"])]),t("div",null,[t("h2",mt,a(d.title),1),t("text",_t,a(d.description),1)])]))),256))])]),_:1})}}}),pt={class:"flex flex-col md:flex-row gap-16"},gt=["src","alt"],ht={class:"flex items-center flex-wrap"},xt={class:"grow-0"},ft={class:"font-semibold"},vt={class:"mt-4"},wt=h({__name:"ImageWithText",props:{imgPos:{default:"right"},imgsrc:{},imgalt:{},title:{},description:{}},setup(c){const e=c;return(o,s)=>{const i=g;return l(),v(i,null,{default:x(()=>[t("div",pt,[t("div",{class:B(["shrink-0",{"md:order-last":o.imgPos=="right"}])},[t("img",{src:o.imgsrc,alt:o.imgalt,class:"w-70 h-80 rounded-full object-cover"},null,8,gt)],2),t("div",ht,[t("div",xt,[t("h1",ft,a(e.title),1),t("p",vt,a(e.description),1)])])])]),_:1})}}}),bt={key:0},yt={key:1},kt={key:2},Bt=h({__name:"index",async setup(c){let e,o;const{data:s,pending:i,error:r}=([e,o]=q(async()=>H("home",async()=>{try{return await G("/home/content").findOne()}catch(d){return console.error(d),null}})),e=await e,o(),e);return A("GIM Website - Home","Welcome to GIM Website - Your trusted partner for IT solutions"),(d,_)=>{var b;const w=X,p=lt,f=ut,j=wt,F=g;return n(i)?(l(),u("div",bt,"Loading...")):n(r)?(l(),u("div",yt,"Failed to load content")):(l(),u("div",kt,[m(w,{slides:(b=n(s))==null?void 0:b.carousel},null,8,["slides"]),m(F,null,{default:x(()=>{var y,k,$,C,I,T,z,L;return[m(p,{class:"py-20",title:(y=n(s))==null?void 0:y.textwithcta.title,description:(k=n(s))==null?void 0:k.textwithcta.text},null,8,["title","description"]),m(f,{class:"pb-20",title:($=n(s))==null?void 0:$.serviceoverview.title,services:(C=n(s))==null?void 0:C.serviceoverview.services},null,8,["title","services"]),m(j,{class:"pb-20",imgsrc:(I=n(s))==null?void 0:I.textimageleft.image,imgalt:(T=n(s))==null?void 0:T.textimageleft.imagealt,title:(z=n(s))==null?void 0:z.textimageleft.title,description:(L=n(s))==null?void 0:L.textimageleft.text,imgPos:"left"},null,8,["imgsrc","imgalt","title","description"])]}),_:1})]))}}});export{Bt as default};
