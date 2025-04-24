import { useRef, useState } from 'react';
import kirby from './assets/Parasol_Kirby.webp'
import cloud from './assets/cloud.png'
// import kirby_star from './assets/kirby_star.gif'
import greensky from './assets/GreenSky-icon.jpg'
import ncr from './assets/NCR-icon.png'
import mckesson from './assets/Mck-icon.jpg'

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const parallax = useRef<IParallax>(null!)
  const [count, setCount] = useState(0);

  const handleClick = (count: number) => {
    if (count == 2) setCount(0);
    else setCount(count => count + 1);
    parallax.current.scrollTo(count)
  }

  return (
    <div>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={0} factor={3} className='background' />
        <ParallaxLayer offset={1} speed={1} />
        <ParallaxLayer offset={2} speed={1} />

        <ParallaxLayer offset={0} speed={0.05}>
          <section className='typewritter'>
            <h2>Welcome to Lok's website!</h2>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={0.5} style={{ opacity: 0.95 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '30%' }} />
          <img src={cloud} style={{ display: 'block', width: '30%', marginLeft: '70%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.05, end: 3.5 }} onClick={() => handleClick(count)}>
          <img src={kirby} style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={0.8} style={{ opacity: 0.95 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '85%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.05}>
          <section className='description'>
            <h2 style={{ marginTop: '8vw' }}>Hey there, I'm Lok Kwong, currently a software engineer for Mckesson.
              I graduated from the University of Georgia with a bachelors in Computer Science.
            </h2>
            <h2> Outside of programming, I enjoy traveling and playing basketball. I'm the 24-25 NBA Fantasy champ amongst my group of friends.
              I also love to watch, learn, and brainrot to various movies, tv shows, tik-toks, and other media.
            </h2>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1.35} speed={0.5} style={{ opacity: 0.95 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '67%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={0.5} style={{ opacity: 0.95 }}>
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '67%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.05}>
          <section className='work'>
            <div className='work-section'>
              <div className='work-description'>
                <h4> 2020</h4>
                <img src={greensky} className='work-image' />
              </div>
              <div className='work-description'>
                <img src={ncr} className='work-image' />
              </div>
              <div className='work-description'>
                <img src={mckesson} className='work-image' />
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={2.1} speed={0.2} style={{ opacity: 0.95 }}>
        <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer> */}
        {/* 
      <ParallaxLayer offset={1.8} speed={-0.1} style={{ opacity: .95 }}>
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer> */}

      </Parallax>
    </div>
  );
}

export default App;