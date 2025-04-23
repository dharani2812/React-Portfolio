import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import BGParticle from '../BG-Particles'
import { Player } from '@lottiefiles/react-lottie-player'
import contactAnimation from '../../assets/images/contact-section/contact-animation1.json'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Fix: Dispatch resize event *after* layout settles
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_q6sgye5',
        'template_shdkkbm',
        form.current,
        '_GnN7NY7Nl-Lmb-9i'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          form.current.reset()
        },
        (error) => {
          console.error('EmailJS Error:', error)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <BGParticle />
      <div className="container contact-page">
        <div className="left-content">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities—especially ambitious or large projects.
              However, if you have any other requests or questions, feel free to contact me using the form below.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email" required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <div className="right-content">
          <Player
            key={letterClass} // Triggers rerender on letter animation change
            autoplay
            loop
            src={contactAnimation}
            className="lottie"
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
