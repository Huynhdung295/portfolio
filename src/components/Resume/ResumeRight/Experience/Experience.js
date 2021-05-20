import React from "react";
import dataExp from "./dataExp";

function ExperienceRS() {
  const data = dataExp.map((data) => {
    return (
    <div key={data.title}>
        <div className="experienceRS__content">
        <div className="experienceRS__time">
          <span className="experienceRS__rounder" />
          <span className={data.line} />
        </div>
        <div className="experienceRS__data bd-gridRS">
          <h3 className="experienceRS__title text-h3">{data.title}</h3>
          <span className="experienceRS__company">{data.link}</span>
          <span className="experienceRS__company">{data.times}</span>
          <p className="experienceRS__description">{data.descripttion}</p>
          <p className="experienceRS__description">{data.usedTech}</p>
          <p className="experienceRS__description">{data.position}</p>
        </div>
      </div>
    </div>
    );
  });
  return (
    <section className="experienceRS sectionRS" id="experience">
      <h2 className="sectionRS-title text-h2">Experience</h2>
      <div className="experienceRS__container bd-gridRS">{data}</div>
    </section>
  );
}

export default ExperienceRS;
