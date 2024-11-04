<template>
  <v-container id = "container" fluid class="fill-height d-flex flex-column" >
          <div id='inner-div' v-click-outside = "onClickOutside" >
               <v-row id = 'rx-preview-container' class = "d-flex justify-center text-white">  
                    <PreviewRX :rxIP = 'stateStore.rxSelected' />
               </v-row>

               <v-snackbar
                    v-model="stateStore.snackbar"
                    :timeout="3000"
                    color="blue"
               >    
                    <div v-if = "stateStore.vwSelected == '' && stateStore.switchAllRx == false " >
                         {{ `${stateStore.rxSelectedLabel} to ${stateStore.txAssignments.find(item => item.txId === `172.31.2.${stateStore.txSelected.replace(/0/g, '')}`).name}` }}
                    </div>
                    <div v-else-if = "stateStore.vwSelected != '' && stateStore.switch1RxOnly == true && stateStore.switchAllRx == false " >
                         {{ ` ${stateStore.vwSelected} RX ${stateStore.rxSelected} to ${stateStore.txAssignments.find(item => item.txId === `172.31.2.${stateStore.txSelected.replace(/0/g, '')}`).name}` }}
                    </div>
                    <div v-else-if = "stateStore.vwSelected != '' && stateStore.switch1RxOnly == false && stateStore.switchAllRx == false "  >
                         {{ ` ${stateStore.vwSelected} to ${stateStore.txAssignments.find(item => item.txId === `172.31.2.${stateStore.txSelected.replace(/0/g, '')}`).name}` }}
                    </div>
                    <div v-else-if = "stateStore.switchAllRx == true "  >
                         {{ ` All TV's to  ${stateStore.txAssignments.find(item => item.txId === `172.31.2.${stateStore.txSelected.replace(/0/g, '')}`).name}` }}
                    </div >

                    <template>
                         <v-btn color="white" variant="text"></v-btn>
                    </template>
               </v-snackbar>

                <!-- RX Volume section -->
                 <v-row class='d-flex justify-center mt-6 '>
                    <input @change = "changeVolume()" type="range" min="1" max="100" v-model = "rxVolume">
                    <label class = 'text-white' for="volume"> <small>2CH Audio Volume-{{ rxVolume }}</small></label>
                 </v-row>

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
                         <SourceTX :txIndex = index  :txLabel= 'stateStore.txAssignments[index].name' :txIP = 'item.txId' :showRemoteBtn = 'showSelectRemoteControl[index]'/>
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
     computed:{
          showSelectRemoteControl(){
          // check how many Global Cache are installed to determn which Video Inputs can have remote access
          return (Array.from({length: this.stateStore.iTachUnits.length * 3}, (_, i) => i + 1))
          },
     },

    data: () => ({
        active:false,
        rxVolume: '10'

    }),

    methods: {
      onClickOutside() {
          this.stateStore.vwSelected == '' ?  this.$router.push(`/zoneview`) : this.$router.push(`/videowallview`)
      },
      getVolume() {
      fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`)
            .then( res => {
                return res.text()
            })
            .then( data => {
                this.rxVolume =data.trim();
            })
            .catch((error) => {
              console.log('error')
            });
    
  },
    changeVolume(){
      fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)
     
    },

    },
     created(){
          this.getVolume()
          this.getVolumeStatus = setInterval(this.getVolume,5000)

     },
     beforeUnmount(){
          clearInterval(this.getVolumeStatus)

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



