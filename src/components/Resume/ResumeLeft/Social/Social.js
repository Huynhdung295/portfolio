import React from "react";
import dataSocial from "./dataSocial";

function SocialRS() {
  const data = dataSocial.map((data) => {
    return (
      <a key={data.name} href={data.href} target="_blank" rel="noreferrer" className="socialRS__link">
        <i className={data.icon} /> {data.name}
      </a>
    );
  });
  return (
    <section className="socialRS sectionRS" id="social">
      <h2 className="sectionRS-title text-h2" >Social</h2>

      <div className="socialRS__container bd-gridRS">{data}</div>
    </section>
  );
}

export default SocialRS;
