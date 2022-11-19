import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";
import { SnackbarProvider } from "notistack";

import "./index.scss";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import theme from "./core/theme";
import { CartProvider } from "./presentation/contexts";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalProvider rootComponent={TransitionGroup}>
          <SnackbarProvider
            preventDuplicate
            maxSnack={4}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={3000}
          >
            <BrowserRouter>
              <CartProvider>
                <App />
              </CartProvider>
            </BrowserRouter>
          </SnackbarProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
