<template>
 <div>
  <div class="container">
  
  <div class="mt-5">
    帳號查詢
  </div>

  <div>
    <!--<Searchbar/>
    
    <p></p>
    <div> Qbey 之發文紀錄：</div>
    <test/>

    <IDsearch>
    </IDsearch>-->

    <GetInput
      @getInput="getInput"
      :inputPlaceholder="inputPlaceholder"
      :buttonText="buttonText">
    </GetInput>

    <div>
      <br>
      <input type="date" id="date" name="date">
    </div>

    <IDResult
      :tableTitle="tableTitle"
      :columnName="columnName"
      :data="data">
    </IDResult>
  </div> 

  </div> 
    
 </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'
import Test from '@/components/test.vue'
import IDsearch from '@/components/IDsearch.vue'
import IDResult from '../components/IDResult.vue'
import GetInput from '../components/GetInput.vue'

export default {
  name: "Account",
  components: { 
    Searchbar,
    Test,
    IDsearch,
    IDResult,
    GetInput,
  },
  data() {
    return {
      inputPlaceholder: '輸入',
      buttonText: 'Search',
      input: '',
      tableTitle: '',
      columnName: [],
      data: [],
    }
  },
  methods:{
    getInput(input) {  //  data為使用者輸入的文字
      this.input = input;

      this.tableTitle = input + ' 之發文紀錄：';
      this.columnName = ['看板', '日期', '標題', '類型'],
      this.data = [
        {
          "board":"Gossipping",
          "date":"2020/7/31",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208414.A.60E.html",
          "article_title":"[問卦] 現在到底可以寄什麼出國啊",
          "type":"推文:蘿莉",
        },
        {
          "board":"Gossipping",
          "date":"2020/7/31",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208205.A.674.html",
          "article_title":"[新聞] 印度防疫封鎖令買不到酒喝 9人灌消毒洗手液後暴斃",
          "type":"推文:加了什麼鬼才會死吧",
        },
        {
          "board":"Gossipping",
          "date":"2020/7/31",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596196823.A.DA0.html",
          "article_title":"Re: [問卦] 酒那麼難喝 為什麼這麼受歡迎？",
          "type":"推文:吃魚更好",
        },
        {
          "board":"Gossipping",
          "date":"2020/7/31",
          "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596201495.A.E25.html",
          "article_title":"[問卦] 哪個名人過世的日子很難忘?",
          "type":"推文:鋼鐵人",
        },
      ]
    }
  },
}
 
</script>