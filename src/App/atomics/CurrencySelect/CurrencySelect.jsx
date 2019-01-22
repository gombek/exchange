import React from 'react';

const onChangeValue = handler => event => {
  if (typeof handler !== 'function') return;
  handler(event.currentTarget.value);
};

const CurrencySelect = ({activeCurrency, currencies, onChange}) => (
  <div className="currency-dropdown__label">
    <select
      className="currency-dropdown__dropdown"
      onChange={onChangeValue(onChange)}
      value={onChange ? activeCurrency : undefined}
      defaultValue={onChange ? undefined : activeCurrency}
    >
      {currencies.map( currency => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
    <span className="currency-dropdown__label">
      {activeCurrency}
    </span>
  </div>
);

export default CurrencySelect;