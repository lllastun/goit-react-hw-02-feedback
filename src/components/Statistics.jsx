import React from 'react';
import css from './Satistics.module.css';
import { StatisticItem } from './StatisticItem';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

const Statistics = ({ state }) => {
  // console.log(state);
  // console.log(state.bad);
  const countTotalFeedback = () => {
    let count = 0;
    Object.values(state).forEach(item => (count += item));
    return count;
  };
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((state.good / countTotalFeedback()) * 100)}% `;
  };

  return (
    <wrap className={css.section}>
      {countTotalFeedback() ? (
        <>
          {Object.entries(state).map(([feedback, count]) => (
            <StatisticItem feedback={feedback} count={count} key={feedback} />
          ))}
          <StatisticItem feedback={'Total'} count={countTotalFeedback()} />
          <StatisticItem
            feedback={'Positive feedback'}
            count={countPositiveFeedbackPercentage()}
          />
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </wrap>
  );
};

export default Statistics;
