import{c as ve,h as Le,R as Q,l as lt,m as ct,Q as z,n as ut,a as dt,j as vt}from"./Ripple.d5fcb840.js";import{i as ye,e as L,c as b,h as g,l as ft,a as mt,g as fe,F as ae,_ as oe,G as p,S as H,a1 as Re,a2 as Be,T as v,D as K,I as N,J as r,M as w,a3 as Me,E as Ve,U as Qe,V as Ke,K as n,N as te,r as D,o as ke,f as ht,a4 as Ne,t as ze,X as xt,a5 as bt,a6 as _t,Y as We,q as gt,w as ce,p as pt,a7 as yt,L as kt,R as ue}from"./index.2d14d55b.js";import{e as W,c as S,d as P,b as Fe,Q as wt,f as Et}from"./QItemSection.4b205071.js";var Tt=ve({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:d}){const{proxy:{$q:l}}=fe(),o=ye(ft,L);if(o===L)return console.error("QPage needs to be a deep child of QLayout"),L;if(ye(mt,L)===L)return console.error("QPage needs to be child of QPageContainer"),L;const C=b(()=>{const E=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const R=o.isContainer.value===!0?o.containerHeight.value:l.screen.height;return e.styleFn(E,R)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-E+"px":l.screen.height===0?E!==0?`calc(100vh - ${E}px)`:"100vh":l.screen.height-E+"px"}}),m=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:m.value,style:C.value},Le(d.default))}});const Dt=ae({name:"HomeComponent"}),Ct=e=>(Re("data-v-4ff1c381"),e=e(),Be(),e),qt={class:"q-mx-lg"},$t=Ct(()=>v("div",{class:"row justify-center items-center",style:{height:"80vh"}},[v("div",{class:"col-12"},[v("h1",{class:"text-h1 text-center title non-selectable"},"ToxiPred"),v("p",{class:"text-body1 text-center text-uppercase text-white non-selectable"}," Predik\u010Dn\xFD model na odha\u013Eovanie genotoxicity l\xE1tok ")])],-1)),St=[$t];function Pt(e,d,l,o,i,C){return p(),H("div",qt,St)}var jt=oe(Dt,[["render",Pt],["__scopeId","data-v-4ff1c381"]]);const zt=ae({name:"ProjectComponent"}),Ft={class:"q-mx-lg"},It=v("h2",{class:"title2 non-selectable text-white q-mb-md"},"Projekt",-1),At={class:"row justify-center"},Lt=Me('<div class="col-12"><h3 class="text-center text-h3 text-white text non-selectable q-mb-md"> Cie\u013E projektu </h3></div><div class="col-sm-8 col-xs-12"><div class="text-body1 text-white text-center"> Cie\u013Eom projektu je vytvorenie digit\xE1lneho dvoj\u010Da\u0165a k in vivo a in vitro experimentom. Pomocou met\xF3d strojov\xE9ho u\u010Denia vytvori\u0165 predik\u010Dn\xFD model na odhalenie genotoxicity nov\xFDch l\xE1tok. </div></div><div class="col-12"><h3 class="text-center text-h3 text-white text non-selectable q-mb-md"> Ved\xFAca projektu </h3></div><div class="text-body1 text-white text-center"> Ing. Marta Prnov\xE1, PhD </div><div class="col-12"><h3 class="text-center text-h3 text-white text non-selectable q-mb-md"> Akademick\xFD partner </h3></div>',5);function Rt(e,d,l,o,i,C){return p(),H("div",Ft,[It,v("div",At,[Lt,K((p(),N(W,{class:"text-body1 text-white text-center items-center link",clickable:"",href:"https://cem.sav.sk",target:"_blank"},{default:r(()=>[w(" Centrum experiment\xE1lnej medic\xEDny SAV ")]),_:1})),[[Q]])])])}var Bt=oe(zt,[["render",Rt]]),Mt=ve({name:"QAvatar",props:{...lt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:d}){const l=ct(e),o=b(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),i=b(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const C=e.icon!==void 0?[g(z,{name:e.icon})]:void 0;return g("div",{class:o.value,style:l.value},[g("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},ut(d.default,C))])}}}),Vt="/Toxipred/assets/david.588289c3.jpg",Qt="/Toxipred/assets/filip.c8918f87.jpeg",Kt="/Toxipred/assets/grejty.110540dc.png",Nt="/Toxipred/assets/pato.4cd4195e.jpg",Wt="/Toxipred/assets/matej.baa415a5.jpg",Ht="/Toxipred/assets/adam.c5c45c22.png",Ot="/Toxipred/assets/emma.e28bbb47.jpg";const Ut=Ve("members",{state:()=>({members:[{id:1,name:"Filip C\xE1k",info:"Data analysis",image:Qt},{id:2,name:"Luk\xE1\u0161 Grejt\xE1k",info:"Data science",image:Kt},{id:3,name:"Patrik Kecera",info:"Web development",image:Nt},{id:4,name:"D\xE1vid Kromka",info:"Web development",image:Vt},{id:5,name:"Emma Mach\xE1\u010Dov\xE1",info:"Scrum master",image:Ot},{id:5,name:"Adam Mi\u0161kove",info:"Data science",image:Ht},{id:7,name:"Matej Mosn\xE1r",info:"Data science",image:Wt}]})});const Gt=ae({name:"TeamComponent",setup(){return{members:Ut().members}}}),we=e=>(Re("data-v-3aa0dd4a"),e=e(),Be(),e),Zt={class:"q-mx-lg"},Xt=we(()=>v("h2",{class:"title2 non-selectable text-white q-mb-md"},"T\xEDm",-1)),Jt={class:"row"},Yt=we(()=>v("div",{class:"col-12"},[v("h3",{class:"text-center text-h3 text-white text non-selectable q-mb-sm"}," \u010Clenovia n\xE1\u0161ho t\xEDmu "),v("div",{class:"text-center text-body1 text-white q-mb-lg"}," T\xEDm \u010D\xEDslo 13 ")],-1)),ea=["src"],ta=we(()=>v("div",{class:"col-12"},[v("h3",{class:"text-center text-h3 text-white text non-selectable q-mb-md"}," Kontakt ")],-1)),aa={class:"row fit justify-center"},oa={class:"col-sm-6 col-12"},na=Me('<div class="col-12" data-v-3aa0dd4a><h3 class="text-center text-h3 text-white text non-selectable q-mb-md" data-v-3aa0dd4a> O n\xE1s </h3></div><div class="row fit justify-center" data-v-3aa0dd4a><div class="col-sm-8 col-xs-12" data-v-3aa0dd4a><div class="text-body1 text-white" data-v-3aa0dd4a> Sme t\xEDm siedmich \u0161tudentov pokra\u010Duj\xFAcich v na\u0161om \u0161t\xFAdiu na FIIT po \xFAspe\u0161nom ukon\u010Den\xED bakal\xE1rskeho \u0161t\xFAdia. M\xE1me sk\xFAsenosti so spracovan\xEDm a anal\xFDzou d\xE1t a ich pr\xEDpravou na tvorbu modelov strojov\xE9ho u\u010Denia. V r\xE1mci \u0161kolsk\xFDch projektov sme si vysk\xFA\u0161ali r\xF4zne \xFAlohy, ako klasifik\xE1cia, regresia \u010Di klastrovanie. <br data-v-3aa0dd4a> <br data-v-3aa0dd4a>Medzi na\u0161e sk\xFAsenosti zo \u0161kolsk\xFDch projektov, bakal\xE1rskej pr\xE1ce a zamestnania patr\xED anal\xFDza, n\xE1vrh, implement\xE1cia a nasadenie webov\xFDch a desktopov\xFDch aplik\xE1ci\xED. Ako t\xEDm sme schopn\xED navrhn\xFA\u0165 a implementova\u0165 kvalitn\xE9 pou\u017E\xEDvate\u013Esk\xE9 rozhranie, ktor\xE9 zabezpe\u010Duje optim\xE1lnu pou\u017Eite\u013Enos\u0165, efekt\xEDvnos\u0165 a uspokojenie pou\u017E\xEDvate\u013Esk\xFDch po\u017Eiadaviek. </div></div></div>',2);function sa(e,d,l,o,i,C){return p(),H("div",Zt,[Xt,v("div",Jt,[Yt,(p(!0),H(Qe,null,Ke(e.members,m=>(p(),N(W,{key:m.id,class:"col-xs-12 col-sm-6 q-pa-lg team-member"},{default:r(()=>[n(S,{avatar:""},{default:r(()=>[n(Mt,{size:"140px"},{default:r(()=>[v("img",{src:m.image},null,8,ea)]),_:2},1024)]),_:2},1024),n(S,null,{default:r(()=>[n(P,{class:"text-weight-bold text-white name text-center non-selectable"},{default:r(()=>[w(te(m.name),1)]),_:2},1024),n(P,{class:"info text-white text-center non-selectable"},{default:r(()=>[w(te(m.info),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),ta,v("div",aa,[v("div",oa,[n(W,{clickable:"",href:"mailto:team13tp2023@googlegroups.com",class:"text-body1 text-white justify-center items-center mail",style:{"overflow-wrap":"anywhere"}},{default:r(()=>[w("team13tp2023@googlegroups.com")]),_:1})])])]),na])}var ia=oe(Gt,[["render",sa],["__scopeId","data-v-3aa0dd4a"]]);let ge,de=0;const _=new Array(256);for(let e=0;e<256;e++)_[e]=(e+256).toString(16).substring(1);const ra=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return d=>{const l=new Uint8Array(d);return e.getRandomValues(l),l}}return d=>{const l=[];for(let o=d;o>0;o--)l.push(Math.floor(Math.random()*256));return l}})(),Ie=4096;function la(){(ge===void 0||de+16>Ie)&&(de=0,ge=ra(Ie));const e=Array.prototype.slice.call(ge,de,de+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,_[e[0]]+_[e[1]]+_[e[2]]+_[e[3]]+"-"+_[e[4]]+_[e[5]]+"-"+_[e[6]]+_[e[7]]+"-"+_[e[8]]+_[e[9]]+"-"+_[e[10]]+_[e[11]]+_[e[12]]+_[e[13]]+_[e[14]]+_[e[15]]}let ca=0;const ua=["click","keydown"],da={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ca++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function va(e,d,l,o){const i=ye(Ne,L);if(i===L)return console.error("QTab/QRouteTab component needs to be child of QTabs"),L;const{proxy:C}=fe(),m=D(null),E=D(null),R=D(null),Y=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),G=b(()=>i.currentModel.value===e.name),me=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(G.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),O=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),q=b(()=>e.disable===!0||i.hasFocus.value===!0||G.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function F(c,T){if(T!==!0&&m.value!==null&&m.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&ze(c);return}if(o===void 0){i.updateModel({name:e.name}),l("click",c);return}if(o.hasRouterLink.value===!0){const $=(y={})=>{let j;const I=y.to===void 0||_t(y.to,e.to)===!0?i.avoidRouteWatcher=la():null;return o.navigateToRouterLink(c,{...y,returnRouterError:!0}).catch(U=>{j=U}).then(U=>{if(I===i.avoidRouteWatcher&&(i.avoidRouteWatcher=!1,j===void 0&&(U===void 0||U.message.startsWith("Avoided redundant navigation")===!0)&&i.updateModel({name:e.name})),y.returnRouterError===!0)return j!==void 0?Promise.reject(j):U})};l("click",c,$),c.defaultPrevented!==!0&&$();return}l("click",c)}function B(c){xt(c,[13,32])?F(c,!0):bt(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&i.onKbdNavigate(c.keyCode,C.$el)===!0&&ze(c),l("keydown",c)}function ee(){const c=i.tabProps.value.narrowIndicator,T=[],$=g("div",{ref:R,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&T.push(g(z,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&T.push(g("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&T.push(e.alertIcon!==void 0?g(z,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):g("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&T.push($);const y=[g("div",{class:"q-focus-helper",tabindex:-1,ref:m}),g("div",{class:O.value},dt(d.default,T))];return c===!1&&y.push($),y}const Z={name:b(()=>e.name),rootRef:E,tabIndicatorRef:R,routeData:o};ke(()=>{i.unregisterTab(Z)}),ht(()=>{i.registerTab(Z)});function ne(c,T){const $={ref:E,class:me.value,tabindex:q.value,role:"tab","aria-selected":G.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:F,onKeydown:B,...T};return K(g(c,$,ee()),[[Q,Y.value]])}return{renderTab:ne,$tabs:i}}var Ae=ve({name:"QTab",props:da,emits:ua,setup(e,{slots:d,emit:l}){const{renderTab:o}=va(e,d,l);return()=>o("div")}});function pe(){let e;const d=fe();function l(){e=void 0}return We(l),ke(l),{removeTick:l,registerTick(o){e=o,gt(()=>{e===o&&(vt(d)===!1&&e(),e=void 0)})}}}let He=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const d=document.createElement("div");Object.assign(d.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(d),e.scrollLeft=-1e3,He=e.scrollLeft>=0,e.remove()}function fa(e,d,l){const o=l===!0?["left","right"]:["top","bottom"];return`absolute-${d===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const ma=["left","center","right","justify"];var ha=ve({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ma.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:d,emit:l}){const{proxy:o}=fe(),{$q:i}=o,{registerTick:C}=pe(),{registerTick:m}=pe(),{registerTick:E}=pe(),{registerTimeout:R,removeTimeout:Y}=Fe(),{registerTimeout:G,removeTimeout:me}=Fe(),O=D(null),q=D(null),F=D(e.modelValue),B=D(!1),ee=D(!0),Z=D(!1),ne=D(!1),c=[],T=D(0),$=D(!1);let y=null,j=null,I;const U=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:fa(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Oe=b(()=>{const t=T.value,a=F.value;for(let s=0;s<t;s++)if(c[s].name.value===a)return!0;return!1}),Ue=b(()=>`q-tabs__content--align-${B.value===!0?"left":ne.value===!0?"justify":e.align}`),Ge=b(()=>`q-tabs row no-wrap items-center q-tabs--${B.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ze=b(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ue.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),se=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ie=b(()=>e.vertical!==!0&&i.lang.rtl===!0),he=b(()=>He===!1&&ie.value===!0);ce(ie,J),ce(()=>e.modelValue,t=>{xe({name:t,setCurrent:!0,skipEmit:!0})}),ce(()=>e.outsideArrows,re);function xe({name:t,setCurrent:a,skipEmit:s}){F.value!==t&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Xe(F.value,t),F.value=t))}function re(){C(()=>{Ee({width:O.value.offsetWidth,height:O.value.offsetHeight})})}function Ee(t){if(se.value===void 0||q.value===null)return;const a=t[se.value.container],s=Math.min(q.value[se.value.scroll],Array.prototype.reduce.call(q.value.children,(x,f)=>x+(f[se.value.content]||0),0)),h=a>0&&s>a;B.value=h,h===!0&&m(J),ne.value=a<parseInt(e.breakpoint,10)}function Xe(t,a){const s=t!=null&&t!==""?c.find(x=>x.name.value===t):null,h=a!=null&&a!==""?c.find(x=>x.name.value===a):null;if(s&&h){const x=s.tabIndicatorRef.value,f=h.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),x.style.transition="none",x.style.transform="none",f.style.transition="none",f.style.transform="none";const u=x.getBoundingClientRect(),k=f.getBoundingClientRect();f.style.transform=e.vertical===!0?`translate3d(0,${u.top-k.top}px,0) scale3d(1,${k.height?u.height/k.height:1},1)`:`translate3d(${u.left-k.left}px,0,0) scale3d(${k.width?u.width/k.width:1},1,1)`,E(()=>{y=setTimeout(()=>{y=null,f.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",f.style.transform="none"},70)})}h&&B.value===!0&&X(h.rootRef.value)}function X(t){const{left:a,width:s,top:h,height:x}=q.value.getBoundingClientRect(),f=t.getBoundingClientRect();let u=e.vertical===!0?f.top-h:f.left-a;if(u<0){q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(u),J();return}u+=e.vertical===!0?f.height-x:f.width-s,u>0&&(q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(u),J())}function J(){const t=q.value;if(t===null)return;const a=t.getBoundingClientRect(),s=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);ie.value===!0?(ee.value=Math.ceil(s+a.width)<t.scrollWidth-1,Z.value=s>0):(ee.value=s>0,Z.value=e.vertical===!0?Math.ceil(s+a.height)<t.scrollHeight:Math.ceil(s+a.width)<t.scrollWidth)}function Te(t){j!==null&&clearInterval(j),j=setInterval(()=>{et(t)===!0&&M()},5)}function De(){Te(he.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ce(){Te(he.value===!0?0:Number.MAX_SAFE_INTEGER)}function M(){j!==null&&(clearInterval(j),j=null)}function Je(t,a){const s=Array.prototype.filter.call(q.value.children,k=>k===a||k.matches&&k.matches(".q-tab.q-focusable")===!0),h=s.length;if(h===0)return;if(t===36)return X(s[0]),s[0].focus(),!0;if(t===35)return X(s[h-1]),s[h-1].focus(),!0;const x=t===(e.vertical===!0?38:37),f=t===(e.vertical===!0?40:39),u=x===!0?-1:f===!0?1:void 0;if(u!==void 0){const k=ie.value===!0?-1:1,A=s.indexOf(a)+u*k;return A>=0&&A<h&&(X(s[A]),s[A].focus({preventScroll:!0})),!0}}const Ye=b(()=>he.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function et(t){const a=q.value,{get:s,set:h}=Ye.value;let x=!1,f=s(a);const u=t<f?-1:1;return f+=u*5,f<0?(x=!0,f=0):(u===-1&&f<=t||u===1&&f>=t)&&(x=!0,f=t),h(a,f),J(),x}function qe(t,a){for(const s in t)if(t[s]!==a[s])return!1;return!0}function tt(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const s=c.filter(u=>u.routeData!==void 0&&u.routeData.hasRouterLink.value===!0),{hash:h,query:x}=o.$route,f=Object.keys(x).length;for(const u of s){const k=u.routeData.exact.value===!0;if(u.routeData[k===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:A,query:be,matched:it,href:rt}=u.routeData.resolvedLink.value,_e=Object.keys(be).length;if(k===!0){if(A!==h||_e!==f||qe(x,be)===!1)continue;t=u.name.value;break}if(A!==""&&A!==h||_e!==0&&qe(be,x)===!1)continue;const V={matchedLen:it.length,queryDiff:f-_e,hrefLen:rt.length-A.length};if(V.matchedLen>a.matchedLen){t=u.name.value,a=V;continue}else if(V.matchedLen!==a.matchedLen)continue;if(V.queryDiff<a.queryDiff)t=u.name.value,a=V;else if(V.queryDiff!==a.queryDiff)continue;V.hrefLen>a.hrefLen&&(t=u.name.value,a=V)}t===null&&c.some(u=>u.routeData===void 0&&u.name.value===F.value)===!0||xe({name:t,setCurrent:!0})}function at(t){if(Y(),$.value!==!0&&O.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&O.value.contains(a)===!0&&($.value=!0,B.value===!0&&X(a))}}function ot(){R(()=>{$.value=!1},30)}function le(){Se.avoidRouteWatcher===!1?G(tt):me()}function $e(){if(I===void 0){const t=ce(()=>o.$route.fullPath,le);I=()=>{t(),I=void 0}}}function nt(t){c.push(t),T.value++,re(),t.routeData===void 0||o.$route===void 0?G(()=>{if(B.value===!0){const a=F.value,s=a!=null&&a!==""?c.find(h=>h.name.value===a):null;s&&X(s.rootRef.value)}}):($e(),t.routeData.hasRouterLink.value===!0&&le())}function st(t){c.splice(c.indexOf(t),1),T.value--,re(),I!==void 0&&t.routeData!==void 0&&(c.every(a=>a.routeData===void 0)===!0&&I(),le())}const Se={currentModel:F,tabProps:U,hasFocus:$,hasActiveTab:Oe,registerTab:nt,unregisterTab:st,verifyRouteModel:le,updateModel:xe,onKbdNavigate:Je,avoidRouteWatcher:!1};pt(Ne,Se);function Pe(){y!==null&&clearTimeout(y),M(),I!==void 0&&I()}let je;return ke(Pe),We(()=>{je=I!==void 0,Pe()}),yt(()=>{je===!0&&$e(),re()}),()=>g("div",{ref:O,class:Ge.value,role:"tablist",onFocusin:at,onFocusout:ot},[g(wt,{onResize:Ee}),g("div",{ref:q,class:Ze.value,onScroll:J},Le(d.default)),g(z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(ee.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:De,onTouchstartPassive:De,onMouseupPassive:M,onMouseleavePassive:M,onTouchendPassive:M}),g(z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Z.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:M,onMouseleavePassive:M,onTouchendPassive:M})])}}),xa="/Toxipred/assets/zapisnica1_20231011.6e48d9b5.pdf",ba="/Toxipred/assets/zapisnica2_20231018.c5d513c5.pdf",_a="/Toxipred/assets/zapisnica3_20231025.1111137f.pdf",ga="/Toxipred/assets/zapisnica4_20231108.7eaad8d7.pdf",pa="/Toxipred/assets/zapisnica5_20231115.5c33e0c1.pdf",ya="/Toxipred/assets/zapisnica6_20231122.14808a59.pdf";const ka=Ve("notation",{state:()=>({notations1:[{date:new Date("2023-10-11"),title:"1. z\xE1pisnica",note:"\xDAvodn\xE9 rozdelenie \xFAloh, ...",docPath:xa},{date:new Date("2023-10-18"),title:"2. z\xE1pisnica",note:"V skratke opis z\xE1pisnice.",docPath:ba},{date:new Date("2023-11-25"),title:"3. z\xE1pisnica",note:"V skratke opis z\xE1pisnice.",docPath:_a},{date:new Date("2023-11-08"),title:"4. z\xE1pisnica",note:"V skratke opis z\xE1pisnice.",docPath:ga},{date:new Date("2023-11-15"),title:"5. z\xE1pisnica",note:"V skratke opis z\xE1pisnice.",docPath:pa},{date:new Date("2023-11-22"),title:"6. z\xE1pisnica",note:"V skratke opis z\xE1pisnice.",docPath:ya}],notations2:[]})});var wa="/Toxipred/assets/figma.1e5b7bc1.svg",Ea="/Toxipred/assets/github.fab00c2d.svg",Ta="/Toxipred/assets/Zadanie.fe0a6c89.pdf",Da="/Toxipred/assets/motivacny_list.b10a8239.pdf";const Ca=ae({name:"DocComponent",setup(){const e=ka(),d=e.notations1,l=e.notations2;return{tab:D("semester1"),notations1:d,notations2:l,window,figma:wa,github:Ea,zadanie:Ta,motivacny_list:Da}}}),qa={class:"q-mx-lg"},$a=v("h2",{class:"title2 non-selectable text-white q-mb-md"},"Dokument\xE1cia",-1),Sa={class:"row justify-center"},Pa=v("div",{class:"col-12"},[v("h3",{class:"text-center text-h3 text-white text non-selectable q-mb-md"}," Z\xE1pisnice ")],-1),ja={class:"col-12 q-mb-lg"},za={key:0,class:"text-body1 text-white"},Fa=["onClick"],Ia={class:"notation-item q-pa-sm"},Aa={class:"row text-center"},La={class:"fit"},Ra={href:"",class:"text-h4 text-white text"},Ba={class:"text-body2 text-white q-mb-md"},Ma={class:"text-body1 text-white"},Va=v("div",{class:"col-12"},[v("h3",{class:"text-center text-h3 text-white text non-selectable q-mb-md"}," D\xF4le\u017Eit\xE9 odkazy ")],-1),Qa={class:"col-sm-6 col-xs-12 q-ma-md"};function Ka(e,d,l,o,i,C){return p(),H("div",qa,[$a,v("div",Sa,[Pa,v("div",ja,[n(ha,{modelValue:e.tab,"onUpdate:modelValue":d[0]||(d[0]=m=>e.tab=m),class:"text-white q-mb-md",align:"justify"},{default:r(()=>[n(Ae,{"no-caps":"",class:"text",name:"semester1",label:"1. semester"}),n(Ae,{"no-caps":"",name:"semester2",label:"2. semester"})]),_:1},8,["modelValue"])]),e.tab=="semester1"&&e.notations1.length==0||e.tab=="semester2"&&e.notations2.length==0?(p(),H("div",za," \u017Diadne z\xE1znamy ")):kt("",!0),(p(!0),H(Qe,null,Ke(e.tab=="semester1"?e.notations1:e.notations2,m=>K((p(),H("div",{key:m.date.toDateString(),onClick:E=>e.window.open(m.docPath,"_blank"),class:"col-sm-6 col-xs-12 text-center cursor-pointer q-hoverable q-pa-md"},[v("div",Ia,[v("div",Aa,[v("div",La,[n(z,{name:"description",size:"md",color:"white",class:"q-mb-md q-mr-sm"}),v("a",Ra,te(m.title),1)])]),v("p",Ba,te(m.date.toLocaleDateString()),1),v("p",Ma,te(m.note),1)])],8,Fa)),[[Q]])),128)),Va,v("div",Qa,[n(Et,{dark:"",separator:""},{default:r(()=>[K((p(),N(W,{clickable:"",href:"https://github.com/matejmosnar/tp_toxipred",target:"_blank"},{default:r(()=>[n(S,{avatar:""},{default:r(()=>[n(z,{color:"white",name:"img:"+e.github},null,8,["name"])]),_:1}),n(S,null,{default:r(()=>[n(P,{class:"text-body1"},{default:r(()=>[w("Projekt")]),_:1}),n(P,{caption:""},{default:r(()=>[w("Github repozit\xE1r pre tr\xE9novacie d\xE1ta a modely AI")]),_:1})]),_:1})]),_:1})),[[Q]]),K((p(),N(W,{clickable:"",href:"https://github.com/xkromkad/Toxipred",target:"_blank"},{default:r(()=>[n(S,{avatar:""},{default:r(()=>[n(z,{color:"white",name:"img:"+e.github},null,8,["name"])]),_:1}),n(S,null,{default:r(()=>[n(P,{class:"text-body1"},{default:r(()=>[w("Str\xE1nka t\xEDmu")]),_:1}),n(P,{caption:""},{default:r(()=>[w("Github repozit\xE1r webovej str\xE1nky n\xE1\u0161ho t\xEDmu")]),_:1})]),_:1})]),_:1})),[[Q]]),K((p(),N(W,{clickable:"",href:e.zadanie,target:"_blank"},{default:r(()=>[n(S,{avatar:""},{default:r(()=>[n(z,{color:"white",name:"task"})]),_:1}),n(S,null,{default:r(()=>[n(P,{class:"text-body1"},{default:r(()=>[w("Zadanie projektu")]),_:1}),n(P,{caption:""},{default:r(()=>[w("Zadanie t\xE9my projektu s opisom")]),_:1})]),_:1})]),_:1},8,["href"])),[[Q]]),K((p(),N(W,{clickable:"",href:"https://www.figma.com/file/4Dzkmaojw2rLczE2crKvSu/TP_13-team-library?type=design&node-id=0%3A1&mode=design&t=uF0ZIe17CnrHKEp3-1",target:"_blank"},{default:r(()=>[n(S,{avatar:""},{default:r(()=>[n(z,{color:"white",name:"img:"+e.figma},null,8,["name"])]),_:1}),n(S,null,{default:r(()=>[n(P,{class:"text-body1"},{default:r(()=>[w("N\xE1vrh str\xE1nky t\xEDmov\xE9ho projektu")]),_:1}),n(P,{caption:""},{default:r(()=>[w("N\xE1vrh pou\u017E\xEDvate\u013Esk\xE9ho rozhrania webovej str\xE1nky t\xEDmu v n\xE1stroji Figma")]),_:1})]),_:1})]),_:1})),[[Q]]),K((p(),N(W,{clickable:"",href:e.motivacny_list,target:"_blank"},{default:r(()=>[n(S,{avatar:""},{default:r(()=>[n(z,{color:"white",name:"description"})]),_:1}),n(S,null,{default:r(()=>[n(P,{class:"text-body1"},{default:r(()=>[w("Motiva\u010Dn\xFD list")]),_:1}),n(P,{caption:""},{default:r(()=>[w("Motiva\u010Dn\xFD list k vybran\xFDm t\xE9mam pre t\xEDmov\xFD projekt")]),_:1})]),_:1})]),_:1},8,["href"])),[[Q]])]),_:1})])])])}var Na=oe(Ca,[["render",Ka]]);const Wa=ae({name:"IndexPage",components:{HomeComponent:jt,ProjectComponent:Bt,TeamComponent:ia,DocComponent:Na}});function Ha(e,d,l,o,i,C){const m=ue("home-component"),E=ue("project-component"),R=ue("team-component"),Y=ue("doc-component");return p(),N(Tt,{class:"mainPage"},{default:r(()=>[n(m,{class:"component",id:"domov"}),n(E,{class:"component",id:"projekt"}),n(R,{class:"component",id:"tim"}),n(Y,{class:"component",id:"dokumentacia"})]),_:1})}var Za=oe(Wa,[["render",Ha]]);export{Za as default};
