<template>

  <form>
    <div class="row mt-5">
      <div class="col-10 pr-0">
        <input type="text" class="form-control" :placeholder="[[inputPlaceholder]]" v-model="input">
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary" @click="setInput"> {{ buttonText }} </button>  <!--v-on:click="addRow(id)"-->
      </div>
      
    </div>
  </form>

</template>



<style lang="scss" scoped>

</style>



<script>
  export default {
    name: "GetInput",
    props: {
      inputPlaceholder: String,
      buttonText: String,
    },
    methods: {
      setInput() {
        this.$emit('getInput', this.input);
      }
    }
  }
</script>