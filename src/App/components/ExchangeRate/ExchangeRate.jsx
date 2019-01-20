import React from 'react';
import Amount from '../../atomics/Amount';

const ExchangeRate = ({amount, rate, fromCurrency, toCurrency}) => (
  <span>
    <Amount value={amount} currency={fromCurrency} />
    =
    <Amount value={amount*rate} currency={toCurrency} />
  </span>
);

export default ExchangeRate;