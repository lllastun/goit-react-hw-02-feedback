import React from 'react';
import css from './StatisticItem.module.css';

export const StatisticItem = ({ feedback, count }) => {
  return (
    <p className={css.item}>
      <span className={css.feedback}> {feedback}: </span> <span> {count}</span>{' '}
    </p>
  );
};
