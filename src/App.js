import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PonyNote from "./components/PonyNote";
import { NotFound } from "./components/NotFound";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ponyApp from "./reducers";


let store = createStore(ponyApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_HOST)

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PonyNote} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
