<template>
  <div class="home">
     <div class="loading" v-if="!loadState"  v-loading.fullscreen.lock="true" element-loading-text="拼命加载中"></div>
    <div v-if="loadState" class="content">
      <header-nav :weatherData="weatherData"></header-nav>
    <com-weather :weatherData="weatherData"></com-weather>
    <el-row type="flex" justify="center">
      <el-col :span="7"><span class="op-font">{{weatherData.last_update | publishTimeConvert }}发布</span></el-col>
      <el-col :span="9"></el-col>
      <el-col :span="7" class="col-right">
        <i class="el-icon-information op-font"></i>
        <span class="op-font">心知天气</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="23"><hr class="op-font"></el-col>
    </el-row>
    <hour-weather :weatherData="weatherData" :hourWeatherData="hourWeatherData"></hour-weather>
    <el-row type="flex" justify="center">
      <el-col :span="23"><hr class="op-font"></el-col>
    </el-row>
    <days-weather :daysWeatherData="daysWeatherData"></days-weather>
    <wind :weatherData="weatherData"></wind>
     <el-row type="flex" justify="center" class="sun">
      <el-col :span="23" class="col-sun">
        <i class="el-icon-time"></i><span>下玄月</span>
        <div class="cirle"></div>
        <hr class="op-font">
        <el-row type="flex" justify="center" class="hr-bottom">
          <el-col :span="12" class="hr-left"><span class="op-font">06:08</span></el-col>
          <el-col :span="12" class="hr-right"><span class="op-font">18:14</span></el-col>
        </el-row>
      </el-col>
     </el-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { GET_DATA } from '../../store/weatherData'

import headerNav from './headerNav'     // 导航组件
import comWeather from './comWeather'   // 天气展示组件
import hourWeather from './hourWeather' // 小时天气组件
import daysWeather from './daysWeather' // 未来几天天气组件
import wind from './wind'               // 展示风向风力组件
export default {
  name: 'home',
  components: { headerNav, comWeather, hourWeather, daysWeather, wind },
  data () {
    return {
      key: 'e7llga6ecqpsgrl5',
      repeater: 'https://crossorigin.me/',
      location: '福州'
    }
  },
  created () {
    this.getWeatherData()     // 获取目前天气数据
    this.getHourWeatherData() // 获取小时天气数据
    this.getDaysWeatherData() // 获取今天及未来4天天气数据
  },
  methods: {
    ...mapActions([GET_DATA]),
    getWeatherData () {
      const url = this.repeater + 'https://api.thinkpage.cn/v3/weather/now.json?key=' + this.key + '&location=' + this.location + '&language=zh-Hans&unit=c'
      this.getData(url, 'weatherData')
    },
    getHourWeatherData () {
      const url = this.repeater + 'https://api.seniverse.com/v3/weather/hourly.json?key=' + this.key + '&location=' + this.location + '&language=zh-Hans&unit=c&start=0&hours=24'
      this.getData(url, 'hourWeatherData')
    },
    getDaysWeatherData () {
      const url = this.repeater + 'https://api.thinkpage.cn/v3/weather/daily.json?key=' + this.key + '&location=' + this.location + '&language=zh-Hans&unit=c&start=0&days=5'
      this.getData(url, 'daysWeatherData')
    },
    getData (url, dataType) {
      if (JSON.stringify(this[dataType]) !== '{}') {
        return
      }
      const resource = Vue.resource(url)
      resource.get()
      .then((response) => {
        this.GET_DATA({data: response.data.results[0], dataType: dataType})
      })
      .catch((response) => {
        console.log(response)
      })
    }
  },
  computed: mapState({
    weatherData: state => state.weatherData.weatherData,         // 目前天气
    hourWeatherData: state => state.weatherData.hourWeatherData, // 小时天气
    daysWeatherData: state => state.weatherData.daysWeatherData, // 今天以及未来4天天气
    loadState: state => state.weatherData.loadState              // 加载数据状态
  }),
  filters: {
    // 将图片代码过滤为src路径
    weatherImgSrc: Vue.filter('weatherImgSrc'),
    // 转换发布时间
    publishTimeConvert (time) {
      const newDate = new Date(time)
      return newDate.getHours() + '：' + newDate.getMinutes()
    }
    // 过滤掉当日天气，显示未来四天
    // fourDaysData (data) {
    //   if (data.daily) {
    //     data.daily.splice(0, 1)
    //   }
    //   return data
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--background: url(../../assets/home.png) no-repeat center left; -->
<style>
.home{
  background: #20365b;
  color:#fff;
  margin:0;
  padding: 10px;
  box-sizing: border-box;
}

.home .nav .col-center img{
  height:3.125rem;
}
.home .col-right{
  text-align:right;
}
.home .op-font{
  opacity:0.75;
}
.home hr{
  background:#fff;
  height:0.1px;
}
.home .sun{
  margin-top:1rem;
}
.home .sun .cirle{
   width:25rem;
   height:12.5rem;
   border-radius:12.5rem 12.5rem 0 0;
   border: 1px solid #d9c995;
   margin:0 auto;
}
.home .sun .hr-bottom{
   width:27rem;
   margin:0 auto;
}
.home .sun .hr-bottom .hr-right{
  text-align:right;
}
</style>
