import React, { Component } from 'react';
import { getFlights, getDepartures, getAirports, getArrivals } from '../services/axios_caller';
import { Route, Link } from "react-router-dom";

class Airports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ""};

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }





  handleChange(ev) {
    this.setState({
      userInput: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state.userInput);
  }

  render() {
  return (
    <section>
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="airport">Airport </label>
          <input type="text" id="airport" value={this.state.userInput} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
      </form>
    {this.props.airports.map(airport => (
      <div key={airport.airportId}>
        <h2>{airport.nameAirport} Airport</h2>

        <Link to={`/flights/${airport.codeIataAirport}`} onClick={() => this.props.newFunction(airport.codeIataAirport)}><p>Flights</p></Link>
      </div>
    ))}
    </section>
    )
  }
}

export default Airports;
