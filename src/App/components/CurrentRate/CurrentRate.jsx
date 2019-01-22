import React from 'react';
import Amount from '../../atomics/Amount/Amount';
import ChartIcon from './ChartIcon';

import './CurrentRate.scss';

const CurrentRate = ({currency, exchangeRate, exchangeTo}) => (
  <span className="current-rate">
    <ChartIcon />
    <Amount value={1} currency={currency} digits={0} />
    <span> = </span>
    <Amount value={exchangeRate} currency={exchangeTo} digits={5} />
  </span>
);

export default CurrentRate;