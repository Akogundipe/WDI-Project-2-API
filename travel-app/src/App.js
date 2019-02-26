import React, { Component } from 'react';
import './App.css';
import { getPorts } from './services/axios_caller';
import { Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import GetDescription from './components/Description'

class App extends Component {
  constructor() {
    super()

    this.state = {
      airports: []
    }
  }

  async componentDidMount() {
    const airports = await getPorts();
    this.setState({
      airports: airports
    })
  }

  render() {
    return (
      <div className="App">
        Running fine
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/description">Airport Data</Link>
        </nav>
        <main>
          <Route exact path="/" render={Home}/>
          <Route path="/about" render={About}/>
          <Route path="/description" render={(props) => <GetDescription {...props} data={this.state.airports} />} />
        </main>
      </div>
    );
  }
}

export default App;
