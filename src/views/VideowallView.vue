<template>
  <v-container id = "container" fluid class="fill-height d-flex flex-column justify-center" >

     <v-row class = " myRow ">
      <VideoWall2x2 v-if = "stateStore.vwTypeSelected == '2x2'"> </VideoWall2x2>
      <VideoWall2x3 v-else-if = "stateStore.vwTypeSelected == '2x3'" > </VideoWall2x3>
      <VideoWall3x3 v-else-if = "stateStore.vwTypeSelected == '3x3'" > </VideoWall3x3>
      <VideoWall1x3 v-else-if = "stateStore.vwTypeSelected == '1x3'" > </VideoWall1x3>
      <VideoWall4x4 v-else-if = "stateStore.vwTypeSelected == '4x4'" > </VideoWall4x4>
     </v-row>

  </v-container>
</template>

<script >

  import { useStateStore} from '@/stores/StateStore'
  import VideoWall2x2 from '@/components/VideoWall2x2.vue'
  import VideoWall2x3 from '@/components/VideoWall2x3.vue'
  import VideoWall3x3 from '@/components/VideoWall3x3.vue'
  import VideoWall1x3 from '@/components/VideoWall1x3.vue'
  import VideoWall4x4 from '@/components/VideoWall4x4.vue'



  export default {
    name: "VideowallView",
    components: {VideoWall2x2,VideoWall2x3,VideoWall3x3,VideoWall1x3,VideoWall4x4},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
     },

    data: () => ({
        active:false
    }),
    computed: {

    },
    methods: {
     

    },
    beforeCreate(){
    
    },
    created(){
      this.stateStore.getFeedback()
      this.getRxStatus = setInterval(this.stateStore.getFeedback,5000) //repeat. 
    },
    beforeUnmount(){
      clearInterval(this.getRxStatus)
    }

  }


</script>


<style scoped>
#container{
/* border: 1px solid blue */
}
#zone-title{
         
}
.myRow{
     /* border:1px solid red; */
     width:100%;
}


</style>



