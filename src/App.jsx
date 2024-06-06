import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

