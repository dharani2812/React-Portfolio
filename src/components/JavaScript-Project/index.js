import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import linkgithub for navigation
import Slider from "react-slick";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import calculatorImg from "../../assets/images/js-section/calculator.jpg";
import dicerollerImg from "../../assets/images/js-section/dice-roller.jpg";
import digitalclockImg from "../../assets/images/js-section/digital-clock.png";
import RPSImg from "../../assets/images/js-section/R-P-S.png";
import tempconvImg from "../../assets/images/js-section/temp-conv.jpg";
import BGParticle from "../BG-Particles";


const JSProjectData = [
  { 
    title: "Calculator", 
    linkgithub: "https://github.com/dharani2812/JAVASCRIPT/tree/main/Calculator",
    livelink: "https://responsive-calculatorr.netlify.app/",
    image: calculatorImg
  },
 
 
  { 
    title: "Dice Roller", 
    linkgithub: "https://github.com/dharani2812/JAVASCRIPT/tree/main/Dice%20Roller",
    livelink: "https://diceroler.netlify.app/",
    image: dicerollerImg
  },
  { 
    title: "Digital Clock", 
    linkgithub: "https://github.com/dharani2812/JAVASCRIPT/tree/main/Digital%20Clock",
    livelink: "https://digitalclockclock.netlify.app/",
    image: digitalclockImg
  },
  { 
    title: "Rock-Paper-Scissor", 
    linkgithub: "https://github.com/dharani2812/JAVASCRIPT/tree/main/Rock-Scissor-Paper",
    livelink: "https://rockpaperrscissorr.netlify.app/",
    image: RPSImg
  },
  { 
    title: "Temperature Conversion", 
    linkgithub: "https://github.com/dharani2812/JAVASCRIPT/tree/main/temperature%20conversion",
    livelink: "https://temperature-conversionn.netlify.app/",
    image: tempconvImg
  },
 
];

const JSProject = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); 

    return () => {
      window.removeEventListener("resize", updateScreenSize);
      clearTimeout(timer);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
    <BGParticle />
    <div className="container JSProject-page">
      <h1 className="main-heading">
        <AnimatedLetters letterClass={letterClass} strArray={["J", "A", "V", "A"," ","S","C","R","I","P","T"]} idx={15} />
      </h1>

      {isDesktop ? (
        <Slider {...settings} className="JSProject-carousel">
          {JSProjectData.map((jsproject, index) => (
            <div 
              key={index}
              className={`jsproject-card jsproject-card-${index}`}
              style={{ 
                backgroundImage: `url(${jsproject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "350px",  
              }}
            >
              <div className="overlay">
                <h2 className="jsproject-title">{jsproject.title}</h2>
                <Link to={jsproject.livelink} className="jsproject-livelink">Live Link</Link>
                <Link to={jsproject.linkgithub} className="jsproject-linkgithub">GitHub</Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="JSProject-container">
          {JSProjectData.map((jsproject, index) => (
            <div 
              key={index}
              className={`jsproject-card jsproject-card-${index}`}
              style={{
                backgroundImage: `url(${jsproject.image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <h2 className="jsproject-title">{jsproject.title}</h2>
                <Link to={jsproject.livelink} className="jsproject-livelink">Live Link</Link>
                <Link to={jsproject.linkgithub} className="jsproject-linkgithub">GitHub</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default JSProject;

