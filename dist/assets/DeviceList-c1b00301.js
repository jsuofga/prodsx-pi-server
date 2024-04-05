import{_ as C,G as L,H as s,I as r,J as a,B as n,P as e,O as l,W as d,N as p,V,F as w,$ as x,R as h,S as g,U as D}from"./index-4b0f3250.js";import{V as N}from"./VContainer-d018132f.js";import{i as I,h as u,q as R}from"./VRow-a1f5fed6.js";import{V as f}from"./VCol-76d13ecf.js";import{V as U}from"./VTable-24c506c1.js";import{V as B}from"./VChip-291f670f.js";import"./index-6a0de303.js";import"./VAvatar-a38372a1.js";import"./VImg-65177318.js";const Q={name:"DeviceList",components:{},setup(){return{stateStore:L()}},data:()=>({showSave:!1}),computed:{},methods:{rescan(){location.reload()},async saveDeviceList(){const t=this.stateStore.serverURL;let m=[];this.stateStore.nodeQueryList_dump.forEach((c,o)=>{if(c.is_host=="n"){let _={rxId:c.ip,name:"",zoneId:"",zone:"",vwName:"",vwType:""};this.stateStore.rxAssignments.push(_)}else if(c.is_host=="y"){let _={txId:c.ip,name:`Video${o+1}`};m.push(_)}}),await fetch(`http://${t}/write/UserTvNames/${JSON.stringify(this.stateStore.rxAssignments)}`),await fetch(`http://${t}/write/UserInputNames/${JSON.stringify(m)}`),this.$router.push("/")},cancel:function(){this.$router.push("/")}},async created(){this.stateStore.showSideMenu=!1,await this.stateStore.getNodeQuery(),this.showSave=!0},beforeUnmount(){}},S=t=>(g("data-v-a619ae41"),t=t(),D(),t),b=S(()=>e("div",{class:"d-flex justify-center"}," 1. Remove duplicate devices as indicated ",-1)),j=S(()=>e("div",{class:"d-flex justify-center"}," 2. Repeat Device List Scan ",-1)),T={class:"d-flex justify-center my-3"},$=S(()=>e("thead",null,[e("tr",null,[e("th",null,"Device IP"),e("th",null,"MCU Version"),e("th",null,"Firmware Build"),e("th",null,"MAC")])],-1)),z=["onClick"],A=["onClick"];function P(t,m,c,o,_,y){return s(),r(N,{id:"myContainer",fluid:""},{default:a(()=>[t.showSave?(s(),r(I,{key:0,class:"mx-3"},{default:a(()=>[n(f),o.stateStore.nodeQueryList_ip_duplicates.length!=0?(s(),r(f,{key:0,class:"d-flex flex-column justify-center text-red"},{default:a(()=>[b,j,e("div",T,[o.stateStore.nodeQueryList_ip_duplicates.length!=0?(s(),r(u,{key:0,class:"mx-3",onClick:y.rescan,color:"primary"},{default:a(()=>[l("ReScan")]),_:1},8,["onClick"])):d("",!0)])]),_:1})):(s(),r(f,{key:1})),n(f,{class:"myCols d-flex justify-end"},{default:a(()=>[n(u,{class:"mx-3",onClick:y.cancel,color:"red"},{default:a(()=>[l("Cancel")]),_:1},8,["onClick"]),o.stateStore.nodeQueryList_ip_duplicates.length==0?(s(),r(u,{key:0,class:"mx-3",onClick:y.saveDeviceList,color:"primary"},{default:a(()=>[l("SAVE")]),_:1},8,["onClick"])):d("",!0)]),_:1})]),_:1})):d("",!0),o.stateStore.showProgress?(s(),r(R,{key:1,id:"progress",indeterminate:"","model-value":"20",size:80})):d("",!0),n(U,{id:"device-table"},{default:a(()=>[$,e("tbody",null,[(s(!0),p(w,null,V(o.stateStore.nodeQueryList_dump,(i,v)=>(s(),p("tr",{key:v},[e("td",{class:x(["is_receiver",{is_host:i.is_host=="y"}])},[l(h(i.ip)+" ",1),o.stateStore.nodeQueryList_ip_duplicates.includes(i.ip)?(s(),r(B,{key:0,color:"red"},{default:a(()=>[l(" Duplicate!")]),_:1})):d("",!0)],2),e("td",null,h(i.mcu_version),1),e("td",null,h(i.fw_build),1),e("td",null,h(i.mac),1),i.is_host=="y"?(s(),p("td",{key:0,onClick:k=>t.openURL(t.deviceListDump[v].ip)},[n(u,null,{default:a(()=>[l("TX")]),_:1})],8,z)):(s(),p("td",{key:1,onClick:k=>t.openURL(t.deviceListDump[v].ip)},[n(u,null,{default:a(()=>[l("RX")]),_:1})],8,A))]))),128))])]),_:1})]),_:1})}const W=C(Q,[["render",P],["__scopeId","data-v-a619ae41"]]);export{W as default};