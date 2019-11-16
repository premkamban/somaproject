import React, { Component } from "react";
import axios from "axios";
class About extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      typeofService: "",
      phone: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const form = await axios.post("api/sendmail", {
      name,
      email,
      message
    });
  }
  render() {
    return (
      <section className="ftco-section ftco-no-pt ftco-margin-top" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="request-quote" id="booknow">
                <div className="bg-primary py-4">
                  <span className="subheading">Be Part of our Business</span>
                  <h3>Request A Free Quote</h3>
                </div>
                <form action="#" className="request-form ftco-animate fadeInUp ftco-animated">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down"></span>
                        </div>
                        <select name="" id="" className="form-control">
                          <option value="">Select Your Service</option>
                          <option value="">Construction</option>
                          <option value="">House Renovation</option>
                          <option value="">Interior Design</option>
                          <option value="">Brick Supply</option>
                          <option value="">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="2"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Get Quote"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-8 wrap-about py-5 ftco-animate fadeInUp ftco-animated">
              <div className="heading-section mb-5">
                <h2 className="mb-4">A Few Words About Us</h2>
              </div>
              <div className="">
                <p className="mb-5">
                  Dhanvanthrika is a construction company specializing in
                  general contracting, construction management, design-build,
                  and self-performing interior trades services. Throughout our
                  history, we've succeeded by providing a wide range of
                  construction solutions to our clients and delivering a whole
                  lot of quality work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
