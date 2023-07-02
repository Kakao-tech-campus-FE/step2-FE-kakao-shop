import { useState } from "react";
import "./Checklist.css";

const Checklist = () => {
  const defaultTodos = [
    { title: "Memo 1" },
    { title: "Memo 2" },
    { title: "Memo 3" },
  ];
  const [todos, setTodos] = useState(defaultTodos);
  const [checkedTodos, setCheckedTodos] = useState(
    Array(defaultTodos.length).fill(false)
  );
  const [inputValue, setInputValue] = useState("");
  const handleChange = (index) => {
    const newChecked = [...checkedTodos];
    newChecked[index] = !newChecked[index];
    setCheckedTodos(newChecked);
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    const newChecked = [...checkedTodos];
    newChecked.splice(index, 1);
    setCheckedTodos(newChecked);
  };
  const handleAdd = () => {
    if (inputValue) {
      const newTodos = [...todos, { title: `${inputValue}` }];
      setTodos(newTodos);
      const newChecked = [...checkedTodos, false];
      setCheckedTodos(newChecked);
      setInputValue("");
    }
  };

  return (
    <div className="check-list">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Input your Todo!"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      ></input>
      <button onClick={handleAdd}>+</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            className={`li ${
              checkedTodos[index] ? "checked-true" : "checked-false"
            }`}
            key={index}
          >
            <label>
              <input
                type="checkbox"
                checked={checkedTodos[index]}
                onChange={() => {
                  handleChange(index);
                }}
              />
              <span>{todo.title}</span>
            </label>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Checklist;
