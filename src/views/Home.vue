<template>

  <Zones> </Zones>

</template>

 <script > 
  import Zones from '@/views/Zones.vue'
  import { useStateStore} from '@/stores/StateStore'

  import { onBeforeRouteLeave} from 'vue-router';

  export default {
  name: 'Home',
  components:{Zones },
  props: [],
   setup(){

    onBeforeRouteLeave((to, from) => {
      // Your logic here
       stateStore.showBottomNav = true
    });
    // Pinia
    const stateStore = useStateStore()
        //
      return {stateStore}

    },
     

}
</script>





