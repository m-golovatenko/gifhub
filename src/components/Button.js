import React from 'react';

function Button({ buttonText, type }) {
  return (
    <button className="button" type={type}>
      {buttonText}
    </button>
  );
}

export default Button;
