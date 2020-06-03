<template>
  <app-layout class="main-layout">
    <slot/>
  </app-layout>
</template>

<script>
  import AppLayout from '../components/base/app-layout'

  export default {
    name: 'main-layout',

    components: {
      AppLayout
    }
  }
</script>

<style lang="scss">
  .main-layout {

  }
</style>
