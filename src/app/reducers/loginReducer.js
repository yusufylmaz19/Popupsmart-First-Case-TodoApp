import {LOGIN} from '../constant/actionTypes';

const initialState={
    isLogin:false,
}

const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return { ...state, isLogin: true };
        default:
            return state
    }
}

export default loginReducer;