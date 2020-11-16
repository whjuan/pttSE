<template>
 <div>
  <div class="container">
  
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
name: 'ObserveList',
  
  components: { 
    Searchbar,
    Filter
  },
}
 
</script>