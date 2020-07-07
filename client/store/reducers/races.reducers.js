import Helpers from "../../helpers/Helpers";

const initialState = {races: [], registeredRaces: [], resultsRaces: [], error: null, loading: false}

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
                    race.Runners.map(r => {
                        if (r.id === action.id.id && race.date > now) {
                            registered = true
                        }
                    })
                    return registered
                })
            };
        case "FETCH_RACE_FORM_EDIT_SUCCESS":
            return {
                ...state,
                loading: false,
                races: state.races.map(race => {
                    if (race.id === action.payload.race.id) {
                        race = action.payload.race;
                    }
                    return race;
                })

            };
        case "GET_RESULTED_RACES":
            return {
                ...state,
                loading: false,
                resultsRaces: state.races.filter(race => {
                    let now = Helpers.getActualDate()
                    let resulted = false
                    race.Runners.map(r => {
                        if (r.id === action.id.id && race.date < now) {
                            resulted = true
                        }
                    })
                    return resulted
                })
            };
        case "FETCH_MESSAGE_FORM_SUCCESS":
            return {
                ...state,
                loading: false,
                races: state.races.map(race =>
                    race.id === action.payload.message.id ? {...race, Messages: action.payload.message} : race
                )
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}