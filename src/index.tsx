import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-circular-progressbar/dist/styles.css";
import store from "./store/store"

ReactDOM.render(
    <Provider store={store}>
      <App />
      </Provider>,
  document.getElementById('root')
);

