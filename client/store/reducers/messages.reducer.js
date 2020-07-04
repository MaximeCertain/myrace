import Helpers from "../../helpers/Helpers";

const initialState = {error: null, loading: false}

export default function message(state = initialState, action) {
    console.log(45)
    switch (action.type) {
        case "FETCH_MESSAGE_FORM_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_MESSAGE_FORM_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case "FETCH_MESSAGE_FORM_SUCCESS":
            console.log('coucou')
            return {
                ...state,
                loading: false
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}