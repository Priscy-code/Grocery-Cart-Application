import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GroceryApp from "./assets/components/Grocery";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GroceryApp />
  </StrictMode>
);
