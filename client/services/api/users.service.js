import ConfigApi from "./config";

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

}

export default UsersService