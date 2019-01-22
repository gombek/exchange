import React from 'react';

const Button = ({ onClick, children}) => (
  <button
    className="button"
    onClick={onClick}
  >
    <span className="button__label">
      {children}
    </span>
  </button>
);

export default Button;