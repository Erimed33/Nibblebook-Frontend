import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
const SnackDetails = () => {
  const [snacks, setSnacks] = useState([]);
  let navigate = useNavigate();
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
      {snacks.name},{snacks.description}
    </div>
  );
};

export default SnackDetails;
