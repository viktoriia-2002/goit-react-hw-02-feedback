import React from 'react';
import PropTypes from 'prop-types';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <ul className="FeedbackWidget__results">
        <li className="FeedbackWidget__result">Good: {good}</li>
        <li className="FeedbackWidget__result">Neutral: {neutral}</li>
        <li className="FeedbackWidget__result">Bad: {bad}</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
