<template>
  
  <v-container id="myContainer" fluid >
    <v-row  v-if = "showSave" class = "mx-3">
      <v-col >
          <div class = "d-flex justify-start my-3"> <v-btn @click = "rescan" color = "blue">ReScan</v-btn></div>
      </v-col>
      <v-col v-if = "stateStore.nodeQueryList_ip_duplicates.length != 0" class = "d-flex flex-column justify-center text-red" >  
         <div class = "d-flex justify-center" >  1. Remove duplicate devices as indicated  </div> 
         <div class = "d-flex justify-center"> 2. Repeat Device List Scan   </div>
      </v-col>
       <v-col v-else class = "d-flex justify-center ">
        <v-chip  variant = "flat" >TX + RX found = {{stateStore.nodeQueryList_dump.length}}</v-chip> 
       </v-col>
      <v-col class = "myCols d-flex justify-end "> 
        <v-btn class = "mx-3" @click = "cancel" color = "red">Cancel</v-btn>
        <v-btn v-if = "stateStore.nodeQueryList_ip_duplicates.length == 0"  class = "mx-3 " @click = "saveDeviceList" color = "blue" >SAVE</v-btn>
      </v-col>
    </v-row>
    <v-progress-circular v-if = "stateStore.showProgress" id = 'progress' indeterminate  model-value="20" :size="80" color = "blue"></v-progress-circular>
    <v-table id = 'device-table'>
          <thead>
            <tr>
                <th>Device IP</th> 
                <th>MCU Version</th>
                <th>Firmware Build</th>
                <th>MAC</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for= "(item,index) in stateStore.nodeQueryList_dump" :key="index"  >

              <td >
                <v-chip class = 'is_receiver' :class= "{ is_host: item.is_host == 'y' }" @click = 'openBrowser(item.ip)'  variant="outlined">{{item.is_host == 'y'? 'TX': 'RX'}}-{{item.ip}}</v-chip>
                <v-chip v-if = "stateStore.nodeQueryList_ip_duplicates.includes(item.ip)" color="red" > Duplicate!</v-chip>
              </td>
              <td>{{item.mcu_version}}</td>
              <td>{{item.fw_build}}</td>
              <td>{{item.mac}}</td>
  
            </tr>
          </tbody>
      </v-table> 
  </v-container>
</template>

<script>
  //
  import {useStateStore} from '@/stores/StateStore'

  export default {
    name: "DeviceList",
    components: {},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
      showSave :false
        
    }),
    computed:{
    
    },
    methods: {
      openBrowser(_url){
        window. open(`http://${_url}`)
      },
       rescan(){
        location.reload()
       },
       async saveDeviceList(){

        // save to Pi Server file UserTvNames.txt, UserInputNames.txt
        const serverURL = this.stateStore.serverURL

          // Add in detected TX and RX
          this.stateStore.nodeQueryList_dump.forEach((item,index)=>{
             if(item.is_host == 'n'){  //for RX devices
               let rxDetected = {rxId: item.ip, name:'', zoneId:'', zone:'',vwName:'',vwType:''}
              
              // if rxDetected is not already in the rxAssignments[] , then push in new rxDetected 
              if (!this.stateStore.rxAssignments.some(item => item.rxId === rxDetected.rxId)) {
                  this.stateStore.rxAssignments.push(rxDetected);
                }
              
             }else if(item.is_host == 'y'){ //for TX devices
              // if txDetected is not already in the txAssignments[] , then push in new rxDetected 
              let txDetected = {txId: item.ip, name:`Video${index+1}`}
              if (!this.stateStore.txAssignments.some(item => item.txId === txDetected.txId)) {
                  this.stateStore.txAssignments.push(txDetected);
                }
             }
          })

          // sort RX by ascending IP address
          await this.stateStore.rxAssignments.sort((a, b) => {
            const numA = a.rxId.split('.').map(Number);
            const numB = b.rxId.split('.').map(Number);
            for (let i = 0; i < 4; i++) {
                if (numA[i] !== numB[i]) {
                    return numA[i] - numB[i];
                }
            }
            return 0;
        });

         // sort TX by ascending IP address
          await this.stateStore.txAssignments.sort((a, b) => {
            const numA = a.txId.split('.').map(Number);
            const numB = b.txId.split('.').map(Number);
            for (let i = 0; i < 4; i++) {
                if (numA[i] !== numB[i]) {
                    return numA[i] - numB[i];
                }
            }
            return 0;
        });

          //Send to Express to save in 'UserTvNames.txt', 'UserInputNames'
         await  fetch(`http://${serverURL}/write/UserTvNames/${JSON.stringify(this.stateStore.rxAssignments)}`)
         await  fetch(`http://${serverURL}/write/UserInputNames/${JSON.stringify(this.stateStore.txAssignments)}`)
         this.$router.push('/')
      
    },

    cancel:function(){
      this.$router.push('/')
    }
   
    },
  async created(){
      this.stateStore.showSideMenu = false
      await this.stateStore.getNodeQuery() //call immediatly 1st 
      this.stateStore.get_UserTvNames() 
      this.showSave = true
    },
    beforeUnmount(){
 
    }

  }
</script>

<style scoped>

#myContainer{
  position: relative; 
  height:100vh; 
   background-color: whitesmoke;
}
#progress{
  position:absolute;
  left:calc(50% - 40px);
  top: 25%;
}
#device-table{
  margin-top:20px;
  width:100%;
}
.is_receiver{
  color:orange;
}
.is_host{
  color:#809CC0
}
#alert-duplicate{
  position: absolute;
  top:30%;
  left:35%
}
</style>
