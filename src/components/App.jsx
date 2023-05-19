import FeedbackForm from './FeedbackForm';
import { Component } from 'react';
import Statistics from './Statistics';

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
      // console.log(prevState);
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const stateKeys = Object.keys(this.state);
    const state = { ...this.state };
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <FeedbackForm
          handleClickButton={this.handleClickButton}
          data={stateKeys}
        />
        <Statistics state={state} />
      </div>
    );
  }
}
