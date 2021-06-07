import React from 'react';

export default function (){
  const handleClick = event => {
   onReceiveCoordinates([event.clientX, event.clientY]);
  };


    return <button onClick={this.handleClick}>Coords</button>;
  
}
