import {FETCH_TODOS,ADD_TODO,DELETE_TODO,TOGGLE_TODO,UPDATE_TODO} from '../constant/actionTypes';
import api from '../../utils/api'

export const fetchTodos = () => async (dispatch) => {
    try {
      const { data } = await api().get("/todos");
      dispatch({ type: FETCH_TODOS, payload: data });
    } catch {
      console.log("todos getirilemedi");
    }
};

export const addTodo = (content) => async (dispatch) => {
  try {
    const { data } = await api().post("/todos", { content:content });
    dispatch({ type: ADD_TODO, payload: data });
  } catch {
    console.log("todo eklenemedi");
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api().delete(`/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  } catch {
    console.log("todo silinemedi");
  }
}

export const toggleTodo = (id,isCompleted) => async (dispatch) => {
  try {
    const { data } = await api().put(`/todos/${id}`,{ isCompleted:!isCompleted });
    dispatch({ type: TOGGLE_TODO, payload: data });
  } catch {
    console.log("todo tamamlanamadı");
  }
}

export const updateTodo = (id, content) => async (dispatch) => {
  try {
    const { data } = await api().put(`/todos/${id}`,{ content });
    dispatch({ type: UPDATE_TODO, payload: data });
  } catch {
    console.log("todo güncellenemedi");
  }
}