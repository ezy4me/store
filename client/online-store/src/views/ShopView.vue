<template>
  <div class="shop container">
    <div class="shop__wrapper">
        <v-catalog></v-catalog>
    </div>
  </div>
</template>

<script>
import VCatalog from '../components/VCatalog.vue'
export default {
  components: { VCatalog },

}
</script>

<style lang="scss">

.shop{
    flex-direction: column;
    justify-content: center;
    
    &__wrapper{
        margin: 1rem 0;
    }

}

</style>