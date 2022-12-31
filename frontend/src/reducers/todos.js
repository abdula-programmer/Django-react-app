import {DELETE_TODO, GET_TODO_LIST, TOGGLE_TODO} from '../actions/types'


const initialState = {
   todos: []
}

const todos = (state= initialState, action) => {
   
   switch (action.type) {
      case GET_TODO_LIST:
         return {
            ...state,
            todos: action.payload
         }

      case TOGGLE_TODO:
         return {
            ...state,
            todos: [...state.todos]
         }
      
         case DELETE_TODO:
            return {
               ...state,
               todos: state.todos.filter(({id}) => id != action.payload)
            }
         
      
            
      default:
         return state
   }
}

export default todos