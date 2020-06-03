<template>
  <div
    id="app"
    class="app"
  >
    <router-view/>
  </div>
</template>

<script>
  import './assets/scss/critical.scss?critical'
  import './assets/scss/app.scss'

  const delay = 1000

  export default {
    name: 'app',

    metaInfo: {
      title: 'Авторазбор Разбор18 — Интернет магазин бу автозапчастей в Ижевске',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1'
        },
        {
          vmid: 'description',
          name: 'description',
          content: 'Разбор 18 – компания, занимающаяся авторазборкой в Ижевске уже более 10 лет.'
        }
      ]
    },

    mounted () {
      setTimeout(() => {
        if (navigator.userAgent.includes('Mac')) {
          document.querySelector('#layout').classList.add('mac-os')
        }
      }, delay)
    }
  }
</script>

<style lang="scss">
  .app {
    height: 100%;
  }
</style>
