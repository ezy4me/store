import { LoginAPIInstatnce, DefaultAPIInstatnce } from "./index";

export const AuthAPI = {
    login(Email, Password) {
        const url = 'api/user/login'
        const data = {Email, Password}
        console.log(data);
        return LoginAPIInstatnce.post(url, data)
    },

    logout() {
        const url = 'api/user/login'
        return DefaultAPIInstatnce.post(url)
    }
}