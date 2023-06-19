import React from 'react';

const FeedbackOptions = ({ options, onVote }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} type="button" onClick={() => onVote(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
