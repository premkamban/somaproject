import React from "react";

function Footer() {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section mt-5 pt-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2 logo">
                <img src="images/logo.jpg" alt="jd" />
              </h2>
              <p>
                No 5, Muthamizh Nagar, 2nd Street, Poonamallee, Chennai 600 056.
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled" style={{ color: "#fff" }}>
                <li>
                  <span className="ion-ios-arrow-round-forward mr-2"></span>
                  Construction
                </li>
                <li>
                  <span className="ion-ios-arrow-round-forward mr-2"></span>
                  House Renovation
                </li>
                <li>
                  <span className="ion-ios-arrow-round-forward mr-2"></span>
                  Interior Design
                </li>
                <li>
                  <span className="ion-ios-arrow-round-forward mr-2"></span>
                  Brick Supply
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Follow Us</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a
                    href="https://www.facebook.com/DanvanthrikaConstructions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="https://instagram.com/danvanthrika_constructions?igshid=1w85l7t15qfqi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="https://jsdl.in/DT-20QUQ6AAYUA"
                    style={{ background: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/jd.png"
                      style={{ marginTop: "4px" }}
                      alt="jd"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>{document.write(new Date().getFullYear())}</script>{" "}
              Dhanvanthrika Constructions All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
