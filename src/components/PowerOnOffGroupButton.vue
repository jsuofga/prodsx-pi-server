<template>
        <v-btn-toggle id = 'group-btn' >
            <v-btn size = "x-large"  @click = "powerAll('on')" >
                <v-icon color="green">mdi-power</v-icon>
                <small class = "text-green">ON</small>
            </v-btn>
    
            <v-btn  size = "x-large" @click = "powerAll('off')" >
                <v-icon color="red">mdi-power</v-icon> 
                <small class = "text-red">Off</small>
            </v-btn>
               
      </v-btn-toggle>

</template>

<script >
  import { useStateStore} from '@/stores/StateStore'

  export default {
  name: "PowerOnOffGroupButton",
  components:{},

  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },

  data: () => ({
    
  }),
  methods: {
    powerAll(_onOff){
      this.stateStore.power_cec(_onOff)
    }
    
  },

  //Life Cycle Hooks
  created(){

  },
   mounted(){

 
  },
  beforeUnmount(){
  }

  
};
  
</script>

<style scoped>

#group-btn{
  position:absolute;
  bottom:20px;
  left:20px;
}


</style>
