import React from 'react';
import '../Css/herosection.css'; 
import coffecup from '../Images/coffe.png'; 
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate=useNavigate();
  const menu=()=>{
    navigate('/Menu');
  }
  return (
    <div className="heromain">
      <div className="hero-container">
      <div className="hero-content">
        <h1 className='text-5xl h1' data-aos="fade-up">Sip, Savor, Smile</h1><div className="text-hover-effect"><h1 className='text-6xl' data-aos="fade-up" data-aos-delay="200"><span className="highlight">Delicious Moments</span></h1></div> <br></br> 
        
        <h1 className="-mt-2 text-5xl" data-aos="fade-up" data-aos-delay="400">Every Day</h1>
        <p data-aos="fade-up" data-aos-delay="600" data-aos-offset="10">Welcome to La Cuisine Cafe, where every sip and bite is crafted with love.</p>
        

        {/* <div className="hero-buttons">
          <button onClick={menu} className="menu-btn">Menu</button>
          <button className="location-btn"><a href='#location'>Our Location</a></button>
        </div> */}
      </div>
      <div className="hero-image">
        <img src={coffecup} alt="Cup of Coffee" className="coffe-image mt-5"/>
        <div className="coffee-beans"></div> 
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
