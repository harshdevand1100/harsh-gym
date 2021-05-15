import React from 'react'
import MetaTags from 'react-meta-tags';
export default function Gallery () {
    return(
    <body style={style1}>
        <html lang="en">
        <head>
            <MetaTags>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
        </head>
        <h1 style={{color:'white',margin:'0 auto',textAlign:'center'}}>Images Gallery of the Gym!</h1>
        <main style={{display:'flex',flexWrap:'wrap',padding:'0 4px'}}>
            <div className="boox"><img src="https://media.giphy.com/media/yBjUwriEYpFyE/giphy.gif"/></div>


            <div className="boox"><img src="https://media.giphy.com/media/KDQ25pahVfwGRvvT9X/giphy.gif"/></div>

            <div className="boox"><img src="https://media.giphy.com/media/vRAvds3J3xUR2/giphy.gif"/></div>

            <div className="boox"><img src="https://media.giphy.com/media/xThuWcH0xUi4HASiHu/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/3mJyfDFH0BqgbdghWJ/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/Ns0wHnqTsqgnu/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/3oriNZNU6VDrDxM7sI/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/VFDeGtRSHswfe/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/9D36O2duRavTsvxV1w/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/zwzcV5A9dI0G4/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/cNI045zz1LHkbuJOdN/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/XbvDIBtz5yXa8/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/3oEjHW5ZfmQsI2rUuk/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/QVaEVY0khKa1PajvbJ/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/h4OjWUS8fYOSQLq51v/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/gfOIhekfg9Mr5hkKAv/giphy.gif"/></div>
            <div className="boox"><img src="https://media.giphy.com/media/9P3fmwZor3yRLONP8v/giphy.gif"/></div>


        </main>

        </html>
    </body>

    )
}

    const style1 = {

            main: {
            marginLeft: '10px',
            backgroundColor: 'rgb(126, 88, 88)',
            backgroundPosition: 'center'

            },

        h1:{
          color:'red',
          fontSize: '3vh',
          margin: '0 auto'
        },
        boox: {
            display: 'block',
            float: 'left',

            width: '40%',
            paddingTop: '100px' ,

            padding: '10px',
            overflow: 'hidden',
        },
            img: {
            width: '100%',
            float: 'left',
            borderRadius: '4px',
        },
        imgHover:{
            transform: 'scale(2,2)'
        }

    }
