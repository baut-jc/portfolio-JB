import React from 'react';
import hophead from '../../assets/projects/hophead.png';
import levies from '../../assets/projects/levies.png';
import potatoes from '../../assets/projects/putrescent.png';
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
    deploy: "",
    repo: ""},
    {title: "L'EVies", 
    description: "This is a web application designed for EV drivers. It can locate charging stations by their charging type and zip code. Users can select and save specific stations or add them to their itinerary tab for future reference.",
    src: levies,
    time: "40 hours",
    techs: [
      "React",
      "Cypress",
      "Sass CSS",
      "HTML",
      "TypeScript"
    ],
    type: "Collaborative",
    deploy: "",
    repo: ""},
    {title: "HopHead", 
    description: "This is an application for brewery-hoppers who want to locate nearby breweries and view detailed information about them. Users can save their favorite breweries for future reference.",
    src: hophead,
    time: "45 hours",
    techs: [
      "React",
      "Cypress",
      "CSS",
      "HTML",
    ],
    type: "Independent",
    deploy: "",
    repo: ""},
    {title: "Grant Guru",
    description: "A web application that serves people of all ages in search of grants for higher education.",
    src: potatoes,
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
    deploy: "",
    repo: ""},
  ]
  //create local data containing array of [projects]
    //title
    //image or gif
    //detail
    //time spent
    //summary
    //tech used

  const projectSpecs = projects.map (project => { 
    return ( //hover to show gif --> style maybe
    <div 
      className='project-summary'
      id={project.id}
      style={{backgroundImage: `url(${project.src})`}}>
        <div className='gradient'>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button>DEPLOY</button>
          <button>REPO</button>
        </div>
    </div>
  )
  })

  return (
    <div className='projects'>
      {projectSpecs}
    </div>
  )
}
