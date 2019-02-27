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

export default Departures;
