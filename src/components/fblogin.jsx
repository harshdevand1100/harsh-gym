import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''

    }
    let this.valuesOne = {}
    responseFacebook = (response) => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        }, () => {
            sessionStorage.setItem(state, this.state)
        })

    }
     // const var = sessionStorage.getItem(state)
    componentClicked = () => console.log("clicked!",state.userID)

    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            )

        }
        else{
            fbContent = (
                <div>
                    <h1>Login</h1>
                    <FacebookLogin
                        appId="278572830607707"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                    />
                </div>

            )
        }

        return(
            <div>
                {fbContent}
            </div>
        )
    }
}



export default Facebook