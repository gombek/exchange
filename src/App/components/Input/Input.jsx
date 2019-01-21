import React from 'react';

const Input = ({ prefix, onChange}) => (
  <div className="input">
    <span className="input__prefix">
      {prefix}
    </span>
    <input
      className="input__field"
      type="number"
      min={0}
      onChange={onChange}
    />
  </div>
);

export default Input;