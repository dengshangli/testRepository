<template>
  <el-card class="setting-nav">
    <el-row type="flex" justify="space-between">
      <el-col :span="7"><slot name="left"></slot></el-col>
      <el-col :span="9" class="col-center"><slot name="center"></slot></el-col>
      <el-col :span="7" class="col-right"><slot name="right"></slot></el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'setting-nav',
    methods: {
    }
  }
</script>

<style scope>
  .setting-nav {
    background: rgb(50, 65, 87);
    color: rgb(191, 203, 217);
    border:none;
    border-radius:0;
  }
  .setting-nav .col-center{
    text-align:center;
  }
  .setting-nav .col-right{
    text-align:right;
  }
</style>
