import React from 'react';
import Statistics from 'components/statistics';

class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodVote = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralVote = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadVote = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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

    return (
      <div className="FeedbackWidget">
        <section title='FeedbackWidget__title'>Please leave feedback
        <div>
          <button type="button" onClick={this.handleGoodVote}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralVote}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadVote}>
            Bad
          </button>
        </div>
        </section>
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
        <section></section>
      </div>
    );
  }
}

export default FeedbackWidget;
