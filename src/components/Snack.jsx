import { Link } from "react-router-dom";

import React from "react";

const Snack = ({ snack, index }) => {
  const convertDate = () => {
    let newDate = snack.discovered_date.split("");
    newDate.splice(10);
    return newDate;
  };

  return (
    <tr className="snack-row">
      <td>
        <Link to={`/snacks/${snack.id}`}>
          {" "}
          Name: {snack.name}, Rating: {snack.rating}, Origin: {snack.origin},
          Discovered Date: {convertDate()}
        </Link>
      </td>
    </tr>
  );
};

export default Snack;
