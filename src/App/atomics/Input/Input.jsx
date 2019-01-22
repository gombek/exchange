import React from 'react';

const onChangeValue = handler => event => {
  if (typeof handler !== 'function') return;
  handler(event.currentTarget.value);
};

const Input = ({ prefix, value, onChange}) => (
  <div className="input">
    <span className="input__prefix">
      {prefix}
    </span>
    <input
      className="input__field"
      type="number"
      min={0}
      onChange={onChangeValue(onChange)}
      value={onChange ? value : undefined}
      placeholder={0}
    />
  </div>
);

export default Input;