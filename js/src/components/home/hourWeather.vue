<template>
  <el-row type="flex"  justify="center" class="hour">
      <el-col :span="4" class="col">
        <div>
          <span  class="op-font">现在</span>
          <img :src="weatherData.now.code | weatherImgSrc" alt="">
          <span  class="op-font">{{weatherData.now.temperature}}°</span>
        </div>
      </el-col>
      <el-col :span="4" class="col" v-for="i in 5">
        <div>
          <span  class="op-font">{{hourWeatherData.hourly[i].time | hour}}</span>
          <img :src="hourWeatherData.hourly[i].code | weatherImgSrc" alt="">
          <span  class="op-font">{{hourWeatherData.hourly[i].temperature}}°</span>
        </div>
      </el-col>
      </el-row>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'hour-weather',
    props: {
      weatherData: Object,
      hourWeatherData: Object
    },
    data () {
      return {
      }
    },
    filters: {
      // 转换今日天气小时时数
      hour (dateStr) {
        return new Date(dateStr).getHours() + ':00'
      },
      // 将图片代码过滤为src路径
      weatherImgSrc: Vue.filter('weatherImgSrc')
    }
  }
</script>
  
<style scope>
.hour .col{
  height:10rem;
  display:flex;
  align-items:center;
  justify-content: center;
  text-align:center;
}
.hour img{
  display:block
}
</style>
