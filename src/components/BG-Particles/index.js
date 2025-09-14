import { useCallback } from 'react'
import './index.scss'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const BGParticle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: '#0000',
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                area: 1200, // bigger value = more evenly spread on large screens
              },
            },

            color: {
              value: ['#00d1ff', '#00ffa2', '#fff'], // Techy colors
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            size: {
              value: { min: 1, max: 4 },
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'out',
              },
              parallax: {
                enable: true,
                force: 40,
                smooth: 20,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
}
export default BGParticle
