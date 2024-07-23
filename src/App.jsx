import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";

import './App.css'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/edit/:id" element={<Edit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
