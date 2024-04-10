import{m as b,u as g,a as H}from"./VContainer-01d49131.js";import{n as f,A as X,B as n,p as S,a2 as u,F as p,l as $,q as G,c as A,X as J,ab as K}from"./index-727bb80f.js";import{c as V}from"./createSimpleFunctional-ae5f7992.js";import{h as x,V as k,m as Q,y as U,a as W,E as Y,o as Z,p as ee,b as ae,A as te,q as ne,R as de,u as ie,v as le,j as se,z as ce,c as re,F as ue,r as oe,s as ve,d as me,B as ye,L as ke,w as be}from"./VBtn-6fcf6571.js";import{a as h,V as ge}from"./VAvatar-701bf9fb.js";import{V as P}from"./VProgressCircular-7762ce8f.js";const fe=f()({name:"VCardActions",props:b(),setup(e,i){let{slots:t}=i;return X({VBtn:{slim:!0,variant:"text"}}),g(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=V("v-card-subtitle"),Ie=V("v-card-title"),Ce=S({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...b(),...x()},"VCardItem"),pe=f()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return g(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),v=!!(l||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ie,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(Ve,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Ae=V("v-card-text"),he=S({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Q(),...b(),...x(),...U(),...W(),...Y(),...Z(),...ee(),...ae(),...te(),...H(),...$(),...ne({variant:"elevated"})},"VCard"),De=f()({name:"VCard",directives:{Ripple:de},props:he(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=G(e),{borderClasses:l}=ie(e),{colorClasses:v,colorStyles:m,variantClasses:y}=le(e),{densityClasses:s}=se(e),{dimensionStyles:d}=ce(e),{elevationClasses:B}=re(e),{loaderClasses:L}=ue(e),{locationStyles:T}=oe(e),{positionClasses:D}=ve(e),{roundedClasses:_}=me(e),c=ye(e,t),N=A(()=>e.link!==!1&&c.isLink.value),r=A(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return g(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),j=F||E,q=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),O=j||w||q,z=!!(a.text||e.text!=null);return J(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,l.value,v.value,s.value,B.value,L.value,D.value,_.value,y.value,e.class],style:[m.value,d.value,T.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(Ae,{key:"text"},{default:()=>{var C;return[((C=a.text)==null?void 0:C.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(fe,null,{default:a.actions}),be(r.value,"v-card")]}}),[[K("ripple"),r.value&&e.ripple]])}),{}}});export{Ie as V,Ae as a,De as b,fe as c};