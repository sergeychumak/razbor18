<template>
  <div
    id="layout"
    class="app-layout"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'app-layout'
  }
</script>

<style lang="scss">
  .app-layout {
    display: flex;
    flex-direction: column;
    min-width: #{$minWidthContainer};
    height: 100%;
    overflow-y: auto;
    /*scroll-behavior: smooth;*/

    &--open-popup {
      overflow: hidden;
    }

    &--open-aside {
      overflow: hidden;
    }
  }

  @include breakpoint('tablet') {
    .app-layout {

      &--open-popup {

      }

      &--open-aside {

      }
    }
  }

  @include breakpoint('desktop') {
    .app-layout {

      &--open-popup {
        padding-right: 17px;

        &.mac-os {
          padding: 0;
        }
      }

      &--open-aside {
        overflow: auto;
      }
    }
  }
</style>
