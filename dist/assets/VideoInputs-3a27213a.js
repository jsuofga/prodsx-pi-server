import{_ as v,G as p,H as s,N as n,O as S,U as l,P as u,B as c,I as d,S as x,J as a,M as b,Z as y,$ as R,F as A,X as C}from"./index-83ca4d49.js";import{V as f}from"./VAvatar-50492bc6.js";import{g as I}from"./VBtn-46912dfd.js";import{V}from"./VChip-0a0393fc.js";import{V as P}from"./VContainer-cb4128be.js";import{C as X}from"./VOverlay-7b366756.js";import{V as h}from"./VRow-a44adbde.js";import{V as B}from"./VSnackbar-3a1e8051.js";import{V as T}from"./VCol-a793bc3e.js";import"./VProgressCircular-4acbecf6.js";import"./transition-2c4aa9c7.js";import"./index-d174a72f.js";import"./forwardRefs-e658ad70.js";import"./scopeId-46facc25.js";const L={name:"SourceTX",props:["txIndex","txLabel","txIP","showRemoteBtn"],components:{},setup(){return{stateStore:p()}},data:()=>({bg_image:""}),methods:{selectTX(o){console.log(this.stateStore.txAssignments);let t="";const i=o.split(".");let e=i[i.length-1];t=e.length==1?"00"+e:"0"+e,this.stateStore.txSelected=t,console.log(this.stateStore.vwSelected),this.stateStore.switch1RxOnly==!0?(this.stateStore.switchRX(t),this.stateStore.snackbar=!0):this.stateStore.switchAllRx==!0?(this.stateStore.switchAllRX(t),this.stateStore.snackbar=!0):(this.stateStore.switchVW(t),this.stateStore.snackbar=!0)},selectRemote(){this.stateStore.remoteSelectedIndex=this.txIndex,localStorage.setItem("remoteSelectedIndex",this.stateStore.remoteSelectedIndex),this.$router.push("/remotecontrol")},changeBackgroundImage(){this.bg_image=`http://${this.txIP}/capture.jpg?`+Date.now()}},created(){fetch(`http://${this.txIP}/cgi-bin/query.cgi?cmd=capture_pic &`),this.snapShot=setInterval(this.changeBackgroundImage,2500)},beforeUnmount(){console.log("stop snapshot"),fetch(`http://${this.txIP}/cgi-bin/query.cgi?cmd=killall capture_pic`),clearInterval(this.snapShot)}},j={id:"tx-label"};function O(o,t,i,e,w,m){return s(),n("button",{class:"button",onClick:t[1]||(t[1]=g=>m.selectTX(i.txIP))},[S(l(i.txLabel)+" ",1),u("div",j,l(i.txIP),1),c(f,{cover:"",src:o.bg_image,width:"190",height:"107"},null,8,["src"]),i.showRemoteBtn!=null?(s(),d(I,{key:0,id:"remote-select",icon:"mdi-remote",color:"blue",onClick:t[0]||(t[0]=g=>m.selectRemote())})):x("",!0)])}const q=v(L,[["render",O],["__scopeId","data-v-2cdf4568"]]);const U={name:"PreviewRX",props:[],components:{},setup(){return{stateStore:p()}},data:()=>({bg_image:""}),methods:{changeBackgroundImage(){this.bg_image=`http://${this.stateStore.rxSelected}/capture.jpg?`+Date.now()}},created(){console.log("start snapshot"),this.changeBackgroundImage(),fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=capture_pic &`),this.snapShot=setInterval(this.changeBackgroundImage,2500)},mounted(){fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=capture_pic &`)},beforeUnmount(){console.log("stop snapshot"),fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=killall capture_pic`),clearInterval(this.snapShot)}},D={key:0,id:"preview-container"},N={key:1};function F(o,t,i,e,w,m){return e.stateStore.vwTypeSelected!="1x3"?(s(),n("div",D,[c(f,{class:"preview",cover:"",src:o.bg_image},{default:a(()=>[e.stateStore.rxSelectedLabel!=""?(s(),d(V,{key:0,id:"rx-label"},{default:a(()=>[S(l(e.stateStore.rxSelectedLabel),1)]),_:1})):x("",!0)]),_:1},8,["src"])])):(s(),n("div",N,[c(f,{class:"preview-rotate",cover:"",src:o.bg_image},{default:a(()=>[e.stateStore.rxSelectedLabel!=""?(s(),d(V,{key:0,id:"rx-label"},{default:a(()=>[S(l(e.stateStore.rxSelectedLabel),1)]),_:1})):x("",!0)]),_:1},8,["src"])]))}const H=v(U,[["render",F],["__scopeId","data-v-833c4263"]]);const M={name:"VideoInputs",components:{SourceTX:q,PreviewRX:H},setup(){return{stateStore:p()}},computed:{showSelectRemoteControl(){return Array.from({length:this.stateStore.iTachUnits.length*3},(o,t)=>t+1)}},data:()=>({active:!1,rxVolume:"10"}),methods:{onClickOutside(){this.stateStore.vwSelected==""?this.$router.push("/zoneview"):this.$router.push("/videowallview")},getVolume(){fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`).then(o=>o.text()).then(o=>{this.rxVolume=o.trim()}).catch(o=>{console.log("error")})},changeVolume(){fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)}},created(){this.getVolume(),this.getVolumeStatus=setInterval(this.getVolume,5e3)},beforeUnmount(){clearInterval(this.getVolumeStatus)}},z={id:"inner-div"},E={key:0},G={key:1},J={key:2},W={key:3},Z={class:"text-white",for:"volume"};function $(o,t,i,e,w,m){const g=b("PreviewRX"),k=b("SourceTX");return s(),d(P,{id:"container",fluid:"",class:"fill-height d-flex flex-column"},{default:a(()=>[y((s(),n("div",z,[c(h,{id:"rx-preview-container",class:"d-flex justify-center text-white"},{default:a(()=>[c(g,{rxIP:e.stateStore.rxSelected},null,8,["rxIP"])]),_:1}),c(B,{modelValue:e.stateStore.snackbar,"onUpdate:modelValue":t[0]||(t[0]=r=>e.stateStore.snackbar=r),timeout:3e3,color:"blue"},{default:a(()=>[e.stateStore.vwSelected==""&&e.stateStore.switchAllRx==!1?(s(),n("div",E,l(`${e.stateStore.rxSelectedLabel} to ${e.stateStore.txAssignments.find(r=>r.txId===`172.31.2.${e.stateStore.txSelected.replace(/0/g,"")}`).name}`),1)):e.stateStore.vwSelected!=""&&e.stateStore.switch1RxOnly==!0&&e.stateStore.switchAllRx==!1?(s(),n("div",G,l(` ${e.stateStore.vwSelected} RX ${e.stateStore.rxSelected} to ${e.stateStore.txAssignments.find(r=>r.txId===`172.31.2.${e.stateStore.txSelected.replace(/0/g,"")}`).name}`),1)):e.stateStore.vwSelected!=""&&e.stateStore.switch1RxOnly==!1&&e.stateStore.switchAllRx==!1?(s(),n("div",J,l(` ${e.stateStore.vwSelected} to ${e.stateStore.txAssignments.find(r=>r.txId===`172.31.2.${e.stateStore.txSelected.replace(/0/g,"")}`).name}`),1)):e.stateStore.switchAllRx==!0?(s(),n("div",W,l(` All TV's to  ${e.stateStore.txAssignments.find(r=>r.txId===`172.31.2.${e.stateStore.txSelected.replace(/0/g,"")}`).name}`),1)):x("",!0),u("template",null,[c(I,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),c(h,{class:"d-flex justify-center mt-6"},{default:a(()=>[y(u("input",{onChange:t[1]||(t[1]=r=>m.changeVolume()),type:"range",min:"1",max:"100","onUpdate:modelValue":t[2]||(t[2]=r=>o.rxVolume=r)},null,544),[[R,o.rxVolume]]),u("label",Z,[u("small",null,"2CH Audio Volume-"+l(o.rxVolume),1)])]),_:1}),e.stateStore.vwSelected==""&&e.stateStore.switchAllRx==!1?(s(),d(h,{key:0,id:"rx-label",class:"d-flex justify-center pa-6 myCol"},{default:a(()=>[S(" Select Video for - "+l(e.stateStore.rxSelectedLabel),1)]),_:1})):e.stateStore.vwSelected!=""&&e.stateStore.switchAllRx==!1?(s(),d(h,{key:1,id:"rx-label",class:"d-flex justify-center pa-6 myCol"},{default:a(()=>[S(" Select Video for - "+l(e.stateStore.vwSelected),1)]),_:1})):e.stateStore.switchAllRx==!0?(s(),d(h,{key:2,id:"rx-label",class:"d-flex justify-center pa-6 myCol"},{default:a(()=>[S(" Select Video for - All TV's ")]),_:1})):x("",!0),c(h,{class:"myRow d-flex align-center"},{default:a(()=>[(s(!0),n(A,null,C(e.stateStore.txAssignments,(r,_)=>(s(),d(T,{key:_,class:"d-flex justify-center pl-0"},{default:a(()=>[c(k,{txIndex:_,txLabel:e.stateStore.txAssignments[_].name,txIP:r.txId,showRemoteBtn:m.showSelectRemoteControl[_]},null,8,["txIndex","txLabel","txIP","showRemoteBtn"])]),_:2},1024))),128))]),_:1})])),[[X,m.onClickOutside]])]),_:1})}const me=v(M,[["render",$],["__scopeId","data-v-d37f1d2b"]]);export{me as default};
