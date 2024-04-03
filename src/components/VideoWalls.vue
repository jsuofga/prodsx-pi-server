<template>
    <v-container id = 'container'>
 
      <v-row id = 'title' class = "d-flex justify-center text-white" ><h3>{{stateStore.vwSelected}}- {{this.is2x2VideoWallOn}}</h3></v-row>

      <!-- <v-col id = 'vw-container' :style="{ backgroundImage: 'url(' + bg_image[0] + ')'}"> -->
      <v-col id = 'vw-container' :style= "{backgroundImage: is2x2VideoWallOn  ? 'url(' + bg_image[0] + ')':''}">
        <v-row v-if = "stateStore.vwTypeSelected == '1x3'" id ='vw-1x3'  > 

          <!-- <v-img  class = "rotate" :src= bg_image[2] > </v-img> -->
          <!-- <v-col cols = '4' class = "grid-1x3"><v-img class = "rotate" :src= bg_image[0] > </v-img></v-col>
          <v-col cols = '4' class = "grid-1x3"><v-img  :src= bg_image[1] > </v-img></v-col>
          <v-col cols = '4' class = "grid-1x3"><v-img  :src= bg_image[2] > </v-img></v-col> -->
        </v-row> 

        <v-row v-else-if = "stateStore.vwTypeSelected == '2x2'" id ='vw-2x2' >
          <v-col cols = '6' class = "grid-2x2"><v-img cover v-if = "!is2x2VideoWallOn" :src= bg_image[0] @click = "switch2x2VW_solo(0)"> </v-img> </v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img cover v-if = "!is2x2VideoWallOn" :src= bg_image[1] @click = "switch2x2VW_solo(1)"> </v-img></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img cover v-if = "!is2x2VideoWallOn" :src= bg_image[2] @click = "switch2x2VW_solo(2)"> </v-img><v-btn id = 'vw2x2-offBtn' icon='mdi-grid-large' size='x-large' @click = "stateStore.videoWallOff()"></v-btn></v-col>
          <v-col cols = '6' class = "grid-2x2"><v-img cover v-if = "!is2x2VideoWallOn" :src= bg_image[3] @click = "switch2x2VW_solo(3)"> </v-img><v-btn id = 'vw2x2-onBtn'  size='x-large' @click = "switch2x2VW('vw2x2_on')" >2x2</v-btn></v-col>
        </v-row>  

        <v-row v-else-if  = "stateStore.vwTypeSelected == '2x3'" id ='vw-2x3'>
          <v-col cols = '4' class = "grid-2x3"></v-col>
          <v-col cols = '4' class = "grid-2x3"></v-col>
          <v-col cols = '4' class = "grid-2x3"> </v-col>
          <v-col cols = '4' class = "grid-2x3"></v-col>
          <v-col cols = '4' class = "grid-2x3"><v-btn id = 'vw2x3-offBtn' icon='mdi-grid' size='x-large' @click = "stateStore.videoWallOff()"></v-btn><v-btn id = 'vw2x3-2x2OnBtn' @click = "switch2x3VW('vw2x3_2x2on')"  size='x-large' >2x2</v-btn> </v-col>
          <v-col cols = '4' class = "grid-2x3"><v-btn id = 'vw2x3-onBtn' size='x-large' @click = "switch2x3VW('vw2x3_2x3on')" >2x3</v-btn></v-col>
        </v-row>

        <v-row v-else-if = "stateStore.vwTypeSelected == '3x3' " id ='vw-3x3'>
          <v-col id= 'vw3x3-1' cols = '4' class = "grid-3x3"><v-img v-if = "stateStore.vw3x3_2x2On" cover :src= bg_image[0] :style= "{ transform: stateStore.vw3x3_2x2On ? 'scale(2) translate( 25%, 25%)': 'scale(0) translate( 0%, 0%)' }" > </v-img></v-col>
          <v-col id= 'vw3x3-2' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3_2x2On " cover :src= bg_image[1] :style= "{ transform: stateStore.vw3x3_2x2On ? 'scale(2) translate( 25%, 25%)': 'scale(0) translate( 0%, 0%)' }" > </v-img></v-col>
          <v-col id= 'vw3x3-3' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3On" cover :src= bg_image[2] > </v-img></v-col>
          <v-col id= 'vw3x3-4' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3_2x2On " cover :src= bg_image[3] :style= "{ transform: stateStore.vw3x3_2x2On ? 'scale(2) translate( 25%, 25%)': 'scale(0) translate( 0%, 0%)' }" > </v-img></v-col>
          <v-col id= 'vw3x3-5' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3_2x2On " cover :src= bg_image[4] :style= "{ transform: stateStore.vw3x3_2x2On ? 'scale(2) translate( 25%, 25%)': 'scale(0) translate( 0%, 0%)' }"  > </v-img><v-btn id = 'vw3x3-2x2Btn'  size='x-large' @click = "stateStore.vw_3x3_turn_2x2_on">2x2</v-btn> </v-col>
          <v-col id= 'vw3x3-6' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3On" cover :src= bg_image[5] > </v-img><v-btn id = 'vw3x3-2x3Btn'  size='x-large' >2x3</v-btn> </v-col>
          <v-col id= 'vw3x3-7' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3On" cover :src= bg_image[6] > </v-img></v-col>
          <v-col id= 'vw3x3-8' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3On" cover :src= bg_image[7] > </v-img><v-btn id = 'vw3x3-offBtn' icon='mdi-grid' size='x-large' @click ="stateStore.vw3x3On = false"></v-btn></v-col>
          <v-col id= 'vw3x3-9' cols = '4' class = "grid-3x3"><v-img v-if = "!stateStore.vw3x3On" cover :src= bg_image[8] > </v-img><v-btn id = 'vw3x3-3x3Btn' size='x-large' @click = "stateStore.vw_3x3_turn_3x3_on" >3x3</v-btn></v-col>
        </v-row> 

      </v-col>

    </v-container>
</template>

<script>

import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'VideoWalls',
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

  is2x2VideoWallOn(){
    // check the first RX to see if it is in 2x2 VW mode
    return this.stateStore.rxParams[this.vwIPs[0]].max_column == '1'? true:false
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
     switch2x2VW_solo(_index){
      if(!this.is2x2VideoWallOn)
        this.stateStore.rxSelected = this.vwIPs[_index]
        localStorage.setItem('rxSelected',this.stateStore.rxSelected )  // set rxSelectedLabel to local storage. For case, user refreshes web page.
        this.$router.push('/videoinputs')
        
    },
    switch2x2VW(_mode){
        this.stateStore.rxSelected = this.vwIPs[0]
        localStorage.setItem('rxSelected',this.stateStore.rxSelected )  // set rxSelectedLabel to local storage. For case, user refreshes web page.
        this.stateStore.vw2x2Mode = _mode
        this.$router.push('/videoinputs')
    },
  },
 created(){
    // this.stateStore.get_vwList()
      
    // Initiate PRO DSX to start getting jpg /PRO DSX-RX must have updated firmware that has self polling capture_pic &
    this.vwIPs = this.stateStore.vwList.filter((item) => item.vwName == this.stateStore.vwSelected)[0].rxAssigned
     
    for(let item of this.vwIPs){
            try{
                // Initiate PRO DSX to start getting jpg 
                fetch(`http://${item}/cgi-bin/query.cgi?cmd=capture_pic &`, {method: 'GET',})

            } catch(error) {
                console.log(error)
            }
    }
    this.snapShot = setInterval(this.changeBackgroundImage,2500)  // Update the html img tag every 2500 ms
    
  },
 mounted(){

  },
  beforeUnmount(){
     console.log('stop snapshot')

    //Stop capture
    for(let item of this.vwIPs){
            try{
                fetch(`http://${item}/cgi-bin/query.cgi?cmd=killall capture_pic`, {method: 'GET',})

            } catch(error) {
                console.log(error)
            }
    }

     clearInterval(this.snapShot)

  }
  

}
</script>

<style scoped>
#container{
   /* border:1px solid red; */
   height: 90vh; 
}
#title{
  /* border:1px solid orange; */
  height: 5%;
  margin:5px
}
#vw-container{
  border:1px solid yellow;
  height: 90%;
  background-size: cover;
}

#vw-1x3{
  display:flex;
  height: 100%;
  margin:0px;
  z-index:0;
  border: 1px solid blue;
  background-size: cover;

}
.grid-1x3{
  border: 1px solid blue;
  height: 100%;
}
#bgImage1x3{
  position: absolute;
  /* top:0px; */
  z-index:10;
   
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
  background-color: magenta;
  z-index: 10;
}
#vw2x2-offBtn{
  position:absolute;
  bottom:0px;
  right:-35px;
  color:white;
  background-color: magenta;
  z-index: 10;
}

#vw-2x3{
  height: 66%;
  margin:0px
}
.grid-2x3{
  display:flex;
  position: relative;
  border: 1px solid blue;
  height: 50%;
}
#vw2x3-onBtn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: magenta;
  z-index: 10;
}
#vw2x3-offBtn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: magenta;
  left:45%;
  z-index: 10;
}
#vw2x3-2x2OnBtn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: magenta;
  z-index: 10;
}

#vw-3x3{
  height: 100%;
  margin:0px;
   z-index:0;
}
.grid-3x3{
  display:flex;
  position: relative;
  border: 1px solid blue;
  height: 33%;
  padding:0px;
}

#vw3x3-2x2Btn,#vw3x3-2x3Btn,#vw3x3-3x3Btn{
  position:absolute;
  bottom:0px;
  right:0px;
  color:white;
  background-color: magenta;
  
}

#vw3x3-offBtn{
  position:absolute;
  bottom:0px;
  right:45%;
  color:white;
  background-color: magenta;
 
}

#img-1x3{
  /* position:absolute;
  bottom:0px; */
  border:1px solid red;
  width:100%
}
.rotate{
  transform: rotate(90deg) ;
 
}


</style>
