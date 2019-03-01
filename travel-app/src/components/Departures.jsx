import React from 'react';

function Departures(props) {
  return (
    <section>
    {
      props.departures.length ?
      <div>
    {props.departures.map(departing => (
      <div key={departing.flight.icaoNumber}>

        <h2>Departing {departing.departure.scheduledTime}</h2>
        <strong>Airline:</strong>&emsp;<span>{departing.airline.name}</span>&emsp;<strong>Status:</strong>&emsp;<span>{departing.status}</span>&emsp;<strong>Terminal:</strong>&emsp;<span>{departing.departure.terminal}</span>
        <p></p>
      </div>
    ))}
    </div>
    :
    <div>No flight data</div>
    }
    </section>
  )
}

export default Departures;
