 <template>
  <v-container id = "container" fluid class="fill-height  justify-center" >

      <div id ="remote-control">
            <h6 class="d-flex justify-center text-white">Remote for {{stateStore.txAssignments[stateStore.remoteSelectedIndex].name}} </h6>
            <div class = 'grid-container1'>
                <div class = 'grid-item1'><v-icon id = "power-on" @click= "BtnPressed('on')">mdi-power</v-icon></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'><v-icon   @click = "BtnPressed('cursor_up')" class="material-icons btn-icons">mdi-chevron-up</v-icon ></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'><v-icon id = "power-off"  @click = "BtnPressed('off')" class="material-icons ">mdi-power</v-icon></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'><v-icon id ='cursor-left'  @click = "BtnPressed('cursor_left')" class="material-icons btn-icons">mdi-chevron-left</v-icon></div>
                <div class = 'grid-item1'><div  @click = "BtnPressed('cursor_enter')" class = 'roundBtn'>Select</div></div>
                <div class = 'grid-item1'><v-icon id ='cursor-right'  @click = "BtnPressed('cursor_right')" class="material-icons btn-icons ">mdi-chevron-right</v-icon></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'><v-icon  @click = "BtnPressed('cursor_down')" class="material-icons btn-icons">mdi-chevron-down</v-icon></div>
                <div class = 'grid-item1'></div>
                <div class = 'grid-item1'></div>
            </div>
            <div class = 'grid-container2'>
                <div class = 'grid-item2'><v-btn @click = "BtnPressed('guide')" >Guide</v-btn></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(1)" class = 'roundBtn'>1</div></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(2)" class = 'roundBtn'>2</div></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(3)" class = 'roundBtn'>3</div></div>
                <div class = 'grid-item2'><v-btn icon="mdi-chevron-up"  @click = "BtnPressed('ch_up')" ></v-btn></div>
                <div class = 'grid-item2'><v-btn @click = "BtnPressed('menu')" >Menu</v-btn></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(4)" class = 'roundBtn'>4</div></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(5)" class = 'roundBtn'>5</div></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(6)" class = 'roundBtn'>6</div></div>
                <div class = 'grid-item2'>Channel</div>
                <div class = 'grid-item2'></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(7)" class = 'roundBtn'>7</div></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(8)" class = 'roundBtn'>8</div></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(9)" class = 'roundBtn'>9</div></div>
                <div class = 'grid-item2'><v-btn icon="mdi-chevron-down"  @click = "BtnPressed('ch_down')" ></v-btn></div>
                <div class = 'grid-item2'><v-btn  @click = "BtnPressed('exit')">Exit</v-btn></div>
                <div class = 'grid-item2'></div>
                <div class = 'grid-item2'><div @click = "BtnPressed(0)" class = 'roundBtn'>0</div></div>
                <div class = 'grid-item2'></div>
                <div class = 'grid-item2'><v-btn  @click = "BtnPressed('enter')" >Enter</v-btn></div>
            </div>
            <div class = 'grid-container3'>
                <div v-for="(item, index) in stateStore.irFavChannels" :key="index" class = 'grid-item3'> <v-btn @click = "favoriteBtnPressed(index)" class="btn-favs" size = "large" ><div class = "d-flex flex-column"><span>{{item.fav_ch_name}}</span><span>{{item.fav_ch}}</span></div></v-btn></div>
            </div>

            <v-snackbar
                        v-model="stateStore.snackbar"
                        :timeout="500"
                        color="blue"
                  >    
                        IR Sent
            </v-snackbar>

      </div>
  </v-container>
</template>

<script>
import { useStateStore} from '@/stores/StateStore'


export default {
  name: 'RemoteControl',
  props:[],

setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
    
     },
  data () {
    return {
      serverURL: `${location.hostname}:1880`,
      btnPressed: null,
    }
  },
  computed:{
    unit: function () {
      return (Math.trunc(this.stateStore.remoteSelectedIndex / 3) + 1)  // itach unit number ( 3 ports per unit)
    },
    port:function () { //itach port number
      return this.stateStore.remoteSelectedIndex %3  + 1
    },
  },
  methods:{
      BtnPressed(_button){
          this.btnPressed =`btn_${ _button}`
          this.stateStore.snackbar = true
          fetch(`http://${this.serverURL}/sendir/unit/${this.unit}/port/${this.port}/ir/${this.btnPressed }`)
      },
      favoriteBtnPressed(_favorite){
          let favCh = this.stateStore.irFavChannels[_favorite].fav_ch
          this.stateStore.snackbar = true
          fetch(`http://${this.serverURL}/sendir/unit/${this.unit}/port/${this.port}/irfavorite/${favCh}`)
      },
        
  }
}
</script>

<style scoped>
#remote-control{
  width:90%;
}
.grid-container1,.grid-container2,.grid-container3  {
  color:white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center ;
  grid-gap: 5px;
  height:25vh;
  padding-left:50px;
  padding-right:50px;
  margin:5px;
}
.grid-container2{
    height:30vh;
}
.grid-container3 {
 height:25vh;
}
.grid-item1,.grid-item2,.grid-item3{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.btn-icons{
    transform: scale(3)  
}
#power-on{
    color:green;
    transform: scale(2)
}
#power-off{
    color:red;
    transform: scale(2)
}
#cursor-right{
    transform: scale(3);
}
.roundBtn{
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   height:50px;
   width:50px;
   border-radius: 50%;
   background-color: rgb(28,28,30) ;
   cursor: pointer
}
.btn-favs{
    background-color:  rgb(28,28,30) ;
    color:white;
    width:50%;
    border-radius: 6px;
}
.btn{
    border-radius:6px;
    width:70%
}


</style>