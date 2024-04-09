<template>
    <v-container class="d-flex justify-center">

     <v-card id = 'ip-input-card'>
            <v-card-title class="d-flex justify-center mb-10">
              Add iTachIP Units
            </v-card-title>
            <v-card-text  class = "d-flex justify-center">
              <v-form id = 'input-ip' class = "mb-5">
                  <h5>iTach IP</h5>
                  <v-row >
                      <v-text-field
                      v-model="ipAddress"
                      :rules="ipRules"
                      label="IP Address"
                    ></v-text-field>
                </v-row>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click= "submit">
                ADD
              </v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
    

</template>

<script>
import { useStateStore} from '@/stores/StateStore'
export default {
  name: 'AddItachForm',
  props: [],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {

        ipAddress:'',
        ipRules: [
            v => !!v || 'IP is required',
            v => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || 'Must be valid IP address format',
        ],

    }
  },
  computed:{
      

  },
 methods: { 
  submit:function(){  // Writes IP address from client to server file
         this.stateStore.iTachUnits.push(this.ipAddress)
         this.ipAddress = ''

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

#ip-input-card{
  width:30%;
  margin-bottom:20px
}
#input-ip{
  width:80%;
}
#buttons-container{
  margin:20px;
  /* border: 1px solid green; */

}
.feedback{
  color:red
}




</style>
