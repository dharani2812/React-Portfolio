import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import linkgithub for navigation
import Slider from "react-slick";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import animatedImg from "../../assets/images/html-section/animated-bg.jpg";
import loginImg from "../../assets/images/html-section/google-login.jpg";
import inputImg from "../../assets/images/html-section/search-input.jpg";
import spinnerImg from "../../assets/images/html-section/spinner.png";
import BGParticle from "../BG-Particles";


const HtmlProjectData = [
  { 
    title: "Animated Background", 
    linkgithub: "https://github.com/dharani2812/HTML-CSS/tree/main/Animated%20Background",
    livelink: "https://animated-backgroundd.netlify.app/",
    image: animatedImg
  },
  { 
    title: "Google Login", 
    linkgithub: "https://github.com/dharani2812/HTML-CSS",
    livelink: "https://gmailloginpagee.netlify.app/",
    image: loginImg
  },
  { 
    title: "Search Input", 
    linkgithub: "https://github.com/dharani2812/HTML-CSS/tree/main/Nabar%202",
    livelink: "https://navibars.netlify.app/",
    image: inputImg
  },
  { 
    title: "Stylish Spinner", 
    linkgithub: "https://github.com/dharani2812/HTML-CSS/tree/main/Spinner",
    livelink: "https://stylish-spinner.netlify.app/",
    image: spinnerImg
  }
 
];

const HtmlProject = () => {
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
    <div className="container HtmlProjects-page">
      <h1 className="main-heading">
        <AnimatedLetters letterClass={letterClass} strArray={["H", "T", "M", "L"," ","&"," ","C","S","S"]} idx={15} />
      </h1>

      {isDesktop ? (
        <Slider {...settings} className="HtmlProject-carousel">
          {HtmlProjectData.map((htmlproject, index) => (
            <div 
              key={index}
              className={`htmlproject-card htmlproject-card-${index}`}
              style={{ 
                backgroundImage: `url(${htmlproject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "350px",  
              }}
            >
              <div className="overlay">
                <h2 className="htmlproject-title">{htmlproject.title}</h2>
                <Link to={htmlproject.livelink} className="htmlproject-livelink">Live Link</Link>
                <Link to={htmlproject.linkgithub} className="htmlproject-linkgithub">GitHub</Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="HtmlProject-container">
          {HtmlProjectData.map((htmlproject, index) => (
            <div 
              key={index}
              className={`htmlproject-card htmlproject-card-${index}`}
              style={{
                backgroundImage: `url(${htmlproject.image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <h2 className="htmlproject-title">{htmlproject.title}</h2>
                <Link to={htmlproject.livelink} className="htmlproject-livelink">Live Link</Link>
                <Link to={htmlproject.linkgithub} className="htmlproject-linkgithub">GitHub</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
 
};

export default HtmlProject;

