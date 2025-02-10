import React from 'react'; 
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home/home.jsx'; 
import Portfolio from "./Portfolio/portfolio.jsx";


const App = () => {
  return (
    <BrowserRouter>
  
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> */}
        
      </Routes>
      </div>
      </BrowserRouter>
      

    
  )
}

export default App;
