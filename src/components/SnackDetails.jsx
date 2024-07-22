import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/snackDetails.css";

const API = import.meta.env.VITE_API_URL;
const SnackDetails = () => {
  const [snacks, setSnacks] = useState([]);
  let { index } = useParams();
  const nav = useNavigate();

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

  useEffect(() => {
    fetch(`${API}/snacks/${index}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSnacks(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const date = new Date(isoString);

  // // Convert to a human-readable string
  // const humanReadableDate = date.toLocaleString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   second: 'numeric',
  //   hour12: true
  // });

  const date = new Date(snacks.discovered_date);

  const humanReadable = date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  snacks.discovered_date = humanReadable;

  console.log("THIS IS THE SNACK", snacks.discovered_date);
  return (
    <div className="snack-details">
      <h2>
        <strong className="label">{snacks.name}</strong>
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
        {snacks.discovered_date}
      </p>
      <span>
        <button onClick={deleteSnack}>Delete Snack</button>
        <button onClick={handleEdit}>Edit Snack</button>
      </span>
      <p>
        <strong className="label">Comments: </strong>
        {snacks.comments}
      </p>
    </div>
  );
};

export default SnackDetails;
