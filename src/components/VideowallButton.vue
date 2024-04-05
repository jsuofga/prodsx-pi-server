<template>
   
    <button class = "button-round" @click = 'gotoVideoWallView'>{{vwBtnName}}</button>
   
</template>

<script>

import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'VideowallButton',
  props: ['vwBtnName','vwType'],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        
    }
  },
  computed:{
    

  },
 methods: {
   gotoVideoWallView(){
    this.stateStore.vwSelected = this.vwBtnName
    this.stateStore.vwTypeSelected = this.vwType
    this.stateStore.zoneSelected = ''
    this.stateStore.rxSelected = ''
    this.stateStore.rxSelectedLabel = ''
    localStorage.setItem('rxSelected','')  
    localStorage.setItem('rxSelectedLabel','')  
    localStorage.setItem('vwSelected', this.stateStore.vwSelected) 
    localStorage.setItem('vwTypeSelected', this.stateStore.vwTypeSelected) 
    // localStorage.setItem('vwList', JSON.stringify(this.stateStore.vwList))
    this.$router.push('/videowallview')
  }   
  },
   created(){
  
    
  },
   mounted(){

 
  },
  beforeUnmount(){

  }
  

}
</script>

<style scoped>
 .button-round{
   font-size: 1.5rem;
   height:180px;
   width:180px;
   border-radius: 50%;
   background-color: #212121;
   color:white;
}
.button-round:hover{
  background-color: #2196F3;
}




</style>
