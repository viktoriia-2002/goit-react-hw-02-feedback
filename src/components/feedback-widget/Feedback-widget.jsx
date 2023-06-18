import React from 'react';
import Statistics from 'components/statistics';


class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodVote = () => {
    console.log("handleGoodVote")

    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralVote = () => {};

  handleBadVote = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="FeedbackWidget">
        <h2 className="FeedbackWidget__title">Please leave feedback</h2>
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

        <h2 className="FeedbackWidget__title">Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default FeedbackWidget;
