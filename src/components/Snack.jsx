import { Link } from "react-router-dom";

import React from 'react';
import Snacks from "./Snacks";

const Snack = () => {
    return (
        <tr>
           <td><Link to={`/snacks/${index}`}> {Snack.name}</Link></td> 
        </tr>
    );
};

export default Snack;