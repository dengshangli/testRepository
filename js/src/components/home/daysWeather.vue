<template>
<div>
  <el-row type="flex" class="nav" justify="center" v-for="item in daysWeatherData.daily">
    <el-col :span="7" class="col col-all col-left">{{item.date | datecConversion}}</el-col>
    <el-col :span="9" class="col col-all col-center"><img :src="item.code_day | weatherImgSrc" alt=""></el-col>
    <el-col :span="7" class="col col-all col-right">
      <span>{{item.high}}°<span class="op-font">&nbsp;/&nbsp;{{item.low}}°</span></span>
    </el-col>
  </el-row>
</div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'days-weather',
    props: {
      daysWeatherData: Object
    },
    data () {
      return {
      }
    },
    filters: {
      // 转换未来4天日期格式
      datecConversion (futureDate) {
        const newDate = new Date(futureDate)
        return newDate.getMonth() + 1 + '月' + newDate.getDate() + '星期' + newDate.getDay()
      },
      // 将图片代码过滤为src路径
      weatherImgSrc: Vue.filter('weatherImgSrc')
    }
  }
</script>
  
<style scope>
</style>
