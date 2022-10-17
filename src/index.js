import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.css";
import "./styles/utility.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
