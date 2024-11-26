<template>
    <div id = 'preview-container' v-if = "stateStore.vwTypeSelected != '1x3'" >
      <v-img class="preview" cover :src= bg_image ><v-chip v-if = "stateStore.rxSelectedLabel !=''" id='rx-label'> {{stateStore.rxSelectedLabel}}</v-chip> </v-img>
    </div>
    <div v-else >
      <v-img class = 'preview-rotate' cover :src= bg_image ><v-chip v-if = "stateStore.rxSelectedLabel !=''" id='rx-label'> {{stateStore.rxSelectedLabel}}</v-chip> </v-img>
    </div>

</template>

<script>
  //
import { useStateStore} from '@/stores/StateStore'

export default {
  name: "PreviewRX",
  props:[],
  components:{},

  setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },
  data: () => ({
      bg_image: ''

  }),
  methods: {
    changeBackgroundImage(){
         this.bg_image = `http://${this.stateStore.rxSelected}/capture.jpg`+'?' + Date.now();
    },
   
  },
  created(){
    // using the capture_pic & method. PRO DSX-TX must have updated firmware that has self polling capture_pic &
    console.log('start snapshot')
    this.changeBackgroundImage() // get snapshot immediately
    fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=capture_pic &`)  // Initiate PRO DSX to start getting jpg 
    this.snapShot = setInterval(this.changeBackgroundImage,2500)  // Update the html img tag every 2500 ms

  },
   mounted(){
    fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=capture_pic &`)  // Initiate PRO DSX to start getting jpg 
  },

  beforeUnmount(){
     console.log('stop snapshot')
     fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=killall capture_pic`)
     clearInterval(this.snapShot)
  }


};

</script>

<style scoped>

#preview-container{
  display:flex;
  justify-content: center;
}
.preview{
  position: relative;
  width: 310px;
  height: 180px;
}
.preview-rotate{
  width: 310px;
  height: 250px;
  transform: rotate(90deg) scale(.5,1);
  margin: 0px
}
#rx-label{
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  font: 1.0em sans-serif;
  color:white;
  background-color: orange;
}


</style>
