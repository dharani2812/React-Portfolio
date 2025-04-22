import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import htmlImg from '../../assets/images/Project-Section/html-css-project.jpg'
import jsImg from '../../assets/images/Project-Section/js-project.jpg'
import reactImg from '../../assets/images/Project-Section/react-project.jpg'
import wordpressImg from '../../assets/images/Project-Section/wp-project.jpg'
import BGParticle from '../BG-Particles'
import Loader from 'react-loaders'


const projectsData = [
  {
    title: 'HTML 5 & CSS',
    link: './html',
    image: htmlImg, // ✅ Updated only HTML image
  },
  {
    title: 'JAVA SCRIPT',
    link: './javascript',
    image: jsImg,
  },
  {
    title: 'REACT',
    link: './react',
    image: reactImg,
  },
  {
    title: 'WORD PRESS',
    link: './wordpress',
    image: wordpressImg,
  }
]

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024)
    }

    window.addEventListener('resize', updateScreenSize)
    updateScreenSize()

    return () => {
      window.removeEventListener('resize', updateScreenSize)
      clearTimeout(timer)
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }

  return (

    <>
   <BGParticle />
    <div className="container projects-page">
      <h1 className="main-heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't']}
          idx={15}
        />
      </h1>

      {isDesktop ? (
        <Slider {...settings} className="Project-carousel">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-card project-card-${index}`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '350px',
              }}
            >
              <div className="overlay">
                <h2 className="project-title">{project.title}</h2>
                <Link to={project.link} className="project-link">
                  Explore Project
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="Project-container">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-card project-card-${index}`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="overlay">
                <h2 className="project-title">{project.title}</h2>
                <Link to={project.link} className="project-link">
                  Explore Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
