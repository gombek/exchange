import { makeAction } from '../../utils';

export default mountPoint => ({
  set: makeAction(`widget.exchange.storage-bag.${mountPoint}.set`),
})