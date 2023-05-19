// import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../components/FeedbackForm.module.css';
import Button from './Button';

export default class FeedbackForm extends Component {
  render() {
    console.log(this.props.data);
    // const buttonsElement = this.props.data.map(button => {});
    return (
      <div>
        <h1 className={css.h1}>Please leave feedback</h1>
         {/* <form action="" onClick={this.props.handleClickButton}> 
          <Button name={name}  */}
          {buttonsElement = this.props.data.map(button => {
            <Button name={button}/>}
        //   <button name="bad">Bad</button>
        //   <button name="neutral">Neutral</button>
        //   <button name="good">Good</button>
        // </form>
      </div>
    );
  }
}

// FeedbackForm.propTypes = {
//   this.props: PropTypes.func().isRequired,
// };
