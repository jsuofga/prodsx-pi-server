<template>
    <v-container class="d-flex justify-center">

     <v-card id='myCard'>
      <v-card-title class ="  d-flex justify-center">
          <h4> Add Favorite Channels</h4>
      </v-card-title>
      <v-card-text >
        <v-form >
          <v-text-field label = 'Channel Name' :rules = 'nameRules' v-model = 'chName' prepend-inner-icon="mdi-monitor-star" >
          </v-text-field>
        </v-form>
        
      </v-card-text>

      <v-row id = 'select' xs3 class = "d-flex justify-center my-6 mx-10">
        <v-select  v-model= "chNumber"
          label="Pick Channel"
          :items= "Array.from({length: 500}, (_, i) => i + 1)"
        ></v-select>
      </v-row>
      <v-row v-if = "this.chName != '' && this.chNumber != '' " id = "buttons-container" class = " d-flex justify-center">
        <v-col class = "d-flex align-center flex-column">
            <div>Add Channel</div>
            <v-btn color = "green" icon="mdi-arrow-down-bold" @click = 'add' size="large"></v-btn>
        </v-col>
      </v-row>

    </v-card>

    </v-container>

</template>

<script>
import { useStateStore} from '@/stores/StateStore'
export default {
  name: 'AddFavoriteChannelsForm',
  props: [],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        chName: '',
        alert:false,
        chNumber:0,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 8) || 'Name must be less than 8 characters',
            ],

    }
  },
  computed:{
    
  },
 methods: {  

add: function() {
    console.log(this.chName)
    if (this.chName === '')return;

    let favCh = {}
    favCh[`fav_ch_name`] = this.chName
    favCh[`fav_ch`] = this.chNumber
    this.stateStore.irFavChannels.push(favCh)
    this.chName = ''
    this.chNumber = 0
},
    save:function(){

    },
    cancel:function(){
       this.$router.push('/')
    }

  },
   created(){
    
  },
   mounted(){
  },
  beforeUnmount(){

  }
  

}
</script>

<style scoped>

#myCard{
  width:30%;
  margin-bottom:20px
}
#buttons-container{
  margin:20px;
  /* border: 1px solid green; */

}
.feedback{
  color:red
}




</style>
