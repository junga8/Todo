import React, {Component} from 'react'
import './App.css'
import './bootstrap.css'
import Counter from './Components/counter/Counter'
import TodoApp from './Components/todo/TodoApp'

import FirstComponent from './Components/learn/FirstComponent'
import SecondComponent from './Components/learn/SecondComponent'
import ThirdComponent from './Components/learn/ThirdComponent'



class App extends Component {
  render(){
  return (
    <div className="App">
  
  {/*<Counter/>*/}
  <TodoApp/> 

    </div>
  );
}
}

// class LearningComponents extends Component{
//   render(){
//     return (
//       <div className="LearningComponents">
//       My Hello World 
//       <FirstComponent></FirstComponent>
//       <SecondComponent></SecondComponent>
//       <ThirdComponent></ThirdComponent>
//       </div>
//     )
//   }
// }


export default App
