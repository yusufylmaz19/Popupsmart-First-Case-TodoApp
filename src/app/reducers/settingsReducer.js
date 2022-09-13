import { SET_DARK, SET_LANG } from "../constant/actionTypes";

const initialState={
     dark:false,
     lang:false,
}

const settingsReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_DARK:
            return { ...state, dark: !state.dark };
        case SET_LANG:
            return { ...state, lang: !state.lang };
        default:
            return state
    }
}


export default settingsReducer;