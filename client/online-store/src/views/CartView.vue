<template>
  <div class="cart container">
    <p>КОРЗИНА</p>
    <v-cart></v-cart>
    <button @click="order" class="btn">Оформить заказ</button>
  </div>
</template>

<script>
import VCart from '../components/VCart.vue'
export default {
  components: { VCart },
 data() {
    return {
        // cartProducts: {},
    }
    
 },
 methods: {
        productCount() {
            //  this.cartProducts = this.$store.state.cart.forEach((item) => {
            //     if(item.Id > 1)
            //     alert(item.Name)
            // })
        },

        order(){
          this.$router.push('/order')
        }
    },
    mounted() {
        // this.cartProducts = this.$store.state.cart
        // this.productCount()

},
}


</script>

<style lang="scss">



</style>