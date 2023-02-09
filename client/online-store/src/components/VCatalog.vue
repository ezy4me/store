<template>
    <div class="catalog container">
            <v-catalog-item :catalogItem="item" v-for="item in products" :key="item.id"></v-catalog-item>
    </div>
</template>

<script>
import VCatalogItem from './VCatalogItem.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { mapActions, mapGetters } from 'vuex'
export default {
  components: { VCatalogItem },
  props: {
        category: {
            type: String,
            default() {
                return null
            }
        }
    },
    setup () {
    let category = null
    const store = useStore()
    const products = computed(() => store.state.products.products.rows)
    // const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)
    if(!store.state.products.products.rows)
    store.dispatch('products/GET_PRODUCTS_FROM_API', category)
    return {
      products,

    }
  },
    data() {
        return {
            
            categoryProduct: [],
        }
    },
    created() {
        
    },
    computed: {

    },
    methods: {


    },
    mounted() {

    },
}
</script>

<style lang="scss">

</style>