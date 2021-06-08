
import React, {Component} from 'react';

//Class Component : have few additional features than function compoenent eg: (state)
//to create a Component
//1. extend Copmonent, implement render method and include the component 
//as part of the root component(just call component in your App component)


class FirstComponent extends Component {
    render(){
    return (
      <div className="firstComponent">
      First Component
      </div>
    );
  }
  }

  export default FirstComponent;