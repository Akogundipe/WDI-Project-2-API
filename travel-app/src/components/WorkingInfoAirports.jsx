import React from 'react';

function Airports(props) {
  return (
    <section>
    {props.airports.map(airport => (
      <div key={airport.nameAirport}>
        <h2>{airport.nameAirport} Airport</h2>
        <p></p>
      </div>
    ))}
    </section>
  )
}

export default Airports;
