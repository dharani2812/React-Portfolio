import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import vscodeImg from '../../assets/images/Tools-Section/vscode-img.png'
import githubImg from '../../assets/images/Tools-Section/github-img.png'
import netlifyImg from '../../assets/images/Tools-Section/netlify-img.jpg'
import eclipseImg from '../../assets/images/Tools-Section/eclipse-img.jpg'
import psImg from '../../assets/images/Tools-Section/photoshop-img.jpg'
import BGParticle from '../BG-Particles'
import Loader from 'react-loaders'

const toolsData = [
  { title: 'VS Code', image: vscodeImg },
  { title: 'GitHub', image: githubImg },
  { title: 'Netlify', image: netlifyImg },
  { title: 'Eclipse', image: eclipseImg },
  { title: 'Photoshop', image: psImg },
]

const Tools = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000)

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
      <div className="container tools-page">
        <h1 className="main-heading">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['T', 'o', 'o', 'l', 's']}
            idx={15}
          />
        </h1>

        {isDesktop ? (
          <Slider {...settings} className="tools-carousel">
            {toolsData.map((tool, index) => (
              <div key={index}>
                <div
                  className={`tool-card tool-card-${index}`}
                  style={{
                    backgroundImage: `url(${tool.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="overlay">
                    <h2 className="tool-title">{tool.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="tools-container">
            {toolsData.map((tool, index) => (
              <div
                key={index}
                className={`tool-card tool-card-${index}`}
                style={{
                  backgroundImage: `url(${tool.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="overlay">
                  <h2 className="tool-title">{tool.title}</h2>
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

export default Tools
