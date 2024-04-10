import{m as T,a as O,u as B}from"./VContainer-25d587d6.js";import{r as f,ai as Q,k as _,w as $,a4 as P,am as j,c as o,aI as E,aC as M,aN as V,aO as H,aP as J,aQ as K,p as R,ap as X,aG as Y,d as c,a2 as Z,l as F,n as U,q as A,aR as p,t as z,aS as ee,aT as te,B as i,s as se,az as ae,L as ne}from"./index-0ac814ed.js";function re(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=f(),t=f();if(Q){const a=new ResizeObserver(r=>{e==null||e(r,a),r.length&&(n==="content"?t.value=r[0].contentRect:t.value=r[0].target.getBoundingClientRect())});_(()=>{a.disconnect()}),$(s,(r,l)=>{l&&(a.unobserve(P(l)),t.value=void 0),r&&a.observe(P(r))},{flush:"post"})}return{resizeRef:s,contentRect:j(t)}}function D(e){return M(()=>{const n=[],s={};if(e.value.background)if(V(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&H(e.value.background)){const t=J(e.value.background);if(t.a==null||t.a===1){const a=K(t);s.color=a,s.caretColor=a}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(V(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function k(e,n){const s=o(()=>({text:E(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=D(s);return{textColorClasses:t,textColorStyles:a}}function ve(e,n){const s=o(()=>({background:E(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=D(s);return{backgroundColorClasses:t,backgroundColorStyles:a}}const le=["x-small","small","default","large","x-large"],G=R({size:{type:[String,Number],default:"default"}},"size");function W(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();return M(()=>{let s,t;return Y(le,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:c(e.size),height:c(e.size)}),{sizeClasses:s,sizeStyles:t}})}const oe=R({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Z,...T(),...G(),...O({tag:"i"}),...F()},"VIcon"),fe=U()({name:"VIcon",props:oe(),setup(e,n){let{attrs:s,slots:t}=n;const a=f(),{themeClasses:r}=A(e),{iconData:l}=p(o(()=>a.value||e.icon)),{sizeClasses:g}=W(e),{textColorClasses:C,textColorStyles:b}=k(z(e,"color"));return B(()=>{var m,h;const d=(m=t.default)==null?void 0:m.call(t);d&&(a.value=(h=ee(d).filter(v=>v.type===te&&v.children&&typeof v.children=="string")[0])==null?void 0:h.children);const u=!!(s.onClick||s.onClickOnce);return i(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",r.value,g.value,C.value,{"v-icon--clickable":u,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[g.value?void 0:{fontSize:c(e.size),height:c(e.size),width:c(e.size)},b.value,e.style],role:u?"button":void 0,"aria-hidden":!u,tabindex:u?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}});function ue(e,n){const s=f(),t=se(!1);if(ae){const a=new IntersectionObserver(r=>{e==null||e(r,a),t.value=!!r.find(l=>l.isIntersecting)},n);_(()=>{a.disconnect()}),$(s,(r,l)=>{l&&(a.unobserve(l),t.value=!1),r&&a.observe(r)},{flush:"post"})}return{intersectionRef:s,isIntersecting:t}}const ie=R({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...T(),...G(),...O({tag:"div"}),...F()},"VProgressCircular"),ge=U()({name:"VProgressCircular",props:ie(),setup(e,n){let{slots:s}=n;const t=20,a=2*Math.PI*t,r=f(),{themeClasses:l}=A(e),{sizeClasses:g,sizeStyles:C}=W(e),{textColorClasses:b,textColorStyles:d}=k(z(e,"color")),{textColorClasses:u,textColorStyles:m}=k(z(e,"bgColor")),{intersectionRef:h,isIntersecting:v}=ue(),{resizeRef:q,contentRect:I}=re(),y=o(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),x=o(()=>Number(e.width)),w=o(()=>C.value?Number(e.size):I.value?I.value.width:Math.max(x.value,32)),S=o(()=>t/(1-x.value/w.value)*2),N=o(()=>x.value/w.value*S.value),L=o(()=>c((100-y.value)/100*a));return ne(()=>{h.value=r.value,q.value=r.value}),B(()=>i(e.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,g.value,b.value,e.class],style:[C.value,d.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:y.value},{default:()=>[i("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${S.value} ${S.value}`},[i("circle",{class:["v-progress-circular__underlay",u.value],style:m.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":N.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),i("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":N.value,"stroke-dasharray":a,"stroke-dashoffset":L.value},null)]),s.default&&i("div",{class:"v-progress-circular__content"},[s.default({value:y.value})])]})),{}}});export{fe as V,ve as a,ge as b,k as c,W as d,D as e,ue as f,G as m,re as u};
