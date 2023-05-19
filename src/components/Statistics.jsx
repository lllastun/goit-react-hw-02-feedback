import React from 'react';
import css from './Satistics.module.css';
import { StatisticItem } from './StatisticItem';
import FeedbackForm from './FeedbackForm';

const Statistics = ({ state }) => {
  // console.log(state);
  // console.log(state.bad);

  return (
    <section className={css.section}>
      Statistics
      {Object.entries(state).map(([feedback, count]) => (
        <StatisticItem feedback={feedback} count={count} key={feedback} />
      ))}
    </section>
  );
};

export default Statistics;

// {Object.entries(state).map(([key, value]) => (
//   <li key={key}>
//     {key}: {value}
