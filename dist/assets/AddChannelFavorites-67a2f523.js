import{_ as p,G as v,H as i,I as m,J as a,B as e,W as k,S as w,U as I,P as f,R as U,M as F,N as A,V as R,F as j,O as N}from"./index-7283fe99.js";import{V as B,a as $,b}from"./VCard-f86c6e7e.js";import{V as S,a as y}from"./VTextField-fcaf01de.js";import{V as d}from"./VRow-1312db2e.js";import{V as T}from"./VSelect-ebec9df7.js";import{V as _}from"./VCol-23f670ac.js";import{g as u}from"./VBtn-97126eee.js";import{V as C}from"./VContainer-371ac9e9.js";import{V as D}from"./VDialog-739f4968.js";import"./createSimpleFunctional-7bc56bbd.js";import"./VAvatar-ceb2d7bd.js";import"./VProgressCircular-bc0976ad.js";import"./VInput-24f456fd.js";import"./index-215ef221.js";import"./forwardRefs-e658ad70.js";import"./VOverlay-0bdf6988.js";import"./scopeId-0859c39e.js";import"./VListItem-ecdd6f43.js";import"./VDivider-92f5bd5a.js";import"./VSelectionControl-48f168da.js";import"./VChip-1471aa56.js";const P={name:"AddFavoriteChannelsForm",props:[],setup(){return{stateStore:v()}},data(){return{chName:"",alert:!1,chNumber:0,nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=8||"Name must be less than 8 characters"]}},computed:{},methods:{add:function(){if(console.log(this.chName),this.chName==="")return;let t={};t.fav_ch_name=this.chName,t.fav_ch=this.chNumber,this.stateStore.irFavChannels.push(t),this.chName="",this.chNumber=0},save:function(){},cancel:function(){this.$router.push("/")}},created(){},mounted(){},beforeUnmount(){}},g=t=>(w("data-v-0322df0b"),t=t(),I(),t),z=g(()=>f("h4",null," Add Favorite Channels",-1)),J=g(()=>f("div",null,"Add Channel",-1));function L(t,n,l,c,r,s){return i(),m(C,{class:"d-flex justify-center"},{default:a(()=>[e(b,{id:"myCard"},{default:a(()=>[e(B,{class:"d-flex justify-center"},{default:a(()=>[z]),_:1}),e($,null,{default:a(()=>[e(S,null,{default:a(()=>[e(y,{label:"Channel Name",rules:r.nameRules,modelValue:r.chName,"onUpdate:modelValue":n[0]||(n[0]=o=>r.chName=o),"prepend-inner-icon":"mdi-monitor-star"},null,8,["rules","modelValue"])]),_:1})]),_:1}),e(d,{id:"select",xs3:"",class:"d-flex justify-center my-6 mx-10"},{default:a(()=>[e(T,{modelValue:r.chNumber,"onUpdate:modelValue":n[1]||(n[1]=o=>r.chNumber=o),label:"Pick Channel",items:Array.from({length:500},(o,h)=>h+1)},null,8,["modelValue","items"])]),_:1}),this.chName!=""&&this.chNumber!=""?(i(),m(d,{key:0,id:"buttons-container",class:"d-flex justify-center"},{default:a(()=>[e(_,{class:"d-flex align-center flex-column"},{default:a(()=>[J,e(u,{color:"green",icon:"mdi-arrow-down-bold",onClick:s.add,size:"large"},null,8,["onClick"])]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1})}const M=p(P,[["render",L],["__scopeId","data-v-0322df0b"]]);const O={name:"FavChCard",props:["favoriteIndex","favoriteName","favoriteCh"],setup(){return{stateStore:v()}},data(){return{dialog:!1}},computed:{},methods:{numbersRule(t){const n=parseFloat(t);return isNaN(n)||n<=1||n>=500?"Please enter a number between 1 and less than 500":!0},trash:function(t){this.stateStore.irFavChannels.splice(t,1),this.dialog=!1}},created(){},mounted(){this.stateStore.showSideMenu=!1},beforeUnmount(){}},q={id:"myCard",class:"d-flex flex-column align-center"},E={class:"d-flex justify-center"};function G(t,n,l,c,r,s){return i(),m(C,{class:"d-flex justify-center"},{default:a(()=>[f("div",q,[e(S,{id:"input-ch",class:"mb-5"},{default:a(()=>[f("h5",E,U(l.favoriteName.toUpperCase()),1),e(d,null,{default:a(()=>[e(y,{modelValue:c.stateStore.irFavChannels[l.favoriteIndex].fav_ch,"onUpdate:modelValue":n[0]||(n[0]=o=>c.stateStore.irFavChannels[l.favoriteIndex].fav_ch=o),rules:[s.numbersRule]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(u,{id:"delete-btn",density:"compact",icon:"mdi-trash-can",color:"red",onClick:n[1]||(n[1]=o=>r.dialog=!0)}),e(D,{modelValue:r.dialog,"onUpdate:modelValue":n[4]||(n[4]=o=>r.dialog=o),width:"auto"},{default:a(()=>[e(b,{"max-width":"400","prepend-icon":"mdi-update",text:"Confirm you want to remove Fav Ch",title:"Delete Fav Ch ?"},{actions:a(()=>[e(u,{variant:"outlined",class:"ms-auto",text:"No",onClick:n[2]||(n[2]=o=>r.dialog=!r.dialog)}),e(u,{variant:"outlined",class:"ms-auto",text:"Remove Fav Ch",onClick:n[3]||(n[3]=o=>s.trash(l.favoriteIndex))})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const H=p(O,[["render",G],["__scopeId","data-v-e23e5ea3"]]),W={name:"AddChannelFavorites",components:{AddFavoriteChannelsForm:M,FavChannelCard:H},setup(){return{stateStore:v()}},data(){return{}},methods:{save(){fetch(`http://${this.stateStore.serverURL}/write/UserFavChannels/${JSON.stringify(this.stateStore.irFavChannels)}`),this.$router.push("/")},cancel(){this.$router.push("/")}},async created(){},mounted(){},beforeUnmount(){}},K=f("h2",null,"Favorite Channels",-1);function Q(t,n,l,c,r,s){const o=F("AddFavoriteChannelsForm"),h=F("FavChannelCard");return i(),m(C,{class:"container",fluid:""},{default:a(()=>[e(o),e(_,{id:"zone-label",class:"d-flex flex-column"},{default:a(()=>[e(d,{class:"d-flex justify-center text-white"},{default:a(()=>[K]),_:1}),e(d,null,{default:a(()=>[(i(!0),A(j,null,R(c.stateStore.irFavChannels,(x,V)=>(i(),m(_,{key:V},{default:a(()=>[e(h,{favoriteIndex:V,favoriteName:x.fav_ch_name,favoriteCh:x.fav_ch},null,8,["favoriteIndex","favoriteName","favoriteCh"])]),_:2},1024))),128))]),_:1}),e(d,{class:"myRow d-flex justify-center ma-6"},{default:a(()=>[e(u,{class:"ma-6",color:"red",onClick:s.cancel},{default:a(()=>[N("Cancel")]),_:1},8,["onClick"]),e(u,{class:"ma-6",color:"blue",onClick:s.save},{default:a(()=>[N("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const Ce=p(W,[["render",Q]]);export{Ce as default};