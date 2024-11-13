<template>
  
  <v-container id="myContainer" fluid  >
    <v-row  class = " d-flex justify-end my-3">
      <v-btn class = "mx-3" @click = "cancel" color = "red">Cancel</v-btn>
      <v-btn class = "mx-3 " @click = "save" color = "blue" >SAVE</v-btn>
    </v-row>
     <v-table id = 'device-table' >
          <thead>
            <tr >
                <th>TX IP</th> 
                <th>Edit TX</th>
                <th>TX Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in stateStore.txAssignments" :key="index" :class = "txToBeRemoved.includes(index) ? 'remove' : '' " >
              <td class = 'is_host'>{{item.txId}}</td>
               <td>
                 <v-dialog
                    v-model = "open"
                    scrollable
                    width="500"
                  >
                  <template v-slot:activator="{ props: activatorProps }">
                      <v-btn 
                        color="#809CC0"
                        text="Edit Tansmitter"
                        variant="outlined"
                        v-bind="activatorProps"
                        @click = "TxSelected(index)"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card
                        prepend-icon="mdi-gamepad-circle"
                        title= "Name Transmitter"
                      >
                        <v-divider class="mt-3"></v-divider>
                        <v-card-text>  
                          <div>Name for TX - {{stateStore.txAssignments[txIndex].txId}} </div>   
                          <input id = "input" class = 'inputFont' @keyup = "updateTxName()" type="text" v-model = 'stateStore.txAssignments[txIndex].name' maxlength="10"> 
                        </v-card-text>
                        <div v-if = "stateStore.txAssignments[txIndex].name == ''" class = "d-flex justify-center text-red">Enter Name!</div>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-btn
                            text="Close"
                            @click="isActive.value = false"
                          ></v-btn>

                          <v-spacer></v-spacer>

                          <v-btn
                            color="blue"
                            prepend-icon="mdi-check-circle"
                            text="Assign"
                            variant="flat"
                            @click = "assignTx()"
                          ></v-btn>
                        
                        <v-btn icon="mdi-delete" color="red" size = "x-large" @click = "removeTx()"></v-btn>

                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
              </td>
              <td>{{stateStore.txAssignments[index].name}}</td>
             
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
    name: "TxListOnly",
    components: {},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
        open : false,
        txIndex:0,
        txToBeRemoved:[]
    }),
    computed:{
    
    
    },

    methods: {
    TxSelected(_index){
      this.txIndex = _index
    },
    updateTxName(){
      this.stateStore.txAssignments[this.txIndex].name = this.stateStore.txAssignments[this.txIndex].name
    },
    removeTx(){
      this.stateStore.txAssignments.splice(this.txIndex, 1);
      this.open = false
    },
    assignTx(){
      this.open = false
    },
    save(){
      // save to Pi Server file UserTvNames.txt
        const serverURL = `${this.stateStore.serverURL}`
        // remove the txAssignment as indicated in txToBeRemoved[]
          this.stateStore.txAssignments = this.stateStore.txAssignments.filter((item,index) => !this.txToBeRemoved.includes(index))
          console.log(this.stateStore.txAssignments)
        //Send to Express to save in 'UserTvNames.txt'
          fetch(`http://${serverURL}/write/UserInputNames/${JSON.stringify(this.stateStore.txAssignments)}`)
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
        this.stateStore.showBottomNav = true; // show BottomNav
        
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
.is_host{
  border-left: 5px solid #809CC0;
}
.remove{
   text-decoration: line-through;
   color:red;
   font-size: 1.4em;
   
}



</style>
