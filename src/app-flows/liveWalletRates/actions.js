import { makeAction } from '../../utils';

export default {
  startLive: makeAction('widget.exchange.live-wallet-rates.flow.start-live'),
  stopLive: makeAction('widget.exchange.live-wallet-rates.flow.stop-live'),
};
