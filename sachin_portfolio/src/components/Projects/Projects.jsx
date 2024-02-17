// import React from "react";
import sugerCosmatics from "./projectImages/sugerCosmatics.png";
import figma from "./projectImages/figma.png";
import toursTravel from "./projectImages/toursTravel.png";

import "./Project.css";

const data = [
  {
    img: sugerCosmatics,
    projectTitle: "SugerCosmatics",
    techStack: ["HTML", "CSS", "BOOTSTRAP"],
    description:
      "Sugar Cosmetics is an e-commerce website for premium cosmetics products.The brand's bestselling goods in the Lips, Eyes, Face, Nails & Skin categories are sent all over the world.",
    githubLink:
      "https://github.com/sachinkumanache/dynamic-hub-4321/tree/main/sugercosmatic-bootstrap",
    appLink: "https://sugar-cosmetic-by-dynamic-hub-4321.netlify.app/",
    // backendLink: "https://github.com/1ashutoshverma/wood-fans-backend"
  },
  {
    img: figma,
    projectTitle: "Figma",
    techStack: ["HTML", "CSS", "SASS", "Figma"],
    description:
      "This project offers a collection of professional and customizable web components, including a responsive navbar, footer, carousel, and various body sections. Elevate our web development projects with these versatile components that enhance navigation, presentation, and overall user experience.",
    githubLink:
      "https://github.com/sachinkumanache/dynamic-hub-4321/tree/main/figma-sass",
    appLink: "https://figma-about-by-dynamic-hub-4321.netlify.app/",
    // backendLink: "https://github.com/1ashutoshverma/wood-fans-backend"
  },
  {
    img: toursTravel,
    projectTitle: "Tours & Travel",
    techStack: ["HTML", "CSS", "javascript", "bootstrap"],
    description:
      "This project offers a collection of professional and customizable web components, including a responsive navbar, footer, carousel, and various body sections. Elevate our web development projects with these versatile components that enhance navigation, presentation, and overall user experience.",
    githubLink:
      "https://github.com/sachinkumanache/code-yogi-4567?tab=readme-ov-file",
    appLink: "https://code-yogi.netlify.app/",
    backendLink: "https://github.com/sachinkumanache/mock-API-template",
  },
  
];

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>

      {data.map((e, index) => {
        return index % 2 == 0 ? (
          <div className="project-card proCard1" key={index}>
            <div className="projectImg">
              <img src={e.img} alt="" />
            </div>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind}>{ele}</span>;
                })}
              </div>
              <p className="project-description">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link"
                >
                  View Live App
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-card proCard2" key={index}>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind}>{ele}</span>;
                })}
              </div>
              <p className="project-description">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link"
                >
                  View Live App
                </a>
              </div>
            </div>
            <div className="projectImg">
              <img src={e.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
