import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavBar = (): JSX.Element => {
  const location = useLocation()

  useEffect(() => {
    linkAction('home__nav__link')
    location.pathname = '/'
    window.history.pushState({}, '', '/')
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [])

  const handleOnClickShowMenu = (navId: string): void => {
    const nav: HTMLElement | null = document.getElementById(navId)

    if (nav) {
      nav.classList.toggle('show')
    }
  }

  const linkAction = (id: string): void => {
    // Active link
    const navLink: any = document.querySelectorAll('.nav__link')
    navLink.forEach((n: any) => {
      n.classList.remove('active')
    })

    const linkActiveClick: any = document.getElementById(id)
    linkActiveClick.classList.add('active')

    //Remove menu mobile
    const navMenu: any = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <div className="nav__logo">Anthony K. Cardona Mairena</div>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/home"
                className="nav__link"
                id="home__nav__link"
                onClick={() => linkAction('home__nav__link')}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                id="about__nav__link"
                onClick={() => linkAction('about__nav__link')}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/skills"
                className="nav__link"
                id="skills__nav__link"
                onClick={() => linkAction('skills__nav__link')}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/briefcase"
                className="nav__link"
                id="briefcase__nav__link"
                onClick={() => linkAction('briefcase__nav__link')}
              >
                Portafolio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                id="contact__nav__link"
                onClick={() => linkAction('contact__nav__link')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => handleOnClickShowMenu('nav-menu')}
        >
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
