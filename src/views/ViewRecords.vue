<template>
  <div>
    <div class="container">
      <!--<div class="mt-5"> {{ id }} 之發文紀錄：</div>

      <br>
      <br>-->

      <IDResult
        :tableTitle="tableTitle"
        :columnName="columnName"
        :data="data">
      </IDResult>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import IDResult from '@/components/IDResult.vue';

  export default {
    name: 'ViewRecords',
    components: { 
      IDResult, 
    },
    data(){
      return{
        tableTitle: this.$route.params.id + ' 之發文紀錄：',
        columnName: ['看板', '日期', '標題', '類型'],
        data:[
          {
            "article_id":"",
            "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208414.A.60E.html",
            "article_title":"[問卦] 現在到底可以寄什麼出國啊",
            "user_id":"obey",
            "user_nickname":"",
            "board":"Gossipping",
            "content":"",
            "date":"2020/7/31",
            "ip":"",
            "type":"article",
            "comment_tag":"",
          },
          {
              "article_id":"",
              "article_url":"https://www.pttweb.cc/bbs/MacShop/M.1606117960.A.898",
              "article_title":"[TSNA] 終結紅襪、小熊魔咒　Epstein辭職後動向受關注",
              "user_id":"obey",
              "user_nickname":"",
              "board":"NBA",
              "content":"",
              "date":"2020/11/18",
              "ip":"",
              "type":"comment",
              "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/Kaohsiung/M.1606117982.A.338",
            "article_title":"[買錶] omega speedmaster",
            "user_id":"obey",
            "user_nickname":"",
            "board":"Gossipping",
            "content":"",
            "date":"2020/11/23",
            "ip":"",
            "type":"comment",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/BabyProducts/M.1606117917.A.F85",
            "article_title":"[新聞] 台南「蘇大媽」現身台北轉運站 為保管行李咆哮辱罵櫃台人員",
            "user_id":"obey",
            "user_nickname":"",
            "board":"Gossipping",
            "content":"",
            "date":"2010/02/05",
            "ip":"",
            "type":"article",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/PingTung/M.1606117805.A.A40",
            "article_title":"[問安] 嗡嗡嗡~",
            "user_id":"obey",
            "user_nickname":"",
            "board":"NBA",
            "content":"",
            "date":"2020/11/19",
            "ip":"",
            "type":"comment",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/Key_Mou_Pad/M.1606117739.A.34D",
            "article_title":"[新聞] 21年式Toyota LC Prado換裝2.8柴油",
            "user_id":"obey",
            "user_nickname":"",
            "board":"PC_Shopping",
            "content":"",
            "date":"2009/02/07",
            "ip":"",
            "type":"article",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/CVS/M.1606117701.A.127",
            "article_title":"[販售] 台北 Airpods Pro / Airpods 2 有線 全新未拆",
            "user_id":"obey",
            "user_nickname":"",
            "board":"movie",
            "content":"",
            "date":"2020/11/20",
            "ip":"",
            "type":"comment",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.ptt.cc/bbs/Gossiping/M.1596208414.A.60E.html",
            "article_title":"[問卦] 現在到底可以寄什麼出國啊",
            "user_id":"obey",
            "user_nickname":"",
            "board":"Gossipping",
            "content":"",
            "date":"2020/7/31",
            "ip":"",
            "type":"article",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/MacShop/M.1606117960.A.898",
            "article_title":"[TSNA] 終結紅襪、小熊魔咒　Epstein辭職後動向受關注",
            "user_id":"obey",
            "user_nickname":"",
            "board":"NBA",
            "content":"",
            "date":"2020/11/18",
            "ip":"",
            "type":"comment",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/Kaohsiung/M.1606117982.A.338",
            "article_title":"[買錶] omega speedmaster",
            "user_id":"obey",
            "user_nickname":"",
            "board":"Gossipping",
            "content":"",
            "date":"2020/11/23",
            "ip":"",
            "type":"comment",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/BabyProducts/M.1606117917.A.F85",
            "article_title":"[新聞] 台南「蘇大媽」現身台北轉運站 為保管行李咆哮辱罵櫃台人員",
            "user_id":"obey",
            "user_nickname":"",
            "board":"Gossipping",
            "content":"",
            "date":"2010/02/05",
            "ip":"",
            "type":"article",
            "comment_tag":"",
          },
          {
            "article_id":"",
            "article_url":"https://www.pttweb.cc/bbs/PingTung/M.1606117805.A.A40",
            "article_title":"[問安] 嗡嗡嗡~",
            "user_id":"obey",
            "user_nickname":"",
            "board":"NBA",
            "content":"",
            "date":"2020/11/19",
            "ip":"",
            "type":"comment",
            "comment_tag":"",
          }
        ],
      }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
  }


</script>