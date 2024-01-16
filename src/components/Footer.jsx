import fShape from "../assets/images/footer/f-shape.png";
import flower01 from "../assets/images/footer/flower01.png";
import nIcon from "../assets/images/footer/n-icon.png";
import rightShape from "../assets/images/footer/right-shape.png";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <img className="shape1" src={fShape} alt="" />
        <img className="shape2" src={flower01} alt="" />
        <img className="shape3" src={rightShape} alt="" />
        <div className="newslater-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="newslater-container">
                  <div className="newslater-wrapper">
                    <div className="icon">
                      <img src={nIcon} alt="" />
                    </div>
                    <p className="text">
                      Sign up to recieve a monthly email on the latest news!
                    </p>
                    <form className="newslater-form">
                      <input type="text" placeholder="Your Email Address" />
                      <button type="submit">
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            <div className="row">
              <div className="col-lg-12">
                <hr className="hr" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper one">
                  <h4 className="f-l-title">Our Information</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> About Us
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us">
                        <i className="fas fa-angle-double-right"></i> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Customer
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper two">
                  <h4 className="f-l-title">My Account</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Manage
                        Account
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Safety
                        Tips
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Safety &
                        Security
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Membership
                        Level
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper three">
                  <h4 className="f-l-title">help center</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Help
                        centre
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper four">
                  <h4 className="f-l-title">legal</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Privacy
                        policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> End User
                        Agreements
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Refund
                        Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Cookie
                        policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i> Report
                        abuse
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <hr className="hr2" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="copyr-text">
                  <span>Copyright © 2024. All Rights Reserved By </span>
                  <a href="#">FA - JA06 Team</a>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="footer-social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
