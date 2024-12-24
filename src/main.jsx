import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import ScrollToTop from "./pages/ScrollToTop";


import "./scss/main.scss";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);
