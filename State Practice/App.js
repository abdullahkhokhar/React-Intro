import React, {Component} from 'react';
import Rando from './Rando'

class App extends Component {
  render(){
    return(
      <div className = "App">
        <Rando maxNum = {7}/>
      </div>
    );
  }
}
