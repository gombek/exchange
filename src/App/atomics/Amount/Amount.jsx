import React from 'react';
import currencies from './currencies';

const getSymbol = currencyCode => currencies[currencyCode]
  ? currencies[currencyCode].symbol
  : '';

const getDigits = currencyCode => currencies[currencyCode]
  ? currencies[currencyCode].decimal_digits
  : 0;

const format = (value, currency, digits) => value.toFixed(
  digits === undefined
    ? getDigits(currency)
    : digits
);

const Amount = ({currency, digits, value = 0}) => (
  <span>
    <abbr>{getSymbol(currency)}</abbr>
    {format(value, currency, digits)}
  </span>
);

export default Amount;