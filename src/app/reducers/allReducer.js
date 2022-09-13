import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import loginReducer from './loginReducer'
import settingsReducer from './settingsReducer'

const allReducer = combineReducers({
    todos:todosReducer,
    login:loginReducer,
    settings:settingsReducer
})

export default allReducer