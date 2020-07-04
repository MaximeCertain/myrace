import {createStore, combineReducers} from 'redux';
import login from './users.reducers'
import races from './races.reducers'
import message from './messages.reducer'


export default combineReducers({
    login,
    races,
    message
})