import{p as X,a2 as O,m as be,n as j,u as Se,v as ge,s as R,c as S,ah as Ce,w as Ve,B as n,ae as xe,K as Ie,a4 as ze,l as ce,q as re,A as Pe,t as M,D as ve,am as ee,ai as Ae,x as we,V as le,aa as Re,a3 as _e,F as ae}from"./index-b5bbddcf.js";import{c as te,b as Te}from"./index-23450c46.js";import{m as N,a as W,u as de}from"./VContainer-e3fc7b69.js";import{k as fe,n as me,u as ne,r as pe,m as Oe,j as Be,a as Ee,H as Ge,b as Fe,w as Me,R as De,c as Le,y as He,l as $e,d as qe,e as Ke,J as Xe,x as je,z as Ne,g as D}from"./VBtn-ce96676d.js";import{V as _,m as We,b as Ye}from"./VIcon-58bb90d8.js";import{V as se}from"./VAvatar-7261f278.js";function ie(e){const i=Math.abs(e);return Math.sign(e)*(i/((1/.501-2)*(1-i)+1))}function oe(e){let{selectedElement:p,containerSize:i,contentSize:c,isRtl:u,currentScrollOffset:m,isHorizontal:o}=e;const r=o?p.clientWidth:p.clientHeight,a=o?p.offsetLeft:p.offsetTop,v=u&&o?c-a-r:a,d=i+m,f=r+v,V=r*.4;return v<=m?m=Math.max(v-V,0):d<=f&&(m=Math.min(m-(d-f-V),c-i)),m}function Ue(e){let{selectedElement:p,containerSize:i,contentSize:c,isRtl:u,isHorizontal:m}=e;const o=m?p.clientWidth:p.clientHeight,r=m?p.offsetLeft:p.offsetTop,a=u&&m?c-r-o/2-i/2:r+o/2-i/2;return Math.min(c-i,Math.max(0,a))}const Je=Symbol.for("vuetify:v-slide-group"),he=X({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Je},nextIcon:{type:O,default:"$next"},prevIcon:{type:O,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...N(),...be(),...W(),...fe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=j()({name:"VSlideGroup",props:he(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:i}=p;const{isRtl:c}=Se(),{displayClasses:u,mobile:m}=ge(e),o=me(e,e.symbol),r=R(!1),a=R(0),v=R(0),d=R(0),f=S(()=>e.direction==="horizontal"),{resizeRef:V,contentRect:T}=ne(),{resizeRef:h,contentRect:I}=ne(),t=S(()=>o.selected.value.length?o.items.value.findIndex(l=>l.id===o.selected.value[0]):-1),g=S(()=>o.selected.value.length?o.items.value.findIndex(l=>l.id===o.selected.value[o.selected.value.length-1]):-1);if(Ce){let l=-1;Ve(()=>[o.selected.value,T.value,I.value,f.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(T.value&&I.value){const s=f.value?"width":"height";v.value=T.value[s],d.value=I.value[s],r.value=v.value+1<d.value}if(t.value>=0&&h.value){const s=h.value.children[g.value];t.value===0||!r.value?a.value=0:e.centerActive?a.value=Ue({selectedElement:s,containerSize:v.value,contentSize:d.value,isRtl:c.value,isHorizontal:f.value}):r.value&&(a.value=oe({selectedElement:s,containerSize:v.value,contentSize:d.value,isRtl:c.value,currentScrollOffset:a.value,isHorizontal:f.value}))}})})}const z=R(!1);let C=0,B=0;function E(l){const s=f.value?"clientX":"clientY";B=(c.value&&f.value?-1:1)*a.value,C=l.touches[0][s],z.value=!0}function L(l){if(!r.value)return;const s=f.value?"clientX":"clientY",b=c.value&&f.value?-1:1;a.value=b*(B+C-l.touches[0][s])}function y(l){const s=d.value-v.value;a.value<0||!r.value?a.value=0:a.value>=s&&(a.value=s),z.value=!1}function x(){V.value&&(V.value[f.value?"scrollLeft":"scrollTop"]=0)}const P=R(!1);function H(l){if(P.value=!0,!(!r.value||!h.value)){for(const s of l.composedPath())for(const b of h.value.children)if(b===s){a.value=oe({selectedElement:b,containerSize:v.value,contentSize:d.value,isRtl:c.value,currentScrollOffset:a.value,isHorizontal:f.value});return}}}function G(l){P.value=!1}function F(l){var s;!P.value&&!(l.relatedTarget&&((s=h.value)!=null&&s.contains(l.relatedTarget)))&&k()}function $(l){h.value&&(f.value?l.key==="ArrowRight"?k(c.value?"prev":"next"):l.key==="ArrowLeft"&&k(c.value?"next":"prev"):l.key==="ArrowDown"?k("next"):l.key==="ArrowUp"&&k("prev"),l.key==="Home"?k("first"):l.key==="End"&&k("last"))}function k(l){var s,b,J,Q,Z;if(h.value)if(!l)(s=xe(h.value)[0])==null||s.focus();else if(l==="next"){const w=(b=h.value.querySelector(":focus"))==null?void 0:b.nextElementSibling;w?w.focus():k("first")}else if(l==="prev"){const w=(J=h.value.querySelector(":focus"))==null?void 0:J.previousElementSibling;w?w.focus():k("last")}else l==="first"?(Q=h.value.firstElementChild)==null||Q.focus():l==="last"&&((Z=h.value.lastElementChild)==null||Z.focus())}function A(l){const s=a.value+(l==="prev"?-1:1)*v.value;a.value=Ie(s,0,d.value-v.value)}const ke=S(()=>{let l=a.value>d.value-v.value?-(d.value-v.value)+ie(d.value-v.value-a.value):-a.value;a.value<=0&&(l=ie(-a.value));const s=c.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${s*l}px)`,transition:z.value?"none":"",willChange:z.value?"transform":""}}),q=S(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),K=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!m.value;case!0:return r.value||Math.abs(a.value)>0;case"mobile":return m.value||r.value||Math.abs(a.value)>0;default:return!m.value&&(r.value||Math.abs(a.value)>0)}}),Y=S(()=>Math.abs(a.value)>0),U=S(()=>d.value>Math.abs(a.value)+v.value);return de(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":K.value,"v-slide-group--is-overflowing":r.value},u.value,e.class],style:e.style,tabindex:P.value||o.selected.value.length?-1:0,onFocus:F},{default:()=>{var l,s,b;return[K.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Y.value}],onClick:()=>Y.value&&A("prev")},[((l=i.prev)==null?void 0:l.call(i,q.value))??n(te,null,{default:()=>[n(_,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:V,class:"v-slide-group__container",onScroll:x},[n("div",{ref:h,class:"v-slide-group__content",style:ke.value,onTouchstartPassive:E,onTouchmovePassive:L,onTouchendPassive:y,onFocusin:H,onFocusout:G,onKeydown:$},[(s=i.default)==null?void 0:s.call(i,q.value)])]),K.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!U.value}],onClick:()=>U.value&&A("next")},[((b=i.next)==null?void 0:b.call(i,q.value))??n(te,null,{default:()=>[n(_,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:A,scrollOffset:a,focus:k}}}),ye=Symbol.for("vuetify:v-chip-group"),Qe=X({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ze},...he(),...N(),...fe({selectedClass:"v-chip--selected"}),...W(),...ce(),...pe({variant:"tonal"})},"VChipGroup");j()({name:"VChipGroup",props:Qe(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:i}=p;const{themeClasses:c}=re(e),{isSelected:u,select:m,next:o,prev:r,selected:a}=me(e,ye);return Pe({VChip:{color:M(e,"color"),disabled:M(e,"disabled"),filter:M(e,"filter"),variant:M(e,"variant")}}),de(()=>{const v=ue.filterProps(e);return n(ue,ve(v,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style}),{default:()=>{var d;return[(d=i.default)==null?void 0:d.call(i,{isSelected:u,select:m,next:o,prev:r,selected:a.value})]}})}),{}}});const Ze=X({activeClass:String,appendAvatar:String,appendIcon:O,closable:Boolean,closeIcon:{type:O,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ee(),onClickOnce:ee(),...Oe(),...N(),...Be(),...Ee(),...Ge(),...Fe(),...Me(),...We(),...W({tag:"span"}),...ce(),...pe({variant:"tonal"})},"VChip"),il=j()({name:"VChip",directives:{Ripple:De},props:Ze(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:i,emit:c,slots:u}=p;const{t:m}=Ae(),{borderClasses:o}=Le(e),{colorClasses:r,colorStyles:a,variantClasses:v}=He(e),{densityClasses:d}=$e(e),{elevationClasses:f}=qe(e),{roundedClasses:V}=Ke(e),{sizeClasses:T}=Ye(e),{themeClasses:h}=re(e),I=we(e,"modelValue"),t=Xe(e,ye,!1),g=je(e,i),z=S(()=>e.link!==!1&&g.isLink.value),C=S(()=>!e.disabled&&e.link!==!1&&(!!t||e.link||g.isClickable.value)),B=S(()=>({"aria-label":m(e.closeLabel),onClick(y){y.stopPropagation(),I.value=!1,c("click:close",y)}}));function E(y){var x;c("click",y),C.value&&((x=g.navigate)==null||x.call(g,y),t==null||t.toggle())}function L(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),E(y))}return()=>{const y=g.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),P=!!(x||u.append),H=!!(u.close||e.closable),G=!!(u.filter||e.filter)&&t,F=!!(e.prependIcon||e.prependAvatar),$=!!(F||u.prepend),k=!t||t.isSelected.value;return I.value&&le(n(y,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":C.value,"v-chip--filter":G,"v-chip--pill":e.pill},h.value,o.value,k?r.value:void 0,d.value,f.value,V.value,T.value,v.value,t==null?void 0:t.selectedClass.value,e.class],style:[k?a.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:C.value?0:void 0,onClick:E,onKeydown:C.value&&!z.value&&L},{default:()=>{var A;return[Ne(C.value,"v-chip"),G&&n(Te,{key:"filter"},{default:()=>[le(n("div",{class:"v-chip__filter"},[u.filter?n(D,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},u.filter):n(_,{key:"filter-icon",icon:e.filterIcon},null)]),[[_e,t.isSelected.value]])]}),$&&n("div",{key:"prepend",class:"v-chip__prepend"},[u.prepend?n(D,{key:"prepend-defaults",disabled:!F,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},u.prepend):n(ae,null,[e.prependIcon&&n(_,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&n(se,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n("div",{class:"v-chip__content","data-no-activator":""},[((A=u.default)==null?void 0:A.call(u,{isSelected:t==null?void 0:t.isSelected.value,selectedClass:t==null?void 0:t.selectedClass.value,select:t==null?void 0:t.select,toggle:t==null?void 0:t.toggle,value:t==null?void 0:t.value.value,disabled:e.disabled}))??e.text]),P&&n("div",{key:"append",class:"v-chip__append"},[u.append?n(D,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},u.append):n(ae,null,[e.appendIcon&&n(_,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&n(se,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&n("button",ve({key:"close",class:"v-chip__close",type:"button"},B.value),[u.close?n(D,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},u.close):n(_,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Re("ripple"),C.value&&e.ripple,null]])}}});export{il as V};
