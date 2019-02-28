import React from 'react';

function Departures(props) {
  return (
    <section>
    {
      props.departures.length ?
      <div>
    {props.departures.map(departing => (
      <div key={departing.flight.icaoNumber}>
        <h1>{departing.status}</h1>
        <h2>Departing {departing.departure.scheduledTime}</h2>
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
