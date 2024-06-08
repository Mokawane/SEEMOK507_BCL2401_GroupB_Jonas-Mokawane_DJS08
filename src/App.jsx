import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout'
import "./server"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />}/>
        <Route path="/Vans/:id" element={<VanDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

