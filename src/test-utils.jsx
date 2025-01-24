import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const queryClient = new QueryClient();

const renderWithQueryClient = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {<BrowserRouter>{ui}</BrowserRouter>}
    </QueryClientProvider>
  );
};

export * from "@testing-library/react";
export { renderWithQueryClient };
