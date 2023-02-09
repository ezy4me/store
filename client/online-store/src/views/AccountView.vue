<template>
    <div class="container account">
        <div class="account__body">
            <div class="account__avatar">
                <img class="account__img" src="../assets/Images/deer.png" alt="">
            </div>
            <div class="account__form">
                <div class="account__row">
                    <div class="account__row-body">
                        <div class="account__item">
                            <label for="account-firstname">Имя</label>
                            <div class="account-input-form">
                                <input v-model="firstName" v-if="user.FirstName != null" id="account-firstname"
                                    class="input" type="text" placeholder="Введите имя">
                                <input v-model="firstName" v-else id="account-firstname" class="input" type="text"
                                    placeholder="Введите имя">
                            </div>
                        </div>

                        <div class="account__item">
                            <label for="account-secondname">Фамилия</label>
                            <div class="account-input-form">
                                <input v-model="secondName" v-if="user.SecondName != null" id="account-secondname"
                                    class="input" type="text" placeholder="Введите фамилию">
                                <input v-model="secondName" v-else id="account-secondname" class="input" type="text"
                                    placeholder="Введите фамилию">
                            </div>
                        </div>
                    </div>
                    <p class="account__desc">
                        Проверьте правильность ввода личных данных, они необходимы для получения и оформления заказа
                    </p>
                </div>

                <div class="account__row">
                    <div class="account__title">Электронная почта</div>
                    <div class="account__row-body">
                        <div class="account__item">
                            <label for="account-email">Почта</label>
                            <div class="account-input-form">
                                <input v-model="email" v-if="user.Email != null" id="account-email" class="input"
                                    type="text" placeholder="Введите почту">
                                <input v-model="email" v-else id="account-email" class="input" type="text"
                                    placeholder="Введите почту">
                            </div>
                        </div>
                    </div>
                    <p class="account__desc">
                        Получайте информацию о состоянии статуса ваших заказов
                    </p>
                </div>

                <div class="account__row">
                    <div class="account__title">Номер телефона</div>
                    <div class="account__row-body">
                        <div class="account__item">
                            <label for="account-phone">Номер телефона</label>
                            <div class="account-input-form">
                                <input v-model="phone" v-if="user.Phone != null" id="account-phone" class="input"
                                    type="text" placeholder="Введите номер">
                                <input v-model="phone" v-else id="account-phone" class="input" type="text"
                                    placeholder="Введите номер">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="account__actions">
                <button @click="onSaveUserData(id, email, firstName, secondName, phone)" class="btn">Сохранить
                    изменения</button>
                <button @click="onLogout" class="btn">Выйти</button>
            </div>
        </div>

    </div>
</template>

<script>

// import { mapState } from 'vuex'
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


        return {
            user,
            onLogout,
            onSaveUserData,
            email,
            firstName,
            secondName,
            phone,
            id
        }
    },
    data() {
        return {
            // email: this.store.state.user.user.Email,
            // firstName: '',
            // secondName: '',
            // phone: ''
        }
    },
    methods: {
        // onLogout() {
        //         this.$store.dispatch('onLogout')
        //         .then(() => {
        //             // location.reload();
        //             this.$router.push({ name: 'home' })
        //         })

        //     },


    }
}
</script>

<style lang="scss">
.account {
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;

    &__body{
        margin: 2rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    // width: 100%;
    &__img {
        width: 100px;
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

    &__actions {
        display: flex;
        gap: 1rem;
    }
}

.account label {
    font-size: 18px;
}

.account-input-form {
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