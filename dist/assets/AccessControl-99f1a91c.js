import{_ as i,G as c,H as p,I as f,J as s,B as e,O as o,V as m,W as h,P as _}from"./index-2aab0456.js";import{V}from"./VContainer-0413e3f8.js";import{V as b,a as C,b as k}from"./VCard-7ff695e8.js";import{V as x,a as y}from"./VTextField-4b910ffd.js";import{V as u}from"./VRow-8013df2c.js";import{V as d}from"./VCol-bb3f55b4.js";import{g as l}from"./VBtn-f04c5d3c.js";import"./createSimpleFunctional-3b3a93fb.js";import"./VAvatar-2b4fffca.js";import"./VProgressCircular-276da2f1.js";import"./transition-f75054c1.js";import"./VInput-48dc2f7e.js";import"./index-5cbe2d13.js";import"./forwardRefs-e658ad70.js";const $={name:"AccessControl",components:{},setup(){return{stateStore:c()}},data:()=>({userInput:"",inputRules:[t=>t==="octava"?(console.log("ok"),!0):"Enter Admin Password"]}),computed:{},methods:{submit:function(){if(this.userInput==="octava")switch(this.stateStore.isAuthenticated=!0,this.stateStore.pageToAuthenticateAndRoute){case"update":this.$router.push("/update");break;case"addzones":this.$router.push("/addzones");break;case"addvideowalls":this.$router.push("/addvideowalls");break;case"rxlistonly":this.$router.push("/rxlistonly");break;case"txlistonly":this.$router.push("/txlistonly");break;case"additach":this.$router.push("/additach");break;case"addchannelfavorites":this.$router.push("/addchannelfavorites");break;case"addpresets":this.$router.push("/addpresets");break}},cancel:function(){this.$router.push("/")}},created(){},mounted(){},beforeUnmount(){}},v=t=>(m("data-v-90ac0302"),t=t(),h(),t),S=v(()=>_("h4",null," Enter Admin Credential",-1));function A(t,a,I,w,j,r){return p(),f(V,{class:"fill-height d-flex justify-center"},{default:s(()=>[e(k,{id:"myCard"},{default:s(()=>[e(b,{class:"d-flex justify-center"},{default:s(()=>[S]),_:1}),e(C,null,{default:s(()=>[e(x,null,{default:s(()=>[e(y,{label:"Admin Password",rules:t.inputRules,modelValue:t.userInput,"onUpdate:modelValue":a[0]||(a[0]=n=>t.userInput=n),"prepend-inner-icon":"mdi-account",required:""},null,8,["rules","modelValue"])]),_:1})]),_:1}),e(u,{class:"d-flex justify-center"}),e(u,{id:"buttons-container",class:"d-flex justify-center"},{default:s(()=>[e(d,{class:"d-flex justify-center"},{default:s(()=>[e(l,{color:"red",onClick:r.cancel},{default:s(()=>[o("Cancel")]),_:1},8,["onClick"])]),_:1}),e(d,{class:"d-flex justify-center"},{default:s(()=>[e(l,{color:"blue",onClick:r.submit},{default:s(()=>[o("Submit")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const O=i($,[["render",A],["__scopeId","data-v-90ac0302"]]);export{O as default};
