import{e as d,H as l,I as f,J as v,K as p,L as m,M as g,D as h,G as s}from"./DHS9BTLE.js";import{u as _}from"./CT0T9O1k.js";import{_ as y}from"./aDHj2Aep.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await _(`content-navigation-${g(n.value)}`,()=>m(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>s(y,{to:e._path},()=>e.title),a=(e,u)=>s("ul",u?{"data-level":u}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,u+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};
