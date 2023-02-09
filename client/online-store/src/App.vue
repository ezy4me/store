<template>
  <div class="">
   <the-header></the-header>
  <router-view/>
  <the-footer></the-footer>
  </div>
  
</template>

<script>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheHeader, TheFooter },
  setup() {
    
  },
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

</style>
