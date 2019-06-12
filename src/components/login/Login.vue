<template>
  <div>
    <login-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './header/header.vue'
  export default {
    name: 'app',
    components: {
      'login-header': Header
    },
    created () {
      this.$store.dispatch('tryAutoLogin')
    }
  }
</script>

<style scoped>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>