import Footer from "../../components/Footer";
import Header from "../../components/Header";

import icon1 from "../../assets/images/membership/icon1.png";
import icon2 from "../../assets/images/membership/icon2.png";
import icon3 from "../../assets/images/membership/icon3.png";
import icon4 from "../../assets/images/membership/icon4.png";
import leftImg from "../../assets/images/membership/left-img.png";
import rightImg from "../../assets/images/membership/right-img.png";
import planBg from "../../assets/images/membership/plan-bg.png";
import heartshape from "../../assets/images/join/heartshape.png";

function Membership() {
  return (
    <>
      {/*========== Header-Section ==========*/}
      <Header />
      {/*========== Header-Section ==========*/}

      {/* ==========Breadcrumb-Section========== */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Membership</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <a href="/home">Home</a>
              </li>

              <li>Membership</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ==========Breadcrumb-Section========== */}

      {/* ==========Membership-Section========== */}
      <section className="membership-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding">
                    Upgrade Your Profile
                  </h6>
                  <h2 className="title">Premium Memeber Plan</h2>
                  <p className="text">
                    Benefit from Peyamba at its maximum you!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-s-top">
            <div className="col-lg-3 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src={icon1} alt="" />
                </div>
                <h4 className="title">Unlimited Messages</h4>
                <p className="text">Send and receive messages with no limits</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src={icon2} alt="" />
                </div>
                <h4 className="title">VIP Badge</h4>
                <p className="text">Send and receive messages with no limits</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src={icon3} alt="" />
                </div>
                <h4 className="title">Unlimited matches</h4>
                <p className="text">Send and receive messages with no limits</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="plan-info">
                <div className="icon">
                  <img src={icon4} alt="" />
                </div>
                <h4 className="title">Take more messages</h4>
                <p className="text">Send and receive messages with no limits</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pricing-plan-wrapper">
                <img className="left-img" src={leftImg} alt="" />
                <img className="right-img" src={rightImg} alt="" />
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="single-plan">
                      <p className="duration">12 Months</p>
                      <h4 className="number">
                        <sup>$</sup>4.99
                      </h4>
                      <p className="stamet">Per Month</p>
                      <a href="/checkout" className="custom-button">
                        Buy Now!
                      </a>
                      <img className="shape" src={planBg} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="single-plan">
                      <p className="duration">6 Months</p>
                      <h4 className="number">
                        <sup>$</sup>3.99
                      </h4>
                      <p className="stamet">Per Month</p>
                      <a href="/checkout" className="custom-button">
                        Buy Now!
                      </a>
                      <img className="shape" src={planBg} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="single-plan">
                      <p className="duration">3 Months</p>
                      <h4 className="number">
                        <sup>$</sup>2.99
                      </h4>
                      <p className="stamet">Per Month</p>
                      <a href="/checkout" className="custom-button">
                        Buy Now!
                      </a>
                      <img className="shape" src={planBg} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="single-plan">
                      <p className="duration">1 Month</p>
                      <h4 className="number">
                        <sup>$</sup>1.99
                      </h4>
                      <p className="stamet">Per Month</p>
                      <a href="/checkout" className="custom-button">
                        Buy Now!
                      </a>
                      <img className="shape" src={planBg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-plans">
          <img className="shape1" src={heartshape} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="contact-link">
                  If you have any questions <a href="#">Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Membership-Section========== */}

      {/* ==========Faq-Section========== */}
      <section className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding">Got any Question</h6>
                  <h2 className="title">We’ve Got Answers</h2>
                  <p className="text">
                    Try to check out frequently ask questions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-area">
            <div className="faq-wrapper">
              <div className="faq-item">
                <div className="faq-title">
                  <h6 className="title">What is Peyamba? </h6>
                  <span className="right-icon"></span>
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to &ldquo;upgrade&rdquo; or change the
                    location of your seats, you can relist your current tickets
                    for sale here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div className="faq-item active open">
                <div className="faq-title">
                  <h6 className="title">What kind of photos can I use? </h6>
                  <span className="right-icon"></span>
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to &ldquo;upgrade&rdquo; or change the
                    location of your seats, you can relist your current tickets
                    for sale here and purchase other tickets of your choice.{" "}
                    {/* (&quot; || &ldquo; || &#34; || &rdquo;) */}
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-title">
                  <h6 className="title">Which are the payment methods?</h6>
                  <span className="right-icon"></span>
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to &ldquo;upgrade&rdquo; or change the
                    location of your seats, you can relist your current tickets
                    for sale here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-title">
                  <h6 className="title">How Our Matchmaking Works ?</h6>
                  <span className="right-icon"></span>
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to &ldquo;upgrade&rdquo; or change the
                    location of your seats, you can relist your current tickets
                    for sale here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-title">
                  <h6 className="title">How can i delete my profile?</h6>
                  <span className="right-icon"></span>
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to &ldquo;upgrade&rdquo; or change the
                    location of your seats, you can relist your current tickets
                    for sale here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Faq-Section========== */}

      {/* ==========Newslater-Section========== */}
      <Footer />
      {/* ==========Newslater-Section========== */}
    </>
  );
}

export default Membership;
