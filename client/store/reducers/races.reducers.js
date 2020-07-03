const initialState = {races: [], error: null, loading: false}

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
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}