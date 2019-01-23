import React from 'react';
import { Provider } from 'react-redux';

import ExchangeWidget from './pages/ExchangeWidget';
import createStore from '../createStore';

import './App.scss';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <section className="app">
      <ExchangeWidget />
    </section>
  </Provider>
);

export default App;