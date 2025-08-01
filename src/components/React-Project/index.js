import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import linkgithub for navigation
import Slider from "react-slick";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import foodImg from "../../assets/images/react-section/food.jpg";
import expensetrackerImg from "../../assets/images/react-section/expensetracker.jpg";
import guessthenumberImg from "../../assets/images/react-section/guessthenumber.png";
import BGParticle from "../BG-Particles";



const ReactProjectData = [
  { 
    title: "Excess Food Redistribution", 
    linkgithub: "https://github.com/dharani2812?tab=repositories",
    livelink: "https://dharani2812.github.io/Food-App-Frontend/",
    image: foodImg
  },
  { 
    title: "Guess The Number", 
    linkgithub: "https://github.com/dharani2812/Guess-the-number",
    livelink: "https://dharani2812.github.io/Guess-the-number/",
    image: guessthenumberImg
  },
  { 
    title: "Expense Tracker", 
    linkgithub: "https://github.com/dharani2812/Expense-Tracker",
    livelink: "https://expensetrackers-app.netlify.app/",
    image: expensetrackerImg
  }
];

const ReactProject = () => {
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
    <div className="container ReactProjects-page">
      <h1 className="main-heading">
        <AnimatedLetters letterClass={letterClass} strArray={["R","E", "A", "C","T"]} idx={15} />
      </h1>

      {isDesktop ? (
        <Slider {...settings} className="ReactProject-carousel">
          {ReactProjectData.map((reactproject, index) => (
            <div 
              key={index}
              className={`reactproject-card reactproject-card-${index}`}
              style={{ 
                backgroundImage: `url(${reactproject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "350px",  
              }}
            >
              <div className="overlay">
                <h2 className="reactproject-title">{reactproject.title}</h2>
                <Link to={reactproject.livelink} className="reactproject-livelink">Live Link</Link>
                <Link to={reactproject.linkgithub} className="reactproject-linkgithub">GitHub</Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="HtmlProject-container">
          {ReactProjectData.map((reactproject, index) => (
            <div 
              key={index}
              className={`reactproject-card reactproject-card-${index}`}
              style={{
                backgroundImage: `url(${reactproject.image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <h2 className="reactproject-title">{reactproject.title}</h2>
                <Link to={reactproject.livelink} className="reactproject-livelink">Live Link</Link>
                <Link to={reactproject.linkgithub} className="reactproject-linkgithub">GitHub</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default ReactProject;

