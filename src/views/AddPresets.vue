<template>
 <v-container class ='fill-height' fluid>


    <v-row class = 'fill-height'>
      <v-col class = 'd-flex justify-center align-center flex-column' >
        <v-btn class = "ma-6" @click = "savePreset(1)"><v-icon color="green">mdi-upload</v-icon>Save Preset1</v-btn>
        <v-btn class = "ma-6" @click = "clearPreset(1)"><v-icon color="red" >mdi-delete-forever</v-icon>Clear Preset1</v-btn>
      </v-col>
      <v-col class = 'd-flex justify-center align-center flex-column' >
        <v-btn class = "ma-6" @click = "savePreset(2)"><v-icon color="green">mdi-upload</v-icon>Save Preset2</v-btn>
        <v-btn class = "ma-6" @click = "clearPreset(2)"><v-icon color="red" >mdi-delete-forever</v-icon>Clear Preset2</v-btn>
      </v-col>
      <v-col class = 'd-flex justify-center align-center flex-column' >
        <v-btn class = "ma-6" @click = "savePreset(3)"><v-icon color="green">mdi-upload</v-icon>Save Preset3</v-btn>
        <v-btn class = "ma-6" @click = "clearPreset(3)"><v-icon color="red" >mdi-delete-forever</v-icon>Clear Preset3</v-btn>
      </v-col>
    </v-row>


 </v-container>

</template>

<script>
  import { useStateStore} from '@/stores/StateStore'
  
export default {
    name: 'AddPresets',
    components: {},

    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
    
     },

    data(){
        return{

        }
    },
    methods: {
    savePreset(_preset){
        console.log(this.stateStore.rxParams)
         //Save to server
         fetch(`http://${this.stateStore.serverURL}/write/Preset${_preset}/${JSON.stringify(this.stateStore.rxParams)}`)
        .then(()=>{
        })
        .catch(error => console.log(error));

        alert(`Saved Preset${_preset}`)
        // this.$router.push('/')
    },

    clearPreset(_preset){
         //Save to server
         let emptyObject = {}
         fetch(`http://${this.stateStore.serverURL}/write/Preset${_preset}/${JSON.stringify(emptyObject )}`)
        .then(()=>{
        })
        .catch(error => console.log(error));

        alert(`Cleared Preset${_preset}`)

        // this.$router.push('/')
    },
    cancel(){
         this.$router.push('/')
    }
     
  },
//Life Cycle Hooks
  async created(){


  },
   mounted(){

 
  },
  beforeUnmount(){

 
  }
}   

</script>

<style scoped>



</style>