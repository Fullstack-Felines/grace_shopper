import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
// import "./style/index.css";
import KittensProvider from "./Providers/KittensProvider";
import AuthProvider from "./Providers/AuthProvider";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <KittensProvider>
          <App />
        </KittensProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
