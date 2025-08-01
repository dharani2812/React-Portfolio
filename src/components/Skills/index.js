import { useEffect, useState, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import htmlImg from '../../assets/images/Skill-Section/html-img.jpg';
import cssImg from '../../assets/images/Skill-Section/css-img.jpg';
import jsImg from '../../assets/images/Skill-Section/js-img.jpg';
import reactImg from '../../assets/images/Skill-Section/react-img.jpg';
import bootstrapImg from '../../assets/images/Skill-Section/bootstrap-img.png';
import tailwindcssImg from '../../assets/images/Skill-Section/tailwindcss-img.jpg';
import javaImg from '../../assets/images/Skill-Section/java-img.jpg';
import nodejsImg from '../../assets/images/Skill-Section/nodejs.jpg';
import expressImg from '../../assets/images/Skill-Section/expressjs.jpg';
import mongodbImg from '../../assets/images/Skill-Section/mongodb.png';
import photoshopImg from '../../assets/images/Skill-Section/photoshop-img.jpg';
import wordpressImg from '../../assets/images/Skill-Section/wp-img.jpg';
import uiuxImg from '../../assets/images/Skill-Section/uiux-img.jpg';

import Loader from 'react-loaders';
import BGParticle from '../BG-Particles';

const skillsData = [
  {
    title: 'HTML 5',
    tooltip: '90%',
    percentage: 90,
    color: '#e44d26',
    image: htmlImg,
  },
  {
    title: 'CSS 3',
    tooltip: '85%',
    percentage: 85,
    color: '#2965f1',
    image: cssImg,
  },
  {
    title: 'JAVA SCRIPT',
    tooltip: '70%',
    percentage: 70,
    color: '#f7df1e',
    image: jsImg,
  },
  {
    title: 'REACT',
    tooltip: '65%',
    percentage: 65,
    color: '#61dafb',
    image: reactImg,
  },
    {
    title: 'TAILWIND CSS',
    tooltip: '80%',
    percentage: 80,
    color: '#61da',
    image: tailwindcssImg,
  },
    {
    title: 'BOOTSTRAP',
    tooltip: '80%',
    percentage: 80,
    color: '#dafb',
    image: bootstrapImg,
  },
  {
    title: 'JAVA',
    tooltip: '50%',
    percentage: 50,
    color: '#f89820',
    image: javaImg,
  },
  {
    title: 'NODE JS',
    tooltip: '50%',
    percentage: 50,
    color: '#8ff',
    image: nodejsImg,
  },
  {
    title: 'EXPRESS JS',
    tooltip: '50%',
    percentage: 50,
    color: '#ec82f1ff',
    image: expressImg,
  },
  {
    title: 'MONGO DB',
    tooltip: '50%',
    percentage: 50,
    color: '#ff71a5ff',
    image: mongodbImg,
  },
  {
    title: 'PHOTOSHOP',
    tooltip: '80%',
    percentage: 80,
    color: '#31a8ff',
    image: photoshopImg,
  },
  {
    title: 'WORDPRESS',
    tooltip: '60%',
    percentage: 60,
    color: '#21759b',
    image: wordpressImg,
  },
  {
    title: 'UI/UX',
    tooltip: '50%',
    percentage: 50,
    color: '#d946ef',
    image: uiuxImg,
  },
];

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isDesktop, setIsDesktop] = useState(true);
  const [progresses, setProgresses] = useState(skillsData.map(() => 0));
  const [animatedOnce, setAnimatedOnce] = useState(skillsData.map(() => false));
  const skillRefs = useRef([]);

  // Define animateProgress function using useCallback
  const animateProgress = useCallback((index) => {
    if (animatedOnce[index]) return;

    let start = null;
    const duration = 1500;
    const target = skillsData[index].percentage;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const progressPercent = Math.min(
        (progressTime / duration) * target,
        target
      );
      setProgresses((prev) => {
        const newProgress = [...prev];
        newProgress[index] = Math.floor(progressPercent);
        return newProgress;
      });
      if (progressTime < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
    setAnimatedOnce((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, [animatedOnce]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    // 🔥 FIX: Animate first two cards manually on desktop
    setTimeout(() => {
      if (window.innerWidth > 1024) {
        animateProgress(0);
        if (skillsData.length > 1) animateProgress(1);
      }
    }, 500);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      clearTimeout(timer);
    };
  }, [animateProgress]);  // make sure to include animateProgress in the dependencies

  useEffect(() => {
    if (!skillRefs.current) return;

    const observers = [];

    skillRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateProgress(index);
              observer.unobserve(ref); // Animate only once
            }
          });
        },
        {
          threshold: 0.3,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isDesktop, animatedOnce, animateProgress]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: 'ondemand',
    beforeChange: (_, next) => {
      animateProgress(next);
      animateProgress(next + 1);
    },
  };

  return (
    <>
      <BGParticle />
      <div className="container skills-page">
        <h1 className="main-heading">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>

        {isDesktop ? (
          <Slider {...settings} className="skills-carousel">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillRefs.current[index] = el)}
                className={`skill-card skill-card-${index}`}
                style={{
                  backgroundImage: `url(${skill.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '350px',
                }}
              >
                <div className="overlay">
                  <h2 className="skill-title">{skill.title}</h2>
                  <div className="circular-skill-box">
                    <div
                      className="circle"
                      style={{
                        '--percentage': progresses[index],
                        '--color': skill.color,
                        '--duration': `${progresses[index] / 50}s`,
                      }}
                    >
                      <div className="progress-text">{progresses[index]}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="skills-container">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillRefs.current[index] = el)}
                className={`skill-card skill-card-${index}`}
                style={{
                  backgroundImage: `url(${skill.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="overlay">
                  <h2 className="skill-title">{skill.title}</h2>
                  <div className="circular-skill-box">
                    <div
                      className="circle"
                      style={{
                        '--percentage': progresses[index],
                        '--color': skill.color,
                        '--duration': `${progresses[index] / 50}s`,
                      }}
                    >
                      <div className="progress-text">{progresses[index]}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;