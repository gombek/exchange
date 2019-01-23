import React from 'react';

import './CurrencySelect.scss';

const onChangeValue = handler => event => {
  if (typeof handler !== 'function') return;
  handler(event.currentTarget.value);
};

const CurrencySelect = ({activeCurrency, currencies, onChange}) => (
  <div className="currency-select">
    <select
      className="currency-select__native"
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
    <span className="currency-select__label">
      {activeCurrency}
    </span>
  </div>
);

export default CurrencySelect;