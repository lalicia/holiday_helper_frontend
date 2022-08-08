import { useState } from "react";
import Authentication from "../../authentication/authentication";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { signup, login, logout, auth, db, useAuth } from "../../firebase-config"


// import { Auth, db } from "../../firebase-config";
export function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  function onChange(e) {
    setTodoTitle(e.target.value);
  }

  function onClickAdd() {
    // ignoring spaces between words, checks if there is an empty string in the input. If there is, it won't add to the todolist
    if (todoTitle.replace(/^\s+|\s+$/g, "") === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }


   // add
  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      todo: todo,
      uidd: uidd
    });

    setTodo("");

  };
  return (
    <div className="add-todo">
      <Authentication />
      <input className="add-text"
        type="text"
        placeholder="I need to pack..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={writeToDatabase}>
        Add Item
      </button>
    </div>
  );
}
