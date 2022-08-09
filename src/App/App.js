import "./App.css";
import Main from "../Component/Main.js/Main";
import Navbar from "../Component/Navbar/Navbar";
import TodoList from "../Component/TodoList/TodoList";
import Exchange from "../Component/Exchange/Exchange";
import Weather from "../Component/Weather/Weather";
import Contacts from "../Component/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
// import Authentication from "../authentication/authentication";

/* added extra class around navbar and body of app to keep footer separate so we can pad at the bottom to stop footer covering content */
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="main-body">
          <Routes>
            
            <Route path="/" element={<Main />} />
              {/* <Route path="/login" element={<Authentication />} /> */}
            <Route path="/packing-list" element={<TodoList />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
