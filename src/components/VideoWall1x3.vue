<template>
    <v-container id = 'container'>
      <v-row id = 'title' class = "d-flex justify-center text-white" ><h3>{{stateStore.vwSelected}}</h3></v-row>
       <v-col id = 'vw-container' >
        <v-row v-if = "is1x3VideoWallOn" id ='vw-1x3'  > 
          <v-chip id = "rx-chip-1">{{vwIPs[0]}}</v-chip> 
          <v-col cols = '4' class = "grid-1x3"><v-img id = "capture-scaled1x3" :src= bg_image[0] ></v-img></v-col>
          <v-col cols = '4' class = "grid-1x3"><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip></v-col>
          <v-col cols = '4' class = "grid-1x3"><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip><v-btn id = 'vw1x3-1x3Btn' size='large' @click = "switch1x3VW()">1x3</v-btn></v-col>
        </v-row> 

        <v-row v-else id ='vw-1x3'  > 
          <v-chip id = "rx-chip-1">{{vwIPs[0]}}</v-chip> 
          <v-col cols = '4' class = "grid-1x3"><v-img  :src= bg_image[0] ></v-img></v-col>
          <v-col cols = '4' class = "grid-1x3"><v-img  :src= bg_image[1] ><v-chip class = "rx-chip">{{vwIPs[1]}}</v-chip></v-img></v-col>
          <v-col cols = '4' class = "grid-1x3"><v-img  :src= bg_image[2] ><v-chip class = "rx-chip">{{vwIPs[2]}}</v-chip></v-img><v-btn id = 'vw1x3-1x3Btn' size='large' @click = "switch1x3VW()">1x3</v-btn></v-col>
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
    </v-container>
</template>

<script>

import { useStateStore} from '@/stores/StateStore'

export default {
  name: 'VideoWall1x3',
  props: [],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
      bg_image: [],
      vwIPs:[]
        
    }
  },
computed:{
    is1x3VideoWallOn(){
    // check the first RX to see if it is in 1x3 VW mode
    return this.stateStore.rxParams[this.vwIPs[0]].max_row == '2' && this.stateStore.rxParams[this.vwIPs[0]].max_column == '0'? true:false
  },

},
 methods: {  
    changeBackgroundImage(){
         for(const [index,item] of this.vwIPs.entries()){
            try{
              this.bg_image[index] = `http://${item}/capture.jpg`+'?' + Date.now();
            } catch(error) {
                console.log(error)
            }
        }
    },
    switch1x3VW(){
        this.stateStore.switch1RxOnly = false
        this.stateStore.switchAllRx = false
        this.stateStore.rxSelected = this.vwIPs[0]
        localStorage.setItem('rxSelected',this.stateStore.rxSelected )  // set rxSelectedLabel to local storage. For case, user refreshes web page.
        this.$router.push('/videoinputs')
    },

  },
 created(){
  console.log('start snapshot')
    // Initiate PRO DSX to start getting jpg /PRO DSX-RX must have updated firmware that has self polling capture_pic &
    this.vwIPs = this.stateStore.vwList.filter((item) => item.vwName == this.stateStore.vwSelected)[0].rxAssigned
    console.log('you',this.vwIPs)
    for(let item of this.vwIPs){
        // Initiate PRO DSX to start getting jpg 
        fetch(`http://${item}/cgi-bin/query.cgi?cmd=capture_pic &`, {method: 'GET',})
    }
    this.changeBackgroundImage() // get snapshot immediately
    this.snapShot = setInterval(this.changeBackgroundImage,2500)  // Update the html img tag every 2500 ms
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
@media only screen and (min-width: 48em){
  #capture-scaled1x3{
    transform: rotate(90deg) scale(1.8,1.7) translate(-0%,-33.3%);
    z-index:0
  }
}
@media screen and (min-width: 80em) {
    #capture-scaled1x3{
    transform: rotate(90deg) scale(1.8,2.8) translate(0%,-33%);
    z-index:0
  }
}
.rx-chip{
  background-color: orange;
  color:white;
  font-size: .8em;
  z-index: 10;
}
#rx-chip-1{
  background-color: orange;
  color:white;
  position: absolute;
  top:1px;
  left:10px;
  z-index: 100;
}
#vw-container{
  /* border:1px solid yellow; */
  height: 90%;
  background-size: cover;
  z-index: 0;
}
#vw-1x3{
  display:flex;
  position: relative;
  height: 100%;
  margin:0px;
  z-index:0;
  border: 3px solid #263238;
  background-size: cover;
}
.grid-1x3{
  border: 3px solid #263238;
  z-index:10;
  padding:0px;
  height: 100%;
}
#vw1x3-1x3Btn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: #2196F3;
}

</style>
