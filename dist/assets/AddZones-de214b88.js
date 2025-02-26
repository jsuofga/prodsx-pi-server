import{_ as p,G as h,H as u,I as f,J as o,B as t,V as y,W as S,P as d,U as Z,$ as b,a0 as I,M as g,N as w,X as k,F as $,O as V}from"./index-04d2ecca.js";import{V as A,a as F,b as v}from"./VCard-1fc7a81c.js";import{V as R,a as U}from"./VTextField-5c135b44.js";import{V as m}from"./VRow-923df32e.js";import{V as _}from"./VCol-1086fd37.js";import{g as i}from"./VBtn-6e272be1.js";import{V as x}from"./VContainer-529bea97.js";import{V as j}from"./VDialog-dc3a28da.js";import"./createSimpleFunctional-096934b0.js";import"./VAvatar-356a45c6.js";import"./VProgressCircular-80b2ec0d.js";import"./transition-b8b7f7dd.js";import"./VInput-3507e3c8.js";import"./index-3d2a3d7b.js";import"./forwardRefs-e658ad70.js";import"./VOverlay-ef20d14b.js";import"./scopeId-e1473fbd.js";const B={name:"AddZonesForm",props:[],setup(){return{stateStore:h()}},data(){return{zonename:"",alert:!1,nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be max 10 characters"]}},computed:{},methods:{add:function(){this.zonename==""||(this.stateStore.zoneNames[`zone${(Object.keys(this.stateStore.zoneNames).length+1).toString()}`]=this.zonename,this.zonename="")},cancel:function(){this.$router.push("/")}},created(){},mounted(){},beforeUnmount(){}},C=e=>(y("data-v-1cd9976d"),e=e(),S(),e),T=C(()=>d("h4",null," Add Zones",-1)),D=C(()=>d("div",null,"Add to Zones",-1));function q(e,n,r,c,a,l){return u(),f(x,{class:"d-flex justify-center"},{default:o(()=>[t(v,{id:"myCard"},{default:o(()=>[t(A,{class:"d-flex justify-center"},{default:o(()=>[T]),_:1}),t(F,null,{default:o(()=>[t(R,null,{default:o(()=>[t(U,{label:"Zone Name",rules:a.nameRules,modelValue:a.zonename,"onUpdate:modelValue":n[0]||(n[0]=s=>a.zonename=s),"prepend-inner-icon":"mdi-gamepad-circle"},null,8,["rules","modelValue"])]),_:1})]),_:1}),t(m,{class:"d-flex justify-center"}),t(m,{id:"buttons-container",class:"d-flex justify-center"},{default:o(()=>[t(_,{class:"d-flex align-center flex-column"},{default:o(()=>[D,t(i,{color:"green",icon:"mdi-arrow-down-bold",onClick:l.add,size:"large"},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const M=p(B,[["render",q],["__scopeId","data-v-1cd9976d"]]);const O={name:"ZoneCard",props:["zoneIndex"],setup(){return{stateStore:h()}},data(){return{dialog:!1,zoneNames:"",alert:!1,nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=8||"Name must be less than 8 characters"]}},computed:{},methods:{submit:function(){this.zonename==""?this.alert=!0:this.alert=!1,this.$router.push("/")},trash:function(e){delete this.stateStore.zoneNames[e],this.dialog=!1},cancel:function(){this.$router.push("/")}},created(){},mounted(){},beforeUnmount(){}},J={id:"myCard",class:"d-flex flex-column align-center"};function L(e,n,r,c,a,l){return u(),f(x,{class:"d-flex justify-center"},{default:o(()=>[d("div",J,[d("label",null,Z(r.zoneIndex),1),t(i,{id:"delete-btn",density:"compact",icon:"mdi-trash-can",color:"red",onClick:n[0]||(n[0]=s=>a.dialog=!0)}),t(j,{modelValue:a.dialog,"onUpdate:modelValue":n[3]||(n[3]=s=>a.dialog=s),width:"auto"},{default:o(()=>[t(v,{"max-width":"400","prepend-icon":"mdi-update",text:"Confirm you want to remove Zone",title:"Delete Zone ?"},{actions:o(()=>[t(i,{variant:"outlined",class:"ms-auto",text:"No",onClick:n[1]||(n[1]=s=>a.dialog=!a.dialog)}),t(i,{variant:"outlined",class:"ms-auto",text:"Remove Zone",onClick:n[2]||(n[2]=s=>l.trash(r.zoneIndex))})]),_:1})]),_:1},8,["modelValue"]),b(d("input",{id:"input",class:"inputFont",onKeyup:n[4]||(n[4]=s=>e.updateZoneName(r.zoneIndex)),type:"text","onUpdate:modelValue":n[5]||(n[5]=s=>c.stateStore.zoneNames[r.zoneIndex]=s),maxlength:"10"},null,544),[[I,c.stateStore.zoneNames[r.zoneIndex]]])])]),_:1})}const E=p(O,[["render",L],["__scopeId","data-v-8c6a502a"]]);const G={name:"AddZones",components:{AddZonesForm:M,ZoneCard:E},props:[],setup(){return{stateStore:h()}},data(){return{zonename:"",alert:!1,nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=8||"Name must be less than 8 characters"],zoneNames:[]}},computed:{alert:function(){return this.zonename==""}},methods:{save:function(){fetch(`http://${this.stateStore.serverURL}/write/UserZoneNames/${JSON.stringify(this.stateStore.zoneNames)}`).then(e=>{this.$router.push("/")}).catch(e=>console.log(e))},cancel:function(){this.$router.push("/")}},async created(){this.stateStore.showSideMenu=!1},mounted(){},beforeUnmount(){}},H=e=>(y("data-v-dc896bc7"),e=e(),S(),e),K=H(()=>d("h2",null,"Zones",-1));function P(e,n,r,c,a,l){const s=g("AddZonesForm"),N=g("ZoneCard");return u(),f(x,{class:"container",fluid:""},{default:o(()=>[t(s),t(_,{id:"zone-label",class:"d-flex flex-column"},{default:o(()=>[t(m,{class:"d-flex justify-center text-white"},{default:o(()=>[K]),_:1}),t(m,{class:"myRow d-flex flex-start"},{default:o(()=>[(u(!0),w($,null,k(c.stateStore.zoneNames,(W,z)=>(u(),f(_,{cols:"2",key:z},{default:o(()=>[t(N,{zoneIndex:z},null,8,["zoneIndex"])]),_:2},1024))),128))]),_:1}),t(m,{class:"myRow d-flex justify-center ma-6"},{default:o(()=>[t(i,{class:"ma-6",color:"red",onClick:l.cancel},{default:o(()=>[V("Cancel")]),_:1},8,["onClick"]),t(i,{class:"ma-6",color:"blue",onClick:l.save},{default:o(()=>[V("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const _e=p(G,[["render",P],["__scopeId","data-v-dc896bc7"]]);export{_e as default};
