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
        Hi there! My name is Jocelle, and I am a recent graduate of Turing Software and Design School specializing in Front-End Software Engineering. Prior to embarking on my journey in tech, I worked as an art teacher for Pre-K to middle school students for about 9 years. During my time as an educator, I was elected Teacher Lead, which allowed me to hone my leadership and communication skills.
      </p>
      <p>
        Throughout my teaching career, I also worked as a server and sales lead, where I developed excellent customer service and teamwork abilities. As an artist, I have always been passionate about creating visually appealing and functional designs. That's why I decided to transition into tech and pursue a career in front-end engineering.
      </p>
      <p>
        As a first-generation Filipino, I am proud to bring my diverse background and unique perspective to the tech industry. I am excited to use my creativity and problem-solving skills to build intuitive and user-friendly interfaces. I am also passionate about using technology to make a positive impact on society and to bridge the digital divide.
      </p>
      <p>
        Through my bootcamp experience, I have gained proficiency in HTML, CSS, JavaScript, and React. I have also honed my skills in version control with Git and GitHub, and I am always eager to learn new technologies and tools. With my strong work ethic, passion for design, and commitment to lifelong learning, I am confident that I will excel as a front-end engineer and make meaningful contributions to any team.
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

//change text formating with inline images
  //include some artworks
  //create backend for api access to display in this page.
  // --> or create a different link that will access a website...
  // --> could be included in projects page.
// add section for certificates
  //update languages/skills