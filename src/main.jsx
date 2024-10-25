import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./context/MainContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
  <ProductProvider>
      <App />
  </ProductProvider>
    </BrowserRouter>
);
