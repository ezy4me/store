<template>
    <div class="header" :class="{ 'overflow': mobileNav }">
        <modal-window v-show="isModalVisible" @close="closeModal">
            <template v-slot:body>
                <v-login @close="closeModal"></v-login>
            </template>
        </modal-window>

        <div class="header__container container">
            <div class="header__body">
                <img @click="toggleMobileNav" v-show="mobile" class="icon" icon="bars"
                    :class="{ 'icon-active': mobileNav }" src="@/assets/svg/burger.svg">

                <div class="logo">
                    <router-link to="/" @click="productFilter(null)">
                        <div class="logo__link">MARKET</div>
                    </router-link>
                </div>

                <div class="header__actions">
                    <div class="header__icon">
                        <div class="header__icon-body">
                            <p v-if="$store.state.user.user != null">Привет {{ $store.state.user.user.Email }}</p>
                            <p v v-else></p>
                        </div>
                        <img v-show="!mobile" v-for="icon in headerMenuIcons" :key="icon.id" :src="icon.path"
                            :alt="icon.name" class="icon nav-icon" @click="showModal(icon)">

                        <img v-show="mobile" class="icon" alt="bag" src="@/assets/Images/bag.png">
                    </div>

                </div>

            </div>

            <div class="header__main">
                <nav v-show="!mobile" class="header__menu">
                    <ul class="header-menu__list">
                        <li class="header-menu__item" v-for="item in categories" :key="item.Id">
                            <router-link to="/" @click="productFilter(item.Id)" class="header-menu__link link  ">
                                {{ item.Name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div v-show="mobileNav" class="mobile-overlay">
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="header-menu__list-mobile">
                    <li class="header-menu__item" v-for="item in categories" :key="item.Id">
                        <router-link to="/" @click="productFilter(item.Id)" class="header-menu__link link  ">
                            {{ item.Name }}
                        </router-link>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
import ModalWindow from './ModalWindow.vue';
import VLogin from './VLogin.vue';
// import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    components: { VLogin, ModalWindow },

    name: 'TheHeader',
    setup() {

        const store = useStore()
        const categories = computed(() => store.state.products.categories.rows)
        store.dispatch('products/GET_CATEGORIES_FROM_API', null)
        return {
            categories
        }
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            headerMenuIcons: [
                // { id: 1, name: 'help', path: require('@/assets/Images/help.png') },
                // { id: 2, name: 'heart', path: require('@/assets/Images/heart_2.png') },
                { id: 1, name: 'bag', path: require('@/assets/Images/bag.png') },
                { id: 2, name: 'user', path: require('@/assets/Images/user.png') },
            ],
            isModalVisible: false,
            isAuthBtn: false,
            isRegBtn: true,
            isLogin: false,
        }
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
            let hiddenBody = document.body;
            this.mobileNav ? hiddenBody.classList.add("scroll-lock") : hiddenBody.classList.remove("scroll-lock");
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 992) {
                this.mobile = true;
                return;
            }
            else {
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },
        showModal(icon) {
            if (icon.name == "user" && this.$store.state.user.user == null) {
                this.isModalVisible = true;
            }
            else if (this.$store.state.user.user != null) {

                this.$router.push({ name: 'account' })
            }
            if (icon.name == "bag") {
                this.$router.push({ name: 'cart' })
            }
            else return 0

        },
        closeModal() {
            this.isModalVisible = false;
        },
        activeBtnClick() {
            this.isAuthBtn = !this.isAuthBtn;
            this.isRegBtn = !this.isRegBtn;
        },

        productFilter(path) {
            this.$store.dispatch('products/GET_PRODUCTS_FROM_API', path)
                .then(() => {
                    console.log("GET_PRODUCTS_FROM_API c");
                })
        }



    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounted() {

    }
}
</script>

<style lang="scss">

</style>