import{_ as g,G as p,H as t,N as c,O as d,R as r,P as u,B as l,J as a,I as n,W as h,M as w,X as V,F as R,V as A}from"./index-50471abb.js";import{h as y}from"./VBtn-d24c2518.js";import{V as b}from"./VChip-3072ec40.js";import{V as I}from"./VAvatar-9722b630.js";import{V as P}from"./VContainer-98aeb250.js";import{C as X}from"./VOverlay-ea6fea29.js";import{V as m}from"./VRow-c628f82b.js";import{V as C}from"./VSnackbar-cca7c760.js";import{V as B}from"./VCol-4aae2a6f.js";import"./VIcon-7211f5fe.js";import"./index-2d17b3c4.js";import"./transition-c84aa93e.js";import"./forwardRefs-e658ad70.js";import"./scopeId-a51c3c26.js";const L={name:"SourceTX",props:["txIndex","txLabel","txIP"],components:{},setup(){return{stateStore:p()}},data:()=>({bg_image:""}),methods:{selectTX(o){let s="";const i=o.split(".");let e=i[i.length-1];s=e.length==1?"00"+e:"0"+e,this.stateStore.txSelected=s,console.log(this.stateStore.vwSelected),this.stateStore.switch1RxOnly==!0?(this.stateStore.switchRX(s),this.stateStore.snackbar=!0):this.stateStore.switchAllRx==!0?(this.stateStore.switchAllRX(s),this.stateStore.snackbar=!0):(this.stateStore.switchVW(s),this.stateStore.snackbar=!0)},selectRemote(){this.stateStore.remoteSelectedIndex=this.txIndex,localStorage.setItem("remoteSelectedIndex",this.stateStore.remoteSelectedIndex),this.$router.push("/remotecontrol")},changeBackgroundImage(){this.bg_image=`http://${this.txIP}/capture.jpg?`+Date.now()}},created(){fetch(`http://${this.txIP}/cgi-bin/query.cgi?cmd=capture_pic &`),this.snapShot=setInterval(this.changeBackgroundImage,2500)},beforeUnmount(){console.log("stop snapshot"),fetch(`http://${this.txIP}/cgi-bin/query.cgi?cmd=killall capture_pic`),clearInterval(this.snapShot)}},T={id:"tx-label"},O=["src"];function j(o,s,i,e,v,S){return t(),c("button",{class:"button",onClick:s[1]||(s[1]=_=>S.selectTX(i.txIP))},[d(r(i.txLabel)+" ",1),u("div",T,r(i.txIP),1),u("img",{src:o.bg_image,width:"190","aspect-ratio":"16/9"},null,8,O),l(y,{id:"remote-select",icon:"mdi-remote",color:"blue",onClick:s[0]||(s[0]=_=>S.selectRemote())})])}const q=g(L,[["render",j],["__scopeId","data-v-d79fc642"]]);const D={name:"PreviewRX",props:[],components:{},setup(){return{stateStore:p()}},data:()=>({bg_image:""}),methods:{changeBackgroundImage(){this.bg_image=`http://${this.stateStore.rxSelected}/capture.jpg?`+Date.now()}},created(){console.log("start snapshot"),this.changeBackgroundImage(),fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=capture_pic &`),this.snapShot=setInterval(this.changeBackgroundImage,2500)},mounted(){fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=capture_pic &`)},beforeUnmount(){console.log("stop snapshot"),fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=killall capture_pic`),clearInterval(this.snapShot)}},N={key:0,id:"preview-container"},U={key:1};function F(o,s,i,e,v,S){return e.stateStore.vwTypeSelected!="1x3"?(t(),c("div",N,[l(I,{class:"preview",cover:"",src:o.bg_image},{default:a(()=>[e.stateStore.rxSelectedLabel!=""?(t(),n(b,{key:0,id:"rx-label"},{default:a(()=>[d(r(e.stateStore.rxSelectedLabel),1)]),_:1})):h("",!0)]),_:1},8,["src"])])):(t(),c("div",U,[l(I,{class:"preview-rotate",cover:"",src:o.bg_image},{default:a(()=>[e.stateStore.rxSelectedLabel!=""?(t(),n(b,{key:0,id:"rx-label"},{default:a(()=>[d(r(e.stateStore.rxSelectedLabel),1)]),_:1})):h("",!0)]),_:1},8,["src"])]))}const W=g(D,[["render",F],["__scopeId","data-v-b1f2d1dc"]]);const z={name:"VideoInputs",components:{SourceTX:q,PreviewRX:W},setup(){return{stateStore:p()}},data:()=>({active:!1}),methods:{onClickOutside(){this.stateStore.vwSelected==""?this.$router.push("/zoneview"):this.$router.push("/videowallview")}},created(){},beforeUnmount(){}},E={id:"inner-div"},G={key:0},H={key:1},J={key:2},M={key:3};function K(o,s,i,e,v,S){const _=w("PreviewRX"),k=w("SourceTX");return t(),n(P,{id:"container",fluid:"",class:"fill-height d-flex flex-column"},{default:a(()=>[V((t(),c("div",E,[l(m,{id:"rx-preview-container",class:"d-flex justify-center text-white"},{default:a(()=>[l(_,{rxIP:e.stateStore.rxSelected},null,8,["rxIP"])]),_:1}),l(C,{modelValue:e.stateStore.snackbar,"onUpdate:modelValue":s[0]||(s[0]=x=>e.stateStore.snackbar=x),timeout:3e3,color:"blue"},{default:a(()=>[e.stateStore.vwSelected==""&&e.stateStore.switchAllRx==!1?(t(),c("div",G,r(` ${e.stateStore.rxSelectedLabel} to ${e.stateStore.txAssignments[parseInt(e.stateStore.txSelected)-1].name} `),1)):e.stateStore.vwSelected!=""&&e.stateStore.switch1RxOnly==!0&&e.stateStore.switchAllRx==!1?(t(),c("div",H,r(` ${e.stateStore.vwSelected} RX ${e.stateStore.rxSelected} to ${e.stateStore.txAssignments[parseInt(e.stateStore.txSelected)-1].name} `),1)):e.stateStore.vwSelected!=""&&e.stateStore.switch1RxOnly==!1&&e.stateStore.switchAllRx==!1?(t(),c("div",J,r(` ${e.stateStore.vwSelected} to ${e.stateStore.txAssignments[parseInt(e.stateStore.txSelected)-1].name} `),1)):e.stateStore.switchAllRx==!0?(t(),c("div",M,r(` All TV's to ${e.stateStore.txAssignments[parseInt(e.stateStore.txSelected)-1].name} `),1)):h("",!0),u("template",null,[l(y,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),e.stateStore.vwSelected==""&&e.stateStore.switchAllRx==!1?(t(),n(m,{key:0,id:"rx-label",class:"d-flex justify-center pa-6 myCol"},{default:a(()=>[d(" Select Video for - "+r(e.stateStore.rxSelectedLabel),1)]),_:1})):e.stateStore.vwSelected!=""&&e.stateStore.switchAllRx==!1?(t(),n(m,{key:1,id:"rx-label",class:"d-flex justify-center pa-6 myCol"},{default:a(()=>[d(" Select Video for - "+r(e.stateStore.vwSelected),1)]),_:1})):e.stateStore.switchAllRx==!0?(t(),n(m,{key:2,id:"rx-label",class:"d-flex justify-center pa-6 myCol"},{default:a(()=>[d(" Select Video for - All TV's ")]),_:1})):h("",!0),l(m,{class:"myRow d-flex align-center"},{default:a(()=>[(t(!0),c(R,null,A(e.stateStore.txAssignments,(x,f)=>(t(),n(B,{key:f,class:"d-flex justify-center pl-0"},{default:a(()=>[l(k,{txIndex:f,txLabel:e.stateStore.txAssignments[f].name,txIP:x.txId},null,8,["txIndex","txLabel","txIP"])]),_:2},1024))),128))]),_:1})])),[[X,S.onClickOutside]])]),_:1})}const de=g(z,[["render",K],["__scopeId","data-v-58a18c04"]]);export{de as default};
