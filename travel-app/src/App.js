import React, { Component } from 'react';
import './App.css';
import { getFlights, getDepartures, getAirports, getArrivals } from './services/axios_caller';
import { Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Airports from './components/Airports';
import GetFlights from './components/Flights';
import Departures from './components/Departures';
import Arrivals from './components/Arrivals';

class App extends Component {
  constructor() {
    super()

    this.state = {
      airports: [],
      flights: [],
      arrivals: [],
      departures: []

    }

    this.newFunction = this.newFunction.bind(this)
  }

  async componentDidMount() {
    const airports = await getAirports();
    const flights = await getFlights();
    this.setState({
      airports: airports,
      flights: flights
    })
  }

  async newFunction(code) {
    const arrivals = await getArrivals(code);
    const departures = await getDepartures(code);
    this.setState({
      arrivals: arrivals,
      departures: departures
    })
  }




  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/airports">Airports</Link>
          <Link to="/flights">Flight Data</Link>
          <Link to="/arrivals">Arrivals</Link>
          <Link to="/departures">Departures</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Route exact path="/" render={Home}/>
          <Route path="/airports" render={(props) => <Airports {...props} airports={this.state.airports} newFunction={this.newFunction}/>} />
          <Route path="/flights/:icaocode" render={(props) => <GetFlights {...props} flights={this.state.flights} />} />
          <Route path="/arrivals" render={(props) => <Arrivals {...props} arrivals={this.state.arrivals} />} />
          <Route path="/departures" render={(props) => <Departures {...props} departures={this.state.departures} />} />
            <Route path="/about" render={About}/>
        </main>
      </div>
    );
  }
}

export default App;
