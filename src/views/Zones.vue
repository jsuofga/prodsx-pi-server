<template>
 <v-container v-if = "stateStore.rxAssignments.length == 0 " id = 'home-container' fluid class="fill-height d-flex flex-column justify-center">
    <h2 class = "text-white">Welcome. Your system needs to be configured.</h2>
    <h2 class = "text-white">Select Menu and Scan System to begin.</h2>
  </v-container>

  <v-container v-else-if = "stateStore.zoneNames.length == 0 && stateStore.vwList.length == 0" id = 'home-container' fluid class="fill-height d-flex flex-column justify-center">
    <h2 class = "text-white">Create Zone and Assign TV's to Zones</h2>
    <h2 class = "text-white">Select Menu. Goto Zones Add | Edit .</h2>
  </v-container>

  <v-container v-else  id = 'zones-container' fluid class="fill-height">
      <v-row class = "d-flex justify-center">
          <v-col cols = "3" class = " myCols d-flex justify-center" v-for="(item,index) in stateStore.zoneNames" :key="index">
              <ZoneButton :zoneBtnName = item> </ZoneButton>
          </v-col>
          <v-col cols = "3" class = " myCols d-flex justify-center" v-for="(item,index) in stateStore.vwList" :key="index">
              <VideowallButton :vwBtnName = item.vwName :vwType = item.vwType> </VideowallButton>
          </v-col>
      </v-row>
      <PowerOnOffGroupButton></PowerOnOffGroupButton>
      <SelectAllButton></SelectAllButton> 
  </v-container>
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'
  import ZoneButton from '@/components/ZoneButton.vue'
  import VideowallButton from '@/components/VideowallButton.vue'
  import PowerOnOffGroupButton from '@/components/PowerOnOffGroupButton.vue'
  import SelectAllButton from '@/components/SelectAllButton.vue'

  export default {
  name: "Zones",
  components:{ZoneButton,VideowallButton,PowerOnOffGroupButton,SelectAllButton },

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

#zones-container{
  position: relative;
}


</style>
