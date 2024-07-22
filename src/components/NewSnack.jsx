import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/snackform.css'

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
    <div className="form-container">
      <form onSubmit={handleSubmit} className="snack-form">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
          className="form-input"
        />
        <label htmlFor="origin" className="form-label">Origin:</label>
        <input
          id="origin"
          value={snack.origin}
          type="text"
          onChange={handleTextChange}
          placeholder="Origin of Snack"
          className="form-input"
          // name ori desc rate is_veg disc_date
        />
        <label htmlFor="description" className="form-label">Description:</label>
        <input
          id="description"
          value={snack.description}
          type="text"
          onChange={handleTextChange}
          placeholder="description of Snack"
          required
          className="form-input"
        />
        <label htmlFor="rating" className="form-label">Rating:</label>
        <input
          id="rating"
          value={snack.rating}
          type="dropdown"
          onChange={handleTextChange}
          className="form-input"
        />
        <label htmlFor="discovered-date" className="form-label">Discovered Date:</label>
        <input
          id="discovered-date"
          value={snack.discovered_date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date discovered"
          required
          className="form-input"
        />
        <label htmlFor="comments" className="form-label">Comments:</label>
        <input
          id="Comments"
          value={snack.comments}
          type="text"
          onChange={handleTextChange}
          placeholder="Comments"
          required
          className="form-input"
        />
      </form>
    </div>
  );
};

export default NewSnack;
