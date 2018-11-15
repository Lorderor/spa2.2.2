import React, { Component } from 'react';
const axios = require('axios');
import Tap from './Tap.js';
import VariantScreen from './containers/VariantScreen.js';

class App extends Component {
  constructor() {
      super();
      this.state = {counter: 0, content: 'none'};
  }

  apireq=()=>{
    console.log(axios.get('http://localhost:8000/api/books'));
    return axios.get('http://localhost:8000/api/books')
  };



  consLg(){
    this.setState({
        content:'robit'
    });

  }

  handelCounterInc(){
    this.setState({counter: this.state.counter +1});
  }
  render(){
    return (
        <div>
          <div>{this.state.counter}</div>
            <div>{this.state.content}</div>

            <button onClick={this.consLg.bind(this)}>zx</button>
            <button  onClick={this.handelCounterInc.bind(this)}>+1</button>
            <button onClick={this.apiii.bind(this)}>gg</button>
            <Tap apirequre={apireq} />
        </div>
    );
  }
}

export default App;
