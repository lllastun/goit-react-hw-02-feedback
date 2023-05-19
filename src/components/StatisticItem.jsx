import React from 'react';

export const StatisticItem = ({ feedback, count }) => {
  return (
    <p>
      <span> {feedback}: </span> <span> {count}</span>{' '}
    </p>
  );
};
{
  /* <StatisticItem name={feedback} count={count} key={feedback} /> */
}
