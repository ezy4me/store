<template>
    <div class="product container">
        <div class="product__image">
            <img class="product-image" :src="require('@/assets/ImagesProduct/' + product.Image)" alt="">
        </div>
        <div class="product__info">
            <div class="product__title">{{ product.Name }}</div>
            <div class="product__price">{{ product.Price }} ₽</div>
            <div class="product__body">
                <div class="select-box">
                    <div class="select-box__current" tabindex="1">
                        <div class="select-box__value">
                            <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked">
                            <p class="select-box__input-text">S</p>
                        </div>
                        <div class="select-box__value">
                            <input class="select-box__input" type="radio" id="1" value="2" name="Ben">
                            <p class="select-box__input-text">M</p>
                        </div>
                        <div class="select-box__value">
                            <input class="select-box__input" type="radio" id="2" value="3" name="Ben">
                            <p class="select-box__input-text">L</p>
                        </div>
                        <div class="select-box__value">
                            <input class="select-box__input" type="radio" id="3" value="4" name="Ben">
                            <p class="select-box__input-text">XL</p>
                        </div>
                        <img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                            alt="Arrow Icon" aria-hidden="true">
                    </div>
                    <ul class="select-box__list">
                        <li>
                            <label class="select-box__option" for="0" aria-hidden="aria-hidden">S</label>
                        </li>
                        <li>
                            <label class="select-box__option" for="1" aria-hidden="aria-hidden">M</label>
                        </li>
                        <li>
                            <label class="select-box__option" for="2" aria-hidden="aria-hidden">L</label>
                        </li>
                        <li>
                            <label class="select-box__option" for="3" aria-hidden="aria-hidden">XL</label>
                        </li>
                    </ul>
                </div>
                <div class="product__desc">
                    Состав: 100% хлопок<br /><br />
                    Размеры: S / M / L / XL
                    <br />
                    Указания по стирке: стирать на 30 градусах<br />
                    Указания по размерам:<br />
                    S - рост 160-170см<br />
                    М - рост 170-180см<br />
                    L - рост 180-190см<br />
                    XL - рост 190+см<br />
                    <br />
                    Подробную информацию о размерах можно узнать <a class="link">здесь</a>
                </div>
                <button class="btn" @click="addToCart(product)">В корзину</button>
            </div>

        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {

    setup() {
        const store = useStore()

        const products = computed(() => store.state.products.products.rows)

        return {
            products
        }
    },

    data() {
        return {
            product: null,
        }
    },
    created() {
        const product = this.products.find(p => p.Id == this.$route.params.Id)
        if (product)
            this.product = product
    },

    methods: {
        ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart(product) {
        if (this.$store.state.user.user == null) {
            alert("Чтобы покупать надо авторизоваться")
        }
        else {
            this.$store.dispatch('cart/ADD_PRODUCT_TO_CART',
                {
                    userId: this.$store.state.user.user.Id,
                    productId: product.Id

                }).then((error) => {
                    if (!error) {
                        alert("Добавлено")
                    }
                    else {
                        alert("Ошибка добавления")
                    }
                })
        }
    },
    }
    

}
</script>
  
<style lang="scss">
.product {
    display: flex;

    &__image {
        width: 50%;
    }

    &__info {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    &__body {
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    &__desc {
        margin: 1rem;
        text-align: start;
        line-height: 1.2;
        font-size: 18px;
    }

    &__desc a {
        font-size: 18px;
    }

    &__title {
        font-size: 24px;
    }

    &__price {
        font-size: 24px;
    }

}

.product-image {}

.select-box {
    position: relative;
    display: block;
    width: 50%;
    margin: 0 1rem;
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
    font-size: 18px;
    color: #60666d;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 10px;

    &__current {
        position: relative;

        cursor: pointer;
        outline: none;

        &:focus {
            &+.select-box__list {
                opacity: 1;

                animation-name: none;

                .select-box__option {
                    cursor: pointer;
                }
            }

            .select-box__icon {
                transform: translateY(-50%) rotate(180deg);
            }
        }
    }

    &__icon {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        width: 20px;
        opacity: 0.3;
        transition: 0.2s ease;
    }

    &__value {
        display: flex;
    }

    &__input {
        display: none;

        &:checked+.select-box__input-text {
            display: block;
        }
    }

    &__input-text {
        display: none;
        width: 100%;
        margin: 0;
        padding: 15px;
        background-color: #fff;
        border-radius: 10px;
    }

    &__list {
        position: absolute;
        width: 100%;
        padding: 0;
        list-style: none;
        opacity: 0;

        animation-name: HideList;
        animation-duration: 0.5s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function: step-start;
        box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
    }

    &__option {
        display: block;
        padding: 15px;
        background-color: #fff;

        &:hover,
        &:focus {
            color: #546c84;
            background-color: #fbfbfb;
        }
    }
}

@keyframes HideList {
    from {
        transform: scaleY(1);
    }

    to {
        transform: scaleY(0);
    }
}
</style>