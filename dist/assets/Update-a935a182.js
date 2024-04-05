import{_ as d,G as u,Y as p,H as i,I as h,J as f,P as o,N as n,W as c,B as _,O as m,Z as g,R as w,S,U as B}from"./index-4b0f3250.js";import{V as F,c as v}from"./VContainer-d018132f.js";const U={name:"Update",props:[],setup(){return{stateStore:u()}},data(){return{selectedFile:null,completion:"0%",showFileButton:!0,showUploadButton:!1,showProgressBar:!1}},computed:{},methods:{fileSelect(t){this.showFileButton=!1,this.showUploadButton=!0,this.selectedFile=t.target.files[0]},upload(){const t=`${location.hostname}:1880`,s=new FormData;this.selectedFile==null?alert("No file selected"):this.selectedFile.type=="application/x-tar"&&this.selectedFile.name=="dist.tar"?(this.showFileButton=!1,this.showUploadButton=!1,this.showProgressBar=!0,s.append("image",this.selectedFile),p.post(`http://${t}/update`,s,{onUploadProgress:e=>{console.log("upload progress:"+Math.round(e.loaded/e.total*100)+"%"),this.completion=Math.round(e.loaded/e.total*100).toString()+"%"}}).then(e=>{console.log(e.status),e.status===200?(this.stateStore.changePage("home"),this.$router.push("/"),setTimeout(function(){location.reload()},1e3)):alert("fail")}).catch(e=>{this.errors.push(e)})):alert("Wrong file.File should be dist.tar. Please contact info@octavainc.com to get correct file")}},async created(){this.stateStore.showSideMenu=!1},mounted(){}},y=t=>(S("data-v-4e693dc1"),t=t(),B(),t),b={class:"update"},k=y(()=>o("h5",null," Update dist.tar file",-1)),x={key:0,id:"input"},P={key:1,class:"field center-align"},V={key:2,id:"progress-container"},I={class:"progress"},N={class:"progressFeedback"};function C(t,s,e,M,a,l){return i(),h(F,null,{default:f(()=>[o("div",b,[k,a.showFileButton?(i(),n("div",x,[o("input",{onChange:s[0]||(s[0]=(...r)=>l.fileSelect&&l.fileSelect(...r)),id:"file-select-button",type:"file",accept:".tar"},null,32)])):c("",!0),a.showUploadButton?(i(),n("div",P,[o("button",{onClick:s[1]||(s[1]=(...r)=>l.upload&&l.upload(...r)),class:"waves-effect waves-light btn blue"},[_(v,{icon:"mdi-upload"}),m("publish upload")])])):c("",!0),a.showProgressBar?(i(),n("div",V,[o("div",I,[o("div",{class:"determinate blue",style:g({width:a.completion})},null,4)]),o("div",N,"Uploading "+w(a.completion),1)])):c("",!0)])]),_:1})}const T=d(U,[["render",C],["__scopeId","data-v-4e693dc1"]]);export{T as default};
