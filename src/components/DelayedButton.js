import React from 'react';

export default function({onDelayedClick,delay}) {
  const handleClick = event => {
    event.persist();
    window.setTimeout(() => {
    onDelayedClick(event);
    }, delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}
