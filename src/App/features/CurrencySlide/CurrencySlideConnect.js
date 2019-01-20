import { connect } from 'react-redux';
import CurrencySlide from './CurrencySlide';
import { wallet, walletRates } from '../../../modules';


const mapStateToProps = (state, ownProps) => ({
  balance: wallet.selectors.getBalance(state, ownProps.currency),
  exchangeRate: walletRates.selectors.getExchange(state, ownProps.currency, ownProps.exchangeTo),
});

export default connect(mapStateToProps)(CurrencySlide)