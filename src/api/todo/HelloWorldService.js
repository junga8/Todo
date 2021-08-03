import axios from "axios"


class HelloWorldService {

    executehelloWorldService(){

       // console.log ('Executed Service')
        //we are returning a promise down 
       return axios.get('http://localhost:8080/hello-world')
        
    }

    executehelloWorldBeanService(){

        return axios.get('http://localhost:8080/hello-world-bean')
         
     }

     executeHelloWorldPathVariableService(name){
         

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
         
     }
 
    


}

export default new HelloWorldService()
//adding the new keyword gives any package that import this service an instance of the class 