import { makeAction } from '../utils';

export default mountPoint => ({
  set: makeAction(`widget.exchange.rates.${mountPoint}.set`),
})