import React from 'react';
import ButtonList from '../Feedback/ButtonList.jsx';
import Statistics from '../Feedback/Statistics.jsx';
import Section from '../Feedback/Section.jsx';
import Notification from '../Feedback/Notification.jsx';

import {
  FeedbackMain,
  AppContainer,
  GradientBorder,
} from '../Feedback/Feedback.module.jsx';

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
      <AppContainer>
        <GradientBorder>
          <FeedbackMain>
            <Section title="Please leave feedback">
              <ButtonList
                options={Object.keys(this.state)}
                increaseState={this.increaseState}
              ></ButtonList>
            </Section>
            <Section title="Statistics">
              {this.countTotalFeedback() === 0 ? (
                <Notification message="There is no feedback"></Notification>
              ) : (
                <Statistics
                  options={options}
                  feedbackArr={feedbackArr}
                  total={totalFeedback}
                  positivePercentage={positivePercentage}
                ></Statistics>
              )}
            </Section>
          </FeedbackMain>
        </GradientBorder>
      </AppContainer>
    );
  }
}

export default Feedback;
