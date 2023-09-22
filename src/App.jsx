// import { useState } from 'react'
import LoginForm from './components/login/loginform'
import Home from './components/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const api = "http://192.168.37.134:8081/WHAPI/api";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm api={api} />} />
        <Route path="/home" element={<Home api={api} />} />
      </Routes>
    </Router>
  )
}

export default App
