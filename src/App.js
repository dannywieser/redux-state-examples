import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { exampleState } from "./store";
import { ListBoundToMap } from "./ListBoundToMap";
import { ListBoundToArray } from "./ListBoundToArray";

const store = createStore(
  exampleState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <span>
          <ListBoundToArray />
        </span>
      </div>
    </Provider>
  );
}

export default App;
