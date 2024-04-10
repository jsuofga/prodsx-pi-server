import{_ as V,G as k,H as i,I as f,J as n,B as o,O as y,P as t,N as c,V as C,F as A,$ as R,R as l,D as B,W as p,X as N,a0 as z,S as T,U as w}from"./index-727bb80f.js";import{V as Z}from"./VContainer-01d49131.js";import{g as x}from"./VBtn-6fcf6571.js";import{V as b}from"./VRow-0cbb5f08.js";import{V as U}from"./VTable-3f3c7730.js";import{V as L}from"./VDialog-368e52a8.js";import{b as D,a as I,c as O}from"./VCard-8f997e5d.js";import{V as S}from"./VDivider-946dc7f7.js";import{V as X}from"./VSpacer-6faa46f1.js";import"./VProgressCircular-7762ce8f.js";import"./VOverlay-c8e875b1.js";import"./forwardRefs-e658ad70.js";import"./scopeId-525328cc.js";import"./transition-fac92ff7.js";import"./createSimpleFunctional-ae5f7992.js";import"./VAvatar-701bf9fb.js";const j={name:"RxListOnly",components:{},setup(){return{stateStore:k()}},data:()=>({open:!1,alertChooseZone:!1,rxIndex:0,radioButtonSelected:"",zoneAssigned:"",rxToBeRemoved:[]}),computed:{},methods:{RxSelected(e){this.rxIndex=e},updateRxName(){this.stateStore.rxAssignments[this.rxIndex].name=this.stateStore.rxAssignments[this.rxIndex].name},removeRx(){this.stateStore.rxAssignments[this.rxIndex].name="",this.stateStore.rxAssignments[this.rxIndex].zone="",this.stateStore.rxAssignments[this.rxIndex].zoneId="",this.rxToBeRemoved.push(this.rxIndex),console.log(this.rxToBeRemoved),this.open=!1},radioButtonClicked(e,s){this.radioButtonSelected=e,this.zoneAssigned=e,this.alertChooseZone=this.radioButtonSelected=="",console.log(this.rxIndex,this.radioButtonSelected)},assignZone(e){this.radioButtonSelected==""?this.alertChooseZone=!0:(this.stateStore.rxAssignments[this.rxIndex].zoneId=this.radioButtonSelected,this.stateStore.rxAssignments[this.rxIndex].zone=this.zoneAssigned,this.alertChooseZone=!1,this.radioButtonSelected="",this.open=!1)},save(){const e=`${this.stateStore.serverURL}`;this.stateStore.rxAssignments=this.stateStore.rxAssignments.filter((s,v)=>!this.rxToBeRemoved.includes(v)),console.log(this.stateStore.rxAssignments),fetch(`http://${e}/write/UserTvNames/${JSON.stringify(this.stateStore.rxAssignments)}`).then(s=>{this.$router.push("/")}).catch(s=>console.log(s))},cancel(){this.$router.push("/")}},async created(){this.stateStore.showSideMenu=!1},beforeUnmount(){}},g=e=>(T("data-v-741860e9"),e=e(),w(),e),E=g(()=>t("thead",null,[t("tr",null,[t("th",null,"RX IP"),t("th",null,"Assign RX"),t("th",null,"RX Name"),t("th",null,"Zone Name"),t("th",null,"Video Wall")])],-1)),F={class:"is_receiver"},P={key:0,class:"d-flex justify-center text-red"},J={class:"mx-6 d-flex justify-center"},M={class:"zoneSelect"},W=["onClick"],G={class:"d-flex ma-3"},H=g(()=>t("input",{name:"group1",type:"radio"},null,-1)),K={class:"d-flex ma-3"},q={key:0,class:"d-flex justify-center text-red"},Q=g(()=>t("td",null,null,-1));function Y(e,s,v,r,$,d){return i(),f(Z,{id:"myContainer",fluid:""},{default:n(()=>[o(b,{class:"d-flex justify-end my-3"},{default:n(()=>[o(x,{class:"mx-3",onClick:d.cancel,color:"red"},{default:n(()=>[y("Cancel")]),_:1},8,["onClick"]),o(x,{class:"mx-3",onClick:d.save,color:"primary"},{default:n(()=>[y("SAVE")]),_:1},8,["onClick"])]),_:1}),o(U,{id:"device-table"},{default:n(()=>[E,t("tbody",null,[(i(!0),c(A,null,C(r.stateStore.rxAssignments,(h,m)=>(i(),c("tr",{key:m,class:R(e.rxToBeRemoved.includes(m)?"remove":"")},[t("td",F,l(h.rxId),1),t("td",null,[o(L,{modelValue:e.open,"onUpdate:modelValue":s[4]||(s[4]=u=>e.open=u),scrollable:"",width:"500"},{activator:n(({props:u})=>[r.stateStore.rxAssignments[m].vwName==""?(i(),f(x,B({key:0,id:"pick-zone-btn",color:"orange",text:"Assign Receiver",variant:"outlined"},u,{onClick:a=>d.RxSelected(m)}),null,16,["onClick"])):p("",!0)]),default:n(({isActive:u})=>[o(D,{"prepend-icon":"mdi-gamepad-circle",title:"Name Receiver and Assign Zone"},{default:n(()=>[o(S,{class:"mt-3"}),o(I,null,{default:n(()=>[t("div",null,"Name for RX - "+l(r.stateStore.rxAssignments[e.rxIndex].rxId),1),N(t("input",{id:"input",class:"inputFont",onKeyup:s[0]||(s[0]=a=>d.updateRxName()),type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>r.stateStore.rxAssignments[e.rxIndex].name=a),maxlength:"10"},null,544),[[z,r.stateStore.rxAssignments[e.rxIndex].name]])]),_:1}),r.stateStore.rxAssignments[e.rxIndex].name==""?(i(),c("div",P,"Enter Name!")):p("",!0),o(S,{class:"mt-3"}),t("div",J,"Select Zone for - "+l(r.stateStore.rxAssignments[e.rxIndex].rxId),1),o(I,{class:"px-4",style:{height:"300px"}},{default:n(()=>[t("div",M,[(i(!0),c(A,null,C(r.stateStore.zoneNames,(a,_)=>(i(),c("div",{onClick:ee=>d.radioButtonClicked(a,_),key:_},[t("label",G,[H,t("span",K,l(a),1)])],8,W))),128))]),e.alertChooseZone?(i(),c("div",q,"Select a Zone!")):p("",!0)]),_:2},1024),o(S),o(O,null,{default:n(()=>[o(x,{text:"Close",onClick:a=>u.value=!1},null,8,["onClick"]),o(X),o(x,{color:"primary","prepend-icon":"mdi-check-circle",text:"Assign",variant:"flat",onClick:s[2]||(s[2]=a=>d.assignZone(e._index))}),r.stateStore.rxAssignments[m].vwType==""?(i(),f(x,{key:0,icon:"mdi-delete",color:"red",size:"x-large",onClick:s[3]||(s[3]=a=>d.removeRx())})):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),t("td",null,l(r.stateStore.rxAssignments[m].name),1),t("td",null,l(h.zone),1),t("td",null,l(h.vwType)+" - "+l(h.vwName),1),Q],2))),128))])]),_:1})]),_:1})}const Se=V(j,[["render",Y],["__scopeId","data-v-741860e9"]]);export{Se as default};