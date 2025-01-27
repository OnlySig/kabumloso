import { renderWithQueryClient } from "../../test-utils";
import { screen } from "@testing-library/react";
import Home from ".";

describe("Teste da página Home", () => {
  it("Deve mostrar uma lista de 12 produtos", async () => {
    renderWithQueryClient(<Home />);

    const produtosRenderizados = await screen.findAllByRole("listitem"); //? essa rule listitem são os filhos do list, o list vai capturar o container ul na HOMEPAGE os listitem vai capturar os li's
    expect(produtosRenderizados.length).toBe(12);
  });
});
