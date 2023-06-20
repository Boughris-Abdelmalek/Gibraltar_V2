import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import GlobalStyles from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.ts";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
