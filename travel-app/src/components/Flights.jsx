import React from 'react';

function GetFlights(props) {
  return (
    <section>
    {props.flights.map(flight => (
      <div key={flight.flight.number}>
        <h2>Flight number {flight.flight.number}</h2>
        <p></p>
      </div>
    ))}
    </section>
  )
}

export default GetFlights;
