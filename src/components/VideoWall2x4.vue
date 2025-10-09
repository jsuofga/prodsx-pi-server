<template>
    <v-container id = 'container'>
      <v-row id = 'title' class = "d-flex justify-center text-white" ><h3>{{stateStore.vwSelected}}</h3></v-row>
      <v-col id = 'vw-container' >


        <v-row v-if = "!is2x2VideoWall_A_On && !is2x2VideoWall_B_On && !is2x4VideoWallOn" id ='vw-2x4'>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[0] @click = "switch2x4VW_solo(0)"><v-chip class = "rx-chip">{{vwIPs[0]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[1] @click = "switch2x4VW_solo(1)"><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip><v-btn id = 'vw2x4-2x2Btn'  size='large' @click.stop = "switch2x4VW('vw2x4_2x2A_on')">2x2-A</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[2] @click = "switch2x4VW_solo(2)"><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[3] @click = "switch2x4VW_solo(3)"><v-chip class = "rx-chip">{{vwIPs[3]}}</v-chip><v-btn id = 'vw2x4-2x2Btn-b'  size='large' @click.stop = "switch2x4VW('vw2x4_2x2B_on')">2x2-B</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[4] @click = "switch2x4VW_solo(4)"><v-chip class = "rx-chip">{{vwIPs[4]}}</v-chip></v-img> </v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[5] @click = "switch2x4VW_solo(5)"><v-chip class = "rx-chip">{{vwIPs[5]}}</v-chip></v-img><v-btn id = 'vw2x4-offBtn' icon='mdi-grid' size='x-large' @click.stop = "stateStore.videoWallOff()"></v-btn>   </v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[6] @click = "switch2x4VW_solo(6)"><v-chip class = "rx-chip">{{vwIPs[6]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[7] @click = "switch2x4VW_solo(7)"><v-chip class = "rx-chip">{{vwIPs[7]}}</v-chip></v-img><v-btn id = 'vw2x4-2x4Btn'  size='large' @click.stop = "switch2x4VW('vw2x4_2x4on')">2x4</v-btn></v-col>
        </v-row> 
        
        <v-row v-else-if = "is2x2VideoWall_A_On && !is2x2VideoWall_B_On && !is2x4VideoWallOn" id ='vw-2x4'>
          <v-col cols = '3' class = "grid-2x4"><v-img id = 'capture-scaled2x2' cover :src= bg_image[0] @click = "switch2x4VW_solo(0)"><v-chip class = "rx-chip-scale-down-2x2">{{vwIPs[0]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img @click = "switch2x4VW_solo(1)" ><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip><v-btn id = 'vw2x4-2x2Btn'  size='large' @click.stop = "switch2x4VW('vw2x4_2x2A_on')">2x2-A</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[2] @click = "switch2x4VW_solo(2)" ><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[3] @click = "switch2x4VW_solo(3)"><v-chip class = "rx-chip">{{vwIPs[3]}}</v-chip><v-btn id = 'vw2x4-2x2Btn-b'  size='large' @click.stop = "switch2x4VW('vw2x4_2x2B_on')">2x2-B</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img @click = "switch2x4VW_solo(4)" ><v-chip class = "rx-chip">{{vwIPs[4]}} </v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img @click = "switch2x4VW_solo(5)"><v-chip class = "rx-chip">{{vwIPs[5]}}</v-chip></v-img><v-btn id = 'vw2x4-offBtn' icon='mdi-grid' size='x-large' @click.stop = "stateStore.videoWallOff()"></v-btn>   </v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[6] @click = "switch2x4VW_solo(6)"><v-chip class = "rx-chip">{{vwIPs[6]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover :src= bg_image[7] @click = "switch2x4VW_solo(7)"><v-chip class = "rx-chip">{{vwIPs[7]}}</v-chip></v-img><v-btn id = 'vw2x4-2x4Btn'  size='large' @click.stop = "switch2x4VW('vw2x4_2x4on')">2x4</v-btn></v-col>
        </v-row> 
                
        <v-row v-else-if = "is2x2VideoWall_A_On && is2x2VideoWall_B_On && !is2x4VideoWallOn" id ='vw-2x4'>
          <v-col cols = '3' class = "grid-2x4"><v-img id = 'capture-scaled2x2' cover :src= bg_image[0] ><v-chip class = "rx-chip-scale-down-2x2">{{vwIPs[0]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img  ><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip><v-btn id = 'vw2x4-2x2Btn'  size='large' @click.stop = "switch2x4VW('vw2x4_2x2A_on')">2x2-A</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img id = 'capture-scaled2x2' cover :src= bg_image[2] ><v-chip class = "rx-chip-scale-down-2x2">{{vwIPs[2]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img  ><v-chip class = "rx-chip">{{vwIPs[3]}}</v-chip><v-btn id = 'vw2x4-2x2Btn-b'  size='large' @click.stop = "switch2x4VW('vw2x4_2x2B_on')">2x2-B</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img  ><v-chip class = "rx-chip">{{vwIPs[4]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[5]}}</v-chip></v-img><v-btn id = 'vw2x4-offBtn' icon='mdi-grid' size='x-large' @click.stop = "stateStore.videoWallOff()"></v-btn>   </v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[6]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img  ><v-chip class = "rx-chip">{{vwIPs[7]}}</v-chip></v-img><v-btn id = 'vw2x4-2x4Btn'  size='large' @click.stop = "switch2x4VW('vw2x4_2x4on')">2x4</v-btn></v-col>
        </v-row> 

        <v-row v-else-if = "is2x4VideoWallOn" id ='vw-2x4'>
          <v-col cols = '3' class = "grid-2x4"><v-img id = 'capture-scaled2x4' cover :src= bg_image[0] @click = "switch2x4VW_solo(0)"><v-chip class = "rx-chip-scale-down-2x4">{{vwIPs[0]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip><v-btn id = 'vw2x4-2x2Btn'  size='large' @click = "switch2x4VW('vw2x4_2x2A_on')">2x2-A</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[3]}}</v-chip><v-btn id = 'vw2x4-2x2Btn-b'  size='large' @click = "switch2x4VW('vw2x4_2x2B_on')">2x2-B</v-btn></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[4]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[5]}}</v-chip></v-img><v-btn id = 'vw2x4-offBtn' icon='mdi-grid' size='x-large' @click = "stateStore.videoWallOff()"></v-btn>  </v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img ><v-chip class = "rx-chip">{{vwIPs[6]}}</v-chip></v-img></v-col>
          <v-col cols = '3' class = "grid-2x4"><v-img cover ><v-chip class = "rx-chip">{{vwIPs[7]}}</v-chip></v-img><v-btn id = 'vw2x4-2x4Btn'  size='large' @click = "switch2x4VW('vw2x4_2x4on')">2x4</v-btn></v-col>
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
        <!-- <v-row class='d-flex justify-center mt-6 '>
          <input @change = "changeVolume()" type="range" min="1" max="100" v-model = "rxVolume">
          <label class = 'text-white' for="volume"> <small>2CH Audio Volume-{{ rxVolume }}-RX{{vwIPs[0].split('.').pop()}}</small></label>
      </v-row> -->
    </v-container>
   
</template>

<script>

import { useStateStore} from '@/stores/StateStore'

export default {
  name: 'VideoWall2x4',
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

  is2x2VideoWall_A_On(){
    // check the RX1 to see if it is in 2x2 VW mode
    return this.stateStore.rxParams[this.vwIPs[0]].max_row == '1' && this.stateStore.rxParams[this.vwIPs[0]].max_column == '1'? true:false
  },

  is2x2VideoWall_B_On(){
    // check the RX3 to see if it is in 2x2 VW mode
    return this.stateStore.rxParams[this.vwIPs[2]].max_row == '1' && this.stateStore.rxParams[this.vwIPs[2]].max_column == '1'? true:false
  },

  is2x4VideoWallOn(){
  // check the first RX to see if it is in 2x4 VW mode
  return this.stateStore.rxParams[this.vwIPs[0]].max_row == '1' && this.stateStore.rxParams[this.vwIPs[0]].max_column == '3'? true:false
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
    switch2x4VW_solo(_index){
        this.stateStore.switch1RxOnly = true
        this.stateStore.switchAllRx = false
        this.stateStore.rxSelected = this.vwIPs[_index]
        localStorage.setItem('rxSelected',this.stateStore.rxSelected )  // set rxSelectedLabel to local storage. For case, user refreshes web page.
        this.$router.push('/videoinputs')
    },
    switch2x4VW(_mode){
        console.log(_mode)
        this.stateStore.vw2x4Mode = _mode
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
   height: 65vh; 
}
#title{
  /* border:1px solid orange; */
  height: 5%;
  margin:5px
}
#vw-container{
  /* border:1px solid yellow; */
  height: 90%;
  background-size: cover;
}
#capture-scaled2x4{
  transform:scale(4.0,2.0) translate(38%,25%);
  z-index:0
}

.rx-chip-scale-down-2x4{
  background-color:orange;
  color:white;
  font-size: .8em;
  transform: scale(.25,.5) translate(-150%,-50%);
  z-index: 10;
} 

#capture-scaled2x2{
  transform:scale(2.0,2.0) translate(25%,25%);
  z-index:0
}
.rx-chip-scale-down-2x2{
  background-color:orange;
  color:white;
  font-size: .8em;
  transform: scale(.5,.5) translate(-50%,-50%);
  z-index: 10;
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
#vw-2x4{
  height: 100%;
  margin:0px;
   z-index:0;
}
.grid-2x4{
  display:flex;
  position: relative;
  border: 3px solid #263238;
  border-radius: 6px;
  height: 50%;
  padding:0px;
}
#vw2x4-2x2Btn, #vw2x4-2x2Btn-b,#vw2x4-2x4Btn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: #2196F3;
}
#vw2x4-offBtn{
  position:absolute;
  bottom:-10%;
  right:-32px;
  color:white;
  background-color: red;
  z-index: 10;
 
}

</style>
