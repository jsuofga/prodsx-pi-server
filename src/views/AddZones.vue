<template>
 <v-container class = "container" fluid>
      <AddZonesForm></AddZonesForm>
  <v-col id = 'zone-label' class = "d-flex flex-column ">
    <v-row class = "d-flex justify-center text-white">
      <h2>Zones</h2> 
    </v-row>
  
    <v-row class = " myRow d-flex flex-start">
      <v-col cols = "2"   v-for="(item,index) in stateStore.zoneNames" :key="index">
          <ZoneCard :zoneIndex = index> </ZoneCard>
      </v-col>
    </v-row>

    <v-row class = " myRow d-flex justify-center ma-6"> 
        <v-btn class = " ma-6" color = "red" @click = "cancel" >Cancel</v-btn>
        <v-btn class = " ma-6"  color = "blue" @click = "save" >Save</v-btn>
    </v-row>

 </v-col>


 </v-container>


</template>

<script>

  import { useStateStore} from '@/stores/StateStore'
  import AddZonesForm from '@/components/AddZonesForm.vue'
  import ZoneCard from '@/components/ZoneCard.vue'



export default {
  name: 'AddZones',
  components: {AddZonesForm,ZoneCard},
  props: [],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        zonename: '',
        alert:false,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 8) || 'Name must be less than 8 characters',
            ],
        
         zoneNames:[]

    }
  },
  computed:{
    alert:function(){
      if(this.zonename==''){
        return true
      }else{
        return false
      }

    }

  },
 methods: {
 
    save:function(){
        // save to Pi Server file UserZoneNames.txt
          // Send to Express to save in 'UserZoneNames.txt'
          fetch(`http://${this.stateStore.serverURL}/write/UserZoneNames/${JSON.stringify(this.stateStore.zoneNames)}`)
          .then((data)=>{
            this.$router.push('/')
          })
          .catch(error => console.log(error));
      
    },

    cancel:function(){
       this.$router.push('/')
    }

  },
   
//Life Cycle Hooks
  async created(){
      this.stateStore.showSideMenu = false
  },
   mounted(){
 
  },
  beforeUnmount(){

  }
  

}
</script>

<style scoped>

#myCard{
  width:30%
}

#buttons-container{
  margin:20px;
  /* border: 1px solid green; */

}
.feedback{
  color:red
}
#zone-label{
  padding:20px;
  border-radius: 6px;
  /* background-color: #212121; */
}



</style>


