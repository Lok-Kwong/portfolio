import { useRef, useState } from 'react';
import kirby from './assets/Parasol_Kirby.webp'
import cloud from './assets/cloud.png'
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
  <div style={{ width: '100%', height: '100%', background: '#253237' }}>
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer offset={0} speed={0} factor={3} className='background'/>
      <ParallaxLayer offset={1} speed={1}/>
      <ParallaxLayer offset={2} speed={1}/>

      <ParallaxLayer offset={0} speed={0.05}>  
        <div className='typewritter'>
          <h2>Welcome to Lok's website!</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 0.05, end: 3.5 }} onClick={() => handleClick(count)}>
        <img src={kirby} style={{ width: '15%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.95 }}>
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.95 }}>
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.95 }}>
        <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: .95 }}>
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.95 }}>
        <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

    </Parallax>
  </div>
  );
}

export default App;