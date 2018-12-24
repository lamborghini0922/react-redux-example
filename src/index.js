import axios from "axios";
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import giphyApi from "./APIs/giphyAPI";

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
