import React from "react";
import img4 from "../../img/About/img4.png";
import img1 from "../../img/Home/img1.png";

import pdf from "../Download/hohuynhdung-cv.pdf"

import "./About.css";
function About() {
  

  /*===== MOUSEMOVE HOME IMG =====*/
  document.addEventListener("mousemove", move);
  function move(e) {
    this.querySelectorAll(".move").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 120;
      const y = (window.innerHeight - e.pageY * speed) / 120;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  return (
    <div>
      <main className="l-about ">
        {/*===== about =====*/}
        <section className="about">
          <div className="about__container bd-grid">
            <div className="about">
              <img
                src={img1}
                alt="1"
                data-speed={-2}
                className="move img1-about"
              />
              <img src={img4} alt="1" data-speed={2} className="move img4" />
            </div>
            <div className="about__data">
              <p className="about__description">
                - I’m a Front-end developer with nearly a year of self-study
                <br /> experience in building web application (ReactJS).
                <br />- I love learning new technologies and building valuable
                <br /> application that helps others with their work.
                <br />- Book reading, Technology is my hobby.
              </p>
              <h1 className="about__title">ABOUT ME</h1>
              <button>
                <a href="/resume" target="_blank" className="about__button btn-1-about">
                  Resume
                </a>
              </button>
              <button >
                <a href={pdf} download="hohuynhdung"className="about__button btn-2-about">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
