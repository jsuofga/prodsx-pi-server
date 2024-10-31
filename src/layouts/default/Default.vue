<template>
  <v-app id = 'myApp'>
    <!-- <default-bar /> -->
    <AppBar />
    <!-- <default-view /> -->
    <DefaultView />
    <BottomNav v-if = "stateStore.showBottomNav"/>

  </v-app>
</template>

<script setup>
  import { useStateStore} from '@/stores/StateStore'

  import AppBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import BottomNav from './BottomNav.vue'

  const stateStore = useStateStore();
    
</script>

<style scoped>
 #myApp {
  background-color: #424242 ;
  
 }
</style>
