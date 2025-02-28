import{_ as y,G as R,H as l,I as p,J as a,B as s,O as g,P as n,N as x,X as v,F as I,a3 as B,U as d,D as _,$ as N,a2 as z,a0 as b,S as V,V as w,W as T}from"./index-b40327df.js";import{V as Z}from"./VContainer-893c8e1e.js";import{g as m}from"./VBtn-b0f4105d.js";import{V as U}from"./VRow-820bb781.js";import{V as L}from"./VTable-5520a931.js";import{V as D}from"./VDialog-3a2a98f3.js";import{b as O,a as A,c as X}from"./VCard-6224c03a.js";import{V as S}from"./VDivider-d2e84e8b.js";import{V as j,a as E}from"./VRadioGroup-207cb202.js";import{V as F}from"./VSpacer-f49705d8.js";import"./VProgressCircular-85246574.js";import"./VOverlay-2012a9da.js";import"./forwardRefs-e658ad70.js";import"./scopeId-b0839f56.js";import"./transition-395658aa.js";import"./createSimpleFunctional-9853c015.js";import"./VAvatar-0d99d2b9.js";import"./VSelectionControl-794c3fb0.js";import"./VInput-8524eb0b.js";import"./index-283c38b2.js";const P={name:"RxListOnly",components:{},setup(){return{stateStore:R()}},data:()=>({open:!1,rxIndex:0,rxToBeRemoved:[]}),computed:{},methods:{RxSelected(e){this.rxIndex=e},updateRxName(){this.stateStore.rxAssignments[this.rxIndex].name=this.stateStore.rxAssignments[this.rxIndex].name},removeRx(){this.stateStore.rxAssignments[this.rxIndex].name="",this.stateStore.rxAssignments[this.rxIndex].zone="",this.stateStore.rxAssignments[this.rxIndex].zoneId="",this.rxToBeRemoved.push(this.rxIndex),console.log(this.rxToBeRemoved),this.open=!1},radioButtonClicked(e,t){this.radioButtonSelected=e,this.zoneAssigned=e,this.alertChooseZone=this.radioButtonSelected=="",console.log(this.rxIndex,this.radioButtonSelected)},assignZone(e){this.stateStore.rxAssignments[this.rxIndex].zone==""?this.alertChooseZone=!0:(this.stateStore.rxAssignments[this.rxIndex].zoneId=this.radioButtonSelected,this.stateStore.rxAssignments[this.rxIndex].zone=this.zoneAssigned,this.alertChooseZone=!1,this.radioButtonSelected="",this.open=!1)},save(){const e=`${this.stateStore.serverURL}`;this.stateStore.rxAssignments=this.stateStore.rxAssignments.filter((t,f)=>!this.rxToBeRemoved.includes(f)),console.log(this.stateStore.rxAssignments),fetch(`http://${e}/write/UserTvNames/${JSON.stringify(this.stateStore.rxAssignments)}`).then(t=>{this.$router.push("/")}).catch(t=>console.log(t))},cancel(){this.$router.push("/")}},async created(){this.stateStore.showBottomNav=!1,this.stateStore.showSideMenu=!1},beforeUnmount(){}},C=e=>(w("data-v-39a03c19"),e=e(),T(),e),W=C(()=>n("thead",null,[n("tr",null,[n("th",null,"RX IP"),n("th",null,"Assign RX"),n("th",null,"RX Name"),n("th",null,"Zone Name"),n("th",null,"Video Wall")])],-1)),G={class:"is_receiver"},J={key:0,class:"d-flex justify-center text-red"},M={class:"mx-6 d-flex justify-center"},H={class:"zoneSelect"},K={key:0,class:"d-flex justify-center text-red"},q=C(()=>n("td",null,null,-1));function Q(e,t,f,o,Y,i){return l(),p(Z,{id:"myContainer",fluid:""},{default:a(()=>[s(U,{class:"d-flex justify-end my-3"},{default:a(()=>[s(m,{class:"mx-3",onClick:i.cancel,color:"red"},{default:a(()=>[g("Cancel")]),_:1},8,["onClick"]),s(m,{class:"mx-3",onClick:i.save,color:"blue"},{default:a(()=>[g("SAVE")]),_:1},8,["onClick"])]),_:1}),s(L,{id:"device-table"},{default:a(()=>[W,n("tbody",null,[(l(!0),x(I,null,v(o.stateStore.rxAssignments,(h,u)=>(l(),x("tr",{key:u,class:B(e.rxToBeRemoved.includes(u)?"remove":"")},[n("td",G,d(h.rxId),1),n("td",null,[s(D,{modelValue:e.open,"onUpdate:modelValue":t[6]||(t[6]=c=>e.open=c),scrollable:"",width:"500"},{activator:a(({props:c})=>[o.stateStore.rxAssignments[u].vwName==""?(l(),p(m,_({key:0,id:"pick-zone-btn",color:"orange",text:"Change Zone Assignment",variant:"outlined"},c,{onClick:r=>i.RxSelected(u)}),null,16,["onClick"])):(l(),p(m,{key:1,text:"Change Video Wall Assignment",variant:"outlined",color:"teal",onClick:t[0]||(t[0]=r=>this.$router.push("/addvideowalls"))}))]),default:a(({isActive:c})=>[s(O,{"prepend-icon":"mdi-gamepad-circle",title:"Name Receiver and Assign Zone"},{default:a(()=>[s(S,{class:"mt-3"}),s(A,null,{default:a(()=>[n("div",null,"Name for RX - "+d(o.stateStore.rxAssignments[e.rxIndex].rxId),1),N(n("input",{id:"input",class:"inputFont",onKeyup:t[1]||(t[1]=r=>i.updateRxName()),type:"text","onUpdate:modelValue":t[2]||(t[2]=r=>o.stateStore.rxAssignments[e.rxIndex].name=r),maxlength:"10",style:z({borderColor:o.stateStore.rxAssignments[e.rxIndex].name==""?"red":"black"})},null,36),[[b,o.stateStore.rxAssignments[e.rxIndex].name]])]),_:1}),o.stateStore.rxAssignments[e.rxIndex].name==""?(l(),x("div",J,"Enter Name!")):V("",!0),s(S,{class:"mt-3"}),n("div",M,"Select Zone for - "+d(o.stateStore.rxAssignments[e.rxIndex].rxId),1),s(A,{class:"px-4",style:{height:"300px"}},{default:a(()=>[n("div",H,[s(j,{modelValue:o.stateStore.rxAssignments[e.rxIndex].zone,"onUpdate:modelValue":t[3]||(t[3]=r=>o.stateStore.rxAssignments[e.rxIndex].zone=r)},{default:a(()=>[(l(!0),x(I,null,v(o.stateStore.zoneNames,(r,k)=>(l(),x("div",{key:k},[s(E,{label:r,value:r,onClick:$=>i.radioButtonClicked(r,e.rxIndex)},null,8,["label","value","onClick"])]))),128))]),_:2},1032,["modelValue"])]),e.alertChooseZone?(l(),x("div",K,"Select a Zone!")):V("",!0)]),_:2},1024),s(S),s(X,null,{default:a(()=>[s(m,{text:"Close",onClick:r=>c.value=!1},null,8,["onClick"]),s(F),s(m,{disabled:o.stateStore.rxAssignments[e.rxIndex].name==""||o.stateStore.rxAssignments[e.rxIndex].zone=="",color:"blue","prepend-icon":"mdi-check-circle",text:"Assign",variant:"flat",onClick:t[4]||(t[4]=r=>i.assignZone(e._index))},null,8,["disabled"]),s(m,{icon:"mdi-delete",color:"red",size:"x-large",onClick:t[5]||(t[5]=r=>i.removeRx())})]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),n("td",null,d(o.stateStore.rxAssignments[u].name),1),n("td",null,d(h.zone),1),n("td",null,d(h.vwType)+" - "+d(h.vwName),1),q],2))),128))])]),_:1})]),_:1})}const Ie=y(P,[["render",Q],["__scopeId","data-v-39a03c19"]]);export{Ie as default};
