import { useState } from "react";
import { TodoButtons } from "./TodoButtons";
import { TodoTitle } from "./TodoTitle";

export function Todo(props) {
  const { todo, updateTodo, deleteTodo } = props;
  const { title, isComplete } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  function onClickToggle() {
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    updateTodo(todo.id, updatedTodo);
    // set(ref(db, `/${auth.currentUser.uid}`),
  }
  //Function that edites packing list
  function onClickEdit() {
    setIsEditing(!isEditing);
  }
//Function that Deletes packing list
  function onClickDelete() {
    deleteTodo(todo.id);
  }
 //Function that completes the tasks on packing list
  function onClickDone() {
    const updatedTodo = { ...todo, title: editedTodoTitle };
    updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  }

  return (
    <div className="todo">
      <TodoTitle
        title={title}
        isComplete={isComplete}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        editedTodoTitle={editedTodoTitle}
        setEditedTodoTitle={setEditedTodoTitle}
      />
      <TodoButtons
        isComplete={isComplete}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
