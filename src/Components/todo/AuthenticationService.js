class AuthenticationService {

 
    registerSuccessfulLogin(username , password){

        console.log('Register Suscessful login')
        //this is how u put value in session storage 
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return false
        return true 
    }



    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return ''
        return user 
    }




}


//exporting this makes this class avilable to todoAPP.jsx
//using the new keyword creates the new instance every time 
export default new AuthenticationService()