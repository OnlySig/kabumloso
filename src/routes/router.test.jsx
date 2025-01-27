import Home from "../pages/home";
import Product from "../pages/Product";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
describe("Testando as rotas da aplicação", () => {
  it("Deve renderizar a página inicial no path '/'", async () => {
    renderWithQueryClient(<Home />);
    const home = await screen.findByTestId("homeContainer");
    expect(home).toBeInTheDocument();
  });

  it("Deve renderizar a página de um produto no path '/produto/:slug'", async () => {
    const queryCliente = new QueryClient();
    render(
      <QueryClientProvider client={queryCliente}>
        <MemoryRouter initialEntries={["/produto/smartphone-xyz"]}>
          <Routes>
            <Route path="produto/:slug" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );
    const titleProduct = await screen.findByTestId("titleTest");
    expect(titleProduct).toHaveTextContent("Smartphone XYZ");
  });
});
