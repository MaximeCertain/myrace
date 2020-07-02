// Store/Reducers/favoriteReducer.js
const initialState = {races: [], error:null, loading:false}
import * as APICOngi from '../../actions/races.action'
const racesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_RACES':
            return {
                ...state,
                loading: true
            }
        case 'REQUEST_RACES_SUCCESS':
            return {
                ...state,
                loading: true,
                races: action.payload
            }
        case 'REQUEST_RACES_ERROR':
            return {
                ...state,
                loading:false,
                error: action.error
            }
        default:
            return state
    }
}

export default racesReducer
