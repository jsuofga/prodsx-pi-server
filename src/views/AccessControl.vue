<template>
  <v-container class =" fill-height d-flex justify-center">
     <v-card id='myCard'>
      <v-card-title class ="  d-flex justify-center">
          <h4> Enter Admin Credential</h4>
      </v-card-title>
      <v-card-text >
        <v-form >
          <v-text-field label = 'Admin Password' :rules = 'inputRules' v-model = 'userInput' prepend-inner-icon="mdi-account" required >
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-row class = "d-flex justify-center">
        <!-- <h6 v-if = 'alert' class="feedback">Enter Admin Password</h6> -->
      </v-row>
      <v-row id = "buttons-container" class = "d-flex justify-center">
        <v-col class = "d-flex justify-center">
            <v-btn  color = "red" @click = "cancel" >Cancel</v-btn>
        </v-col >
            <v-col class = "d-flex justify-center">
            <v-btn  color = "blue" @click = 'submit'>Submit</v-btn>
        </v-col>
      </v-row>


    </v-card>
    
    

  </v-container>
   

</template>

<script>
  import { useStateStore} from '@/stores/StateStore'
  export default {
  name: "AccessControl",
  components:{},

  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },

  data: () => ({
   
    userInput: '',
    // alert:false,
    inputRules:[
      (v) => {
        if(v === 'octava'){
          console.log('ok')
          return true
        }else{
          return 'Enter Admin Password'
        }
      }
      
    ]
    
  }),
  computed:{


  },
  methods: {
 
submit: function() {
  if (this.userInput === 'octava') {
    this.stateStore.isAuthenticated = true;

    switch (this.stateStore.pageToAuthenticateAndRoute) {
      case 'update':
        this.$router.push('/update');
        break;
      case 'addzones':
        this.$router.push('/addzones');
        break;
      case 'addvideowalls':
        this.$router.push('/addvideowalls');
        break;
      case 'rxlistonly':
        this.$router.push('/rxlistonly');
        break;
      case 'txlistonly':
        this.$router.push('/txlistonly');
        break;
      case 'additach':
        this.$router.push('/additach');
        break;
      case 'addchannelfavorites':
        this.$router.push('/addchannelfavorites');
        break;
      case 'addpresets':
        this.$router.push('/addpresets');
        break;
      default:
        // Handle default case if necessary
        break;
    }
  } else {
    // Not authenticated
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
  
};
</script>

<style scoped>

.container{
 /* border: solid 1px red; */

}
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


</style>



