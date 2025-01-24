import { renderWithQueryClient, screen } from "../../test-utils";
import Aside from ".";

describe("Testes do componente Aside vulgo carrinho", () => {
  it("Deve renderizar o titulo do carrinho", async () => {
    renderWithQueryClient(<Aside />);
    const titleCarrinho = await screen.findByText("Carrinho");
    expect(titleCarrinho).toBeInTheDocument();
  });
});
