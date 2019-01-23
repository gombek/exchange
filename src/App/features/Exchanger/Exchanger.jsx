import React, { Component } from 'react';
import CurrencyPanel from '../../components/CurrencyPanel';
import CurrentRate from '../../components/CurrentRate';
import Button from '../../atomics/Button';

import './Exchanger.scss';

const onValueChange = (handler, rate) => value => {
  if (typeof handler !== 'function') return;
  handler(value, rate);
};

const onSubmitHandler = handler => ({from, to, rate, amount}) => () => {
  if (typeof handler !== 'function') return;
  handler({from, to, rate, amount});
};

class Exchanger extends Component {
  componentDidMount() {
    this.props.startLiveRates();
  }

  componentWillUnmount() {
    this.props.stopLiveRates();
  }

  render() {
    let {
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
    } = this.props;

    return (
      <div className="exchanger">
        <CurrencyPanel
          value={fromValue}
          balance={fromBalance}
          activeCurrency={from}
          currencies={
            /* Locked to USD due to the API subscription limitation.
               For different currencies, the exchange rates
               wont be fetch until the subscription upgrade.
               Change to `currencies` to unlock. */
            [from]
          }
          onValueChange={onValueChange(onFromValueChange, rate)}
          onCurrencyChange={onFromCurrencyChange}
        />
        <div className="exchanger__rate">
          <CurrentRate
            currency={from}
            exchangeTo={to}
            exchangeRate={rate}
          />
        </div>
        <CurrencyPanel
          className="exchanger__to"
          value={toValue}
          balance={toBalance}
          activeCurrency={to}
          currencies={currencies}
          onValueChange={onValueChange(onToValueChange, rate)}
          onCurrencyChange={onToCurrencyChange}
        />
        <div className="exchanger__actions">
          <Button
            onClick={onSubmitHandler(onSubmit)({ from, to, rate, amount: fromValue })}
          >
            Exchange
          </Button>
        </div>
      </div>
    );
  }
}

export default Exchanger;