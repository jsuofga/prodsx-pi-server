<template>
  <router-view />
</template>

<script >
  //
  import { useStateStore} from './stores/StateStore'

  export default{
    setup(){
      const stateStore = useStateStore()

      return {stateStore}
    },
    async beforeCreate(){
      // read from storage and update stateStore 
      console.log('before App')
      await this.stateStore.get_zoneNames()
      await this.stateStore.get_UserTvNames()
      await this.stateStore.get_UserInputNames()
      this.stateStore.zoneSelected = localStorage.getItem('zoneSelected')  // get Zone selected to local storage. For case, user refreshes web page.
      this.stateStore.rxSelected = localStorage.getItem('rxSelected')  // get rxSelected to local storage. For case, user refreshes web page.
      this.stateStore.rxSelectedLabel = localStorage.getItem('rxSelectedLabel')  // get rxSelectedLabel to local storage. For case, user refreshes web page.
      this.stateStore.vwSelected =localStorage.getItem('vwSelected') 
      this.stateStore.vwTypeSelected =localStorage.getItem('vwTypeSelected') 

    },
    created(){
     

      
    },
    beforeUnmount(){

    }
  }
</script>

