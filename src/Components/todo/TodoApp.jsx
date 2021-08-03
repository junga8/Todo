import React , {Component} from 'react'
import {BrowserRouter as Router , Route, Switch, withRouter } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import  ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from '../../api/todo/TodoComponent'
  

   

class TodoApp extends Component {

    render(){
        return (
            <div className = "TodoApp">

                <Router> 
                    <>  
                    <HeaderComponent/>
                        <Switch> 
                            <Route path = "/" exact  component = {LoginComponent}/>   
                            <Route path = "/login" component = {LoginComponent}/>
                            <AuthenticatedRoute path = "/welcome/:name" component = {WelcomeComponent}/>
                            <AuthenticatedRoute path = "/todos/:id" component = {TodoComponent}/>
                            <AuthenticatedRoute path = "/todos" component = {ListTodosComponent}/> 
                            <AuthenticatedRoute path = "/logout" component = {LogoutComponent}/>
                          
                            <Route component = {ErrorComponent}/> 
                        </Switch>
                     <FooterComponent/>
                    </>
                </Router>

              {/* <LoginComponent/>
               <WelcomeComponent/>*/}
               

            </div>
        )
    }
}
//autheincated rout basicall means only authenticated users can gain acess menaing if email pass match 


//this makes the HeaderCompondnent dynaic 
//export default withRouter(HeaderComponent);




// function ShowInvalidCredintials(props) {
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null 
        
// }

// function ShowLoginSuscessMessage(props) {
//     if(props.showSuscessMessage){
//         return <div>Login Susccesful</div>
//     }
//     return null 
        
// }

export default TodoApp  