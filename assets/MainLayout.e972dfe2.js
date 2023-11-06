import{c as B,h as X,a as zt,b as st,d as Pt,e as Ne}from"./render.017d5f4a.js";import{i as Pe,e as R,p as ct,c as v,h as C,l as ce,a as Vt,g as H,w as k,o as N,d as j,n as Ve,f as O,r as S,j as dt,k as G,m as ie,q as ft,H as je,s as V,t as Oe,u as Ot,v as Mt,P as Ht,x as Dt,y as le,z as ye,A as Xe,B as ge,C as Ee,D as we,E as Rt,F as Qt,G as At,I as Me,_ as He,J as M,K,L as P,M as $,N as $e,O as xe,Q as Wt,R as vt,S as Ft,T as Be,U as ae,V as qe,W as Ue,X as It}from"./index.8f150833.js";import{c as Ye,g as Nt,v as jt,a as Xt,u as Ut,b as Yt,Q as Kt,d as Ke}from"./QBtn.6f7b355f.js";var Gt=B({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=H(),l=Pe(ce,R);if(l===R)return console.error("QPageContainer needs to be child of QLayout"),R;ct(Vt,!0);const t=v(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>C("div",{class:"q-page-container",style:t.value},X(o.default))}});const Jt=[null,document,document.body,document.scrollingElement,document.documentElement];function Zt(e,o){let n=Nt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Jt.includes(n)?window:n}function mt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ht(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function ke(){if(re!==void 0)return re;const e=document.createElement("p"),o=document.createElement("div");Ye(e,{width:"100%",height:"200px"}),Ye(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),re=n-l,re}function eo(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:Ge}=O,to=["both","horizontal","vertical"];var oo=B({name:"QScrollObserver",props:{axis:{type:String,validator:e=>to.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;k(()=>e.scrollTarget,()=>{f(),c()});function u(){l!==null&&l();const b=Math.max(0,mt(t)),w=ht(t),m={top:b-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:b,left:w},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function c(){t=Zt(i,e.scrollTarget),t.addEventListener("scroll",s,Ge),s(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",s,Ge),t=void 0)}function s(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[w,m]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{m(w),l=null}}}const{proxy:a}=H();return k(()=>a.$q.lang.rtl,u),N(()=>{i=a.$el.parentNode,c()}),j(()=>{l!==null&&l(),f()}),Object.assign(a,{trigger:s,getPosition:()=>n}),Ve}});function no(){const e=S(!dt.value);return e.value===!1&&N(()=>{e.value=!0}),e}const pt=typeof ResizeObserver!="undefined",Je=pt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ze=B({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function i(f){f===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),l){const{offsetWidth:f,offsetHeight:s}=l;(f!==t.width||s!==t.height)&&(t={width:f,height:s},o("resize",t))}}const{proxy:c}=H();if(pt===!0){let f;const s=a=>{l=c.$el.parentNode,l?(f=new ResizeObserver(i),f.observe(l),u()):a!==!0&&G(()=>{s(!0)})};return N(()=>{s()}),j(()=>{n!==null&&clearTimeout(n),f!==void 0&&(f.disconnect!==void 0?f.disconnect():l&&f.unobserve(l))}),Ve}else{let a=function(){n!==null&&(clearTimeout(n),n=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",i,O.passive),s=void 0)},b=function(){a(),l&&l.contentDocument&&(s=l.contentDocument.defaultView,s.addEventListener("resize",i,O.passive),u())};const f=no();let s;return N(()=>{G(()=>{l=c.$el,l&&b()})}),j(a),c.trigger=i,()=>{if(f.value===!0)return C("object",{style:Je.style,tabindex:-1,type:"text/html",data:Je.url,"aria-hidden":"true",onLoad:b})}}}}),io=B({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=S(null),i=S(l.screen.height),u=S(e.container===!0?0:l.screen.width),c=S({position:0,direction:"down",inflectionPoint:0}),f=S(0),s=S(dt.value===!0?0:ke()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),w=v(()=>s.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),m=v(()=>s.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const _={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};c.value=_,e.onScroll!==void 0&&n("scroll",_)}}function L(y){const{height:_,width:x}=y;let W=!1;i.value!==_&&(W=!0,i.value=_,e.onScrollHeight!==void 0&&n("scrollHeight",_),q()),u.value!==x&&(W=!0,u.value=x),W===!0&&e.onResize!==void 0&&n("resize",y)}function T({height:y}){f.value!==y&&(f.value=y,q())}function q(){if(e.container===!0){const y=i.value>f.value?ke():0;s.value!==y&&(s.value=y)}}let d=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:f,scrollbarWidth:s,totalWidth:v(()=>u.value+s.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:c,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,_,x){p[y][_]=x}};if(ct(ce,p),ke()>0){let x=function(){y=null,_.classList.remove("hide-scrollbar")},W=function(){if(y===null){if(_.scrollHeight>l.screen.height)return;_.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(x,300)},J=function(F){y!==null&&F==="remove"&&(clearTimeout(y),x()),window[`${F}EventListener`]("resize",W)},y=null;const _=document.body;k(()=>e.container!==!0?"add":"remove",J),e.container!==!0&&J("add"),ft(()=>{J("remove")})}return()=>{const y=zt(o.default,[C(oo,{onScroll:h}),C(ze,{onResize:L})]),_=C("div",{class:a.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(ze,{onResize:T}),C("div",{class:"absolute-full",style:w.value},[C("div",{class:"scroll",style:m.value},[_])])]):_}}}),lo=B({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},X(o.default))}});const ao=C("div",{class:"q-space"});var Ze=B({name:"QSpace",setup(){return()=>ao}}),ro=B({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},X(o.default))}}),uo=B({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=Pe(ce,R);if(t===R)return console.error("QHeader needs to be child of QLayout"),R;const i=S(parseInt(e.heightHint,10)),u=S(!0),c=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),f=v(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?i.value:0;const d=i.value-t.scroll.value.position;return d>0?d:0}),s=v(()=>e.modelValue!==!0||c.value===!0&&u.value!==!0),a=v(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=v(()=>{const d=t.rows.value.top,p={};return d[0]==="l"&&t.left.space===!0&&(p[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(p[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(d,p){t.update("header",d,p)}function h(d,p){d.value!==p&&(d.value=p)}function L({height:d}){h(i,d),m("size",d)}function T(d){a.value===!0&&h(u,!0),n("focusin",d)}k(()=>e.modelValue,d=>{m("space",d),h(u,!0),t.animate()}),k(f,d=>{m("offset",d)}),k(()=>e.reveal,d=>{d===!1&&h(u,e.modelValue)}),k(u,d=>{t.animate(),n("reveal",d)}),k(t.scroll,d=>{e.reveal===!0&&h(u,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const q={};return t.instances.header=q,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",f.value),j(()=>{t.instances.header===q&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const d=st(o.default,[]);return e.elevated===!0&&d.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(C(ze,{debounce:0,onResize:L})),C("header",{class:b.value,style:w.value,onFocusin:T},d)}}}),bt=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:l.value},X(o.default))}});const De={dark:{type:Boolean,default:null}};function Re(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}var so=B({name:"QList",props:{...De,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=H(),l=Re(e,n.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},X(o.default))}});function co(e,o,n){let l;function t(){l!==void 0&&(je.remove(l),l=void 0)}return j(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},je.add(l)}}}const fo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},vo=["beforeShow","show","beforeHide","hide"];function mo({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:i}){const u=H(),{props:c,emit:f,proxy:s}=u;let a;function b(d){e.value===!0?h(d):w(d)}function w(d){if(c.disable===!0||d!==void 0&&d.qAnchorHandled===!0||o!==void 0&&o(d)!==!0)return;const p=c["onUpdate:modelValue"]!==void 0;p===!0&&(f("update:modelValue",!0),a=d,G(()=>{a===d&&(a=void 0)})),(c.modelValue===null||p===!1)&&m(d)}function m(d){e.value!==!0&&(e.value=!0,f("beforeShow",d),l!==void 0?l(d):f("show",d))}function h(d){if(c.disable===!0)return;const p=c["onUpdate:modelValue"]!==void 0;p===!0&&(f("update:modelValue",!1),a=d,G(()=>{a===d&&(a=void 0)})),(c.modelValue===null||p===!1)&&L(d)}function L(d){e.value!==!1&&(e.value=!1,f("beforeHide",d),t!==void 0?t(d):f("hide",d))}function T(d){c.disable===!0&&d===!0?c["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!1):d===!0!==e.value&&(d===!0?m:L)(a)}k(()=>c.modelValue,T),n!==void 0&&jt(u)===!0&&k(()=>s.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&N(()=>{T(c.modelValue)});const q={show:w,hide:h,toggle:b};return Object.assign(s,q),q}let ee=0,Ce,Te,te,_e=!1,et,tt,ot,I=null;function ho(e){po(e)&&Oe(e)}function po(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Ot(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const u=o[i];if(eo(u,l))return l?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function nt(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ue(e){_e!==!0&&(_e=!0,requestAnimationFrame(()=>{_e=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(te===void 0||o!==window.innerHeight)&&(te=n-o,document.scrollingElement.scrollTop=l),l>te&&(document.scrollingElement.scrollTop-=Math.ceil((l-te)/8))}))}function it(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);Ce=ht(window),Te=mt(window),et=o.style.left,tt=o.style.top,ot=window.location.href,o.style.left=`-${Ce}px`,o.style.top=`-${Te}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ue,O.passiveCapture),window.visualViewport.addEventListener("scroll",ue,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",nt,O.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",ho,O.notPassive),e==="remove"&&(V.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ue,O.passiveCapture),window.visualViewport.removeEventListener("scroll",ue,O.passiveCapture)):window.removeEventListener("scroll",nt,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=et,o.style.top=tt,window.location.href===ot&&window.scrollTo(Ce,Te),te=void 0)}function bo(e){let o="add";if(e===!0){if(ee++,I!==null){clearTimeout(I),I=null;return}if(ee>1)return}else{if(ee===0||(ee--,ee>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){I!==null&&clearTimeout(I),I=setTimeout(()=>{it(o),I=null},100);return}}it(o)}function yo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,bo(o))}}}function go(){let e=null;const o=H();function n(){e!==null&&(clearTimeout(e),e=null)}return Mt(n),j(n),{removeTimeout:n,registerTimeout(l,t){n(),Xt(o)===!1&&(e=setTimeout(l,t))}}}const Qe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},wo=Object.keys(Qe);Qe.all=!0;function lt(e){const o={};for(const n of wo)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Qe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const qo=["INPUT","TEXTAREA"];function at(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&qo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ko(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ht.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,o,n){const l=Ee(e);let t,i=l.left-o.event.x,u=l.top-o.event.y,c=Math.abs(i),f=Math.abs(u);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?t=i<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",c>f&&(s.left===!0&&i<0?t="left":s.right===!0&&i>0&&(t="right"))):s.down===!0&&u>0?(t="down",c>f&&(s.left===!0&&i<0?t="left":s.right===!0&&i>0&&(t="right"))):s.left===!0&&i<0?(t="left",c<f&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&i>0&&(t="right",c<f&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,c=0,i=0):(l.top-=u,f=0,u=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:c,y:f},offset:{x:i,y:u},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let Co=0;var Le=Pt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&V.has.touch!==!0)return;function l(i,u){n.mouse===!0&&u===!0?Oe(i):(n.stop===!0&&ge(i),n.prevent===!0&&Xe(i))}const t={uid:"qvtp_"+Co++,handler:o,modifiers:n,direction:lt(n),noop:Ve,mouseStart(i){at(i,t)&&Dt(i)&&(le(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(at(i,t)){const u=i.target;le(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,u){if(V.is.firefox===!0&&ye(e,!0),t.lastEvt=i,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Xe(s),i.cancelBubble===!0&&ge(s),Object.assign(s,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:s}}ge(i)}const{left:c,top:f}=Ee(i);t.event={x:c,y:f,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:f}},move(i){if(t.event===void 0)return;const u=Ee(i),c=u.left-t.event.x,f=u.top-t.event.y;if(c===0&&f===0)return;t.lastEvt=i;const s=t.event.mouse===!0,a=()=>{l(i,s);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ko(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),s===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{L(),h()},50):L()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:m,synthetic:h}=Se(i,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const b=Math.abs(c),w=Math.abs(f);b!==w&&(t.direction.horizontal===!0&&b>w||t.direction.vertical===!0&&b<w||t.direction.up===!0&&b<w&&f<0||t.direction.down===!0&&b<w&&f>0||t.direction.left===!0&&b>w&&c<0||t.direction.right===!0&&b>w&&c>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,u){if(t.event!==void 0){if(we(t,"temp"),V.is.firefox===!0&&ye(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(i===void 0?t.lastEvt:i,t).payload);const{payload:c}=Se(i===void 0?t.lastEvt:i,t,!0),f=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";le(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}V.has.touch===!0&&le(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=lt(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),V.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function se(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const rt=150;var To=B({name:"QDrawer",inheritAttrs:!1,props:{...fo,...De,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...vo,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:l}){const t=H(),{proxy:{$q:i}}=t,u=Re(e,i),{preventBodyScroll:c}=yo(),{registerTimeout:f,removeTimeout:s}=go(),a=Pe(ce,R);if(a===R)return console.error("QDrawer needs to be child of QLayout"),R;let b,w=null,m;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),L=v(()=>e.mini===!0&&h.value!==!0),T=v(()=>L.value===!0?e.miniWidth:e.width),q=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=v(()=>e.persistent!==!0&&(h.value===!0||yt.value===!0));function p(r,g){if(W(),r!==!1&&a.animate(),z(0),h.value===!0){const E=a.instances[oe.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),Q(1),a.isContainer.value!==!0&&c(!0)}else Q(0),r!==!1&&he(!1);f(()=>{r!==!1&&he(!0),g!==!0&&n("show",r)},rt)}function y(r,g){J(),r!==!1&&a.animate(),Q(0),z(U.value*T.value),pe(),g!==!0?f(()=>{n("hide",r)},rt):s()}const{show:_,hide:x}=mo({showing:q,hideOnRouteChange:d,handleShow:p,handleHide:y}),{addToHistory:W,removeFromHistory:J}=co(q,x,d),F={belowBreakpoint:h,hide:x},D=v(()=>e.side==="right"),U=v(()=>(i.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),Ae=S(0),Y=S(!1),de=S(!1),We=S(T.value*U.value),oe=v(()=>D.value===!0?"left":"right"),fe=v(()=>q.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),ve=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(D.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),Z=v(()=>e.overlay===!1&&q.value===!0&&h.value===!1),yt=v(()=>e.overlay===!0&&q.value===!0&&h.value===!1),gt=v(()=>"fullscreen q-drawer__backdrop"+(q.value===!1&&Y.value===!1?" hidden":"")),wt=v(()=>({backgroundColor:`rgba(0,0,0,${Ae.value*.4})`})),Fe=v(()=>D.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),qt=v(()=>D.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),kt=v(()=>{const r={};return a.header.space===!0&&Fe.value===!1&&(ve.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&qt.value===!1&&(ve.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),Ct=v(()=>{const r={width:`${T.value}px`,transform:`translateX(${We.value}px)`};return h.value===!0?r:Object.assign(r,kt.value)}),Tt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),_t=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":q.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(ve.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Fe.value===!0?" q-drawer--top-padding":""))),St=v(()=>{const r=i.lang.rtl===!0?e.side:oe.value;return[[Le,xt,void 0,{[r]:!0,mouse:!0}]]}),Lt=v(()=>{const r=i.lang.rtl===!0?oe.value:e.side;return[[Le,Ie,void 0,{[r]:!0,mouse:!0}]]}),Et=v(()=>{const r=i.lang.rtl===!0?oe.value:e.side;return[[Le,Ie,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){Bt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(h,r=>{r===!0?(b=q.value,q.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(q.value===!0?(z(0),Q(0),pe()):_(!1))}),k(()=>e.side,(r,g)=>{a.instances[g]===F&&(a.instances[g]=void 0,a[g].space=!1,a[g].offset=0),a.instances[r]=F,a[r].size=T.value,a[r].space=Z.value,a[r].offset=fe.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),k(()=>e.behavior+e.breakpoint,me),k(a.isContainer,r=>{q.value===!0&&c(r!==!0),r===!0&&me()}),k(a.scrollbarWidth,()=>{z(q.value===!0?0:void 0)}),k(fe,r=>{A("offset",r)}),k(Z,r=>{n("onLayout",r),A("space",r)}),k(D,()=>{z()}),k(T,r=>{z(),be(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{be(r,T.value)}),k(()=>i.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&($t(),a.animate())}),k(L,r=>{n("miniState",r)});function z(r){r===void 0?G(()=>{r=q.value===!0?0:T.value,z(U.value*r)}):(a.isContainer.value===!0&&D.value===!0&&(h.value===!0||Math.abs(r)===T.value)&&(r+=U.value*a.scrollbarWidth.value),We.value=r)}function Q(r){Ae.value=r}function he(r){const g=r===!0?"remove":a.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function $t(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,w=setTimeout(()=>{w=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function xt(r){if(q.value!==!1)return;const g=T.value,E=se(r.distance.x,0,g);if(r.isFinal===!0){E>=Math.min(75,g)===!0?_():(a.animate(),Q(0),z(U.value*g)),Y.value=!1;return}z((i.lang.rtl===!0?D.value!==!0:D.value)?Math.max(g-E,0):Math.min(0,E-g)),Q(se(E/g,0,1)),r.isFirst===!0&&(Y.value=!0)}function Ie(r){if(q.value!==!0)return;const g=T.value,E=r.direction===e.side,ne=(i.lang.rtl===!0?E!==!0:E)?se(r.distance.x,0,g):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,g)===!0?(a.animate(),Q(1),z(0)):x(),Y.value=!1;return}z(U.value*ne),Q(se(1-ne/g,0,1)),r.isFirst===!0&&(Y.value=!0)}function pe(){c(!1),he(!0)}function A(r,g){a.update(e.side,r,g)}function Bt(r,g){r.value!==g&&(r.value=g)}function be(r,g){A("size",r===!0?e.miniWidth:g)}return a.instances[e.side]=F,be(e.miniToOverlay,T.value),A("space",Z.value),A("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&q.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),N(()=>{n("onLayout",Z.value),n("miniState",L.value),b=e.showIfAbove===!0;const r=()=>{(q.value===!0?p:y)(!1,!0)};if(a.totalWidth.value!==0){G(r);return}m=k(a.totalWidth,()=>{m(),m=void 0,q.value===!1&&e.showIfAbove===!0&&h.value===!1?_(!1):r()})}),j(()=>{m!==void 0&&m(),w!==null&&(clearTimeout(w),w=null),q.value===!0&&pe(),a.instances[e.side]===F&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Rt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),St.value)),r.push(Ne("div",{ref:"backdrop",class:gt.value,style:wt.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&q.value===!0,()=>Et.value)));const g=L.value===!0&&o.mini!==void 0,E=[C("div",{...l,key:""+g,class:[Tt.value,l.class]},g===!0?o.mini():X(o.default))];return e.elevated===!0&&q.value===!0&&E.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ne("aside",{ref:"content",class:_t.value,style:Ct.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Lt.value)),C("div",{class:"q-drawer-container"},r)}}});const _o=Qt("menu",{state:()=>({tabs:[{id:1,tab:"domov",caption:"Domov",link:"/#domov",icon:"home"},{id:2,tab:"projekt",caption:"Projekt",link:"/#projekt",icon:"code"},{id:3,tab:"tim",caption:"T\xEDm",link:"/#tim",icon:"diversity_3"},{id:4,tab:"dokumentacia",caption:"Dokument\xE1cia",link:"/#dokumentacia",icon:"description"}]})});var ut=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},X(o.default))}}),So=B({name:"QItem",props:{...De,...Ut,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=Re(e,l),{hasLink:i,linkAttrs:u,linkClass:c,linkTag:f,navigateOnClick:s}=Yt(),a=S(null),b=S(null),w=v(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&w.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?c.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=v(()=>{if(e.insetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function T(p){m.value===!0&&(b.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?b.value.focus():document.activeElement===b.value&&a.value.focus()),s(p))}function q(p){if(m.value===!0&&At(p,13)===!0){Oe(p),p.qKeyEvent=!0;const y=new MouseEvent("click",p);y.qKeyEvent=!0,a.value.dispatchEvent(y)}n("keyup",p)}function d(){const p=st(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:b})),p}return()=>{const p={ref:a,class:h.value,style:L.value,role:"listitem",onClick:T,onKeyup:q};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,u.value)):w.value===!0&&(p["aria-disabled"]="true"),C(f.value,p,d())}}});const Lo=Me({name:"EssentialLink",props:{id:{type:Number,required:!0},caption:{type:String,required:!0},tab:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""},setTab:{type:Function,required:!0},currentTab:{type:String,required:!0}}});function Eo(e,o,n,l,t,i){return M(),K(So,{clickable:"",style:vt({backgroundColor:e.currentTab===e.tab?"rgb(201, 163, 57)":""}),tag:"a",target:"_blank",onClick:o[0]||(o[0]=u=>e.setTab(e.tab))},{default:P(()=>[e.icon?(M(),K(ut,{key:0,avatar:""},{default:P(()=>[$(Kt,{name:e.icon},null,8,["name"])]),_:1})):$e("",!0),$(ut,null,{default:P(()=>[$(bt,null,{default:P(()=>[xe(Wt(e.caption),1)]),_:1})]),_:1})]),_:1},8,["style"])}var $o=He(Lo,[["render",Eo]]);const xo=Me({name:"HeaderComponent",components:{EssentialLink:$o},setup(){const e=S(!1),n=_o().tabs,l=S(""),t=async c=>{e.value&&(e.value=!1);const s=n.some(a=>a.tab===c)?c:"domov";if(s){const{nextTick:a}=await Ft(()=>import("./vue.runtime.esm-bundler.9dddb6fb.js"),["assets/vue.runtime.esm-bundler.9dddb6fb.js","assets/index.8f150833.js","assets/index.ecd6130a.css"]);await a(),i(s)}},i=c=>{var a;if(c==="domov"){l.value="domov",window.scrollTo({top:0,behavior:"smooth"});return}const f=document.getElementById(c),s=((a=document.querySelector("header"))==null?void 0:a.offsetHeight)||0;if(f){const b=f.getBoundingClientRect().top+window.scrollY-s;window.scrollTo({top:b,behavior:"smooth"})}};function u(){const c=["domov","projekt","tim","dokumentacia"];for(const s of c){const a=document.getElementById(s);if(a==null)continue;const b=a.getBoundingClientRect();if(b.top<=200&&b.bottom>=200){var f=window.location.pathname;f=="/"&&(f=""),l.value=s;const w=`${f}/#${s}`;window.history.replaceState({},"",w);break}}}return N(()=>{const c=window.location.hash.slice(1);t(c),window.addEventListener("scroll",u)}),ft(()=>{window.removeEventListener("scroll",u)}),{tabs:n,rightDrawerOpen:e,tab:l,setTab:t,toggleRightDrawer(){e.value=!e.value}}}}),Bo={key:0};function zo(e,o,n,l,t,i){const u=Be("EssentialLink");return M(),ae(qe,null,[$(uo,{class:"header",id:"header"},{default:P(()=>[$(ro,null,{default:P(()=>[$(lo,{shrink:"",class:"title non-selectable"},{default:P(()=>[xe(" TP ")]),_:1}),$(Ze),e.$q.screen.gt.sm?(M(),ae("div",Bo,[(M(!0),ae(qe,null,Ue(e.tabs,c=>(M(),K(Ke,{class:"q-mx-md btn",flat:"","no-caps":"",size:"lg",key:c.id,style:vt({backgroundColor:e.tab===c.tab?"rgb(201, 163, 57)":""}),label:c.caption,onClick:f=>e.setTab(c.tab)},null,8,["style","label","onClick"]))),128))])):$e("",!0),$(Ze),e.$q.screen.lt.md?(M(),K(Ke,{key:1,flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleRightDrawer,class:"q-mr-sm"},null,8,["onClick"])):$e("",!0)]),_:1})]),_:1}),$(To,{dark:"",background:"blue",class:"drawer",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.rightDrawerOpen=c),bordered:"",elevated:"",behavior:"default",side:"right"},{default:P(()=>[$(so,null,{default:P(()=>[$(bt,{header:"",class:"text-white"},{default:P(()=>[xe(" Menu ")]),_:1}),(M(!0),ae(qe,null,Ue(e.tabs,c=>(M(),K(u,It({key:c.id},c,{setTab:e.setTab,currentTab:e.tab}),null,16,["setTab","currentTab"]))),128))]),_:1})]),_:1},8,["modelValue"])],64)}var Po=He(xo,[["render",zo]]);const Vo=Me({name:"MainLayout",components:{HeaderComponent:Po},setup(){return{}}});function Oo(e,o,n,l,t,i){const u=Be("header-component"),c=Be("router-view");return M(),K(io,{view:"lHh LpR lFf",class:"page"},{default:P(()=>[$(u),$(Gt,null,{default:P(()=>[$(c)]),_:1})]),_:1})}var Qo=He(Vo,[["render",Oo],["__scopeId","data-v-506720b8"]]);export{Qo as default};