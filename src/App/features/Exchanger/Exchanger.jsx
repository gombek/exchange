import React from 'react';
import CurrencyPanel from '../../components/CurrencyPanel';
import CurrentRate from '../../components/CurrentRate';
import Button from '../../atomics/Button';

const onValueChange = (handler, rate) => value => {
  if (typeof handler !== 'function') return;
  handler(value, rate);
};

const onSubmitHandler = handler => ({from, to, rate, amount}) => () => {
  if (typeof handler !== 'function') return;
  handler({from, to, rate, amount});
};

const Exchanger = ({
  rate,
  currencies,
  onSubmit,
  from,
  fromValue,
  fromBalance,
  onFromValueChange,
  onFromCurrencyChange,
  to,
  toValue,
  toBalance,
  onToValueChange,
  onToCurrencyChange,
}) => (
  <div>
    <CurrencyPanel
      value={fromValue}
      balance={fromBalance}
      activeCurrency={from}
      currencies={[from] /* Locked to USD due to the API subscription limitation */}
      onValueChange={onValueChange(onFromValueChange, rate)}
      onCurrencyChange={onFromCurrencyChange}
    />
    <CurrentRate
      currency={from}
      exchangeTo={to}
      exchangeRate={rate}
    />
    <CurrencyPanel
      value={toValue}
      balance={toBalance}
      activeCurrency={to}
      currencies={currencies}
      onValueChange={onValueChange(onToValueChange, rate)}
      onCurrencyChange={onToCurrencyChange}
    />
    <Button
      onClick={onSubmitHandler(onSubmit)({from, to, rate, amount: fromValue})}
    >
      Exchange
    </Button>
  </div>
);

export default Exchanger;