import React from 'react';
import hophead from '../../assets/projects/hophead.png';
import levies from '../../assets/projects/levies.png';
import potatoes from '../../assets/projects/putrescent.png';
import grants from '../../assets/projects/grant.png';
import leak from '../../assets/projects/leak.png'
import deploy from '../../assets/deploy.png';
import repo from '../../assets/repo.png'
import './Projects.css'

export const Projects = () => {
  const projects = [
    {title: "Putrescent Potato",
    description: "A web application that allows movie lovers to read specific movie details. Users can filter through movies by entering a movie title in the search bar.",
    src: potatoes,
    time: "40 hours",
    techs: [
      "React",
      "Cypress",
      "CSS",
      "HTML"],
    type: "Collaborative",
    deploy: "https://putrescent-potato.vercel.app/",
    repo: "https://github.com/baut-jc/putrescent-potato"},
    {title: "L'EVies", 
    description: "This is a web application designed for EV drivers. It can locate charging stations by their charging type and zip code. Users can select and save specific stations or add them to their itinerary tab for future reference.",
    src: levies,
    time: "40 hours",
    techs: [
      "React",
      "Cypress",
      "Sass CSS",
      "HTML",
      "TypeScript",
      "Restful APIs"
    ],
    type: "Collaborative",
    deploy: "https://baut-jc.github.io/levies/",
    repo: "https://github.com/baut-jc/levies"},
    {title: "HopHead", 
    description: "This is an application for brewery-hoppers who want to locate nearby breweries and view detailed information about them. Users can save their favorite breweries for future reference.",
    src: hophead,
    time: "45 hours",
    techs: [
      "React",
      "Cypress",
      "CSS",
      "HTML",
      "Restful APIs"
    ],
    type: "Independent",
    deploy: "https://hop-head.vercel.app/",
    repo: "https://github.com/baut-jc/hop-head"},
    {title: "Grant Guru",
    description: "A web application that serves people of all ages in search of grants for higher education.",
    src: grants,
    time: "40 hours",
    techs: [
      "React",
      "Cypress",
      "CSS",
      "HTML",
      "Redux",
      "Typescript",
      "Python",
      "Rails on Ruby",
      "Django"],
    type: "Collaborative",
    deploy: "https://grant-guru-fe.vercel.app/",
    repo: "https://github.com/grant-guru/grant-guru-fe"},
    {title: "The Leak",
    description: "A web application that provides users New York Times' US top stories.",
    src: leak,
    time: "8 hours",
    techs: [
      "Javascript",
      "React",
      "CSS",
      "HTML",
      "Restful APIs"
    ],
    type: "Independent",
    deploy: "",
    repo: "https://github.com/baut-jc/the-leak"},
  ]

  const projectSpecs = projects.map((project, index) => (
    <div
      className='project-summary'
      id={project.id}
      style={{ backgroundImage: `url(${project.src})` }}
      key={index}
    >
      <div className='gradient'>
        <h1>{project.title}</h1>
        <div className='techs'>
          {project.techs.map((tech, index) => (
            <span className='tech' key={index}>{tech}</span>
          ))}
        </div> 
        <img src={deploy} alt={project.deploy}/>
        <img src={repo} alt={project.repo}/>
      </div>
    </div>
  ));

  return (
    <div className='projects'>
      {projectSpecs}
    </div>
  );
};