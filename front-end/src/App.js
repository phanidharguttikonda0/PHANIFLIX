import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [gmail, setMail] = useState(null) ;
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home gmail={gmail} setMail={setMail} />} />
        <Route path='/login' element={<Login setMail={setMail} />} />
        <Route path='/sign-up' element={<Signup setMail={setMail} /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
