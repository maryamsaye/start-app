import React from "react";
import "./Footer.css";
import  facebkicon from "../assets/facebkicon.svg";
import  insta from "../assets/insta.svg";
import  tweeter from "../assets/tweeter.svg";
import  pchat from "../assets/pchat.svg";
import  ticktok from "../assets/ticktok.svg";
import  watsapp from "../assets/watsapp.svg";
import  youtube from "../assets/youtube.svg";



const Footer = () => {
    return (
        <div className="mediaicons">
                <div className="insta">
                <img src={facebkicon} alt=""  className="insta" />
                <img src={insta} alt=""  className="insta" />
                <img src={tweeter} alt=""  className="insta" />
                <img src={pchat} alt=""  className="insta" />
                <img src={ticktok} alt=""  className="insta" />
                <img src={watsapp} alt=""  className="insta" />
                <img src={youtube} alt=""  className="insta" />
            </div>
            <div className="copy">
                <p className="copyright">© Start, 2022. All rights reserved.</p>
            </div>
    
        </div>
        )
}

export default Footer;
