<template>
 <div>
  <div class="container">
  <div class="mt-5">
    帳號查詢
  </div>

  <div>
    <Searchbar/>
    <Filter/>
   </div> 
  </div> 
    
 </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'
import Filter from '@/components/Filter.vue'

export default {
  name: "Account",
  components: { 
    Searchbar,
    Filter
  },
}
 
</script>