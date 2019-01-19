import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../createStore';
import './App.scss';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <section className="app">
    </section>
  </Provider>
);

export default App;