<template>

  <div>
    <div class="mt-5"> {{ tableTitle }} </div>

    <br>

    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="cName in columnName" :key="cName"> {{ cName }} </th>
        </tr>
      </thead>
  

      <tbody>
        <tr v-for="item in tableData" :key="item">
          <td> {{ item.board }}</td>
          <td> {{ new Date(Number(item.date) * 1000).toLocaleString().split(" ")[0] }}</td>
          <td> <a target="_blank" :href="item.article_url">{{ item.article_title }}</a> </td>
          <td> {{ item.comment_tag }} : {{ item.content }}</td>
        </tr>
      </tbody>

    </table>
  </div>

</template>



<style lang="scss" scoped>

</style>



<script>
  export default {
    name: "IDResult",
    data(){
      return {
        arr: []
      }
    },
    props: {
      tableTitle: String,
      columnName: Array,
    },
    computed: {
      tableData: function(){ return this.arr }
    },
    mounted(){
      this.$eventBus.$on('AccountUrlBus',p =>{
        console.log("p= " + p)
        this.$http.get(p, { headers:{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }}).then(r => {
          // console.log("Http response has been recieved")
          // console.log("Success")
          // console.log(r)
          this.arr = r.data.hits.map(e => {
            return e._source
          })
        }).catch( r => {
          // console.log("Http response has been recieved")
          // console.log("Error")
          // console.log(r)
        })
      })
    }  

    
  }
  
</script>