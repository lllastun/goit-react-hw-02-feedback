import FeedbackOptions from './FeedbackOptions';
import { Component } from 'react';
import Statistics from './Statistics';

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
    const listKeys = Object.keys(this.state);
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flexStart',
          textAlign: 'left',
          marginLeft: '20px',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleClickButton={this.handleClickButton}
            data={listKeys}
          />
        </Section>
        <Section title="Statistics">
          <Statistics state={state} />
        </Section>
      </div>
    );
  }
}
