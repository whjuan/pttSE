<template>
 <div>
  <div class="container">
  <div class="mt-5">
    帳號查詢
  </div>

  <div>
    <Searchbar/>
      <p></p>
      <div> Qbey 之發文紀錄：</div>
      <test/>

      <IDsearch/>


   </div> 
  </div> 
    
 </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'
import Test from '@/components/test.vue'
import IDsearch from '@/components/IDsearch.vue'

export default {
  name: "Account",
  components: { 
    Searchbar,
    Test,
    IDsearch,
    
  

  },
}
 
</script>