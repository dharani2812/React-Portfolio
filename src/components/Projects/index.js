import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import BGParticle from '../BG-Particles'

// --- IMPORT FONT AWESOME COMPONENTS ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// --- IMPORT SPECIFIC ICON OBJECTS (Updated for new stack) ---
import { faReact, faNodeJs, faJs, faHtml5, faWordpress, faWordpressSimple, faCss3Alt, faSass } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faBolt, faFire, faBraille, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'


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
      // MERN: React, MongoDB, Node.js, Express.js
      techStack: [
        { icon: faReact, tooltip: 'React' },
        { icon: faLeaf, tooltip: 'MongoDB' },      
        { icon: faNodeJs, tooltip: 'Node.js' },      
        { icon: faBolt, tooltip: 'Express.js' }       
      ],
      description: [
        'Redistributes excess food from donors to those in need, featuring request handling, donor notifications, secure authentication, and hosted on Render & GitHub Pages.',
      ],
    },
    {
      name: 'Hemato | Blood Donation Platform',
      link: 'https://hemato-26.web.app/',
      // Hemato: Firebase, React, HTML, JavaScript
      techStack: [
        { icon: faFire, tooltip: 'Firebase' },     
        { icon: faReact, tooltip: 'React' },
        { icon: faHtml5, tooltip: 'HTML' },
        { icon: faJs, tooltip: 'JavaScript' }
      ],
      description: [
        'A web platform that connects blood donors and recipients, enabling users to register, donate, and request blood with real-time updates. Designed with a user-friendly interface to promote life-saving donations.',
      ],
    },
    {
      name: 'Personal Portfolio | React JS',
      link: 'https://dharanidharan.tech',
      // Portfolio: React, SCSS, HTML, JavaScript
      techStack: [
        { icon: faReact, tooltip: 'React' },
        { icon: faSass, tooltip: 'SCSS' },
        { icon: faHtml5, tooltip: 'HTML' },
        { icon: faJs, tooltip: 'JavaScript' }
      ],
      description: [
        'Showcases web development skills and projects, built with React for a clean UI and mobile-friendly design, highlighting front-end proficiency and smooth navigation.',
      ],
    },
    {
      name: 'Blogging Site | WordPress',
      link: 'https://bloggingsite12.netlify.app',
      // Blogging: WordPress, Elementor (using WordPress Simple icon), plus two relevant icons
      techStack: [
        { icon: faWordpress, tooltip: 'WordPress' },
        { icon: faWordpressSimple, tooltip: 'Elementor' }, // Using alternate WordPress icon for visual distinction
        { icon: faCode, tooltip: 'Custom Code' },          // Added Code icon
        { icon: faCss3Alt, tooltip: 'Custom CSS' }         // Added CSS icon
      ],
      description: [
        'Developed a responsive blogging platform using WordPress, featuring easy content management, clean UI, and mobile-friendly layout.',
      ],
    },
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
                <div className="border">
                  <div className="tech-icons-container">
                    {project.techStack.map((tech, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={tech.icon} 
                        className="tech-icon"
                        title={tech.tooltip} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="content">
                  <div className="logo-bottom-text">{project.name}</div>
                  <div className="project-description">
                    {project.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="project-link-button">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
                <div className="bottom-text"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="loader-wrapper-fix">
          <Loader type="pacman" />
      </div>
    </>
  )
}

export default Projects