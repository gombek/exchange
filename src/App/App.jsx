import React from 'react';
import { Provider } from 'react-redux';

import Exchanger from './pages/Exchanger';
import createStore from '../createStore';

import './App.scss';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <section className="app">
      <Exchanger />
    </section>
  </Provider>
);

export default App;