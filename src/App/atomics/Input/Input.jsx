import React from 'react';
import './Input.scss';

const onChangeValue = handler => event => {
  if (typeof handler !== 'function') return;
  handler(event.currentTarget.value);
};

const Input = ({ value, onChange}) => (
  <div className="input">
    <input
      className="input__field"
      type="number"
      min={0}
      onChange={onChangeValue(onChange)}
      value={onChange ? value : undefined}
      placeholder={0}
      step=".01"
    />
  </div>
);

export default Input;