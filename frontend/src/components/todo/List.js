import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTodos, toggleTodo, deleteTodo } from '../../actions/todos'
import { Fragment } from 'react';
import todos from './../../reducers/todos';



const List = ({getTodos, todos}) => {
  
  useEffect(()=>{
    getTodos()
  }, [todos])
  
  

  

  return (
    <Fragment>
      <h2>Todo List</h2>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Done</th>
          </tr>
            
        </thead>

        <tbody>
          {todos.map((todo) => {
            const {id, title, description, done} = todo
            return(
              <tr key={id}>
                  <th>{title}</th>
                  <th>{description}</th>
                  <th>{title}</th>
                  <th><input onChange={() => toggleTodo(todo)} type='checkbox' defaultChecked={done}/></th>
                  <th><button onClick={() => deleteTodo(id)} className='btn btn-dark'>Удалить</button></th>

              </tr>
              
            )
          })}
        </tbody>

      </table>
    </Fragment>
  )
}



const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    toggleTodo: (todo) => dispatch(toggleTodo(todo)),
    deleteTodo: (id)=>dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List)