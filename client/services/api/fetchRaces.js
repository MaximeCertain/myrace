import {requestRaces, requestRacesError, requestRacesSuccess} from '../../actions/races.action';
import RacesService from "./races.service";

function fetchRaces() {
    return dispatch => {
        dispatch(requestRaces);
        RacesService.list()
            .then(races => {
                dispatch(requestRacesSuccess(races))
                return races;
            })
            .catch(error => {
                dispatch(requestRacesError(error))
            })
    }
}

export default fetchRaces