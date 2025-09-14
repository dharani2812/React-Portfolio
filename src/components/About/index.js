import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import myPhoto from '../../assets/images/about-pic.png'

import BGParticle from '../BG-Particles'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <BGParticle />
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            I am currently a Final-Year Computer Science Engineering student
            specializing in Full Stack Development. With a strong foundation in
            HTML, CSS, JavaScript, React.js, and Java, I build dynamic and
            user-friendly applications. My skills also extend to Photoshop,
            allowing me to blend technical expertise with creative design.{' '}
          </p>{' '}
          <p>
            {' '}
            Confident, adaptable, and hardworking, I approach challenges with a
            positive mindset and thrive in collaborative environments that
            encourage teamwork and problem-solving.{' '}
          </p>{' '}
          <p>
            {' '}
            Grateful for every opportunity, I continue to evolve as a developer
            and look forward to contributing my skills to impactful projects and
            innovative solutions.{' '}
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="about-photo">
            <img src={myPhoto} alt="Dharani Dharan" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
