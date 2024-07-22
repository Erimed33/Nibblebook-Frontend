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
    is_vegetarian: false,
    discovered_date: "",
  });

  const addSnack = () => {
    fetch(`${API}/snacks/new`, {
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

  const handleCheckbox = () => {
    setSnack({ ...snack, is_vegetarian: !snack.is_vegetarian });
  };

  const handleRadio = (event) => {
    setSnack({ ...snack, rating: event.target.value });
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
        <fieldset>
          <legend>Rate this snack! :</legend>
          <div>
            <input
              type="radio"
              id="rating1"
              name="rating"
              value="1"
              onClick={handleRadio}
            />
            <label htmlFor="rating1">⭐️</label>

            <input
              type="radio"
              id="rating2"
              name="rating"
              value="2"
              onClick={handleRadio}
            />
            <label htmlFor="rating2">⭐️⭐️</label>

            <input
              type="radio"
              id="rating3"
              name="rating"
              value="3"
              onClick={handleRadio}
            />
            <label htmlFor="rating3">⭐️⭐️⭐️</label>

            <input
              type="radio"
              id="rating4"
              name="rating"
              value="4"
              onClick={handleRadio}
            />
            <label htmlFor="rating4">⭐️⭐️⭐️⭐️</label>

            <input
              type="radio"
              id="rating5"
              name="rating"
              value="5"
              onClick={handleRadio}
            />
            <label htmlFor="rating5">⭐️⭐️⭐️⭐️⭐️</label>
          </div>
        </fieldset>
        <label htmlFor="is_vegetarian">Vegetarian?:</label>
        <input
          id="is_vegetarian"
          value={snack.is_vegetarian}
          type="checkbox"
          onChange={handleCheckbox}
        />
        <label htmlFor="discovered_date">Discovered On:</label>
        <input
          id="discovered_date"
          value={snack.discovered_date}
          type="date"
          onChange={handleTextChange}
        />
        <button type="submit" onClick={addSnack}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewSnack;
