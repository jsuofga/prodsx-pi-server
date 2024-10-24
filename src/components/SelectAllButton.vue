<template>
        <div id = 'select-all-btn' class = "d-flex flex-column" >
            <v-btn icon="mdi-all-inclusive" color = "black" size="x-large" @click = "selectAll"></v-btn>
            <div class = "text-white">Select All</div>
        </div>

</template>

<script >
  import { useStateStore} from '@/stores/StateStore'

  export default {
  name: "SelectAllButton",
  components:{},

  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },

  data: () => ({
    
  }),
  methods: {
    selectAll(){
      this.stateStore.switch1RxOnly = false
      this.stateStore.vwSelected = ''
      this.stateStore.switchAllRx = true
      this.$router.push('/videoinputs')
    },
    
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

#select-all-btn{
  position:absolute;
  bottom:10px;
  right:50px;
}


</style>
