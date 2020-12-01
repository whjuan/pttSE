<template>
 <div>
  <div class="container">
  
  <div class="mt-5">
    關鍵字搜尋
  </div>

  <div>
    <Searchbar
      @getSearch="getSearch"
      :inputPlaceholder="inputPlaceholder"
      :buttonText="buttonText">
    </Searchbar>

    <KeywordResult
      :tableTitle="tableTitle"
      :columnName="columnName"
      :tableData="tableData">
    </KeywordResult>
  </div> 

  </div>
    
 </div>
</template>
<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'
import KeywordResult from '@/components/KeywordResult.vue';


export default {
  name: "Keyword",
  components: { 
    Searchbar,
    KeywordResult,
  },
  data() {
    return {
      inputPlaceholder: '輸入',
      buttonText: 'Search',
      input: '',
      startDate: '',
      endDate: '',
      msg: '',
      hasDate: false,
      tableTitle: '',
      columnName: [],
      tableData: [],
      data: [
        {
          "user_id":"deepinheart",
          "board":"Gossipping",
          "date":"1605456000000", // 2020/11/16
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"發文",
        },
        {
          "user_id":"s0930194",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"噓文",
        },
        {
          "user_id":"YingJiou5566",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"uhbygv45",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"lcbshadow",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"wfelix",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"u8809048",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"extemjin",
          "board":"Gossipping",
          "date":"1605456000000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605539935.A.510.html",
          "article_title":"[新聞] 川普律師：Dominion操縱選舉 將公開證據",
          "type":"發文",
        },
      ],
    }
  },
  methods:{
    checkSearch(input ,startDate, endDate){
      if(input == undefined || input == ''){
        return '此關鍵字不存在';
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
        this.columnName = ['作者帳號', '看板', '日期', '標題', '類型'],
        this.tableData = this.data;
      }
    }
  }
}
 
</script>