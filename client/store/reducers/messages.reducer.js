import Helpers from "../../helpers/Helpers";

const initialState = {error: null, loading: false}

const message = (state = initialState, action) => {
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

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}

export default message