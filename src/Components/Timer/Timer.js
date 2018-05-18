import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.timer = null;
    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount = () => {
    this.timer = setInterval(this.updateTimer, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  updateTimer = () => {
    this.setState(({ count }) => {
      return { count: count += 1 };
    });
  };

  render = () => {
    return (
      <div>
        <h2>Seconds so Far:</h2>
        <p>{this.state.count}</p>
      </div>
    );
  };
}

export default Timer;
