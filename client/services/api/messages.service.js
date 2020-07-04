import ConfigApi from "./config";
import {store} from '../../store/configureStore'
import race from "../../store/reducers/races.reducers";

class MessagesService extends ConfigApi {
    static async create(body, raceId) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().login.token
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${ConfigApi.baseUrl()}messages/${raceId}/1`, init);
        let response = await call.json();
        if (response.error && response.error === 'Invalid API Authentication')
            console.log(response.error)
        return response.message;
    }
}

export default MessagesService