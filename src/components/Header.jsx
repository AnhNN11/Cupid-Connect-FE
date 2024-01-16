import Logo from "../assets/images/logo/logo.png";
import UserDemo from "../assets/images/user-demo.png";
import { useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  // console.log(location.pathname);

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

      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="/home">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <ul className="menu">
              <li>
                <a
                  href="/home"
                  className={location.pathname === "/home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="community.html">Community</a>
              </li>
              <li>
                {/* <Link to={"/membership"}>Membership</Link>
                <NavLink to={"/membership"}>Membership</NavLink> */}
                <a
                  href="/membership"
                  className={
                    location.pathname === "/membership" ? "active" : ""
                  }
                >
                  Membership
                </a>
              </li>
              <li>
                <a href="shop2.html">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li className="separator">
                <span>|</span>
              </li>
              <li>
                <div className="language-select">
                  <select className="select-bar">
                    <option value="">EN</option>
                    <option value="">VN</option>
                  </select>
                </div>
              </li>
              <li className="user-profile">
                {/* <div className="joun-button">
                  <button className="btn custom-button">Join Now!</button>
                </div> */}

                <a href="#">
                  <img src={UserDemo} alt="" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/user-setting/profile">Profile</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
