<template>
  
    <button class="button" :class= "{notDetected: (stateStore.rxParams[rxID]['chSelect'] == 'not detected' || stateStore.rxParams[rxID]['chSelect'] == 'error') }"  @click = "selectRX(rxLabel,rxID)">
       {{rxLabel}} 
       <div id='rx-label'>{{rxID}} </div>
       <div id='rx-ch-select'>{{stateStore.rxParams[rxID]['chSelect']}}</div>
    </button>

</template>


<script>
 import { useStateStore} from '@/stores/StateStore'

  export default {
    name: "DisplayRX",
    props:['rxLabel','rxID'],
    components:{},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },
    data: () => ({
      
    }),
    methods: {
      selectRX(_rxLabel,_rxID){
        this.stateStore.rxSelectedLabel = `${_rxLabel}`
        this.stateStore.rxSelected = _rxID
        this.stateStore.switch1RxOnly = true
        this.stateStore.switchAllRx = false
        localStorage.setItem('rxSelected', this.stateStore.rxSelected)  // save rxSelected to local storage. For case, user refreshes web page.
        localStorage.setItem('rxSelectedLabel', this.stateStore.rxSelectedLabel)  // save rxSelectedLabel to local storage. For case, user refreshes web page.
        this.$router.push('/videoinputs')
      }
    },
    computed:{

    }
   
  };

</script>

<style scoped>

.button {
  position: relative;
  border: 1px solid white;
  color: white;
  width: 100px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}
.button:hover {
  background-color: rgb(52,199,89);
  color: white;
}
.notDetected
{
  cursor: not-allowed;
  pointer-events: none;
  border: none;
  background-color: rgb(255,59,48);
  opacity: 0.2;
}
#rx-label{
  position: absolute;
  top:0;
  left: 0.8em;;
  font: 0.8em sans-serif;
}
#rx-ch-select{
  position:relative;
  bottom: -0.5em;
  font: 0.8em sans-serif;
}

.alert{
  border:1px solid red;
}

</style>

