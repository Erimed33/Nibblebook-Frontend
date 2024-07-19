import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = import.meta.env.VITE_API_URL;
// console.log(API)

function Snacks() {
  const [snacks, setsnacks] = useState([]);

  useEffect(() => {
    fetch(`${API}/snacks`)
    .then(res => res.json())
    .then(res =>  {
      console.log(res)
      setsnacks(res)
    }
      
    )
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="Snacks">
      <section>
        <table>
          <thead>
            <tr>
                <th>Snacks Index Page</th>
                <th>Is it Vegetarian?</th>
                <th>See this Snack</th>
                <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack, id) => {
              return <Snack key={snack.id} snack={snack} index={id} />;
            })}
          </tbody>
          
        </table>
      </section>
    </div>
  );
}

export default Snacks;
    
