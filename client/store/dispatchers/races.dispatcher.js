import {
    fetchRaceFormBegins, fetchRaceFormFailure,
    fetchRaceFormSuccess,
    fetchRacesBegin,
    fetchRacesFailure,
    fetchRacesSuccess
} from "../../actions/races.action";
import RacesService from "../../services/api/races.service";


export function fetchRaces() {
    return async dispatch => {
        try {
            dispatch(fetchRacesBegin());
            let races = (await RacesService.list());
            dispatch(fetchRacesSuccess(races));
        } catch (e) {
            dispatch(fetchRacesFailure(e));
        }
    };
}

export function fetchFormRaces(body) {
    return async dispatch => {
        try {
            dispatch(fetchRaceFormBegins());
            let race = (await RacesService.create(body));
            if (race != null) {
                dispatch(fetchRaceFormSuccess(race));
            }

        } catch (e) {
            dispatch(fetchRaceFormFailure(e));
        }
    };
}

export function fetchRegisterRace(raceId) {
    return async dispatch => {
        try {
            console.log(raceId)

           // dispatch(fetchRaceFormBegins());
            let race = (await RacesService.registerRace(raceId));
            console.log(race)
         /*   if (race != null) {
                dispatch(fetchRaceFormSuccess(race));
            }*/

        } catch (e) {
            dispatch(fetchRaceFormFailure(e));
        }
    };
}