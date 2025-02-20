import React from "react";
import Welcome from "./Welcome.jsx";
import Partners from "./Partners.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Ladies from "./Ladies.jsx";
import Man from "./Man.jsx";
import Talents from "./Talents.jsx";
import Footer from "./Footer.jsx";



const Home = () => {
return (
    <div>
        <Navbar />
        <Welcome />
        <Partners />
        <Ladies />
        <Man />
        <Talents />
        <Footer />
    
    </div>
    )
}

export default Home;
