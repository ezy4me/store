<template>
    <div class="post-payment container">
        <div class="post-payment__body">
            <div class="information">
                <div class="information__title">1. Доставка по Москве и регионам</div>
                <div class="information__body">
                    <h3>МОСКВА</h3>
                    <p>Самовывоз по городу</p>
                    <ul>
                        <li>Самовывоз осуществляется из магазина по адресу ************;</li>
                        <li>Для получения товара необходимо оформить заказ на сайте;</li>
                        <li>Сборка 1-2 дня с момента оформления заказа;</li>
                        <li>Получить заказ возможно только после поступления SMS-уведомления;</li>
                        <li>Возможна примерка;</li>
                        <li>Частичный выкуп возможен после полной отмены заказа;</li>
                        <li>Срок резерва составляет 2 календарных дня;</li>
                    </ul>

                    <p>Курьером по городу</p>
                    <ul>
                        <li>Доставка до двери. Если адрес за МКАД, но в пределах одного км. от станции метро;</li>
                        <li>Срок доставки 1-3 рабочих дня* с момента оформления заказа;</li>
                        <li>Бесплатная доставка — при единовременной покупке от 15 000 рублей, при покупке на меньшую
                            сумму
                            — 350 рублей;</li>
                        <li>Возможность выбора удобного для вас времени доставки;</li>
                    </ul>

                    <h3>РОССИЯ</h3>
                    <p>Почта России</p>
                    <ul>
                        <li>Срок доставки ориентировочно 4-14 рабочих дней с&nbsp;момента отправления заказа (срок
                            отправки
                            заказа 1-2&nbsp;дня, не&nbsp;считая дня поступления заказа);</li>
                        <li>Бесплатная доставка&nbsp;— при единовременной покупке от&nbsp;8&nbsp;000&nbsp;рублей, при
                            покупке на&nbsp;меньшую сумму&nbsp;— 490&nbsp;рублей;</li>
                        <li>Возможность отслеживания посылки по&nbsp;трекинг-номеру;</li>
                        <li>Услуга примерки отсутствует;</li>
                    </ul>
                </div>
            </div>
            <div class="information">
                <div class="information__title">2. Способы оплаты</div>
                <div class="information__body">
                    <p>Онлайн-оплата</p>
                    <ul>
                        <li>Банковской картой (Visa, MasterCard, MIR, JCB);</li>
                        <li>Через интернет-банк (Сбер Онлайн, Альфа-Клик, Тинькофф);</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.post-payment {
    
    &__body{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;

    }
}

.information {
    &__title {
        font-size: 28px;
        font-weight: 400;
        text-align: start;
    }

    &__body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 2rem;
    }
}

.information li {
    text-align: start;
    margin: 2rem 0;
    font-size: 18px;
}

.information p {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}

.information ul {
    margin: 0;
}
</style>