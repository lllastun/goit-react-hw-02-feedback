// import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from './Button';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div>
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
