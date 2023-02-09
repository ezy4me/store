<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__body">
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">О компании</div>
                        <ul class="footer__list">
                            <li class="footer-list__item">
                                <router-link to="/contact">
                                    <a class="footer-list__link link" to="/contact">Контакты</a>
                                </router-link>
                            </li>
                            <li class="footer-list__item">
                                <router-link class="footer-list__link link" to="/offer">Оферта</router-link>
                            </li>
                            <li class="footer-list__item">
                                <router-link class="footer-list__link link" to="/policy">Политика конфидентиальности</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">Поддержка</div>
                        <ul class="footer__list">
                            <li class="footer-list__item">
                                <router-link class="footer-list__link link" to="/post-payment">Доставка и оплата</router-link>
                            </li>
                            <li class="footer-list__item">
                                <router-link class="footer-list__link link" to="/refund">Обмен и возврат</router-link>
                            </li>
                            <li class="footer-list__item">
                                <router-link class="footer-list__link link"  to="/size-information">Подробный размер</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">Социальные сети</div>
                        <ul class="footer__list footer-socials">
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">
                                    <img class="footer__icon icon" src="@/assets/Images/telegram.png">
                                </a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">
                                    <img class="footer__icon icon" src="@/assets/Images/vk.png">
                                </a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">
                                    <img class="footer__icon icon" src="@/assets/Images/instagram.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
}
</script>

<style lang="scss">

</style>