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
    return {
      inputPlaceholder: '輸入',
      buttonText: 'Search',
      input: '',
      startDate: '',
      endDate: '',
      startTimestamp: 0,
      endTimestamp: 0,
      msg: '',
      hasDate: false,
      tableTitle: '',
      columnName: [],
      tableData: [],
      data: 
      [
        {
          "board":"Gossipping",
          "date":"1596124800000",  //  2020/7/31
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208414.A.60E.html",
          "article_title":"[問卦] 現在到底可以寄什麼出國啊",
          "type":"推文:蘿莉",
        },
        {
          "board":"Gossipping",
          "date":"1596124800000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208205.A.674.html",
          "article_title":"[新聞] 印度防疫封鎖令買不到酒喝 9人灌消毒洗手液後暴斃",
          "type":"推文:加了什麼鬼才會死吧",
        },
        {
          "board":"Gossipping",
          "date":"1596124800000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596196823.A.DA0.html",
          "article_title":"Re: [問卦] 酒那麼難喝 為什麼這麼受歡迎？",
          "type":"推文:吃魚更好",
        },
        {
          "board":"Gossipping",
          "date":"1596124800000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596201495.A.E25.html",
          "article_title":"[問卦] 哪個名人過世的日子很難忘?",
          "type":"推文:鋼鐵人",
        },
      ],
    }
  },
  methods:{
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
        this.hasDate = true;
        return 'ok';
      }
      return 'ok';
    },
    getSearch(input, startDate, endDate) {  //  input為使用者輸入的文字
      this.msg = this.$options.methods.checkSearch(input, startDate, endDate);
      if(this.msg != 'ok'){
        this.tableTitle = '';
        this.columnName = '';
        this.tableData = [];
        alert(this.msg);
      }
      else{
        this.input = input;
        if(this.hasDate){
          this.startDate = startDate;
          this.endDate = endDate;
          this.startTimestamp = Date.parse(this.startDate+'T00:00:00'); //毫秒
          this.endTimestamp = Date.parse(this.endDate+'T00:00:00');
        }
        
        //  將資料的 date 從 timestep 轉成 一般的 date
        for(var i=0;i<this.data.length;i++){
          this.data[i]['date'] = new Date(Number(this.data[i]['date'])).toLocaleString().split(" ")[0];
        }

        //  搜尋結果的資料
        this.tableTitle = input + ' 之發文紀錄：';
        this.columnName = ['看板', '日期', '標題', '類型'],
        this.tableData = this.data;
      }
    }
  },
}
 
</script>