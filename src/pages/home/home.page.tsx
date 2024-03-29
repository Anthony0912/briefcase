import { forwardRef, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Lottie from 'lottie-react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

import particlesAmongus from '../../assets/particles/particles-amongus.json'
import particlesCircle from '../../assets/particles/particles-circle.json'
import particlesSimple from '../../assets/particles/particles-simple.json'
import particlesLinesEfect from '../../assets/particles/particles-lines-efects.json'
import developerAnimation from '../../assets/lottie-files/developer-animation.json'

import AboutView from '../about/about.page'
import BriefcaseView from '../briefcase/briefcase.page'
import ContactView from '../contact/contact.page'
import SkillsView from '../skills/skills.page'

import ScrollRevealComponent from '../../components/scroll-reveal/scroll-reveal.component'

const Home = forwardRef((props: any, ref: any) => {
  const local: any = sessionStorage.getItem('particle')
  const [particle, setParticle] = useState<number>(0)
  const [optionParticle, setOptionParticle] = useState<any>({})
  const defaultOptions: any = {
    loop: true,
    autoplay: true,
    animationData: developerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (!local) {
      const pos: number = Math.floor(Math.random() * 4)
      sessionStorage.setItem('particle', JSON.stringify(pos))
      setParticle(pos)
    } else if (local) {
      setParticle(parseInt(local))
    }
    const particles: any[] = [
      particlesAmongus,
      particlesCircle,
      particlesSimple,
      particlesLinesEfect,
    ]
    setOptionParticle(particles[particle])
  }, [particle, local])

  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <div id="home" ref={ref}>
      <ScrollRevealComponent>
        <div className="home bd-grid">
          <div className="content__particles">
            <Particles options={optionParticle} init={particlesInit} />
          </div>
          <div className="home__data">
            <div className="home__title typing">

              <p>
                Hi, 
              </p>
              <p>
                I`am <span className="home__title-color">Anthony </span> 
              </p >
              <p>
                Web Developer.
              </p >
            </div>
            <Link to="/contact" className="button">
              Contact
            </Link>
          </div>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/anthony-keylor-cardona-mairena-b88a49173"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bx bxl-linkedin-square"
                style={{ color: '#fff' }}
              ></i>
            </a>
            <a
              href="https://gitlab.com/anthony0912"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-gitlab" style={{ color: '#fff' }}></i>
            </a>
            <a
              href="https://github.com/Anthony0912"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github" style={{ color: '#fff' }}></i>
            </a>
            <a
              href="https://www.facebook.com/anthony.cardona.501598"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bx bxl-facebook-circle"
                style={{ color: '#fff' }}
              ></i>
            </a>
            <a
              href="https://twitter.com/anthony091996"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-twitter" style={{ color: '#fff' }}></i>
            </a>
          </div>

          <div className="home__img">
            <Lottie {...defaultOptions} />
          </div>
        </div>
      </ScrollRevealComponent>
    </div>
  )
})

const About = forwardRef((props: any, ref: any) => {
  return (
    <div id="about" ref={ref} className="about-config">
      <ScrollRevealComponent>
        <AboutView />
      </ScrollRevealComponent>
    </div>
  )
})
const Skills = forwardRef((props: any, ref: any) => {
  return (
    <div id="skills" ref={ref}>
      <ScrollRevealComponent>
        <SkillsView />
      </ScrollRevealComponent>
    </div>
  )
})
const Briefcase = forwardRef((props: any, ref: any) => {
  return (
    <div id="work" ref={ref}>
      <ScrollRevealComponent>
        <BriefcaseView />
      </ScrollRevealComponent>
    </div>
  )
})
const Contact = forwardRef((props: any, ref: any) => {
  return (
    <div id="contact" ref={ref}>
      <ScrollRevealComponent>
        <ContactView />
      </ScrollRevealComponent>
    </div>
  )
})

const HomeView = (): JSX.Element => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const briefcaseRef = useRef(null)
  const contactRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        scrollSmoothHandler(homeRef)
        break
      case '/about':
        scrollSmoothHandler(aboutRef)
        break
      case '/skills':
        scrollSmoothHandler(skillsRef)
        break
      case '/briefcase':
        scrollSmoothHandler(briefcaseRef)
        break
      case '/contact':
        scrollSmoothHandler(contactRef)
        break
      default:
        scrollSmoothHandler(homeRef)
        break
    }
  }, [location, homeRef, aboutRef, skillsRef, briefcaseRef, contactRef])

  const scrollSmoothHandler = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Briefcase ref={briefcaseRef} />
      <Contact ref={contactRef} />
    </div>
  )
}

export default HomeView
