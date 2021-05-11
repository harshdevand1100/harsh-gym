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
// import { motion } from "framer-motion"
//
// export const Text = () => {
//     let flag = false
//     setInterval(()=>{
//         flag = !flag
//         console.log(flag)
//     }, 10000,)
//
//
//     return (
//         <motion.div style={{color:'red'}} initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.2 }}>Hello!</motion.div>
//     )
// }

// export default MyComponent
//
// import React from 'react'
// import ScriptTag from 'react-script-tag'
// import '../styles/text.css'
// const Text = () => {
//
//     return(
//         <div style={{border:'5px blue solid'}}>
//             <ScriptTag isHydrating={true} type="text/javascript" src="../scripts/textAnime.js" />
//             <ScriptTag isHydrating={true} type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" />
//             <h1 className="ml4">
//                 <span className="letters letters-1" style={{color:'red'}}>Ready</span>
//                 <span className="letters letters-2">Set</span>
//                 <span className="letters letters-3">Go!</span>
//             </h1>
//         </div>
// )
// }
//
// export default Text
//
// import React, { Component } from 'react'
// import Typical from 'react-typical'
//
// class Text extends Component {
//     render () {
//         return (
//             <div style={{color:'red',size:'100px'}}>
//                 <Typical
//                     steps={['Hello', 1000, 'Hello world!', 500]}
//                     loop={Infinity}
//                     wrapper="p"
//                     style={{color:'red',size:'100px'}}
//                 />
//             </div>
//         )
//     }
// }

// import React, {Component} from 'react'
// let perf =require('../templates/text.html')
//
// class Text extends Component {
//     render(){
//         return (
//             <iframe src={perf }></iframe>   /* like this */
//         );
//     }
// }
//
//
//
//
//
//
// export default Text

import React from 'react'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = (new JSDOM('')).window
const DOMPurify = createDOMPurify(window)

const body = `
<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

html, body{
    height: 100%;
    font-weight: 800;
}

body{
    background: #030321;
    font-family: Arial;
    /*margin: auto;*/
    /*width: 50%;*/
    /*!*border: 3px solid green;*!*/
    /*padding: 10px;*/
             
}

svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 960px;
    height: 300px;
    margin: 0 auto;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
    stroke: #4D163D;
    animation-delay: -1s;
}

.text-copy:nth-child(2){
    stroke: #840037;
    animation-delay: -2s;
}

.text-copy:nth-child(3){
    stroke: #BD0034;
    animation-delay: -3s;
}

.text-copy:nth-child(4){
    stroke: #BD0034;
    animation-delay: -4s;
}

.text-copy:nth-child(5){
    stroke: #FDB731;
    animation-delay: -5s;
}

@keyframes stroke-offset{
    100% {stroke-dashoffset: -35%;}
}
</style>
<svg viewBox="0 0 960 300">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="100%">GET FIT!</text>
  </symbol>

  <g class = "g-ants">
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
  </g>
</svg>
`

// const Text = () => (
//     <div>
//         { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
//     </div>
// )

const Text = () =>{
    return(
      <div
      //     style={{
      //     margin: 'auto',
      //     width: '100%',
      //     border: '3px solid green',
      //     padding: '20px',
      // }}
            dangerouslySetInnerHTML={{__html: body}}/>
    )
}


export default Text