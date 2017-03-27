<template>
  <div class="setting">
    <setting-nav>
      <i @click="$router.back()" class="el-icon-arrow-left" slot="left"></i>
      <span slot="center">设置</span>
    </setting-nav>
    <setting-items></setting-items>
  </div>
</template>

<script>
  import settingNav from './settingNav'
  import settingItems from './settingItems'
  export default {
    name: 'setting',
    components: { settingNav, settingItems }
  }
</script>

<style scope>
  
</style>
