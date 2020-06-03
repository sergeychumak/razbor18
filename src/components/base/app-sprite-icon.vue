<template>
  <svg class="app-sprite-icon">
    <vue-client-only>
      <use :xlink:href="`${iconLink}`"></use>
    </vue-client-only>
  </svg>
</template>

<script>
  import VueClientOnly from 'vue-client-only'

  export default {
    name: 'app-sprite-icon',

    components: {
      VueClientOnly
    },

    props: {
      /**
       * Ссылка на иконку в спрайте
       */
      iconLink: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .app-sprite-icon {
    display: block;
    width: 100%;
    min-width: 12px;
    height: 100%;
    min-height: 12px;
  }
</style>
