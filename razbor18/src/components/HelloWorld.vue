<template>
 <div>
   909

 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    mounted: function(){
        console.log(11)
        console.log(this.$store.getters.asd)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
