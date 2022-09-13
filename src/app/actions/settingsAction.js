import { SET_DARK, SET_LANG } from "../constant/actionTypes";

export const toggleDark = () => (dispatch) => {
    try {
        dispatch({ type: SET_DARK });
    } catch {
        console.log("dark mode çalışmadı");
    }
} 

export const toggleLang = () => (dispatch) => {
    try {
        dispatch({ type: SET_LANG });
    } catch {
        console.log("lang mode çalışmadı");
    }
} 
