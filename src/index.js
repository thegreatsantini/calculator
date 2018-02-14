import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
