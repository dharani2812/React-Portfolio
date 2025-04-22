import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import linkgithub for navigation
import Slider from "react-slick";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bloggingImg from "../../assets/images/wp-section/blogging.jpg";
import landingpageImg from "../../assets/images/wp-section/landingpage.PNG";
import BGParticle from "../BG-Particles";



const WordPressProjectData = [
  { 
    title: "Blogging Site", 
    livelink: "https://bloggingsite12.netlify.app/",
    image: bloggingImg
  },
  { 
    title: "Landing Page", 
    livelink: "https://landingpagesite12.netlify.app/",
    image: landingpageImg
  }
];

const WordPressProject = () => {
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
    <div className="container WordPressProjects-page">
      <h1 className="main-heading">
        <AnimatedLetters letterClass={letterClass} strArray={["W","O", "R", "D","P","R","E","S","S"]} idx={15} />
      </h1>

      {isDesktop ? (
        <Slider {...settings}>
          {WordPressProjectData.map((wpproject, index) => (
            <div 
              key={index}
              className={`wpproject-card wpproject-card-${index}`}
              style={{ 
                backgroundImage: `url(${wpproject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "350px",  
              }}
            >
              <div className="overlay">
                <h2 className="wpproject-title">{wpproject.title}</h2>
                <Link to={wpproject.livelink} className="wpproject-livelink">Live Link</Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="WordPressProject-container">
          {WordPressProjectData.map((wpproject, index) => (
            <div 
              key={index}
              className={`wpproject-card wpproject-card-${index}`}
              style={{
                backgroundImage: `url(${wpproject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px", // adjust as needed
                width: "100%",
              }}
            >
              <div className="overlay">
                <h2 className="wpproject-title">{wpproject.title}</h2>
                <Link to={wpproject.livelink} className="wpproject-livelink">Live Link</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default WordPressProject;

