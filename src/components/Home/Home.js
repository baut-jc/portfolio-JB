import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.png'
import gitHub from '../../assets/gitHubLogo.png'
import linkedIn from '../../assets/linkedIn.png'
import resume from '../../assets/resume logo.png'
import './Home.css'

export const Home = () => {
  const [developerType, setDeveloperType] = useState("Software Developer");

  useEffect(() => {
    let timeoutId;
    const textArray = ["Software Developer", "Front-End Developer", "Creator", "Designer", "Problem Solver"];
    let index = 0;

    const animateText = () => {
      const currentText = textArray[index];
      const newText = textArray[(index + 1) % textArray.length];
      let letterIndex = 0;
      let deleteIndex = currentText.length - 1;
      let text = currentText;

      const typeLetter = () => {
        text = currentText.substring(0, letterIndex + 1);
        setDeveloperType(text);
        letterIndex++;
        if (letterIndex < currentText.length) {
          timeoutId = setTimeout(typeLetter, 100);
        } else {
          setTimeout(deleteLetter, 1000);
        }
      };

      const deleteLetter = () => {
        text = currentText.substring(0, deleteIndex);
        setDeveloperType(text);
        deleteIndex--;
        if (deleteIndex >= 0) {
          timeoutId = setTimeout(deleteLetter, 100);
        } else {
          index = (index + 1) % textArray.length;
          setTimeout(animateText, 1000);
        }
      };

      typeLetter();
    };

    animateText();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
    <div className="profile-container">
        <a href="https://terminal.turing.edu/alumni/1773-jocelle-bautista" target="_blank"><img className="profile-img" src={profile} alt="Profile"/></a>
      <div className='info'>
        <Link to ="/about">
          <h1>Jocelle Bautista</h1>
        </Link>
        <h3 className={`typing ${developerType === "Software Developer" ? "" : "replace"}`}>{developerType}</h3>
        <nav>
          <a href="https://github.com/baut-jc" target="_blank"><img className="nav-img gitHub" src={gitHub} alt="https://github.com/baut-jc"/></a>
          <a href="https://www.linkedin.com/in/jocelle-bautista/" target="_blank"><img className="nav-img linkedIn" src={linkedIn} alt="https://www.linkedin.com/in/jocelle-bautista/"/></a>
          <a href="https://terminal.turing.edu/alumni/1773-jocelle-bautista" target="_blank"></a><img className="nav-img resume" src={resume} alt="JBautista-RSM"/>
        </nav>
      </div>
    </div>
    </div>
  )
}
