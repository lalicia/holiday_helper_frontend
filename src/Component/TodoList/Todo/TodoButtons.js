import { Icon } from "@iconify/react";
import "../Todo.css"

export function TodoButtons(props) {
  const {
    isEditing,
    isComplete,
    // onClickToggle,
    onClickDelete,
    onClickEditOrDone,
  } = props;

  return (
    <div className="todo-buttons-div">
      {/* {!isEditing && (
        <button className="toggle-button" onClick={onClickToggle}>
          {isComplete ? "Not Done" : <Icon className="icon" icon="charm:tick" />}
        </button>
      )} */}
      {!isComplete && (
        <button className="edit-button" onClick={onClickEditOrDone}>
          {isEditing ? "Save Changes" : <Icon className="icon" icon="ant-design:edit-outlined" />}
        </button>
      )}
      {!isEditing && (
        <button className="delete-button" onClick={onClickDelete}>
          <Icon className="icon" icon="bi:trash" />
        </button>
      )}
    </div>
  );
}
