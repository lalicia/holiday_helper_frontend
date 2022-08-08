import React, { useEffect, useState } from "react";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { signup, login, logout, auth, db, useAuth } from "../../firebase-config"
import Authentication from "../../authentication/authentication";
import "./ftodo.css"


export default function Homepage() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState("");
  const navigate = useNavigate();

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         // read
//         onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
//           setTodos([]);
//           const data = snapshot.val();
//           if (data !== null) {
//             Object.values(data).map((todo) => {
//               setTodos((oldArray) => [...oldArray, todo]);
//             });
//           }
//         });
//       } else if (!user) {
//         navigate("/");
//       }
//     });
//   }, []);

//   const handleSignOut = () => {
//     signup(auth)
//       .then(() => {
//         navigate("/");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

  // add
  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      todo: todo,
      uidd: uidd
    });

    setTodo("");
  };

//   // update
//   const handleUpdate = (todo) => {
//     setIsEdit(true);
//     setTodo(todo.todo);
//     setTempUidd(todo.uidd);
//   };

//   const handleEditConfirm = () => {
//     update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
//       todo: todo,
//       tempUidd: tempUidd
//     });

//     setTodo("");
//     setIsEdit(false);
//   };

//   // delete
//   const handleDelete = (uid) => {
//     remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
//   };

    return (
      <div className="main">
        <Authentication />
     
      <div className="homepage">

        <input
            className="add-edit-input"
            type="text"
            placeholder="Add todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />

      {/* {todos.map((todo) => (
        <div className="todo">
          <h1>{todo.todo}</h1>
          <button
            fontSize="large"
            onClick={() => handleUpdate(todo)}
            className="edit-button"
          >Edite</button>
          <button
            fontSize="large"
            onClick={() => handleDelete(todo.uidd)}
            className="delete-button"
              >delete</button>
              
        </div>
         ))} */}

        {isEdit ? (
            <div>
            <button onClick={handleEditConfirm} className="add-confirm-icon">add</button>
            </div>
        ) : (
            <div>
            <button onClick={writeToDatabase} className="add-confirm-icon" />
            </div>
        )}
            <button onClick={handleSignOut} className="logout-icon" />
      </div>
     </div>
  );
}