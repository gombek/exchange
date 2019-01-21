import { connect } from 'react-redux';
import CurrencySlide from './CurrencySlide';
import { wallet, currencies, currenciesFrom } from '../../../modules';


const mapStateToProps = (state, ownProps) => ({
  currencies: ownProps.direction === 'from'
    ? currenciesFrom.selectors.get(state) // locked to USD
    : currencies.selectors.get(state),
  balance: wallet.selectors.getBalance(state, ownProps.currency),
});

export default connect(mapStateToProps)(CurrencySlide)