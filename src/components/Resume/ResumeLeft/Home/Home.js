import React from "react";
import me from "../../../../img/me.png";

import html2pdf from "html2pdf.js";

function HomeRS(props) {
  //  Download A4
  const scaleCV = () => {
    document.body.classList.add("scale-cv");
  };
  const removeScale = () => {
    document.body.classList.remove("scale-cv");
  };

  const areaCV = document.getElementById("area-cv");
  // Html2pdf options
  const opt = {
    margin: 0,
    filename: "HoHuynhDung.pdf",
    image: { type: "jpeg", quality: 0.98 },
    // pagebreak: { mode: "avoid-all" },
    html2canvas: { scale: 4 }, 
    jsPDF: { format: "a4", orientation: "l" }
  };
  const generateResume = () => {
    html2pdf(areaCV, opt);
  };
  const clickGene = () => {
    scaleCV();
    generateResume();
    setTimeout(removeScale, 3000);
  };

  const selectTheme = () => {
    // Const
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";

    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }
    // Active
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  return (
    <section className="homeRS" id="home">
      <div className="homeRS__container sectionRS bd-gridRS">
        <div className="homeRS__data bd-gridRS">
          <img src={me} alt="avt" className="homeRS__img" />
          <h1 className="homeRS__title text-h1">HỒ HUỲNH DŨNG</h1>
          <h3 className="homeRS__profession text-h3">Front End Developer</h3>
          <div>
            <a download href="/#" className="homeRS__button-movil">
              Download
            </a>
          </div>
        </div>
        <div className="homeRS__address bd-gridRS">
          <span className="homeRS__infomartion">
            <i className="bx bx-map homeRS__icon" /> District 7, HCMC
          </span>
          <span className="homeRS__infomartion">
            <i className="bx bx-envelope homeRS__icon" /> hohuynhdung@gmail.com
          </span>
          <span className="homeRS__infomartion">
            <i className="bx bx-phone homeRS__icon" /> 0889 310 211
          </span>
        </div>
      </div>
      {/* Theme change button */}
      <i
        className="bx bx-moon change-theme"
        onClick={selectTheme}
        title="Theme"
        id="theme-button"
      />
      {/* Button Download */}
      <i
        onClick={clickGene}
        className="bx bx-download generate-pdf"
        title="Generate PDF"
        id="resume-button"
      />
    </section>
  );
}

export default HomeRS;
