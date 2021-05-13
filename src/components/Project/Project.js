import React from "react";
import "./Project.css";


function Project(props) {
 
  return (
    <section className="project bd-container">
      <div className="project__container">
        <div className="project__card">
          <h1 className="project__title">{props.title}</h1>
          <p className="project__description">
         {props.description}
          </p>
          <a href="#" className="project__button">
            Go to project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;