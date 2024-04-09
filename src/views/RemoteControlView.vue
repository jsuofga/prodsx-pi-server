<template>
  <v-container id = "container" fluid class="fill-height d-flex justify-center" >
    <RemoteControl></RemoteControl>

  </v-container>
</template>

<script >

  import { useStateStore} from '@/stores/StateStore'
  import RemoteControl from '@/components/RemoteControl.vue'

  export default {
    name: "RemoteControlView",
    components: {RemoteControl},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
     },

    data: () => ({
      
    }),
    
    computed: {

    },

    methods: {

    },
    beforeCreate(){
    
    },
    created(){

    },
    beforeUnmount(){
   
    }

  }


</script>


<style scoped>
#container{
/* border: 1px solid red */
}


</style>



