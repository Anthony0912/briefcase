const BriefcaseView = (): JSX.Element => {
  return (
    <div className="work section">
      <h2 className="section-title">Portafolio</h2>
      <div className="work__container bd-grid">
        <figure className="c4-izmir c4-border-top-right work__img figure">
          <img src="./assets/img/ticoRide.jpg" alt="ticoRide" />
          <figcaption className="c4-layout-bottom-left c4-reveal-right">
            <h3>
              <a
                href="https://ticorides.herokuapp.com"
                className="portafolio__link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-html5"></i>
                <i className="fab fa-php"></i>
                <i className="bx bxl-css3"></i>
                <i className="bx bxl-javascript"></i>
                <h3>Tico Rides</h3>
              </a>
            </h3>
          </figcaption>
        </figure>
        <figure className="c4-izmir c4-border-top-right work__img figure">
          <img src="./assets/img/arkanoid.png" alt="arkanoid" />
          <figcaption className="c4-layout-bottom-left c4-reveal-right">
            <h3>
              <a
                href="https://youtu.be/m8_7od4BbgI"
                className="portafolio__link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-java"></i>
                <h3>Arcanoid</h3>
                First game developed in java.
              </a>
            </h3>
          </figcaption>
        </figure>
        <figure className="c4-izmir c4-border-top-right work__img figure">
          <img src="./assets/img/bludy.png" alt="bludy" />
          <figcaption className="c4-layout-bottom-left c4-reveal-right">
            <h3>
              <a
                href="https://bludy.org"
                className="portafolio__link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-js"></i>
                <i className="fab fa-node"></i>
                <h3>Bludy</h3>
                Backend development.
              </a>
            </h3>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default BriefcaseView
