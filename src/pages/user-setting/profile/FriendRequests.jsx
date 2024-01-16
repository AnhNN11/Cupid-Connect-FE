import friendRequestsImg1 from "../../../assets/images/friend-request/1.png";
import friendRequestsImg2 from "../../../assets/images/friend-request/2.png";

function FriendRequests() {
  return (
    <>
      <div className="page-title">
        Friend Request
        <div className="right">
          <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
            Find Friends
          </a>
          <a href="#" data-toggle="modal" data-target="#settingnotification">
            Settings
          </a>
        </div>
      </div>
      <div className="frind-box">
        <div className="single-friend">
          <div className="left">
            <img src={friendRequestsImg1} alt="" />
            <div className="content">
              <h5 className="name">
                May Hurt <i className="fas fa-certificate"></i>
              </h5>
              <span className="age">21 Years Old</span>
              <span className="separator"></span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Paris
              </span>
            </div>
          </div>
          <div className="right">
            <a href="#" className="accept">
              Accept
            </a>
            <a href="#" className="ignore">
              Ignore
            </a>
          </div>
        </div>
        <div className="single-friend mt-20">
          <div className="left">
            <img src={friendRequestsImg2} alt="" />
            <div className="content">
              <h5 className="name">
                May Hurt <i className="fas fa-certificate"></i>
              </h5>
              <span className="age">21 Years Old</span>
              <span className="separator"></span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Paris
              </span>
            </div>
          </div>
          <div className="right">
            <a href="#" className="accept">
              Accept
            </a>
            <a href="#" className="ignore">
              Ignore
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendRequests;
