import { renderWithQueryClient, screen } from "../../test-utils";
import Aside from ".";

jest.mock("../../hooks/useCarrinho", () => ({
  useCarrinho: jest.fn(),
  useCarrinhoPreco: jest.fn(),
}));
describe("Testes do componente Aside vulgo carrinho", () => {
  it("Deve renderizar o titulo do carrinho", async () => {
    renderWithQueryClient(<Aside />);
    const titleCarrinho = await screen.findByText("Carrinho");
    expect(titleCarrinho).toBeInTheDocument();
  });

  it("Deve renderizar os produtos do carrinho com os hooks", async () => {
    const mockCarrinho = [
      {
        id: "asd1",
        nome: "test1",
        categoria: "cat1",
        preco: 123,
        quantidade: 2,
      },
      {
        id: "asd2",
        nome: "test2",
        categoria: "cat2",
        preco: 123,
        quantidade: 2,
      },
      {
        id: "asd3",
        nome: "test3",
        categoria: "cat3",
        preco: 123,
        quantidade: 2,
      },
    ];
    const {
      useCarrinho,
      useCarrinhoPreco,
    } = require("../../hooks/useCarrinho");
    useCarrinho.mockReturnValue({
      data: mockCarrinho,
      isLoading: false,
      error: null,
    });

    useCarrinhoPreco.mockReturnValue("R$ 369,00");
    const { rerender } = renderWithQueryClient(<Aside />);

    const carrinhoHtml = await screen.findAllByRole("listitem");
    expect(carrinhoHtml).toHaveLength(3);
  });
});
