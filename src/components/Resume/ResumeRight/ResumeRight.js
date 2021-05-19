import React from "react";
import CertificateRS from "./Certificates/Certificates";
import ExperienceRS from "./Experience/Experience";
import InterestRS from "./Interests/Interests";
import LanguageRS from "./Languages/Languages";
import ReferenceRS from "./References/References";
import "./ResumeRight.css";

function ResumeRight() {
  return (
    <div className="resume__right">
      <ExperienceRS />
      <CertificateRS />
      <ReferenceRS />
      <LanguageRS />
      <InterestRS />
    </div>
  );
}

export default ResumeRight;
