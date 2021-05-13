import React from 'react'
import MetaTags from 'react-meta-tags';
// import '../styles/about.css'
export default function Contact () {
    console.log('in about')
    return(

        <div style={{color:'white',textAlign:'center',marginTop:'50px',fontSize:'3vh'}}>
            <MetaTags>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>

            <html lang="en">
            <head>
                <title>Contact Us
                </title>
            </head>
            <body>
            <div className="about-section">
                <div className="inner-container">
                    <h1>Ways to reach</h1>
                    <p className="text">
harsh@harshgym.com +91-7890672232 </p>                    <div className="skills">
                        <span>Harsh Kumar Meena</span>
                        <br></br>
                        <a href='#' style={{color:'blue'}}><span>Twitter</span></a>
                        <br></br>
                        <a href='#' style={{color:'blue'}}><span>Instagram</span></a>

                    </div>
                </div>
            </div>
            </body>
            </html>
        </div>
    )
}
