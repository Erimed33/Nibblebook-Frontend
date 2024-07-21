import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      <h2><strong>Name: </strong>{snacks.name}</h2>
      <p><strong>Origin: </strong>{snacks.description}</p>
      <p><strong>Description:</strong>{snacks.description}</p>
      <p><strong>Rating:</strong>{snacks.rating}</p>
      <p><strong>Vegetarian: </strong>{snacks.is_vegetarian ? "Yes" : "No"}</p>
      <p><strong>Discovered Date: </strong>{snacks.discovered_date}</p>
      <p><strong>Comments: </strong>{snacks.comments}</p>
    </div>
  );
};

export default SnackDetails;
