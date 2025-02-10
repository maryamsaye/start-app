import React from "react";
import "./Man.css";
import  techman from "../assets/techman.svg";



const Man = () => {
    return (
        <div className="man">
            <img src={techman} alt="" className="techman" />
            <p className="mantext">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="mantext2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi cumque quaerat exercitationem, distinctio neque sit dolorum. Eveniet, minus exercitationem?</p>
            <button className="black2">Learn More</button>
    
        </div>
    )
}

export default Man
