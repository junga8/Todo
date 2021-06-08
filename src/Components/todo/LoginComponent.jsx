import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component{

    //in JSX if you want to return multiple elements back you have to put in a div tag 

    constructor(props){
        super(props)

        this.state = {
            
            username : 'Nam' , 
            password : '',
            hasLoginFailed: false, 
            showSuscessMessage: false 



    }

    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
 
}
//get's "event" as an input 
//in react term synthetic event 

//this woild work for any change event // generic handle change 
//this only works when we have same name for the form elements and for the State 
handleChange(event){

    this.setState(
        {
            [event.target.name]  : event.target.value
        }
        )

}


// handleUsernameChange(event){

//     console.log(event.target.name); 
//     this.setState(
//         {[event.target.name] 
//             : event.target.value
//         }
//         )

// }

// handlePasswordChange(event){

//     console.log(event.target.value);
//     this.setState({password: event.target.value})

// }

loginClicked(){
    //in28 , dummy 

    if(this.state.username === 'in28' && this.state.password=== 'dummy'){

        AuthenticationService.registerSuccessfulLogin(this.state.username , this.state.password)

        //to redirect the welcome page if the user id and password match 
        this.props.history.push(`/welcome/${this.state.username}`)
        //this.setState({showSuscessMessage: true})
       // this.setState({hasLoginFailed: false})
    }
    else {
        this.setState({showSuscessMessage: false})
        this.setState({hasLoginFailed: true})
        
    }


    //console.log(this.state)
}


    render () {

        return (
            <div> 
                {/*<ShowInvalidCredintials hasLoginFailed = {this.state.hasLoginFailed }/>
                <ShowLoginSuscessMessage showSuscessMessage= {this.state.showSuscessMessage } />*/}

                <h1> Login</h1>
                <div className = "container"> 
                    {this.state.hasLoginFailed && <div className= "alert alert-warning" >Invalid Credentials</div>}
                    {this.state.showSuscessMessage && <div>Login Susccesful</div>} 
                    User Name : <input type = "text" name = "username" value =  {this.state.username} onChange = {this.handleChange}/>
                    Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
                    <button className = "btn btn=s" onClick = {this.loginClicked}> login </button>
                </div>
            </div>
        )
    }


}

export default LoginComponent 