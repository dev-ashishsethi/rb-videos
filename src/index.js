import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./Context/loginContext";
import { VideoProvider } from "./Context/VideoContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        
        <VideoProvider>
          <App />
        </VideoProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
