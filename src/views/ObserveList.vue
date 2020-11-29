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

          <br>
          <br>

          <ObserveTable
            @deleteRow="deleteRow"
            :obs_id="obs_id">
          </ObserveTable>
        
      </div> 
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import GetInput from "@/components/GetInput.vue"
  import ObserveTable from "@/components/ObserveTable.vue"

  var rows = []

  export default {
    name: 'ObserveList',
    components: { 
      GetInput,
      ObserveTable,
    },
    data() {
      return {
        obs_id: rows,
        inputPlaceholder: '輸入ID', //  GetInput components
        buttonText: '新增觀察', //  GetInput components
        id: '', //  GetInput components
      }
    },
    methods:{
      getInput(data) {  //  GetInput components
        this.id = data;

        if(this.id == undefined || this.id == ''){ //  確認有沒有此 ID
          alert('此 ID 不存在');
        }
        else if(rows.includes(this.id)){
          alert('此 ID 已在觀察名單內');
        }
        else{
          rows.push(this.id);
        }

      },
      deleteRow(id) { //  ObserveTable components
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
    }
  }
 
</script>