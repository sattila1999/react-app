import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./state/store";
import { UsersProvider } from "./state/UsersProvider";
import { App } from "./views/App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UsersProvider>
        <App />
      </UsersProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
