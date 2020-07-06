import {
    fetchRaceFormBegins, fetchRaceFormFailure,
    fetchRaceFormSuccess,
    fetchRacesBegin, fetchRaceFormEditSuccess,
    fetchRacesFailure,
    fetchRacesSuccess
} from "../../actions/races.action";
import {store} from '../../store/configureStore';

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
            // dispatch(fetchRaceFormBegins());
            let race = (await RacesService.registerRace(raceId));
            /*   if (race != null) {
                   dispatch(fetchRaceFormSuccess(race));
               }*/
        } catch (e) {
            dispatch(fetchRaceFormFailure(e));
        }
    };
}

export function fetchManageRaceValidity(body) {
    console.log(body)
    return async dispatch => {
        try {
            let race = (await RacesService.update(body));
            if (race.message === "updated_race") {
                    dispatch(fetchRaceFormEditSuccess(body));
            }
            console.log(store.getState().race.races)

        } catch (e) {
            dispatch(fetchRaceFormFailure(e));
        }
    };
}