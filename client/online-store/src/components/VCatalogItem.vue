<template>
    <div class="catalog__item">
        <router-link :to="`/product/${catalogItem.Id}`">
            <div class="product-card">
                <img class="product-image" :src="require('@/assets/ImagesProduct/' + catalogItem.Image)" alt="">
                <div class="product-card__title">{{ catalogItem.Name }}</div>
                <div class="product-card__price">{{ catalogItem.Price }} ₽</div>
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'v-catalog-item',
    props: {
        catalogItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            productImage: null,
        }
    },
    // methods:
    // {
    //     getProductImageURL(image){
    //         this.productImage = require(image)
    //     },
    // }
}
</script>

<style lang="scss">


</style>