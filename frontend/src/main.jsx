// src/main.jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "@radix-ui/themes/styles.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Theme } from "@radix-ui/themes/dist/cjs/components/index.js";

const pk = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!pk) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

createRoot(rootEl).render(
  <StrictMode>
    <ClerkProvider publishableKey={pk}>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
