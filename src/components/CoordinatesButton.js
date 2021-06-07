import React from 'react';

export default function ({onReceiveCoordinates}){
  const handleClick = event => {
   onReceiveCoordinates([event.clientX, event.clientY]);
  };


    return <button onClick={handleClick}>Coords</button>;
  
}
