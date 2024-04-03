<template>
  <v-app id = 'myApp'>
    <!-- <default-bar /> -->
    <AppBar />
    <!-- <default-view /> -->
    <DefaultView />
    <BottomNav />

  </v-app>
</template>

<script setup>
  import AppBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import BottomNav from './BottomNav.vue'

</script>

<style scoped>
 #myApp {
  background-color: #424242 ;
 }
</style>
