import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import React from "react";
import Home from "../components/Home/Home";
import About from "../components/About/About";

import "./FullPage.css";
import Project from "../components/Project/Project";

import listProject from "../data/DataProject";
import Contact from "../components/Contact/Contact";

function FullPage() {
  const showProject = listProject.map((list) => {
    return (
      <div className="slide">
        <Project
          key={list.id}
          title={list.title}
          description={list.description}
        />
      </div>
    );
  });
  return (
    <ReactFullpage
      scrollOverflow={true}
      anchors={["home", "about", "portfolio", "contact"]}
      sectionsColor={["", "", "", ""]}
      navigation
      // navigationTooltips={["1","2","3","Hee"]}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div key={1} className="section sec-home">
              <Home />
            </div>
            <div key={2} className="section sec-about">
              <About />
            </div>
            <div key={3} className="section sec-project">
              {showProject}
            </div>
            <div key={4} className="section sec-contact">
              <Contact />
            </div>
            {/* <div key={4} className="section">
              Contact
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
            </div> */}
          </div>
        );
      }}
    />
  );
}

export default FullPage;
