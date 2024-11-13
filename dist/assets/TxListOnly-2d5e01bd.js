import{_ as g,G as V,H as c,I as T,J as o,B as e,O as f,P as a,N as u,X as C,F as _,a1 as I,U as x,D as b,Y as y,Z as k,S as A,V as N,W as B}from"./index-8c997e98.js";import{V as w}from"./VContainer-ad3f8978.js";import{g as i}from"./VBtn-aa85d87b.js";import{V as U}from"./VRow-29384a12.js";import{V as L}from"./VTable-6968b32d.js";import{V as R}from"./VDialog-c20df469.js";import{b as D,a as E,c as O}from"./VCard-a94edd5b.js";import{V as h}from"./VDivider-64df4eb3.js";import{V as X}from"./VSpacer-ea38e525.js";import"./VProgressCircular-ce7eb7e7.js";import"./VOverlay-554155ae.js";import"./forwardRefs-e658ad70.js";import"./scopeId-cbcdd5b7.js";import"./transition-685af83c.js";import"./createSimpleFunctional-862abe56.js";import"./VAvatar-10126353.js";const F={name:"TxListOnly",components:{},setup(){return{stateStore:V()}},data:()=>({open:!1,txIndex:0,txToBeRemoved:[]}),computed:{},methods:{TxSelected(t){this.txIndex=t},updateTxName(){this.stateStore.txAssignments[this.txIndex].name=this.stateStore.txAssignments[this.txIndex].name},removeTx(){this.stateStore.txAssignments.splice(this.txIndex,1),this.open=!1},assignTx(){this.open=!1},save(){const t=`${this.stateStore.serverURL}`;this.stateStore.txAssignments=this.stateStore.txAssignments.filter((s,p)=>!this.txToBeRemoved.includes(p)),console.log(this.stateStore.txAssignments),fetch(`http://${t}/write/UserInputNames/${JSON.stringify(this.stateStore.txAssignments)}`).then(s=>{this.$router.push("/")}).catch(s=>console.log(s))},cancel(){this.$router.push("/")}},async created(){this.stateStore.showBottomNav=!1,this.stateStore.showSideMenu=!1},beforeUnmount(){this.stateStore.showBottomNav=!0}},S=t=>(N("data-v-ebbab559"),t=t(),B(),t),P=S(()=>a("thead",null,[a("tr",null,[a("th",null,"TX IP"),a("th",null,"Edit TX"),a("th",null,"TX Name")])],-1)),j={class:"is_host"},z={key:0,class:"d-flex justify-center text-red"},J=S(()=>a("td",null,null,-1));function M(t,s,p,n,$,l){return c(),T(w,{id:"myContainer",fluid:""},{default:o(()=>[e(U,{class:"d-flex justify-end my-3"},{default:o(()=>[e(i,{class:"mx-3",onClick:l.cancel,color:"red"},{default:o(()=>[f("Cancel")]),_:1},8,["onClick"]),e(i,{class:"mx-3",onClick:l.save,color:"blue"},{default:o(()=>[f("SAVE")]),_:1},8,["onClick"])]),_:1}),e(L,{id:"device-table"},{default:o(()=>[P,a("tbody",null,[(c(!0),u(_,null,C(n.stateStore.txAssignments,(v,m)=>(c(),u("tr",{key:m,class:I(t.txToBeRemoved.includes(m)?"remove":"")},[a("td",j,x(v.txId),1),a("td",null,[e(R,{modelValue:t.open,"onUpdate:modelValue":s[4]||(s[4]=d=>t.open=d),scrollable:"",width:"500"},{activator:o(({props:d})=>[e(i,b({color:"#809CC0",text:"Edit Tansmitter",variant:"outlined"},d,{onClick:r=>l.TxSelected(m)}),null,16,["onClick"])]),default:o(({isActive:d})=>[e(D,{"prepend-icon":"mdi-gamepad-circle",title:"Name Transmitter"},{default:o(()=>[e(h,{class:"mt-3"}),e(E,null,{default:o(()=>[a("div",null,"Name for TX - "+x(n.stateStore.txAssignments[t.txIndex].txId),1),y(a("input",{id:"input",class:"inputFont",onKeyup:s[0]||(s[0]=r=>l.updateTxName()),type:"text","onUpdate:modelValue":s[1]||(s[1]=r=>n.stateStore.txAssignments[t.txIndex].name=r),maxlength:"10"},null,544),[[k,n.stateStore.txAssignments[t.txIndex].name]])]),_:1}),n.stateStore.txAssignments[t.txIndex].name==""?(c(),u("div",z,"Enter Name!")):A("",!0),e(h),e(O,null,{default:o(()=>[e(i,{text:"Close",onClick:r=>d.value=!1},null,8,["onClick"]),e(X),e(i,{color:"blue","prepend-icon":"mdi-check-circle",text:"Assign",variant:"flat",onClick:s[2]||(s[2]=r=>l.assignTx())}),e(i,{icon:"mdi-delete",color:"red",size:"x-large",onClick:s[3]||(s[3]=r=>l.removeTx())})]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),a("td",null,x(n.stateStore.txAssignments[m].name),1),J],2))),128))])]),_:1})]),_:1})}const it=g(F,[["render",M],["__scopeId","data-v-ebbab559"]]);export{it as default};