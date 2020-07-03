// Store/Reducers/favoriteReducer.js
const initialState = {token: null, user: null}

const login= (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.data.user,
                token: action.data.token
            }
        case "FETCH_EDIT_PROFILE_BEGINS":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_EDIT_PROFILE_SUCCESS":

            console.log(action.payload.user)
            return {
                ...state,
                loading: false,
                user: action.payload.user
            };
        case "FETCH_EDIT_PROFILE_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                races: []
            };
        default:
            return state
    }
}

export default login