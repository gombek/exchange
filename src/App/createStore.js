import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
// import * as modules from './modules';
// import * as appFlows from './flows';
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
  }
}
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// const moduleSagas = Object.values(modules).reduce(
//   (acc, module) => [...acc, module.saga && module.saga()],
//   [],
// );
//
// const flowSagas = Object.values(appFlows).reduce(
//   (acc, flow) => [...acc, flow && flow.saga && flow.saga()],
//   [],
// );
//
// const reducers = Object.values(modules).reduce(
//   (acc, module) => ({ ...acc, [module.mountPoint]: module.reducer }),
//   { ...fake },
// );

// function* rootSaga() {
//   yield all([...moduleSagas, ...flowSagas]);
// }

const reducers = {};

export default (state = {}) => {
  const store = createStore(
    combineReducers(reducers),
    {
      ...initialState,
      ...state,
    },
    enhancer,
  );
  // sagaMiddleware.run(rootSaga);
  return store;
};
