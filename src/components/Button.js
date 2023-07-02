import React from 'react';

function Button({ buttonText, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Button;
