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
