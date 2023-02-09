<template>
    <div class="cart__item">
        <div class="cart__image">
            <img class="cart__image" :src="require('@/assets/ImagesProduct/' + cartItem.product.Image)" alt="">
        </div>
        <div class="cart__body">
            <div class="cart__title">
                {{ cartItem.product.Name }}
            </div>
            <div class="cart__price">
               Стоимость:  {{ cartItem.Quantity * cartItem.product.Price }} ₽
            </div>
            <div class="cart__count">
                Количество: {{ cartItem.Quantity }}

            </div>
        </div>
        <div class="cart__actions">
            <button @click="deleteFromCart" class="btn">Удалить</button>
            <!-- <button @click="deleteCartProduct(cartItem)" class="btn">Удалить</button> -->
        </div>
    </div>
</template>

<script>

// import {computed} from 'vue'
export default {

    // setup() {
    //     const productPrice = computed(() => this.cartItem.Quantity*this.cartItem.product.Price)
    //     return {
    //         productPrice
    //     }
    // },  
    data() {
        return {
            cartItem: this.cart_item_data,
            productPrice: null
        }
    },
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed(){
        this.productPrice = this.cartItem.Quantity*this.cartItem.product.Price
        console.log(this.productPrice);
    },
    methods: {
        // deleteCartProduct(product) {
        //     this.$store.dispatch('cart/DELETE_PRODUCT_FROM_CART',
        //         {
        //             userId: this.$store.state.user.user.Id,
        //             productId: product.Id

        //         }).then((error) => {
        //             if (!error) {
        //                 // this.$router.push({ name: 'shorts' })
        //                 // this.$emit('close', false)
        //                 alert("Удалено")
        //                 // this.reloadCart()
        //                 // location.reload()
        //                 // this.$store.dispatch('GET_CART_FROM_API', {
        //                 //     userId: this.$store.state.use r.Id
        //                 // })
        //                 //     .then(() => {
        //                 //         console.log(this.$store.state.cartProducts.rows);
        //                 //         this.cart_data = this.$store.state.cartProducts.rows;
        //                 //         // this.isCartEmpry = false;
        //                 //     })
        //                 // this.$forceUpdate();
        //             }
        //             else {
        //                 alert("Ошибка удаления")
        //                 console.log(error.message);

        //             }
        //         })
        // },
        deleteFromCart(){
            this.$emit('deleteFromCart', this.cartItem)
        }
    },
    mounted() {
        // var vm = this
        // vm.$set(this.cart_item_data, 'quantity', 1)
        // this.cartItem['Quantity'] = 1

    },
    watch() {
        //     this.$store.dispatch('GET_CART_FROM_API', {
        //         userId: this.$store.state.user.Id
        //     })
        //         .then(() => {
        //             console.log(this.$store.state.cartProducts.rows);
        //             this.cart_data = this.$store.state.cartProducts.rows;
        //             this.isCartEmpry = false;
        //         })
    }
}
</script>

<style lang="scss">
.cart {
    flex-direction: column;


    &__item {

        padding: 1rem;
        border: 1px solid black;
        margin: 1rem;
        display: flex;
        border: 1px solid rgb(206, 206, 206);
        border-radius: 1rem;
        align-items: center;
        gap: 2rem;
        justify-content: space-between;

    }

    &__body {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-content: center;
        justify-content: center;
    }

    &__image {
        width: 150px;
    }

    &__title {
        font-weight: 600;
        font-size: 18px;
    }

    &__count {
        font-size: 16px;

    }
}
</style>