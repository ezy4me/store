<template>
    <div class="div">
        <div v-show="!isAuthBtn" class="popup">
            <div class="popup__title">
                <button id="auth-btn" @click="activeBtnClick" class="btn"
                    :class="{ 'auth-active-btn': isAuthBtn }">Авторизация</button>
                <button id="reg-btn" @click="activeBtnClick" class="btn"
                    :class="{ 'auth-active-btn': isRegBtn }">Регистрация</button>
            </div>
            <div class="input-form">
                <img class="icon" src="@/assets/Images/user.png" alt="">
                <input v-model="login" class="popup__input" type="text" placeholder="Введите почту">
            </div>
            <div class="input-form">
                <img class="icon" src="@/assets/Images/key.png" alt="">
                <input v-model="password" class="popup__input" type="password" placeholder="Введите пароль">
            </div>
            <div>Забыли пароль?</div>
            <button @click="onLogin(login, password)" class="btn popup__button">Войти</button>
        </div>

        <div v-show="!isRegBtn" class="popup">
            <div class="popup__title">
                <button id="auth-btn" @click="activeBtnClick" class="btn"
                    :class="{ 'auth-active-btn': isAuthBtn }">Авторизация</button>
                <button id="reg-btn" @click="activeBtnClick" class="btn"
                    :class="{ 'auth-active-btn': isRegBtn }">Регистрация</button>
            </div>
            <!-- <div class="input-form">
                <img class="icon" src="@/assets/Images/user.png" alt="">
                <input class="popup__input" type="text" placeholder="Введите имя(пока не надо)">
            </div> -->
            <div class="input-form">
                <img class="icon" src="@/assets/Images/user.png" alt="">
                <input v-model="login" class="popup__input" type="text" placeholder="Введите почту">
            </div>
            <div class="input-form">
                <img class="icon" src="@/assets/Images/key.png" alt="">
                <input v-model="password" class="popup__input" type="password" placeholder="Введите пароль">
            </div>
            <!-- <div class="input-form">
                <img class="icon" src="@/assets/Images/key.png" alt="">
                <input class="popup__input" type="text" placeholder="Повторите пароль(пока не надо)">
            </div> -->

            <button @click="onRegistration(login, password)" class="btn popup__button">Зарегистрироваться</button>
        </div>
    </div>
</template>
<script>

import { useStore } from 'vuex'

export default {
    setup(props, {emit}) {
        const store = useStore()

        const onRegistration = (Email, Password) => store.dispatch('user/ON_REGISTRATION',
            {
                Email,
                Password
            })
            .then((error) => {
                if (!error) {
                    emit('close', false)
                    alert("Добро пожаловать")
                }
                else {
                    alert("Ошибка регистрации")
                }
            })
        const onLogin = (Email, Password) => store.dispatch('user/ON_LOGIN',
            {
                Email, Password
            })
            .then((error) => {
                if (!error) {
                    emit('close', false)
                    alert("Вход выполнен")
                }
                else {
                    alert("Ошибка входа")
                }
            })
        return {
            onRegistration,
            onLogin
        }
    },
    data() {
        return {
            isAuthBtn: false,
            isRegBtn: true,
            login: '',
            password: '',
        }
    },
    methods: {

        activeBtnClick() {
            this.isAuthBtn = !this.isAuthBtn;
            this.isRegBtn = !this.isRegBtn;
        },

    }
}
</script>

<style lang="scss">
.input-form {
    margin: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 4px;
}

.popup {
    display: flex;
    flex-direction: column;
}

.popup__title {
    font-size: 20px;
    margin: 0 40px;
    margin-bottom: 20px;
}

.popup__input {
    outline: none;
    margin: 5px 0;
    border: 0;
    height: 40px;
    width: 100%;
}

.popup__button {
    margin: 1rem 0;
    ;
}
</style>