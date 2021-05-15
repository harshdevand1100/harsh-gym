// import React, { useState, useEffect } from 'react'
// export default function Calculator () {
//     return(
//         <div>
//             <h1 style={{color:'white',margin:'0 auto',textAlign:'center'}}>Fitness Calculator!</h1>
//             <form>
//                 <label htmlFor="title">Title: </label>
//                 <input
//                     type="text"
//                     name="title"
//                 />
//                 <br/>
//                 <label htmlFor="content">Post Content: </label>
//                 <textarea
//                     name="content"
//                 >
//       </textarea>
//                 <br/>
//                 <input
//                     type="submit"
//                 />
//             </form>
//         </div>
//     )
// }

import React, { useState } from "react";

export default function Calculator () {
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [flag,setFlag] = useState(false)
    const [bmi,setBmi] = useState(0)
    const [obese,setObese] = useState('NORMAL')

    function onSubmit(e) {
        e.preventDefault()
        // console.log(text,amount)

        //console.log('form submitted')
        //console.log(height,weight)

        onWeight()
    }
        function onWeight(){
            setFlag(true)
            const bmiVar = weight/((height/100)^2)
            console.log(bmiVar)
            setBmi(bmiVar)

            if(bmi>=25){
                setObese('OBESE')
            }
            else if(bmi<20){
                setObese('UNDERWEIGHT')
            }
            console.log(obese)
    }


    return (
        <div style={{
            margin:'auto',
            width:'50%',
            color:'white'}}>
            <h1 style={{color:'white'}}>Fitness Calculator!</h1>
            <h2>Get to know how fit you are!</h2>
            {/*<form >*/}
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="weight">Enter weight in KGs!</label>
                    <br></br>
                    <input type="number"
                           value={weight}
                           onChange={(e) => setWeight(e.target.value)}
                           placeholder="Enter weight..."/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Enter height in centimetres!</label>
                    <br></br>
                    <input
                        type="number"
                        defaultValue={height}
                        placeholder="Enter height..."
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <button className="btn" type="submit">Get my fitness level!</button>
            </form>
            {flag?<h1>Hey there, you are {obese} weight, kindly join Harsh's Gym and get Fit!</h1>:<></>}
        </div>
    )
}

