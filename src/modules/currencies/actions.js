import { makeAction } from '../../utils';

export default mountPoint => ({
  add: makeAction(`widget.exchange.currencies.${mountPoint}.add`),
  remove: makeAction(`widget.exchange.currencies.${mountPoint}.remove`),
})