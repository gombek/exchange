import React from 'react';

import './Button.scss';

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