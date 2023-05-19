import FeedbackOptions from './FeedbackOptions';
import { Component } from 'react';
import Statistics from './Statistics';
import css from './App.module.css';

// export const App = () => {
export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  handleClickButton = e => {
    e.preventDefault();
    const { name } = e.target;
    if (!(e.target && e.target.name)) return;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const stateKeys = Object.keys(this.state);
    const state = { ...this.state };
    const Section = ({ title, children }) => (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
    return (
      <div
        style={{
          //   height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flexStart',
          textAlign: 'left',
          //   fontSize: 16,
          //   color: '#010101',
          marginLeft: '20px',
        }}
      >
        {/* <h1 className={css.h1}>Please leave feedback</h1> */}
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            handleClickButton={this.handleClickButton}
            data={stateKeys}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics state={state} />
        </Section>
      </div>
    );
  }
}
