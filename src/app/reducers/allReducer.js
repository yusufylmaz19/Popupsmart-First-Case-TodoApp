import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import loginReducer from './loginReducer'

const allReducer = combineReducers({
    todos:todosReducer,
    login:loginReducer,
})

export default allReducer