import React from 'react';

class Airports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  .filter(word => {word.includes(this.state.userInput)})

  handleChange = (ev) => {
    this.setState({
      userInput: ev.target.value
    })
    this.props.onChange(event.target.value)
  }

  render() {
  return (
    <section>
    {props.airports.map(airport => (
      <div key={airport.nameAirport}>
        <h2>{airport.nameAirport} Airport</h2>
        <form>
        <label htmlFor="airport">Airport </label>
        <input type="text" id="airport"
          value={this.state.userInput}
          onChange={this.handleChange}/>
          </form>
      </div>
    ))}
    </section>
    )
  }
}

export default Airports;

Arrivals
import React from 'react';

function Arrivals(props) {
  return (
    <section>
    {props.arrivals.map(arriving => (
      <div key={arriving.arrival.scheduledTime}>
        <h2>Arriving {arriving.arrival.scheduledTime}</h2>
        <p></p>
      </div>
    ))}
    </section>
  )
}



export default Arrivals;

import React from 'react';

function Departures(props) {
  return (
    <section>
    {props.departures.map(departing => (
      <div key={departing.departure.scheduledTime}>
        <h2>Departing {departing.departure.scheduledTime}</h2>
        <p></p>
      </div>
    ))}
    </section>
  )
}
