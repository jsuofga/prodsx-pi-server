<template>
 <v-container class = "container" fluid>
      <AddItachForm></AddItachForm>
  <v-col id = 'zone-label' class = "d-flex flex-column ">
    <v-row class = "d-flex justify-center text-white">
      <h2>Itach</h2> 
    </v-row>
  
    <v-row class = " myRow d-flex flex-start">
      <v-col cols = "3" v-for="(item,index) in stateStore.iTachUnits" :key="index">
          <ItachCard :itachIndex = index :itachIP = item > </ItachCard>
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
  import AddItachForm from '@/components/AddItachForm.vue'
  import ItachCard from '@/components/ItachCard.vue'



export default {
    name: 'AddItach',
    components: {AddItachForm,ItachCard},

    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
     },

    data(){
        return{

        }
    },
    methods: {
       save:function(){
        // Read user inputs and save 
          let itachAddresses = {}
          this.stateStore.iTachUnits.forEach((item,index)=>{
             itachAddresses[`itach${index+1}_ipaddress`] = item ;
          })
          // Send to Express to save in 'UserItachIPs.txt'
          fetch(`http://${this.stateStore.serverURL}/write/UserItachIPs/${JSON.stringify(itachAddresses)}`)
          .then((data)=>{
            this.$router.push('/')
          })
          .catch(error => console.log(error));

    },
    cancel(){
         this.$router.push('/')
    }
     
  },
//Life Cycle Hooks
  async created(){
    this.stateStore.showBottomNav = false; // hide BottomNav
    this.stateStore.showSideMenu = false


  },
   mounted(){
 
  },
  beforeUnmount(){

 
  }
}   

</script>

<style scoped>


</style>