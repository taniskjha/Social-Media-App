import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Router from "./router";
import "./index.css";
import AppProvider from "./store/AppProvider";
import SnackbarProvider from "react-simple-snackbar";

const App = () => {
  return (
    <ErrorBoundary>
      <SnackbarProvider
        hideIconVariant
        maxSnack={3}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <AppProvider>
          <Router />
        </AppProvider>
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

export default App;
