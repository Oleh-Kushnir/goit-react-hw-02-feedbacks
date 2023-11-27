import React from 'react';
import ButtonList from '../ButtonList/ButtonList.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Section from '../Section/Section.jsx';
import Notification from '../Notificationt/Notification.jsx';

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
              />
            </Section>
            <Section title="Statistics">
              {this.countTotalFeedback() === 0 ? (
                <Notification message="There is no feedback" />
              ) : (
                <Statistics
                  options={options}
                  feedbackArr={feedbackArr}
                  total={totalFeedback}
                  positivePercentage={positivePercentage}
                />
              )}
            </Section>
          </FeedbackMain>
        </GradientBorder>
      </AppContainer>
    );
  }
}

export default Feedback;
