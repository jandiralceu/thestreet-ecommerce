import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import theme from "./core/theme";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
                <Elements stripe={stripePromise}>
                  <App />
                </Elements>
              </BrowserRouter>
            </SnackbarProvider>
          </ModalProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
