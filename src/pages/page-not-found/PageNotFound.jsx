import notFoundImg from "../../assets/images/404.png";

function PageNotFound() {
  return (
    <>
      {/* ==========Four-Not-Four-Section========== */}
      <section className="section-404">
        <div className="container">
          <div className="thumb-404">
            <img src={notFoundImg} alt="404" />
          </div>
          <h3 className="title">Oops.. looks like you got lost :( </h3>
          <a href="index.html" className="custom-button">
            Back To Home <i className="fa-solid fa-arrow-left"></i>
          </a>
        </div>
      </section>
      {/* ==========Four-Not-Four-Section========== */}
    </>
  );
}

export default PageNotFound;
