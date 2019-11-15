import React from "react";

function NavbarLight() {
  return (
    <div className="bg-top navbar-light">
      <div className="container">
        <div className="row no-gutters d-flex align-items-center align-items-stretch">
          <div className="col-md-4 d-flex align-items-center py-4">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.jpg" className="img-fluid" alt="logo" />
            </a>
          </div>
          <div className="col-lg-8 d-block">
            <div className="row d-flex mt-lg-5">
              <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <div className="text d-flex align-items-center">
                  <span>
                    <a href="mailto:somachandran2026@gmail.com">
                      somachandran2026@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4 mb-5 mb-md-0">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-phone2"></span>
                </div>
                <div className="text d-flex align-items-center">
                  <span>
                    <a href="tel:+919498089981">+91 9498089981</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarLight;
