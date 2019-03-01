import React from 'react';

function Arrivals(props) {
  return (
    <section>
    {
      props.arrivals.length ?
      <div>
    {props.arrivals.map(arriving => (
      <div key={arriving.flight.icaoNumber}>

        <h2>Arriving {arriving.arrival.scheduledTime}</h2>
        <strong>Airline:</strong>&emsp;<span>{arriving.airline.name}</span>&emsp;<strong>Status:</strong>&emsp;<span>{arriving.status}</span>&emsp;<strong>Terminal:</strong>&emsp;<span>{arriving.arrival.terminal}</span>
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

export default Arrivals;
