import{Y as I,F as U,h as d,D as N,c,g as T,Z as Q,W as H,x as Y,C as W,A as X,B as Z}from"./index.08b0ecb7.js";const G=e=>I(U(e)),J=e=>I(e);function ee(e,t){return e!==void 0&&e()||t}function ye(e,t){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return t}function E(e,t){return e!==void 0?t.concat(e()):t}function ke(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function xe(e,t,r,n,i,u){t.key=n+i;const a=d(e,t,r);return i===!0?N(a,u()):a}function te(e){return e.appContext.config.globalProperties.$router!==void 0}function $e(e){return e.isUnmounted===!0||e.isDeactivated===!0}function O(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function B(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ne(e,t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((u,a)=>u!==i[a]))return!1}return!0}function L(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function re(e,t){return Array.isArray(e)===!0?L(e,t):Array.isArray(t)===!0?L(t,e):e===t}function se(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(re(e[r],t[r])===!1)return!1;return!0}const be={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Re({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=T(),{props:n,proxy:i,emit:u}=r,a=te(r),s=c(()=>n.disable!==!0&&n.href!==void 0),g=t===!0?c(()=>a===!0&&n.disable!==!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>a===!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),f=c(()=>g.value===!0?C(n.to):null),o=c(()=>f.value!==null),p=c(()=>s.value===!0||o.value===!0),y=c(()=>n.type==="a"||p.value===!0?"a":n.tag||e||"div"),m=c(()=>s.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:f.value.href,target:n.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=f.value,{length:v}=l,x=l[v-1];if(x===void 0)return-1;const $=i.$route.matched;if($.length===0)return-1;const b=$.findIndex(B.bind(null,x));if(b>-1)return b;const A=O(l[v-2]);return v>1&&O(x)===A&&$[$.length-1].path!==A?$.findIndex(B.bind(null,l[v-2])):b}),h=c(()=>o.value===!0&&k.value!==-1&&ne(i.$route.params,f.value.params)),S=c(()=>h.value===!0&&k.value===i.$route.matched.length-1&&se(i.$route.params,f.value.params)),q=c(()=>o.value===!0?S.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":h.value===!0?` ${n.activeClass}`:"":"");function C(l){try{return i.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:v,to:x=n.to,replace:$=n.replace}={}){if(n.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||n.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=i.$router[$===!0?"replace":"push"](x);return v===!0?b:b.then(()=>{}).catch(()=>{})}function _(l){if(o.value===!0){const v=x=>R(l,x);u("click",l,v),l.defaultPrevented!==!0&&v()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:s,hasLink:p,linkTag:y,resolvedLink:f,linkIsActive:h,linkIsExactActive:S,linkClass:q,linkAttrs:m,getLink:C,navigateToRouterLink:R,navigateOnClick:_}}function ie(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function _e(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Q(e);if(t)return t.$el||t}const ae={xs:18,sm:24,md:32,lg:38,xl:46},oe={size:String};function ue(e,t=ae){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const M="0 0 24 24",P=e=>e,w=e=>`ionicons ${e}`,K={"mdi-":e=>`mdi ${e}`,"icon-":P,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":w,"ion-ios":w,"ion-logo":w,"iconfont ":P,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},F={o_:"-outlined",r_:"-round",s_:"-sharp"},V={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},le=new RegExp("^("+Object.keys(K).join("|")+")"),ce=new RegExp("^("+Object.keys(F).join("|")+")"),j=new RegExp("^("+Object.keys(V).join("|")+")"),fe=/^[Mm]\s?[-+]?\.?\d/,de=/^img:/,pe=/^svguse:/,ve=/^ion-/,me=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Se=G({name:"QIcon",props:{...oe,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=T(),n=ue(e),i=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let a,s=e.name;if(s==="none"||!s)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(s);if(o!==void 0)if(o.icon!==void 0){if(s=o.icon,s==="none"||!s)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(fe.test(s)===!0){const[o,p=M]=s.split("|");return{svg:!0,viewBox:p,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return d("path",{style:k,d:m,transform:h})})}}if(de.test(s)===!0)return{img:!0,src:s.substring(4)};if(pe.test(s)===!0){const[o,p=M]=s.split("|");return{svguse:!0,src:o.substring(7),viewBox:p}}let g=" ";const f=s.match(le);if(f!==null)a=K[f[1]](s);else if(me.test(s)===!0)a=s;else if(ve.test(s)===!0)a=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${s.substring(3)}`;else if(j.test(s)===!0){a="notranslate material-symbols";const o=s.match(j);o!==null&&(s=s.substring(6),a+=V[o[1]]),g=s}else{a="notranslate material-icons";const o=s.match(ce);o!==null&&(s=s.substring(2),a+=F[o[1]]),g=s}return{cls:a,content:g}});return()=>{const a={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?d(e.tag,a,ee(t.default)):u.value.img===!0?d("span",a,E(t.default,[d("img",{src:u.value.src})])):u.value.svg===!0?d("span",a,E(t.default,[d("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?d("span",a,E(t.default,[d("svg",{viewBox:u.value.viewBox},[d("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),d(e.tag,a,E(t.default,[u.value.content])))}}});function ge(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function z(e,t,r,n){r.modifiers.stop===!0&&X(e);const i=r.modifiers.color;let u=r.modifiers.center;u=u===!0||n===!0;const a=document.createElement("span"),s=document.createElement("span"),g=Z(e),{left:f,top:o,width:p,height:y}=t.getBoundingClientRect(),m=Math.sqrt(p*p+y*y),k=m/2,h=`${(p-m)/2}px`,S=u?h:`${g.left-f-k}px`,q=`${(y-m)/2}px`,C=u?q:`${g.top-o-k}px`;s.className="q-ripple__inner",ie(s,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${S},${C},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${i?" text-"+i:""}`,a.setAttribute("dir","ltr"),a.appendChild(s),t.appendChild(a);const R=()=>{a.remove(),clearTimeout(_)};r.abort.push(R);let _=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,s.style.opacity=.2,_=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,_=setTimeout(()=>{a.remove(),r.abort.splice(r.abort.indexOf(R),1)},275)},250)},50)}function D(e,{modifiers:t,value:r,arg:n}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var qe=J({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&z(i,e,n,i.qKeyEvent===!0)},keystart:ge(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&H(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&z(i,e,n,!0)},300)};D(n,t),e.__qripple=n,Y(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&D(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),W(t,"main"),delete e._qripple)}});export{Se as Q,qe as R,E as a,ie as b,G as c,ye as d,J as e,xe as f,_e as g,ee as h,Re as i,$e as j,ae as k,oe as l,ue as m,ke as n,be as u,te as v};
