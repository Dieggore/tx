import './App.css';
import React from 'react';
import { Provider } from 'react-redux'
import Layout from './Layout'
import store from './store'

export default () => (
  <Provider store={store}>
    <Layout/>
  </Provider>
);
