<template>
  <div>
    <div class="container">
    
    <div class="mt-5">
      帳號查詢
    </div>

    <div>
      <Searchbar
        @getSearch="getSearch"
        :inputPlaceholder="inputPlaceholder"
        :buttonText="buttonText">
      </Searchbar>

      <IDResult
        :tableTitle="tableTitle"
        :columnName="columnName">
      </IDResult>
    </div> 
      
    </div> 
      
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'
import IDResult from '../components/IDResult.vue'

export default {
  name: "Account",
  components: { 
    Searchbar,
    IDResult,
  },
  data() {
    const url = "http://0.0.0.0/"
    return {
      inputPlaceholder: '輸入',
      buttonText: 'Search',
      input: '',
      startDate: '',
      endDate: '',
      startTimestamp: 0,
      endTimestamp: 0,
      msg: '',
      tableTitle: '',
      columnName: [],
      tableData: [],
    }
  },
  methods:{
    dateToTimestamp(date){  // timestamp 單位為秒
      return Date.parse(date+'T00:00:00') / 1000;
    },
    // timestampToDate(timestamp){
    //   var date = new Date(Number(timestamp) * 1000).toLocaleString();
    //   return date.split(" ")[0];
    //   // new Date(Number(timestamp) * 1000).toLocaleString().split(" ")[0]
    // },
    checkSearch(input ,startDate, endDate){
      if(input == undefined || input == ''){
        return '此帳號不存在';
      }
      else if((startDate == undefined && endDate != undefined) || (startDate != undefined && endDate == undefined)){
        return '請輸入完整的日期';
      }
      else if(startDate != undefined && endDate != undefined){
        if(startDate > endDate)
          return '左邊為開始日期要小於結束日期';
        return 'hasDate';
      }
      return 'noDate';
      console.log('checkover')
    },
    getSearch(input, startDate, endDate) {  //  input為使用者輸入的文字
      
      

      this.msg = this.$options.methods.checkSearch(input, startDate, endDate);
      if(this.msg != 'hasDate' && this.msg != 'noDate'){
        this.tableTitle = '';
        this.columnName = '';
        this.tableData = [];
        alert(this.msg);
        
      }
      else{
        console.log("else執行")
        this.input = input;
        
        if(this.msg == 'hasDate'){
          this.startDate = startDate;
          this.endDate = endDate;
          this.startTimestamp = this.$options.methods.dateToTimestamp(this.startDate); // 秒
          this.endTimestamp = this.$options.methods.dateToTimestamp(this.endDate);
        }
        
        
        
        //  將資料的 date 從 timestep 轉成 一般的 date
        // for(var i = 0 ; i < this.data.length ; i++){
        //   this.data[i]['date'] = this.$options.methods.timestampToDate(this.data[i]['date']);
        // }

        //  搜尋結果的資料
        this.tableTitle = input + ' 之發文紀錄：';
        this.columnName = ['看板', '日期', '標題', '類型'];
        // this.tableData = this.data;
        

        // let url ="http://0.0.0.0//api/GetByUserId?user_id=" + this.input
        let url ="http://140.120.182.87:6003//api/GetByUserId?user_id=" + this.input
        if(this.msg=='hasDate'){
            url = url+"&start="+this.startTimestamp+"&end="+this.endTimestamp
        } 
        console.log(url)
        //var res = encodeURI(url); 
        //url = "https://"+res
        this.$eventBus.$emit('AccountUrlBus',url)
      }
    },
    
  },
}

</script>