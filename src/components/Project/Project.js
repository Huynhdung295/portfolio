import React from "react";
import "./Project.css";

function Project(props) {

  const CallNoti = () => {
    if(props.status === "noti"){
      alert("Updating...")
    }
  }
  return (
    <section className="project bd-container">
      <div className="project__container">
        <div className="project__card">
          <h1 className="project__title">{props.title}</h1>
          <img className="project__img" src={props.imgPrj} alt={props.title} />
          <p className="project__description">{props.description}</p>
          <p className="project__techUse">{props.techUse}</p>
          <a
            href={props.linkPrj}
            onClick={CallNoti}
            target={props.newTab}
            className="project__button"
          >
            Go to project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
