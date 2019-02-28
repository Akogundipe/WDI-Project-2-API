import React from 'react';

function GetFlights(props) {
  const tempFlights = '';
  // const tempFlights = props.flights.filter(flight => props.match.params.iatacode === flight.arrival.iataCode || props.match.params.iatacode === flight.departure.iataCode)
  return (
    <section>
      {
        tempFlights.length ?
        <div>
        {tempFlights.map(flight => (
        <div key={flight.flight.number}>
          <h2>Flight number {flight.flight.number}</h2>
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
