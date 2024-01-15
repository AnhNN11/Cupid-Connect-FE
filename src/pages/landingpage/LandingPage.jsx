// import { SearchOutlined } from "@ant-design/icons";
// import "../../assets/css/all.min.css";
// import "../../assets/css/animate.css";
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/dark.css";
// import "../../assets/css/flaticon.css";
// import "../../assets/css/jquery.animatedheadline.css";
// import "../../assets/css/magnific-popup.css";
// import "../../assets/css/main.css";
// import "../../assets/css/nice-select.css";
// import "../../assets/css/odometer.css";
// import "../../assets/css/owl.carousel.min.css";
// import "../../assets/css/owl.theme.default.min.css";
// import "../../assets/css/responsive.css";
// import "../../assets/images/favicon.png";

import aimg1 from "../../assets/images/banner/aimg1.png";
import aimg2 from "../../assets/images/banner/aimg2.png";
import icon01 from "../../assets/images/feature/icon01.png";
import icon02 from "../../assets/images/feature/icon02.png";
import icon03 from "../../assets/images/feature/icon03.png";
import icon04 from "../../assets/images/feature/icon04.png";
import circle from "../../assets/images/flirting/circle.png";
import illutration from "../../assets/images/flirting/illutration.png";
import circleShape from "../../assets/images/h-it-w/circle-shape.png";
import bird from "../../assets/images/h-it-w/bird.png";
import icon1 from "../../assets/images/h-it-w/icon1.png";
import icon2 from "../../assets/images/h-it-w/icon2.png";
import icon3 from "../../assets/images/h-it-w/icon3.png";
import stat01 from "../../assets/images/statistics/stat01.png";
import stat02 from "../../assets/images/statistics/stat02.png";
import stat03 from "../../assets/images/statistics/stat03.png";
import heartshape from "../../assets/images/join/heartshape.png";
import img from "../../assets/images/join/img.png";
import i1 from "../../assets/images/feature/i1.png";
import i2 from "../../assets/images/feature/i2.png";
import i3 from "../../assets/images/feature/i3.png";
import i4 from "../../assets/images/feature/i4.png";
import shape from "../../assets/images/registered/shape.png";
import p1 from "../../assets/images/registered/p1.png";
import p2 from "../../assets/images/registered/p2.png";
import p3 from "../../assets/images/registered/p3.png";
import p4 from "../../assets/images/registered/p4.png";
import p5 from "../../assets/images/registered/p5.png";
import img1 from "../../assets/images/success/img1.jpg";
import img2 from "../../assets/images/success/img2.png";
import img3 from "../../assets/images/success/img3.png";
import successP1 from "../../assets/images/success/p1.png";
import successP2 from "../../assets/images/success/p2.png";
import successP3 from "../../assets/images/success/p3.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { useEffect } from "react";

// const useScript = (url) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = url;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [url]);
// };

export const Landingpage = () => {
  // useScript("../../assets/js/bootstrap.min.js");
  // useScript(".../../assets/js/countdown.min.js");
  // useScript(".../../assets/js/heandline.js");
  // useScript(".../../assets/js/isotope.pkgd.min.js");
  // useScript(".../../assets/js/jquery-3.3.1.min.js");
  // useScript(".../../assets/js/magnific-popup.min.js");
  // useScript(".../../assets/js/main.js");
  // useScript(".../../assets/js/modernizr-3.6.0.min.js");
  // useScript(".../../assets/js/nice-select.js");
  // useScript(".../../assets/js/odometer.min.js");
  // useScript(".../../assets/js/owl.carousel.min.js");
  // useScript(".../../assets/js/plugins.js");
  // useScript(".../../assets/js/viewport.jquery.js");
  // useScript(".../../assets/js/wow.min.js");
  return (
    <>
      {/*========== Preloader ==========*/}
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/*========== Preloader ==========*/}

      {/*========== Overlay ==========*/}
      <div className="overlay"></div>
      <a href="#" className="scrollToTop">
        <i className="fas fa-angle-up"></i>
      </a>
      {/*========== Overlay ==========*/}

      {/*========== Header-Section ==========*/}
      <Header />
      {/*========== Header-Section ==========*/}

      {/* ==========Banner-Section========== */}
      <section className="banner-section">
        <img className="img1 wow fadeInLeft" src={aimg1} alt="" />
        <img className="img2 wow fadeInRight" src={aimg2} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <h1 className="main-title wow fadeInLeft">Find Love Your Life</h1>
              <div className="join-now-box wow fadeInUp">
                <div className="single-option">
                  <p className="title">I am a :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <input type="radio" name="gender" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="single-option gender">
                  <p className="title">Seeking a :</p>
                  <div className="option">
                    <div className="s-input mr-4">
                      <input type="radio" name="seeking" id="males" />
                      <label htmlFor="males">Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="seeking" id="females" />
                      <label htmlFor="females">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="single-option age">
                  <p className="title">Ages :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <select className="select-bar">
                        <option value="">18</option>
                        <option value="">20</option>
                        <option value="">24</option>
                      </select>
                    </div>
                    <div className="separator">-</div>
                    <div className="s-input ml-3">
                      <select className="select-bar">
                        <option value="">30</option>
                        <option value="">35</option>
                        <option value="">40</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="single-option last">
                  <p className="title">Country :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <select className="select-bar">
                        <option>Select Country</option>
                        <option value="">VietNam</option>
                        <option value="">USA</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="joun-button">
                  <button className="custom-button">Join Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}

      {/* ==========Feature-Section========== */}
      <section className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icon">
                  <img src={icon01} alt="" />
                </div>
                <h4>100% Verifide</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon">
                  <img src={icon02} alt="" />
                </div>
                <h4>Most Secure</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <img src={icon03} alt="" />
                </div>
                <h4>100% Privacy</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon">
                  <img src={icon04} alt="" />
                </div>
                <h4>Smart Matching</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Feature-Section========== */}

      {/* ==========Start-Flirting-Section========== */}
      <section className="flirting-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Meet New People Today!
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Start Flirting
                  </h2>
                  <p>
                    In our modern day and age dating apps have become an
                    integral part of our lives. They allow you to check the
                    profile of singles living near you, to chat with them, to
                    meet them and maybe to fall in love.
                  </p>
                  <br />
                  <p>
                    If you’re searching for a simple dating app with free
                    features allowing to meet singles, you’re in good hands with
                    Pairko. With Pairko you get all you need from a mobile
                    dating app, which presents you thousands of users through
                    your smartphone in a very pleasant experience.
                  </p>
                </div>

                <a href="#" className="custom-button">
                  Seek Your Partner
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img">
                <img className="bg-shape" src={circle} alt="" />
                <img src={illutration} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Start-Flirting-Section========== */}

      {/* ==========How it work Section========== */}
      <section className="how-it-work-section">
        <img className="shape1" src={circleShape} alt="" />
        <img className="shape2" src={bird} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Meet New People Today!
                  </h6>
                  <h2 className="title wow fadeInUp">How Does It Work?</h2>
                  <p className="text wow fadeInUp">
                    You’re just 3 steps away from a great date
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icon">
                  <img src={icon1} alt="" />
                  <div className="number">01</div>
                </div>
                <h4 className="title">Tell us who you are!</h4>
                <a href="#" className="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon">
                  <img src={icon2} alt="" />
                  <div className="number">02</div>
                </div>
                <h4 className="title">Find the right person</h4>
                <a href="#" className="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-box wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <img src={icon3} alt="" />
                  <div className="number">03</div>
                </div>
                <h4 className="title">Start Dating</h4>
                <a href="#" className="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========How it work Section========== */}

      {/* ==========Statistics-Section========== */}
      <section className="statistics-section">
        <div className="container">
          <div className="statistics-wrapper">
            <div className="row mb--20">
              <div className="col-md-4 col-sm-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.1s">
                  <div className="icon">
                    <img src={stat01} alt="" />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span
                        className=" odometer"
                        data-odometer-final="350"
                      ></span>
                      M
                    </h3>
                    <span className="info">Tickets Booked</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <img src={stat02} alt="" />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span
                        className=" odometer"
                        data-odometer-final="447"
                      ></span>
                      M
                    </h3>
                    <span className="info">Usefull Sessions</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="icon">
                    <img src={stat03} alt="" />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span
                        className=" odometer"
                        data-odometer-final="60"
                      ></span>
                      M
                    </h3>
                    <span className="info">Talented Speakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Statistics-Section========== */}

      {/* ==========Join-now-Section========== */}
      <section className="join-now-section">
        <img className="shape1" src={heartshape} alt="" />
        <img className="shape2" src={img} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header white-color">
                  <h2 className="title wow fadeInUp">
                    Best Ways to Find Your True Sole Mate
                  </h2>
                </div>

                <a href="#" className="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Join-now-Section========== */}

      {/* ==========Features-Section========== */}
      <section className="feature-section extra-feature">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title wow fadeInUp">
                    An Exhaustive List Of
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Amazing Features
                  </h2>
                  <p className="text">
                    To find meaningful connections, dates, and life partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-area">
          <div className="left-image">
            <div className="offer">
              <div className="offer-inner-content">
                <span className="fs">START NOW FOR</span>
                <h2>FREE</h2>
                <span className="ss">7 DAY TRIAL</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="feature-lists">
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon">
                      <img src={i1} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Simple to use</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <img src={i2} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Smart Matching</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <img src={i3} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Filter very fast</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <img src={i4} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Cool community</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Features-Section========== */}

      {/* ==========Latest-Registered-Section========== */}
      <section className="latest-registered-section">
        <img className="shape" src={shape} alt="" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Latest Registered
                  </h6>
                  <h2 className="title wow fadeInUp">Members</h2>
                  <p className="text">
                    if you have been looking for the someone special of your
                    life for long, then your search ends here
                  </p>
                </div>
                <a href="#" className="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="registered-slider owl-carousel">
                <div className="single-slider">
                  <div className="img">
                    <img src={p1} alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src={p2} alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src={p3} alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src={p4} alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src={p5} alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src={p1} alt="" />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Latest-Registered-Section========== */}

      {/* ==========Success-Stories-Section========== */}
      <section className="sucess-stories-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title wow fadeInUp">Love in faith</h6>
                  <h2 className="title wow fadeInUp">Success Stories</h2>
                  <p className="text wow fadeInUp">
                    Aliquam a neque tortor. Donec iaculis auctor turpis.
                    Eporttitor mattis ullamcorper urna. Cras quis elementum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="img">
                  <img src={img1} alt="" />
                </div>
                <div className="content">
                  <div className="author">
                    <img src={successP1} alt="" />
                    <span></span>
                  </div>
                  <h4 className="title">
                    Love horoscope for Cancer There will be...
                  </h4>
                  <p className="date">December 10, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img">
                  <img src={img2} alt="" />
                </div>
                <div className="content">
                  <div className="author">
                    <img src={successP2} alt="" />
                    <span></span>
                  </div>
                  <h4 className="title">
                    ‘love at first sight’ is all about initial attraction...
                  </h4>
                  <p className="date">December 11, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="img">
                  <img src={img3} alt="" />
                </div>
                <div className="content">
                  <div className="author">
                    <img src={successP3} alt="" />
                    <span></span>
                  </div>
                  <h4 className="title">
                    What women actually want to feel on their...
                  </h4>
                  <p className="date">December 14, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Success-Stories-Section========== */}

      {/* ==========Newslater-Section========== */}
      <Footer />
      {/* ==========Newslater-Section========== */}
    </>
  );
};
