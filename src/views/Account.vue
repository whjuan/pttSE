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
      :columnName="columnName"
      :tableData="tableData">
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
      data: 
      [
        {
          "board":"Gossipping",
          "date":"1596124800",  //  2020/7/31
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208414.A.60E.html",
          "article_title":"[問卦] 現在到底可以寄什麼出國啊",
          "type":"推文:蘿莉",
        },
        {
          "board":"Gossipping",
          "date":"1596124800",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208205.A.674.html",
          "article_title":"[新聞] 印度防疫封鎖令買不到酒喝 9人灌消毒洗手液後暴斃",
          "type":"推文:加了什麼鬼才會死吧",
        },
        {
          "board":"Gossipping",
          "date":"1596124800",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596196823.A.DA0.html",
          "article_title":"Re: [問卦] 酒那麼難喝 為什麼這麼受歡迎？",
          "type":"推文:吃魚更好",
        },
        {
          "board":"Gossipping",
          "date":"1596124800",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596201495.A.E25.html",
          "article_title":"[問卦] 哪個名人過世的日子很難忘?",
          "type":"推文:鋼鐵人",
        },
      ],
    }
  },
  methods:{
    dateToTimestamp(date){  // timestamp 單位為秒
      return Date.parse(date+'T00:00:00') / 1000;
    },
    timestampToDate(timestamp){
      var date = new Date(Number(timestamp) * 1000).toLocaleString();
      return date.split(" ")[0];
    },
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
        this.input = input;
        
        if(this.msg == 'hasDate'){
          this.startDate = startDate;
          this.endDate = endDate;
          this.startTimestamp = this.$options.methods.dateToTimestamp(this.startDate); // 秒
          this.endTimestamp = this.$options.methods.dateToTimestamp(this.endDate);
           
        }
        
        
        
        //  將資料的 date 從 timestep 轉成 一般的 date
        for(var i = 0 ; i < this.data.length ; i++){
          this.data[i]['date'] = this.$options.methods.timestampToDate(this.data[i]['date']);
        }

        //  搜尋結果的資料
        this.tableTitle = input + ' 之發文紀錄：';
        this.columnName = ['看板', '日期', '標題', '類型'],
        this.tableData = this.data;
        

        let url ="0.0.0.0/api/GetByUserId?user_id="+this.input
         if(this.msg=='hasDate'){
            url = url+"&start="+this.startTimestamp+"&end="+this.endTimestamp
         } 
        console.log(url)
        //var res = encodeURI(url); 
        //url = "https://"+res
        console.log(url)
        this.$eventBus.$emit('get_url_query',this.url)
      }
    },
    
  },
  // mounted(){
  //   let nanachi = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-1F2B5846-35EB-42DD-B3C3-4084A4709AA4"
  //   this.$http.get(nanachi).then(r => {
  //     console.log(r)
  //     console.log(r.data.records.location[0].locationName)
  //   }).catch( r => {
  //     console.log(r)
  //   })
  // }
}
 
</script>