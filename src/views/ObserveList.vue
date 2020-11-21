<template>
 <div>
  <div class="container">
  
  <div>
         <form>
        <div class="row mt-5">
          <div class="col-10 pr-0">
            <input type="text" class="form-control" placeholder="輸入ID">
          </div>
          <div class="col-2 ">
            <button type="button" class="btn btn-primary">新增觀察</button>
          </div>
         
        </div>
      </form>

       <table class="mt-5">
        <tr>
          <td>tjbulls</td>
          <td><button type="button" class="btn btn-primary" >移除觀察</button></td>
          <td><button type="button" class="btn btn-primary">查看紀錄</button></td>
        </tr>
        <tr>
          <td>sp89005</td>
          <td><button type="button" class="btn btn-primary">移除觀察</button></td>
          <td><button type="button" class="btn btn-primary" >查看紀錄</button></td>
        </tr>
        <tr>
          <td>childchen</td>
          <td><button type="button" class="btn btn-primary">移除觀察</button></td>
          <td><button type="button" class="btn btn-primary">查看紀錄</button></td>
        </tr>
        <tr>
          <td>Rambo</td>
          <td><button type="button" class="btn btn-primary">移除觀察</button></td>
          <td><button type="button" class="btn btn-primary">查看紀錄</button></td>
        </tr>
        <tr>
          <td>zkow</td>
          <td><button type="button" class="btn btn-primary">移除觀察</button></td>
          <td><button type="button" class="btn btn-primary">查看紀錄</button></td>
        </tr>

      </table>


    
    
   </div> 
  </div> 
    
 </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Searchbar from '@/components/Searchbar.vue'


export default {
name: 'ObserveList',
  
  components: { 
    Searchbar,
  
  
  },
}
 
</script>