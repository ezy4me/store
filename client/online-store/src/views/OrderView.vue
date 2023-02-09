<template>
    <div class="order container">
        <div class="order__title">
            Оформлнение заказа
        </div>
        <div class="order__body">
                <div class="order__item">
                    <h3>Введите данные</h3>
                    <label for="order-fullname">Полное имя</label>
                    <div class="order-input-form">
                        <input v-model="firstName" v-if="user.FirstName != null"  id="order-fullname" class="input" type="text"
                            placeholder="Ф. И. О.">
                            <input v-model="firstName" v-else id="order-fullname" class="input" type="text"
                                    placeholder="Введите номер">
                    </div>
                    <label for="order-phone">Телефон</label>
                    <div class="order-input-form">
                        
                        <input v-model="phone" v-if="user.Phone != null" id="order-phone" class="input" type="text"
                            placeholder="Номер телефона">
                        <input v-model="phone" v-else id="order-phone" class="input" type="text"
                                    placeholder="Введите номер">
                    </div>
                    <label for="order-email">Email</label>
                    <div class="order-input-form">
                        
                        <input v-model="email" v-if="user.Email != null" id="order-email" class="input" type="text"
                            placeholder="Email">
                    </div>
                    <label for="order-adress">Адресс доставки</label>
                    <div class="order-input-form">
                        
                        <input  id="order-adress" class="input" type="text"
                            placeholder="регион / город / улица / дом / квартира / почтовый индекс">
                    </div>
                </div>

                <div class="order__item">
                    <h3>Тип доставки</h3>
                    <div class="delivery">
                        <input class="input-radio" id="delivery-self" type="radio">
                        <div class="delivery__body">
                            <label class="delivery__text" for="delivery-self">Самовывоз</label>
                            <p class="delivery__desc">Для заказов по Москве.</p>
                        </div>
                    </div>

                    <div class="delivery">
                        <input class="input-radio" id="delivery-curier" type="radio">
                        <div class="delivery__body">
                            <label class="delivery__text" for="delivery-curier">Курьером по городу</label>
                            <p class="delivery__desc">Курьерская доставка в пределах МКАД. Курьер свяжется с вами по телефону для обсуждения деталей.</p>
                        </div>
                    </div>

                    <div class="delivery">
                        <input class="input-radio" id="delivery-post" type="radio">
                        <div class="delivery__body">
                            <label class="delivery__text" for="delivery-post">Почта России</label>
                            <p class="delivery__desc">Для заказов по России. Номер отслеживания появится на страничке отслеживания заказа после того, как заказ получит статус "Выполнен".</p>
                        </div>
                    </div>

                    <div class="delivery">
                        <input class="input-radio" id="delivery-world" type="radio">
                        <div class="delivery__body">
                            <label class="delivery__text" for="delivery-world">Международная посылка</label>
                            <p class="delivery__desc">Для заказов по миру. Номер отслеживания появится на страничке отслеживания заказа после того, как заказ получит статус "Выполнен".</p>
                        </div>
                    </div>
                </div>

                <div class="order__item">
                    <h3>Способ оплаты</h3>
                    <div class="delivery">
                        <input class="input-radio" id="payment-online" type="radio">
                        <div class="delivery__body">
                            <label class="delivery__text" for="payment-online">Онлайн-оплата</label>
                            <p class="delivery__desc">*если Вы не оплатили заказ в течение 15 минут, он аннулируется</p>
                        </div>
                    </div>
                </div>

                <button @click="onSaveOrder(id, 1)" class="btn">Заказать
                </button>

            </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const user = computed(() => store.state.user.user)

        const email = store.state.user.user.Email
        const firstName = store.state.user.user.FirstName
        const secondName = store.state.user.user.SecondName
        const phone = store.state.user.user.Phone
        const id = computed(() => store.state.user.user.Id)

        

        const onLogout = () => store.dispatch('user/ON_LOGOUT')
            .then(() => {
                router.push({ name: 'shop' })
            })

        const onSaveUserData = (Id, Email, FirstName, SecondName, Phone) => store.dispatch('user/ON_SAVE_USER_DATA',
            {
                Id,
                Email,
                FirstName,
                SecondName,
                Phone
            })
            .then((error) => {
                if (!error) {
                    alert("Данные успешно сохранены")
                }
                else {
                    alert("Ошибка сохранения данных")
                }
            })
            
            const onSaveOrder = (Id, deliveryId) => store.dispatch('order/ADD_ORDER',
            {
                userId: Id,
                deliveryId
            })
            .then((error) => {
                if (!error) {
                    alert("Заказ оформлен")
                    
                    router.push({ name: 'shop' })
                }
                else {
                    alert("Проблемы с оформлением")
                }
            })


        return {
            user,
            onLogout,
            onSaveUserData,
            onSaveOrder,
            email,
            firstName,
            secondName,
            phone,
            id
        }
    },
}
</script>

<style lang="scss">

.input-radio{
    width: 1rem;
    height: 1rem;
}

.delivery{
    display: flex;
    gap: 1rem;

    &__body{
        display: flex;
        flex-direction: column;
    }


    &__desc{
        opacity: 0.8;
    }
}



.order {
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;

    // width: 100%;
    &__body {
        width: 100%;
    }

    &__row {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        // width: 75%;
    }

    &__row-body {
        display: flex;
        gap: 1rem;
        // margin: 3rem 0;
        // width: 75%;
    }

    &__item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        // margin: 1rem;
        gap: 0.5rem;
    }

    &__title {
        font-size: 24px;
        font-weight: 600;
        margin: 1rem 0;
    }

    &__desc {
        font-size: 16px;
        opacity: 0.6;
    }

    &__form {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
}

.order label {
    font-size: 18px;
}

.order-input-form {
    margin: 0.5rem 0;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid lightgray;
    // border-radius: 10px;
}

// .popup {
//     display: flex;
//     flex-direction: column;
// }

// .popup__title {
//     font-size: 20px;
//     margin: 0 40px;
//     margin-bottom: 20px;
// }

.input {
    outline: none;
    margin: 5px 0;
    padding: 1rem;
    border: 0;
    height: 40px;
    width: 100%;
}
</style>