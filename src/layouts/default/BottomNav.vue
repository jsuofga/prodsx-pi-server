<template>
<v-bottom-navigation bg-color= "grey-darken-4" height="60" >
  <v-btn id="button-zones-home" @click= "goHome()">
    <v-icon size="xxx-large">mdi-gamepad-circle</v-icon>
  </v-btn>

</v-bottom-navigation>
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'

  export default {
  name: "BottomNav",
  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data: () => ({
    
  }),
  methods: {
    goHome(){
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>

</style>
