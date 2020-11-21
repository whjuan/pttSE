<template>
 <div>
  <div class="container">
  <div class="mt-5">
    關鍵字搜尋
  </div>

  <div>
    <Searchbar/>
    <test/>
    <result/>
   
   </div> 
  </div> 
    
 </div>
</template>
<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'
import Test from '@/components/test.vue'
import Result from '@/components/Result.vue'


export default {
  name: "Keyword",
  components: { 
    Searchbar,
    Test,
    Result,
    
  },
}
 
</script>