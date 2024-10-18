<template>
    <v-container id = 'container'>
      <v-row id = 'title' class = "d-flex justify-center text-white" ><h3>{{stateStore.vwSelected}}</h3></v-row>
      <v-col id = 'vw-container' >

        <v-row v-if = "!is2x2VideoWallOn" id ='vw-2x2' >
          <v-col cols = '6' class = "grid-2x2"><v-img cover :src= bg_image[0] @click = "switch2x2VW_solo(0)"><v-chip class = "rx-chip">{{vwIPs[0]}}</v-chip> </v-img></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img cover :src= bg_image[1] @click = "switch2x2VW_solo(1)"><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip></v-img></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img cover :src= bg_image[2] @click = "switch2x2VW_solo(2)"><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip> </v-img><v-btn id = 'vw2x2-offBtn' icon='mdi-grid-large' size='large' @click = "stateStore.videoWallOff()"></v-btn></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img cover :src= bg_image[3] @click = "switch2x2VW_solo(3)"><v-chip class = "rx-chip">{{vwIPs[3]}}</v-chip> </v-img><v-btn id = 'vw2x2-onBtn'  size='large' @click = "switch2x2VW()" >2x2</v-btn></v-col>
        </v-row>  

        <v-row v-else id ='vw-2x2' >
          <v-col cols = '6' class = "grid-2x2"><v-img id = 'capture-scaled2x' cover v-if = "is2x2VideoWallOn" :src= bg_image[0]><v-chip class = "rx-chip-scale-down">{{vwIPs[0]}}</v-chip></v-img></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip></v-img></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip> </v-img><v-btn id = 'vw2x2-offBtn' icon='mdi-grid-large' size='large' @click = "stateStore.videoWallOff()"></v-btn></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img><v-chip class = "rx-chip">{{vwIPs[3]}}</v-chip> </v-img><v-btn id = 'vw2x2-onBtn'  size='large' @click = "switch2x2VW()" >2x2</v-btn></v-col>
        </v-row>  

      </v-col>
      <v-snackbar
                    v-model="stateStore.snackbarVWOff"
                    :timeout="3000"
                    color="red"
               >    
                    Independent TV Mode
                    <template>
                         <v-btn color="white" variant="text"></v-btn>
                    </template>
      </v-snackbar>
         <!-- RX Volume section -->
         <v-row class='d-flex justify-center mt-6 '>
              <input @change = "changeVolume()" type="range" min="1" max="100" v-model = "rxVolume">
              <label class = 'text-white' for="volume"> <small>2CH Audio Volume-{{ rxVolume }}-RX{{vwIPs[0].split('.').pop()}}</small></label>
          </v-row>
    </v-container>
</template>

<script>

import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'VideoWall2x2',
  props: [],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
      bg_image: [],
      vwIPs:[],
      rxVolume: '10'

        
    }
  },
computed:{

  is2x2VideoWallOn(){
    // check the first RX to see if it is in 2x2 VW mode
    return this.stateStore.rxParams[this.vwIPs[0]].max_column == '1'? true:false
  },
   
  },
 methods: {  

  getVolume() {
      fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=cat /sys/devices/platform/1500_i2s/analog_out_vol`)
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
      fetch(`http://${this.vwIPs[0]}/cgi-bin/query.cgi?cmd=echo ${this.rxVolume} > /sys/devices/platform/1500_i2s/analog_out_vol`)
     
    },
    changeBackgroundImage(){
         for(const [index,item] of this.vwIPs.entries()){
            try{
              this.bg_image[index] = `http://${item}/capture.jpg`+'?' + Date.now();
            } catch(error) {
                console.log(error)
            }
        }
    },
     switch2x2VW_solo(_index){
      if(!this.is2x2VideoWallOn)
        this.stateStore.switch1RxOnly = true
        this.stateStore.switchAllRx = false
        this.stateStore.rxSelected = this.vwIPs[_index]
        localStorage.setItem('rxSelected',this.stateStore.rxSelected )  // set rxSelectedLabel to local storage. For case, user refreshes web page.
        this.$router.push('/videoinputs')
        
    },
    switch2x2VW(){
        this.stateStore.switch1RxOnly = false
        this.stateStore.switchAllRx = false
        this.stateStore.rxSelected = this.vwIPs[0]
        localStorage.setItem('rxSelected',this.stateStore.rxSelected )  // set rxSelectedLabel to local storage. For case, user refreshes web page.
        this.$router.push('/videoinputs')
    },

  },
 created(){

    // Initiate PRO DSX to start getting jpg /PRO DSX-RX must have updated firmware that has self polling capture_pic &
    this.vwIPs = this.stateStore.vwList.filter((item) => item.vwName == this.stateStore.vwSelected)[0].rxAssigned
    for(let item of this.vwIPs){
        // Initiate PRO DSX to start getting jpg 
        fetch(`http://${item}/cgi-bin/query.cgi?cmd=capture_pic &`, {method: 'GET',})
    }
    this.changeBackgroundImage() // get snapshot immediately
    this.snapShot = setInterval(this.changeBackgroundImage,2500)  // Update the html img tag every 2500 ms
    this.getVolume()
    this.getVolumeStatus = setInterval(this.getVolume,5000)

  },
 mounted(){
      for(let item of this.vwIPs){
        // Initiate PRO DSX to start getting jpg 
        fetch(`http://${item}/cgi-bin/query.cgi?cmd=capture_pic &`, {method: 'GET',})
    }
  },
  beforeUnmount(){
     console.log('stop snapshot')
    //Stop capture
    for(let item of this.vwIPs){
        fetch(`http://${item}/cgi-bin/query.cgi?cmd=killall capture_pic`, {method: 'GET',})
    }
     clearInterval(this.snapShot)
     clearInterval(this.getVolumeStatus)


  }

}
</script>

<style scoped>
#container{
   /* border:1px solid red; */
   height: 80vh; 
}
#title{
  /* border:1px solid orange; */
  height: 5%;
  margin:5px
}
#capture-scaled2x{
  transform:scale(2) translate(25%,25%);
  z-index:0
}
.capture-picture{
  z-index:0
}
.rx-chip{
  background-color: orange;
  color:white;
  font-size: .8em;
  z-index: 10;
}
.rx-chip-scale-down{
  background-color:orange;
  color:white;
  font-size: .8em;
  transform: scale(.5) translate(-50%,-50%);
  z-index: 10;
}
#vw-container{
  /* border:1px solid yellow; */
  height: 90%;
 
  background-size: cover;
}
#vw-2x2{
   height: 100%;
   margin:0px;
   z-index: 0;
}
.grid-2x2{
  display:flex;
  position: relative;
  border: 3px solid #263238;
  border-radius: 6px;
  height: 50%;
  padding:0px;
}
#vw2x2-onBtn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: #2196F3;
  z-index: 10;
}
#vw2x2-offBtn{
  position:absolute;
  bottom:-10%;
  right:-35px;
  color:white;
  background-color: red;
  z-index: 10;
}

</style>
