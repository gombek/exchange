import React from 'react';
import Balance from '../../components/Balance';
import ExchangeRate from '../../components/ExchangeRate';

const CurrencySlide = ({currency, balance, exchangeRate, exchangeTo}) => (
  <span>
    <Balance value={balance} currency={currency} />
    =
    <ExchangeRate amount={1} rate={exchangeRate} fromCurrency={currency} toCurrency={exchangeTo}/>
  </span>
);

export default CurrencySlide;