// Store/Reducers/favoriteReducer.js
const initialState = {token: null}

const login= (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default login