import React, { Component } from 'react';
import './App.css';
import { getPorts } from './services/axios_caller';
import { Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

class App extends Component {

  async componentDidMount() {
    const resp = await getPorts();
    console.log(resp);
  }

  render() {
    return (
      <div className="App">
        Running fine
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Route exact path="/" render={Home}/>
          <Route path="/about" render={About}/>
        </main>
      </div>
    );
  }
}

export default App;
