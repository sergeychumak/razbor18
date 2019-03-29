<template>
 <div>
   909
    {{asd}}
     <button @click="inc">asd</button>
 </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    mounted: function(){
        console.log(11)
        console.log(this.$store.getters.asd)
        console.log(this.$store.getters)
    },
    methods: {
        ...mapActions('TestASD', {
            inc: 'inc'
        })
    },
    computed: {
        ...mapGetters('TestASD', {
            asd: "count"
        })
    }
}
</script>

