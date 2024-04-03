<template>
  <v-container class="fill-height">

      <v-row class = "d-flex justify-center">
          <v-col cols = "3" class = " myCols d-flex justify-center" v-for="(item,index) in stateStore.zoneNames" :key="index">
              <ZoneButton :zoneBtnName = item> </ZoneButton>
          </v-col>
          <v-col cols = "3" class = " myCols d-flex justify-center" v-for="(item,index) in stateStore.vwList" :key="index">
              <VideowallButton :vwBtnName = item.vwName :vwType = item.vwType> </VideowallButton>
          </v-col>

      </v-row>
      

  </v-container>
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'
  import ZoneButton from '@/components/ZoneButton.vue'
  import VideowallButton from '@/components/VideowallButton.vue'

  export default {
  name: "Zones",
  components:{ZoneButton,VideowallButton},

  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },

  data: () => ({
    
  }),
  methods: {
    
  },

  //Life Cycle Hooks
  created(){
      this.stateStore.showSideMenu = false
      this.stateStore.get_vwList()
  },
   mounted(){

 
  },
  beforeUnmount(){
  }

  
};


  
</script>

<style scoped>
.myCols{
  /* border:1px solid red */
}


</style>
