import React from 'react';

function GetDescription(props) {
  const first =props.data[0]
  return (
    <div>
    {JSON.stringify(first)}
    </div>
  )
}

export default GetDescription;
