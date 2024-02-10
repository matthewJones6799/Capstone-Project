import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import Manager from './Manager.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/employees" element={<App />}></Route>
        <Route path="/manager/:id" element={<Manager />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
