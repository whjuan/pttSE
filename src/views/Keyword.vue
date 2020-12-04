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
      tableTitle: '',
      columnName: [],
      tableData: [],
      data: [
        {
          "user_id":"deepinheart",
          "board":"Gossipping",
          "date":"1605456000", // 2020/11/16
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"發文",
        },
        {
          "user_id":"s0930194",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"噓文",
        },
        {
          "user_id":"YingJiou5566",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"uhbygv45",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"lcbshadow",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"wfelix",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"u8809048",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605540889.A.C5C.html",
          "article_title":"Re: [新聞] 川普律師鮑威爾：擬在多州翻轉大選結果",
          "type":"推文",
        },
        {
          "user_id":"extemjin",
          "board":"Gossipping",
          "date":"1605456000",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1605539935.A.510.html",
          "article_title":"[新聞] 川普律師：Dominion操縱選舉 將公開證據",
          "type":"發文",
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
        return '此關鍵字不存在';
      }
      else if((startDate == undefined && endDate != undefined) || (startDate != undefined && endDate == undefined)){
        return '請輸入完整的日期';
      }
      else if(startDate != undefined && endDate != undefined){
        if(startDate > endDate)
          return '左邊為開始日期要小於結束日期';
        this.hasDate = true;
        return 'hasDate';
      }
      return 'noDate';
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
        for(var i=0;i<this.data.length;i++){
          this.data[i]['date'] = this.$options.methods.timestampToDate(this.data[i]['date']);
        }

        //  搜尋結果的資料
        this.tableTitle = input + ' 之發文紀錄：';
        this.columnName = ['作者帳號', '看板', '日期', '標題', '類型']
        //this.tableData = this.data;

        let url ="0.0.0.0/api/GetByUserId?content="+this.input
         if(this.msg=='hasDate'){
            url = url+"&start="+this.startTimestamp+"&end="+this.endTimestamp
         } 
        console.log(url)
        var res = encodeURI(url); 
        url = "https://"+res
        console.log(url)

      }
    }
  }
}
 
</script>