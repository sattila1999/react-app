import React from "react";
import ReactDOM from "react-dom";
import { UsersProvider } from "./state/UsersProvider";
import { App } from "./views/App";

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
