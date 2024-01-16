import Footer from "../../components/Footer";
import Header from "../../components/Header";

import imgRight from "../../assets/images/contact/img-right.png";

function Contact() {
  return (
    <>
      {/*========== Header-Section ==========*/}
      <Header />
      {/*========== Header-Section ==========*/}

      {/* ==========Breadcrumb-Section========== */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Contact</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <a href="/home">Home</a>
              </li>

              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ==========Breadcrumb-Section========== */}

      {/* ==========Contact-Section========== */}
      <section className="contact-section">
        <img className="img-right" src={imgRight} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title">Contact Us</h6>
                  <h2 className="title">Get in Touch</h2>
                  <p className="text">
                    We&#39;d love to hear from you! Let us know how we can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <div className="single-input">
                  <i className="far fa-user"></i>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="single-input">
                  <i className="far fa-envelope"></i>
                  <input type="text" placeholder="Enter Your Email ID" />
                </div>
                <div className="single-input">
                  <i className="far fa-comments"></i>
                  <textarea placeholder="Type Your Text"></textarea>
                </div>
                <a href="#" className="custom-button">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Contact-Sectionn========== */}

      {/* ==========Newslater-Section========== */}
      <Footer />
      {/* ==========Newslater-Section========== */}
    </>
  );
}

export default Contact;
