<template>

  <v-app-bar elevation="2" height="50" app color="grey-darken-4" >
      <v-app-bar-nav-icon @click = "stateStore.showSideMenu= !stateStore.showSideMenu">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-app-bar-nav-icon>
        <v-app-bar-title class="d-flex justify-space-around">
          <v-container>
            <v-row class = "d-flex align-center">
              <v-col class = "pa-0" >
                  <div class = "text-caption"></div>
              </v-col>
              <v-col class = "pa-0">
                  <v-img src="@/assets/octava_logo.png" width = '100' height="100"> </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-app-bar-title>
        <v-chip>PRODSX 3.1
        </v-chip>
  </v-app-bar>
      <SideMenu></SideMenu>

</template>

<script >
  import { useStateStore} from '@/stores/StateStore'
  import SideMenu from '@/layouts/SideMenu.vue'

  export default {
    name: "AppBar",
    components:{SideMenu},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
      drawer:true
        
    }),
    methods: {

    },
};
</script>
