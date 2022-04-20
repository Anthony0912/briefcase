import Logo from '../../assets/img/logo.png'

const FooterComponent = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="content__logo__footer">
        <div>
          <img src={Logo} width={110} alt="Logo" />
        </div>
      </div>
      <p className="footer__title"></p>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/anthony-keylor-cardona-mairena-b88a49173"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a
          href="https://gitlab.com/anthony0912"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-gitlab"></i>
        </a>
        <a
          href="https://github.com/Anthony0912"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.facebook.com/anthony.cardona.501598/"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://twitter.com/anthony091996"
          className="footer__icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <p>&#169; 2021 copyright all right reserved</p>
    </footer>
  )
}

export default FooterComponent
