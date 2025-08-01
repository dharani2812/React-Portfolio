import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

import BGParticle from '../BG-Particles';

const About = () => {
    
        const [letterClass, setLetterClass] = useState('text-animate');

        useEffect(() => {
            const timer = setTimeout(() => {
              setLetterClass('text-animate-hover');
            }, 3000);
          
            return () => clearTimeout(timer);  
          }, []);
          
    

    return(

        <>
        <BGParticle />
          <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                      strArray={['A','b','o','u','t',' ','M','e' ]}
                      idx={15}
                    />
                </h1>
                <p>
            I am passionate about learning and continuously improving my abilities.
            I have a strong foundation in HTML and CSS, essential for web development, and 
            I am proficient in JavaScript and React.js, which allow me to build dynamic and 
            user-friendly interfaces. Additionally, I have experience with Java, further expanding 
            my technical knowledge. Along with development, I am skilled in Photoshop, enabling me to 
            create visually appealing designs. I am always eager to explore new technologies 
            and enhance my expertise to keep pace with the ever-evolving tech industry.
            </p>
            <p>
            My personality is defined by confidence, adaptability, and a strong work ethic. 
            I approach challenges with a positive mindset, eager to learn and grow. 
            I thrive in collaborative environments, where teamwork and creative problem-solving 
            lead to the best results.
            </p>
            <p>
            I am incredibly grateful for the opportunities I have had to develop my skills 
            and showcase my work. Every challenge has shaped me into a better developer, and
            I look forward to contributing my expertise to future projects. Thank you for
                taking the time to learn about my journey .
            </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#2965f1' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#F7DF1E' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faBootstrap} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color='#61DBFB' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color='#5382A1' />
                    </div>

                </div>
            </div>

          </div>

          <Loader type='pacman'/>
        </>
        
        
    )
}

export default About;