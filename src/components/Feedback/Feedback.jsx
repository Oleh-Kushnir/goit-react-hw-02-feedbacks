import React from 'react';
import ButtonList from '../Feedback/ButtonList.jsx';
import Statistics from '../Feedback/Statistics.jsx';

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
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const feedbackArr = [good, neutral, bad];
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave feedback</h1>
        <ButtonList
          options={Object.keys(this.state)}
          increaseState={this.increaseState}
        ></ButtonList>
        <h2>Statistics</h2>
        <Statistics
          options={options}
          feedbackArr={feedbackArr}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        ></Statistics>
      </div>
    );
  }
}

export default Feedback;
