import React from "react";

function Slider() {
  return (
    <section className="home-slider owl-carousel">
      <div
        className="slider-item"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <div className="col-md-6 text ftco-animate pl-md-5">
              <h1 className="mb-4" style={{ color: "#000 !important" }}>
                Listen better. Plan better. Build better.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
