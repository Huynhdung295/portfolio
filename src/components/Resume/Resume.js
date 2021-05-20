import React from "react";
import NavbarRS from "./NavbarRS/NavbarRS";
import ResumeLeft from "./ResumeLeft/ResumeLeft";
import ResumeRight from "./ResumeRight/ResumeRight";
import ScrollTopRS from "./ScrollTop/ScrollTopRS";

import "./Resume.css";

function Resume() {
  document.body.classList.add("resumeCV-bg");

  

  return (
    <div>
      <NavbarRS />
      <main className="l-mainRS bd-containerRS">
        <div className="resume" id="area-cv">
          <ResumeLeft />
          <ResumeRight />
        </div>
      </main>
      <ScrollTopRS />
    </div>
  );
}

export default Resume;
