import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from "../src/app/store";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Main />
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

