import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Profile from "./profile/Profile";
import Notifications from "./profile/Notifications";
import FriendRequests from "./profile/FriendRequests";
import ChangePassword from "./account/ChangePassword";
import PrivacySettings from "./account/PrivacySettings";
import VerifiedAccount from "./account/VerifiedAccount";
import DeleteAccount from "./account/DeleteAccount";
import UpgradeAccount from "./payment/UpgradeAccount";
import ViewPurchaseHitory from "./payment/ViewPurchaseHitory";

function UserSettings() {
  let { option } = useParams();

  const ComponentMapping = {
    profile: <Profile />,
    notifications: <Notifications />,
    "friend-requests": <FriendRequests />,
    "change-password": <ChangePassword />,
    "privacy-settings": <PrivacySettings />,
    "verified-account": <VerifiedAccount />,
    "delete-account": <DeleteAccount />,
    "upgrade-account": <UpgradeAccount />,
    "purchase-history": <ViewPurchaseHitory />,
    // Thêm các ánh xạ cho các option khác nếu cần
  };
  return (
    <>
      {/*========== Header-Section ==========*/}
      <Header />
      {/*========== Header-Section ==========*/}

      {/* ==========Breadcrumb-Section========== */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Setting</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <a href="/home">Home</a>
              </li>

              <li>Setting</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ==========Breadcrumb-Section========== */}

      {/*========== Section Start ==========*/}
      <section className="user-setting-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-5">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <button
                      className=""
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <span>My Profile</span>
                      <div className="t-icon">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-minus"></i>
                      </div>
                    </button>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul className="links">
                        <li>
                          <Link
                            className={option === "profile" ? "active" : ""}
                            to={"/user-setting/profile"}
                          >
                            Profile Info
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              option === "notifications" ? "active" : ""
                            }
                            to={"/user-setting/notifications"}
                          >
                            Notifications
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              option === "friend-requests" ? "active" : ""
                            }
                            to={"/user-setting/friend-requests"}
                          >
                            Friend Requests
                          </Link>
                        </li>
                        {/* <li>
                          <a href="user-badges.html">Badges</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <span>Account</span>
                      <div className="t-icon">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-minus"></i>
                      </div>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul className="links">
                        {/* <li>
                          <a href="user-account-info.html">Account Info</a>
                        </li> */}
                        <li>
                          <Link
                            className={
                              option === "change-password" ? "active" : ""
                            }
                            to={"/user-setting/change-password"}
                          >
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              option === "privacy-settings" ? "active" : ""
                            }
                            to={"/user-setting/privacy-settings"}
                          >
                            Privacy Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              option === "verified-account" ? "active" : ""
                            }
                            to={"/user-setting/verified-account"}
                          >
                            Verified Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              option === "delete-account" ? "active" : ""
                            }
                            to={"/user-setting/delete-account"}
                          >
                            Delete Account
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <button
                      className="collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div className="icon">
                        <i className="far fa-credit-card"></i>
                      </div>
                      <span>Subscriptions & Payments</span>
                      <div className="t-icon">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-minus"></i>
                      </div>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul className="links">
                        {/* <li>
                          <a href="user-billing.html">Billing & Payout</a>
                        </li> */}
                        <li>
                          <Link
                            className={
                              option === "upgrade-account" ? "active" : ""
                            }
                            to={"/user-setting/upgrade-account"}
                          >
                            Upgrade Membership Plan
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              option === "purchase-history" ? "active" : ""
                            }
                            to={"/user-setting/purchase-history"}
                          >
                            View Purchase History
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Components user here */}
            <div className="col-xl-8 col-md-7 ">
              {ComponentMapping[option] || "Page not found"}
            </div>
            {/* Components user here */}
          </div>
        </div>
      </section>
      {/* ========= Section Start ========= */}
    </>
  );
}

export default UserSettings;
