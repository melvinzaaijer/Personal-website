import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Sander van Dongen",
      position: "Group Director of Omnichannel & eCommerce Products, Platforms & Delivery | Customer Experience at GrandVision",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "Enorm bedankt voor de fijne samenwerking de afgelopen jaren. Mede dankzij jou hebben we enorm veel stappen kunnen maken als team, als platform en als GrandVision",
      rating: 5,
    },
    {
      name: "Ronald Kicken",
      position: "Director Growth & Product Innovation at Accenture Song",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "It was an even greater pleasure to have you on our team throughout this tremendous journey. I’ve seen you grow in your career and as a person, and I want to emphasize that the great spirit of the team is largely a result of your good spirit and enthusiasm. Thank you on behalf of the whole account for the past years!",
      rating: 5,
    },
    {
      name: "YounKyung Lim",
      position: "E-commerce Program Management Office at Samsung",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "Thank you for your great contribution to this project and hope to work with you again ^^. When you come to Korea, let me know. Lets us eat a Best Korean barbecue!",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
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
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
