import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react'; 
import logo from "../assets/vider.png";
import logo1 from "../assets/google.png";
import slideImg1 from "../assets/chats.png"; 
import slideImg2 from "../assets/mic.png";
import slideImg3 from "../assets/security.png";
import "../styles/Login.css";

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { id: 1, image: slideImg1, text: "This is a sample text.  This is a sample text. This is a sample text." },
    { id: 2, image: slideImg2, text: "This is a sample text." },
    { id: 3, image: slideImg3, text: "This is a sample text." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="login-page-wrapper">
      <div className="main-auth-card">
        
        <div className="login-left">
          <div className="form-box">
            <img src={logo} alt="Logo" className="logo-icon" />
            <h2>Sign In</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
              <div className="input-group">
                <User className="field-icon" size={18} />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-group">
                <Lock className="field-icon" size={18} />
                <input type="password" placeholder="Password" required />
              </div>
              <button type="submit" className="btn-login">Login</button>
              <div className="forgot-container">
                 <a href="/" className="forgot-pass">Forgot Password?</a>
              </div>
            </form>
            
            <div className="divider">or</div>
            
            <button className="btn-google" type="button">
              <img src={logo1} alt="G" className="google-svg" />
              Login with google
            </button>
          </div>
        </div>

       
        <div className="login-right">
          <div className="slider-card">
            <img src={slides[currentSlide].image} alt="Slide" className="carousel-main-image" />
            <p className="slider-text">{slides[currentSlide].text}</p>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <div 
                  key={index} 
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;