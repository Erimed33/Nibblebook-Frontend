import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/snackDetails.css";

const API = import.meta.env.VITE_API_URL;
const SnackDetails = () => {
  const [snacks, setSnacks] = useState({});
  const [formattedDate, setFormattedDate] = useState(null);
  const [comments, setComments] = useState({ username: "", comment: "" });
  const [totalComments, setTotalComments] = useState([]);
  let { index } = useParams();
  const nav = useNavigate();

  const handleTextChange = (event) => {
    setComments({ ...comments, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTotalComments([...totalComments, comments]);
    setSnacks;
  };

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

  const fillComments = () => {
    return totalComments.map((comment) => {
      <p>
        {comment.username} Says: {comment.comment}{" "}
      </p>;
    });
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
  }, [formattedDate, totalComments]);

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
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="snack-form">
          <label htmlFor="userName" className="form-label">
            Username:
          </label>
          <input
            id="username"
            value={comments.username}
            type="text"
            onChange={handleTextChange}
            placeholder="Username"
            required
            className="form-input"
          />
          <label htmlFor="origin" className="form-label">
            Comment:
          </label>
          <input
            id="comment"
            value={comments.comment}
            type="text"
            onChange={handleTextChange}
            placeholder="Your comment. (be nice!)"
            className="form-input"
          />
          <button type="submit" className="post-put-button">
            Submit
          </button>
        </form>
      </div>

      <p>
        <strong className="label">Comments: </strong>
      </p>
    </div>
  );
};

export default SnackDetails;
