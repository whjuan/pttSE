<template>

  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>看板</th>
          <th>日期</th>
          <th>標題</th>
          <th>類型</th>
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
      data: Array,
    },
  }
</script>