import {fetchRacesBegin, fetchRacesFailure, fetchRacesSuccess} from "../../actions/races.action";
import RacesService from "../../services/api/races.service";

export function fetchRaces() {
    return async dispatch => {
        try {
            dispatch(fetchRacesBegin());
            let races = (await RacesService.list()) ;
            dispatch(fetchRacesSuccess(races));
        } catch (e) {
            dispatch(fetchRacesFailure(error));
        }
    };
}

