import {FETCH_TODOS,ADD_TODO,DELETE_TODO,TOGGLE_TODO,UPDATE_TODO} from '../constant/actionTypes';

const initialState={
    todos:[],
}

const todosReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_TODOS:
            return { ...state, todos: action.payload };
        case ADD_TODO:
            return { ...state, todos: [action.payload , ...state.todos] };
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
        case TOGGLE_TODO:
            return { ...state, todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)) };
        case UPDATE_TODO:
            return { ...state, todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)) };
        default:
            return state
        }
}

export default todosReducer;