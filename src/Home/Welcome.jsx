import React from 'react';
import group1 from "../assets/group1.svg";

import './Welcome.css';


const Welcome = () => {
return (
    <div className='header'>
      <div className="hero">
        <img src={group1} alt="people" className='people'/>
          <div className="text">
            
            <h1  id="h" className='welcome'>WELCOME</h1>
           
            <p id='pe' className='text1'>Lorem ipsum dolor sit amet consectetur.</p>
            <p id='pe' className='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi temporibus id accusantium quos odio.ljkfn jdfjd jkdjkjkhkhsdksd jksdjlksd</p>
          </div>
      </div>
        <div>
        <button  className='explore'>Explore</button>
    
        </div>
    </div>
    
)
}

export default Welcome;