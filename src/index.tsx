import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

import "./index.scss";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import theme from "./core/theme";
import { ProductProvider, UserProvider } from "./presentation/contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModalProvider rootComponent={TransitionGroup}>
        <BrowserRouter>
          <UserProvider>
            {/* Move ProductProvider to Shop Container  */}
            <ProductProvider>
              <App />
            </ProductProvider>
          </UserProvider>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
