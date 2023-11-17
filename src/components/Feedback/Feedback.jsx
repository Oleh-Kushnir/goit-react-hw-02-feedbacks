import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseState = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={() => this.increaseState('good')}>
          Good
        </button>
        <button type="button" onClick={() => this.increaseState('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => this.increaseState('bad')}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good {this.state.good}</p>
        <p>Neutral {this.state.neutral}</p>
        <p>Bad {this.state.bad}</p>
        <p>Total {this.countTotalFeedback()} </p>
        <p>Positive Feedback {this.countPositiveFeedbackPercentage()}</p>
      </div>
    );
  }
}

export default Feedback;
