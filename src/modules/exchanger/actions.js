import { makeAction } from '../../utils';

export default mountPoint => ({
  setFrom: makeAction(`widget.exchange.exchanger.${mountPoint}.set-from`),
  setTo: makeAction(`widget.exchange.exchanger.${mountPoint}.set-to`),
  setAmount: makeAction(`widget.exchange.exchanger.${mountPoint}.set-amount`),
  setOutcome: makeAction(`widget.exchange.exchanger.${mountPoint}.set-outcome`),
})
