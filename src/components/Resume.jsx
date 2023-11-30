import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2010 - 2013",
      title: "Master Degree Design For Interaction",
      place: "Delft University of Technology",
      desc: "Design for Interaction focuses on the design of interactive products, services, and systems. Students learn to apply design thinking and human-centered design principles to create user-centered solutions that are both functional and aesthetically pleasing. The program includes courses on design research, interaction design, prototyping, and user testing.",
    },
    {
      yearRange: "2006 - 2010",
      title: "Bachelor Degree Industrial Design Engineering",
      place: "Delft University of Technology",
      desc: "Industrial Design Engineering focuses on the design and development of products, systems, and services. Students learn to apply design methods, engineering principles, and business insights to create solutions that meet user needs, market demands, and technical requirements. The program includes courses on design thinking, user research, prototyping, product development, and entrepreneurship.",
    },
    {
      yearRange: "2000 - 2006",
      title: "Pre-University (VWO) Degree",
      place: "Wolfert van Borselen (Dalton)",
      desc: "Atheneum, Science and Technology. Electives: Economics 1 & 2",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2023",
      title: "Project Manager",
      place: "dsm-firmenich",
      desc: "A merger of two brands requires a CMS strategy to be combined and migrated in target architecture. I was responsible for overall project management by steering project (and client) teams towards sign-off, for which we determine a content migration approach based on assessment framework, migration plan & roadmap",
    },
    {
      yearRange: "2021-2023",
      title: "Delivery Lead (Project Manager)",
      place: "GrandVision",
      desc: "Responsible for managing the delivery of complex technology projects for clients. I led multiple project teams and ensure that the project is completed on time, within budget, and to the client's satisfaction. This includes working closely with the stakeholders to understand their needs and provide regular updates on project status.",
    },
    {
      yearRange: "2018 - 2021",
      title: "Product Owner and Scrum Master",
      place: "GrandVision",
      desc: "As a PO I was responsible for defining and prioritizing the product backlog, ensuring that the team is building the right product for the customer within the My Account domain. In my Scrum Master role, I was ensuring that 2 scrum teams are following the Agile principles, fostering self-organization, continuously improving and removing any obstacles that may hinder their progress in a large program with 7 scrum teams.",
    },
    {
      yearRange: "2017 - 2018",
      title: "Lead Business Analyst",
      place: "Samsung",
      desc: "Provide strategic direction, mentorship, and guidance to a team of business analysts, ensuring effective requirements analysis, stakeholder management, and successful project delivery.",
    },
  ];

  const skills = [
    {
      name: "Project Scoping, Planning and Mapping",
      percent: 85,
    },
    {
      name: "Agile / Scrum (Including SAFe)",
      percent: 95,
    },
    {
      name: "Stakeholder Management",
      percent: 90,
    },
    {
      name: "Crytical Thinking and Problem Solving",
      percent: 85,
    },
    {
      name: "Customer Experience",
      percent: 90,
    },
    {
      name: "MACH, Hybrid and Monolithic Architectures",
      percent: 70,
    },
    {
      name: "Collaboration",
      percent: 100,
    },
    {
      name: "Communication",
      percent: 95,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
