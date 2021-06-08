
import { render } from '@testing-library/react';
import React, { Component }  from 'react'; 
import PropTypes from 'prop-types'
import './Counter.css'


class Counter extends Component {

    constructor(){
        super()
        
        this.state = {
            //this represents the Total count 
            counter : 0 

        }

        //binding the method to the class so the state can be accessed by the method 

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this); 

    }

    render(){
        return (
     <div className="Counter">
        
        <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <CounterButton by= {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <CounterButton by= {10}incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <span className= "count"> {this.state.counter}</span> 
        <div>
            <button className= "reset" onClick = {this.reset}>RESET</button>
        </div>
            
     </div>
     //span is used to display info above 
        );
      }


      reset(){
          this.setState(
              {counter : 0 }
          )
      }
      

      increment (by) {
     
      // console.log(`Increment from child - ${by}`)

        this.setState(
            (prevState) => {
            return {counter : prevState.counter + by}
            //  return {counter : this.state.counter + by}
  
        })
    }

    decrement (by){
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by }
            }

        )
    }

}



 class CounterButton extends Component {

    //this is a default constructer even if we comment it out it'll be provided by counterButton by default 

    //constructor(){
        //can't use this without calling the super method 
        //super(); // people tend to forget this while coding 
        // this.state  =  {

        //     counter : 0 
    
        // }
        // //binding the method to the class so the state can be accessed by the method 
        // //binding this state to increment methods so this becomes avilable in the increment method 
        // this.increment = this.increment.bind(this);// binding method to the class (binding this to increment)
        // this.decrement = this.decrement.bind(this);
    
    //}
   
    render ()  {
        //const style = {fontSize : "50px",   padding: "15px 30px"}; 
    return (
        <div className="counter">

            <button onClick = { () => this.props.incrementMethod(this.props.by)}> +{this.props.by} </button>

            <button onClick = {() => this.props.decrementMethod(this.props.by)}> -{this.props.by} </button>
           {/* <span className= "count"> {this.state.counter}</span> */}
            
        </div>
        //this displays the value of the state in the button 
    )

    
    }

//     decrement = () => {
//         //this.state.counter++ ; 
//         this.setState(
//            (prevState) => {
//             return {counter : prevState.counter - this.props.by }
//         });
//         this.props.decrementMethod(this.props.by);
//     }
  
  
// //arrow function prevents the need to do binding in the constrctoer 
//    increment = () => {
//       //this.state.counter++ ; 
//       this.setState(
//          (prevState) => {
//           return {counter : prevState.counter + this.props.by }
//       });
//       this.props.incrementMethod(this.props.by);
//   }
}


  //creating a default prop basically if nothing is given on prop in out app.js

  CounterButton.defaultProps = {
      by : 1 

  }

  //type check on the prop value 
  CounterButton.protoTypes = {

    by : PropTypes.number 

  }

  export default Counter