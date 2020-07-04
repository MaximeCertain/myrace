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
        let call = await fetch(`${ConfigApi.baseUrl()}login`, init);

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
        let call = await fetch(`${ConfigApi.baseUrl()}users`, init);

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
        let call = await fetch(`${ConfigApi.baseUrl()}users/` + body.id, init);

        return call;
    }

}

export default UsersService