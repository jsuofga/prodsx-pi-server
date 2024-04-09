<template>
  <v-container id = "container" fluid class="fill-height d-flex justify-center" >
    
    <div v-if= "stateStore.zoneSelected != ''" > 
            <h2 class = "text-white d-flex justify-center my-6">{{stateStore.zoneSelected}}</h2>
      <v-row  class = " myRow  ">
            <v-col  class = "myRow d-flex flex-row justify-center"  v-for="(item,index) in tvsInZone" :key="index">
                <DisplayRX :rxLabel = item.name :rxID = item.rxId></DisplayRX>
            </v-col>
       </v-row>
    </div>

  </v-container>
</template>

<script >

  import { useStateStore} from '@/stores/StateStore'
  import DisplayRX from '@/components/DisplayRX.vue'

  export default {
    name: "ZoneView",
    components: {DisplayRX},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
    
     },

    data: () => ({
        active:false
    }),
    
    computed: {
      tvsInZone() {
        return this.stateStore.rxAssignments.filter((item) => item.zone == this.stateStore.zoneSelected )
      }
    },

    methods: {
      onClickOutside () {
        console.log('outside')
      },

    },
    beforeCreate(){
    
    },
    created(){
      console.log('start getRxStatus')
      this.stateStore.getFeedback()
      this.getRxStatus = setInterval(this.stateStore.getFeedback,5000) //repeat. 

    },
    beforeUnmount(){
      console.log('stop getRxStatus')
      clearInterval(this.getRxStatus)
  
    }

  }


</script>


<style scoped>
#container{
/* border: 1px solid red */
}
#zone-title{
         
}
.myRow{
     /* border:1px solid red; */
}


</style>



