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
            My name is Anthony and I am a software engineer, I like to develop
            web applications for Front-End and Back-End. Likewise, I have
            previous, practical knowledge and experience with the development of
            applications using Angular JS, React JS, Laravel, Express JS,
            MongoDB and MySQL. I am currently working remotely in Costa Rica and
            I am always available to discuss his project by sending a message
            through one of my social media channels.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutView
