import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import * as modules from './modules/index';
import * as appFlows from './app-flows/index';
import initialState from './initialState';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
if (process.env.NODE_ENV !== 'production') {
  Map.prototype.toJSON = function() {
    var obj = {};
    this.forEach((value, key) => obj[key] = value);
    return obj;
  };
  Set.prototype.toJSON = function() {
    var arr = [];
    this.forEach((value) => arr.push(value));
    return arr;
  }
}
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const moduleSagas = Object.values(modules).reduce(
  (acc, module) => [...acc, module.saga && module.saga()],
  [],
);

const flowSagas = Object.values(appFlows).reduce(
  (acc, flow) => [...acc, flow && flow.saga && flow.saga()],
  [],
);

const reducers = Object.values(modules).reduce(
  (acc, module) => ({ ...acc, [module.mountPoint]: module.reducer }),
  {},
);

function* rootSaga() {
  yield all([...moduleSagas, ...flowSagas]);
}


export default (state = {}) => {
  const store = createStore(
    combineReducers(reducers),
    {
      ...initialState,
      ...state,
    },
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
