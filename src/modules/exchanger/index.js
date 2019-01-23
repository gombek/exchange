import createSelectors from './selectors';
import createActions from './actions';
import createReducer from './reducer';

const create = mountPoint => {
  const actions = createActions(mountPoint);
  const selectors = createSelectors(mountPoint);
  const reducer = createReducer(actions);

  return {
    mountPoint,
    actions,
    selectors,
    reducer,
  }
};

export default create;