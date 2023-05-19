import React from 'react';

const Button = props => {
  const { name, handleClick } = props;
  return (
    <button name={name} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
