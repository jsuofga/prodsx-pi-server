<template>

    <button class="button" @click = "selectTX(txIP)">
       {{txLabel}} 
       <div id='tx-label'>{{txIP}} </div>
      <img  :src= bg_image  width="190" aspect-ratio="16/9" > 
    </button>

</template>

<script>
  //
import { useStateStore} from '@/stores/StateStore'

export default {
  name: "SourceTX",
  props:['txLabel','txIP'],
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
    selectTX(_txIP){
      let _txID = ''

    // Split the string based on '.'
      const octets = _txIP.split('.')  // split IP address to octets delimited by '.' into array . Example [192,168,2,4]
   
    // Get the last octet by retrieving the last element of the array
      let lastOctet = octets[octets.length - 1]

      _txID = lastOctet.length == 1 ? "00" + lastOctet : "0" + lastOctet
      this.stateStore.txSelected = _txID

    // Switch RX or Video Wall
    console.log(this.stateStore.vwSelected )
      if(this.stateStore.switch1RxOnly == true){
        //switch just a RX
         this.stateStore.switchRX(_txID)
         this.stateStore.snackbar = true
      }else{
        //switch a video wall
        this.stateStore.switchVW(_txID)
        this.stateStore.snackbar = true
      }
      
      
    },
    changeBackgroundImage(){
          this.bg_image = `http://${this.txIP}/capture.jpg`+'?' + Date.now();
    },
    
    
  },
  created(){
    // using the capture_pic & method. PRO DSX-TX must have updated firmware that has self polling capture_pic &
    fetch(`http://${this.txIP}/cgi-bin/query.cgi?cmd=capture_pic &`)  // Initiate PRO DSX to start getting jpg 
    this.snapShot = setInterval(this.changeBackgroundImage,2500)  // Update the html img tag every 2500 ms
  },

  beforeUnmount(){
     console.log('stop snapshot')
    //  console.log(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=killall capture_pic`)
    //  fetch(`http://${this.stateStore.rxSelected}/cgi-bin/query.cgi?cmd=killall capture_pic`)
     fetch(`http://${this.txIP}/cgi-bin/query.cgi?cmd=killall capture_pic`)
     clearInterval(this.snapShot)
  }



};

</script>

<style scoped>

.button {
  position: relative;
  border: 1px solid #212121;
  background-color:#212121;
  color: white;
  width: 200px;
  height: 150px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
  
}
button:hover{
  border:1px solid rgb(0,122,255);
  color: rgb(0,122,255);
}
#tx-label{
  position: absolute;
  top:0;
  left: 0.8em;;
  font: 0.8em sans-serif;
}



</style>
