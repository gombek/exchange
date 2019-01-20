import React from 'react';
import currencies from './currencies';

const getSymbol = currencyCode => currencies[currencyCode]
  ? currencies[currencyCode].symbol
  : '';

const format = (value, currencyCode) => {
  const { decimal_digits } = currencies[currencyCode] || {};
  return value.toFixed(decimal_digits);
};

const Amount = ({value = 0, currency}) => (
  <span>
    <abbr>{getSymbol(currency)}</abbr>
    {format(value, currency)}
  </span>
);

export default Amount;