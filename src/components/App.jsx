import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import Statistics from './Satistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  countTotalFeedback = () => {
    let count = 0;
    Object.values(this.state).forEach(item => (count += item));
    return count;
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
          {this.countTotalFeedback() ? (
            <Statistics
              state={state}
              countTotalFeedback={this.countTotalFeedback}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
