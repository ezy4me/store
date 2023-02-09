import { UserAPIInstatnce } from "./index";

export const UserAPI = {
    setUserData(Id, Email, FirstName, SecondName, Phone) {
        const url = 'api/user/'
        const data = {Id, Email, FirstName, SecondName, Phone}
        console.log(data);
        console.log(url);
        return UserAPIInstatnce.put(url, data)
    },

}