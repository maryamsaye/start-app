import React from "react";
import "./Talents.css";
import  ceo from "../assets/ceo.svg";
import  cto from "../assets/cto.svg";
import  designer from "../assets/designer.svg";
import  developer from "../assets/developer.svg";


const Talents = () => {
return (
        <div className="company">
            <div className="teamate">
                <h1 className="team">TEAM</h1>
                <h2 className="talents">OUR TALENTS</h2>
                <p className="our">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="frame">
                <img src={ceo} alt="" className="ceo" />
                <h1 className="name">Peg Legge</h1>
                <h2 className="position">CEO</h2>
            </div>
            <div className="frame">
                <img src={cto} alt="" className="ceo" />
                <h1 className="name">Richard Guerra</h1>
                <h2 className="position">CTO</h2>
            </div>
            <div className="frame">
                <img src={designer} alt="" className="ceo" />
                <h1 className="name">Alexandra Stolz</h1>
                <h2 className="position">DESIGNER</h2>
            </div>
            <div className="frame">
                <img src={developer} alt="" className="ceo" />
                <h1 className="name">Janet Bray</h1>
                <h2 className="position">DEVELOPER</h2>
            </div>
            <button className="blacky">Learn more</button>
    
        </div>
        )
}

export default Talents;


