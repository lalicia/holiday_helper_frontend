export function TodoTitle(props) {
  const { isEditing, isComplete, title, onClickToggle, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span className="tick-cross" onClick={onClickToggle}>{isComplete ? `✔️` : `⭕`}</span>
      {isEditing ? (
        <input
          className="edit-todo-input"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <span className={`${isComplete && "todo-done"}`}>{title}</span>
      )}
    </div>
  );
}
