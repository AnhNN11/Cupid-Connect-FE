function ChangePassword() {
  return (
    <>
      <div className="page-title">Change Password</div>

      <div className="input-info-box mt-30">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="my-input-box">
                <label htmlFor="">Confirm your Current Password</label>
                <input type="password" placeholder="Enter Current Password" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">New Password</label>
                <input type="password" placeholder="Enter New Password" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label htmlFor="">Confirm New Password</label>
                <input type="password" placeholder="Enter Confirm Password" />
              </div>
            </div>
            <div className="col-lg-12">
              <a href="#">Forgot your Password ?</a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons  mt-30">
        <button type="submit" className="custom-button">
          Save Changes
        </button>
        <button className="custom-button2">Discard All</button>
      </div>
    </>
  );
}

export default ChangePassword;
