import React from "react";
import dataSkills from "./dataSkills";
import "./Skills.css";
function SkillRS() {
  const dataLeft = dataSkills.dataSkillsLeft.map((data) => {
    return (
      <li key={data.id} className="skillsRS__name">
        <span className={data.dotSkill} />
        <i className={data.iconSkill}></i>
        {data.nameSkill}
      </li>
    );
  });
  const dataRight = dataSkills.dataSkillsRight.map((data) => {
    return (
      <li key={data.id} className="skillsRS__name">
        <span className={data.dotSkill} />
        <i className={data.iconSkill}></i>
        {data.nameSkill}
      </li>
    );
  });

  return (
    <section className="skillsRS sectionRS" id="skills">
      <h2 className="sectionRS-title text-h2">Skills</h2>
      <div className="skillsRS__content bd-gridRS">
        <ul className="skillsRS__data">{dataLeft}</ul>
        <ul className="skillsRS__data">{dataRight}</ul>
      </div>
    </section>
  );
}

export default SkillRS;
