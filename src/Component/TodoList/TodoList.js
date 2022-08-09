import Authentication from "../authentication/authentication"
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./Todo/Todo";
import { AddTodo } from "./AddTodo";
import { set, ref, onValue, remove, update, get } from "firebase/database";
import { signup, login, logout, auth, db, useAuth } from "../../firebase-config"
import "./Todo.css"



const initialTodos = [
  { id: nanoid(), title: "Toothbrush", done: false },
  { id: nanoid(), title: "Toothpaste", done: false },
  { id: nanoid(), title: "Phone Charger", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
     
      const data = snapshot.val();
  
      console.log(data)
      setTodos(data[auth.currentUser.uid] ?? initialTodos )
    });
  }, []);

  
 function addTodo(newTodoTitle) {
    const todoId = nanoid()
    const newTodo = {
      id: todoId,
      title: newTodoTitle,
      done: false,
    };
   
   const newArTodo = [...todos, newTodo]
    set(ref(db, `/${auth.currentUser.uid}`),
      newArTodo)
   setTodos(newArTodo);  
  }
    
      
  
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
    set(ref(db, `/${auth.currentUser.uid}`),
      newTodos)
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    set(ref(db, `/${auth.currentUser.uid}`),
      newTodos) 
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
      <h2 className="page-title">Packing List</h2>
      <Authentication  />
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
