import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MockDataProvider } from "./context/MockDataContext";
import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <MockDataProvider>
          <App />
        </MockDataProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);