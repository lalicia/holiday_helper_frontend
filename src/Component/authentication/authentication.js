import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login, logout, useAuth } from "../../firebase-config";
import "./authentication.css";

function Authentication() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  //fuction that handles singup
  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      window.location.reload(false);
    } catch {
      alert("Error this email already exists!"); //if
    }
    setLoading(false);
  }
  //function that handles login process
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      window.location.reload(false);
    } catch {
      alert("Error wrong Email/password!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      navigate("/");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      {!currentUser ? (
        <div className="login-div">
          <div className="inputs-div">
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
          </div>
          <div className="buttons-div">
            <button className="login-buttons" onClick={handleLogin}>
              Log In
            </button>
            <button className="login-buttons" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <div className="user-profile">
          <p className="user-icon">
            {currentUser.email.slice(0, 1).toUpperCase()}
          </p>
          <p>{currentUser.email}</p>
          <button className="login-buttons" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
export default Authentication;
