import React from "react";
//import ReactDOM from "react-dom";

import App from "./App";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
//import Page from './Page';

const Apps = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Apps />, document.getElementById("root"));
