import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Melvin Zaaijer,</span> an IT Consultant
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              As a Digital Solution Delivery Manager I help clients create end-to-end
              solutions to achieve the best customer experiences, across the entire
              customer journey. Within a multidisiplinary team, I advice on digital
              strategy, design digital experiences and deliver digital commerce,
              content and marketing solutions.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Over the last years, I worked for large companies creating new TV 
              experiences, establishing a state-of-the-art headless CMS and
              commerce platform as well as integrating worldwide eCommerce 
              solutions. With my expertise in Digital experiences and design, I 
              want to contribute to a creative and user-centered approach.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:contact@melvinzaaijer.com">contact@melvinzaaijer.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Phone:</span>
                  <a href="tel:+31630627692">+31 6 30 62 76 92</a>
                </li>
                <li>
                  <span className="fw-600 me-2">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/melvinzaaijer/" target="_blank" rel="noopener noreferrer">melvinzaaijer</a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Language:</span>Dutch and English
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
              <img
                className="img-fluid d-block.center"
                src="images/clients/client-logo1-light.png"
                title="grandVision-logo"
                alt="GrandVisiont"
              />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
              <img
                className="img-fluid d-block.center"
                src="images/clients/client-logo2-light.png"
                title="samsung-logo"
                alt="Samsung"
              />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
              <img
                className="img-fluid d-block.center"
                src="images/clients/client-logo3-light.png"
                title="client-logo"
                alt="client"
              />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
              <img
                className="img-fluid d-block.center"
                src="images/clients/client-logo4-light.png"
                title="client-logo"
                alt="client"
              />
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
