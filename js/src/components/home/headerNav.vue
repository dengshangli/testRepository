<template>
  <el-row type="flex" class="nav" justify="center">
      <el-col :span="7" class="col col-left"><i class="el-icon-menu"></i></el-col>
      <el-col :span="9" class="col">{{weatherData.location.name}}</el-col>
      <el-col :span="7" class="col col-right">
        <router-link to="/setting" class="el-icon-setting" tag="i"></router-link>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'header-nav',
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
.nav .col{
  text-align:center;
  height:3.125rem;
  line-height:3.125rem;
}
.nav .col-all{
  height:3.5rem;
  line-height:3.5rem;
  border-bottom:1px solid
}
.nav .col-left{
  text-align:left;
}
.nav .col-right{
  text-align:right;
}
</style>
