import { Link } from "react-router-dom";

import React from "react";


const Snack = ({ snack, index }) => {
  return (
    <tr>
      <td>
        <Link to={`/snacks/${index}`}>
          {" "}
            Name: {snack.name},
         
            Rating: {snack.rating},
        
            Origin: {snack.origin},
          
            Discovered Date: {snack.discovered_date}
        </Link>
      </td>
    </tr>
  );
};

export default Snack;
