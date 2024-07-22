import { useState, useEffect } from "react";
import Snack from "./Snack";
import '../styles/snackstyles.css'


const API = import.meta.env.VITE_API_URL;
// console.log(API)

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    fetch(`${API}/snacks`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSnacks(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="snacks-container">
      <section className="snacks-section">
        <table className="snacks-table">
          <thead>
            <tr>
              <th>Snacks Index Page</th>
    
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack, index) => {
              console.log("this is snack", snack, "this is index", index);
              return <Snack key={snack.id} snack={snack} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;
