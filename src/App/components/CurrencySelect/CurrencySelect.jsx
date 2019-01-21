import React from 'react';

const CurrencySelect = ({activeCurrency, currencies, onChange}) => (
  <div className="currency-dropdown__label">
    <select className="currency-dropdown__dropdown" onChange={onChange}>
      {currencies.map( currency => (
        <option
          value={currency}
          selected={currency === activeCurrency}
        >
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