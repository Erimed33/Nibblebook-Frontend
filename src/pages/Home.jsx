import React from 'react';
import '../styles/home.css'
import cazu from "../images/cazu.png"
import centuryegg from  "../images/centuryegg.png"
import friedSpiders from "../images/friedSpiders.png"
import '../styles/home.css'

const Home = () => {
    return (
        <div className="home-container">
           <h1>Welcome to the Home Page</h1> 
           <img src={cazu} alt="Welcome" className="gallery-image" />
           <img src={centuryegg} alt="Welcome" className="gallery-image" />
           <img src={friedSpiders} alt="Welcome" className="gallery-image" />
        </div>
    )
};

export default Home;