import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import BGParticle from '../BG-Particles';
import { Player } from '@lottiefiles/react-lottie-player';
import contactAnimation from '../../assets/images/contact-section/contact-animation1.json';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_q6sgye5', 'template_shdkkbm', form.current, '_GnN7NY7Nl-Lmb-9i')
      .then(
        () => {
          alert('Message successfully sent!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <>
      <BGParticle />
      <div className="container contact-page">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1>
              <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
            </h1>
            <p>
              I am open for freelance opportunities—especially ambitious or large projects. Feel free to get in touch using the form below.
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-group">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Message" required />
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
            <div className="contact-info">
              <h3>Or reach me at:</h3>
              <p>Email: <span>dharanidharand28@gmail.com</span></p>
            </div>
          </div>
          <div className="contact-right">
            <Player
              key={letterClass}
              autoplay
              loop
              src={contactAnimation}
              className="lottie"
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
