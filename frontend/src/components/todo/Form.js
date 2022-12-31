import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todos";

const Form = ({ addTodo }) => {
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = { title, description };

    addTodo(todo);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Todo</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>

        <button className="btn btn-primary" type="submit">Добавить</button>
      </form>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(Form);
