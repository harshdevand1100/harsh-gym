import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function Text() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: '20',color:'red' });
    return <animated.div style={props}><h1>I will fade in</h1></animated.div>
}

