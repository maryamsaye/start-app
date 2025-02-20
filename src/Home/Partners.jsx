import React from "react";
import "./partners.css"; 


import google from "../assets/google.svg";
import microsoft from "../assets/microsoft.svg";
import airbnb from "../assets/airbnb.svg";
import facebook from "../assets/facebook.svg";
import spotify from "../assets/spotify.svg";

const Partners = () => {
  return (
    <section>
      <div className="part">
        <h1 className="party">PARTNERS</h1>
        <h2 className="title1">Lorem ipsum dolor</h2>
        <p className="title2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    <div className="icons">
      <img src={google} alt="Google" className="Goggle" />
      <img src={microsoft} alt="Microsoft" className="Microsoft" />
      <img src={airbnb} alt="Airbnb" className="Airbnb" />
      <img src={facebook} alt="Facebook" className="Facebook" />
      <img src={spotify} alt="Spotify" className="Spotify" />
    </div>
    <button className="black">Learn More</button>
    </section>
  );
};

export default Partners;
