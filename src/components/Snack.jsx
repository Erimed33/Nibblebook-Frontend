import { Link } from "react-router-dom";

import React from "react";

const Snack = ({ snack, index }) => {
  return (
    <tr className="snack-row">
      <td>
        <Link to={`/snacks/${snack.id}`}>
          {" "}
          <div className='snack-label'><strong>Name:</strong> {snack.name}</div>
          <div className='snack-label'><strong>Rating:</strong>{snack.rating}</div> 
          <div className='snack-label'><strong>Origin:</strong> {snack.origin}</div>
          
          <div className='snack-label'><strong>Discovered Date:</strong> {snack.discovered_date}</div>
        </Link>
      </td>
    </tr>
  );
};

export default Snack;
