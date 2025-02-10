import React from 'react';
import './portfolio.css';
import landingpage from "../assets/landingpage.svg";
import webdesign from "../assets/webdesign.svg";
import rocket from "../assets/rocket.svg";
import shopping from "../assets/shopping.svg";
import geometric from "../assets/geometric.svg";
import tricks from "../assets/tricks.svg";
import halloween from "../assets/halloween.svg";
import virtual from "../assets/virtual.png";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Home/Footer';

const Works = () => {
  return (
    <>
      <Navbar /> 
      <section className='work-container'>
        <div className='work'>
          <h1 className='head'>WORKS</h1>
          <h2 className='body'>PORTFOLIO</h2>
          <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className='photos'>
            <img src={landingpage} alt="Landing Page" className="img" />
            <img src={webdesign} alt="Web Design" className="img" />
            <img src={rocket} alt="Rocket" className="img" />
            <img src={shopping} alt="Shopping" className="img" />
            <img src={geometric} alt="Geometric" className="img" />
            <img src={tricks} alt="Tricks" className="img" />
            <img src={halloween} alt="Halloween" className="img" />
            <img src={virtual} alt="Virtual" className="img" />
          </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
}

export default Works;
