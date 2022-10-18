<template>
  <div id="app">
    <Header></Header>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './components/layout/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style>

</style>
