import React from 'react';
import Balance from '../../components/Balance';
import CurrencySelect from '../../components/CurrencySelect';
import Input from '../../components/Input';

const CurrencySlide = ({currency, currencies, balance}) => (
  <div>
    <CurrencySelect activeCurrency={currency} currencies={currencies} />
    <Input />
    <Balance value={balance} currency={currency} />
  </div>
);

export default CurrencySlide;