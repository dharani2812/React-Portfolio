import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Lottie from 'lottie-react'
import coderAnimation from '../../assets/images/home-section/coder-animation.json'
import react from '../../assets/images/home-section/react.svg'
import java from '../../assets/images/home-section/java.svg'
import css from '../../assets/images/home-section/css.svg'
import ps from '../../assets/images/home-section/ps.svg'

import BGParticle from '../BG-Particles'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    '  ',
    'D',
    'h',
    'a',
    'r',
    'a',
    'n',
    'i',
    ' ',
    'D',
    'h',
    'a',
    'r',
    'a',
    'n',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <BGParticle />

      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <h2 className="job-title">Full Stack Developer</h2>

          <Link to="/contact" className="flat-button">
            TO CONTACT
          </Link>
          <a
            href="/Dharani Dharan ATS Resume.pdf"
            className="flat-button"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dharani-dharan-134b702a1/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dharani2812"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ft_dharani/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="visual-zone">
          <Lottie
            animationData={coderAnimation}
            loop
            className="lottie-animation"
          />
          <div className="tech-icons">
            <img src={react} alt="React" />
            <img src={java} alt="Java" />
            <img src={css} alt="CSS" />
            <img src={ps} alt="Photoshop" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
