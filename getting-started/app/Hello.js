import React, { Component } from 'react';
import {render} from 'react-dom';

class Hello extends Component {
  render(){
    let place = "world2";
    return (
      <h1>Hello {place}</h1>
    );
  }
}
export default Hello;
// render(<Hello />, document.getElementById('root'));
