import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import '../styles/snackDetails.css'


const API = import.meta.env.VITE_API_URL;
const SnackDetails = () => {
  const [snacks, setSnacks] = useState([]);
  let { index } = useParams();

  useEffect(() => {
    fetch(`${API}/snacks/${index}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSnacks(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="snack-details">
      <h2 ><strong className="label">{snacks.name}</strong></h2>
      <p><strong className="label">Origin: </strong>{snacks.description}</p>
      <p><strong className="label">Description: </strong>{snacks.description}</p>
      <p><strong className="label">Rating: </strong>{snacks.rating}</p>
      <p><strong className="label">Vegetarian: </strong>{snacks.is_vegetarian ? "Yes" : "No"}</p>
      <p><strong className="label">Discovered Date: </strong>{snacks.discovered_date}</p>
      <p><strong className="label">Comments: </strong>{snacks.comments}</p>
    </div>
  );
};

export default SnackDetails;
