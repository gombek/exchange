import { makeAction } from '../../utils';

export default mountPoint => ({
  setBalance: makeAction(`widget.exchange.wallet.${mountPoint}.set-balance`),
  exchange: makeAction(`widget.exchange.wallet.${mountPoint}.exchange`),
})