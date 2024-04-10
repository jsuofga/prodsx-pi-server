import{_ as p,G as I,H as v,I as _,J as e,B as t,P as m,R as r,O as i,W as h,M as S}from"./index-0ac814ed.js";import{V as g}from"./VRow-12320b97.js";import{V as o}from"./VCol-5d2448d4.js";import{V as n}from"./VAvatar-18ded079.js";import{V as d}from"./VChip-9e2b8b20.js";import{g as u}from"./VBtn-12cef21c.js";import{V as P}from"./VSnackbar-0720c01a.js";import{V}from"./VContainer-25d587d6.js";import"./VProgressCircular-6794f1f1.js";import"./transition-c8cebf58.js";import"./index-3e438f04.js";import"./VOverlay-c81c4110.js";import"./forwardRefs-e658ad70.js";import"./scopeId-15ddff4c.js";const C={name:"VideoWall2x2",props:[],setup(){return{stateStore:I()}},data(){return{bg_image:[],vwIPs:[]}},computed:{is2x2VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_column=="1"}},methods:{changeBackgroundImage(){for(const[x,s]of this.vwIPs.entries())try{this.bg_image[x]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch2x2VW_solo(x){this.is2x2VideoWallOn||(this.stateStore.switch1RxOnly=!0),this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[x],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")},switch2x2VW(){this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){this.vwIPs=this.stateStore.vwList.filter(x=>x.vwName==this.stateStore.vwSelected)[0].rxAssigned;for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500)},mounted(){for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot)}};function y(x,s,w,f,l,a){return v(),_(V,{id:"container"},{default:e(()=>[t(g,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,r(f.stateStore.vwSelected),1)]),_:1}),t(o,{id:"vw-container"},{default:e(()=>[a.is2x2VideoWallOn?(v(),_(g,{key:1,id:"vw-2x2"},{default:e(()=>[t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[a.is2x2VideoWallOn?(v(),_(n,{key:0,id:"capture-scaled2x",cover:"",src:l.bg_image[0]},{default:e(()=>[t(d,{class:"rx-chip-scale-down"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])):h("",!0)]),_:1}),t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1}),t(u,{id:"vw2x2-offBtn",icon:"mdi-grid-large",size:"large",onClick:s[6]||(s[6]=c=>f.stateStore.videoWallOff())})]),_:1}),t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1}),t(u,{id:"vw2x2-onBtn",size:"large",onClick:s[7]||(s[7]=c=>a.switch2x2VW())},{default:e(()=>[i("2x2")]),_:1})]),_:1})]),_:1})):(v(),_(g,{key:0,id:"vw-2x2"},{default:e(()=>[t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[0],onClick:s[0]||(s[0]=c=>a.switch2x2VW_solo(0))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[1],onClick:s[1]||(s[1]=c=>a.switch2x2VW_solo(1))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[2],onClick:s[2]||(s[2]=c=>a.switch2x2VW_solo(2))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw2x2-offBtn",icon:"mdi-grid-large",size:"large",onClick:s[3]||(s[3]=c=>f.stateStore.videoWallOff())})]),_:1}),t(o,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[3],onClick:s[4]||(s[4]=c=>a.switch2x2VW_solo(3))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw2x2-onBtn",size:"large",onClick:s[5]||(s[5]=c=>a.switch2x2VW())},{default:e(()=>[i("2x2")]),_:1})]),_:1})]),_:1}))]),_:1}),t(P,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[8]||(s[8]=c=>f.stateStore.snackbarVWOff=c),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(u,{color:"white",variant:"text"})])]),_:1},8,["modelValue"])]),_:1})}const O=p(C,[["render",y],["__scopeId","data-v-0feef038"]]);const B={name:"VideoWall2x3",props:[],setup(){return{stateStore:I()}},data(){return{bg_image:[],vwIPs:[]}},computed:{is2x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="2"},is2x2VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="1"}},methods:{changeBackgroundImage(){for(const[x,s]of this.vwIPs.entries())try{this.bg_image[x]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch2x3VW_solo(x){this.stateStore.switch1RxOnly=!0,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[x],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")},switch2x3VW(x){console.log(x),this.stateStore.vw2x3Mode=x,this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){this.vwIPs=this.stateStore.vwList.filter(x=>x.vwName==this.stateStore.vwSelected)[0].rxAssigned;for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500)},mounted(){for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot)}};function z(x,s,w,f,l,a){return v(),_(V,{id:"container"},{default:e(()=>[t(g,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,r(f.stateStore.vwSelected),1)]),_:1}),t(o,{id:"vw-container"},{default:e(()=>[!a.is2x2VideoWallOn&&!a.is2x3VideoWallOn?(v(),_(g,{key:0,id:"vw-2x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[0],onClick:s[0]||(s[0]=c=>a.switch2x3VW_solo(0))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[1],onClick:s[1]||(s[1]=c=>a.switch2x3VW_solo(1))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[2],onClick:s[2]||(s[2]=c=>a.switch2x3VW_solo(2))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[3],onClick:s[3]||(s[3]=c=>a.switch2x3VW_solo(3))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[4],onClick:s[4]||(s[4]=c=>a.switch2x3VW_solo(4))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw2x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[5]||(s[5]=c=>f.stateStore.videoWallOff())}),t(u,{id:"vw2x3-2x2OnBtn",onClick:s[6]||(s[6]=c=>a.switch2x3VW("vw2x3_2x2on")),size:"large"},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[5],onClick:s[7]||(s[7]=c=>a.switch2x3VW_solo(5))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw2x3-onBtn",size:"large",onClick:s[8]||(s[8]=c=>a.switch2x3VW("vw2x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1})]),_:1})):h("",!0),a.is2x3VideoWallOn?(v(),_(g,{key:1,id:"vw-2x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[a.is2x3VideoWallOn?(v(),_(n,{key:0,id:"capture-scaled2x3",cover:"",src:l.bg_image[0]},{default:e(()=>[t(d,{class:"rx-chip-scale-down-2x3"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])):h("",!0)]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1}),t(u,{id:"vw2x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[9]||(s[9]=c=>f.stateStore.videoWallOff())}),t(u,{id:"vw2x3-2x2OnBtn",onClick:s[10]||(s[10]=c=>a.switch2x3VW("vw2x3_2x2on")),size:"large"},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1}),t(u,{id:"vw2x3-onBtn",size:"large",onClick:s[11]||(s[11]=c=>a.switch2x3VW("vw2x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1})]),_:1})):h("",!0),a.is2x2VideoWallOn?(v(),_(g,{key:2,id:"vw-2x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[a.is2x2VideoWallOn?(v(),_(n,{key:0,id:"capture-scaled2x2",cover:"",src:l.bg_image[0]},{default:e(()=>[t(d,{class:"rx-chip-scale-down-2x2"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])):h("",!0)]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[2],onClick:s[12]||(s[12]=c=>a.switch2x3VW_solo(2))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1}),t(u,{id:"vw2x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[13]||(s[13]=c=>f.stateStore.videoWallOff())}),t(u,{id:"vw2x3-2x2OnBtn",onClick:s[14]||(s[14]=c=>a.switch2x3VW("vw2x3_2x2on")),size:"large"},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[5],onClick:s[15]||(s[15]=c=>a.switch2x3VW_solo(5))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw2x3-onBtn",size:"large",onClick:s[16]||(s[16]=c=>a.switch2x3VW("vw2x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1}),t(P,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[17]||(s[17]=c=>f.stateStore.snackbarVWOff=c),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(u,{color:"white",variant:"text"})])]),_:1},8,["modelValue"])]),_:1})}const T=p(B,[["render",z],["__scopeId","data-v-c32c562d"]]);const R={name:"VideoWall3x3",props:[],setup(){return{stateStore:I()}},data(){return{bg_image:[],vwIPs:[]}},computed:{is2x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="2"},is2x2VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="1"},is3x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="2"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="2"}},methods:{changeBackgroundImage(){for(const[x,s]of this.vwIPs.entries())try{this.bg_image[x]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch3x3VW_solo(x){this.stateStore.switch1RxOnly=!0,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[x],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")},switch3x3VW(x){console.log(x),this.stateStore.vw3x3Mode=x,this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){this.vwIPs=this.stateStore.vwList.filter(x=>x.vwName==this.stateStore.vwSelected)[0].rxAssigned;for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500)},mounted(){for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot)}};function G(x,s,w,f,l,a){return v(),_(V,{id:"container"},{default:e(()=>[t(g,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,r(f.stateStore.vwSelected),1)]),_:1}),t(o,{id:"vw-container"},{default:e(()=>[!a.is2x2VideoWallOn&&!a.is2x3VideoWallOn&&!a.is3x3VideoWallOn?(v(),_(g,{key:0,id:"vw-3x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[0],onClick:s[0]||(s[0]=c=>a.switch3x3VW_solo(0))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[1],onClick:s[1]||(s[1]=c=>a.switch3x3VW_solo(1))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[2],onClick:s[2]||(s[2]=c=>a.switch3x3VW_solo(2))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[3],onClick:s[3]||(s[3]=c=>a.switch3x3VW_solo(3))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[4],onClick:s[4]||(s[4]=c=>a.switch3x3VW_solo(4))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-2x2Btn",size:"large",onClick:s[5]||(s[5]=c=>a.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[5],onClick:s[6]||(s[6]=c=>a.switch3x3VW_solo(5))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-2x3Btn",size:"large",onClick:s[7]||(s[7]=c=>a.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[6],onClick:s[8]||(s[8]=c=>a.switch3x3VW_solo(6))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[6]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[7],onClick:s[9]||(s[9]=c=>a.switch3x3VW_solo(7))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[7]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"x-large",onClick:s[10]||(s[10]=c=>f.stateStore.videoWallOff())})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[8],onClick:s[11]||(s[11]=c=>a.switch3x3VW_solo(8))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[8]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-3x3Btn",size:"large",onClick:s[12]||(s[12]=c=>a.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):a.is3x3VideoWallOn?(v(),_(g,{key:1,id:"vw-3x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{id:"capture-scaled3x3",cover:"",src:l.bg_image[0]},{default:e(()=>[t(d,{class:"rx-chip-scale-down-3x3"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-2x2Btn",size:"large",onClick:s[13]||(s[13]=c=>a.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-2x3Btn",size:"large",onClick:s[14]||(s[14]=c=>a.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[6]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[7]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[15]||(s[15]=c=>f.stateStore.videoWallOff())})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[8]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-3x3Btn",size:"large",onClick:s[16]||(s[16]=c=>a.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):a.is2x3VideoWallOn?(v(),_(g,{key:2,id:"vw-3x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{id:"capture-scaled2x3",cover:"",src:l.bg_image[0]},{default:e(()=>[t(d,{class:"rx-chip-scale-down-2x3"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-2x2Btn",size:"large",onClick:s[17]||(s[17]=c=>a.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-2x3Btn",size:"large",onClick:s[18]||(s[18]=c=>a.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[6],onClick:s[19]||(s[19]=c=>a.switch3x3VW_solo(6))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[6]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[7],onClick:s[20]||(s[20]=c=>a.switch3x3VW_solo(7))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[7]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[21]||(s[21]=c=>f.stateStore.videoWallOff())})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[8],onClick:s[22]||(s[22]=c=>a.switch3x3VW_solo(8))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[8]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-3x3Btn",size:"large",onClick:s[23]||(s[23]=c=>a.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):a.is2x2VideoWallOn?(v(),_(g,{key:3,id:"vw-3x3"},{default:e(()=>[t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{id:"capture-scaled2x2",cover:"",src:l.bg_image[0]},{default:e(()=>[t(d,{class:"rx-chip-scale-down-2x2"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[2],onClick:s[24]||(s[24]=c=>a.switch3x3VW_solo(2))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[3]),1)]),_:1})]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,null,{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[4]),1)]),_:1})]),_:1}),t(u,{id:"vw3x3-2x2Btn",size:"large",onClick:s[25]||(s[25]=c=>a.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[5],onClick:s[26]||(s[26]=c=>a.switch3x3VW_solo(5))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-2x3Btn",size:"large",onClick:s[27]||(s[27]=c=>a.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[6],onClick:s[28]||(s[28]=c=>a.switch3x3VW_solo(6))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[6]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[7],onClick:s[29]||(s[29]=c=>a.switch3x3VW_solo(7))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[7]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[30]||(s[30]=c=>f.stateStore.videoWallOff())})]),_:1}),t(o,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(n,{cover:"",src:l.bg_image[8],onClick:s[31]||(s[31]=c=>a.switch3x3VW_solo(8))},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[8]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw3x3-3x3Btn",size:"large",onClick:s[32]||(s[32]=c=>a.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1}),t(P,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[33]||(s[33]=c=>f.stateStore.snackbarVWOff=c),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(u,{color:"white",variant:"text"})])]),_:1},8,["modelValue"])]),_:1})}const q=p(R,[["render",G],["__scopeId","data-v-139f1b39"]]);const E={name:"VideoWall1x3",props:[],setup(){return{stateStore:I()}},data(){return{bg_image:[],vwIPs:[]}},computed:{is1x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="2"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="0"}},methods:{changeBackgroundImage(){for(const[x,s]of this.vwIPs.entries())try{this.bg_image[x]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch1x3VW(){this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){console.log("start snapshot"),this.vwIPs=this.stateStore.vwList.filter(x=>x.vwName==this.stateStore.vwSelected)[0].rxAssigned,console.log("you",this.vwIPs);for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500)},mounted(){for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let x of this.vwIPs)fetch(`http://${x}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot)}};function A(x,s,w,f,l,a){return v(),_(V,{id:"container"},{default:e(()=>[t(g,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,r(f.stateStore.vwSelected)+"-"+r(a.is1x3VideoWallOn),1)]),_:1}),t(o,{id:"vw-container"},{default:e(()=>[a.is1x3VideoWallOn?(v(),_(g,{key:0,id:"vw-1x3"},{default:e(()=>[t(d,{id:"rx-chip-1"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1}),t(o,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(n,{id:"capture-scaled1x3",src:l.bg_image[0]},null,8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1}),t(o,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1}),t(u,{id:"vw1x3-1x3Btn",size:"large",onClick:s[0]||(s[0]=c=>a.switch1x3VW())},{default:e(()=>[i("1x3")]),_:1})]),_:1})]),_:1})):(v(),_(g,{key:1,id:"vw-1x3"},{default:e(()=>[t(d,{id:"rx-chip-1"},{default:e(()=>[i(r(l.vwIPs[0]),1)]),_:1}),t(o,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(n,{src:l.bg_image[0]},null,8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(n,{src:l.bg_image[1]},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(o,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(n,{src:l.bg_image[2]},{default:e(()=>[t(d,{class:"rx-chip"},{default:e(()=>[i(r(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"]),t(u,{id:"vw1x3-1x3Btn",size:"large",onClick:s[1]||(s[1]=c=>a.switch1x3VW())},{default:e(()=>[i("1x3")]),_:1})]),_:1})]),_:1}))]),_:1}),t(P,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[2]||(s[2]=c=>f.stateStore.snackbarVWOff=c),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(u,{color:"white",variant:"text"})])]),_:1},8,["modelValue"])]),_:1})}const j=p(E,[["render",A],["__scopeId","data-v-b31a1d51"]]);const U={name:"VideowallView",components:{VideoWall2x2:O,VideoWall2x3:T,VideoWall3x3:q,VideoWall1x3:j},setup(){return{stateStore:I()}},data:()=>({active:!1}),computed:{},methods:{},beforeCreate(){},created(){this.stateStore.getFeedback(),this.getRxStatus=setInterval(this.stateStore.getFeedback,5e3)},beforeUnmount(){clearInterval(this.getRxStatus)}};function N(x,s,w,f,l,a){const c=S("VideoWall2x2"),W=S("VideoWall2x3"),k=S("VideoWall3x3"),b=S("VideoWall1x3");return v(),_(V,{id:"container",fluid:"",class:"fill-height d-flex flex-column justify-center"},{default:e(()=>[t(g,{class:"myRow"},{default:e(()=>[f.stateStore.vwTypeSelected=="2x2"?(v(),_(c,{key:0})):f.stateStore.vwTypeSelected=="2x3"?(v(),_(W,{key:1})):f.stateStore.vwTypeSelected=="3x3"?(v(),_(k,{key:2})):f.stateStore.vwTypeSelected=="1x3"?(v(),_(b,{key:3})):h("",!0)]),_:1})]),_:1})}const se=p(U,[["render",N],["__scopeId","data-v-c2557b65"]]);export{se as default};
