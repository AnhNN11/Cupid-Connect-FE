function DeleteAccount() {
  return (
    <>
      <div className="page-title">Delete Account</div>

      <div className="input-info-box mt-30">
        <div className="header">Warning:</div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <p>
                If you close your account, you will be unsubscribed from all
                your followers and friends, and will lose access forever.
              </p>
              <div className="my-input-box">
                <input type="password" placeholder="Enter Your Password" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons  mt-30">
        <button type="submit" className="custom-button">
          Delete Account
        </button>
      </div>
    </>
  );
}

export default DeleteAccount;
