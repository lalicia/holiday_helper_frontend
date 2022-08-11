import Authentication from "../authentication/authentication"
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./Todo/Todo";
import { AddTodo } from "./AddTodo";
import { set, ref, onValue } from "firebase/database";
import { auth, db } from "../../firebase-config"
import "./Todo.css"


//Initail list that will be displayed on the page.
const initialTodos = [
  { id: nanoid(), title: "Toothbrush", done: false },
  { id: nanoid(), title: "Toothpaste", done: false },
  { id: nanoid(), title: "Phone Charger", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState([]);
// this use effect updates packing list with data from the database
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
     //constructs data from database
      const data = snapshot.val();
    //If there's intials Data load ?? is a Nullish coalescing operator it returns right hand side when left hand side is null
      setTodos(data[auth.currentUser.uid] ?? initialTodos )
    });
  }, []);

  
  function addTodo(newTodoTitle) {
   //construct TodoID with naniod unique id asigment liberary
    const todoId = nanoid()
    const newTodo = {
      id: todoId,
      title: newTodoTitle,
      done: false,
    };
   
    const newArTodo = [...todos, newTodo]
    //set ref database with current user
    set(ref(db, `/${auth.currentUser.uid}`),
      newArTodo)
   setTodos(newArTodo);  
  }
    
      
  //Update items from the packing list along side the data base
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
    //checks the data base and updates
    set(ref(db, `/${auth.currentUser.uid}`),
      newTodos)
    setTodos(newTodos);
  }
  //Delete items from the packing list along side the data base
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
