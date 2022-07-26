import './App.css';
import Main from '../Component/Main.js/Main';
import Navbar from '../Component/Navbar/Navbar'
import Packing from '../Component/Packing-List/Packing';
import Exchange from '../Component/Exchange/Exchange';
import Weather from '../Component/Weather/Weather';
import Contacts from '../Component/Contacts/Contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path= '/' element={<Main />} />
        <Route path= '/packing-list' element={<Packing />} />
        <Route path= '/exchange' element={<Exchange />} />
        <Route path= '/weather' element={<Weather />} />
        <Route path= '/contacts' element={<Contacts />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
