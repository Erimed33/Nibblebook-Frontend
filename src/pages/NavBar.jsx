import React from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <h1 className="title">Nibblebook</h1>
      <h3>Unique Snacks Around the World</h3>
      <div>
        <span>
          <button onClick={handleHome}>Home</button>
          <button onClick={handleSnacks}>Snacks</button>
          <button onClick={handleAdd}>Add Snack!</button>
        </span>{" "}
      </div>
    </div>
  );
};

export default NavBar;
