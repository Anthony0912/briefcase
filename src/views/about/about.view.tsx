import pp from '../../assets/img/pp.jpg'

const AboutView = (): JSX.Element => {
  return (
    <div className="about section">
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={pp} alt="pp" />
        </div>
        <div>
          <h2 className="about__subtitle">I`am Anthony</h2>
          <p className="about__text">
            My name is Anthony and I am a Software Engineer, I like it develop
            web applications on the fronted and backend side. Also, I have
            previous knowledge in the development of desktop and mobile
            applications with C #, flutter, xamarin and java using
            object-oriented programming, MVC (Model-View-Controller), REST API,
            Microservices, UML (Unified Model Language), GIT version manager,
            Unit testing and automated tests.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutView
