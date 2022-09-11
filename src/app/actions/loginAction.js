import {LOGIN} from '../constant/actionTypes';

export const login = (name) => (dispatch) => {
    try {
        dispatch({ type: LOGIN });
        localStorage.setItem("name", name);
    } catch {
        console.log("login olunamadı");
    }
} 