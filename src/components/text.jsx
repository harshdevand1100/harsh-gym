// import React  from "react";
// import TextAnimation, { presets } from "react-animate-text";
//
// const TEXTS = [
//     "Harder",
//     "Leaner",
//     "Stronger",
//     "Faster"
// ];
//
// const Text = () => {
//
//     return (
//         <TextAnimation>
//             <main>
//                 <h1>This is header</h1>
//                 <span style={{ color: 'red' }}>Exciting styled text</span>
//                 <div>
//                     <div>
//                         <div>
//                             <span>Man it is nested!</span>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </TextAnimation>
//     );
// };
//
// export default Text


// import { useSpring, animated } from 'react-spring'
import { useTransition, animated } from 'react-spring'
import {useState} from 'react-dom'
// import React from 'react';
// import AnimateText from '@moxy/react-animate-text';
//
// const text = (props) => (
//     <div className="container" style={{color:'red'}}>
//         <AnimateText initialDelay={ 0.2 } wordDelay={ 0.2 }>
//             Lorem ipsum dolor sit amet.
//         </AnimateText>
//     </div>
// );
//
// export default text;
import { motion } from "framer-motion"



export const MyComponent = () => {
    let flag = true
    setInterval(()=>{
        flag = !flag
        console.log(flag)
    }, 500,)


    return (
        <motion.div style={{color:'red'}} animate={{opacity: flag ? 1 : 0}}>Hello!</motion.div>
    )
}

export default MyComponent


