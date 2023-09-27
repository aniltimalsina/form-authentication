import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SignUpForm from "./signup.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <SignUpForm />
  </React.StrictMode>
);
