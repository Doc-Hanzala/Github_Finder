import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./Context/Context.jsx";

import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-cdbpaks8dgb1brhi.us.auth0.com;
// Wt5cZGzbvFcask04mZXjcvZkiDPqO63f;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cdbpaks8dgb1brhi.us.auth0.com"
      clientId="Wt5cZGzbvFcask04mZXjcvZkiDPqO63f"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
