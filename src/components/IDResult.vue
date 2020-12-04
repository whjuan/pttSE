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
          <td> {{ item.date }}</td>
          <td> <a target="_blank" :href=item.article_url>{{ item.article_title }}</a> </td>
          <td> {{ item.type }}</td>
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
    props: {
      tableTitle: String,
      columnName: Array,
      tableData: Array,
    },
    methods:{
      get_url_query(uri){
     

      },


    },
    // mounted(){
    // let nanachi = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-1F2B5846-35EB-42DD-B3C3-4084A4709AA4"
    // this.$http.get(nanachi).then(r => {
    //   console.log(r)
    //   //console.log(r.data.records.location[0].locationName)
    // }).catch( r => {
    //   console.log(r)
    // })
 // }

    
  }
  
</script>