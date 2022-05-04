import { FC, useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import ScrollRevealInterface from '../../interfaces/scroll-reveal.interface'

const ScrollRevealComponent: FC<ScrollRevealInterface> = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current)
      ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true,
      }).reveal(sectionRef.current, {
        reset: true,
        delay: 500,
      })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  )
}

export default ScrollRevealComponent
