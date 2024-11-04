<template>
      <v-btn-toggle id = 'select-all-presets-btn' rounded="xl"  variant="outlined"   >
            <v-btn size = "x-large"  @click = "selectAll()" >
                <v-icon color="primary">mdi-all-inclusive</v-icon>
                <small class = "text-primary">ALL</small>
            </v-btn>
    
            <v-btn v-if = "preset1Created" size = "x-large" @click = "switchPreset(1)" >
                <small class = "text-primary">Preset</small>
                <v-icon color="primary">mdi-numeric-1</v-icon> 
            </v-btn>
            <v-btn v-if = "preset2Created" size = "x-large" @click = "switchPreset(2)" >
              <small class = "text-primary">Preset</small>
                <v-icon color="primary">mdi-numeric-2</v-icon> 
            </v-btn>
            <v-btn v-if = "preset3Created"  size = "x-large" @click = "switchPreset(3)" >
              <small class = "text-primary">Preset</small>
                <v-icon color="primary">mdi-numeric-3</v-icon> 
            </v-btn>
      </v-btn-toggle>
              

        
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'

  export default {
  name: "SelectSpeedDialButton",
  components:{},

  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },

  data: () => ({
    preset1Created:false,
    preset2Created:false,
    preset3Created:false

  }),
  methods: {
    selectAll(){
      this.stateStore.switch1RxOnly = false
      this.stateStore.vwSelected = ''
      this.stateStore.switchAllRx = true
      this.$router.push('/videoinputs')
    },

    switchPreset(_preset){
          // alert('switch preset',_preset)
          // console.log(this.stateStore.preset1)
          for(let [key,item] of Object.entries(this.stateStore.preset1) ){
            let ch = '000'
              if(item.ch <10){
                ch = `00${item.ch}`
              }else{
                ch = `0${item.ch}`
              }
              // console.log(`http://${key}/cgi-bin/query.cgi?cmd=rxswitch:${ch}`)
              fetch(`http://${key}/cgi-bin/query.cgi?cmd=rxswitch:${ch}`)
          }

          alert(`Preset${_preset}`)


        },
    
  },

  //Life Cycle Hooks
  created(){
    // read preset1
    fetch(`http://${this.stateStore.serverURL}/read/UserPreset1`,{method: 'GET',})
    .then(response => response.json())
    .then(result => {
      this.preset1Created = Object.keys(result).length > 0;   
      this.stateStore.preset1 = result             
    })
    .catch(error => {
      console.error('Error:', error);
    });
    //read preset2
    fetch(`http://${this.stateStore.serverURL}/read/UserPreset2`,{method: 'GET',})
    .then(response => response.json())
    .then(result => {
      this.preset2Created = Object.keys(result).length > 0;     
      this.stateStore.preset2 = result             
           
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // read preset3
    fetch(`http://${this.stateStore.serverURL}/read/UserPreset3`,{method: 'GET',})
    .then(response => response.json())
    .then(result => {
      this.preset3Created = Object.keys(result).length > 0; 
      this.stateStore.preset3 = result             
               
    })
    .catch(error => {
      console.error('Error:', error);
    });

  },
   mounted(){

 
  },
  beforeUnmount(){
  }

  
};
  
</script>

<style scoped>
#select-all-presets-btn{
  position:absolute;
  right:20px;
  bottom:20px
}


</style>
