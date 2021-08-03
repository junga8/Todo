import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import TodoDataService  from '../../api/todo/TodoDataService'



class ListTodosComponent extends Component{
    constructor(props){

        console.log('Constructor')
        super(props)
        this.state = {

            todo : [], message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
    }
    //try not to do the initial api call in the constructer bc the state won't initilize untill the api call is completed in the constructor 

    //is called immediately after a component is mounted 
    componentDidMount(){

        console.log('component did mount')

        this.refreshTodos();
    
         console.log(this.state)

    }


    //same logic as component did mount we doing this cuz we need to re render our page to refresh our tods as we delete em 
    refreshTodos(){

        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retriveAllTodos(username)
            .then(
                response => {


                    this.setState({
                        todo : response.data
                    })
                }
            )


    }

    componentWillUnmount(){
        console.log('component will unmount ')
    }

    deleteTodoClicked(id){

        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id +"  " + username);

        TodoDataService.deletTodo(username, id)
        .then (
            response => {

                this.setState({
                    message : `Delete of todo ${id} Suscessful`
                })
                this.refreshTodos()
            }
        )


    }


    updateTodoClicked(id){

        console.log('update'  + id )
        //redirecting from one component to another 

        this.props.history.push(`/todos/${id}`)



        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id +"  " + username);

        // TodoDataService.deletTodo(username, id)
        // .then (
        //     response => {

        //         this.setState({
        //             message : `Delete of todo ${id} Suscessful`
        //         })
        //         this.refreshTodos()
        //     }
        // )


    }

    //shouldComponentUpdate is an oppurtunity react provides u to improve the performance of your application 
    //if you return true the render methods gets call at the end meaning our states can change one more time depending on the app logic 
    //true or false depend on the logic of our app 
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate ')
        console.log( nextProps)
        console.log(nextState)
        return true 

    }



    render(){


        console.log('render')
        return (
            <div>  
                <h1> List Todos</h1>
                {this.state.message && <div className = "alert alert-success"> {this.state.message}</div>}
                <div className = "container">  
                    <table className = "table"> 
                        <thead> 
                            <tr>
                         
                                <th>description</th> 
                                <th>Is Completed?</th> 
                                <th>Target date</th>
                                <th> Update</th>
                                <th> Delete</th>
  
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todo.map(
                                todo => 
                                        <tr key = {todo.id}>
                                            
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td> <button className = "btn btn-success" onClick = {() => this.updateTodoClicked(todo.id)}> Update </button></td>
                                            <td> <button className = "btn btn-warning" onClick = {() => this.deleteTodoClicked(todo.id)}> Delete </button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
         )}
}

export default ListTodosComponent