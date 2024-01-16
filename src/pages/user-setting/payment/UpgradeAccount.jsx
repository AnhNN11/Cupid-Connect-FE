import planBg from "../../../assets/images/membership/plan-bg.png";

function UpgradeAccount() {
  return (
    <>
      <div className="page-title">Upgrade Membership Plan</div>
      <div className="row">
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">1 Month</p>
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
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">3 Month</p>
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
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">6 Month</p>
            <h4 className="number">
              <sup>$</sup>5.99
            </h4>
            <p className="stamet">Per Month</p>
            <a href="/checkout" className="custom-button">
              Buy Now!
            </a>
            <img className="shape" src={planBg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-plan">
            <p className="duration">12 Month</p>
            <h4 className="number">
              <sup>$</sup>7.99
            </h4>
            <p className="stamet">Per Month</p>
            <a href="/checkout" className="custom-button">
              Buy Now!
            </a>
            <img className="shape" src={planBg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpgradeAccount;
