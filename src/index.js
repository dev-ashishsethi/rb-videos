import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./Context/loginContext";
import { VideoProvider } from "./Context/VideoContext";
import { Provider } from "react-redux";
import { store } from "./store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <VideoProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </VideoProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
