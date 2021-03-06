import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="cart-header">
        <br />
        <h2 className="header-text">Contact us</h2>
      </div>
      <br />

      <div className="row mb-5 justify-content-center text-center">
        <div className="col-7 text-center  mb-5">
          <h2 className="section-title">Contact Details</h2>
          <p className="lead">You can contact our team :</p>
          <p>
            Email Id :{" "}
            <a href="mailto:bluepenassign@gmail.com">bluepenassign@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5">
            <figure>
              <img
                src="https://bluepen.co.in/images/Vinit%20Savla.jpeg"
                alt=""
                className="img-fluid"
              />
            </figure>
            <div className="social">
              <a href="https://www.instagram.com/bhavyawritess/">
                <span className="icon-instagram fa-2x"></span>
              </a>
            </div>
            <h2 className="text-black h1" style={{ TextAlign: "center" }}>
              VINIT
              <br />
              SAVLA
            </h2>
            <span
              className="sub-title d-block mb-1"
              style={{ TextAlign: "center" }}
            >
              FOUNDER
            </span>
            <a href="tel:96193 05482">
              <p style={{ TextAlign: "center" }}>+91 96193 05482</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <figure>
              <img
                src="https://bluepen.co.in/images/Kaushik%20Iyengar.jpeg"
                alt=""
                className="img-fluid"
              />
            </figure>
            <div className="social">
              <a href="https://www.instagram.com/bhavyawritess/">
                <span className="icon-instagram fa-2x"></span>
              </a>
            </div>
            <h2 className="text-black h1" style={{ TextAlign: "center" }}>
              KAUSHIK
              <br />
              IYENGAR
            </h2>
            <span
              className="sub-title d-block mb-1"
              style={{ TextAlign: "center" }}
            >
              CO-FOUNDER
            </span>
            <a href="tel:96193 05482">
              <p style={{ TextAlign: "center" }}>+91 96193 05482</p>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <figure>
              <img
                src="https://bluepen.co.in/images/Bhavya%20Haria.jpeg"
                alt=""
                className="img-fluid"
              />
            </figure>
            <div className="social">
              <a href="https://www.instagram.com/bhavyawritess/">
                <span className="icon-instagram fa-2x"></span>
              </a>
            </div>
            <h2 className="text-black h1" style={{ TextAlign: "center" }}>
              Bhavya
              <br />
              Haria
            </h2>
            <span
              className="sub-title d-block mb-1"
              style={{ TextAlign: "center" }}
            >
              Chief Technology Officer
            </span>
            <a href="tel:96193 05482">
              <p style={{ TextAlign: "center" }}>+91 96193 05482</p>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div data-aos="fade-up" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2989966983964!2d72.93665601421434!3d19.18213875361394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b902021b54e9%3A0x95a4d69a8cf38432!2sRedwoods%20Co-operative%20Housing%20Society%2C%20Vasant%20Garden%20F-Wing!5e0!3m2!1sen!2sin!4v1589221975425!5m2!1sen!2sin"
            width="100%"
            height="450px"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title='map'
          ></iframe>
        </div>
      </div>
      <br />
      <br />

      <div className="form-bg">
        <form
          id="contactform"
          action="https://formspree.io/bluepenassign@gmail.com"
          className="p-5 form-bg"
          method="POST"
        >
          <h2 className="h4 text-black mb-5">Contact Form</h2>

          <div className="row form-group">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="text-black" for="fname">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                className="form-control rounded-0"
                name="fname"
              />
            </div>
            <div className="col-md-6">
              <label className="text-black" for="lname">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                className="form-control rounded-0"
                name="lname"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" for="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control rounded-0"
                name="_replyto"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" for="subject">
                Subject
              </label>
              <input
                type="subject"
                id="subject"
                className="form-control rounded-0"
                name="subject"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" for="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                className="form-control rounded-0"
                placeholder="Leave your message here..."
              ></textarea>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary mr-2 mb-2"
                value="send"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
