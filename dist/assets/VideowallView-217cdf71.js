import{_ as V,G as p,H as v,I as g,J as e,B as t,P as m,U as a,O as i,S as h,$ as P,a0 as W,M as S}from"./index-04d2ecca.js";import{V as _}from"./VRow-923df32e.js";import{V as d}from"./VCol-1086fd37.js";import{V as u}from"./VAvatar-356a45c6.js";import{V as n}from"./VChip-1c7661eb.js";import{g as x}from"./VBtn-6e272be1.js";import{V as k}from"./VSnackbar-cc76491b.js";import{V as I}from"./VContainer-529bea97.js";import"./VProgressCircular-80b2ec0d.js";import"./transition-b8b7f7dd.js";import"./index-3d2a3d7b.js";import"./VOverlay-ef20d14b.js";import"./forwardRefs-e658ad70.js";import"./scopeId-e1473fbd.js";const O={name:"VideoWall2x2",props:[],setup(){return{stateStore:p()}},data(){return{bg_image:[],vwIPs:[],rxVolume:"10"}},computed:{is2x2VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_column=="1"}},methods:{getVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`).then(r=>r.text()).then(r=>{this.rxVolume=r.trim()}).catch(r=>{console.log("error")})},changeVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)},changeBackgroundImage(){for(const[r,s]of this.vwIPs.entries())try{this.bg_image[r]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch2x2VW_solo(r){this.is2x2VideoWallOn||(this.stateStore.switch1RxOnly=!0),this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[r],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")},switch2x2VW(){this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){this.vwIPs=this.stateStore.vwList.filter(r=>r.vwName==this.stateStore.vwSelected)[0].rxAssigned;for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500),this.getVolume(),this.getVolumeStatus=setInterval(this.getVolume,5e3)},mounted(){for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot),clearInterval(this.getVolumeStatus)}},B={class:"text-white",for:"volume"};function z(r,s,w,f,l,c){return v(),g(I,{id:"container"},{default:e(()=>[t(_,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,a(f.stateStore.vwSelected),1)]),_:1}),t(d,{id:"vw-container"},{default:e(()=>[c.is2x2VideoWallOn?(v(),g(_,{key:1,id:"vw-2x2"},{default:e(()=>[t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[c.is2x2VideoWallOn?(v(),g(u,{key:0,id:"capture-scaled2x",cover:"",src:l.bg_image[0]},{default:e(()=>[t(n,{class:"rx-chip-scale-down"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])):h("",!0)]),_:1}),t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1}),t(x,{id:"vw2x2-offBtn",icon:"mdi-grid-large",size:"large",onClick:s[6]||(s[6]=o=>f.stateStore.videoWallOff())})]),_:1}),t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1}),t(x,{id:"vw2x2-onBtn",size:"large",onClick:s[7]||(s[7]=o=>c.switch2x2VW())},{default:e(()=>[i("2x2")]),_:1})]),_:1})]),_:1})):(v(),g(_,{key:0,id:"vw-2x2"},{default:e(()=>[t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[0],onClick:s[0]||(s[0]=o=>c.switch2x2VW_solo(0))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[1],onClick:s[1]||(s[1]=o=>c.switch2x2VW_solo(1))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[2],onClick:s[2]||(s[2]=o=>c.switch2x2VW_solo(2))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw2x2-offBtn",icon:"mdi-grid-large",size:"large",onClick:s[3]||(s[3]=o=>f.stateStore.videoWallOff())})]),_:1}),t(d,{cols:"6",class:"grid-2x2"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[3],onClick:s[4]||(s[4]=o=>c.switch2x2VW_solo(3))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw2x2-onBtn",size:"large",onClick:s[5]||(s[5]=o=>c.switch2x2VW())},{default:e(()=>[i("2x2")]),_:1})]),_:1})]),_:1}))]),_:1}),t(k,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[8]||(s[8]=o=>f.stateStore.snackbarVWOff=o),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(x,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),t(_,{class:"d-flex justify-center mt-6"},{default:e(()=>[P(m("input",{onChange:s[9]||(s[9]=o=>c.changeVolume()),type:"range",min:"1",max:"100","onUpdate:modelValue":s[10]||(s[10]=o=>l.rxVolume=o)},null,544),[[W,l.rxVolume]]),m("label",B,[m("small",null,"2CH Audio Volume-"+a(l.rxVolume)+"-RX"+a(l.vwIPs[0].split(".").pop()),1)])]),_:1})]),_:1})}const R=V(O,[["render",z],["__scopeId","data-v-e97ee69b"]]);const T={name:"VideoWall2x3",props:[],setup(){return{stateStore:p()}},data(){return{bg_image:[],vwIPs:[],rxVolume:"10"}},computed:{is2x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="2"},is2x2VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="1"}},methods:{getVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`).then(r=>r.text()).then(r=>{this.rxVolume=r.trim()}).catch(r=>{console.log("error")})},changeVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)},changeBackgroundImage(){for(const[r,s]of this.vwIPs.entries())try{this.bg_image[r]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch2x3VW_solo(r){this.stateStore.switch1RxOnly=!0,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[r],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")},switch2x3VW(r){console.log(r),this.stateStore.vw2x3Mode=r,this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){this.vwIPs=this.stateStore.vwList.filter(r=>r.vwName==this.stateStore.vwSelected)[0].rxAssigned;for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500),this.getVolume(),this.getVolumeStatus=setInterval(this.getVolume,5e3)},mounted(){for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot),clearInterval(this.getVolumeStatus)}},q={class:"text-white",for:"volume"};function A(r,s,w,f,l,c){return v(),g(I,{id:"container"},{default:e(()=>[t(_,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,a(f.stateStore.vwSelected),1)]),_:1}),t(d,{id:"vw-container"},{default:e(()=>[!c.is2x2VideoWallOn&&!c.is2x3VideoWallOn?(v(),g(_,{key:0,id:"vw-2x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[0],onClick:s[0]||(s[0]=o=>c.switch2x3VW_solo(0))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[1],onClick:s[1]||(s[1]=o=>c.switch2x3VW_solo(1))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[2],onClick:s[2]||(s[2]=o=>c.switch2x3VW_solo(2))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[3],onClick:s[3]||(s[3]=o=>c.switch2x3VW_solo(3))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[4],onClick:s[4]||(s[4]=o=>c.switch2x3VW_solo(4))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw2x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[5]||(s[5]=o=>f.stateStore.videoWallOff())}),t(x,{id:"vw2x3-2x2OnBtn",onClick:s[6]||(s[6]=o=>c.switch2x3VW("vw2x3_2x2on")),size:"large"},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[5],onClick:s[7]||(s[7]=o=>c.switch2x3VW_solo(5))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw2x3-onBtn",size:"large",onClick:s[8]||(s[8]=o=>c.switch2x3VW("vw2x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1})]),_:1})):h("",!0),c.is2x3VideoWallOn?(v(),g(_,{key:1,id:"vw-2x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[c.is2x3VideoWallOn?(v(),g(u,{key:0,id:"capture-scaled2x3",cover:"",src:l.bg_image[0]},{default:e(()=>[t(n,{class:"rx-chip-scale-down-2x3"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])):h("",!0)]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1}),t(x,{id:"vw2x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[9]||(s[9]=o=>f.stateStore.videoWallOff())}),t(x,{id:"vw2x3-2x2OnBtn",onClick:s[10]||(s[10]=o=>c.switch2x3VW("vw2x3_2x2on")),size:"large"},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1}),t(x,{id:"vw2x3-onBtn",size:"large",onClick:s[11]||(s[11]=o=>c.switch2x3VW("vw2x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1})]),_:1})):h("",!0),c.is2x2VideoWallOn?(v(),g(_,{key:2,id:"vw-2x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[c.is2x2VideoWallOn?(v(),g(u,{key:0,id:"capture-scaled2x2",cover:"",src:l.bg_image[0]},{default:e(()=>[t(n,{class:"rx-chip-scale-down-2x2"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])):h("",!0)]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[2],onClick:s[12]||(s[12]=o=>c.switch2x3VW_solo(2))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1}),t(x,{id:"vw2x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[13]||(s[13]=o=>f.stateStore.videoWallOff())}),t(x,{id:"vw2x3-2x2OnBtn",onClick:s[14]||(s[14]=o=>c.switch2x3VW("vw2x3_2x2on")),size:"large"},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-2x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[5],onClick:s[15]||(s[15]=o=>c.switch2x3VW_solo(5))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw2x3-onBtn",size:"large",onClick:s[16]||(s[16]=o=>c.switch2x3VW("vw2x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1}),t(k,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[17]||(s[17]=o=>f.stateStore.snackbarVWOff=o),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(x,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),t(_,{class:"d-flex justify-center mt-6"},{default:e(()=>[P(m("input",{onChange:s[18]||(s[18]=o=>c.changeVolume()),type:"range",min:"1",max:"100","onUpdate:modelValue":s[19]||(s[19]=o=>l.rxVolume=o)},null,544),[[W,l.rxVolume]]),m("label",q,[m("small",null,"2CH Audio Volume-"+a(l.rxVolume)+"-RX"+a(l.vwIPs[0].split(".").pop()),1)])]),_:1})]),_:1})}const U=V(T,[["render",A],["__scopeId","data-v-fdaccfab"]]);const j={name:"VideoWall3x3",props:[],setup(){return{stateStore:p()}},data(){return{bg_image:[],vwIPs:[],rxVolume:"10"}},computed:{is2x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="2"},is2x2VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="1"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="1"},is3x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="2"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="2"}},methods:{getVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`).then(r=>r.text()).then(r=>{this.rxVolume=r.trim()}).catch(r=>{console.log("error")})},changeVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)},changeBackgroundImage(){for(const[r,s]of this.vwIPs.entries())try{this.bg_image[r]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch3x3VW_solo(r){this.stateStore.switch1RxOnly=!0,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[r],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")},switch3x3VW(r){console.log(r),this.stateStore.vw3x3Mode=r,this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){this.vwIPs=this.stateStore.vwList.filter(r=>r.vwName==this.stateStore.vwSelected)[0].rxAssigned;for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500),this.getVolume(),this.getVolumeStatus=setInterval(this.getVolume,5e3)},mounted(){for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot),clearInterval(this.getVolumeStatus)}},G={class:"text-white",for:"volume"};function E(r,s,w,f,l,c){return v(),g(I,{id:"container"},{default:e(()=>[t(_,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,a(f.stateStore.vwSelected),1)]),_:1}),t(d,{id:"vw-container"},{default:e(()=>[!c.is2x2VideoWallOn&&!c.is2x3VideoWallOn&&!c.is3x3VideoWallOn?(v(),g(_,{key:0,id:"vw-3x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[0],onClick:s[0]||(s[0]=o=>c.switch3x3VW_solo(0))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[1],onClick:s[1]||(s[1]=o=>c.switch3x3VW_solo(1))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[2],onClick:s[2]||(s[2]=o=>c.switch3x3VW_solo(2))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[3],onClick:s[3]||(s[3]=o=>c.switch3x3VW_solo(3))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[4],onClick:s[4]||(s[4]=o=>c.switch3x3VW_solo(4))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-2x2Btn",size:"large",onClick:s[5]||(s[5]=o=>c.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[5],onClick:s[6]||(s[6]=o=>c.switch3x3VW_solo(5))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-2x3Btn",size:"large",onClick:s[7]||(s[7]=o=>c.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[6],onClick:s[8]||(s[8]=o=>c.switch3x3VW_solo(6))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[6]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[7],onClick:s[9]||(s[9]=o=>c.switch3x3VW_solo(7))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[7]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"x-large",onClick:s[10]||(s[10]=o=>f.stateStore.videoWallOff())})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[8],onClick:s[11]||(s[11]=o=>c.switch3x3VW_solo(8))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[8]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-3x3Btn",size:"large",onClick:s[12]||(s[12]=o=>c.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):c.is3x3VideoWallOn?(v(),g(_,{key:1,id:"vw-3x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{id:"capture-scaled3x3",cover:"",src:l.bg_image[0]},{default:e(()=>[t(n,{class:"rx-chip-scale-down-3x3"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-2x2Btn",size:"large",onClick:s[13]||(s[13]=o=>c.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-2x3Btn",size:"large",onClick:s[14]||(s[14]=o=>c.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[6]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[7]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[15]||(s[15]=o=>f.stateStore.videoWallOff())})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[8]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-3x3Btn",size:"large",onClick:s[16]||(s[16]=o=>c.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):c.is2x3VideoWallOn?(v(),g(_,{key:2,id:"vw-3x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{id:"capture-scaled2x3",cover:"",src:l.bg_image[0]},{default:e(()=>[t(n,{class:"rx-chip-scale-down-2x3"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-2x2Btn",size:"large",onClick:s[17]||(s[17]=o=>c.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-2x3Btn",size:"large",onClick:s[18]||(s[18]=o=>c.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[6],onClick:s[19]||(s[19]=o=>c.switch3x3VW_solo(6))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[6]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[7],onClick:s[20]||(s[20]=o=>c.switch3x3VW_solo(7))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[7]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[21]||(s[21]=o=>f.stateStore.videoWallOff())})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[8],onClick:s[22]||(s[22]=o=>c.switch3x3VW_solo(8))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[8]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-3x3Btn",size:"large",onClick:s[23]||(s[23]=o=>c.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):c.is2x2VideoWallOn?(v(),g(_,{key:3,id:"vw-3x3"},{default:e(()=>[t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{id:"capture-scaled2x2",cover:"",src:l.bg_image[0]},{default:e(()=>[t(n,{class:"rx-chip-scale-down-2x2"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[2],onClick:s[24]||(s[24]=o=>c.switch3x3VW_solo(2))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[3]),1)]),_:1})]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[4]),1)]),_:1})]),_:1}),t(x,{id:"vw3x3-2x2Btn",size:"large",onClick:s[25]||(s[25]=o=>c.switch3x3VW("vw3x3_2x2on"))},{default:e(()=>[i("2x2")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[5],onClick:s[26]||(s[26]=o=>c.switch3x3VW_solo(5))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[5]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-2x3Btn",size:"large",onClick:s[27]||(s[27]=o=>c.switch3x3VW("vw3x3_2x3on"))},{default:e(()=>[i("2x3")]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[6],onClick:s[28]||(s[28]=o=>c.switch3x3VW_solo(6))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[6]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[7],onClick:s[29]||(s[29]=o=>c.switch3x3VW_solo(7))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[7]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-offBtn",icon:"mdi-grid",size:"large",onClick:s[30]||(s[30]=o=>f.stateStore.videoWallOff())})]),_:1}),t(d,{cols:"4",class:"grid-3x3"},{default:e(()=>[t(u,{cover:"",src:l.bg_image[8],onClick:s[31]||(s[31]=o=>c.switch3x3VW_solo(8))},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[8]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw3x3-3x3Btn",size:"large",onClick:s[32]||(s[32]=o=>c.switch3x3VW("vw3x3_3x3on"))},{default:e(()=>[i("3x3")]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1}),t(k,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[33]||(s[33]=o=>f.stateStore.snackbarVWOff=o),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(x,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),t(_,{class:"d-flex justify-center mt-6"},{default:e(()=>[P(m("input",{onChange:s[34]||(s[34]=o=>c.changeVolume()),type:"range",min:"1",max:"100","onUpdate:modelValue":s[35]||(s[35]=o=>l.rxVolume=o)},null,544),[[W,l.rxVolume]]),m("label",G,[m("small",null,"2CH Audio Volume-"+a(l.rxVolume)+"-RX"+a(l.vwIPs[0].split(".").pop()),1)])]),_:1})]),_:1})}const M=V(j,[["render",E],["__scopeId","data-v-c1607801"]]);const N={name:"VideoWall1x3",props:[],setup(){return{stateStore:p()}},data(){return{bg_image:[],vwIPs:[],rxVolume:"10"}},computed:{is1x3VideoWallOn(){return this.stateStore.rxParams[this.vwIPs[0]].max_row=="2"&&this.stateStore.rxParams[this.vwIPs[0]].max_column=="0"}},methods:{getVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`).then(r=>r.text()).then(r=>{this.rxVolume=r.trim()}).catch(r=>{console.log("error")})},changeVolume(){fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)},changeBackgroundImage(){for(const[r,s]of this.vwIPs.entries())try{this.bg_image[r]=`http://${s}/capture.jpg?`+Date.now()}catch(w){console.log(w)}},switch1x3VW(){this.stateStore.switch1RxOnly=!1,this.stateStore.switchAllRx=!1,this.stateStore.rxSelected=this.vwIPs[0],localStorage.setItem("rxSelected",this.stateStore.rxSelected),this.$router.push("/videoinputs")}},created(){console.log("start snapshot"),this.vwIPs=this.stateStore.vwList.filter(r=>r.vwName==this.stateStore.vwSelected)[0].rxAssigned,console.log("you",this.vwIPs);for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"});this.changeBackgroundImage(),this.snapShot=setInterval(this.changeBackgroundImage,2500),this.getVolume(),this.getVolumeStatus=setInterval(this.getVolume,5e3)},mounted(){for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=capture_pic &`,{method:"GET"})},beforeUnmount(){console.log("stop snapshot");for(let r of this.vwIPs)fetch(`http://${r}/cgi-bin/query.cgi?cmd=killall capture_pic`,{method:"GET"});clearInterval(this.snapShot),clearInterval(this.getVolumeStatus)}},D={class:"text-white",for:"volume"};function H(r,s,w,f,l,c){return v(),g(I,{id:"container"},{default:e(()=>[t(_,{id:"title",class:"d-flex justify-center text-white"},{default:e(()=>[m("h3",null,a(f.stateStore.vwSelected),1)]),_:1}),t(d,{id:"vw-container"},{default:e(()=>[c.is1x3VideoWallOn?(v(),g(_,{key:0,id:"vw-1x3"},{default:e(()=>[t(n,{id:"rx-chip-1"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1}),t(d,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(u,{id:"capture-scaled1x3",src:l.bg_image[0]},null,8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1}),t(d,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1}),t(x,{id:"vw1x3-1x3Btn",size:"large",onClick:s[0]||(s[0]=o=>c.switch1x3VW())},{default:e(()=>[i("1x3")]),_:1})]),_:1})]),_:1})):(v(),g(_,{key:1,id:"vw-1x3"},{default:e(()=>[t(n,{id:"rx-chip-1"},{default:e(()=>[i(a(l.vwIPs[0]),1)]),_:1}),t(d,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(u,{src:l.bg_image[0]},null,8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(u,{src:l.bg_image[1]},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[1]),1)]),_:1})]),_:1},8,["src"])]),_:1}),t(d,{cols:"4",class:"grid-1x3"},{default:e(()=>[t(u,{src:l.bg_image[2]},{default:e(()=>[t(n,{class:"rx-chip"},{default:e(()=>[i(a(l.vwIPs[2]),1)]),_:1})]),_:1},8,["src"]),t(x,{id:"vw1x3-1x3Btn",size:"large",onClick:s[1]||(s[1]=o=>c.switch1x3VW())},{default:e(()=>[i("1x3")]),_:1})]),_:1})]),_:1}))]),_:1}),t(k,{modelValue:f.stateStore.snackbarVWOff,"onUpdate:modelValue":s[2]||(s[2]=o=>f.stateStore.snackbarVWOff=o),timeout:3e3,color:"red"},{default:e(()=>[i(" Independent TV Mode "),m("template",null,[t(x,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),t(_,{class:"d-flex justify-center mt-6"},{default:e(()=>[P(m("input",{onChange:s[3]||(s[3]=o=>c.changeVolume()),type:"range",min:"1",max:"100","onUpdate:modelValue":s[4]||(s[4]=o=>l.rxVolume=o)},null,544),[[W,l.rxVolume]]),m("label",D,[m("small",null,"2CH Audio Volume-"+a(l.rxVolume)+"-RX"+a(l.vwIPs[0].split(".").pop()),1)])]),_:1})]),_:1})}const L=V(N,[["render",H],["__scopeId","data-v-68a5294c"]]);const X={name:"VideowallView",components:{VideoWall2x2:R,VideoWall2x3:U,VideoWall3x3:M,VideoWall1x3:L},setup(){return{stateStore:p()}},data:()=>({active:!1}),computed:{},methods:{},beforeCreate(){},created(){this.stateStore.getFeedback(),this.getRxStatus=setInterval(this.stateStore.getFeedback,5e3)},beforeUnmount(){clearInterval(this.getRxStatus)}};function F(r,s,w,f,l,c){const o=S("VideoWall2x2"),b=S("VideoWall2x3"),y=S("VideoWall3x3"),C=S("VideoWall1x3");return v(),g(I,{id:"container",fluid:"",class:"fill-height d-flex flex-column justify-center"},{default:e(()=>[t(_,{class:"myRow"},{default:e(()=>[f.stateStore.vwTypeSelected=="2x2"?(v(),g(o,{key:0})):f.stateStore.vwTypeSelected=="2x3"?(v(),g(b,{key:1})):f.stateStore.vwTypeSelected=="3x3"?(v(),g(y,{key:2})):f.stateStore.vwTypeSelected=="1x3"?(v(),g(C,{key:3})):h("",!0)]),_:1})]),_:1})}const ce=V(X,[["render",F],["__scopeId","data-v-c2557b65"]]);export{ce as default};
