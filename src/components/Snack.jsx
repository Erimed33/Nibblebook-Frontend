import { Link } from "react-router-dom";

import React from "react";


const Snack = ({ snack, index }) => {
  return (
    <tr>
      <td>
        <Link to={`/snacks/${index}`}> {snack.name}</Link>
      </td>
    </tr>
  );
};

export default Snack;
