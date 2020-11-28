<template>
 <div>
  <div class="container">
  <div class="mt-5">
    新增觀察ID
  </div>
  <div>
      
      <GetInput
        @getInput="getInput" 
        :inputPlaceholder="inputPlaceholder"
        :buttonText="buttonText">
      </GetInput>

      <!--<form>
        <div class="row mt-5">
          <div class="col-10 pr-0">
            <input type="text" class="form-control" placeholder="輸入ID" v-model="id">
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-primary" v-on:click="addRow(id)">新增觀察</button>
          </div>
         
        </div>
      </form>-->

      <br>
      <br>

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
                <button type="button" class="btn btn-danger" v-on:click="deleteRow(id)">移除觀察</button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>


    
    
   </div> 
  </div> 
    
 </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import GetInput from "@/components/GetInput.vue"
var rows = []

  export default {
    name: 'ObserveList',
    components: { 
      GetInput,
    },
    data() {
      return {
        obs_id: rows,
        id: '',
        inputPlaceholder: '輸入ID', //  GetInput components
        buttonText: '新增觀察', //  GetInput components
      }
    },
    methods:{
      getInput(data) {  //  GetInput components
        this.id = data;

        if(this.id == undefined){ //  確認有沒有此 ID
          alert('此 ID 不存在');
        }
        else if(rows.includes(this.id)){
          alert('此 ID 已在觀察名單內');
        }
        else{
          rows.push(this.id);
        }

      },
      /*addRow(id) {
        if(id == undefined){ //  確認有沒有此 ID
          alert('此 ID 不存在');
        }
        else if(rows.includes(id)){
          alert('此 ID 已在觀察名單內');
        }
        else{
          rows.push(id);
        }
      },*/
      deleteRow(id) {
        var yes = confirm('確定移除 '+ id +' 嗎？');  //  確認是否刪除
        if(yes){
          for( var i = 0; i < rows.length; i++){
            if( rows[i] == id){
              rows.splice(i, 1);
              break;
            }
          }
        }
      },
      passValue(id) {
        this.$router.push({name:'ViewRecords',params:{id:id}});
      }
    }
  }
 
</script>