<template>
  
  <v-container id="myContainer" fluid  >
    <v-row  class = " d-flex justify-end my-3">
      <v-btn class = "mx-3" @click = "cancel" color = "red">Cancel</v-btn>
      <v-btn class = "mx-3 " @click = "save" color = "blue" >SAVE</v-btn>
    </v-row>
     <v-table id = 'device-table' >
          <thead>
            <tr >
                <th>RX IP</th> 
                <th>Assign RX</th>
                <th>RX Name</th>
                <th>Zone Name</th>
                <th>Video Wall</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in stateStore.rxAssignments" :key="index" :class = "rxToBeRemoved.includes(index) ? 'remove' : '' " >
              <td class = 'is_receiver'>{{item.rxId}}</td>
               <td>
                 <v-dialog
                    v-model = "open"
                    scrollable
                    width="500"
                  >
                  <template v-slot:activator="{ props: activatorProps }">
                      <v-btn v-if = "stateStore.rxAssignments[index].vwName == '' "
                        id = "pick-zone-btn"
                        color="orange"
                        text="Change Zone Assignment"
                        variant="outlined"
                        v-bind="activatorProps"
                        @click = "RxSelected(index)"
                      ></v-btn>
                      <v-btn v-else 
                      text = 'Change Video Wall Assignment'
                      variant="outlined"
                      color="teal"
                      @click = "this.$router.push('/addvideowalls')"
                      >
                      </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card
                        prepend-icon="mdi-gamepad-circle"
                        title= "Name Receiver and Assign Zone"
                      >
                        <v-divider class="mt-3"></v-divider>
                        <v-card-text>  
                          <div>Name for RX - {{stateStore.rxAssignments[rxIndex].rxId}} </div>   
                          <input id = "input" class = 'inputFont' @keyup = "updateRxName()" type="text" v-model = 'stateStore.rxAssignments[rxIndex].name' maxlength="10"  :style="{ borderColor: stateStore.rxAssignments[rxIndex].name == '' ? 'red' : 'black' }"> 
                        </v-card-text>
                        <div v-if = "stateStore.rxAssignments[rxIndex].name == ''" class = "d-flex justify-center text-red">Enter Name!</div>
                        <v-divider class="mt-3"></v-divider>
                        <div class = "mx-6 d-flex justify-center">Select Zone for - {{stateStore.rxAssignments[rxIndex].rxId}} </div>   
    
                        <v-card-text class="px-4" style="height: 300px;">
                        <div class = 'zoneSelect'>
                            <v-radio-group v-model="stateStore.rxAssignments[rxIndex].zone" >
                              <div v-for="(item, index) in stateStore.zoneNames" :key="index">
                                <v-radio :label="item" :value="item" @click="radioButtonClicked(item,rxIndex)" />
                              </div>
                            </v-radio-group>
                        </div>
                        <div v-if = "alertChooseZone" class = "d-flex justify-center text-red">Select a Zone!</div>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-btn
                            text="Close"
                            @click="isActive.value = false"
                          ></v-btn>

                          <v-spacer></v-spacer>

                          <v-btn
                            :disabled = "stateStore.rxAssignments[rxIndex].name == '' || stateStore.rxAssignments[rxIndex].zone == ''  "
                            color="blue"
                            prepend-icon="mdi-check-circle"
                            text="Assign"
                            variant="flat"
                            @click = "assignZone(_index)"
                          ></v-btn>
                        
                        <v-btn icon="mdi-delete" color="red" size = "x-large" @click = "removeRx()"></v-btn>

                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
              </td>
              <td>{{stateStore.rxAssignments[index].name}}</td>
               <td>{{item.zone}}</td>
              <td>{{item.vwType}} - {{item.vwName}}  </td>
             
              <td >
                
              </td>
            </tr>
          </tbody>
      </v-table> 
    
  </v-container>


</template>

<script>
  //
  import {useStateStore} from '@/stores/StateStore'

  export default {
    name: "RxListOnly",
    components: {},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
        open : false,
        rxIndex:0,
        rxToBeRemoved:[],
    }),
    computed:{
    
    
    },

    methods: {
    RxSelected(_index){
      this.rxIndex = _index
    },
    updateRxName(){
      this.stateStore.rxAssignments[this.rxIndex].name = this.stateStore.rxAssignments[this.rxIndex].name
    },
    removeRx(){
      this.stateStore.rxAssignments[this.rxIndex].name = ''
      this.stateStore.rxAssignments[this.rxIndex].zone = ''
      this.stateStore.rxAssignments[this.rxIndex].zoneId = ''
      this.rxToBeRemoved.push(this.rxIndex)
      console.log(this.rxToBeRemoved)
      this.open = false
    },
    radioButtonClicked(_zoneAssigned,_index,){
        this.radioButtonSelected =_zoneAssigned
        this.zoneAssigned = _zoneAssigned
        this.alertChooseZone = this.radioButtonSelected != '' ?  false:true
        console.log(this.rxIndex,this.radioButtonSelected)
        
      },
    assignZone(_index){
      if(this.stateStore.rxAssignments[this.rxIndex].zone == ''){
        this.alertChooseZone = true
      }else{ 
        this.stateStore.rxAssignments[this.rxIndex].zoneId = this.radioButtonSelected
        this.stateStore.rxAssignments[this.rxIndex].zone = this.zoneAssigned
        this.alertChooseZone = false
        this.radioButtonSelected = ''
        this.open = false
      }


    },
    save(){
      // save to Pi Server file UserTvNames.txt
        const serverURL = `${this.stateStore.serverURL}`
        // remove the rxAssignment as indicated in rxToBeRemoved[]
          this.stateStore.rxAssignments = this.stateStore.rxAssignments.filter((item,index) => !this.rxToBeRemoved.includes(index))
          console.log(this.stateStore.rxAssignments)
        //Send to Express to save in 'UserTvNames.txt'
          fetch(`http://${serverURL}/write/UserTvNames/${JSON.stringify(this.stateStore.rxAssignments)}`)
          .then((data)=>{
            this.$router.push('/')
          })
          .catch(error => console.log(error));
    },
    cancel(){
        this.$router.push('/')
    }

    },
  async created(){
        this.stateStore.showBottomNav = false; // hide BottomNav
        this.stateStore.showSideMenu = false
  },
  beforeUnmount(){
        
  }

  }
</script>

<style scoped>

#myContainer{
  position: relative; 
  height: 100vh;
  background-color: whitesmoke;
}

td{
  /* border: 1px solid red */
}
#device-table{
  margin-top:20px;
  width:100%
}
#input{
  border: 1px solid grey;
  border-radius : 6px;
  font-family: Arial, sans-serif;
  padding:5px;
 
}
.is_receiver{
   border-left: 5px solid orange;
}
.is_host{
  border-left: 5px solid blue;
}
.remove{
   text-decoration: line-through;
   color:red;
   font-size: 1.4em;
   
}



</style>
