// About.js 
import React, { useState, useEffect } from 'react';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html5.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import cypress from '../../assets/cypress.png';
import typescript from '../../assets/typescript.png';
import figma from '../../assets/figma.png';
import eol from '../../assets/eol.jpeg';
import grad from '../../assets/may19.jpg';
import './About.css';

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: eol, title: "The Academy for the Love of Learning", year: "SY. 2017-2018" },
    { image: grad, title: "Nava Elementary Kindergarten Graduation", year: "May 2019"}
  ];

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide + slides.length - 1) % slides.length;
    setCurrentSlide(prevIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-container">
      <div className="slide-container image-slider">
        <div className="arrow prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="arrow next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="dots">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <p className="slide-title">
              <i>{slide.title}</i>, {slide.year}.
            </p>
          </div>
        ))}
      </div>
      <p>
        Hi there! I'm Jocelle, a recent graduate of Turing Software and Design School specializing in Front-End Software Engineering. Currently, I teach Engineering and am continuously eager to learn and grow professionally.
      </p>
      <p>
        Before my tech journey, I spent about 9 years as an art teacher for Pre-K to middle school students. Being elected Teacher Lead allowed me to hone my leadership and communication skills. My experience as a server and sales lead further developed my customer service and teamwork abilities. My passion for creating visually appealing and functional designs inspired my transition into tech.
      </p>
      <p>
        New Mexico, has become a place of profound inspiration for me. The vibrant community, rich with cultural diversity and natural beauty, fuels my creativity in painting, designing, and working out. I am deeply committed to building and contributing to this community, whether through teaching, participating in local events, or advancing my work in technology.
      </p>
      <p>
        As a first-generation Filipino, I bring a diverse background and unique perspective to the tech industry. My journey as an educator has taught me to embrace challenges, whether from students or school environments, and to learn from them. This adaptability has been crucial in thriving in various dynamic environment. I'/m excited to apply my creativity and problem-solving skills to build user-friendly interfaces and make a positive impact through technology.
      </p>
      <p>
        Proficient in HTML, CSS, JavaScript, and React, I am always eager to learn new technologies and tools. With a strong work ethic and a commitment to lifelong learning, I am confident in my ability to excel as a front-end engineer and contribute meaningfully to any team.
      </p>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <img src={javascript} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={html} alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={css} alt="CSS3" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img src={react} alt="React" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={typescript} alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div className="skill">
          <img src={redux} alt="Redux" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={cypress} alt="Cypress" />
          <p>Cypress</p>
        </div>
        <div className="skill">
          <img src={figma} alt="Figma" />
          <p>Figma</p>
        </div>
      </div>
    </div>
)
}

//div for art gallery, etc.