import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/snackDetails.css";

const API = import.meta.env.VITE_API_URL;
const SnackDetails = () => {
  const [snacks, setSnacks] = useState({});
  const [formattedDate, setFormattedDate] = useState(null);
  let { index } = useParams();
  const nav = useNavigate();

  console.log(snacks.discovered_date);

  const handleEdit = () => {
    nav(`/snacks/edit/${index}`);
  };

  const deleteSnack = () => {
    fetch(`${API}/snacks/${snacks.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((res) => {
        nav("/snacks");
      })
      .catch((err) => console.log(err));
  };

  const formatDate = () => {
    const d = new Date(snacks.discovered_date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    fetch(`${API}/snacks/${index}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSnacks(res);
        setFormattedDate(formatDate());
      })
      .catch((err) => console.log(err));
  }, [formattedDate]);

  return (
    <div className="snack-details">
      <h2>
        <strong className="name-label">{snacks.name}</strong>
      </h2>
      <p>
        <strong className="label">Origin: </strong>
        {snacks.description}
      </p>
      <p>
        <strong className="label">Description: </strong>
        {snacks.description}
      </p>
      <p>
        <strong className="label">Rating: </strong>
        {snacks.rating}
      </p>
      <p>
        <strong className="label">Vegetarian: </strong>
        {snacks.is_vegetarian ? "Yes" : "No"}
      </p>
      <p>
        <strong className="label">Discovered Date: </strong>
        {formattedDate}
      </p>
      <span>
        <button onClick={deleteSnack} className="post-put-button">
          Delete Snack
        </button>
        <button className="post-put-button" onClick={handleEdit}>
          Edit Snack
        </button>
      </span>
      <p>
        <strong className="label">Comments: </strong>
        {snacks.comments}
      </p>
    </div>
  );
};

export default SnackDetails;
