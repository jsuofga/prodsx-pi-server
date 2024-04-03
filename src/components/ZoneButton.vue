<template>
   
    <button class = "button-round" @click = 'gotoZone'>{{zoneBtnName}}</button>

</template>

<script>

  import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'ZoneButton',
  props: ['zoneBtnName'],
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
   gotoZone(){
     this.stateStore.zoneSelected = this.zoneBtnName
     this.stateStore.vwSelected = ''
     this.stateStore.vwTypeSelected = ''
     localStorage.setItem('zoneSelected', this.stateStore.zoneSelected)  // save Zone selected to local storage. For case, user refreshes web page.
     this.$router.push('/zoneview')
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
  background-color: purple;
}




</style>
