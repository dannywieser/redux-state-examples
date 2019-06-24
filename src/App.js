import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { exampleState } from "./store";
import { ListBoundToMap } from "./ListBoundToMap";
import { ListBoundToArray } from "./ListBoundToArray";
import { ListBoundToSelector } from "./ListBoundToSelector";

const store = createStore(
  exampleState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <span>
          <ListBoundToSelector />
        </span>
      </div>
    </Provider>
  );
}

export default App;
