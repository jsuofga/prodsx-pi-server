<template>
    <v-container class="d-flex justify-center">

     <v-card id='myCard'>
      <v-card-title class ="  d-flex justify-center">
          <h4> Add Video Wall</h4>
      </v-card-title>
      <v-card-text >
        <v-form >
          <v-text-field label = 'Video Wall Name' :rules = 'nameRules' v-model = 'vwName' prepend-inner-icon="mdi-grid-large" >
          </v-text-field>
        <!-- <div v-if= "alert" class = "text-red">alert</div> -->
        </v-form>
        
      </v-card-text>

      <v-radio-group class = "py-6" v-model= "vwType">
        <v-row class = "d-flex justify-center">Type</v-row>
        <v-row class = "d-flex justify-center px-2  ">
          <div class = "d-flex flex-column align-center mx-9">
              <v-icon icon="mdi-view-column-outline" size = large ></v-icon>  
              <v-radio label="1x3" value="1x3"></v-radio>  
               
          </div>
           <div class = "d-flex flex-column align-center mx-9">
               <v-icon icon="mdi-grid-large" size = large ></v-icon>  
               <v-radio label="2x2" value="2x2"></v-radio>
          </div>
          <div class = "d-flex flex-column align-center mx-9">
            <v-icon icon="mdi-view-module-outline" size = x-large ></v-icon>  
            <v-radio label="2x3" value="2x3"></v-radio>
          </div>
          <div class = "d-flex flex-column align-center mx-9">
            <v-icon icon="mdi-grid" size = large ></v-icon>  
            <v-radio label="3x3" value="3x3"></v-radio>
          </div>
         
        
        </v-row>
      </v-radio-group>

      <v-row id = 'select' xs3 class = "d-flex justify-center mx-10">
        <v-select  v-model= "rxAssignedToVideoWall"
          label="Assign RX's"
          :items= "availableRxList"
          multiple
        ></v-select>
      </v-row>
      <v-row v-if = " vwName && vwType && rxAssignedToVideoWall.length != 0 " id = "buttons-container" class = " d-flex justify-center">
        <v-col class = "d-flex align-center flex-column">
            <div>Add Video Wall</div>
            <v-btn color = "green" icon="mdi-arrow-down-bold" @click = 'add' size="large"></v-btn>
        </v-col>
      </v-row>


    </v-card>

    </v-container>
    

</template>

<script>
import { useStateStore} from '@/stores/StateStore'
export default {
  name: 'AddVideoWallForm',
  props: [],
   setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },
  data () {
    return {
        vwName: '',
        alert:false,
        vwType:'',
        rxAssignedToVideoWall:[],
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 8) || 'Name must be less than 8 characters',
            ],

    }
  },
  computed:{
    availableRxList:function(){
      // only show rx units in v-select that are not already assigned to a video wall or zone

        let rxAlreadyAssignedToVW_or_zone = []
        // get list of all rx that are already assigned to a video wall
        this.stateStore.vwList.forEach((vw)=>{
          vw.rxAssigned.forEach((item) =>{
            rxAlreadyAssignedToVW_or_zone.push(item)
          })
        })

        // add to list of all rx that are already assigned to a zone
        this.stateStore.rxAssignments.forEach((item)=>{
          if(item.zone != ''){
            console.log(item.rxId)
            rxAlreadyAssignedToVW_or_zone.push(item.rxId)
          }
        })

       // get only rx that are not already assigned to a video wall
       let validRxList = this.stateStore.rxAssignments.filter((item)=>{ 
          console.log(rxAlreadyAssignedToVW_or_zone.indexOf(item.rxId) === -1) 
          return rxAlreadyAssignedToVW_or_zone.indexOf(item.rxId) === -1 
           
        })
       
       return validRxList.map((item)=>item.rxId)
    }

  },
 methods: {  

add: function() {
    if (this.vwName === '')return;

    if(this.stateStore.vwList.map((item)=> item.vwName).includes(this.vwName)){
      alert('Enter unique video wall name')
      return;
    }

    let vw = {
        'vwName': this.vwName,
        'vwType': this.vwType,
        'rxAssigned': [...this.rxAssignedToVideoWall]
    };

    let requiredRxCounts = {
        '1x3': 3,
        '2x2': 4,
        '2x3': 6,
        '3x3': 9,
    };

    let requiredRxCount = requiredRxCounts[vw.vwType];

    if (vw.rxAssigned.length !== requiredRxCount) {
        alert('Select ' + requiredRxCount + ' RX');
    } else {
        this.rxAssignedToVideoWall = [];
        this.vwName = ''
        this.vwType = ''
        // update rxAssignments 
        vw.rxAssigned.forEach((rx) => {
            this.stateStore.rxAssignments.forEach((item, index) => {
                if (item.rxId === rx) {
                    this.stateStore.rxAssignments[index].vwName = vw.vwName;
                    this.stateStore.rxAssignments[index].vwType = vw.vwType;
                }
            });
        });
        this.stateStore.get_vwList();
    }
},

    
    save:function(){


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

#myCard{
  width:80%;
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
