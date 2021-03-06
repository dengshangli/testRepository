export const GET_DATA = 'GET_DATA'            // 获取各种天气数据
export const SUBMIT_DEGREE = 'SUBMIT_DEGREE'  // 提交温度单位
export default {
  state: {
    weatherData: {},     // 目前天气
    hourWeatherData: {}, // 小时天气
    daysWeatherData: {}, // 今天以及未来4天天气
    loadState: false,    // 加载数据状态
    degreeDay: '℃'      // 默认温度单位
  },
  mutations: {
    [GET_DATA] (state, sendData) {
      state[sendData.dataType] = sendData.data
      if (state.weatherData.now !== undefined && state.hourWeatherData.hourly !== undefined && state.daysWeatherData.daily !== undefined) {
        state.loadState = true
      }
    },
    [SUBMIT_DEGREE] (state, degreeObj) {
      const hourly = state.hourWeatherData.hourly
      const daily = state.daysWeatherData.daily
      state.degreeDay = degreeObj.newDegree
      if (degreeObj.oldDegree === '℃' && degreeObj.newDegree === '℉') {
        state.weatherData.now.temperature = Math.round(state.weatherData.now.temperature * 9 / 5) + 32
        for (let i = 0; i < hourly.length; i++) {
          hourly[i].temperature = Math.round(hourly[i].temperature * 9 / 5) + 32
        }
        for (let i = 0; i < daily.length; i++) {
          daily[i].low = Math.round(daily[i].low * 9 / 5) + 32
          daily[i].high = Math.round(daily[i].low * 9 / 5) + 32
        }
      } else if (degreeObj.oldDegree === '℉' && degreeObj.newDegree === '℃') {
        state.weatherData.now.temperature = Math.round((state.weatherData.now.temperature - 32) * 5 / 9)
        for (let i = 0; i < hourly.length; i++) {
          hourly[i].temperature = Math.round((hourly[i].temperature - 32) * 5 / 9)
        }
        for (let i = 0; i < daily.length; i++) {
          daily[i].low = Math.round((daily[i].low - 32) * 5 / 9)
          daily[i].high = Math.round((daily[i].high - 32) * 5 / 9)
        }
      }
    }
  },
  actions: {
    [GET_DATA] ({commit}, sendData) {
      commit(GET_DATA, sendData)
    },
    [SUBMIT_DEGREE] ({commit}, degreeObj) {
      commit(SUBMIT_DEGREE, degreeObj)
    }
  }
}
