import React, {Component} from 'react'
class TextTwo extends Component{

    componentDidUpdate(){
        this.createRef().test.innerHTML = "Hello";
    }

    render(){
        return (
            <div contentEditable='true' ref='test'></div>
        )
    }
}


export default TextTwo