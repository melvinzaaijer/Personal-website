import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    IT: "IT",
    DESIGN: "Design",
    PERSONAL: "Personal",
  };

  const projectsData = [
    {
      title: "MACH platform of the future",
      projectInfo:
        "A global leader in optical retailing required the replacement of the existing commerce platforms with a global headless Commerce and a dynamic CMS solution to rollout 40+ countries and 50+ brands.",
      client: "GrandVision",
      technologies: "MACH Architecture, CommerceTools, Bloomreach, React.Js/Next.Js, Node.Js, Bynder, Algolia, Adyen, Cloudflare, Boomi , DTC, B2C",
      industry: "Retail (Optical)",
      date: "Aug 2018 - Apr 2023",
      url: {
        name: "Pearle.nl (example brand)",
        link: "https://www.pearle.nl/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/grandvisionNV/",
        twitter: "https://twitter.com/GrandVision",
        instagram: "https://www.instagram.com/pearleopticiensnl/",
      },
      thumbImage: "images/projects/project-1.jpg",
      sliderImages: [
        "images/projects/project-1a.png"
      ],
      categories: [filters.IT],
    },
    {
      title: "Global ecommerce omni-channel",
      projectInfo:
        "Transforming online sales worldwide by implementing a leading edge eCommerce platform that allow customers to buy consumer goods through OminiChannel.",
      client: "Samsung",
      technologies: "SAP Hybris, AEM, Samsung Systems",
      industry: "Retail",
      date: "Jan 2017 - Mar 2018",
      url: {
        name: "www.samsung.com",
        link: "https://www.samsung.com/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/SamsungNederland/",
        twitter: "https://twitter.com/SamsungNL/",
        instagram: "https://www.instagram.com/samsungnederland/"
      },
      thumbImage: "images/projects/project-2a.gif",
      sliderImages: [
        "images/projects/project-2.jpg",
        "images/projects/project-2b.png",
        "images/projects/project-2c.png"
      ],
      categories: [filters.IT],
    },
    {
      title: "Personlized television experience",
      projectInfo:
        "Deliver a new video solution platform to realise a personalised television experience on multiple devices, anytime and anywhere independent on the internet provider.",
      client: "KPN",
      technologies: "AVS (Accenture Video Solutions)",
      industry: "Landline and mobile telecommunications",
      date: "Dec 2015 - Jan 2017",
      url: {
        name: "tv.kpn.com",
        link: "hhttps://tv.kpn.com/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/kpn/",
        twitter: "https://twitter.com/KPN",
        instagram: "https://www.instagram.com/kpn/"
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
        "images/projects/project-3a.jpg",
        "images/projects/project-3b.jpg",
      ],
      categories: [filters.IT, filters.DESIGN],
    },
    {
      title: "Philips Intranet",
      projectInfo:
        "Realize a fully integrated and seamless global Intranet experience for the 90K employees as part of the Digital Workspace transition. Effortless content creation and management. Personalised and relevant content. Easy to find content with advanced search; using tag system and predictive search. Increase employee engagement and knowledge sharing",
      client: "Philips",
      technologies: "Sharepoint, Microsoft, Salesforce, Socialcast/Yammer",
      industry: "Healthcare and Ligting",
      date: "Apr 2015 - Nov 2015",
      url: {
        name: "www.philips.com",
        link: "https://www.philips.com/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/PhilipsNederland/",
        twitter: "https://twitter.com/PhilipsNL",
        instagram: "https://www.instagram.com/philipsbenelux/"
      },
      thumbImage: "images/projects/project-4.png",
      sliderImages: [
        "images/projects/project-4a.png",
      ],
      categories: [filters.IT, filters.DESIGN],
    },
    {
      title: "Interactive Catalog - Master Thesis",
      projectInfo:
        "In this project the main goal was to improve customer loyalty and online net sales share. The result of company and customer analysis is this 2017 concept based on smart devices. Usability studies with customers on user experience and user interface have been performed with a clickable prototype. Visualisation is done through wireframes, mock-up and final presentation movie. The graduation project was executed in 2014 looking years ahead when there were still paper catalogues distributed among their customers.",
      client: "Hilti",
      technologies: "Adobe PS, Pr Pro",
      industry: "Construction Industry",
      date: "2014",
      url: {
        name: "www.hilti.com",
        link: "https://www.hilti.com/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/HiltiNederland",
        twitter: "https://twitter.com/Hiltigroup",
        instagram: "https://www.instagram.com/hiltinederland/"
      },
      thumbImage: "images/projects/project-5.png",
      sliderImages: [
        "images/projects/project-5a.jpg",
        "images/projects/project-5b.jpg",
        "images/projects/project-5c.jpg",
      ],
      categories: [filters.DESIGN, filters.PERSONAL],
    },
    {
      title: "Rimore Superyacht Concept",
      projectInfo:
        "This Feadship Future Concept features a the 40-meter high Rimore, the first superyacht concept ever that translates a break-through mindshift into form, function, and design. Rimore imposes a different attitude towards yachting and wealth; an attitude that is trying to move away from vulgar, brash vessels covered in gold, towards a change in state of mind that goes hand in hand with quality and simplicity. We designed a privately owned research yacht that embodies the combination of leisure and (deep) sea exploration, a carefree quest for new life below.",
      client: "Feadship",
      technologies: "SolidWorks, Adobe Photoshop",
      industry: "Superyacht",
      date: "2013",
      url: {
        name: "www.feadship.nl",
        link: "https://www.feadship.nl",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/Feadship/",
        twitter: "https://twitter.com/Feadship",
        instagram: "https://www.instagram.com/feadship/",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-6a.jpg",
        "images/projects/project-6b.jpg",
        "images/projects/project-6c.jpg",
      ],
      categories: [filters.DESIGN, filters.PERSONAL],
    },
    {
      title: "Wacom's Bamboo Paper redesign",
      projectInfo:
        "We were asked by Wacom to carry out a in depth usability study of Bamboo Paper, a note taking app for the iPad. Our research revealed that many of its current users would like a tweaked user interface and a greater focus on note taking. Based on these results we made redesign to improve the user experience. Improving the experience using Bamboo Stylus (a pen for tablets) as an input device was the main objective. The writing area was increased by introducing gestures, which removed the need for navigation bars. The introduction of the smart menu, which follows the tip of the stylus allows for intuitive and quick navigation. Adding functionality like copying, pasting, re-sizing and rotating increased the functionality greatly, making Bamboo Paper a great all round note taking app.",
      client: "Wacom",
      technologies: "usuability studies, conceptualization",
      industry: "Peripheral devices",
      date: "2013",
      url: {
        name: "www.wacom.com",
        link: "https://www.wacom.com/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/Wacom/",
        twitter: "https://twitter.com/wacom",
        instagram: "https://www.instagram.com/wacom/",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-7a.jpg",
        "images/projects/project-7b.jpg",
        "images/projects/project-7c.jpg",
      ],
      categories: [filters.DESIGN, filters.PERSONAL],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                           {/* <span className="text-light">Category</span>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
