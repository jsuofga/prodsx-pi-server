<template>
    <v-container class="d-flex justify-center">

        <div id = 'myCard' class = "d-flex flex-column align-center">
                <label>{{vwName}}</label> 
                <v-icon id = 'vw-type' v-if = "stateStore.vwList[vwIndex].vwType == '1x3'" icon="mdi-view-column-outline" size = large ></v-icon> 
                <v-icon id = 'vw-type' v-else-if = "stateStore.vwList[vwIndex].vwType == '2x2'" icon="mdi-grid-large" size = large ></v-icon> 
                <v-icon id = 'vw-type' v-else-if = "stateStore.vwList[vwIndex].vwType == '2x3'" icon="mdi-view-module-outline" size = x-large ></v-icon>  
                <v-icon id = 'vw-type' v-else-if = "stateStore.vwList[vwIndex].vwType == '3x3'" icon="mdi-grid" size = large ></v-icon>  
                <v-row class = "d-flex my-3">
                      <v-col id = 'vw-rx-list' cols="3" v-for= "(item,index) in stateStore.vwList[vwIndex].rxAssigned" :key="index" ><small> {{`${item.slice(7)},`}}</small></v-col> 
                </v-row>
                 <v-btn id = "delete-btn" density="compact" icon="mdi-trash-can" color = "red"  @click= "dialog = true">
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
                          text="Remove VW"
                          @click= trash(vwName)
                        ></v-btn>
                      </template>
                    </v-card>
                  </v-dialog>
              <input id = "input" class = 'inputFont my-3' @keyup = "update_vw_list(vwIndex)" type="text" v-model = 'stateStore.vwList[vwIndex].vwName' maxlength="10"> 
        </div>

    </v-container>
    

</template>

<script>

  import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'VideowallCard',
  props: ['vwIndex','vwName'],
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
   
    update_vw_list(_index){
      //update rxAssignments.vwName typed in the input field
      this.stateStore.vwList[_index].rxAssigned.forEach((rx)=>{
        this.stateStore.rxAssignments.forEach((item)=>{
          if(item.rxId == rx){
            item.vwName = this.stateStore.vwList[_index].vwName
          }
        })
      })
    },
 
    submit:function(){
      if(this.zonename ==''){
        this.alert = true
      }else{
        this.alert = false
         
      }
       this.$router.push('/')
    },
     trash:function(_vwName){
       // update rxAssignments 
       this.stateStore.rxAssignments.forEach((item,index)=>{
           if(item.vwName == _vwName){
             this.stateStore.rxAssignments[index].vwName = ''
             this.stateStore.rxAssignments[index].vwType = ''
           }
       })
       this.stateStore.get_vwList()
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
  background-color: white;
  width:200px;
  height: 200px;
  border-radius: 4px;
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
  top:1px;
  right:5px
}
#vw-rx-list{
  display:flex;
  justify-content: center;
  /* border: 1px solid red; */
  margin:2px;
  padding:0px
  /* padding:5px */
}
#vw-type{
  position: absolute;
  top:1px;
  left:5px
}


</style>
