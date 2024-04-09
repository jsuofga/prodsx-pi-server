<template>
  <v-container id = "container" fluid class="fill-height d-flex flex-column" >
          <div id='inner-div' v-click-outside = "onClickOutside">
               <v-row id = 'rx-preview-container' class = "d-flex justify-center text-white">  
                    <PreviewRX :rxIP = 'stateStore.rxSelected' />
               </v-row>

               <v-snackbar
                    v-model="stateStore.snackbar"
                    :timeout="3000"
                    color="blue"
               >    
                    <div v-if = "stateStore.vwSelected == '' && stateStore.switchAllRx == false " >
                         {{ ` ${stateStore.rxSelectedLabel} to ${stateStore.txAssignments[parseInt(stateStore.txSelected)-1].name} `}}
                    </div>
                    <div v-else-if = "stateStore.vwSelected != '' && stateStore.switch1RxOnly == true && stateStore.switchAllRx == false " >
                         {{ ` ${stateStore.vwSelected} RX ${stateStore.rxSelected} to ${stateStore.txAssignments[parseInt(stateStore.txSelected)-1].name} `}}
                    </div>
                    <div v-else-if = "stateStore.vwSelected != '' && stateStore.switch1RxOnly == false && stateStore.switchAllRx == false "  >
                         {{ ` ${stateStore.vwSelected} to ${stateStore.txAssignments[parseInt(stateStore.txSelected)-1].name} `}}
                    </div>
                    <div v-else-if = "stateStore.switchAllRx == true "  >
                         {{ ` All TV's to ${stateStore.txAssignments[parseInt(stateStore.txSelected)-1].name} `}}
                    </div >

                    <template>
                         <v-btn color="white" variant="text"></v-btn>
                    </template>
               </v-snackbar>

               <v-row v-if = "stateStore.vwSelected == '' && stateStore.switchAllRx == false" id = "rx-label" class='d-flex justify-center pa-6 myCol'>
                    Select Video for - {{stateStore.rxSelectedLabel}}
               </v-row>
               <v-row v-else-if = "stateStore.vwSelected != '' && stateStore.switchAllRx == false" id = "rx-label" class='d-flex justify-center pa-6 myCol'>
                    Select Video for - {{stateStore.vwSelected}}
               </v-row>
               <v-row v-else-if = "stateStore.switchAllRx == true" id = "rx-label" class='d-flex justify-center pa-6 myCol'>
                    Select Video for - All TV's
               </v-row>
               <v-row class="myRow d-flex align-center">
                    <v-col  v-for="(item,index) in stateStore.txAssignments"  :key="index" class ="d-flex justify-center pl-0">
                         <SourceTX :txIndex = index  :txLabel= 'stateStore.txAssignments[index].name' :txIP = 'item.txId'/>
                    </v-col>
               </v-row> 
         </div>

  </v-container>
</template>

<script >

  import { useStateStore} from '@/stores/StateStore'
  import SourceTX from '@/components/SourceTX.vue'
  import PreviewRX from '@/components/PreviewRX.vue'
  export default {
    name: "VideoInputs",
    components: {SourceTX, PreviewRX},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
     },

    data: () => ({
        active:false
    }),

    methods: {
      onClickOutside() {
          this.stateStore.vwSelected == '' ?  this.$router.push(`/zoneview`) : this.$router.push(`/videowallview`)
      },

    },
     created(){
     },
     beforeUnmount(){

     }

  }


</script>


<style scoped>

#container{
     /* border: 1px solid red */
}
#rx-preview-container{
    /* border: solid 1px red; */
    padding:0px
}
.myRow{
     /* border:1px solid red;
     width: 100%; */
     margin:0px
}
#inner-div{
     /* border:1px solid green; */
}
#rx-label{
  color:white ;
  margin:0px;
  /* border: 1px solid red;
  background-color: black; */
}
#video-inputs{

}


</style>



