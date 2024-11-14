<template>
    <v-container class="d-flex justify-center">

     <v-card id='myCard'>
      <v-card-title class ="  d-flex justify-center">
          <h4> Add Zones</h4>
      </v-card-title>
      <v-card-text >
        <v-form >
          <v-text-field label = 'Zone Name' :rules = 'nameRules' v-model = 'zonename' prepend-inner-icon="mdi-gamepad-circle" >
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-row class = "d-flex justify-center">
        <!-- <h6 v-if = 'alert' class="feedback">Enter Zone Name</h6> -->
      </v-row>
      <v-row id = "buttons-container" class = "d-flex justify-center">
        <v-col class = "d-flex align-center flex-column">
            <div>Add to Zones</div>
            <v-btn color = "green" icon="mdi-arrow-down-bold" @click = 'add' size="large"></v-btn>
        </v-col>
      </v-row>
    </v-card>

    </v-container>
    
</template>

<script>

  import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'AddZonesForm',
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
            v => (v && v.length <= 10) || 'Name must be max 10 characters',
            ],

    }
  },
  computed:{

  },
 methods: {
 
    add:function(){
      if(this.zonename ==''){
      }else{
        this.stateStore.zoneNames[`zone${(Object.keys(this.stateStore.zoneNames).length + 1).toString()}`] = this.zonename
        this.zonename = ''
      }
   
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
.container{
 /* border: solid 1px red; */

}
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
