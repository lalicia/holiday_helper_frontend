import { useState } from "react";

// import { Auth, db } from "../../firebase-config";
export function AddTodo({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function onChange(e) {
    setTodoTitle(e.target.value);
  }

  function onClickAdd() {
    // ignors spaces between words, checks if there is an empty string in the input. If there is, it won't add to the todolist
    if (todoTitle.replace(/^\s+|\s+$/g, "") === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div className="add-todo">
      
      <input className="add-text"
        type="text"
        placeholder="I need to pack..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add Item
      </button>
    </div>
  );
}
