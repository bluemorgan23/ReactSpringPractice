import React, { Component } from 'react';
import '../App.css';
import { useSpring, animated } from 'react-spring';
import Counter from './counter'

const calc = (x, y) => [ x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 155}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 4 + 100 }px,${y / 4 - 100 }px,0)`;
const trans4 = (x, y) => `translate3d(${x / 10 }px,${y / 10 + 100 }px,0)`;
const trans5 = (x, y) => `translate3d(${x / 4 - 100 }px,${y / 4 - 60 }px,0)`;

// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`

function App() {

const [props, set] = useSpring(() => ({xy: [0,0], config: { mass: 10, tension: 550, friction: 140}}));

return (
  <div className="container" onMouseMove={({ clientX: x, clientY: y}) => set({ xy: calc(x, y) })}>
    <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
      <animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
  </div>
)


  // const props = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -1000 } })

  // return (

  //   <animated.div style={props}>

  //     {/* <div className="App" style={props}> */}
  //     <div>
  //       <header className="App-header">
  //         {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //         <Counter />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //               </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //               </a>

  //               <div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
  //       </header>
  //     </div>
  //     {/* </div> */}
  //   </animated.div>

  // );


}


export default App;
