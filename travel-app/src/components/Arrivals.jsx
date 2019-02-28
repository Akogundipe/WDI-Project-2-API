import React from 'react';

function Arrivals(props) {
  return (
    <section>
    {
      props.arrivals.length ?
      <div>
    {props.arrivals.map(arriving => (
      <div key={arriving.flight.icaoNumber}>
        <h1>{arriving.status}</h1>
        <h2>Arriving {arriving.arrival.scheduledTime}</h2>
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
