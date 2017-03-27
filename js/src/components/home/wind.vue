<template>
  <el-row type="flex" class="nav wind" justify="center">
    <el-col :span="7" class="col col-win col-all">
      <span>风向风力</span>
      <img src="../../assets/wind.png" alt="">
    </el-col>
    <el-col :span="9" class="col-win  col-all"></el-col>
    <el-col :span="7" class="col-win1  col-all">
      <div>
        <span class="op-font">风向</span><span class="font-left">{{weatherData.now.wind_direction}}风</span><br>
        <span class="op-font">风力等级</span><span class="font-left">{{weatherData.now.wind_scale}}级</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'wind',
    props: {
      weatherData: Object
    },
    data () {
      return {
      }
    }
  }
</script>
  
<style scope>
 .wind .col-win span{
    display:block;
    text-align:left;
  }
  .wind .col-win img{
    display:block;
    float:right;
  }
  .wind .col-win{
    height:15rem;
  }
  .wind .col-win1{
    height:15rem;
    display:flex;
    align-items:center;
  }
  .wind .col-win1 .font-left{
    margin-left:1rem;
  }
  .wind .col-all{
    border-bottom:1px solid;
  }
</style>
