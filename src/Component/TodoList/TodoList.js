import { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./Todo/Todo";
import { AddTodo } from "./AddTodo";
// import { set, ref, onValue, remove, update } from "firebase/database";
// import { db } from "../../firebase-config"
// import { auth,} from "../../firebase-config";
import "./Todo.css"


const initialTodos = [
  { id: nanoid(), title: "Toothbrush", done: false },
  { id: nanoid(), title: "Toothpaste", done: false },
  { id: nanoid(), title: "Phone Charger", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newTodoTitle) {
    const newTodo = {
      id: nanoid(),
      title: newTodoTitle,
      done: false,
    };
    setTodos([...todos, newTodo]);
  }

  //  function addTodo(newTodoTitle) {
  //   const nanoid = nanoid();
  //   set(ref(db, `/${auth.currentUser.nanoid}/${nanoid}`), {
  //     addTodo: addTodo,
  //     nanoid: nanoid
  //   });

  //   setTodo("");
  // };
  
  function updateTodo(id, updatedTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...updatedTodo,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
      <h2 className="page-title">Packing List</h2>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
