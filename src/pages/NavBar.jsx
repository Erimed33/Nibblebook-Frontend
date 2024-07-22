import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/navbar.css'

const NavBar = () => {
  const nav = useNavigate();

  const handleHome = () => {
    nav("/");
  };
  const handleSnacks = () => {
    nav("/snacks");
  };
  const handleAdd = () => {
    nav("/snacks/new");
  };
  return (
    <div className="navbar">
      <h1 className="title" onClick={handleHome}>Nibblebook</h1>
      <h3>Unique Snacks Around the World</h3>
      <div className="button-container">
        
          <button className='nav-button' onClick={handleHome}>Home</button>
          <button className='nav-button' onClick={handleSnacks}>Snacks</button>
          <button className='nav-button' onClick={handleAdd}>Add Snack!</button>
       
      </div>
    </div>
  );
};

export default NavBar;
