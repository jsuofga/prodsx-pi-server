import{_ as g,G as h,H as _,I as B,J as d,P as t,R as m,B as n,O as l,N as f,V as P,F as S,S as b,U as x,M as V}from"./index-696983d4.js";import{V as v}from"./VProgressCircular-d0f3f991.js";import{g as a}from"./VBtn-d31f1150.js";import{V as $}from"./VSnackbar-0e78e22d.js";import{V as C}from"./VContainer-b9aa42ec.js";import"./VOverlay-c3cf5791.js";import"./forwardRefs-e658ad70.js";import"./scopeId-9121fffe.js";const w={name:"RemoteControl",props:[],setup(){return{stateStore:h()}},data(){return{serverURL:`${location.hostname}:1880`,btnPressed:null}},computed:{unit:function(){return Math.trunc(this.stateStore.remoteSelectedIndex/3)+1},port:function(){return this.stateStore.remoteSelectedIndex%3+1}},methods:{BtnPressed(r){this.btnPressed=`btn_${r}`,this.stateStore.snackbar=!0,fetch(`http://${this.serverURL}/sendir/unit/${this.unit}/port/${this.port}/ir/${this.btnPressed}`)},favoriteBtnPressed(r){let e=this.stateStore.irFavChannels[r].fav_ch;this.stateStore.snackbar=!0,fetch(`http://${this.serverURL}/sendir/unit/${this.unit}/port/${this.port}/irfavorite/${e}`)}}},o=r=>(b("data-v-f8f58ef0"),r=r(),x(),r),R={id:"remote-control"},I={class:"d-flex justify-center text-white"},y={class:"grid-container1"},U={class:"grid-item1"},F=o(()=>t("div",{class:"grid-item1"},null,-1)),L={class:"grid-item1"},N=o(()=>t("div",{class:"grid-item1"},null,-1)),j={class:"grid-item1"},E=o(()=>t("div",{class:"grid-item1"},null,-1)),M={class:"grid-item1"},G={class:"grid-item1"},z={class:"grid-item1"},A=o(()=>t("div",{class:"grid-item1"},null,-1)),D=o(()=>t("div",{class:"grid-item1"},null,-1)),H=o(()=>t("div",{class:"grid-item1"},null,-1)),J={class:"grid-item1"},O=o(()=>t("div",{class:"grid-item1"},null,-1)),T=o(()=>t("div",{class:"grid-item1"},null,-1)),q={class:"grid-container2"},K={class:"grid-item2"},Q={class:"grid-item2"},W={class:"grid-item2"},X={class:"grid-item2"},Y={class:"grid-item2"},Z={class:"grid-item2"},tt={class:"grid-item2"},et={class:"grid-item2"},st={class:"grid-item2"},it=o(()=>t("div",{class:"grid-item2"},"Channel",-1)),nt=o(()=>t("div",{class:"grid-item2"},null,-1)),dt={class:"grid-item2"},ot={class:"grid-item2"},rt={class:"grid-item2"},lt={class:"grid-item2"},at={class:"grid-item2"},ct=o(()=>t("div",{class:"grid-item2"},null,-1)),vt={class:"grid-item2"},_t=o(()=>t("div",{class:"grid-item2"},null,-1)),mt={class:"grid-item2"},ut={class:"grid-container3"},ft={class:"d-flex flex-column"};function gt(r,e,k,c,p,i){return _(),B(C,{id:"container",fluid:"",class:"fill-height justify-center"},{default:d(()=>[t("div",R,[t("h6",I,"Remote for "+m(c.stateStore.txAssignments[c.stateStore.remoteSelectedIndex].name),1),t("div",y,[t("div",U,[n(v,{id:"power-on",onClick:e[0]||(e[0]=s=>i.BtnPressed("on"))},{default:d(()=>[l("mdi-power")]),_:1})]),F,t("div",L,[n(v,{onClick:e[1]||(e[1]=s=>i.BtnPressed("cursor_up")),class:"material-icons btn-icons"},{default:d(()=>[l("mdi-chevron-up")]),_:1})]),N,t("div",j,[n(v,{id:"power-off",onClick:e[2]||(e[2]=s=>i.BtnPressed("off")),class:"material-icons"},{default:d(()=>[l("mdi-power")]),_:1})]),E,t("div",M,[n(v,{id:"cursor-left",onClick:e[3]||(e[3]=s=>i.BtnPressed("cursor_left")),class:"material-icons btn-icons"},{default:d(()=>[l("mdi-chevron-left")]),_:1})]),t("div",G,[t("div",{onClick:e[4]||(e[4]=s=>i.BtnPressed("cursor_enter")),class:"roundBtn"},"Select")]),t("div",z,[n(v,{id:"cursor-right",onClick:e[5]||(e[5]=s=>i.BtnPressed("cursor_right")),class:"material-icons btn-icons"},{default:d(()=>[l("mdi-chevron-right")]),_:1})]),A,D,H,t("div",J,[n(v,{onClick:e[6]||(e[6]=s=>i.BtnPressed("cursor_down")),class:"material-icons btn-icons"},{default:d(()=>[l("mdi-chevron-down")]),_:1})]),O,T]),t("div",q,[t("div",K,[n(a,{onClick:e[7]||(e[7]=s=>i.BtnPressed("guide"))},{default:d(()=>[l("Guide")]),_:1})]),t("div",Q,[t("div",{onClick:e[8]||(e[8]=s=>i.BtnPressed(1)),class:"roundBtn"},"1")]),t("div",W,[t("div",{onClick:e[9]||(e[9]=s=>i.BtnPressed(2)),class:"roundBtn"},"2")]),t("div",X,[t("div",{onClick:e[10]||(e[10]=s=>i.BtnPressed(3)),class:"roundBtn"},"3")]),t("div",Y,[n(a,{icon:"mdi-chevron-up",onClick:e[11]||(e[11]=s=>i.BtnPressed("ch_up"))})]),t("div",Z,[n(a,{onClick:e[12]||(e[12]=s=>i.BtnPressed("menu"))},{default:d(()=>[l("Menu")]),_:1})]),t("div",tt,[t("div",{onClick:e[13]||(e[13]=s=>i.BtnPressed(4)),class:"roundBtn"},"4")]),t("div",et,[t("div",{onClick:e[14]||(e[14]=s=>i.BtnPressed(5)),class:"roundBtn"},"5")]),t("div",st,[t("div",{onClick:e[15]||(e[15]=s=>i.BtnPressed(6)),class:"roundBtn"},"6")]),it,nt,t("div",dt,[t("div",{onClick:e[16]||(e[16]=s=>i.BtnPressed(7)),class:"roundBtn"},"7")]),t("div",ot,[t("div",{onClick:e[17]||(e[17]=s=>i.BtnPressed(8)),class:"roundBtn"},"8")]),t("div",rt,[t("div",{onClick:e[18]||(e[18]=s=>i.BtnPressed(9)),class:"roundBtn"},"9")]),t("div",lt,[n(a,{icon:"mdi-chevron-down",onClick:e[19]||(e[19]=s=>i.BtnPressed("ch_down"))})]),t("div",at,[n(a,{onClick:e[20]||(e[20]=s=>i.BtnPressed("exit"))},{default:d(()=>[l("Exit")]),_:1})]),ct,t("div",vt,[t("div",{onClick:e[21]||(e[21]=s=>i.BtnPressed(0)),class:"roundBtn"},"0")]),_t,t("div",mt,[n(a,{onClick:e[22]||(e[22]=s=>i.BtnPressed("enter"))},{default:d(()=>[l("Enter")]),_:1})])]),t("div",ut,[(_(!0),f(S,null,P(c.stateStore.irFavChannels,(s,u)=>(_(),f("div",{key:u,class:"grid-item3"},[n(a,{onClick:kt=>i.favoriteBtnPressed(u),class:"btn-favs",size:"large"},{default:d(()=>[t("div",ft,[t("span",null,m(s.fav_ch_name),1),t("span",null,m(s.fav_ch),1)])]),_:2},1032,["onClick"])]))),128))]),n($,{modelValue:c.stateStore.snackbar,"onUpdate:modelValue":e[23]||(e[23]=s=>c.stateStore.snackbar=s),timeout:500,color:"blue"},{default:d(()=>[l(" IR Sent ")]),_:1},8,["modelValue"])])]),_:1})}const ht=g(w,[["render",gt],["__scopeId","data-v-f8f58ef0"]]);const Bt={name:"RemoteControlView",components:{RemoteControl:ht},setup(){return{stateStore:h()}},data:()=>({}),computed:{},methods:{},beforeCreate(){},created(){},beforeUnmount(){}};function Ct(r,e,k,c,p,i){const s=V("RemoteControl");return _(),B(C,{id:"container",fluid:"",class:"fill-height d-flex justify-center"},{default:d(()=>[n(s)]),_:1})}const Rt=g(Bt,[["render",Ct],["__scopeId","data-v-5be69ccf"]]);export{Rt as default};
