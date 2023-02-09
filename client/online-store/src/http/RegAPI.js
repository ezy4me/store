import { RegAPIInstatnce  } from "./index";

export const RegAPI = {
    registration(Email, Password) {
        const url = 'api/user/registration'
        const data = {Email, Password}
        console.log(data);
        return RegAPIInstatnce.post(url, data)
    },
}