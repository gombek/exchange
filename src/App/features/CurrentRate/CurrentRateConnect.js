import { connect } from 'react-redux';
import CurrentRate from './CurrentRate';
import { walletRates } from '../../../modules';


const mapStateToProps = (state, ownProps) => ({
  exchangeRate: walletRates.selectors.getExchange(state, ownProps.currency, ownProps.exchangeTo),
});

export default connect(mapStateToProps)(CurrentRate)