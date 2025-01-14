import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToggleThemeProvider } from "./contexts/ToggleThemeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CarrinhoContextProvider } from "./contexts/CarrinhoContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToggleThemeProvider>
        <CarrinhoContextProvider>
          <App />
        </CarrinhoContextProvider>
      </ToggleThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
