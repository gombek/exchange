import React from 'react';
import Amount from '../../atomics/Amount/Amount';

const CurrentRate = ({currency, exchangeRate, exchangeTo}) => (
  <span>
    <Amount value={1} currency={currency} digits={0} />
    =
    <Amount value={exchangeRate} currency={exchangeTo} digits={5} />
  </span>
);

export default CurrentRate;