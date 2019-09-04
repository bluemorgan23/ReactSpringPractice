import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring'




function Counter() {
    // const props = useSpring({ number: 10, from: {number: 0}});

    // return (
    //     <animated.div style={props}>
    //         <animated.span>
    //         {props.number}
    //         </animated.span>
    //     </animated.div>
    // )
    const props = useSpring({
        opacity: 1,
        color: 'white',
        from: { opacity: 0 },
        delay: '2000'
    })

    return <animated.div
                style={props}>
                    This text faded in
                </animated.div>
}

export default Counter;