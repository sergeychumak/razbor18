<template>
  <main-layout class="main-page">
    <main class="content">
      <div class="centered">
        <app-sprite-icon
          :icon-link="$options.icons.IconLogo.url"
        />
        <div class="main-page__header">
          РАЗБОР.18
        </div>
        <div class="main-page__description">
          Интернет магазин бу автозапчастей в Ижевске.
        </div>
        <div class="main-page__description-coming-soon">
          В настоящее время сайт находится в разработке.
        </div>
      </div>
    </main>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/main-layout'
  import AppSpriteIcon from '../components/base/app-sprite-icon'

  import IconLogo from '../assets/icons/icon-logo.svg'
  import IconLogo1 from '../assets/icons/icon-burger-menu.svg'

  export default {
    name: 'main-page',

    metaInfo () {
    },

    icons: {
      IconLogo,
      IconLogo1
    },

    components: {
      MainLayout,
      AppSpriteIcon
    }
  }
</script>

<style lang="scss">
  .main-page {
    background: $dark_blue;
    text-align: center;
    padding-top: 20px;

    & .app-sprite-icon {
      color: $white;
      margin-bottom: 16px;
    }

    &__header {
      color: $white;
      font-size: 24px;
      margin-bottom: 8px;
    }

    &__description {
      color: $white;
      font-size: 12px;
      margin-bottom: 16px;
    }

    &__description-coming-soon {
      color: $gray;
      font-size: 12px;
    }
  }


  @include breakpoint("tablet") {
    .main-page {
      padding-top: 40px;

      & .app-sprite-icon {
        margin-bottom: 16px;
      }

      &__header {
        font-size: 32px;
        margin-bottom: 8px;
      }

      &__description {
        color: $white;
        font-size: 16px;
      }

      &__description-coming-soon {
      }
    }
  }

  @include breakpoint("desktop") {
    .main-page {
    }
  }
</style>
