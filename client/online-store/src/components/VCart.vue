<template>
    <div class="cart">
        <v-cart-item @deleteFromCart="deleteFromCart" v-show="!isCartEmpty"
            v-for="item in cart_data" :key="item.product.Id" :cart_item_data="item">

        </v-cart-item>

        <p v-show="isCartEmpty">ПУСТО</p>
    </div>
</template>

<script>
import VCartItem from './VCartItem.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    components: { VCartItem },

    setup() {

        const store = useStore()

        let isCartEmpty

        const cart_data = computed(() => store.state.cart.cart.rows)

        if (store.state.user.user) {
            store.dispatch('cart/GET_CART_FROM_API', {
                userId: store.state.user.user.Id
            }).then(() => {
                // console.log(this.$store.state.cartProducts.rows);
                isCartEmpty = false;
            })
        }
        else {
            isCartEmpty = true;
        }

        const deleteFromCart = (item) => store.dispatch('cart/DELETE_PRODUCT_FROM_CART',
            {
                userId: store.state.user.user.Id,
                productId: item.productId
            })
            

        return {
            cart_data,
            isCartEmpty,
            deleteFromCart
        }


        // const onRegistration = (Email, Password) => store.dispatch('user/ON_REGISTRATION',
        //     {
        //         Email,
        //         Password
        //     })
        //     .then((error) => {
        //         if (!error) {
        //             emit('close', false)
        //             alert("Добро пожаловать")
        //         }
        //         else {
        //             alert("Ошибка регистрации")
        //         }
        //     })
    },

    data() {
        return {
            // cart_data: [],
            isCartEmpry: true,
        }
    },
    methods: {
        // deleteFromCart(item) {
        //     console.log(item.productId);
            // this.$store.dispatch('cart/DELETE_PRODUCT_FROM_CART', {
            //     userId: this.$store.state.user.user.Id,
            //     productId: item.Id
            // })
            // .then(() => {
            //     // console.log(this.$store.state.cartProducts.rows);
            //     this.cart_data = this.$store.state.cart.cart.rows;
            //     this.isCartEmpry = false;
            // })
        // }
    },
    created() {
        // if(this.$store.state.user.user)
        // {
        //     this.$store.dispatch('cart/GET_CART_FROM_API', {
        //     userId: this.$store.state.user.user.Id
        // })
        //     .then(() => {
        //         // console.log(this.$store.state.cartProducts.rows);
        //         this.cart_data = this.$store.state.cart.cart.rows;
        //         this.isCartEmpry = false;
        //     })
        // }
        // else {
        //     this.isCartEmpry = true;
        // }

    }
}
</script>

<style>

</style>