import ConfigApi from "./config";
import {store} from "../../store/configureStore";

class UsersService extends ConfigApi {

    static async login(body) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`http://192.168.1.20:8080/api/login`, init);

        return call;
    }

    static async register(body) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`http://192.168.1.20:8080/api/users`, init);

        return call;
    }

    static async update(body) {
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().login.token
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`http://192.168.1.20:8080/api/users/` + body.id, init);

        return call;
    }

}

export default UsersService