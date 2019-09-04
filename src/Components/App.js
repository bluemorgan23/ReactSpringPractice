import React, { Component } from 'react';
import  LandingAnimation from './LandingAnimation.js';
import Counter from "./counter";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import useRouter from './useRouter'
import '../App.css';

function App() {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'}
  });


    
  return transitions.map(({ item, props, key}) => (
    <animated.div className="mainContainer" key={key} style={props}>
      <Switch location={item}>
        <Route exact path="/" component={A} />
        <Route path="/b" component={B} />
      </Switch>
    </animated.div>
  ))

  
}

const A = () =>  (
  <Link to="/b">
    {LandingAnimation()}
  </Link>
)

const B = () => (
  <div style={{ background: 'lightblue' }}>
  {Counter()}
</div>
)


export default App;
