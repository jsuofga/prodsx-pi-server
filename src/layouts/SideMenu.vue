<template>
      <v-navigation-drawer v-model= "stateStore.showSideMenu" >
                  <v-list-item title="PRO DSX " subtitle="Menu Items"></v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link prepend-icon="mdi-magnify" title="Scan System" @click= "this.$router.push('/devicelist')"></v-list-item>
                  <v-list-item link prepend-icon="mdi-gamepad-circle" title="Zones Add|Edit" @click= "this.$router.push('/addzones')"></v-list-item>
                  <v-list-item link prepend-icon="mdi-television" title="Receivers Edit" @click= "this.$router.push('/rxlistonly')"></v-list-item>
                  <v-list-item link prepend-icon="mdi-grid-large" title="Video Walls Add|Edit" @click= "this.$router.push('/addvideowalls')"></v-list-item>
                  <v-list-item link prepend-icon="mdi-router-network" title="Global Cache ITach|Edit" @click= "this.$router.push('/additach')"></v-list-item>
                  <v-list-item link prepend-icon="mdi-remote" title="Channel Favorites" @click= "this.$router.push('/addchannelfavorites')"></v-list-item>
                  <v-list-item link prepend-icon="mdi-upload" title="Update Software" @click= "this.$router.push('/update')"></v-list-item>
      </v-navigation-drawer>
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'
  export default {
    name: "SideMenu",
    components:{},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
     
        
    }),
    methods: {

    },
};
</script>
