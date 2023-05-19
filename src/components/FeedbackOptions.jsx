// import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../components/FeedbackOptions.module.css';
import Button from './Button';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.wrap}>
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
