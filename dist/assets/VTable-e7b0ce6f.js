import{m,a as b,b as d}from"./VContainer-b9f83836.js";import{j as h,l as v}from"./VRow-86b7f682.js";import{p as f,l as c,n as u,q as g,B as t,d as T}from"./index-50cd1b44.js";const x=f({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...m(),...h(),...b(),...c()},"VTable"),P=u()({name:"VTable",props:x(),setup(a,s){let{slots:e,emit:p}=s;const{themeClasses:i}=g(a),{densityClasses:n}=v(a);return d(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},i.value,n.value,a.class],style:a.style},{default:()=>{var o,l,r;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:T(a.height)}},[t("table",null,[e.default()])]):(l=e.wrapper)==null?void 0:l.call(e),(r=e.bottom)==null?void 0:r.call(e)]}})),{}}});export{P as V};