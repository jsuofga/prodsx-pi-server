<template>

    <v-container class="d-flex justify-center">

        <div id = 'myCard' class = "d-flex flex-column  align-center">
                <v-form id = 'input-ch' class = "mb-5">
                  <h5 class = "d-flex justify-center">{{favoriteName.toUpperCase()}}</h5>
                  <v-row >
                      <v-text-field
                      v-model = "stateStore.irFavChannels[favoriteIndex].fav_ch"
                      :rules="[numbersRule]"
                    ></v-text-field>
                </v-row>
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
                      text="Confirm you want to remove Fav Ch"
                      title="Delete Fav Ch ?"
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
                          text="Remove Fav Ch"
                          @click= trash(favoriteIndex)
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
  name: 'FavChCard',
  props: ['favoriteIndex','favoriteName','favoriteCh'],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        dialog:false,
    }
  },
  computed:{

  },
 methods: {
  numbersRule(value) {
      const num = parseFloat(value);
      if (isNaN(num) || num <= 1 || num >= 500) {
        return 'Please enter a number between 1 and less than 500';
      }
        return true;
    },
    trash:function(_favoriteIndex){
         this.stateStore.irFavChannels.splice(_favoriteIndex,1)
         this.dialog = false
     },

  },
   created(){
    
  },
   mounted(){
   this.stateStore.showSideMenu = false
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
  width:120px;
  height: 120px;
  border-radius: 6px;
}
#buttons-container{

}
#input-ch{
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
