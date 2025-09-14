import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import BGParticle from '../BG-Particles'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      name: 'Excess Food Redistribution Platform | MERN Stack',
      link: 'https://dharani2812.github.io/Food-App-Frontend/',
      description: [
        'Redistributes excess food from donors to those in need, built with React, Node.js, Express, and MongoDB, featuring request handling, donor notifications, secure authentication, and hosted on Render & GitHub Pages.',
      ],
    },
    {
      name: 'Personal Portfolio | React JS',
      link: 'https://dharanidharan.tech',
      description: [
        'Showcases web development skills and projects, built with React for a clean UI and mobile-friendly design, highlighting front-end proficiency and smooth navigation, and hosted on GitHub Pages.',
      ],
    },

   {
  name: 'Blogging Site | WordPress',
  link: 'https://bloggingsite12.netlify.app',
  description: [
    'Developed a responsive blogging platform using WordPress, featuring easy content management, clean UI, and mobile-friendly layout.'
  ],
}
  ]

  return (
    <>
      <BGParticle />
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>

          <div className="projects-container">
            {projects.map((project, idx) => (
              <div className="card" key={idx}>
                <div className="border"></div>
                <div className="content">
                  <div className="logo-bottom-text">{project.name}</div>
                  <div className="project-description">
                    {project.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="bottom-text">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
