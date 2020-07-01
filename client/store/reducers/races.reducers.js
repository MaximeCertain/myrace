// Store/Reducers/favoriteReducer.js
const initialState = {races: null}

const raceTest= (state = initialState, action) => {
    switch (action.type) {
        case 'RACES':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default raceTest