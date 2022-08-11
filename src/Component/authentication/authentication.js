import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login, logout, useAuth } from "../../firebase-config";
import "./authentication.css";

function Authentication() {
  const [loading, setLoading] = useState(false);
  //construct Current User 
  const currentUser = useAuth();
  const navigate = useNavigate();
 //construct emailRefrence
  const emailRef = useRef();

  const passwordRef = useRef();
  //fuction that handles singup awaits for user input then sends the the input to the data base 
  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      //forces the page to re-render to stop users data being viewed bu others
      window.location.reload(false);
    } catch {
      //forces reload.
      alert("Error this email already exists!");
      
    }
    setLoading(false);
  }
  //function that handles log in process
  async function handleLogin() {
    setLoading(true);
    try {
      //wait for email and password
      await login(emailRef.current.value, passwordRef.current.value);
      //force load users saved data
      window.location.reload(false);
    } catch {
      alert("Error wrong Email/password!");
    }
    setLoading(false);
  }
 //fuction that handles login out with navigate gates user back to main after sign out
  async function handleLogout() {
    setLoading(true);
    try {
      //await user logout
      await logout();
      //then redirect them to main page
      navigate("/");
    } catch {
      //catch anyother errors like spam logout
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
