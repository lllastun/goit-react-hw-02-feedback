// import css from './Section.module.css'
import React, { Children } from 'react';

const Section = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
