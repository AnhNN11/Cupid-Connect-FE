import logo from "../../assets/images/logo/logo.png";
import googleImg from "../../assets/images/google.png";

function Login() {
  return (
    <>
      {/* ==========Preloader========== */}
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ==========Preloader========== */}

      {/* ========== Login & Registation Section ========== */}
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <a href="/home" className="backto-home">
                  <i className="fas fa-chevron-left"></i> Back to home
                </a>
              </div>
              <div className="col-lg-7 ">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="image image-log"></div>
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="section-header inloginp">
                  <h2 className="title">Welcome to Cupid Dating</h2>
                </div>
                <div className="main-content inloginp">
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="">Your Address</label>
                      <input
                        type="email"
                        className="my-form-control"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input
                        type="text"
                        className="my-form-control"
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <p className="f-pass">
                      Forgot your password? <a href="#">recover password</a>
                    </p>
                    <div className="button-wrapper">
                      <button type="submit" className="custom-button">
                        Sign in
                      </button>
                    </div>
                    <div className="or">
                      <p>OR</p>
                    </div>
                    <div className="or-content">
                      <p>Sign up with your email</p>
                      <a href="#" className="or-btn">
                        <img src={googleImg} alt="" /> Sign Up with Google
                      </a>
                      <p className="or-signup">
                        Don&#39;t have an account?{" "}
                        <a href="register.html">Sign up here</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Login & Registation Section ========== */}
    </>
  );
}

export default Login;
