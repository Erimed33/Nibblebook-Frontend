import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Index from "./components/New"
import Show from "./components/Show"
import New from "./components/New"
import Edit from "./components/Edit"

import './App.css'

function App() {
 

  return (
    <>
     <NavBar />
     <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:index" element={<Show />} />
            <Route path="/snacks/:index/edit" element={<Edit />} />
            
          </Routes>

     </main>
     
    </>
  )
}

export default App
