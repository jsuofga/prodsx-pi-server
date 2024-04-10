import{m as D,V as x}from"./VOverlay-72fae865.js";import{f as L}from"./forwardRefs-e658ad70.js";import{q as I,r as N,b as A,s as M,v as O,w as q,x as E,e as F,y as z,z as G,V as H}from"./VBtn-0c52734e.js";import{p as U,l as $,a1 as j,n as J,x as K,q as Q,r as g,s as _,w as C,o as W,a4 as X,B as o,D as T,a5 as Y,E as Z}from"./index-876b0190.js";import{u as ee}from"./scopeId-9c434d25.js";import{u as te}from"./VContainer-6a14db89.js";function ae(e){const n=_(e);let t=-1;function a(){clearInterval(t)}function m(){a(),Z(()=>n.value=e)}function v(r){const f=r?getComputedStyle(r):{transitionDuration:.2},i=parseFloat(f.transitionDuration)*1e3||200;if(a(),n.value<=0)return;const d=performance.now();t=window.setInterval(()=>{const k=performance.now()-d+i;n.value=Math.max(e-k,0),n.value<=0&&a()},i)}return Y(a),{clear:a,time:n,start:v,reset:m}}const ne=U({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...I({location:"bottom"}),...N(),...A(),...M(),...$(),...j(D({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),ue=J()({name:"VSnackbar",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=K(e,"modelValue"),{locationStyles:m}=O(e),{positionClasses:v}=q(e),{scopeId:r}=ee(),{themeClasses:f}=Q(e),{colorClasses:i,colorStyles:d,variantClasses:k}=E(e),{roundedClasses:h}=F(e),l=ae(Number(e.timeout)),P=g(),w=g(),b=_(!1);C(a,c),C(()=>e.timeout,c),W(()=>{a.value&&c()});let y=-1;function c(){l.reset(),window.clearTimeout(y);const s=Number(e.timeout);if(!a.value||s===-1)return;const V=X(w.value);l.start(V),y=window.setTimeout(()=>{a.value=!1},s)}function p(){l.reset(),window.clearTimeout(y)}function R(){b.value=!0,p()}function B(){b.value=!1,c()}return te(()=>{const s=x.filterProps(e),V=!!(t.default||t.text||e.text);return o(x,T({ref:P,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},v.value,e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":u=>a.value=u,contentProps:T({class:["v-snackbar__wrapper",f.value,i.value,h.value,k.value],style:[m.value,d.value],onPointerenter:R,onPointerleave:B},s.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},r),{default:()=>{var u,S;return[z(!1,"v-snackbar"),e.timer&&!b.value&&o("div",{key:"timer",class:"v-snackbar__timer"},[o(G,{ref:w,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":l.time.value},null)]),V&&o("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((u=t.text)==null?void 0:u.call(t))??e.text,(S=t.default)==null?void 0:S.call(t)]),t.actions&&o(H,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[o("div",{class:"v-snackbar__actions"},[t.actions()])]})]},activator:t.activator})}),L({},P)}});export{ue as V};
