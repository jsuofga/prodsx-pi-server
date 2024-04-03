<template>
 <v-container class = "container" fluid>
      <AddVideoWallForm></AddVideoWallForm>
  <v-col id = 'zone-label' class = "d-flex flex-column ">
    <v-row class = "d-flex justify-center text-white">
      <h2>Video Walls</h2> 
    </v-row>
  
    <v-row class = " myRow d-flex flex-start">
      <v-col cols = "3" v-for="(item,index) in stateStore.vwList" :key="index">
          <VideowallCard :vwIndex = index :vwName = item.vwName> </VideowallCard>
      </v-col>

    </v-row>

    <v-row class = " myRow d-flex justify-center ma-6"> 
        <v-btn class = " ma-6" color = "red" @click = "cancel" >Cancel</v-btn>
        <v-btn class = " ma-6"  color = "primary" @click = "save" >Save</v-btn>
    </v-row>

 </v-col>

 </v-container>


</template>

<script>

  import { useStateStore} from '@/stores/StateStore'
  import AddVideoWallForm from '@/components/AddVideoWallForm.vue'
  import VideowallCard from '@/components/VideowallCard.vue'
export default {
  name: 'AddVideoWalls',
  components: {AddVideoWallForm,VideowallCard},
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

    },


  },
 methods: {
 
    save:function(){
        console.log('save this',this.stateStore.rxAssignments)
        // save to Pi Server file UserTvNames.txt
        const serverURL = '192.168.1.173:3000'
        // const serverURL = `${location.hostname}:3000`
 
        //Send to Express to save in 'UserTvNames.txt'
          fetch(`http://${serverURL}/write/UserTvNames/${JSON.stringify(this.stateStore.rxAssignments)}`)
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
        this.stateStore.get_vwList()

  },
   mounted(){

 
  },
  beforeUnmount(){
        this.stateStore.vwList = []
 
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


