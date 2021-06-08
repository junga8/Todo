import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class WelcomeComponent extends Component{

    constructor(props) {

        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
    }
    render(){
        return (
            <>
            <h1> Welcome! </h1>
        
        <div classname = "container"> Welcome {this.props.match.params.name}. 
        You can manage your Todos <Link to = "/todos"> Here</Link>
        </div>


        <div classname = "container"> 

        Click here to get a Custoimize welcome message. 

        <button onClick = {this.retriveWelcomeMessage} className = "btn btn-success"> Get Welcome Message</button>
        </div> 

        
        </>)
    }

    retriveWelcomeMessage () {
        console.log('retribe clickedf');
    }
}


export default WelcomeComponent