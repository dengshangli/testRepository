<template>
  <div class="add-city">
    <setting-nav>
      <i @click="$router.back()" class="el-icon-arrow-left" slot="left"></i>
      <span slot="center">添加城市</span>
    </setting-nav>
    <div class="search-box">
       <el-input 
        placeholder="搜索城市（中文/拼音）" 
        icon="search" 
        v-model="input2" 
        :on-icon-click="searchCity">
      </el-input>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">推荐城市</span>
      </div>
      <table class="data-table">
        <tr v-for="citys in recommenCitys">
          <td v-for="city in citys">{{city}}</td
        ></tr>
      </table>
    </el-card>
  </div>
</template>

<script>
  import settingNav from './settingNav'
  export default {
    name: 'add-city',
    components: { settingNav },
    data () {
      return {
        input2: '',
        recommenCitys: []
      }
    },
    created () {
      this.getRecommendCity() // 获取推荐城市
    },
    methods: {
      searchCity (ev) {
        console.log(ev)
      },
      getRecommendCity () {
        const resource = this.$resource('./static/json/recommendCity.json')
        resource.get()
        .then((response) => {
          this.recommenCitys = response.data
        })
        .catch((response) => {
          console.log(response)
        })
      }
    }
  }
</script>

<style scope>
  .add-city .data-table{
      width:100%;
      border-collapse: collapse;/* 边框合并属性  */;
  }
  .add-city .data-table td{
    width: 33.33333333333333%;
    border: 1px solid #dfe6ec;
    box-sizing: border-box;
    text-align:center;
    padding: 10px;
  }
  .add-city .search-box {
    padding: 18px 20px;
  }
</style>
