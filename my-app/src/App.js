import React, { Component } from 'react';
import Tap from './Tap.js';
const axios = require('axios');

class App extends Component {
  constructor() {
      super();
      this.state = {counter: 0, content: 'none'};
  }

  getReqFun(){
    console.log(axios.get('http://localhost:8000/api/books'));
    let givReq=axios.get('http://localhost:8000/api/books');
      return givReq
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
            <button onClick={this.getReqFun().bind(this)}>gg</button>
            <Tap apirequre={App.getReqFun()} />
        </div>
    );
  }
}

export default App;
