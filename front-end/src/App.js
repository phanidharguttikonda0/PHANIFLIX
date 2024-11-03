import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat.jsx';
import Home from './pages/Home.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import Signup from './pages/Signup';
import Trending from './pages/Trending.jsx';

function App() {
  const [gmail, setMail] = useState(null) ;
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home gmail={gmail} setMail={setMail} />} > 
        
        <Route index element={<HomePage />} />
        <Route path='search' element={<Search />} />
        <Route path='trending' element={<Trending />} />
        <Route path='chat' element={<Chat />} />
        <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login setMail={setMail} />} />
        <Route path='/sign-up' element={<Signup setMail={setMail} /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
