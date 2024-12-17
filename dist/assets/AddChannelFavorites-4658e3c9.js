import{_ as p,G as v,H as i,I as c,J as a,B as e,S as k,V as w,W as I,P as f,U,M as F,N as A,X as j,F as R,O as N}from"./index-5dec570b.js";import{V as B,a as $,b as S}from"./VCard-1db6cdc1.js";import{V as y,a as b}from"./VTextField-d16c2a5b.js";import{V as d}from"./VRow-5856bef0.js";import{V as T}from"./VSelect-4ae6761a.js";import{V as _}from"./VCol-23de3c6f.js";import{g as u}from"./VBtn-d66199c5.js";import{V as C}from"./VContainer-b7fd082f.js";import{V as D}from"./VDialog-aeb6e4bd.js";import"./createSimpleFunctional-c69774cb.js";import"./VAvatar-5505a1af.js";import"./VProgressCircular-a6fd4390.js";import"./transition-e66e1f06.js";import"./VInput-2b930a6d.js";import"./index-52cd4fcd.js";import"./forwardRefs-e658ad70.js";import"./VOverlay-3360c569.js";import"./scopeId-4d982d6f.js";import"./VListItem-7d1823f8.js";import"./VDivider-89f48c41.js";import"./VSelectionControl-02f3ba90.js";import"./VChip-aaab13c5.js";const P={name:"AddFavoriteChannelsForm",props:[],setup(){return{stateStore:v()}},data(){return{chName:"",alert:!1,chNumber:0,nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be max 10 characters"]}},computed:{},methods:{add:function(){if(console.log(this.chName),this.chName==="")return;let t={};t.fav_ch_name=this.chName,t.fav_ch=this.chNumber,this.stateStore.irFavChannels.push(t),this.chName="",this.chNumber=0},save:function(){},cancel:function(){this.$router.push("/")}},created(){},mounted(){},beforeUnmount(){}},g=t=>(w("data-v-8949ee56"),t=t(),I(),t),z=g(()=>f("h4",null," Add Favorite Channels",-1)),J=g(()=>f("div",null,"Add Channel",-1));function L(t,n,l,m,r,s){return i(),c(C,{class:"d-flex justify-center"},{default:a(()=>[e(S,{id:"myCard"},{default:a(()=>[e(B,{class:"d-flex justify-center"},{default:a(()=>[z]),_:1}),e($,null,{default:a(()=>[e(y,null,{default:a(()=>[e(b,{label:"Channel Name",rules:r.nameRules,modelValue:r.chName,"onUpdate:modelValue":n[0]||(n[0]=o=>r.chName=o),"prepend-inner-icon":"mdi-monitor-star"},null,8,["rules","modelValue"])]),_:1})]),_:1}),e(d,{id:"select",xs3:"",class:"d-flex justify-center my-6 mx-10"},{default:a(()=>[e(T,{modelValue:r.chNumber,"onUpdate:modelValue":n[1]||(n[1]=o=>r.chNumber=o),label:"Pick Channel",items:Array.from({length:500},(o,h)=>h+1)},null,8,["modelValue","items"])]),_:1}),this.chName!=""&&this.chNumber!=""?(i(),c(d,{key:0,id:"buttons-container",class:"d-flex justify-center"},{default:a(()=>[e(_,{class:"d-flex align-center flex-column"},{default:a(()=>[J,e(u,{color:"green",icon:"mdi-arrow-down-bold",onClick:s.add,size:"large"},null,8,["onClick"])]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1})}const M=p(P,[["render",L],["__scopeId","data-v-8949ee56"]]);const O={name:"FavChCard",props:["favoriteIndex","favoriteName","favoriteCh"],setup(){return{stateStore:v()}},data(){return{dialog:!1}},computed:{},methods:{numbersRule(t){const n=parseFloat(t);return isNaN(n)||n<=1||n>=500?"Please enter a number between 1 and less than 500":!0},trash:function(t){this.stateStore.irFavChannels.splice(t,1),this.dialog=!1}},created(){},mounted(){this.stateStore.showSideMenu=!1},beforeUnmount(){}},q={id:"myCard",class:"d-flex flex-column align-center"},E={class:"d-flex justify-center"};function G(t,n,l,m,r,s){return i(),c(C,{class:"d-flex justify-center"},{default:a(()=>[f("div",q,[e(y,{id:"input-ch",class:"mb-5"},{default:a(()=>[f("h5",E,U(l.favoriteName.toUpperCase()),1),e(d,null,{default:a(()=>[e(b,{modelValue:m.stateStore.irFavChannels[l.favoriteIndex].fav_ch,"onUpdate:modelValue":n[0]||(n[0]=o=>m.stateStore.irFavChannels[l.favoriteIndex].fav_ch=o),rules:[s.numbersRule]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(u,{id:"delete-btn",density:"compact",icon:"mdi-trash-can",color:"red",onClick:n[1]||(n[1]=o=>r.dialog=!0)}),e(D,{modelValue:r.dialog,"onUpdate:modelValue":n[4]||(n[4]=o=>r.dialog=o),width:"auto"},{default:a(()=>[e(S,{"max-width":"400","prepend-icon":"mdi-update",text:"Confirm you want to remove Fav Ch",title:"Delete Fav Ch ?"},{actions:a(()=>[e(u,{variant:"outlined",class:"ms-auto",text:"No",onClick:n[2]||(n[2]=o=>r.dialog=!r.dialog)}),e(u,{variant:"outlined",class:"ms-auto",text:"Remove Fav Ch",onClick:n[3]||(n[3]=o=>s.trash(l.favoriteIndex))})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const H=p(O,[["render",G],["__scopeId","data-v-e23e5ea3"]]),W={name:"AddChannelFavorites",components:{AddFavoriteChannelsForm:M,FavChannelCard:H},setup(){return{stateStore:v()}},data(){return{}},methods:{save(){fetch(`http://${this.stateStore.serverURL}/write/UserFavChannels/${JSON.stringify(this.stateStore.irFavChannels)}`),this.$router.push("/")},cancel(){this.$router.push("/")}},async created(){},mounted(){},beforeUnmount(){}},X=f("h2",null,"Favorite Channels",-1);function K(t,n,l,m,r,s){const o=F("AddFavoriteChannelsForm"),h=F("FavChannelCard");return i(),c(C,{class:"container",fluid:""},{default:a(()=>[e(o),e(_,{id:"zone-label",class:"d-flex flex-column"},{default:a(()=>[e(d,{class:"d-flex justify-center text-white"},{default:a(()=>[X]),_:1}),e(d,null,{default:a(()=>[(i(!0),A(R,null,j(m.stateStore.irFavChannels,(x,V)=>(i(),c(_,{key:V},{default:a(()=>[e(h,{favoriteIndex:V,favoriteName:x.fav_ch_name,favoriteCh:x.fav_ch},null,8,["favoriteIndex","favoriteName","favoriteCh"])]),_:2},1024))),128))]),_:1}),e(d,{class:"myRow d-flex justify-center ma-6"},{default:a(()=>[e(u,{class:"ma-6",color:"red",onClick:s.cancel},{default:a(()=>[N("Cancel")]),_:1},8,["onClick"]),e(u,{class:"ma-6",color:"blue",onClick:s.save},{default:a(()=>[N("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const xe=p(W,[["render",K]]);export{xe as default};