import axios from 'axios'
import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const useStateStore = defineStore('stateStore', {
    // other options...
    state: () => ({ 
        serverURL: `${location.hostname}:3000`,
        showSideMenu:false,
        showProgress: true,
        zoneNames:{},
        vwList:[],
        rxAssignments:[],
        iTachUnits:[],
        videoInputsWithRemoteAccess: [],
        remoteSelectedIndex:0,
        irFavChannels:[],
        zoneSelected:'',
        vwSelected : '',
        vwTypeSelected:'',
        switch1RxOnly:true,
        switchAllRx:false,
        vw2x3Mode:'',
        vw2x4Mode:'',
        vw3x3Mode:'',
        vw4x4Mode:'',
        page: '/', 
        rxSelected: '1',
        rxSelectedLabel: '',
        txSelected:'1',
        isAuthenticated:false,
        pageToAuthenticateAndRoute:'',
        snackbar:false,
        snackbarCeC:false,
        snackbarVWOff:false,
        nodeQueryList_dump:[],
        nodeQueryList_ip:[],
        nodeQueryList_ip_duplicates:[],
        nodeQueryList_rx_not_found:[],
        txAssignments:[],
        rxParams:{},
        cecTVstatus: '',
        showBottomNav: false, // default to false
        preset1:{},
        preset2:{},
        preset3:{},


     }),
     getters:{

     },
     actions: {
        // since we rely on `this`, we cannot use an arrow function
        power_cec(_onOff){
          const cec_off = `cec_send E0:36` 
          const cec_on = `cec_send E0:04`
          if(_onOff == 'on'){
            this.cecTVstatus = 'ON'
            for(let item of this.rxAssignments ){
              fetch(`http://${item.rxId}/cgi-bin/query.cgi?cmd=${cec_on}`)
            }
          }else{
            this.cecTVstatus = 'OFF'
            for(let item of this.rxAssignments ){
              fetch(`http://${item.rxId}/cgi-bin/query.cgi?cmd=${cec_off}`)
            }
          }
        },

        switchRX(_txID){
          fetch(`http://${this.rxSelected}/cgi-bin/query.cgi?cmd=vw:off%3Brxswitch:${_txID}`)
        },
        switchAllRX(_txID){
          for(let [index,item] of this.rxAssignments.entries() ){
              console.log(`http://${item.rxId}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`)
              fetch(`http://${item.rxId}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`)
          }

        },
        videoWallOff(){
          this.snackbarVWOff = true
          let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned
          for(let [index,rxId] of rxUnitsInThisVW.entries() ){
            fetch(`http://${rxId}/cgi-bin/query.cgi?cmd=vw:off%3Brxswitch:00${index+1}`)
          }
        },
        switchVW(_txID){
          let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned  // list of rxId(s) in vwSelected
          switch (this.vwTypeSelected) {
            case '1x3':
            //ClockWise Rotation
              for( let col = 0; col <=2 ; col++){
                    fetch(`http://${rxUnitsInThisVW[col]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`)
                    fetch(`http://${rxUnitsInThisVW[col]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_enable_2_0_${2-col}_0%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_rotate_6`)

              }
              break;
            case '2x2':
              let count = 0;
              for (let row = 0; row <= 1; row++) {
                for (let column = 0; column <= 1; column++) {
                  fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                  fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_1%3Be%20e_vw_enable_1_1_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                  count++;
                }
              }
              break;
            case '2x3':
                   
              if (this.vw2x3Mode === 'vw2x3_2x2on') {
                let rxIn2x3AssignedTo2x2 = [0, 1, 3, 4]; //index position
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 1; column++) {
                    fetch(`http://${rxUnitsInThisVW[rxIn2x3AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[rxIn2x3AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_1%3Be%20e_vw_enable_1_1_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              } else if (this.vw2x3Mode === 'vw2x3_2x3on') {
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 2; column++) {
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_2%3Be%20e_vw_enable_1_2_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              }
              break;
            case '2x4':
                   
              if (this.vw2x4Mode === 'vw2x4_2x2A_on') {
                let rxIn2x4AssignedTo2x2 = [0, 1, 4, 5]; //index position
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 1; column++) {
                    fetch(`http://${rxUnitsInThisVW[rxIn2x4AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[rxIn2x4AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_1%3Be%20e_vw_enable_1_1_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              } else if(this.vw2x4Mode === 'vw2x4_2x2B_on'){
                let rxIn2x4AssignedTo2x2 = [2, 3, 6, 7]; //index position
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 1; column++) {
                    fetch(`http://${rxUnitsInThisVW[rxIn2x4AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[rxIn2x4AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_1%3Be%20e_vw_enable_1_1_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }

              } else if (this.vw2x4Mode === 'vw2x4_2x4on') {
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 3; column++) {
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_3%3Be%20e_vw_enable_1_3_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              }
              break;
            case '3x3':
         
              if (this.vw3x3Mode === 'vw3x3_2x2on') {

                // set all displays to solo mode first.
                let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned
                for(let [index,rxId] of rxUnitsInThisVW.entries() ){
                  fetch(`http://${rxId}/cgi-bin/query.cgi?cmd=vw:off`)
                }
                //2x2
                let rxIn3x3AssignedTo2x2 = [0, 1, 3, 4]; //index position
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 1; column++) {
                    fetch(`http://${rxUnitsInThisVW[rxIn3x3AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[rxIn3x3AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_1%3Be%20e_vw_enable_1_1_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              } else if (this.vw3x3Mode === 'vw3x3_2x3on') {

                // set all displays to solo mode first.
                let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned
                for(let [index,rxId] of rxUnitsInThisVW.entries() ){
                  fetch(`http://${rxId}/cgi-bin/query.cgi?cmd=vw:off`)
                }
                // 2x3
                let count = 0;
                for (let row = 0; row <= 1; row++) {
                  for (let column = 0; column <= 2; column++) {
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_2%3Be%20e_vw_enable_1_2_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              } else if (this.vw3x3Mode === 'vw3x3_3x3on') {
                let count = 0;
                for (let row = 0; row <= 2; row++) {
                  for (let column = 0; column <= 2; column++) {
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                    fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_2_2%3Be%20e_vw_enable_2_2_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                    count++;
                  }
                }
              }
              break;

              case '4x4':

                if (this.vw4x4Mode === 'vw4x4_2x2on') {
                    // set all displays to solo mode first.
                    let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned
                    for(let [index,rxId] of rxUnitsInThisVW.entries() ){
                      fetch(`http://${rxId}/cgi-bin/query.cgi?cmd=vw:off`)
                    }
                  // 2x2
                  let rxIn4x4AssignedTo2x2 = [0, 1, 4, 5]; //index position
                  let count = 0;
                  for (let row = 0; row <= 1; row++) {
                    for (let column = 0; column <= 1; column++) {
                      fetch(`http://${rxUnitsInThisVW[rxIn4x4AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                      fetch(`http://${rxUnitsInThisVW[rxIn4x4AssignedTo2x2[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_1%3Be%20e_vw_enable_1_1_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                      count++;
                    }
                  }

                } else if (this.vw4x4Mode === 'vw4x4_2x3on') {
                    // set all displays to solo mode first.
                    let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned
                    for(let [index,rxId] of rxUnitsInThisVW.entries() ){
                      fetch(`http://${rxId}/cgi-bin/query.cgi?cmd=vw:off`)
                    }
                  
                  //2x3
                  let rxIn4x4AssignedTo2x3 = [0,1,2,4,5,6]; //index position
                  let count = 0;
                  for (let row = 0; row <= 1; row++) {
                    for (let column = 0; column <= 2; column++) {
                      fetch(`http://${rxUnitsInThisVW[rxIn4x4AssignedTo2x3[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                      fetch(`http://${rxUnitsInThisVW[rxIn4x4AssignedTo2x3[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_1_2%3Be%20e_vw_enable_1_2_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                      count++;
                    }
                  }

                } else if (this.vw4x4Mode === 'vw4x4_3x3on') {

                  // set all displays to solo mode first.
                  let rxUnitsInThisVW = this.vwList.filter((item) => item.vwName == this.vwSelected)[0].rxAssigned
                  for(let [index,rxId] of rxUnitsInThisVW.entries() ){
                    fetch(`http://${rxId}/cgi-bin/query.cgi?cmd=vw:off`)
                  }

                  // 3x3 
                  let rxIn4x4AssignedTo3x3 = [0,1,2,4,5,6,8,9,10]; //index position
                  let count = 0;
                  for (let row = 0; row <= 2; row++) {
                    for (let column = 0; column <= 2; column++) {
                      fetch(`http://${rxUnitsInThisVW[rxIn4x4AssignedTo3x3[count]]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                      fetch(`http://${rxUnitsInThisVW[rxIn4x4AssignedTo3x3[count]]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_2_2%3Be%20e_vw_enable_2_2_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                      count++;
                    }
                  }


                }else if (this.vw4x4Mode === 'vw4x4_4x4on') {
                  let count = 0;
                  for (let row = 0; row <= 3; row++) {
                    for (let column = 0; column <= 3; column++) {
                      fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=rxswitch:${_txID}`);
                      fetch(`http://${rxUnitsInThisVW[count]}/cgi-bin/query.cgi?cmd=vw:off%3Be%20e_vw_pos_layout_3_3%3Be%20e_vw_enable_3_3_${row}_${column}%3Be%20e_vw_moninfo_200_200_100_100%3Be%20e_vw_refresh_pos_idx_${row}_${column}`);
                      count++;
                    }
                  }
                }

            default:
              break;
          }
        },
       
        async getNodeQuery(){
          
          this.showProgress = true
           // clear
           this.nodeQueryList_dump = []

           // Node Query-detect which TX and RX are installed and detected
           const response = await fetch(`http://172.31.2.1/cgi-bin/query.cgi?cmd=node_list%20-j`)
           const data = await response.text()
 
           //Process string input. 1)remove first{ and ,}' //remove first{ and ,} 2) extact all items between {}
           let testString = data.slice(1,-2)  //remove first{ and last }'
           let regex = /{\s*([^}]+)\s*}/g ;  // get all items in between {}
           let matched = testString.match(regex)  // array of value that match the regex [ ]
            console.log('matched',matched)
           // push matched items into array as objects
           await  matched.forEach((item,index) =>{
               this.nodeQueryList_dump.push(JSON.parse(item))
           })

          // sort by ascending IP address
          await this.nodeQueryList_dump.sort((a, b) => {
            const numA = a.ip.split('.').map(Number);
            const numB = b.ip.split('.').map(Number);
            for (let i = 0; i < 4; i++) {
                if (numA[i] !== numB[i]) {
                    return numA[i] - numB[i];
                }
            }
            return 0;
        });

           await this.getFirmwareVersionAndMAC()
           await this.findDuplicateIP()
           this.showProgress = false

        },
      async findDuplicateIP(){
        this.nodeQueryList_dump.forEach((item) =>console.log(item))
        this.nodeQueryList_ip = this.nodeQueryList_dump.map((item)=> item.ip)  // get array of only the ip address
        this.nodeQueryList_ip_duplicates = this.nodeQueryList_ip.filter((item, index) => this.nodeQueryList_ip.indexOf(item) !== index);
      },
      async getFirmwareVersionAndMAC(){

        for (let [index, device] of this.nodeQueryList_dump.entries()) {
              // get Aspeed firmware versions
              const responseVersion = await fetch(`http://${device.ip}/cgi-bin/query.cgi?cmd=cat%20/etc/version`)
              const dataVersion= await responseVersion.text()
              // let deviceSummary = {}
              let resultVersion = dataVersion.replace(/[\n\r]/g, ',');  //remove CR with ,
              resultVersion = resultVersion.split(",").slice(5,-2) // convert string into array of substrings
              this.nodeQueryList_dump[index].fw_build = `${resultVersion[0]}`
              this.nodeQueryList_dump[index].fw_version = `${resultVersion[1]}`

            // get MAC address by using 'astparam dump ro'command
              const responseDumpRo = await fetch(`http://${device.ip}/cgi-bin/query.cgi?cmd=astparam%20dump%20ro`)
              const dataDumpRo= await responseDumpRo.text()
              let resultDumpRo = dataDumpRo.replace(/[\n\r]/g, ',');  //remove CR with ,
              resultDumpRo = resultDumpRo.split(",")// convert string into array of substrings
                // remove all items in array not contain 'ethaddr'
              let ethaddrOnly = resultDumpRo.filter(item => item.includes('ethaddr'))
              this.nodeQueryList_dump[index].mac = ethaddrOnly[0].replace("ethaddr=","")

              // get Microchip MCU firmware versions
              const responseMcuVersion = await fetch(`http://${device.ip}/cgi-bin/query.cgi?cmd=cat%20/etc/mcu_version`)
              let dataMcuVersion = await responseMcuVersion.text()
              dataMcuVersion = dataMcuVersion.replace(/[\n\r]/g,'')  //remove CR 
              this.nodeQueryList_dump[index].mcu_version = dataMcuVersion

          }
     },
     
      async getFeedback(){
          // console.log('feedback')
          const regex_pattern_ch_select = /ch_select=[^\s]+/;
          const regex_pattern_vw_max_row = /vw_max_row=[^\s]+/;  // vw_max_row = 3 for 1x4, vw_max_column = 1 for 1x2, vw_max_column = 0 for 1x1, 
          const regex_pattern_vw_row = /vw_row=[^\s]+/;  
          const regex_pattern_vw_max_column = /vw_max_column=[^\s]+/;  // vw_max_column = 3 for 1x4, vw_max_column = 1 for 1x2, vw_max_column = 0 for 1x1, 
          const regex_pattern_vw_column = /vw_column=[^\s]+/;  
          const controller = new AbortController();

                for(let item of this.rxAssignments){
            
                    try{
                      // get astparam dump from each RX
                      const astparamDump = (await axios.get(`http://${item['rxId']}/cgi-bin/query.cgi?cmd=astparam dump`)).data

                     console.log(astparamDump)
                    const match_ch_select = astparamDump.match(regex_pattern_ch_select );
                    const match_vw_max_row = astparamDump.match(regex_pattern_vw_max_row );
                    const match_vw_max_column = astparamDump.match(regex_pattern_vw_max_column );
                    const match_vw_row = astparamDump.match(regex_pattern_vw_row );
                    const match_vw_column = astparamDump.match(regex_pattern_vw_column );
                    let vw_max_row = match_vw_max_row[0].replace(/vw_max_row=/, '') // vw_max_column = 3 for 1x4, vw_max_column = 1 for 1x2, vw_max_column = 0 for 1x1, 
                    let vw_max_column = match_vw_max_column[0].replace(/vw_max_column=/, '') // vw_max_column = 3 for 1x4, vw_max_column = 1 for 1x2, vw_max_column = 0 for 1x1, 
                    let vw_row = match_vw_row[0].replace(/vw_row=/, '') 
                    let vw_column = match_vw_column[0].replace(/vw_column=/, '') 

                    this.rxParams[item.rxId]['max_row'] = vw_max_row
                    this.rxParams[item.rxId]['max_column'] = vw_max_column
                    this.rxParams[item.rxId]['vw_row'] = vw_row
                    this.rxParams[item.rxId]['vw_column'] = vw_column
                    this.rxParams[item.rxId]['ch'] = parseInt(match_ch_select[0].replace(/ch_select=/, ''))  // ch_selects = 0001, strip out ch_selects= and convert to integer  

  
                    if (match_ch_select  !=null && match_vw_max_column!=null ) {
                      let source_select_index = parseInt(match_ch_select[0].replace(/ch_select=/, '')) - 1 // ch_selects = 0001, strip out ch_selects= and convert to integer  
                      //  let vw_max_column = match_vw_max_column[0].replace(/vw_max_column=/, '') // vw_max_column = 3 for 1x4, vw_max_column = 1 for 1x2, vw_max_column = 0 for 1x1, 
                      this.rxParams[item.rxId]['chSelect'] = this.txAssignments[source_select_index]['name']
                    }
  
                  } catch(error) {
                    console.log(error)
                    //  this.rxParams[rx]['chSelect'] = 'error'
                  }

                }

         },
        async get_zoneNames(){
          // Read from Server
            fetch(`http://${this.serverURL}/read/UserZoneNames`, {method: 'GET',})
            .then(response => response.json())
            .then(result => {
               this.zoneNames = {...result}
              //  console.log('zone is:',this.zoneNames, Object.keys(this.zoneNames).length )
              })
            .catch(error => {
              console.error('Error:', error);
            });
      },
        async get_UserTvNames(){
            this.rxAssignments=[]
          // Read from Server
            fetch(`http://${this.serverURL}/read/UserTvNames`, {method: 'GET',})
            .then(response => response.json())
            .then(result => {
                let item;
                for( item in result){
                  this.rxAssignments.push(result[item]) // initialize rxAssignments
                  this.rxParams[result[item].rxId] = {chSelect:'search',vw_status:'0',display:''}  // initialize rxParams 
                }
                console.log('rxAssignments = ',this.rxAssignments)
                this.get_vwList()
            })
            .catch(error => {
              console.error('Error:', error);
            });
        },
        async get_UserInputNames(){
          console.log('get Input')
            this.txAssignments=[]
          // Read from Server
            fetch(`http://${this.serverURL}/read/UserInputNames`, {method: 'GET',})
            .then(response => response.json())
            .then(result => {
                let item;
                for( item in result){
                  this.txAssignments.push(result[item])
                }
                console.log('txAssignments = ',this.txAssignments)
            })
            .catch(error => {
              console.error('Error:', error);
            });
      },
      get_vwList(){
        this.vwList = []
        // Extract unique vwName from rxAssignments[]
        let vwNames = this.rxAssignments.map((item) => item.vwName)  //extract only the vwName from rxAssignments[]
        vwNames = Array.from(new Set(vwNames)).filter((item) => item != '')

        vwNames.forEach((vwName)=>{
          let vwItem ={'vwName':'' , 'vwType': '' , 'rxAssigned':[]}
                  let rxAssigned_temp = []
                  //  console.log(vwName)
                this.rxAssignments.forEach((item)=>{
                    if(item['vwName'] == vwName){
                      // console.log(item)
                      vwItem.vwName= item.vwName
                      vwItem.vwType= item.vwType
                      rxAssigned_temp.push(item.rxId)
                    }
              })
              vwItem.rxAssigned = [...rxAssigned_temp]
              this.vwList.push(vwItem)

        })

      },

     async get_UserItachIPs(){
        this.iTachUnits = []
        // Read from Server
          fetch(`http://${this.serverURL}/read/UserItachIPs`, {method: 'GET',})
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);
             let item;
             for( item in result){
               this.iTachUnits.push(result[item])
             }
             console.log(this.iTachUnits)
             
          })
          .catch(error => {
            console.error('Error:', error);
          });
    },
    
    async get_UserFavChannels(){

      // Read from Server
        fetch(`http://${this.serverURL}/read/UserFavChannels`, {method: 'GET',})
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
          let item;
          for(item in result){
            this.irFavChannels.push(result[item])
          }
           console.log(this.irFavChannels)
    
        }).catch(error => {
          console.error('Error:', error);
        });

  },
            
    },
  })


    
