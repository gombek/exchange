import React from 'react';
import Amount from '../../atomics/Amount';

const Balance = ({value, currency}) => (
  <span>
    You have
    <Amount value={value} currency={currency} />
  </span>
);

export default Balance;