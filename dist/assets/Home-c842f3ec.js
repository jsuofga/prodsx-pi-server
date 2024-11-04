import{_ as h,G as f,H as a,N as v,U as $,I as i,J as o,B as r,O as m,V as b,W as k,P as l,S as B,M as w,F as C,X as N}from"./index-5d9bdee7.js";import{g as u,n as z}from"./VBtn-10d2fcfe.js";import{V as p}from"./VProgressCircular-334768d2.js";import{V}from"./VContainer-10e588d6.js";import{V as j}from"./VRow-7133121c.js";import{V as O}from"./VCol-ac7a754b.js";import{V as U}from"./VSnackbar-6cae3b22.js";import"./VOverlay-5301d233.js";import"./forwardRefs-e658ad70.js";import"./scopeId-9f2332a4.js";import"./transition-b051101a.js";const L={name:"ZoneButton",props:["zoneBtnName"],setup(){return{stateStore:f()}},data(){return{}},computed:{},methods:{gotoZone(){this.stateStore.zoneSelected=this.zoneBtnName,this.stateStore.vwSelected="",this.stateStore.vwTypeSelected="",localStorage.setItem("zoneSelected",this.stateStore.zoneSelected),this.$router.push("/zoneview")}},created(){},mounted(){},beforeUnmount(){}};function A(e,t,c,s,S,n){return a(),v("button",{class:"button-round",onClick:t[0]||(t[0]=(...d)=>n.gotoZone&&n.gotoZone(...d))},$(c.zoneBtnName),1)}const G=h(L,[["render",A],["__scopeId","data-v-a4b9fd66"]]);const E={name:"VideowallButton",props:["vwBtnName","vwType"],setup(){return{stateStore:f()}},data(){return{}},computed:{},methods:{gotoVideoWallView(){this.stateStore.vwSelected=this.vwBtnName,this.stateStore.vwTypeSelected=this.vwType,this.stateStore.zoneSelected="",this.stateStore.rxSelected="",this.stateStore.rxSelectedLabel="",localStorage.setItem("rxSelected",""),localStorage.setItem("rxSelectedLabel",""),localStorage.setItem("vwSelected",this.stateStore.vwSelected),localStorage.setItem("vwTypeSelected",this.stateStore.vwTypeSelected),this.$router.push("/videowallview")}},created(){},mounted(){},beforeUnmount(){}};function D(e,t,c,s,S,n){return a(),v("button",{class:"button-round",onClick:t[0]||(t[0]=(...d)=>n.gotoVideoWallView&&n.gotoVideoWallView(...d))},$(c.vwBtnName),1)}const R=h(E,[["render",D],["__scopeId","data-v-7a322935"]]);const W={name:"PowerOnOffGroupButton",components:{},setup(){return{stateStore:f()}},data:()=>({}),methods:{powerAll(e){this.stateStore.power_cec(e),this.stateStore.snackbar=!0}},created(){},mounted(){},beforeUnmount(){}},P=e=>(b("data-v-af6103d1"),e=e(),k(),e),M=P(()=>l("small",{class:"text-green"},"ON",-1)),F=P(()=>l("small",{class:"text-red"},"Off",-1));function H(e,t,c,s,S,n){return a(),i(z,{id:"group-btn",rounded:"xl",variant:"outlined"},{default:o(()=>[r(u,{size:"x-large",onClick:t[0]||(t[0]=d=>n.powerAll("on"))},{default:o(()=>[r(p,{color:"green"},{default:o(()=>[m("mdi-power")]),_:1}),M]),_:1}),r(u,{size:"x-large",onClick:t[1]||(t[1]=d=>n.powerAll("off"))},{default:o(()=>[r(p,{color:"red"},{default:o(()=>[m("mdi-power")]),_:1}),F]),_:1})]),_:1})}const q=h(W,[["render",H],["__scopeId","data-v-af6103d1"]]);const J={name:"SelectSpeedDialButton",components:{},setup(){return{stateStore:f()}},data:()=>({preset1Created:!1,preset2Created:!1,preset3Created:!1}),methods:{selectAll(){this.stateStore.switch1RxOnly=!1,this.stateStore.vwSelected="",this.stateStore.switchAllRx=!0,this.$router.push("/videoinputs")},switchPreset(e){for(let[t,c]of Object.entries(this.stateStore.preset1)){let s="000";c.ch<10?s=`00${c.ch}`:s=`0${c.ch}`,fetch(`http://${t}/cgi-bin/query.cgi?cmd=rxswitch:${s}`)}alert(`Preset${e}`)}},created(){fetch(`http://${this.stateStore.serverURL}/read/UserPreset1`,{method:"GET"}).then(e=>e.json()).then(e=>{this.preset1Created=Object.keys(e).length>0,this.stateStore.preset1=e}).catch(e=>{console.error("Error:",e)}),fetch(`http://${this.stateStore.serverURL}/read/UserPreset2`,{method:"GET"}).then(e=>e.json()).then(e=>{this.preset2Created=Object.keys(e).length>0,this.stateStore.preset2=e}).catch(e=>{console.error("Error:",e)}),fetch(`http://${this.stateStore.serverURL}/read/UserPreset3`,{method:"GET"}).then(e=>e.json()).then(e=>{this.preset3Created=Object.keys(e).length>0,this.stateStore.preset3=e}).catch(e=>{console.error("Error:",e)})},mounted(){},beforeUnmount(){}},y=e=>(b("data-v-c84d23cd"),e=e(),k(),e),X=y(()=>l("small",{class:"text-primary"},"ALL",-1)),Y=y(()=>l("small",{class:"text-primary"},"Preset",-1)),K=y(()=>l("small",{class:"text-primary"},"Preset",-1)),Q=y(()=>l("small",{class:"text-primary"},"Preset",-1));function ee(e,t,c,s,S,n){return a(),i(z,{id:"select-all-presets-btn",rounded:"xl",variant:"outlined"},{default:o(()=>[r(u,{size:"x-large",onClick:t[0]||(t[0]=d=>n.selectAll())},{default:o(()=>[r(p,{color:"primary"},{default:o(()=>[m("mdi-all-inclusive")]),_:1}),X]),_:1}),e.preset1Created?(a(),i(u,{key:0,size:"x-large",onClick:t[1]||(t[1]=d=>n.switchPreset(1))},{default:o(()=>[Y,r(p,{color:"primary"},{default:o(()=>[m("mdi-numeric-1")]),_:1})]),_:1})):B("",!0),e.preset2Created?(a(),i(u,{key:1,size:"x-large",onClick:t[2]||(t[2]=d=>n.switchPreset(2))},{default:o(()=>[K,r(p,{color:"primary"},{default:o(()=>[m("mdi-numeric-2")]),_:1})]),_:1})):B("",!0),e.preset3Created?(a(),i(u,{key:2,size:"x-large",onClick:t[3]||(t[3]=d=>n.switchPreset(3))},{default:o(()=>[Q,r(p,{color:"primary"},{default:o(()=>[m("mdi-numeric-3")]),_:1})]),_:1})):B("",!0)]),_:1})}const te=h(J,[["render",ee],["__scopeId","data-v-c84d23cd"]]);const oe={name:"Zones",components:{ZoneButton:G,VideowallButton:R,PowerOnOffGroupButton:q,SelectSpeedDialButton:te},setup(){return{stateStore:f()}},data:()=>({}),methods:{},created(){this.stateStore.showSideMenu=!1,this.stateStore.get_vwList(),this.stateStore.getFeedback()},mounted(){},beforeUnmount(){}},g=e=>(b("data-v-beaac915"),e=e(),k(),e),se=g(()=>l("h2",{class:"text-white"},"Welcome. Your system needs to be configured.",-1)),re=g(()=>l("h2",{class:"text-white"},"Select Menu and Scan System to begin.",-1)),ae=g(()=>l("h2",{class:"text-white"},"Create Zone and Assign TV's to Zones",-1)),ne=g(()=>l("h2",{class:"text-white"},"Select Menu. Goto Zones Add | Edit .",-1));function le(e,t,c,s,S,n){const d=w("ZoneButton"),I=w("VideowallButton"),T=w("PowerOnOffGroupButton"),Z=w("SelectSpeedDialButton");return s.stateStore.rxAssignments.length==0?(a(),i(V,{key:0,id:"home-container",fluid:"",class:"fill-height d-flex flex-column justify-center"},{default:o(()=>[se,re]),_:1})):Object.keys(s.stateStore.zoneNames).length==0&&s.stateStore.vwList.length==0?(a(),i(V,{key:1,id:"home-container",fluid:"",class:"fill-height d-flex flex-column justify-center"},{default:o(()=>[ae,ne]),_:1})):(a(),i(V,{key:2,id:"zones-container",fluid:"",class:"fill-height"},{default:o(()=>[r(j,{class:"d-flex justify-center"},{default:o(()=>[(a(!0),v(C,null,N(s.stateStore.zoneNames,(_,x)=>(a(),i(O,{cols:"3",class:"myCols d-flex justify-center",key:x},{default:o(()=>[r(d,{zoneBtnName:_},null,8,["zoneBtnName"])]),_:2},1024))),128)),(a(!0),v(C,null,N(s.stateStore.vwList,(_,x)=>(a(),i(O,{cols:"3",class:"myCols d-flex justify-center",key:x},{default:o(()=>[r(I,{vwBtnName:_.vwName,vwType:_.vwType},null,8,["vwBtnName","vwType"])]),_:2},1024))),128))]),_:1}),r(T),r(Z),r(U,{modelValue:s.stateStore.snackbar,"onUpdate:modelValue":t[0]||(t[0]=_=>s.stateStore.snackbar=_),timeout:3e3,color:s.stateStore.cecTVstatus=="ON"?"green":"red"},{default:o(()=>[l("div",null," Powering Displays "+$(this.stateStore.cecTVstatus),1),l("template",null,[r(u,{color:"white",variant:"text"})])]),_:1},8,["modelValue","color"])]),_:1}))}const ce=h(oe,[["render",le],["__scopeId","data-v-beaac915"]]),ye={__name:"Home",setup(e){return(t,c)=>(a(),i(ce))}};export{ye as default};
