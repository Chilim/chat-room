import React from 'react';
import './styles/App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import { store } from './store';

export default () => {
  return (
    <div className="App">
      <Sidebar contacts={store.getState().contacts} />
      <Main />
    </div>
  );
};
