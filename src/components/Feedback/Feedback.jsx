import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  increaseNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  increaseBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.increaseGood}>
          Good
        </button>
        <button type="button" onClick={this.increaseNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.increaseBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good {this.state.good}</p>
        <p>Neutral {this.state.neutral}</p>
        <p>Bad {this.state.bad}</p>
      </div>
    );
  }
}

export default Feedback;
