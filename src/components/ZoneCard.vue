<template>
    <v-container class="d-flex justify-center">

        <div id = 'myCard' class = "d-flex flex-column  align-center">
                <label>Zone {{zoneIndex +1 }}</label> 
                 <v-btn id = "delete-btn" density="compact" icon="mdi-trash-can" color = "red"  @click="dialog = true">
                      
                  </v-btn>

                  <v-dialog
                    v-model="dialog"
                    width="auto"
                  >
                    <v-card
                      max-width="400"
                      prepend-icon="mdi-update"
                      text="Confirm you want to remove Zone"
                      title="Delete Zone ?"
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
                          text="Remove Zone"
                          @click= trash(zoneIndex)
                        ></v-btn>
                      </template>
                    </v-card>
                  </v-dialog>
              <input id = "input" class = 'inputFont' @keyup = "updateZoneName('stateStore.zoneNames[zoneIndex]')" type="text" v-model = 'stateStore.zoneNames[zoneIndex]' maxlength="10"> 
              <!-- <v-btn id = "update-btn" v-if = "isUpdate" color = 'primary'><v-icon>mdi-upload</v-icon>Update</v-btn> -->
        </div>

    </v-container>
    

</template>

<script>

  import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'ZoneCard',
  props: ['zoneIndex'],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        dialog:false,
        zoneNames: '',
        alert:false,
        // isUpdate:false,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 8) || 'Name must be less than 8 characters',
            ],

    }
  },
  computed:{

  },
 methods: {
   
    updateZoneName(_index){
      this.stateStore.zoneNames[_index] = input
    },
 
    submit:function(){
      if(this.zonename ==''){
        this.alert = true
      }else{
        this.alert = false
        // this.stateStore.saveSwitchConfigToPi(this.ipaddress)
          
      }
       this.$router.push('/')
    },
     trash:function(_zoneIndex){
         this.stateStore.zoneNames.splice(_zoneIndex,1)
         this.dialog = false
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
  position: relative;
  border:1px solid black;
  background-color: white;
  width:200px;
  height: 100px;
  border-radius: 6px;
  
}
#buttons-container{
  margin:20px;
  /* border: 1px solid green; */
}

.feedback{
  color:red
}

#input{
  border:1px solid black;
  width:80%;
  border-radius: 4px;
  font-size: 14px !important;
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
