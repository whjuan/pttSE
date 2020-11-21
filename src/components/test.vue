<template>
    <div>
      <div class="container pt-3">
        選擇日期區間
        <form id="form1">
          <div class="form-row">
            
            
            <div class="form-group col-2">
              <label for="inputState" class="text-white">卡</label>
              <select id="inputState" class="form-control">
                <option selected disabled>請選擇</option>
                <option>2020</option>
                <option>2019</option>
              </select>
            </div>
            <div class="form-group col-2">
              <label for="inputState" class="text-white">卡</label>
              <select id="inputState" class="form-control" v-model="monthCheck1">
                <option selected disabled>請選擇</option>
                <option v-for="n in 12" :key="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group col-2">
              <label for="inputState" class="text-white">寶</label>
              <select id="inputState" class="form-control" v-if="monthCheck1 == 4 || monthCheck1 == 6 || monthCheck1 == 9 || monthCheck1 == 11">
                <option selected disabled>請選擇</option>
                <option  v-for="n in 30" :key="n">{{ n }}</option>
              </select>
              <select id="inputState" class="form-control" v-else-if="monthCheck1 == 2">
                <option selected disabled>請選擇</option>
                <option  v-for="n in 28" :key="n">{{ n }}</option>
              </select>
              <select id="inputState" class="form-control" v-else-if="monthCheck1 == 0">
                <option selected disabled>請選擇</option>
              </select>
              <select id="inputState" class="form-control" v-else>
                <option selected disabled>請選擇</option>
                <option  v-for="n in 31" :key="n">{{ n }}</option>
              </select>
            </div>

            <div class="form-group col-2">
              <label for="inputState" class="text-white">寶</label>
              <select id="inputState" class="form-control">
                <option selected disabled>請選擇</option>
                <option>2020</option>
                <option>2019</option>
              </select>
            </div>
            <div class="form-group col-2">
              <label for="inputState" class="text-white">卡</label>
              <select id="inputState" class="form-control" v-model="monthCheck2">
                <option selected disabled>請選擇</option>
                <option v-for="n in 12" :key="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group col-2">
              <label for="inputState" class="text-white">寶</label>
              <select id="inputState" class="form-control" v-if="monthCheck2 == 4 || monthCheck2 == 6 || monthCheck2 == 9 || monthCheck2 == 11">
                <option selected disabled>請選擇</option>
                <option  v-for="n in 30" :key="n">{{ n }}</option>
              </select>
              <select id="inputState" class="form-control" v-else-if="monthCheck2 == 2">
                <option selected disabled>請選擇</option>
                <option  v-for="n in 28" :key="n">{{ n }}</option>
              </select>
              <select id="inputState" class="form-control" v-else-if="monthCheck2 == 0">
                <option selected disabled>請選擇</option>
              </select>
              <select id="inputState" class="form-control" v-else>
                <option selected disabled>請選擇</option>
                <option  v-for="n in 31" :key="n">{{ n }}</option>
              </select>
            </div>
          </div>
        </form>

      </div>
  
  </div>
</template>

<style lang="scss" scoped>

   </style>




<script>
    export default {
  name: "Test",  
}
     

    </script>