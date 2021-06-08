import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {

            todo : [
                { id: 1 , description : 'Learn react', done: false, targetDate : new Date()}, 
                { id: 2 , description : 'leqarn  Angular', done: false, targetDate : new Date()}, 
                { id: 3 , description : 'Learn Spring', done: false, targetDate : new Date()}
        
        ]
        }
    }
    render(){
        return (
            <div>  
                <h1> List Todos</h1>
                <div className = "container">  
                    <table className = "table"> 
                        <thead> 
                            <tr>
                         
                                <th>description</th> 
                                <th>Target date</th>
                                <th>Is Completed?</th> 
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