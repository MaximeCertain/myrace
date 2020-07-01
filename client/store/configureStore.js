import {createStore, combineReducers} from 'redux';
import reducer from './reducers/reducer'
import login from "./reducers/users.reducers";

const combinedReducers = combineReducers({
    login
})
const store = createStore(combinedReducers)

export default store