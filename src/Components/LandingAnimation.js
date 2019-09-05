import React from 'react';
import '../App.css';
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring/renderprops'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 16 }px,${y / 16 }px,0)`;
const trans3 = (x, y) => `translate3d(${x / 2 + 10 }px,${y / 2 - 10 }px,0)`;
const trans4 = (x, y) => `translate3d(${x / 16}px,${y / 16 }px,0)`;
const trans5 = (x, y) => `translate3d(${x / 4 - 100}px,${y / 4 - 60}px,0)`;



function LandingAnimation() {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 100, tension: 550, friction: 250 } }));

  const style = useSpring({opacity: 0.8, delay: 2000, config: config.molasses, from:{ opacity: 0}});

  return (
    <React.Fragment>
      
      <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
        <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
        <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
        <animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
        {/* <animated.span config={config.slow} className="greetings" style={style}>
    
          Click to enter!
       
      </animated.span> */}
      </div>
    </React.Fragment>

  )


}


export default LandingAnimation;