import axios from "axios";
import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./types";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export const getTodos = () => (dispatch) => {
  axios.get("api/todo/")
    .then((result) => {
      dispatch({
        type: GET_TODO_LIST,
        payload: result.data,
      });
    })
    .catch((error) => console.log(error));
};

export const deleteTodo = (id) =>{
  console.log(id);
  axios
    .delete(`api/todo/${id}`)
    .then(() => {
      return{
        type: DELETE_TODO,
        payload: id,
      }
    })
    .catch((error) => console.log(error));
};

export const toggleTodo = (todo) => (dispatch) => {
  todo.done = !todo.done;

  axios.put(`api/todo/${todo.id}`, todo).then((result) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: result.data,
    });
  });
};

export const addTodo = (todo)=> dispatch =>{

  axios.post('api/todo/', todo)
    .then(
      result => {

        dispatch({
          type: ADD_TODO,
          payload: result.data
        })


      }
    )
}