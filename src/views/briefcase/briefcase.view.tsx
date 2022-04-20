import arkanoid from '../../assets/img/arkanoid.png'
import ticoRides from '../../assets/img/ticoRide.png'

const BriefcaseView = (): JSX.Element => {
  return (
    <div className="work section">
      <h2 className="section-title">Portafolio</h2>
      <div className="work__container bd-grid">
        <figure className="c4-izmir c4-border-top-right work__img figure">
          <img src={ticoRides} alt="ticoRide"/>
          <figcaption className="c4-layout-bottom-left c4-reveal-right">
            <div className="content-code">
              <div className="content-first-code">
                <h5>
                  <a
                    href="https://github.com/Anthony0912/2018-IIPDW"
                    className="portafolio__link title-data-hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-github"></i><span className="name-icon">GitHub</span>
                    <h3 className="title-data-hover">Ver Código Fuente</h3>
                  </a>
                </h5>
              </div>
              <div>
                <h5>
                  <a
                    href="https://ticorides.herokuapp.com"
                    className="portafolio__link title-data-hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-html5"></i>
                    <i className="fab fa-php"></i>
                    <i className="bx bxl-css3"></i>
                    <i className="bx bxl-javascript"></i>
                    <h3 className="title-data-hover">Ir a Tico Rides</h3>
                  </a>
                </h5>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="c4-izmir c4-border-top-right work__img figure">
          <img src={arkanoid} alt="arkanoid" />
          <figcaption className="c4-layout-bottom-left c4-reveal-right">
            <div className="content-code">
              <div className="content-first-code">
                <h5>
                  <a
                    href="https://gitlab.com/anthony0912/llP-lllC-Arkanoid"
                    className="portafolio__link title-data-hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-gitlab"></i> <span className="name-icon">GitLab</span>
                    <h3 className="title-data-hover">Ver Código Fuente</h3>
                  </a>
                </h5>
              </div>
              <div>
                <h5>
                  <a
                    href="https://youtu.be/m8_7od4BbgI"
                    className="portafolio__link title-data-hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-java"></i>
                    <h3 className="title-data-hover">Ir a Arcanoid</h3>
                  </a>
                </h5>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default BriefcaseView
