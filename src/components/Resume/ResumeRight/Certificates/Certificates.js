import React from "react";
import dataCer from "./dataCer";

function CertificateRS() {
  const data = dataCer.map((data) => {
    return (
      <div className="certificateRS__container bd-gridRS">
        <h3 className="certificateRS__title text-h3">{data.title}</h3>
        <p className="certificateRS__description">{data.description}</p>
        <p className="certificateRS__description">{data.des2}</p>
        <p className="certificateRS__description">{data.des3}</p>
      </div>
    );
  });
  return (
    <section className="certificateRS sectionRS" id="certificates">
      <h2 className="sectionRS-title text-h2">certificateRSs</h2>
      {data}
    </section>
  );
}

export default CertificateRS;
