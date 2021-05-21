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
      <div key={list.id} className="slide">
        <Project
          
          title={list.title}
          description={list.description}
          techUse = {list.techUse}
          imgPrj = {list.imgPrj}
          linkPrj = {list.linkPrj}
          newTab = {list.newTab}
          status = {list.status}
        />
      </div>
    );
  });
  return (
    <ReactFullpage
    
    licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}

      scrollOverflow={true}
      anchors={["home", "about", "portfolio", "contact"]}
      // sectionsColor={["", "", "", ""]}
      navigation
      delay={1000}
      sectionPaddingTop ={0}
      sectionPaddingBottom = {0}
      verticalAlign ={false}
      arrowNavigation = {true}
      scrollBar = {false}
      scrollingSpeed = {600}
      // lazyLoading
      // v2compatible={true}

      // navigationTooltips={["1","2","3","4"]}
      render={({ state, fullpageApi }) => {
        return (
          <div key={null} id="fullpage-wrapper">
            <div className="section sec-home">
              <Home />
            </div>
            <div className="section sec-about">
              <About />
            </div>
            <div  className="section sec-project">
              {showProject}
            </div>
            <div  className="section sec-contact">
              <Contact />
            </div>
            {/* <div className="section">
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
