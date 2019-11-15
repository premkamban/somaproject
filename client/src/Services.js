import React from "react";

function Service() {
  return (
    <section className="ftco-services ftco-no-pt" id="services">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-10 offset-md-2 text-center heading-section ftco-animate">
            <h2 className="mb-4">Our Dedicated Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3  services align-self-stretch p-4 ftco-animate">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <img
                  src="images/blueprint.png"
                  className="img-fluid"
                  alt="blueprint"
                />
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Construction</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3  services align-self-stretch p-4 ftco-animate">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <img
                  src="images/paint-bucket.png"
                  className="img-fluid"
                  alt="paint"
                />
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">House Renovation</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3  services align-self-stretch p-4 ftco-animate">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <img src="images/couch.png" className="img-fluid" alt="couch" />
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Interior Design</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3  services align-self-stretch p-4 ftco-animate">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <img
                  src="images/bricks.png"
                  className="img-fluid"
                  alt="bricks"
                />
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Brick Supply</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
