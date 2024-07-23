import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/snackform.css";

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
    comments:"",
  });

  const addSnack = () => {
    fetch(`${API}/snacks`, {
      method: "POST",
      body: JSON.stringify(snack),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        nav("/snacks");
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.name]: event.target.value });
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
    <div className="form-container">
      <form onSubmit={handleSubmit} className="snack-form">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          name="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
          className="form-input"
        />
        <label htmlFor="origin" className="form-label">
          Origin:
        </label>
        <input
          name="origin"
          value={snack.origin}
          type="text"
          onChange={handleTextChange}
          placeholder="Origin of Snack"
          className="form-input"
          // name ori desc rate is_veg disc_date
        />
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          name="description"
          value={snack.description}
          type="text"
          onChange={handleTextChange}
          placeholder="description of Snack"
          required
          className="form-input"
        />
        <label htmlFor="rating" className="form-label">
          Rating:
        </label>
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
        <div className="checkbox-container">
          <label htmlFor="is_vegetarian" className="form-label">Vegetarian?:</label>
          <input
            name="is_vegetarian"
            value={snack.is_vegetarian}
            type="checkbox"
            onChange={handleCheckbox}
            className="checkbox"
          />
        </div>
        <label htmlFor="discovered_date" className="form-label">
          Discovered On:
        </label>
        <input
          name="discovered_date"
          value={snack.discovered_date}
          type="date"
          onChange={handleTextChange}
          className="discovered-field"
        />
       
        <label htmlFor="comments" className="form-label">
      Comments:
        </label>
        <textarea
        name="comments"
        id="comments"
        value={snack.comments}
        onChange={handleTextChange}
        placeholder="Enter comments about this snack here"
        className="form-input"/>
        
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewSnack;
