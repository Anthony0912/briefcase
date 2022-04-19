const SkillsView = (): JSX.Element => {
  return (
    <div className="skills section">
      <h2 className="section-title">Skills</h2>

      <h2 className="skills__subtitle bd-grid">Profesional Skills</h2>
      <div className="skills__container bd-grid">
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-html5 skills__icon"></i>
            <span className="skills__name">HTML5</span>
          </div>
          <div className="skills__bar skills__html"></div>
          <div>
            <span className="skills__percentage">95%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-css3 skills__icon"></i>
            <span className="skills__name">CSS3</span>
          </div>
          <div className="skills__bar skills__css"></div>
          <div>
            <span className="skills__percentage">65%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-javascript skills__icon"></i>
            <span className="skills__name">JAVASCRIPT</span>
          </div>
          <div className="skills__bar skills__js"></div>
          <div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="fab fa-php skills__icon"></i>
            <span className="skills__name">PHP</span>
          </div>
          <div className="skills__bar skills__php"></div>
          <div>
            <span className="skills__percentage">45%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="fab fa-node-js skills__icon"></i>
            <span className="skills__name">NODE JS</span>
          </div>
          <div className="skills__bar skills__nodejs"></div>
          <div>
            <span className="skills__percentage">90%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="fab fa-node-js skills__icon"></i>
            <span className="skills__name">EXPRESS JS</span>
          </div>
          <div className="skills__bar skills__expresjs"></div>
          <div>
            <span className="skills__percentage">88%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-react skills__icon"></i>
            <span className="skills__name">REACT JS</span>
          </div>
          <div className="skills__bar skills__reactjs"></div>
          <div>
            <span className="skills__percentage">75%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="fab fa-laravel skills__icon"></i>
            <span className="skills__name">LARAVEL</span>
          </div>
          <div className="skills__bar skills__laravel"></div>
          <div>
            <span className="skills__percentage">45%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="fab fa-angular skills__icon"></i>
            <span className="skills__name">ANGULAR</span>
          </div>
          <div className="skills__bar skills__angular"></div>
          <div>
            <span className="skills__percentage">90%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsView
