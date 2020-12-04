<template>
  <div>
    <div class="container">
      <p class="mt-5" v-if="route=='Account'">alonelykid stinger5009 帳號查詢</p>
      <p class="mt-5" v-else-if="route=='Keyword'">鬼滅 關鍵字查詢</p>
      <div>
        <SearchingBar @3param="urlMaker"></SearchingBar>
        <Result :arr="arr" :input="input"></Result>
      </div> 
    </div> 
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import SearchingBar from '@/components/SearchingBar.vue'
import Result from '../components/Result.vue'

export default {
  name: "Account",
  components: { 
    SearchingBar,
    Result
  },
  data() {
    return {
      arr: [],
      input: ''
    }
  },
  computed: {
    route: function(){ return this.$route.name }
  },
  methods:{
    requestSender(url){
      this.$http.get(url, { headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }}).then(r => {
          // console.log(r)
          this.arr = r.data.hits.map(e => { return e })
      }).catch( r => console.log(r) )
    },

    urlMaker(input,d1, d2){
      this.input = input
      var url = "http://140.120.182.87:6003/api/"
      if(this.route === "Keyword") url = url + "GetByContent?content="
      else if(this.route === "Account") url = url + "GetByUserId?user_id="
      url = url + input
      if(isNaN(d1) && isNaN(d2)) url = url + "&start=none&end=none"
      else url = url + "&start=" + d1 + "&end=" + d2
      this.requestSender(url)
    },
  },
}

</script>