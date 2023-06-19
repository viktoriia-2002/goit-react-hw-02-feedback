import React from 'react';
import Statistics from 'components/statistics';
import FeedbackOptions from 'components/feedbackOptions';
import Notification from 'components/notification';


class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hasFeedback = false;

  handleVote = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
    this.hasFeedback = true;
  };

  resetFeedback = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    this.hasFeedback = false;
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = Math.round((good / totalFeedback) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const { hasFeedback } = this;

    return (
      <div className="FeedbackWidget">
        <section>
          <h2 className="FeedbackWidget__title">Please leave feedback</h2>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onVote={this.handleVote}
          />
        </section>
        {hasFeedback ? (
          <section>
            <h2 className="FeedbackWidget__title">Statistics</h2>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          </section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default FeedbackWidget;
