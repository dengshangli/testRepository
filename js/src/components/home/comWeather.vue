<template>
  <div class="weather">
      <div class="weather-content">
        <span class="temperature">{{weatherData.now.temperature}}°</span>
        <span class="condition">{{weatherData.now.text}}</span>
        <span class="weather-range">24°<span class="op-font">&nbsp;/&nbsp;14°</span></span>
        <span class="air op-font">空气良</span>
      </div>
   </div>
</template>

<script>
  export default {
    name: 'com-weather',
    props: {
      weatherData: Object
    }
  }
</script>
  
<style scope>
  .weather{
    height:20rem;
    display:flex;
    justify-content: center;
    align-items:center;
    text-align:center;
  }
  .weather .weather-content span{
    display:block;
  }
  .weather .weather-content .weather-range span{
    display:inline;
  }
  .weather .weather-content .temperature{
    font-size:5rem;
    margin-left:1rem;
  }
  .weather .weather-content .condition{
    font-size:1.6rem;
    line-height:3rem;
  }
</style>
