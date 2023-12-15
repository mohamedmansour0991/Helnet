import React from "react";
import ReactDOM from "react-dom/client";
import "./services/i18n/i18n.js";

import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
