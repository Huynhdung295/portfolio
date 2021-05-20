import React from "react";
import dataInter from "./dataInter";

function InterestRS() {
  const data = dataInter.map((data)=>{
    return(
      <div key={data.name} className="interestsRS__content">
          <i className={data.icon} />
          <span className="interestsRS__name">{data.name}</span>
        </div>
    )
  })
  return (
    <section className="interestsRS sectionRS" id="interests">
      <h2 className="sectionRS-title text-h2">Interests</h2>
      <div className="interestsRS__container bd-gridRS">
        {data}
      </div>
    </section>
  );
}

export default InterestRS;
