// import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../components/FeedbackForm.module.css';
import Button from './Button';

export default class FeedbackForm extends Component {
  render() {
    return (
      <div>
        <h1 className={css.h1}>Please leave feedback</h1>
        {this.props.data.map(item => (
          <Button
            name={item}
            handleClick={this.props.handleClickButton}
            key={item}
          />
        ))}
      </div>
    );
  }
}

// FeedbackForm.propTypes = {
//   this.props: PropTypes.func().isRequired,
// };
