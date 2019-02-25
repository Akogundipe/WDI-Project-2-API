import React, { Component } from 'react';
import './App.css';
import { getPorts } from './services/axios_caller';

class App extends Component {

  async componentDidMount() {
    const resp = await getPorts();
    console.log(resp);
  }

  render() {
    return (
      <div className="App">
        Running fine
      </div>
    );
  }
}

export default App;
