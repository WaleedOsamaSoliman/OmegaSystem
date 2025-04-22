import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "rsuite/dist/rsuite.min.css";
import "@css/root.css";
import { CustomProvider } from "rsuite";


createRoot(document.getElementById("root")).render(
  <CustomProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CustomProvider>
);
