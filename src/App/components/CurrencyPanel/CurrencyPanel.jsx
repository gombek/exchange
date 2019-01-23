import React from 'react';
import cx from 'classnames';
import CurrencySelect from '../../atomics/CurrencySelect';
import Input from '../../atomics/Input';
import Amount from '../../atomics/Amount/Amount';

import './CurrencyPanel.scss';

const CurrencyPanel = ({
  className,
  activeCurrency,
  currencies,
  balance,
  value,
  onValueChange,
  onCurrencyChange,
}) => (
  <div className={cx('currency-panel', className)}>
    <CurrencySelect
      activeCurrency={activeCurrency}
      currencies={currencies}
      onChange={onCurrencyChange}
    />
    <Input
      value={value}
      onChange={onValueChange}
    />
    <div className="currency-panel__balance">You have: <Amount value={balance} currency={activeCurrency} /></div>
  </div>
);

export default CurrencyPanel;