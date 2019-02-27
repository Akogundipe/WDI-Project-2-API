import React, { Component } from 'react';
import './App.css';
import { getFlights, getDepartures, getAirports } from './services/axios_caller';
import { Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import GetAirports from './components/Airports';
import GetFlights from './components/Flights';
import Departures from './components/Departures';

class App extends Component {
  constructor() {
    super()

    this.state = {
      airports: [],
      flights: [],
      departures: []
    }
  }

  async componentDidMount() {
    const airports = await getAirports();
    const flights = await getFlights();
    const departures = await getDepartures();
    this.setState({
      airports: airports,
      flights: flights,
      departures: departures
    })
  }

  render() {
    return (
      <div className="App">
        Running fine
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/airports">Airports</Link>
          <Link to="/flights">Flight Data</Link>
          <Link to="/departures">Departures</Link>
        </nav>
        <main>
          <Route exact path="/" render={Home}/>
          <Route path="/about" render={About}/>
          <Route path="/airports" render={(props) => <GetAirports {...props} airports={this.state.airports} />} />
          <Route path="/flights" render={(props) => <GetFlights {...props} flights={this.state.flights} />} />
          <Route path="/departures" render={(props) => <Departures {...props} departures={this.state.departures} />} />
        </main>
      </div>
    );
  }
}

export default App;
