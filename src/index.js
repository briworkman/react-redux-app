import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import "./app.css";

import CharacterInfo from "./components/CharacterInfo";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Breaking Bad</h1>
      <CharacterInfo />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
