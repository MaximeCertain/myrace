import {createStore, combineReducers} from 'redux';
import login from './users.reducers'
import races from './races.reducers'


export default combineReducers({
    login,
    races
})