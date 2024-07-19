import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const NewSnack = () => {
  const nav = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    origin: "",
    description: "",
    rating: 0,
    is_vegetarian: "",
    discovered_date: "",
  });

  const addSnack = () => {
    fetch(`${API}/colors`, {
      method: "POST",
      body: JSON.stringify(snack),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json)
      .then((res) => {
        nav("/snacks");
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="origin">Origin:</label>
        <input
          id="origin"
          value={snack.origin}
          type="text"
          onChange={handleTextChange}
          placeholder="origin of Snack"
          // name ori desc rate is_veg disc_date
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={snack.description}
          type="text"
          onChange={handleTextChange}
          placeholder="description of Snack"
          required
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={snack.rating}
          type="dropdown"
          onChange={handleTextChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
      </form>
    </div>
  );
};

export default NewSnack;
