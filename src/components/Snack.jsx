import { Link } from "react-router-dom";
import "../styles/snack.css";
import React from "react";

const Snack = ({ snack, id }) => {
  //   const [formattedDate, setFormattedDate] = useState(null);

  const formatDate = () => {
    const d = new Date(snack.discovered_date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    // console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  let newDate = formatDate();

  return (
    <tr className="snack-row">
      <td>
        <Link to={`/snacks/${snack.id}`}>
          {" "}
          <div className="snack-label">
            <strong>Name:</strong> {snack.name}
          </div>
          <div className="snack-label">
            <strong>Rating:</strong>
            {snack.rating}
          </div>
          <div className="snack-label">
            <strong>Origin:</strong> {snack.origin}
          </div>
          <div className="snack-label">
            <strong>Discovered Date:</strong> {newDate}
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default Snack;
