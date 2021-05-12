import React,{useEffect} from 'react'
import {Link} from "react-router-dom";

export default function Equipment (props) {
    console.log(props.match)
    //
    // useEffect(()=>{
    //     fetch(`api.example.com/posts/${props.match.params.id}`)
    // },props.match.params.id)

    return(
        <div>
            <h1 style={{color:'white'}}>In equipments</h1>
            {/*<Link to=`${props.match.params.id}` >Dumbell</Link>*/}

</div>

    )
}