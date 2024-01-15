import Logo from "../assets/images/logo/logo.png";
import UserDemo from "../assets/images/user-demo.png";

function Header() {
  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="index.html">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <ul className="menu">
              <li>
                <a href="#" className="active">
                  Home
                </a>
                {/* <ul className="submenu">
                  <li>
                    <a href="index.html" className="active">
                      Home One
                    </a>
                  </li>
                  <li>
                    <a href="index2.html">Home Two</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a href="community.html">Community</a>
              </li>
              <li>
                <a href="membership.html">Membership</a>
              </li>
              <li>
                <a href="shop2.html">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
                {/* <ul className="submenu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Single</a>
                  </li>
                </ul> */}
              </li>
              <li className="separator">
                <span>|</span>
              </li>
              {/* <li>
                <div className="serch-icon">
                  <i className="fas fa-search"></i>
                </div>
              </li> */}
              <li>
                <div className="language-select">
                  <select className="select-bar">
                    <option value="">EN</option>
                    <option value="">VN</option>
                  </select>
                </div>
              </li>
              <li className="user-profile">
                <a href="#">
                  <img src={UserDemo} alt="" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#">Profile</a>
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
      <div className="search-overlay">
        <div className="close">
          <i className="fas fa-times"></i>
        </div>
        <form action="#">
          <input type="text" placeholder="Write what you want.." />
        </form>
      </div>
    </>
  );
}

export default Header;
