import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import React from 'react'
import Home from "../components/Home/Home";

import "./FullPage.css"

function FullPage() {
    return (
        <ReactFullpage
        scrollOverflow={true}
        anchors={["home","about","portfolio","contact"]}
        sectionsColor={["","", "",""]}
        navigation
        // navigationTooltips={["1","2","3","Hee"]}
        render={({ state, fullpageApi }) => {
          return (  
            <div id="fullpage-wrapper">
              <div className="section sec-home"> 
              <Home/>
              </div>
              <div className="section">
                About
              </div>
              <div className="section">
                <div className="slide">
                  Project 1
                </div>
                <div className="slide">
                  Project 2
                </div>
                <div className="slide">
                  Project 3
                </div>
              </div>
              <div className="section">
                Contact
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
        />
    )
}

export default FullPage
