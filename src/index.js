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
import Verify from './components/userverify';
import Movies from './components/movies';

import Blogdisplay from './components/Blogdisplay';
import Create from './components/createpost';
import Admin from './components/admin';
import AdminPanel from './components/adminpanel';
import BlogdisplayAdmin from './components/BlogdisplayAdmin'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="contact" element={<Contactpage />}></Route>
        <Route path="login" element={<Userlogin />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="blog/:id" element={<Blogdisplay />}></Route>
        <Route path="darkestwhite_blogadmin/:id" element={<BlogdisplayAdmin />}></Route>
        <Route path="posts" element={<Movies />}></Route>
        <Route path="userverify" element={<Verify />}></Route>
        <Route path="create" element={<Create />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="darkestwhite_admin_panel" element={<AdminPanel />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
