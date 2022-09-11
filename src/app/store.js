import {
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import allReducer from './reducers/allReducer'

const store = createStore(
    allReducer,
    applyMiddleware(thunk)
);

export default store