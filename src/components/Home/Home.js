import React from "react";
import "./Home.css";

import useTyped from "use-typed";

import img3 from "../../img/Home/img3.png";
import img2 from "../../img/Home/img2.png";
import img1 from "../../img/Home/img1.png";
function Home() {
  const InforTyped = React.useRef(null);
  useTyped(InforTyped, {
    strings: [
      "I'm Hồ Huỳnh Dũng",
      "I'm a Front-end Developer",
      "And I love Technology",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

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
      <main className="l-main ">
        {/*===== HOME =====*/}
        <section className="home">
          <div className="home__container bd-grid">
            <div className="home__img">
              <img src={img3} alt="3" data-speed={2} className="move img3" />
              <img src={img2} alt="2" data-speed={-2} className="move img2" />
              <img src={img1} alt="1" data-speed={2} className="move img1" />
            </div>
            <div className="home__data">
              <p className="home__description">
                Hello everyone,
                <br />
                <span className="text-typed" ref={InforTyped} />
              </p>
              <h1 className="home__title">PORTFOLIO</h1>

              <button>
                <a href="#about" className="home__button">
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
