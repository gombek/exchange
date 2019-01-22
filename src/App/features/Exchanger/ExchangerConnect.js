import { connect } from 'react-redux';
import Exchanger from './Exchanger';
import { wallet, currencies, walletRates, exchanger } from '../../../modules';


const mapStateToProps = (state) => {
  const from = exchanger.selectors.getFrom(state);
  const to = exchanger.selectors.getTo(state);

  return {
    rate: walletRates.selectors.getExchange(state, from, to),
    currencies: currencies.selectors.get(state),
    from,
    fromValue: exchanger.selectors.getAmount(state),
    fromBalance: wallet.selectors.getBalance(state, from),
    to,
    toValue: exchanger.selectors.getOutcome(state),
    toBalance: wallet.selectors.getBalance(state, to),
  }
};

const mapDispatchToProps = dispatch => ({
  onFromValueChange(value, rate) {
    dispatch(exchanger.actions.setAmount({value, rate}));
  },
  onFromCurrencyChange(currency) {
    dispatch(exchanger.actions.setFrom(currency));
  },
  onToValueChange(value, rate) {
    dispatch(exchanger.actions.setOutcome({value, rate}));
  },
  onToCurrencyChange(currency) {
    dispatch(exchanger.actions.setTo(currency));
  },
  onSubmit({from, to, rate, amount}) {
    dispatch(wallet.actions.exchange({from, to, rate, amount}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exchanger)