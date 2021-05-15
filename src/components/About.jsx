import React from 'react'
import MetaTags from 'react-meta-tags';
// import '../styles/about.css'
export default function About () {
    console.log('in about')
    return(

        <div style={{color:'white',textAlign:'center',marginTop:'50px',fontSize:'3vh'}}>
                <MetaTags>
                        <meta charSet="UTF-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </MetaTags>

                        <html lang="en">
            <head>
                        <title>About us
                        </title>
            </head>
            <body>
            <div className="about-section">
                <div className="inner-container">
                    <h1>About Us</h1>
                    <p className="text">
                        Gym and Fitness was founded in 2021 as a family owned and operated business.<br></br>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs</p>
                    <div className="skills">
                        <span>Harsh Kumar Meena</span>

                    </div>
                </div>
            </div>
            </body>
            </html>
        </div>
    )
}

