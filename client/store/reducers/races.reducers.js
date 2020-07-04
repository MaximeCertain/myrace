import Helpers from "../../helpers/Helpers";

const initialState = {races: [], registeredRaces:[], error: null, loading: false}

export default function race(state = initialState, action) {
    switch (action.type) {
        case "FETCH_RACES_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_RACES_SUCCESS":
            return {
                ...state,
                loading: false,
                races: action.payload.races
            };
        case "FETCH_RACES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                races: []
            };
        case "FETCH_RACE_FORM_SUCCESS":
            return {
                ...state,
                loading: false,
                races: [...state.races, action.payload.race]
            };
        case "GET_REGISTERED_RACES":
            return {
                ...state,
                loading: false,
                registeredRaces: state.races.filter(race => {
                    let now = Helpers.getActualDate()
                    let registered = false
                    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

                    race.Runners.map(r => {
                        if (r.id === action.id.id && race.date > now){
                            registered = true
                        }
                    })
                    return registered
                })
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}