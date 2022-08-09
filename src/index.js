import React, { useState, usedEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from './App';
import Contactpage from './contactpage';
import Userlogin from './components/userlogin';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup';
import Movies from './components/movies';
import Visual from './components/visualart'
import Books from './components/books'
import Music from './components/music'
import Blogdisplay from './components/Blogdisplay';
import Create from './components/createpost';
import Admin from './components/admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="contact" element={<Contactpage />}></Route>
        <Route path="userlogin" element={<Userlogin />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="blog" element={<Blogdisplay />}></Route>
        <Route path="posts/movies" element={<Movies />}></Route>
        <Route path="posts/books" element={<Books />}></Route>
        <Route path="posts/visualarts" element={<Visual />}></Route>
        <Route path="posts/music" element={<Music />}></Route>
        <Route path="create" element={<Create />}></Route>
        <Route path="admin" element = {<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
