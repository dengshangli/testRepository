<template>
  <div class="setting-items">
     <el-menu default-active="1">
      <el-submenu index="1">
        <template slot="title">温度单位（默认℃）</template>
        <el-menu-item index="1-1">
          <el-radio class="radio" v-model="nowDegreeDay" label="℃">℃</el-radio>
          <el-radio class="radio" v-model="nowDegreeDay" label="℉">℉</el-radio>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <router-link to="/addCity" class="el-icon-plus" tag="i">添加城市</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/editCity" class="el-icon-edit" tag="i">编辑城市</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { SUBMIT_DEGREE } from '../../store/weatherData'
  export default {
    name: 'setting-items',
    data () {
      return {
        activeName: '1',
        nowDegreeDay: this.$store.state.weatherData.degreeDay
      }
    },
    watch: {
      nowDegreeDay: 'submitDegree'
    },
    methods: {
      ...mapActions([SUBMIT_DEGREE]),
      submitDegree (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.SUBMIT_DEGREE({newDegree: newVal, oldDegree: oldVal})
        }
      }
    }
  }
</script>

<style scope>
</style>
