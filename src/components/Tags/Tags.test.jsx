import { render, screen } from "@testing-library/react";
import Tags from ".";
import { renderWithQueryClient } from "../../test-utils";

jest.mock("../../hooks/useProdutos", () => ({
  useProdutosCategorias: jest.fn(),
}));
describe("Deve renderizar o componente Tags", () => {
  it("Deve mostrar a quantidade certa de tags", () => {
    // Mock do hook para retornar 10 categorias
    const mockCategorias = Array.from(
      { length: 10 },
      (_, i) => `Categoria ${i + 1}`
    );
    const { useProdutosCategorias } = require("../../hooks/useProdutos");
    useProdutosCategorias.mockReturnValue(mockCategorias);

    renderWithQueryClient(<Tags />);

    // Busca os links gerados para cada tag
    const listaDeLinks = screen.getAllByRole("link");

    // Verifica se o array de links tem 10 elementos
    expect(listaDeLinks).toHaveLength(10);
  });

  it("E os estilos devem ser controlados pela prop toggle", () => {
    const tags = [
      "Eletrônicos",
      "Notebooks",
      "Acessórios",
      "Eletrodomésticos",
      "Livros",
      "Computador",
      "Monitores",
      "Televisores",
      "Periféricos",
      "Redes",
    ];
    const { useProdutosCategorias } = require("../../hooks/useProdutos");
    useProdutosCategorias.mockReturnValue(tags);

    renderWithQueryClient(
      <Tags toggleDepartamento={true} setToggleDepartamento={jest.fn()} />
    );

    const tagsContainer = screen.getByTestId("containerList");
    expect(tagsContainer).toHaveClass("max-w-[1490px] relative");

    renderWithQueryClient(
      <Tags toggleDepartamento={false} setToggleDepartamento={jest.fn()} />
    );
    const tagsContainer2 = screen.queryAllByTestId("containerList");
    expect(tagsContainer2[1]).toHaveClass("hidden");
  });
});
