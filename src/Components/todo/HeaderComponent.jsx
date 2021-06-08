import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        //console.log(isUserLoggedIn);
        return(

           <header> 
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a href ="http://www.in28minutes.com" className = "navbar-brand"> in28Minutes</a> </div>
                    <ul className = "navbar-nav">
                        {/* Links will only b shown if the user have logged in */}
                          { isUserLoggedIn && <li className = "nav-link"> <Link className ="nav-link" to = "./welcome"> Home </Link></li>}
                           {isUserLoggedIn && <li  className = "nav-link"> <Link className ="nav-link" to = "./todos"> Todos </Link></li>}
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                          { !isUserLoggedIn && <li  className = "nav-link"> <Link className ="nav-link"to = "./login"> Login </Link> </li>}
                           {/* onClick ={AuthenticationServic.logout} we are maping an event here this is not a method call if it was a method call b .logout()*/}
                           {isUserLoggedIn && <li  className = "nav-link"> <Link className ="nav-link" to = "./logout"  onClick ={AuthenticationService.logout}> Logout </Link></li>}
                    </ul>
               </nav>
           </header>
        )
        
    }
}
//export default HeaderComponent

export default withRouter(HeaderComponent);



