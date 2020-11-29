<template>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>觀察ID</th>
        <th>操作</th>
      </tr>
    </thead>
  

    <tbody>
      <tr v-for="id in obs_id" :key="id">
        <td>
          {{ id }}
        </td>
        <td>
          <div>
            <router-link :to="{ name: 'ViewRecords', params: { id: id } }" v-on:click="passValue(id)">查看紀錄</router-link>
            &emsp;&emsp;&emsp;
            <button type="button" class="btn btn-danger" @click="deleteRow(id)">移除觀察</button>
          </div>
        </td>
      </tr>
    </tbody>

  </table>

</template>


<style lang="scss" scoped>

</style>


<script>

  export default {
    name: "ObserveTable",
    props: {
      obs_id: Array,
    },
    methods: {
      passValue(id) {
        this.$router.push({name:'ViewRecords',params:{id:id}});
      },
      deleteRow(id) {
        this.$emit('deleteRow', id);
      },
    }
  }
</script>