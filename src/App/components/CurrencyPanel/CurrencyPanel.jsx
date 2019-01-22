import React from 'react';
import CurrencySelect from '../../atomics/CurrencySelect';
import Input from '../../atomics/Input';
import Amount from '../../atomics/Amount/Amount';

const CurrencyPanel = ({
  activeCurrency,
  currencies,
  balance,
  value,
  onValueChange,
  onCurrencyChange,
}) => (
  <div>
    <CurrencySelect
      activeCurrency={activeCurrency}
      currencies={currencies}
      onChange={onCurrencyChange}
    />
    <Input
      value={value}
      onChange={onValueChange}
    />
    <div>You have <Amount value={balance} currency={activeCurrency} /></div>
  </div>
);

export default CurrencyPanel;