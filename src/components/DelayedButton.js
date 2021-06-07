import React from 'react';

export default function({onDelayedClick}) {
  const handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}
