import React from "react";
import "./Contact.css";

import img5 from "../../img/Contact/img5.png";
import img1 from "../../img/Home/img1.png";

function Contact() {
  const noti = () => {
    alert("Updating...");
  };
  /*===== MOUSEMOVE contact IMG =====*/
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
      <main className="l-contact ">
        {/*===== contact =====*/}
        <section className="contact">
          <div className="contact__container bd-grid">
            <div className="contact__img">
              <img
                src={img1}
                alt="5"
                data-speed={-2}
                className="move img1-contact"
              />
              <img src={img5} alt="5" data-speed={2} className="move img5" />
            </div>
            <div className="contact__data">
              <div className="contact__link">
                <div className="contact-ic">
                  <button>
                    <a href="/#" className="contact__button btn-contact">
                      <i className="bx bxs-location-plus contact-icon"></i>
                    </a>
                  </button>
                  <p className="text-contact">District 7, HCMC</p>
                </div>
                <div className="contact-ic">
                  <button>
                    <a href="/#" className="contact__button btn-contact">
                      <i className="bx bxs-phone-call contact-icon"></i>
                    </a>
                  </button>
                  <p className="text-contact">0889 310 211</p>
                </div>
                <div className="contact-ic">
                  <button>
                    <a href="/#" className="contact__button btn-contact">
                      <i className="bx bx-mail-send contact-icon"></i>
                    </a>
                  </button>
                  <p className="text-contact">hohuynhdung@gmail.com</p>
                </div>
                <div className="contact-ic">
                  <button>
                    <a href="/#" className="contact__button btn-contact">
                      <i className="bx bxl-github contact-icon"></i>
                    </a>
                  </button>
                  <p className="text-contact">/Huynhdung295</p>
                </div>
              </div>
              <h1 className="contact__title">CONTACT ME</h1>

              <button onClick={noti}>
                <a href="/#" className="contact__button">
                  Click to contact
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
