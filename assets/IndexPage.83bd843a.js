import{c as v,h as $}from"./render.8fd3fbf4.js";import{e as g,f as s,c as d,h as k,j as P,C as Q,g as _,G as C,Z as x,_ as y,r as m,I as u,S as p,R as i,O as r,U as B,T as F,Q as q,J as j,K as E,L as I}from"./index.f5a0b6c0.js";var S=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:c}}=_(),t=g(P,s);if(t===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(g(Q,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const l=d(()=>{const a=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:c.screen.height;return e.styleFn(a,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-a+"px":c.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":c.screen.height-a+"px"}}),o=d(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>k("main",{class:o.value,style:l.value},$(n.default))}});function b(){const e=m(0);function n(){return e.value+=1,e.value}return{clickCount:e,increment:n}}function H(e){return{todoCount:d(()=>e.value.length)}}const K=C({name:"ExampleComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(e){return{...b(),...H(x(e,"todos"))}}});function L(e,n,c,t,f,l){return u(),p("div",null,[i("p",null,r(e.title),1),i("ul",null,[(u(!0),p(B,null,F(e.todos,o=>(u(),p("li",{key:o.id,onClick:n[0]||(n[0]=(...a)=>e.increment&&e.increment(...a))},r(o.id)+" - "+r(o.content),1))),128))]),i("p",null,"Count: "+r(e.todoCount)+" / "+r(e.meta.totalCount),1),i("p",null,"Active: "+r(e.active?"yes":"no"),1),i("p",null,"Clicks on todos: "+r(e.clickCount),1)])}var R=y(K,[["render",L]]);const w=C({name:"IndexPage",components:{ExampleComponent:R},setup(){const e=m([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),n=m({totalCount:1200});return{todos:e,meta:n}}});function z(e,n,c,t,f,l){const o=q("example-component");return u(),j(S,{class:"row items-center justify-evenly"},{default:E(()=>[I(o,{title:"Example component",active:"",todos:e.todos,meta:e.meta},null,8,["todos","meta"])]),_:1})}var N=y(w,[["render",z]]);export{N as default};
