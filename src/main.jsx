import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import Home from "/tudo/.Home.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/App" element={<App />}></Route>
      <Route path="/login" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    <App/>
  </React.StrictMode>,
)
