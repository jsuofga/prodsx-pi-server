<template>
 <v-container class = "container" fluid>
     <AddFavoriteChannelsForm> </AddFavoriteChannelsForm>
   
  <v-col id = 'zone-label' class = "d-flex flex-column ">

    <v-row class = "d-flex justify-center text-white">
      <h2>Favorite Channels</h2> 
    </v-row>

    <v-row >
      <v-col v-for="(item,index) in stateStore.irFavChannels" :key="index">
         <FavChannelCard :favoriteIndex = index :favoriteName = item.fav_ch_name :favoriteCh = item.fav_ch > </FavChannelCard>
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
  import AddFavoriteChannelsForm from '@/components/AddFavoriteChannelsForm.vue'
  import FavChannelCard from '@/components/FavChannelCard.vue'
  
export default {
    name: 'AddChannelFavorites',
    components: { AddFavoriteChannelsForm, FavChannelCard},

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
    save(){
        fetch(`http://${this.stateStore.serverURL}/write/UserFavChannels/${JSON.stringify(this.stateStore.irFavChannels)}`)
        this.$router.push('/')
    },
    cancel(){
         this.$router.push('/')
    }
     
  },
//Life Cycle Hooks
  async created(){


  },
   mounted(){

 
  },
  beforeUnmount(){

 
  }
}   

</script>

<style scoped>


</style>