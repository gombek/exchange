import React from 'react';
import ExchangeRate from '../../components/ExchangeRate';

const CurrentRate = ({currency, exchangeRate, exchangeTo}) => (
  <div>
    <ExchangeRate amount={1} rate={exchangeRate} fromCurrency={currency} toCurrency={exchangeTo}/>
  </div>
);

export default CurrentRate;