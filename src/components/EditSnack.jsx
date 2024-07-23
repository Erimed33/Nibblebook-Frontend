import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/snackform.css";

const API = import.meta.env.VITE_API_URL;

const EditSnack = () => {
  const { index } = useParams();
  const nav = useNavigate()

  const [snack, setSnack] = useState({
    name: "",
    origin: "",
    description: "",
    rating: 0,
    is_vegetarian: false,
    discovered_date: "",
  });

  const [formattedDate, setFormattedDate] = useState('')

  const editSnack = () => {
    fetch(`${API}/snacks/${index}`, {
      method: "PUT",
      body: JSON.stringify({...snack, discovered_date: formattedDate}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        nav(`/snacks/${index}`);
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.name]: event.target.value });
  };

  const handleDateChange = (event) => {
    setFormattedDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editSnack();
  };

  const handleCheckbox = () => {
    setSnack({ ...snack, is_vegetarian: !snack.is_vegetarian });
  };

  const handleRadio = (event) => {
    setSnack({ ...snack, rating: event.target.value });
  };

  useEffect(() => {
    fetch(`${API}/snacks/${index}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setSnack(res);
        setFormattedDate(formatDate(res.discovered_date));
      })
      .catch((err) => console.log(err));
  }, [index]);

  const formatDate = () => {
    const d = new Date(snack.date_discovered);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
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
              name="rating"
              value="1"
              onClick={handleRadio}
            />
            <label htmlFor="rating1">⭐️</label>

            <input
              type="radio"
              name="rating"
              value="2"
              onClick={handleRadio}
            />
            <label htmlFor="rating2">⭐️⭐️</label>

            <input
              type="radio"
              name="rating"
              value="3"
              onClick={handleRadio}
            />
            <label htmlFor="rating3">⭐️⭐️⭐️</label>

            <input
              type="radio"
              name="rating"
              value="4"
              onClick={handleRadio}
            />
            <label htmlFor="rating4">⭐️⭐️⭐️⭐️</label>

            <input
              type="radio"
              name="rating"
              value="5"
              onClick={handleRadio}
            />
            <label htmlFor="rating5">⭐️⭐️⭐️⭐️⭐️</label>
          </div>
        </fieldset>
        <div className="checkbox-container">
          <label htmlFor="is_vegetarian">Vegetarian?:</label>
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
          value={formattedDate}
          type="date"
          onChange={handleDateChange}
          className="discovered-field"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditSnack;
