<template>
  <div>
    <div class="container">
      <Result :arr="dataArray" :input="input" ></Result>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Result from '@/components/Result.vue';

  export default {
    name: 'ViewRecords',
    components: { 
      Result, 
    },
    data(){
      return{
        dataArray:[],
        input:''
      }
    },
    mounted(){
      var id = this.$route.params.id
      this.input = id
      var url = "http://140.120.182.87:6003/api/GetByUserId?user_id="+ id +"&start=none&end=none"

      this.$http.get(url, { headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }}).then(r => {
          // console.log(r)
          this.dataArray = r.data.hits.map(e => { return e })
      }).catch( r => console.log(r) )
    }
  }


</script>