<template>

    <v-container class="d-flex justify-center">

        <div id = 'myCard' class = "d-flex flex-column  align-center">
                <v-form id = 'input-ip' class = "mb-5">
                  <h5>iTach {{itachIndex +1 }}</h5>
                  <v-row >
                      <v-text-field
                      v-model = "stateStore.iTachUnits[itachIndex]"
                      :rules="ipRules"
                    ></v-text-field>
                </v-row>
                <v-row><v-img src = "@/assets/itach.png" width ="50"></v-img></v-row>
              </v-form>
                 <v-btn id = "delete-btn" density="compact" icon="mdi-trash-can" color = "red"  @click="dialog = true">
                  </v-btn>

                  <v-dialog
                    v-model="dialog"
                    width="auto"
                  >
                    <v-card
                      max-width="400"
                      prepend-icon="mdi-update"
                      text="Confirm you want to remove iTach"
                      title="Delete iTach ?"
                    >
                      <template v-slot:actions>
                        <v-btn 
                          variant="outlined"
                          class="ms-auto"
                          text="No"
                          @click= "dialog =!dialog"
                        ></v-btn>
                          <v-btn
                          variant="outlined"
                          class="ms-auto"
                          text="Remove iTach"
                          @click= trash(itachIndex)
                        ></v-btn>
                      </template>
                    </v-card>
                  </v-dialog>

   
        </div>

    </v-container>
    

</template>

<script>

import { useStateStore} from '@/stores/StateStore'

export default {
  name: 'ItachCard',
  props: [`itachIndex`,`itachIP` ],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        dialog:false,
        ipAddress: '',
        alert:false,
        ipRules: [
            v => !!v || 'IP is required',
            v => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || 'Must be valid IP address format',
        ],

    }
  },
  computed:{

  },
 methods: {
    trash:function(_itachIndex){
         this.stateStore.iTachUnits.splice(_itachIndex,1)
     },


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
  position: relative;
  border:1px solid black;
  background-color: white;
  width:200px;
  height: 200px;
  border-radius: 6px;
  
}

.feedback{
  color:red
}
#buttons-container{


}
#input-ip{
width:80%
}
#update-btn{
  margin-top:10px
}
#delete-btn{
  position: absolute;
  bottom:5px;
  right:5px
}



</style>
