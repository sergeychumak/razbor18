<template>
  <main-layout class="not-found-page">
<!--    <not-found/>-->
    not fiund
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/main-layout'
  // import NotFound from '../components/project/not-found'

  export default {
    name: 'not-found-page',

    metaInfo () {
      const title = 'Страница не найдена'
      return {
        title: `${title} — официальный интернет-магазин Columbia`,
        meta: [
          {
            vmid: 'description',
            name: 'description',
            content: `Columbia — высокотехнологичная одежда, обувь и аксессуары для туризма и активного отдыха. ${title}. Наш номер телефона 8 (800) 770-04-70`
          }
        ]
      }
    },

    components: {
      MainLayout,
      // NotFound
    },

    created () {
      if (this.$ssrContext) {
        this.$ssrContext.isNotFoundPage = true
      }
    }
  }
</script>

<style lang="scss">
  .not-found-page {

    &__content {

    }
  }

  @include breakpoint("tablet") {
    .not-found-page {

      &__content {

      }
    }
  }

  @include breakpoint("desktop") {
    .not-found-page {

      &__content {

      }
    }
  }
</style>
