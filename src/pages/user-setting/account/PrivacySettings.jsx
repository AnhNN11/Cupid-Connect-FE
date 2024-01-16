function PrivacySettings() {
  return (
    <>
      <div className="page-title">Privacy Settings</div>

      <div className="input-info-box mt-30">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                <b>Who can see your profile?</b>
              </p>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <select name="" id="">
                  <option value="">Everyone (Public)</option>
                  <option value="">Member Only</option>
                  <option value="">Friends Only</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                <b>Who can send you a friend request?</b>
              </p>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <select name="" id="">
                  <option value="">Everyone (Public)</option>
                  <option value="">Member Only</option>
                  <option value="">Friends Only</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                <b>Who can see your activity?</b>
              </p>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <select name="" id="">
                  <option value="">Everyone (Public)</option>
                  <option value="">Member Only</option>
                  <option value="">Friends Only</option>
                </select>
              </div>
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

export default PrivacySettings;
