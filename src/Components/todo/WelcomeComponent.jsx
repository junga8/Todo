import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'


class WelcomeComponent extends Component{

    constructor(props) {

        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)

        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleErrror = this.handleErrror.bind(this)
    }
    render(){
        return (
            <>
            <h1> Welcome! </h1>
        
        <div className = "container"> Welcome {this.props.match.params.name}. 
        You can manage your Todos <Link to = "/todos"> Here</Link>
        </div>


        <div className = "container"> 

        Click here to get a Custoimize welcome message. 

        <button onClick = {this.retriveWelcomeMessage} className = "btn btn-success"> Get Welcome Message</button>
        </div> 

        <div className = "container"> 

        {this.state.welcomeMessage}

        </div>

        
        </>)
    }

    retriveWelcomeMessage () {
        // HelloWorldService.executehelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
       // .catch()

    //    HelloWorldService.executehelloWorldBeanService()
    //    .then(response => this.handleSuccessfulResponse(response))
    //.catch to map the error 

    HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
    .then(response => this.handleSuccessfulResponse(response))
    .catch(error => this.handleErrror(error))
    }

    handleSuccessfulResponse(response){


        console.log(response)
       this.setState ({
       
       welcomeMessage : response.data.message

       })

    }


    handleErrror(error){


        console.log(error.response.data.message)
       this.setState ({
       
       welcomeMessage : error.response.data.message

       })

    }
}




export default WelcomeComponent

