import React from 'react';

function GetFlights(props) {
  //const tempFlights = '';
   //const tempFlights = props.flights.filter(flight => props.match.params.icaoCode === flight.arrival.icaoCode || props.match.params.icaoCode === flight.departure.icaoCode)
  return (
    <section>
      {
        props.flights.length ?
        <div>
        {props.flights.map(flight => (
        <div key={flight.flight.icaoNumber}>
          <h2>Flight number {flight.flight.icaoNumber}</h2>
          <strong>Status:</strong>&emsp;<span>{flight.status}</span>
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

export default GetFlights;
