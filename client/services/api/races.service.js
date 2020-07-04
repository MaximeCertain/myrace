import ConfigApi from "./config";
import {store} from '../../store/configureStore'
import race from "../../store/reducers/races.reducers";
class RacesService extends ConfigApi {
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().login.token
            }
        };
        let call = await fetch(`${ConfigApi.baseUrl()}races`, init);
        let response = await call.json();
        if(response.error && response.error === 'Invalid API Authentication')
            console.log(response.error)
        return response.races;
    }

    static async create(body) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().login.token
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${ConfigApi.baseUrl()}races`, init);
        let response = await call.json();
        if(response.error && response.error === 'Invalid API Authentication')
            console.log(response.error)
        console.log(response)
        return response.race;
    }

    static async registerRace(raceId) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().login.token
            }
        };
        console.log("alelellele")
        let call = await fetch(`${ConfigApi.baseUrl()}user_races/${raceId}`, init);
        let response = await call.json();
        if(response.error && response.error === 'Invalid API Authentication')
            console.log(response.error)
        console.log(response)
        return response.race;
    }
}

export default RacesService