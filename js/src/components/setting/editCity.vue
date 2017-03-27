<template>
  <div class="edit-city">
    <setting-nav></setting-nav>
    <el-menu default-active="1">
      <el-menu-item index="1">
        福州
      </el-menu-item>
      <el-menu-item index="2">
        上海
      </el-menu-item>
      <el-menu-item index="3">
        北京
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import settingNav from './settingNav'
  export default {
    name: 'edit-city',
    components: { settingNav },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
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
</style>
