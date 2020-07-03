import ConfigApi from "./config";
import {store} from '../../store/configureStore'
class RacesService extends ConfigApi {
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().login.token
            }
        };
        let call = await fetch(`http://192.168.1.20:8080/api/races`, init);
        let response = await call.json();
        if(response.error && response.error === 'Invalid API Authentication')
            console.log(response.error)
        return response.races;
    }
}

export default RacesService