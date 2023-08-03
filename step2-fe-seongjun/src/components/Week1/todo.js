import React from 'react';
import '../style/todo.css';

const Todo = ({ id, text, onRemove }) => {
  return (
    <li className="todo-li">
      <input className="check-input" type='checkbox'></input>
      {text}
      <span className="todo-span" onClick={() => onRemove(id)}>X</span>
    </li>
  );
};

export default Todo;