<template>

  <form>
    <div class="row mt-5">
      <div class="col-10 pr-0">
        <input type="text" class="form-control" :placeholder="[[inputPlaceholder]]" v-model="input">
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary" @click="setSearch"> {{ buttonText }} </button>
      </div>
      
     
      <div class="col-10 pr-0">
        <div class="mt-5">
          選擇日期區間
        </div>
        <br>
        <input type="date" id="date" v-model="startDate"> ~ <input type="date" id="date" v-model="endDate">
      </div>

    </div>
  </form>

</template>



<style lang="scss" scoped>

</style>



<script>
  export default {
    name: "Searchbar",
    props: {
      inputPlaceholder: String,
      buttonText: String,
    },
    methods: {
      setSearch() {
        this.$emit('getSearch', this.input, this.startDate, this.endDate);
      }
    }
  }
</script>