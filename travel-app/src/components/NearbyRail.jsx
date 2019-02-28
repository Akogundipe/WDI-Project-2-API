import React from 'react';

function GetBuses(props) {
  const first = (props.data[0] === undefined) ? null : props.data[0].departure.scheduledTime
  return (
    <section>
    {JSON.stringify(first)}
    </section>
  )
}

export default GetBuses;

check if its the right code for an airport
