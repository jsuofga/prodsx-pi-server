import{_ as i,G as c,H as p,I as f,J as s,B as e,O as r,S as m,U as h,P as _}from"./index-8ad2129a.js";import{V}from"./VContainer-0b5af25b.js";import{V as b,a as C,b as k}from"./VCard-0960ca0a.js";import{V as x,a as y}from"./VTextField-39cb4f1c.js";import{V as u}from"./VRow-48df8fd9.js";import{V as n}from"./VCol-9f0aae4c.js";import{g as d}from"./VBtn-13690100.js";import"./createSimpleFunctional-cb14a061.js";import"./VAvatar-e9e94dc5.js";import"./VProgressCircular-41ac9d9f.js";import"./transition-3efa0903.js";import"./forwardRefs-e658ad70.js";import"./index-d372f56c.js";const S={name:"AccessControl",components:{},setup(){return{stateStore:c()}},data:()=>({userInput:"",inputRules:[t=>t==="octava"?(console.log("ok"),!0):"Enter Admin Password"]}),computed:{},methods:{submit:function(){if(this.userInput==="octava")switch(this.stateStore.isAuthenticated=!0,this.stateStore.pageToAuthenticateAndRoute){case"update":this.$router.push("/update");break;case"addzones":this.$router.push("/addzones");break;case"addvideowalls":this.$router.push("/addvideowalls");break;case"rxlistonly":this.$router.push("/rxlistonly");break;case"additach":this.$router.push("/additach");break;case"addchannelfavorites":this.$router.push("/addchannelfavorites");break}},cancel:function(){this.$router.push("/")}},created(){},mounted(){},beforeUnmount(){}},v=t=>(m("data-v-974535b6"),t=t(),h(),t),A=v(()=>_("h4",null," Enter Admin Credential",-1));function I(t,a,$,w,j,o){return p(),f(V,{class:"fill-height d-flex justify-center"},{default:s(()=>[e(k,{id:"myCard"},{default:s(()=>[e(b,{class:"d-flex justify-center"},{default:s(()=>[A]),_:1}),e(C,null,{default:s(()=>[e(x,null,{default:s(()=>[e(y,{label:"Admin Password",rules:t.inputRules,modelValue:t.userInput,"onUpdate:modelValue":a[0]||(a[0]=l=>t.userInput=l),"prepend-inner-icon":"mdi-account",required:""},null,8,["rules","modelValue"])]),_:1})]),_:1}),e(u,{class:"d-flex justify-center"}),e(u,{id:"buttons-container",class:"d-flex justify-center"},{default:s(()=>[e(n,{class:"d-flex justify-center"},{default:s(()=>[e(d,{color:"red",onClick:o.cancel},{default:s(()=>[r("Cancel")]),_:1},8,["onClick"])]),_:1}),e(n,{class:"d-flex justify-center"},{default:s(()=>[e(d,{color:"blue",onClick:o.submit},{default:s(()=>[r("Submit")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const J=i(S,[["render",I],["__scopeId","data-v-974535b6"]]);export{J as default};
