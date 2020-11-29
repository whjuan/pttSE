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
        <tr v-for="item in data" :key="item">
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
      data: Array,
    },
  }
</script>